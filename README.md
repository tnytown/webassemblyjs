# js-webassembly-interpreter

> WebAssembly interpreter

This is meant to be a polyfill entirely written in JavaScript.

## Examples

- [add WebAssembly Text Format](https://webassembly.js.org/examples/add-watf.html)
- [add WebAssembly Binary Format](https://webassembly.js.org/examples/add-wasm.html)

## Usage

### CDN

You can import `https://bundle.run/webassembly-interpreter` and the `webassemblyInterpreter` object will be accessible.

### npm

```sh
npm install webassembly-interpreter
```

## Commands

- `wasmdump FILENAME`: decodes a WASM binary and dumps its content
- `wasmast FILENAME`: prints the AST of the WASM binary.
- `wasmrun FILENAME [ENTRYPOINT]`: runs the WASM binary (uses the start section by default as entrypoint).

## Components

### Compiler

Code parsing and manipulations.

#### AST

Tools to manipulate and use our internal AST. You can see its definitions [here](https://github.com/xtuc/js-webassembly-interpreter/blob/master/src/types/AST.js).

#### Parsing

The parsing is available for the following formats:

- [WebAssembly Text Format](https://webassembly.github.io/spec/text/index.html) (watf)
- [WAST Script Syntax](https://github.com/WebAssembly/spec/tree/master/interpreter#scripts) (wast)
- [WebAssembly Binary Format](https://webassembly.github.io/spec/binary/index.html) (wasm)

### Interpreter

#### Kernel

Provides core features (memory management, execution, ...).

##### Why is this using a giant switch/case?

As explained here: https://github.com/xtuc/js-webassembly-interpreter/issues/56#issuecomment-355736921, it's a critical part of the interpreter and needs to be very fast.
Note that most of the interpreter uses that technique.

##### Memory management

The WebAssembly specification uses a pointer/Addr structure, where some runtime values are stored (like functions). Unfortunately (for me) JavaScript doesn't expose pointers to the user-land.

For now the memory management is backend by an Array, where the Addr is the index. This is subject to change because is doesn't provides the same semantics than manual memory management would.

Note that garbage collection is done by the host (the JavaScript engine), there is probably no need to re-implement. On the other hand we need to unsure that we don't retain unused object.

##### The call stack

To be as close as possible to a native environement the execution relies on StackFrames (its structure is defined [here](https://github.com/xtuc/js-webassembly-interpreter/blob/9559f8d94435cd7f1c77ca4ff8cee6016b0dc4d3/src/interpreter/kernel/stackframe.js)).

The context in which StackFrames are executed is the call stack.

The stack call depth is unspecified currently by WebAssembly and is controlled by the host environement, its limit might vary.

#### Runtime

Our runtime instance values.

#### Signals

- `trap` signal which aborts the execution

## Notes

-  Text format supports floating point hexadecimals as described in this article [maurobringolf.ch/2017/12/hexadecimal-floating-point-notation](https://maurobringolf.ch/2017/12/hexadecimal-floating-point-notation)
-  get_local of identifier is not supported as in the binary format

## Source

The sources are available on GitHub: [xtuc/js-webassembly-interpreter](https://github.com/xtuc/js-webassembly-interpreter).

## Licence

[GNU General Public License, version 2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html).
