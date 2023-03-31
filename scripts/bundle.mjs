#!/usr/bin/env node

import { argv, cwd } from 'node:process';

import * as esbuild from 'esbuild'
import babel from 'esbuild-plugin-babel'
import { polyfillNode } from "esbuild-plugin-polyfill-node"
import flow from 'esbuild-plugin-flow'

let noLiborESMResolver = {
  name: 'noLiborESMResolver',
  setup(build) {
    build.onResolve({ filter: /^@webassemblyjs\// }, async ({ path }) => {
      if(path.endsWith("index.js") || path.includes("src")) return undefined;

      if(path.includes("/lib/")) path = path.replace("/lib/", "/src/")
      else path = `${path}/src/index.js`

      const result = await build.resolve(path, {
        kind: 'import-statement',
        resolveDir: `${cwd()}/node_modules/`,
      })
      if (result.errors.length > 0) {
        return { errors: result.errors }
      }

      return { path: result.path }
    })
  }
}

esbuild
  .build({
    entryPoints: [argv[2]],
    outdir: argv[3],
    bundle: true,
    nodePaths: [`${cwd()}/node_modules/`],
    globalName: "WebAssembly",
    plugins: [
      babel({
        config: {
          presets: [
            ["@babel/preset-env", {
              modules: false,
            }],
          ],
          plugins: [
            // '@babel/plugin-proposal-export-default-from',
            // '@babel/plugin-proposal-object-rest-spread',
            'babel-plugin-mamacro'
          ],
        },
      }),
      polyfillNode({}),
      flow(/\.js$|\.flow\.jsx?$/),
      noLiborESMResolver
    ],
  })
  .catch(() => process.exit(1))
