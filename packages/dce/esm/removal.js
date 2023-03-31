var t = require("@webassemblyjs/ast");

var emptyFunc = t.func(null, t.signature([], []), []);

module.exports = function removeFunc(moduleExport, ast) {
  var exportName = moduleExport.name; // TODO(sven): test if we actually want to delete a func

  var funcName = moduleExport.descr.id.value; // console.log(`Remove unused "${exportName}"`);

  t.traverse(ast, {
    Func: function Func(path) {
      if (path.node.name.value === funcName) {
        path.replaceWith(emptyFunc); // console.log('\t> remove func');
      }
    },
    ModuleExport: function ModuleExport(path) {
      if (path.node.name === exportName) {
        path.remove(); // console.log('\t> remove export');
      }
    }
  });
};