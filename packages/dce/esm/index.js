var _require = require("@webassemblyjs/ast"),
    traverse = _require.traverse;

var _require2 = require("@webassemblyjs/wasm-parser"),
    decode = _require2.decode;

var _require3 = require("@webassemblyjs/wast-parser"),
    parse = _require3.parse;

var _require4 = require("@webassemblyjs/wast-printer"),
    print = _require4.print;

var libwabt = require("./libwabt");

var removeFunc = require("./removal");

var countRefByName = require("./reference-couting");

module.exports = function (buff, usedExports) {
  function isUnused(moduleExport) {
    return usedExports.indexOf(moduleExport.name) === -1;
  }

  function canRemove(moduleExport) {
    var funcName = moduleExport.descr.id.value; // Check if it's not referenced elsewhere.

    var refCount = countRefByName(ast, funcName);

    if (refCount > 1) {
      return false;
    } else {
      return true;
    }
  }

  function getModuleExports(ast) {
    var moduleExports = [];
    traverse(ast, {
      ModuleExport: function ModuleExport(_ref) {
        var node = _ref.node;
        moduleExports.push(node);
      }
    });
    return moduleExports;
  }

  var ast;

  if (typeof buff === "string") {
    ast = parse(buff);
  } else {
    ast = decode(buff);
  } // Before
  // console.log(printers.printWAST(ast));


  getModuleExports(ast).filter(isUnused).filter(canRemove).forEach(function (e) {
    return removeFunc(e, ast);
  });
  var wast = print(ast); // To wasm

  var m = libwabt.parseWat("out.wast", wast);
  m.resolveNames();
  m.validate();

  var _m$toBinary = m.toBinary({
    log: true,
    write_debug_names: true
  }),
      buffer = _m$toBinary.buffer; // After
  // console.log(printers.printWAST(parsers.parseWASM(buffer)));


  return buffer;
};