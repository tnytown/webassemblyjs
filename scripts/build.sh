#!/usr/bin/env bash
set -e

ROOT_DIR=$(cd $(dirname $0)/..; pwd)
cd $ROOT_DIR

OPTS="$@"

build_bundle() {
  ./scripts/bundle.mjs "${1}/src/index.js" "${1}/dist"
}

sh ./scripts/generate-ast-utils.sh

if [ -z "$DISABLE_FUZZER_TEST" ]; then
  yarn --cwd ./packages/floating-point-hex-parser run build-fuzzer
fi

build_bundle ./packages/webassemblyjs &

for D in ./packages/*; do
  if [ ! -d "${D}/src" ]; then
    continue
  fi

  echo "Building $D $OPTS..."

  # Clean
  rm -rf "${D}/lib"

  # Build CJS
  ./node_modules/.bin/babel "${D}/src" \
    --out-dir "${D}/lib" \
    --ignore packages/dce/src/libwabt.js \
    $OPTS &

  # Build ESM
  ESM=1 ./node_modules/.bin/babel "${D}/src" \
    --out-dir "${D}/esm" \
    --ignore packages/dce/src/libwabt.js &
done

wait

cp -v packages/dce/src/libwabt.js packages/dce/lib/libwabt.js
