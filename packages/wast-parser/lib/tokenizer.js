"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenize = tokenize;
exports.tokens = exports.keywords = void 0;

var _helperFsm = require("@webassemblyjs/helper-fsm");

var _helperCodeFrame = require("@webassemblyjs/helper-code-frame");

// eslint-disable-next-line
function getCodeFrame(source, line, column) {
  var loc = {
    start: {
      line: line,
      column: column
    }
  };
  return "\n" + (0, _helperCodeFrame.codeFrameFromSource)(source, loc) + "\n";
}

var WHITESPACE = /\s/;
var PARENS = /\(|\)/;
var LETTERS = /[a-z0-9_/]/i;
var idchar = /[a-z0-9!#$%&*+./:<=>?@\\[\]^_`|~-]/i;
var valtypes = ["i32", "i64", "f32", "f64"];
var NUMBERS = /[0-9|.|_]/;
var NUMBER_KEYWORDS = /nan|inf/;

function isNewLine(_char) {
  return _char.charCodeAt(0) === 10 || _char.charCodeAt(0) === 13;
}

function Token(type, value, start, end) {
  var opts = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var token = {
    type: type,
    value: value,
    loc: {
      start: start,
      end: end
    }
  };

  if (Object.keys(opts).length > 0) {
    // $FlowIgnore
    token["opts"] = opts;
  }

  return token;
}

var tokenTypes = {
  openParen: "openParen",
  closeParen: "closeParen",
  number: "number",
  string: "string",
  name: "name",
  identifier: "identifier",
  valtype: "valtype",
  dot: "dot",
  comment: "comment",
  equal: "equal",
  keyword: "keyword"
};
var keywords = {
  module: "module",
  func: "func",
  param: "param",
  result: "result",
  "export": "export",
  loop: "loop",
  block: "block",
  "if": "if",
  then: "then",
  "else": "else",
  call: "call",
  call_indirect: "call_indirect",
  "import": "import",
  memory: "memory",
  shared: "shared",
  table: "table",
  global: "global",
  anyfunc: "anyfunc",
  mut: "mut",
  data: "data",
  type: "type",
  elem: "elem",
  start: "start",
  offset: "offset"
};
exports.keywords = keywords;
var NUMERIC_SEPARATOR = "_";
/**
 * Build the FSM for number literals
 */

// $FlowIgnore
var numberLiteralFSM = new _helperFsm.FSM({
  START: [(0, _helperFsm.makeTransition)(/-|\+/, "AFTER_SIGN"), (0, _helperFsm.makeTransition)(/nan:0x/, "NAN_HEX", {
    n: 6
  }), (0, _helperFsm.makeTransition)(/nan|inf/, "STOP", {
    n: 3
  }), (0, _helperFsm.makeTransition)(/0x/, "HEX", {
    n: 2
  }), (0, _helperFsm.makeTransition)(/[0-9]/, "DEC"), (0, _helperFsm.makeTransition)(/\./, "DEC_FRAC")],
  AFTER_SIGN: [(0, _helperFsm.makeTransition)(/nan:0x/, "NAN_HEX", {
    n: 6
  }), (0, _helperFsm.makeTransition)(/nan|inf/, "STOP", {
    n: 3
  }), (0, _helperFsm.makeTransition)(/0x/, "HEX", {
    n: 2
  }), (0, _helperFsm.makeTransition)(/[0-9]/, "DEC"), (0, _helperFsm.makeTransition)(/\./, "DEC_FRAC")],
  DEC_FRAC: [(0, _helperFsm.makeTransition)(/[0-9]/, "DEC_FRAC", {
    allowedSeparator: NUMERIC_SEPARATOR
  }), (0, _helperFsm.makeTransition)(/e|E/, "DEC_SIGNED_EXP")],
  DEC: [(0, _helperFsm.makeTransition)(/[0-9]/, "DEC", {
    allowedSeparator: NUMERIC_SEPARATOR
  }), (0, _helperFsm.makeTransition)(/\./, "DEC_FRAC"), (0, _helperFsm.makeTransition)(/e|E/, "DEC_SIGNED_EXP")],
  DEC_SIGNED_EXP: [(0, _helperFsm.makeTransition)(/\+|-/, "DEC_EXP"), (0, _helperFsm.makeTransition)(/[0-9]/, "DEC_EXP")],
  DEC_EXP: [(0, _helperFsm.makeTransition)(/[0-9]/, "DEC_EXP", {
    allowedSeparator: NUMERIC_SEPARATOR
  })],
  HEX: [(0, _helperFsm.makeTransition)(/[0-9|A-F|a-f]/, "HEX", {
    allowedSeparator: NUMERIC_SEPARATOR
  }), (0, _helperFsm.makeTransition)(/\./, "HEX_FRAC"), (0, _helperFsm.makeTransition)(/p|P/, "HEX_SIGNED_EXP")],
  HEX_FRAC: [(0, _helperFsm.makeTransition)(/[0-9|A-F|a-f]/, "HEX_FRAC", {
    allowedSeparator: NUMERIC_SEPARATOR
  }), (0, _helperFsm.makeTransition)(/p|P|/, "HEX_SIGNED_EXP")],
  HEX_SIGNED_EXP: [(0, _helperFsm.makeTransition)(/[0-9|+|-]/, "HEX_EXP")],
  HEX_EXP: [(0, _helperFsm.makeTransition)(/[0-9]/, "HEX_EXP", {
    allowedSeparator: NUMERIC_SEPARATOR
  })],
  NAN_HEX: [(0, _helperFsm.makeTransition)(/[0-9|A-F|a-f]/, "NAN_HEX", {
    allowedSeparator: NUMERIC_SEPARATOR
  })],
  STOP: []
}, "START", "STOP");

function tokenize(input) {
  var current = 0;
  var _char2 = input[current]; // Used by SourceLocation

  var column = 1;
  var line = 1;
  var tokens = [];
  /**
   * Creates a pushToken function for a given type
   */

  function pushToken(type) {
    return function (v) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var startColumn = opts.startColumn || column - String(v).length;
      delete opts.startColumn;
      var endColumn = opts.endColumn || startColumn + String(v).length - 1;
      delete opts.endColumn;
      var start = {
        line: line,
        column: startColumn
      };
      var end = {
        line: line,
        column: endColumn
      };
      tokens.push(Token(type, v, start, end, opts));
    };
  }
  /**
   * Functions to save newly encountered tokens
   */


  var pushCloseParenToken = pushToken(tokenTypes.closeParen);
  var pushOpenParenToken = pushToken(tokenTypes.openParen);
  var pushNumberToken = pushToken(tokenTypes.number);
  var pushValtypeToken = pushToken(tokenTypes.valtype);
  var pushNameToken = pushToken(tokenTypes.name);
  var pushIdentifierToken = pushToken(tokenTypes.identifier);
  var pushKeywordToken = pushToken(tokenTypes.keyword);
  var pushDotToken = pushToken(tokenTypes.dot);
  var pushStringToken = pushToken(tokenTypes.string);
  var pushCommentToken = pushToken(tokenTypes.comment);
  var pushEqualToken = pushToken(tokenTypes.equal);
  /**
   * Can be used to look at the next character(s).
   *
   * The default behavior `lookahead()` simply returns the next character without consuming it.
   * Letters are always returned in lowercase.
   *
   * @param {number} length How many characters to query. Default = 1
   * @param {number} offset How many characters to skip forward from current one. Default = 1
   *
   */

  function lookahead() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return input.substring(current + offset, current + offset + length).toLowerCase();
  }
  /**
   * Advances the cursor in the input by a certain amount
   *
   * @param {number} amount How many characters to consume. Default = 1
   */


  function eatCharacter() {
    var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    column += amount;
    current += amount;
    _char2 = input[current];
  }

  while (current < input.length) {
    // ;;
    if (_char2 === ";" && lookahead() === ";") {
      var startColumn = column;
      eatCharacter(2);
      var text = "";

      while (!isNewLine(_char2)) {
        text += _char2;
        eatCharacter();

        if (_char2 === undefined) {
          break;
        }
      }

      var endColumn = column;
      pushCommentToken(text, {
        type: "leading",
        startColumn: startColumn,
        endColumn: endColumn
      });
      continue;
    } // (;


    if (_char2 === "(" && lookahead() === ";") {
      var _startColumn = column;
      eatCharacter(2);
      var _text = ""; // ;)

      while (true) {
        _char2 = input[current];

        if (_char2 === ";" && lookahead() === ")") {
          eatCharacter(2);
          break;
        }

        _text += _char2;
        eatCharacter();

        if (isNewLine(_char2)) {
          line++;
          column = 0;
        }
      }

      var _endColumn = column;
      pushCommentToken(_text, {
        type: "block",
        startColumn: _startColumn,
        endColumn: _endColumn
      });
      continue;
    }

    if (_char2 === "(") {
      pushOpenParenToken(_char2);
      eatCharacter();
      continue;
    }

    if (_char2 === "=") {
      pushEqualToken(_char2);
      eatCharacter();
      continue;
    }

    if (_char2 === ")") {
      pushCloseParenToken(_char2);
      eatCharacter();
      continue;
    }

    if (isNewLine(_char2)) {
      line++;
      eatCharacter();
      column = 0;
      continue;
    }

    if (WHITESPACE.test(_char2)) {
      eatCharacter();
      continue;
    }

    if (_char2 === "$") {
      var _startColumn2 = column;
      eatCharacter();
      var value = "";

      while (idchar.test(_char2)) {
        value += _char2;
        eatCharacter();
      }

      var _endColumn2 = column;
      pushIdentifierToken(value, {
        startColumn: _startColumn2,
        endColumn: _endColumn2
      });
      continue;
    }

    if (NUMBERS.test(_char2) || NUMBER_KEYWORDS.test(lookahead(3, 0)) || _char2 === "-" || _char2 === "+") {
      var _startColumn3 = column;

      var _value = numberLiteralFSM.run(input.slice(current));

      if (_value === "") {
        throw new Error(getCodeFrame(input, line, column) + "Unexpected character " + JSON.stringify(_char2));
      }

      pushNumberToken(_value, {
        startColumn: _startColumn3
      });
      eatCharacter(_value.length);

      if (_char2 && !PARENS.test(_char2) && !WHITESPACE.test(_char2)) {
        throw new Error(getCodeFrame(input, line, column) + "Unexpected character " + JSON.stringify(_char2));
      }

      continue;
    }

    if (_char2 === '"') {
      var _startColumn4 = column;
      var _value2 = "";
      eatCharacter(); // "

      while (_char2 !== '"') {
        if (isNewLine(_char2)) {
          throw new Error(getCodeFrame(input, line, column) + "Unexpected character " + JSON.stringify(_char2));
        }

        _value2 += _char2;
        eatCharacter(); // char
      }

      eatCharacter(); // "

      var _endColumn3 = column;
      pushStringToken(_value2, {
        startColumn: _startColumn4,
        endColumn: _endColumn3
      });
      continue;
    }

    if (LETTERS.test(_char2)) {
      var _value3 = "";
      var _startColumn5 = column;

      while (_char2 && LETTERS.test(_char2)) {
        _value3 += _char2;
        eatCharacter();
      }
      /*
       * Handle MemberAccess
       */


      if (_char2 === ".") {
        var dotStartColumn = column;

        if (valtypes.indexOf(_value3) !== -1) {
          pushValtypeToken(_value3, {
            startColumn: _startColumn5
          });
        } else {
          pushNameToken(_value3);
        }

        while (_char2 === ".") {
          eatCharacter(); // Eat the dot

          _value3 = "";
          var nameStartColumn = column;

          while (LETTERS.test(_char2)) {
            _value3 += _char2;
            eatCharacter();
          }

          pushDotToken(".", {
            startColumn: dotStartColumn
          });
          pushNameToken(_value3, {
            startColumn: nameStartColumn
          });
        }

        continue;
      }
      /*
       * Handle keywords
       */
      // $FlowIgnore


      if (typeof keywords[_value3] === "string") {
        pushKeywordToken(_value3, {
          startColumn: _startColumn5
        });
        continue;
      }
      /*
       * Handle types
       */


      if (valtypes.indexOf(_value3) !== -1) {
        pushValtypeToken(_value3, {
          startColumn: _startColumn5
        });
        continue;
      }
      /*
       * Handle literals
       */


      pushNameToken(_value3, {
        startColumn: _startColumn5
      });
      continue;
    }

    throw new Error(getCodeFrame(input, line, column) + "Unexpected character " + JSON.stringify(_char2));
  }

  return tokens;
}

var tokens = tokenTypes;
exports.tokens = tokens;