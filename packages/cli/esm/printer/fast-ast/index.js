import { traverse } from "@webassemblyjs/ast";

var t = require("@webassemblyjs/ast");

var i = 0;

function generateUniqueId() {
  i++;
  return "unknown_" + i;
}

export function print(ast) {
  var out = {
    imports: [],
    exports: {},
    functions: {},
    globals: []
  };
  traverse(ast, {
    ModuleExport: function (_ModuleExport) {
      function ModuleExport(_x) {
        return _ModuleExport.apply(this, arguments);
      }

      ModuleExport.toString = function () {
        return _ModuleExport.toString();
      };

      return ModuleExport;
    }(function (_ref) {
      var node = _ref.node;

      if (node.descr.exportType === "Func") {
        out.exports[node.descr.id.value] = node;
      }
    }),
    Func: function (_Func) {
      function Func(_x2) {
        return _Func.apply(this, arguments);
      }

      Func.toString = function () {
        return _Func.toString();
      };

      return Func;
    }(function (_ref2) {
      var node = _ref2.node;

      if (typeof node.name !== "string") {
        node.name = t.identifier(generateUniqueId());
      }

      out.functions[node.name.value] = node;
    }),
    Global: function (_Global) {
      function Global(_x3) {
        return _Global.apply(this, arguments);
      }

      Global.toString = function () {
        return _Global.toString();
      };

      return Global;
    }(function (_ref3) {
      var node = _ref3.node;
      out.globals.push(node.globalType);
    }),
    ModuleImport: function (_ModuleImport) {
      function ModuleImport(_x4) {
        return _ModuleImport.apply(this, arguments);
      }

      ModuleImport.toString = function () {
        return _ModuleImport.toString();
      };

      return ModuleImport;
    }(function (_ref4) {
      var node = _ref4.node;
      out.imports.push(node);
    })
  });
  console.log(JSON.stringify(out, null, 4));
}