"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = run;

var _child_process = require("child_process");

var _path = require("path");

var _fs = require("fs");

var _wasmParser = require("@webassemblyjs/wasm-parser");

var _wastParser = require("@webassemblyjs/wast-parser");

var _module2 = require("webassemblyjs/lib/compiler/compile/module");

var _interpreter = require("webassemblyjs/lib/interpreter");

var _asserts = require("./asserts");

var WASM_TEST_DIR = "./wasm_test_dir";

function getModuleName(command) {
  return command.name || "__default";
}

var decoderOpts = {};
var lastInstance;
var namedInstances = {};

function run(filename) {
  if (!(typeof filename === "string")) {
    throw new Error('typeof filename === "string"' + " error: " + ("please specify a filename" || "unknown"));
  }

  if ((0, _fs.existsSync)(WASM_TEST_DIR) === false) {
    (0, _fs.mkdirSync)(WASM_TEST_DIR);
  } // generate wasm files


  var out = (0, _path.basename)(filename);
  var manifestOut = (0, _path.join)(WASM_TEST_DIR, out + ".json");
  (0, _child_process.execSync)("wast2json --debug-names ".concat(filename, " -o ").concat(manifestOut)); // run tests

  var manifest = JSON.parse((0, _fs.readFileSync)(manifestOut, "utf8"));
  manifest.commands.forEach(function (command) {
    switch (command.type) {
      case "module":
        {
          // $FlowIgnore
          lastInstance = namedInstances[getModuleName(command)] = loadModule("binary", command.filename);
          break;
        }

      case "assert_return":
        {
          if (!(namedInstances[getModuleName(command)] !== undefined)) {
            throw new Error('namedInstances[getModuleName(command)] !== undefined' + " error: " + (undefined || "unknown"));
          }

          var fn = getExportedElement(command.action.field, command.action.module);
          (0, _asserts.assert_return)(fn, command.action, command.expected);
          break;
        }

      case "assert_malformed":
        {
          (0, _asserts.assert_malformed)(function () {
            return loadModule(command.module_type, command.filename);
          }, command.text);
          break;
        }

      case "assert_invalid":
        {
          (0, _asserts.assert_invalid)(function () {
            return loadModule(command.module_type, command.filename);
          }, command.text);
          break;
        }

      case "assert_trap":
        {
          var _fn = getExportedElement(command.action.field, command.action.module);

          (0, _asserts.assert_trap)(_fn, command.action, command.text);
          break;
        }

      default:
        throw new Error("unknown command: " + command.type);
    }

    console.log("PASS " + commandToString(command));
  });
}

function commandToString(command) {
  var out = "";
  out += command.type;

  if (command.text !== undefined) {
    out += " " + command.text;
  }

  out += " at line " + command.line;
  return out;
}

function getExportedElement(name, moduleName) {
  if (lastInstance.exports[name] !== undefined) {
    return lastInstance.exports[name];
  }

  if (!(moduleName !== undefined)) {
    throw new Error('moduleName !== undefined' + " error: " + ("no named module for " + name || "unknown"));
  }

  // $FlowIgnore: asserted above
  var instance = namedInstances[moduleName];

  if (!(instance !== undefined)) {
    throw new Error('instance !== undefined' + " error: " + ("module instance ".concat(String(moduleName), " not found") || "unknown"));
  }

  // $FlowIgnore: asserted above
  var fn = instance.exports[name];

  if (!(fn !== undefined)) {
    throw new Error('fn !== undefined' + " error: " + ("function ".concat(name, " not found in ").concat(String(moduleName)) || "unknown"));
  }

  return fn;
} // $FlowIgnore


function loadModule(type, filename) {
  var internalInstanceOptions = {
    checkForI64InSignature: false,
    returnStackLocal: true
  };
  var importObject = {
    _internalInstanceOptions: internalInstanceOptions
  };

  if (type === "text") {
    var content = (0, _fs.readFileSync)((0, _path.join)(WASM_TEST_DIR, filename), "utf8"); // we need a module in order to be compiled

    var ast = (0, _wastParser.parse)("(module " + content + ")"); // TODO(sven): pass fakeCompiler here?

    var module = (0, _module2.createCompiledModule)(ast);
    return new _interpreter.Instance(module, importObject);
  } else if (type === "binary") {
    // $FlowIgnore
    var buff = (0, _fs.readFileSync)((0, _path.join)(WASM_TEST_DIR, filename), null);

    var _ast = (0, _wasmParser.decode)(buff, decoderOpts);

    var _module = (0, _module2.createCompiledModule)(_ast);

    return new _interpreter.Instance(_module, importObject);
  } else {
    throw new Error("unsupported module type: " + type);
  }
}