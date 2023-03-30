#!/usr/bin/env node

import { argv, cwd } from 'node:process';

import * as esbuild from 'esbuild'
import { polyfillNode } from "esbuild-plugin-polyfill-node"
import flow from 'esbuild-plugin-flow'

let noLiborESMResolver = {
  name: 'noLiborESMResolver',
  setup(build) {
    build.onResolve({ filter: /^@webassemblyjs\// }, async ({ path }) => {
      if(path.endsWith("index.js") || path.includes("/lib/")) return undefined;

      const result = await build.resolve(`${path}/src/index.js`, {
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
    nodePaths: [`${cwd()}/node_modules/`, "/Users/tnytown/Documents/sw/webassemblyjs/node_modules"],
    plugins: [
      polyfillNode({}),
      flow(/\.js$|\.flow\.jsx?$/),
      noLiborESMResolver
    ],
  })
  .catch(() => process.exit(1))
