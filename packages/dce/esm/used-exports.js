function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = require("babylon"),
    parse = _require.parse;

var traverse = require("@babel/traverse")["default"];

var t = require("@babel/types");

function identEq(l, r) {
  return l.name === r.name;
}

function parseSource(source) {
  return parse(source, {
    sourceType: "module",
    plugins: ["jsx"]
  });
}
/**
 * We found a local binding from the wasm binary.
 *
 * `import x from 'module.wasm'`
 *         ^
 */


function onLocalModuleBinding(ident, ast, acc) {
  traverse(ast, {
    CallExpression: function CallExpression(_ref) {
      var callExpression = _ref.node;

      // left must be a member expression
      if (t.isMemberExpression(callExpression.callee) === false) {
        return;
      }

      var memberExpression = callExpression.callee;
      /**
       * Search for `makeX().then(...)`
       */

      if (t.isCallExpression(memberExpression.object) && memberExpression.object.callee.name === ident.name && memberExpression.property.name === "then") {
        var _callExpression$argum = _slicedToArray(callExpression.arguments, 1),
            thenFnBody = _callExpression$argum[0];

        if (typeof thenFnBody === "undefined") {
          return;
        }

        onInstanceThenFn(thenFnBody, acc);
      }
    }
  });
}
/**
 * We found the function handling the module instance
 *
 * `makeX().then(...)`
 */


function onInstanceThenFn(fn, acc) {
  if (t.isArrowFunctionExpression(fn) === false) {
    throw new Error("Unsupported function type: " + fn.type);
  }

  var _fn$params = _slicedToArray(fn.params, 1),
      localIdent = _fn$params[0];
  /**
   * `then(({exports}) => ...)`
   *
   * We need to resolve the identifier (binding) from the ObjectPattern.
   *
   * TODO(sven): handle renaming the binding here
   */


  if (t.isObjectPattern(localIdent) === true) {
    // ModuleInstance has the exports prop by spec
    localIdent = t.identifier("exports");
  }

  traverse(fn.body, {
    noScope: true,
    MemberExpression: function MemberExpression(path) {
      var _path$node = path.node,
          object = _path$node.object,
          property = _path$node.property;
      /**
       * Search for `localIdent.exports`
       */

      if (identEq(object, localIdent) === true && t.isIdentifier(property, {
        name: "exports"
      })) {
        /**
         * We are looking for the right branch of the parent MemberExpression:
         * `(localIdent.exports).x`
         *                       ^
         */
        var _property = path.parentPath.node.property; // Found an usage of an export

        acc.push(_property.name);
        path.stop();
      } else if (identEq(object, localIdent) === true) {
        /**
         * `exports` might be a local binding (from destructuring)
         */
        // Found an usage of an export
        acc.push(property.name);
        path.stop();
      }
    }
  });
}

module.exports = function (source) {
  var usedExports = [];
  var ast = parseSource(source);
  traverse(ast, {
    ImportDeclaration: function ImportDeclaration(path) {
      var _path$node$specifiers = _slicedToArray(path.node.specifiers, 1),
          specifier = _path$node$specifiers[0];

      if (t.isImportDefaultSpecifier(specifier)) {
        onLocalModuleBinding(specifier.local, ast, usedExports);
        path.stop();
      }
    }
  });
  return usedExports;
};