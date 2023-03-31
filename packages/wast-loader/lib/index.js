"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = loader;

var wabt = require("wabt");

var filename = "module.wast";

function loader(source) {
  this.cacheable();
  var module = wabt.parseWat(filename, source);

  var _module$toBinary = module.toBinary({
    write_debug_names: false
  }),
      buffer = _module$toBinary.buffer;

  this.callback(null, new Buffer(buffer.buffer));
}