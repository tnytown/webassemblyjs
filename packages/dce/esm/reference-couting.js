var _require = require("@webassemblyjs/ast"),
    traverse = _require.traverse;

module.exports = function countRefByName(ast, name) {
  var refCount = 0;
  traverse(ast, {
    Identifier: function Identifier(_ref) {
      var node = _ref.node,
          parentPath = _ref.parentPath;

      // We don't need to count the export, we are going to remove it aswell
      // that doesn't cover the case of exporting multiple times the same element
      // FIXME(sven): refactor this
      if (parentPath.node.type === "ModuleExportDescr") {
        return;
      }

      if (node.value === name) {
        refCount++;
      }
    }
  });
  return refCount;
};