#!/usr/bin/env node

import { argv } from 'node:process';

import * as esbuild from 'esbuild'
import { polyfillNode } from "esbuild-plugin-polyfill-node"
import flow from 'esbuild-plugin-flow'

// console.log(process.argv)

esbuild
  .build({
    entryPoints: [argv[2]],
    outdir: argv[3],
    bundle: true,
    plugins: [
        polyfillNode({}),
        flow(/\.js$|\.flow\.jsx?$/)
    ],
  })
  .catch(() => process.exit(1))
