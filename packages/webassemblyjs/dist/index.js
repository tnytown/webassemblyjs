var WebAssembly = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/esbuild-plugin-polyfill-node/polyfills/global.js
  var global;
  var init_global = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/global.js"() {
      global = globalThis;
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/__dirname.js
  var init_dirname = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/__dirname.js"() {
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/__filename.js
  var init_filename = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/__filename.js"() {
    }
  });

  // node_modules/process-es6/browser.js
  function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
  }
  function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
  }
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  var cachedSetTimeout, cachedClearTimeout, performance, performanceNow;
  var init_browser = __esm({
    "node_modules/process-es6/browser.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      cachedSetTimeout = defaultSetTimout;
      cachedClearTimeout = defaultClearTimeout;
      if (typeof global.setTimeout === "function") {
        cachedSetTimeout = setTimeout;
      }
      if (typeof global.clearTimeout === "function") {
        cachedClearTimeout = clearTimeout;
      }
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      performance = global.performance || {};
      performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
        return (/* @__PURE__ */ new Date()).getTime();
      };
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/process.js
  var init_process = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/process.js"() {
      init_browser();
    }
  });

  // node_modules/buffer-es6/base64.js
  function init() {
    inited = true;
    var code2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var i = 0, len = code2.length; i < len; ++i) {
      lookup[i] = code2[i];
      revLookup[code2.charCodeAt(i)] = i;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
  }
  function toByteArray(b64) {
    if (!inited) {
      init();
    }
    var i, j, l, tmp, placeHolders, arr;
    var len = b64.length;
    if (len % 4 > 0) {
      throw new Error("Invalid string. Length must be a multiple of 4");
    }
    placeHolders = b64[len - 2] === "=" ? 2 : b64[len - 1] === "=" ? 1 : 0;
    arr = new Arr(len * 3 / 4 - placeHolders);
    l = placeHolders > 0 ? len - 4 : len;
    var L = 0;
    for (i = 0, j = 0; i < l; i += 4, j += 3) {
      tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
      arr[L++] = tmp >> 16 & 255;
      arr[L++] = tmp >> 8 & 255;
      arr[L++] = tmp & 255;
    }
    if (placeHolders === 2) {
      tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
      arr[L++] = tmp & 255;
    } else if (placeHolders === 1) {
      tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
      arr[L++] = tmp >> 8 & 255;
      arr[L++] = tmp & 255;
    }
    return arr;
  }
  function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
  }
  function encodeChunk(uint8, start2, end) {
    var tmp;
    var output = [];
    for (var i = start2; i < end; i += 3) {
      tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
      output.push(tripletToBase64(tmp));
    }
    return output.join("");
  }
  function fromByteArray(uint8) {
    if (!inited) {
      init();
    }
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3;
    var output = "";
    var parts = [];
    var maxChunkLength = 16383;
    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
      parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    }
    if (extraBytes === 1) {
      tmp = uint8[len - 1];
      output += lookup[tmp >> 2];
      output += lookup[tmp << 4 & 63];
      output += "==";
    } else if (extraBytes === 2) {
      tmp = (uint8[len - 2] << 8) + uint8[len - 1];
      output += lookup[tmp >> 10];
      output += lookup[tmp >> 4 & 63];
      output += lookup[tmp << 2 & 63];
      output += "=";
    }
    parts.push(output);
    return parts.join("");
  }
  var lookup, revLookup, Arr, inited;
  var init_base64 = __esm({
    "node_modules/buffer-es6/base64.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      lookup = [];
      revLookup = [];
      Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      inited = false;
    }
  });

  // node_modules/buffer-es6/ieee754.js
  function read(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
    }
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
    }
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  }
  function write(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
    }
    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
    }
    buffer[offset + i - d] |= s * 128;
  }
  var init_ieee754 = __esm({
    "node_modules/buffer-es6/ieee754.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
    }
  });

  // node_modules/buffer-es6/isArray.js
  var toString, isArray_default;
  var init_isArray = __esm({
    "node_modules/buffer-es6/isArray.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      toString = {}.toString;
      isArray_default = Array.isArray || function(arr) {
        return toString.call(arr) == "[object Array]";
      };
    }
  });

  // node_modules/buffer-es6/index.js
  function kMaxLength() {
    return Buffer2.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
  }
  function createBuffer(that, length) {
    if (kMaxLength() < length) {
      throw new RangeError("Invalid typed array length");
    }
    if (Buffer2.TYPED_ARRAY_SUPPORT) {
      that = new Uint8Array(length);
      that.__proto__ = Buffer2.prototype;
    } else {
      if (that === null) {
        that = new Buffer2(length);
      }
      that.length = length;
    }
    return that;
  }
  function Buffer2(arg, encodingOrOffset, length) {
    if (!Buffer2.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer2)) {
      return new Buffer2(arg, encodingOrOffset, length);
    }
    if (typeof arg === "number") {
      if (typeof encodingOrOffset === "string") {
        throw new Error("If encoding is specified then the first argument must be a string");
      }
      return allocUnsafe(this, arg);
    }
    return from(this, arg, encodingOrOffset, length);
  }
  function from(that, value, encodingOrOffset, length) {
    if (typeof value === "number") {
      throw new TypeError('"value" argument must not be a number');
    }
    if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
      return fromArrayBuffer(that, value, encodingOrOffset, length);
    }
    if (typeof value === "string") {
      return fromString(that, value, encodingOrOffset);
    }
    return fromObject(that, value);
  }
  function assertSize(size) {
    if (typeof size !== "number") {
      throw new TypeError('"size" argument must be a number');
    } else if (size < 0) {
      throw new RangeError('"size" argument must not be negative');
    }
  }
  function alloc(that, size, fill2, encoding) {
    assertSize(size);
    if (size <= 0) {
      return createBuffer(that, size);
    }
    if (fill2 !== void 0) {
      return typeof encoding === "string" ? createBuffer(that, size).fill(fill2, encoding) : createBuffer(that, size).fill(fill2);
    }
    return createBuffer(that, size);
  }
  function allocUnsafe(that, size) {
    assertSize(size);
    that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
    if (!Buffer2.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < size; ++i) {
        that[i] = 0;
      }
    }
    return that;
  }
  function fromString(that, string, encoding) {
    if (typeof encoding !== "string" || encoding === "") {
      encoding = "utf8";
    }
    if (!Buffer2.isEncoding(encoding)) {
      throw new TypeError('"encoding" must be a valid string encoding');
    }
    var length = byteLength(string, encoding) | 0;
    that = createBuffer(that, length);
    var actual = that.write(string, encoding);
    if (actual !== length) {
      that = that.slice(0, actual);
    }
    return that;
  }
  function fromArrayLike(that, array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    that = createBuffer(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  function fromArrayBuffer(that, array, byteOffset, length) {
    array.byteLength;
    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError("'offset' is out of bounds");
    }
    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError("'length' is out of bounds");
    }
    if (byteOffset === void 0 && length === void 0) {
      array = new Uint8Array(array);
    } else if (length === void 0) {
      array = new Uint8Array(array, byteOffset);
    } else {
      array = new Uint8Array(array, byteOffset, length);
    }
    if (Buffer2.TYPED_ARRAY_SUPPORT) {
      that = array;
      that.__proto__ = Buffer2.prototype;
    } else {
      that = fromArrayLike(that, array);
    }
    return that;
  }
  function fromObject(that, obj) {
    if (internalIsBuffer(obj)) {
      var len = checked(obj.length) | 0;
      that = createBuffer(that, len);
      if (that.length === 0) {
        return that;
      }
      obj.copy(that, 0, 0, len);
      return that;
    }
    if (obj) {
      if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
        if (typeof obj.length !== "number" || isnan(obj.length)) {
          return createBuffer(that, 0);
        }
        return fromArrayLike(that, obj);
      }
      if (obj.type === "Buffer" && isArray_default(obj.data)) {
        return fromArrayLike(that, obj.data);
      }
    }
    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
  }
  function checked(length) {
    if (length >= kMaxLength()) {
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
    }
    return length | 0;
  }
  function internalIsBuffer(b) {
    return !!(b != null && b._isBuffer);
  }
  function byteLength(string, encoding) {
    if (internalIsBuffer(string)) {
      return string.length;
    }
    if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
      return string.byteLength;
    }
    if (typeof string !== "string") {
      string = "" + string;
    }
    var len = string.length;
    if (len === 0)
      return 0;
    var loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case "ascii":
        case "latin1":
        case "binary":
          return len;
        case "utf8":
        case "utf-8":
        case void 0:
          return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return len * 2;
        case "hex":
          return len >>> 1;
        case "base64":
          return base64ToBytes(string).length;
        default:
          if (loweredCase)
            return utf8ToBytes(string).length;
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  function slowToString(encoding, start2, end) {
    var loweredCase = false;
    if (start2 === void 0 || start2 < 0) {
      start2 = 0;
    }
    if (start2 > this.length) {
      return "";
    }
    if (end === void 0 || end > this.length) {
      end = this.length;
    }
    if (end <= 0) {
      return "";
    }
    end >>>= 0;
    start2 >>>= 0;
    if (end <= start2) {
      return "";
    }
    if (!encoding)
      encoding = "utf8";
    while (true) {
      switch (encoding) {
        case "hex":
          return hexSlice(this, start2, end);
        case "utf8":
        case "utf-8":
          return utf8Slice(this, start2, end);
        case "ascii":
          return asciiSlice(this, start2, end);
        case "latin1":
        case "binary":
          return latin1Slice(this, start2, end);
        case "base64":
          return base64Slice(this, start2, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return utf16leSlice(this, start2, end);
        default:
          if (loweredCase)
            throw new TypeError("Unknown encoding: " + encoding);
          encoding = (encoding + "").toLowerCase();
          loweredCase = true;
      }
    }
  }
  function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
  }
  function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    if (buffer.length === 0)
      return -1;
    if (typeof byteOffset === "string") {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 2147483647) {
      byteOffset = 2147483647;
    } else if (byteOffset < -2147483648) {
      byteOffset = -2147483648;
    }
    byteOffset = +byteOffset;
    if (isNaN(byteOffset)) {
      byteOffset = dir ? 0 : buffer.length - 1;
    }
    if (byteOffset < 0)
      byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
      if (dir)
        return -1;
      else
        byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
      if (dir)
        byteOffset = 0;
      else
        return -1;
    }
    if (typeof val === "string") {
      val = Buffer2.from(val, encoding);
    }
    if (internalIsBuffer(val)) {
      if (val.length === 0) {
        return -1;
      }
      return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
      val = val & 255;
      if (Buffer2.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
      }
      return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
  }
  function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== void 0) {
      encoding = String(encoding).toLowerCase();
      if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
        if (arr.length < 2 || val.length < 2) {
          return -1;
        }
        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }
    function read3(buf, i2) {
      if (indexSize === 1) {
        return buf[i2];
      } else {
        return buf.readUInt16BE(i2 * indexSize);
      }
    }
    var i;
    if (dir) {
      var foundIndex = -1;
      for (i = byteOffset; i < arrLength; i++) {
        if (read3(arr, i) === read3(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1)
            foundIndex = i;
          if (i - foundIndex + 1 === valLength)
            return foundIndex * indexSize;
        } else {
          if (foundIndex !== -1)
            i -= i - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength)
        byteOffset = arrLength - valLength;
      for (i = byteOffset; i >= 0; i--) {
        var found = true;
        for (var j = 0; j < valLength; j++) {
          if (read3(arr, i + j) !== read3(val, j)) {
            found = false;
            break;
          }
        }
        if (found)
          return i;
      }
    }
    return -1;
  }
  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }
    var strLen = string.length;
    if (strLen % 2 !== 0)
      throw new TypeError("Invalid hex string");
    if (length > strLen / 2) {
      length = strLen / 2;
    }
    for (var i = 0; i < length; ++i) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if (isNaN(parsed))
        return i;
      buf[offset + i] = parsed;
    }
    return i;
  }
  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }
  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }
  function latin1Write(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
  }
  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }
  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }
  function base64Slice(buf, start2, end) {
    if (start2 === 0 && end === buf.length) {
      return fromByteArray(buf);
    } else {
      return fromByteArray(buf.slice(start2, end));
    }
  }
  function utf8Slice(buf, start2, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start2;
    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
      if (i + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 128) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 192) === 128) {
              tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
              if (tempCodePoint > 127) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
              if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
              if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        codePoint = 65533;
        bytesPerSequence = 1;
      } else if (codePoint > 65535) {
        codePoint -= 65536;
        res.push(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      res.push(codePoint);
      i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
  }
  function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints);
    }
    var res = "";
    var i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }
  function asciiSlice(buf, start2, end) {
    var ret = "";
    end = Math.min(buf.length, end);
    for (var i = start2; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 127);
    }
    return ret;
  }
  function latin1Slice(buf, start2, end) {
    var ret = "";
    end = Math.min(buf.length, end);
    for (var i = start2; i < end; ++i) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret;
  }
  function hexSlice(buf, start2, end) {
    var len = buf.length;
    if (!start2 || start2 < 0)
      start2 = 0;
    if (!end || end < 0 || end > len)
      end = len;
    var out = "";
    for (var i = start2; i < end; ++i) {
      out += toHex(buf[i]);
    }
    return out;
  }
  function utf16leSlice(buf, start2, end) {
    var bytes = buf.slice(start2, end);
    var res = "";
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
  }
  function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0)
      throw new RangeError("offset is not uint");
    if (offset + ext > length)
      throw new RangeError("Trying to access beyond buffer length");
  }
  function checkInt(buf, value, offset, ext, max, min) {
    if (!internalIsBuffer(buf))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min)
      throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length)
      throw new RangeError("Index out of range");
  }
  function objectWriteUInt16(buf, value, offset, littleEndian) {
    if (value < 0)
      value = 65535 + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
      buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
    }
  }
  function objectWriteUInt32(buf, value, offset, littleEndian) {
    if (value < 0)
      value = 4294967295 + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
      buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
    }
  }
  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length)
      throw new RangeError("Index out of range");
    if (offset < 0)
      throw new RangeError("Index out of range");
  }
  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
    }
    write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }
  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
    }
    write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }
  function base64clean(str) {
    str = stringtrim(str).replace(INVALID_BASE64_RE, "");
    if (str.length < 2)
      return "";
    while (str.length % 4 !== 0) {
      str = str + "=";
    }
    return str;
  }
  function stringtrim(str) {
    if (str.trim)
      return str.trim();
    return str.replace(/^\s+|\s+$/g, "");
  }
  function toHex(n) {
    if (n < 16)
      return "0" + n.toString(16);
    return n.toString(16);
  }
  function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for (var i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i);
      if (codePoint > 55295 && codePoint < 57344) {
        if (!leadSurrogate) {
          if (codePoint > 56319) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            continue;
          } else if (i + 1 === length) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            continue;
          }
          leadSurrogate = codePoint;
          continue;
        }
        if (codePoint < 56320) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          leadSurrogate = codePoint;
          continue;
        }
        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
      } else if (leadSurrogate) {
        if ((units -= 3) > -1)
          bytes.push(239, 191, 189);
      }
      leadSurrogate = null;
      if (codePoint < 128) {
        if ((units -= 1) < 0)
          break;
        bytes.push(codePoint);
      } else if (codePoint < 2048) {
        if ((units -= 2) < 0)
          break;
        bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
      } else if (codePoint < 65536) {
        if ((units -= 3) < 0)
          break;
        bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
      } else if (codePoint < 1114112) {
        if ((units -= 4) < 0)
          break;
        bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
      } else {
        throw new Error("Invalid code point");
      }
    }
    return bytes;
  }
  function asciiToBytes(str) {
    var byteArray2 = [];
    for (var i = 0; i < str.length; ++i) {
      byteArray2.push(str.charCodeAt(i) & 255);
    }
    return byteArray2;
  }
  function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray2 = [];
    for (var i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0)
        break;
      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray2.push(lo);
      byteArray2.push(hi);
    }
    return byteArray2;
  }
  function base64ToBytes(str) {
    return toByteArray(base64clean(str));
  }
  function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
      if (i + offset >= dst.length || i >= src.length)
        break;
      dst[i + offset] = src[i];
    }
    return i;
  }
  function isnan(val) {
    return val !== val;
  }
  function isBuffer(obj) {
    return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
  }
  function isFastBuffer(obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
  }
  function isSlowBuffer(obj) {
    return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isFastBuffer(obj.slice(0, 0));
  }
  var INSPECT_MAX_BYTES, _kMaxLength, MAX_ARGUMENTS_LENGTH, INVALID_BASE64_RE;
  var init_buffer_es6 = __esm({
    "node_modules/buffer-es6/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_base64();
      init_ieee754();
      init_isArray();
      INSPECT_MAX_BYTES = 50;
      Buffer2.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== void 0 ? global.TYPED_ARRAY_SUPPORT : true;
      _kMaxLength = kMaxLength();
      Buffer2.poolSize = 8192;
      Buffer2._augment = function(arr) {
        arr.__proto__ = Buffer2.prototype;
        return arr;
      };
      Buffer2.from = function(value, encodingOrOffset, length) {
        return from(null, value, encodingOrOffset, length);
      };
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        Buffer2.prototype.__proto__ = Uint8Array.prototype;
        Buffer2.__proto__ = Uint8Array;
        if (typeof Symbol !== "undefined" && Symbol.species && Buffer2[Symbol.species] === Buffer2) {
        }
      }
      Buffer2.alloc = function(size, fill2, encoding) {
        return alloc(null, size, fill2, encoding);
      };
      Buffer2.allocUnsafe = function(size) {
        return allocUnsafe(null, size);
      };
      Buffer2.allocUnsafeSlow = function(size) {
        return allocUnsafe(null, size);
      };
      Buffer2.isBuffer = isBuffer;
      Buffer2.compare = function compare(a, b) {
        if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
          throw new TypeError("Arguments must be Buffers");
        }
        if (a === b)
          return 0;
        var x = a.length;
        var y = b.length;
        for (var i = 0, len = Math.min(x, y); i < len; ++i) {
          if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
          }
        }
        if (x < y)
          return -1;
        if (y < x)
          return 1;
        return 0;
      };
      Buffer2.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      Buffer2.concat = function concat(list, length) {
        if (!isArray_default(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        if (list.length === 0) {
          return Buffer2.alloc(0);
        }
        var i;
        if (length === void 0) {
          length = 0;
          for (i = 0; i < list.length; ++i) {
            length += list[i].length;
          }
        }
        var buffer = Buffer2.allocUnsafe(length);
        var pos = 0;
        for (i = 0; i < list.length; ++i) {
          var buf = list[i];
          if (!internalIsBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          }
          buf.copy(buffer, pos);
          pos += buf.length;
        }
        return buffer;
      };
      Buffer2.byteLength = byteLength;
      Buffer2.prototype._isBuffer = true;
      Buffer2.prototype.swap16 = function swap16() {
        var len = this.length;
        if (len % 2 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        }
        for (var i = 0; i < len; i += 2) {
          swap(this, i, i + 1);
        }
        return this;
      };
      Buffer2.prototype.swap32 = function swap32() {
        var len = this.length;
        if (len % 4 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        }
        for (var i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };
      Buffer2.prototype.swap64 = function swap64() {
        var len = this.length;
        if (len % 8 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        }
        for (var i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };
      Buffer2.prototype.toString = function toString2() {
        var length = this.length | 0;
        if (length === 0)
          return "";
        if (arguments.length === 0)
          return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };
      Buffer2.prototype.equals = function equals(b) {
        if (!internalIsBuffer(b))
          throw new TypeError("Argument must be a Buffer");
        if (this === b)
          return true;
        return Buffer2.compare(this, b) === 0;
      };
      Buffer2.prototype.inspect = function inspect() {
        var str = "";
        var max = INSPECT_MAX_BYTES;
        if (this.length > 0) {
          str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
          if (this.length > max)
            str += " ... ";
        }
        return "<Buffer " + str + ">";
      };
      Buffer2.prototype.compare = function compare2(target, start2, end, thisStart, thisEnd) {
        if (!internalIsBuffer(target)) {
          throw new TypeError("Argument must be a Buffer");
        }
        if (start2 === void 0) {
          start2 = 0;
        }
        if (end === void 0) {
          end = target ? target.length : 0;
        }
        if (thisStart === void 0) {
          thisStart = 0;
        }
        if (thisEnd === void 0) {
          thisEnd = this.length;
        }
        if (start2 < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
          throw new RangeError("out of range index");
        }
        if (thisStart >= thisEnd && start2 >= end) {
          return 0;
        }
        if (thisStart >= thisEnd) {
          return -1;
        }
        if (start2 >= end) {
          return 1;
        }
        start2 >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target)
          return 0;
        var x = thisEnd - thisStart;
        var y = end - start2;
        var len = Math.min(x, y);
        var thisCopy = this.slice(thisStart, thisEnd);
        var targetCopy = target.slice(start2, end);
        for (var i = 0; i < len; ++i) {
          if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
          }
        }
        if (x < y)
          return -1;
        if (y < x)
          return 1;
        return 0;
      };
      Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
      };
      Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };
      Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };
      Buffer2.prototype.write = function write2(string, offset, length, encoding) {
        if (offset === void 0) {
          encoding = "utf8";
          length = this.length;
          offset = 0;
        } else if (length === void 0 && typeof offset === "string") {
          encoding = offset;
          length = this.length;
          offset = 0;
        } else if (isFinite(offset)) {
          offset = offset | 0;
          if (isFinite(length)) {
            length = length | 0;
            if (encoding === void 0)
              encoding = "utf8";
          } else {
            encoding = length;
            length = void 0;
          }
        } else {
          throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        }
        var remaining = this.length - offset;
        if (length === void 0 || length > remaining)
          length = remaining;
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
          throw new RangeError("Attempt to write outside buffer bounds");
        }
        if (!encoding)
          encoding = "utf8";
        var loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "hex":
              return hexWrite(this, string, offset, length);
            case "utf8":
            case "utf-8":
              return utf8Write(this, string, offset, length);
            case "ascii":
              return asciiWrite(this, string, offset, length);
            case "latin1":
            case "binary":
              return latin1Write(this, string, offset, length);
            case "base64":
              return base64Write(this, string, offset, length);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return ucs2Write(this, string, offset, length);
            default:
              if (loweredCase)
                throw new TypeError("Unknown encoding: " + encoding);
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      };
      Buffer2.prototype.toJSON = function toJSON() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      MAX_ARGUMENTS_LENGTH = 4096;
      Buffer2.prototype.slice = function slice(start2, end) {
        var len = this.length;
        start2 = ~~start2;
        end = end === void 0 ? len : ~~end;
        if (start2 < 0) {
          start2 += len;
          if (start2 < 0)
            start2 = 0;
        } else if (start2 > len) {
          start2 = len;
        }
        if (end < 0) {
          end += len;
          if (end < 0)
            end = 0;
        } else if (end > len) {
          end = len;
        }
        if (end < start2)
          end = start2;
        var newBuf;
        if (Buffer2.TYPED_ARRAY_SUPPORT) {
          newBuf = this.subarray(start2, end);
          newBuf.__proto__ = Buffer2.prototype;
        } else {
          var sliceLen = end - start2;
          newBuf = new Buffer2(sliceLen, void 0);
          for (var i = 0; i < sliceLen; ++i) {
            newBuf[i] = this[i + start2];
          }
        }
        return newBuf;
      };
      Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
        offset = offset | 0;
        byteLength2 = byteLength2 | 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        return val;
      };
      Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
        offset = offset | 0;
        byteLength2 = byteLength2 | 0;
        if (!noAssert) {
          checkOffset(offset, byteLength2, this.length);
        }
        var val = this[offset + --byteLength2];
        var mul = 1;
        while (byteLength2 > 0 && (mul *= 256)) {
          val += this[offset + --byteLength2] * mul;
        }
        return val;
      };
      Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        if (!noAssert)
          checkOffset(offset, 1, this.length);
        return this[offset];
      };
      Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };
      Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };
      Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
      };
      Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };
      Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
        offset = offset | 0;
        byteLength2 = byteLength2 | 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        mul *= 128;
        if (val >= mul)
          val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
        offset = offset | 0;
        byteLength2 = byteLength2 | 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        var i = byteLength2;
        var mul = 1;
        var val = this[offset + --i];
        while (i > 0 && (mul *= 256)) {
          val += this[offset + --i] * mul;
        }
        mul *= 128;
        if (val >= mul)
          val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
        if (!noAssert)
          checkOffset(offset, 1, this.length);
        if (!(this[offset] & 128))
          return this[offset];
        return (255 - this[offset] + 1) * -1;
      };
      Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        var val = this[offset] | this[offset + 1] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        var val = this[offset + 1] | this[offset] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };
      Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };
      Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return read(this, offset, true, 23, 4);
      };
      Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return read(this, offset, false, 23, 4);
      };
      Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        if (!noAssert)
          checkOffset(offset, 8, this.length);
        return read(this, offset, true, 52, 8);
      };
      Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        if (!noAssert)
          checkOffset(offset, 8, this.length);
        return read(this, offset, false, 52, 8);
      };
      Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset | 0;
        byteLength2 = byteLength2 | 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        var mul = 1;
        var i = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset | 0;
        byteLength2 = byteLength2 | 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        var i = byteLength2 - 1;
        var mul = 1;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert)
          checkInt(this, value, offset, 1, 255, 0);
        if (!Buffer2.TYPED_ARRAY_SUPPORT)
          value = Math.floor(value);
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 65535, 0);
        if (Buffer2.TYPED_ARRAY_SUPPORT) {
          this[offset] = value & 255;
          this[offset + 1] = value >>> 8;
        } else {
          objectWriteUInt16(this, value, offset, true);
        }
        return offset + 2;
      };
      Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 65535, 0);
        if (Buffer2.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 8;
          this[offset + 1] = value & 255;
        } else {
          objectWriteUInt16(this, value, offset, false);
        }
        return offset + 2;
      };
      Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 4294967295, 0);
        if (Buffer2.TYPED_ARRAY_SUPPORT) {
          this[offset + 3] = value >>> 24;
          this[offset + 2] = value >>> 16;
          this[offset + 1] = value >>> 8;
          this[offset] = value & 255;
        } else {
          objectWriteUInt32(this, value, offset, true);
        }
        return offset + 4;
      };
      Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 4294967295, 0);
        if (Buffer2.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = value & 255;
        } else {
          objectWriteUInt32(this, value, offset, false);
        }
        return offset + 4;
      };
      Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert) {
          var limit2 = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit2 - 1, -limit2);
        }
        var i = 0;
        var mul = 1;
        var sub = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert) {
          var limit2 = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit2 - 1, -limit2);
        }
        var i = byteLength2 - 1;
        var mul = 1;
        var sub = 0;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert)
          checkInt(this, value, offset, 1, 127, -128);
        if (!Buffer2.TYPED_ARRAY_SUPPORT)
          value = Math.floor(value);
        if (value < 0)
          value = 255 + value + 1;
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 32767, -32768);
        if (Buffer2.TYPED_ARRAY_SUPPORT) {
          this[offset] = value & 255;
          this[offset + 1] = value >>> 8;
        } else {
          objectWriteUInt16(this, value, offset, true);
        }
        return offset + 2;
      };
      Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 32767, -32768);
        if (Buffer2.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 8;
          this[offset + 1] = value & 255;
        } else {
          objectWriteUInt16(this, value, offset, false);
        }
        return offset + 2;
      };
      Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (Buffer2.TYPED_ARRAY_SUPPORT) {
          this[offset] = value & 255;
          this[offset + 1] = value >>> 8;
          this[offset + 2] = value >>> 16;
          this[offset + 3] = value >>> 24;
        } else {
          objectWriteUInt32(this, value, offset, true);
        }
        return offset + 4;
      };
      Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (value < 0)
          value = 4294967295 + value + 1;
        if (Buffer2.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = value & 255;
        } else {
          objectWriteUInt32(this, value, offset, false);
        }
        return offset + 4;
      };
      Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };
      Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };
      Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };
      Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };
      Buffer2.prototype.copy = function copy(target, targetStart, start2, end) {
        if (!start2)
          start2 = 0;
        if (!end && end !== 0)
          end = this.length;
        if (targetStart >= target.length)
          targetStart = target.length;
        if (!targetStart)
          targetStart = 0;
        if (end > 0 && end < start2)
          end = start2;
        if (end === start2)
          return 0;
        if (target.length === 0 || this.length === 0)
          return 0;
        if (targetStart < 0) {
          throw new RangeError("targetStart out of bounds");
        }
        if (start2 < 0 || start2 >= this.length)
          throw new RangeError("sourceStart out of bounds");
        if (end < 0)
          throw new RangeError("sourceEnd out of bounds");
        if (end > this.length)
          end = this.length;
        if (target.length - targetStart < end - start2) {
          end = target.length - targetStart + start2;
        }
        var len = end - start2;
        var i;
        if (this === target && start2 < targetStart && targetStart < end) {
          for (i = len - 1; i >= 0; --i) {
            target[i + targetStart] = this[i + start2];
          }
        } else if (len < 1e3 || !Buffer2.TYPED_ARRAY_SUPPORT) {
          for (i = 0; i < len; ++i) {
            target[i + targetStart] = this[i + start2];
          }
        } else {
          Uint8Array.prototype.set.call(target, this.subarray(start2, start2 + len), targetStart);
        }
        return len;
      };
      Buffer2.prototype.fill = function fill(val, start2, end, encoding) {
        if (typeof val === "string") {
          if (typeof start2 === "string") {
            encoding = start2;
            start2 = 0;
            end = this.length;
          } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
          }
          if (val.length === 1) {
            var code2 = val.charCodeAt(0);
            if (code2 < 256) {
              val = code2;
            }
          }
          if (encoding !== void 0 && typeof encoding !== "string") {
            throw new TypeError("encoding must be a string");
          }
          if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
            throw new TypeError("Unknown encoding: " + encoding);
          }
        } else if (typeof val === "number") {
          val = val & 255;
        }
        if (start2 < 0 || this.length < start2 || this.length < end) {
          throw new RangeError("Out of range index");
        }
        if (end <= start2) {
          return this;
        }
        start2 = start2 >>> 0;
        end = end === void 0 ? this.length : end >>> 0;
        if (!val)
          val = 0;
        var i;
        if (typeof val === "number") {
          for (i = start2; i < end; ++i) {
            this[i] = val;
          }
        } else {
          var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer2(val, encoding).toString());
          var len = bytes.length;
          for (i = 0; i < end - start2; ++i) {
            this[i + start2] = bytes[i % len];
          }
        }
        return this;
      };
      INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/buffer.js
  var init_buffer = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/buffer.js"() {
      init_buffer_es6();
    }
  });

  // packages/ast/src/nodes.js
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof18(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof18(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function isTypeOf(t5) {
    return function(n) {
      return n.type === t5;
    };
  }
  function assertTypeOf(t5) {
    return function(n) {
      return function() {
        if (!(n.type === t5)) {
          throw new Error("n.type === t error: unknown");
        }
      }();
    };
  }
  function module(id, fields, metadata) {
    if (id !== null && id !== void 0) {
      if (!(typeof id === "string")) {
        throw new Error('typeof id === "string" error: ' + ("Argument id must be of type string, given: " + _typeof(id) || "unknown"));
      }
    }
    if (!(_typeof(fields) === "object" && typeof fields.length !== "undefined")) {
      throw new Error('typeof fields === "object" && typeof fields.length !== "undefined" error: unknown');
    }
    var node = {
      type: "Module",
      id,
      fields
    };
    if (typeof metadata !== "undefined") {
      node.metadata = metadata;
    }
    return node;
  }
  function moduleMetadata(sections2, functionNames, localNames, producers) {
    if (!(_typeof(sections2) === "object" && typeof sections2.length !== "undefined")) {
      throw new Error('typeof sections === "object" && typeof sections.length !== "undefined" error: unknown');
    }
    if (functionNames !== null && functionNames !== void 0) {
      if (!(_typeof(functionNames) === "object" && typeof functionNames.length !== "undefined")) {
        throw new Error('typeof functionNames === "object" && typeof functionNames.length !== "undefined" error: unknown');
      }
    }
    if (localNames !== null && localNames !== void 0) {
      if (!(_typeof(localNames) === "object" && typeof localNames.length !== "undefined")) {
        throw new Error('typeof localNames === "object" && typeof localNames.length !== "undefined" error: unknown');
      }
    }
    if (producers !== null && producers !== void 0) {
      if (!(_typeof(producers) === "object" && typeof producers.length !== "undefined")) {
        throw new Error('typeof producers === "object" && typeof producers.length !== "undefined" error: unknown');
      }
    }
    var node = {
      type: "ModuleMetadata",
      sections: sections2
    };
    if (typeof functionNames !== "undefined" && functionNames.length > 0) {
      node.functionNames = functionNames;
    }
    if (typeof localNames !== "undefined" && localNames.length > 0) {
      node.localNames = localNames;
    }
    if (typeof producers !== "undefined" && producers.length > 0) {
      node.producers = producers;
    }
    return node;
  }
  function moduleNameMetadata(value) {
    if (!(typeof value === "string")) {
      throw new Error('typeof value === "string" error: ' + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
    }
    var node = {
      type: "ModuleNameMetadata",
      value
    };
    return node;
  }
  function functionNameMetadata(value, index) {
    if (!(typeof value === "string")) {
      throw new Error('typeof value === "string" error: ' + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
    }
    if (!(typeof index === "number")) {
      throw new Error('typeof index === "number" error: ' + ("Argument index must be of type number, given: " + _typeof(index) || "unknown"));
    }
    var node = {
      type: "FunctionNameMetadata",
      value,
      index
    };
    return node;
  }
  function localNameMetadata(value, localIndex, functionIndex) {
    if (!(typeof value === "string")) {
      throw new Error('typeof value === "string" error: ' + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
    }
    if (!(typeof localIndex === "number")) {
      throw new Error('typeof localIndex === "number" error: ' + ("Argument localIndex must be of type number, given: " + _typeof(localIndex) || "unknown"));
    }
    if (!(typeof functionIndex === "number")) {
      throw new Error('typeof functionIndex === "number" error: ' + ("Argument functionIndex must be of type number, given: " + _typeof(functionIndex) || "unknown"));
    }
    var node = {
      type: "LocalNameMetadata",
      value,
      localIndex,
      functionIndex
    };
    return node;
  }
  function binaryModule(id, blob) {
    if (id !== null && id !== void 0) {
      if (!(typeof id === "string")) {
        throw new Error('typeof id === "string" error: ' + ("Argument id must be of type string, given: " + _typeof(id) || "unknown"));
      }
    }
    if (!(_typeof(blob) === "object" && typeof blob.length !== "undefined")) {
      throw new Error('typeof blob === "object" && typeof blob.length !== "undefined" error: unknown');
    }
    var node = {
      type: "BinaryModule",
      id,
      blob
    };
    return node;
  }
  function quoteModule(id, string) {
    if (id !== null && id !== void 0) {
      if (!(typeof id === "string")) {
        throw new Error('typeof id === "string" error: ' + ("Argument id must be of type string, given: " + _typeof(id) || "unknown"));
      }
    }
    if (!(_typeof(string) === "object" && typeof string.length !== "undefined")) {
      throw new Error('typeof string === "object" && typeof string.length !== "undefined" error: unknown');
    }
    var node = {
      type: "QuoteModule",
      id,
      string
    };
    return node;
  }
  function sectionMetadata(section, startOffset, size, vectorOfSize) {
    if (!(typeof startOffset === "number")) {
      throw new Error('typeof startOffset === "number" error: ' + ("Argument startOffset must be of type number, given: " + _typeof(startOffset) || "unknown"));
    }
    var node = {
      type: "SectionMetadata",
      section,
      startOffset,
      size,
      vectorOfSize
    };
    return node;
  }
  function producersSectionMetadata(producers) {
    if (!(_typeof(producers) === "object" && typeof producers.length !== "undefined")) {
      throw new Error('typeof producers === "object" && typeof producers.length !== "undefined" error: unknown');
    }
    var node = {
      type: "ProducersSectionMetadata",
      producers
    };
    return node;
  }
  function producerMetadata(language, processedBy, sdk) {
    if (!(_typeof(language) === "object" && typeof language.length !== "undefined")) {
      throw new Error('typeof language === "object" && typeof language.length !== "undefined" error: unknown');
    }
    if (!(_typeof(processedBy) === "object" && typeof processedBy.length !== "undefined")) {
      throw new Error('typeof processedBy === "object" && typeof processedBy.length !== "undefined" error: unknown');
    }
    if (!(_typeof(sdk) === "object" && typeof sdk.length !== "undefined")) {
      throw new Error('typeof sdk === "object" && typeof sdk.length !== "undefined" error: unknown');
    }
    var node = {
      type: "ProducerMetadata",
      language,
      processedBy,
      sdk
    };
    return node;
  }
  function producerMetadataVersionedName(name, version) {
    if (!(typeof name === "string")) {
      throw new Error('typeof name === "string" error: ' + ("Argument name must be of type string, given: " + _typeof(name) || "unknown"));
    }
    if (!(typeof version === "string")) {
      throw new Error('typeof version === "string" error: ' + ("Argument version must be of type string, given: " + _typeof(version) || "unknown"));
    }
    var node = {
      type: "ProducerMetadataVersionedName",
      name,
      version
    };
    return node;
  }
  function loopInstruction(label2, resulttype, instr2) {
    if (!(_typeof(instr2) === "object" && typeof instr2.length !== "undefined")) {
      throw new Error('typeof instr === "object" && typeof instr.length !== "undefined" error: unknown');
    }
    var node = {
      type: "LoopInstruction",
      id: "loop",
      label: label2,
      resulttype,
      instr: instr2
    };
    return node;
  }
  function instr(id, object, args, namedArgs) {
    if (!(typeof id === "string")) {
      throw new Error('typeof id === "string" error: ' + ("Argument id must be of type string, given: " + _typeof(id) || "unknown"));
    }
    if (!(_typeof(args) === "object" && typeof args.length !== "undefined")) {
      throw new Error('typeof args === "object" && typeof args.length !== "undefined" error: unknown');
    }
    var node = {
      type: "Instr",
      id,
      args
    };
    if (typeof object !== "undefined") {
      node.object = object;
    }
    if (typeof namedArgs !== "undefined" && Object.keys(namedArgs).length !== 0) {
      node.namedArgs = namedArgs;
    }
    return node;
  }
  function ifInstruction(testLabel, test, result, consequent, alternate) {
    if (!(_typeof(test) === "object" && typeof test.length !== "undefined")) {
      throw new Error('typeof test === "object" && typeof test.length !== "undefined" error: unknown');
    }
    if (!(_typeof(consequent) === "object" && typeof consequent.length !== "undefined")) {
      throw new Error('typeof consequent === "object" && typeof consequent.length !== "undefined" error: unknown');
    }
    if (!(_typeof(alternate) === "object" && typeof alternate.length !== "undefined")) {
      throw new Error('typeof alternate === "object" && typeof alternate.length !== "undefined" error: unknown');
    }
    var node = {
      type: "IfInstruction",
      id: "if",
      testLabel,
      test,
      result,
      consequent,
      alternate
    };
    return node;
  }
  function stringLiteral(value) {
    if (!(typeof value === "string")) {
      throw new Error('typeof value === "string" error: ' + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
    }
    var node = {
      type: "StringLiteral",
      value
    };
    return node;
  }
  function numberLiteral(value, raw) {
    if (!(typeof value === "number")) {
      throw new Error('typeof value === "number" error: ' + ("Argument value must be of type number, given: " + _typeof(value) || "unknown"));
    }
    if (!(typeof raw === "string")) {
      throw new Error('typeof raw === "string" error: ' + ("Argument raw must be of type string, given: " + _typeof(raw) || "unknown"));
    }
    var node = {
      type: "NumberLiteral",
      value,
      raw
    };
    return node;
  }
  function longNumberLiteral(value, raw) {
    if (!(typeof raw === "string")) {
      throw new Error('typeof raw === "string" error: ' + ("Argument raw must be of type string, given: " + _typeof(raw) || "unknown"));
    }
    var node = {
      type: "LongNumberLiteral",
      value,
      raw
    };
    return node;
  }
  function floatLiteral(value, nan, inf, raw) {
    if (!(typeof value === "number")) {
      throw new Error('typeof value === "number" error: ' + ("Argument value must be of type number, given: " + _typeof(value) || "unknown"));
    }
    if (nan !== null && nan !== void 0) {
      if (!(typeof nan === "boolean")) {
        throw new Error('typeof nan === "boolean" error: ' + ("Argument nan must be of type boolean, given: " + _typeof(nan) || "unknown"));
      }
    }
    if (inf !== null && inf !== void 0) {
      if (!(typeof inf === "boolean")) {
        throw new Error('typeof inf === "boolean" error: ' + ("Argument inf must be of type boolean, given: " + _typeof(inf) || "unknown"));
      }
    }
    if (!(typeof raw === "string")) {
      throw new Error('typeof raw === "string" error: ' + ("Argument raw must be of type string, given: " + _typeof(raw) || "unknown"));
    }
    var node = {
      type: "FloatLiteral",
      value,
      raw
    };
    if (nan === true) {
      node.nan = true;
    }
    if (inf === true) {
      node.inf = true;
    }
    return node;
  }
  function elem(table2, offset, funcs) {
    if (!(_typeof(offset) === "object" && typeof offset.length !== "undefined")) {
      throw new Error('typeof offset === "object" && typeof offset.length !== "undefined" error: unknown');
    }
    if (!(_typeof(funcs) === "object" && typeof funcs.length !== "undefined")) {
      throw new Error('typeof funcs === "object" && typeof funcs.length !== "undefined" error: unknown');
    }
    var node = {
      type: "Elem",
      table: table2,
      offset,
      funcs
    };
    return node;
  }
  function indexInFuncSection(index) {
    var node = {
      type: "IndexInFuncSection",
      index
    };
    return node;
  }
  function valtypeLiteral(name) {
    var node = {
      type: "ValtypeLiteral",
      name
    };
    return node;
  }
  function typeInstruction(id, functype) {
    var node = {
      type: "TypeInstruction",
      id,
      functype
    };
    return node;
  }
  function start(index) {
    var node = {
      type: "Start",
      index
    };
    return node;
  }
  function globalType(valtype, mutability) {
    var node = {
      type: "GlobalType",
      valtype,
      mutability
    };
    return node;
  }
  function leadingComment(value) {
    if (!(typeof value === "string")) {
      throw new Error('typeof value === "string" error: ' + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
    }
    var node = {
      type: "LeadingComment",
      value
    };
    return node;
  }
  function blockComment(value) {
    if (!(typeof value === "string")) {
      throw new Error('typeof value === "string" error: ' + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
    }
    var node = {
      type: "BlockComment",
      value
    };
    return node;
  }
  function data(memoryIndex, offset, init2) {
    var node = {
      type: "Data",
      memoryIndex,
      offset,
      init: init2
    };
    return node;
  }
  function global2(globalType2, init2, name) {
    if (!(_typeof(init2) === "object" && typeof init2.length !== "undefined")) {
      throw new Error('typeof init === "object" && typeof init.length !== "undefined" error: unknown');
    }
    var node = {
      type: "Global",
      globalType: globalType2,
      init: init2,
      name
    };
    return node;
  }
  function table(elementType, limits, name, elements) {
    if (!(limits.type === "Limit")) {
      throw new Error('limits.type === "Limit" error: ' + ("Argument limits must be of type Limit, given: " + limits.type || "unknown"));
    }
    if (elements !== null && elements !== void 0) {
      if (!(_typeof(elements) === "object" && typeof elements.length !== "undefined")) {
        throw new Error('typeof elements === "object" && typeof elements.length !== "undefined" error: unknown');
      }
    }
    var node = {
      type: "Table",
      elementType,
      limits,
      name
    };
    if (typeof elements !== "undefined" && elements.length > 0) {
      node.elements = elements;
    }
    return node;
  }
  function memory(limits, id) {
    var node = {
      type: "Memory",
      limits,
      id
    };
    return node;
  }
  function funcImportDescr(id, signature2) {
    var node = {
      type: "FuncImportDescr",
      id,
      signature: signature2
    };
    return node;
  }
  function moduleImport(module2, name, descr) {
    if (!(typeof module2 === "string")) {
      throw new Error('typeof module === "string" error: ' + ("Argument module must be of type string, given: " + _typeof(module2) || "unknown"));
    }
    if (!(typeof name === "string")) {
      throw new Error('typeof name === "string" error: ' + ("Argument name must be of type string, given: " + _typeof(name) || "unknown"));
    }
    var node = {
      type: "ModuleImport",
      module: module2,
      name,
      descr
    };
    return node;
  }
  function moduleExportDescr(exportType, id) {
    var node = {
      type: "ModuleExportDescr",
      exportType,
      id
    };
    return node;
  }
  function moduleExport(name, descr) {
    if (!(typeof name === "string")) {
      throw new Error('typeof name === "string" error: ' + ("Argument name must be of type string, given: " + _typeof(name) || "unknown"));
    }
    var node = {
      type: "ModuleExport",
      name,
      descr
    };
    return node;
  }
  function limit(min, max, shared) {
    if (!(typeof min === "number")) {
      throw new Error('typeof min === "number" error: ' + ("Argument min must be of type number, given: " + _typeof(min) || "unknown"));
    }
    if (max !== null && max !== void 0) {
      if (!(typeof max === "number")) {
        throw new Error('typeof max === "number" error: ' + ("Argument max must be of type number, given: " + _typeof(max) || "unknown"));
      }
    }
    if (shared !== null && shared !== void 0) {
      if (!(typeof shared === "boolean")) {
        throw new Error('typeof shared === "boolean" error: ' + ("Argument shared must be of type boolean, given: " + _typeof(shared) || "unknown"));
      }
    }
    var node = {
      type: "Limit",
      min
    };
    if (typeof max !== "undefined") {
      node.max = max;
    }
    if (shared === true) {
      node.shared = true;
    }
    return node;
  }
  function signature(params, results) {
    if (!(_typeof(params) === "object" && typeof params.length !== "undefined")) {
      throw new Error('typeof params === "object" && typeof params.length !== "undefined" error: unknown');
    }
    if (!(_typeof(results) === "object" && typeof results.length !== "undefined")) {
      throw new Error('typeof results === "object" && typeof results.length !== "undefined" error: unknown');
    }
    var node = {
      type: "Signature",
      params,
      results
    };
    return node;
  }
  function program(body) {
    if (!(_typeof(body) === "object" && typeof body.length !== "undefined")) {
      throw new Error('typeof body === "object" && typeof body.length !== "undefined" error: unknown');
    }
    var node = {
      type: "Program",
      body
    };
    return node;
  }
  function identifier(value, raw) {
    if (!(typeof value === "string")) {
      throw new Error('typeof value === "string" error: ' + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
    }
    if (raw !== null && raw !== void 0) {
      if (!(typeof raw === "string")) {
        throw new Error('typeof raw === "string" error: ' + ("Argument raw must be of type string, given: " + _typeof(raw) || "unknown"));
      }
    }
    var node = {
      type: "Identifier",
      value
    };
    if (typeof raw !== "undefined") {
      node.raw = raw;
    }
    return node;
  }
  function blockInstruction(label2, instr2, result) {
    if (!(_typeof(instr2) === "object" && typeof instr2.length !== "undefined")) {
      throw new Error('typeof instr === "object" && typeof instr.length !== "undefined" error: unknown');
    }
    var node = {
      type: "BlockInstruction",
      id: "block",
      label: label2,
      instr: instr2,
      result
    };
    return node;
  }
  function callInstruction(index, instrArgs, numeric) {
    if (instrArgs !== null && instrArgs !== void 0) {
      if (!(_typeof(instrArgs) === "object" && typeof instrArgs.length !== "undefined")) {
        throw new Error('typeof instrArgs === "object" && typeof instrArgs.length !== "undefined" error: unknown');
      }
    }
    var node = {
      type: "CallInstruction",
      id: "call",
      index
    };
    if (typeof instrArgs !== "undefined" && instrArgs.length > 0) {
      node.instrArgs = instrArgs;
    }
    if (typeof numeric !== "undefined") {
      node.numeric = numeric;
    }
    return node;
  }
  function callIndirectInstruction(signature2, intrs) {
    if (intrs !== null && intrs !== void 0) {
      if (!(_typeof(intrs) === "object" && typeof intrs.length !== "undefined")) {
        throw new Error('typeof intrs === "object" && typeof intrs.length !== "undefined" error: unknown');
      }
    }
    var node = {
      type: "CallIndirectInstruction",
      id: "call_indirect",
      signature: signature2
    };
    if (typeof intrs !== "undefined" && intrs.length > 0) {
      node.intrs = intrs;
    }
    return node;
  }
  function byteArray(values) {
    if (!(_typeof(values) === "object" && typeof values.length !== "undefined")) {
      throw new Error('typeof values === "object" && typeof values.length !== "undefined" error: unknown');
    }
    var node = {
      type: "ByteArray",
      values
    };
    return node;
  }
  function func(name, signature2, body, isExternal, metadata) {
    if (!(_typeof(body) === "object" && typeof body.length !== "undefined")) {
      throw new Error('typeof body === "object" && typeof body.length !== "undefined" error: unknown');
    }
    if (isExternal !== null && isExternal !== void 0) {
      if (!(typeof isExternal === "boolean")) {
        throw new Error('typeof isExternal === "boolean" error: ' + ("Argument isExternal must be of type boolean, given: " + _typeof(isExternal) || "unknown"));
      }
    }
    var node = {
      type: "Func",
      name,
      signature: signature2,
      body
    };
    if (isExternal === true) {
      node.isExternal = true;
    }
    if (typeof metadata !== "undefined") {
      node.metadata = metadata;
    }
    return node;
  }
  function internalBrUnless(target) {
    if (!(typeof target === "number")) {
      throw new Error('typeof target === "number" error: ' + ("Argument target must be of type number, given: " + _typeof(target) || "unknown"));
    }
    var node = {
      type: "InternalBrUnless",
      target
    };
    return node;
  }
  function internalGoto(target) {
    if (!(typeof target === "number")) {
      throw new Error('typeof target === "number" error: ' + ("Argument target must be of type number, given: " + _typeof(target) || "unknown"));
    }
    var node = {
      type: "InternalGoto",
      target
    };
    return node;
  }
  function internalCallExtern(target) {
    if (!(typeof target === "number")) {
      throw new Error('typeof target === "number" error: ' + ("Argument target must be of type number, given: " + _typeof(target) || "unknown"));
    }
    var node = {
      type: "InternalCallExtern",
      target
    };
    return node;
  }
  function internalEndAndReturn() {
    var node = {
      type: "InternalEndAndReturn"
    };
    return node;
  }
  var isModule, isModuleMetadata, isModuleNameMetadata, isFunctionNameMetadata, isLocalNameMetadata, isBinaryModule, isQuoteModule, isSectionMetadata, isProducersSectionMetadata, isProducerMetadata, isProducerMetadataVersionedName, isLoopInstruction, isInstr, isIfInstruction, isStringLiteral, isNumberLiteral, isLongNumberLiteral, isFloatLiteral, isElem, isIndexInFuncSection, isValtypeLiteral, isTypeInstruction, isStart, isGlobalType, isLeadingComment, isBlockComment, isData, isGlobal, isTable, isMemory, isFuncImportDescr, isModuleImport, isModuleExportDescr, isModuleExport, isLimit, isSignature, isProgram, isIdentifier, isBlockInstruction, isCallInstruction, isCallIndirectInstruction, isByteArray, isFunc, isInternalBrUnless, isInternalGoto, isInternalCallExtern, isInternalEndAndReturn, isNode, isBlock, isInstruction, isExpression, isNumericLiteral, isImportDescr, isIntrinsic, assertModule, assertModuleMetadata, assertModuleNameMetadata, assertFunctionNameMetadata, assertLocalNameMetadata, assertBinaryModule, assertQuoteModule, assertSectionMetadata, assertProducersSectionMetadata, assertProducerMetadata, assertProducerMetadataVersionedName, assertLoopInstruction, assertInstr, assertIfInstruction, assertStringLiteral, assertNumberLiteral, assertLongNumberLiteral, assertFloatLiteral, assertElem, assertIndexInFuncSection, assertValtypeLiteral, assertTypeInstruction, assertStart, assertGlobalType, assertLeadingComment, assertBlockComment, assertData, assertGlobal, assertTable, assertMemory, assertFuncImportDescr, assertModuleImport, assertModuleExportDescr, assertModuleExport, assertLimit, assertSignature, assertProgram, assertIdentifier, assertBlockInstruction, assertCallInstruction, assertCallIndirectInstruction, assertByteArray, assertFunc, assertInternalBrUnless, assertInternalGoto, assertInternalCallExtern, assertInternalEndAndReturn, unionTypesMap, nodeAndUnionTypes;
  var init_nodes = __esm({
    "packages/ast/src/nodes.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      isModule = isTypeOf("Module");
      isModuleMetadata = isTypeOf("ModuleMetadata");
      isModuleNameMetadata = isTypeOf("ModuleNameMetadata");
      isFunctionNameMetadata = isTypeOf("FunctionNameMetadata");
      isLocalNameMetadata = isTypeOf("LocalNameMetadata");
      isBinaryModule = isTypeOf("BinaryModule");
      isQuoteModule = isTypeOf("QuoteModule");
      isSectionMetadata = isTypeOf("SectionMetadata");
      isProducersSectionMetadata = isTypeOf("ProducersSectionMetadata");
      isProducerMetadata = isTypeOf("ProducerMetadata");
      isProducerMetadataVersionedName = isTypeOf("ProducerMetadataVersionedName");
      isLoopInstruction = isTypeOf("LoopInstruction");
      isInstr = isTypeOf("Instr");
      isIfInstruction = isTypeOf("IfInstruction");
      isStringLiteral = isTypeOf("StringLiteral");
      isNumberLiteral = isTypeOf("NumberLiteral");
      isLongNumberLiteral = isTypeOf("LongNumberLiteral");
      isFloatLiteral = isTypeOf("FloatLiteral");
      isElem = isTypeOf("Elem");
      isIndexInFuncSection = isTypeOf("IndexInFuncSection");
      isValtypeLiteral = isTypeOf("ValtypeLiteral");
      isTypeInstruction = isTypeOf("TypeInstruction");
      isStart = isTypeOf("Start");
      isGlobalType = isTypeOf("GlobalType");
      isLeadingComment = isTypeOf("LeadingComment");
      isBlockComment = isTypeOf("BlockComment");
      isData = isTypeOf("Data");
      isGlobal = isTypeOf("Global");
      isTable = isTypeOf("Table");
      isMemory = isTypeOf("Memory");
      isFuncImportDescr = isTypeOf("FuncImportDescr");
      isModuleImport = isTypeOf("ModuleImport");
      isModuleExportDescr = isTypeOf("ModuleExportDescr");
      isModuleExport = isTypeOf("ModuleExport");
      isLimit = isTypeOf("Limit");
      isSignature = isTypeOf("Signature");
      isProgram = isTypeOf("Program");
      isIdentifier = isTypeOf("Identifier");
      isBlockInstruction = isTypeOf("BlockInstruction");
      isCallInstruction = isTypeOf("CallInstruction");
      isCallIndirectInstruction = isTypeOf("CallIndirectInstruction");
      isByteArray = isTypeOf("ByteArray");
      isFunc = isTypeOf("Func");
      isInternalBrUnless = isTypeOf("InternalBrUnless");
      isInternalGoto = isTypeOf("InternalGoto");
      isInternalCallExtern = isTypeOf("InternalCallExtern");
      isInternalEndAndReturn = isTypeOf("InternalEndAndReturn");
      isNode = function isNode2(node) {
        return isModule(node) || isModuleMetadata(node) || isModuleNameMetadata(node) || isFunctionNameMetadata(node) || isLocalNameMetadata(node) || isBinaryModule(node) || isQuoteModule(node) || isSectionMetadata(node) || isProducersSectionMetadata(node) || isProducerMetadata(node) || isProducerMetadataVersionedName(node) || isLoopInstruction(node) || isInstr(node) || isIfInstruction(node) || isStringLiteral(node) || isNumberLiteral(node) || isLongNumberLiteral(node) || isFloatLiteral(node) || isElem(node) || isIndexInFuncSection(node) || isValtypeLiteral(node) || isTypeInstruction(node) || isStart(node) || isGlobalType(node) || isLeadingComment(node) || isBlockComment(node) || isData(node) || isGlobal(node) || isTable(node) || isMemory(node) || isFuncImportDescr(node) || isModuleImport(node) || isModuleExportDescr(node) || isModuleExport(node) || isLimit(node) || isSignature(node) || isProgram(node) || isIdentifier(node) || isBlockInstruction(node) || isCallInstruction(node) || isCallIndirectInstruction(node) || isByteArray(node) || isFunc(node) || isInternalBrUnless(node) || isInternalGoto(node) || isInternalCallExtern(node) || isInternalEndAndReturn(node);
      };
      isBlock = function isBlock2(node) {
        return isLoopInstruction(node) || isBlockInstruction(node) || isFunc(node);
      };
      isInstruction = function isInstruction2(node) {
        return isLoopInstruction(node) || isInstr(node) || isIfInstruction(node) || isTypeInstruction(node) || isBlockInstruction(node) || isCallInstruction(node) || isCallIndirectInstruction(node);
      };
      isExpression = function isExpression2(node) {
        return isInstr(node) || isStringLiteral(node) || isNumberLiteral(node) || isLongNumberLiteral(node) || isFloatLiteral(node) || isValtypeLiteral(node) || isIdentifier(node);
      };
      isNumericLiteral = function isNumericLiteral2(node) {
        return isNumberLiteral(node) || isLongNumberLiteral(node) || isFloatLiteral(node);
      };
      isImportDescr = function isImportDescr2(node) {
        return isGlobalType(node) || isTable(node) || isMemory(node) || isFuncImportDescr(node);
      };
      isIntrinsic = function isIntrinsic2(node) {
        return isInternalBrUnless(node) || isInternalGoto(node) || isInternalCallExtern(node) || isInternalEndAndReturn(node);
      };
      assertModule = assertTypeOf("Module");
      assertModuleMetadata = assertTypeOf("ModuleMetadata");
      assertModuleNameMetadata = assertTypeOf("ModuleNameMetadata");
      assertFunctionNameMetadata = assertTypeOf("FunctionNameMetadata");
      assertLocalNameMetadata = assertTypeOf("LocalNameMetadata");
      assertBinaryModule = assertTypeOf("BinaryModule");
      assertQuoteModule = assertTypeOf("QuoteModule");
      assertSectionMetadata = assertTypeOf("SectionMetadata");
      assertProducersSectionMetadata = assertTypeOf("ProducersSectionMetadata");
      assertProducerMetadata = assertTypeOf("ProducerMetadata");
      assertProducerMetadataVersionedName = assertTypeOf("ProducerMetadataVersionedName");
      assertLoopInstruction = assertTypeOf("LoopInstruction");
      assertInstr = assertTypeOf("Instr");
      assertIfInstruction = assertTypeOf("IfInstruction");
      assertStringLiteral = assertTypeOf("StringLiteral");
      assertNumberLiteral = assertTypeOf("NumberLiteral");
      assertLongNumberLiteral = assertTypeOf("LongNumberLiteral");
      assertFloatLiteral = assertTypeOf("FloatLiteral");
      assertElem = assertTypeOf("Elem");
      assertIndexInFuncSection = assertTypeOf("IndexInFuncSection");
      assertValtypeLiteral = assertTypeOf("ValtypeLiteral");
      assertTypeInstruction = assertTypeOf("TypeInstruction");
      assertStart = assertTypeOf("Start");
      assertGlobalType = assertTypeOf("GlobalType");
      assertLeadingComment = assertTypeOf("LeadingComment");
      assertBlockComment = assertTypeOf("BlockComment");
      assertData = assertTypeOf("Data");
      assertGlobal = assertTypeOf("Global");
      assertTable = assertTypeOf("Table");
      assertMemory = assertTypeOf("Memory");
      assertFuncImportDescr = assertTypeOf("FuncImportDescr");
      assertModuleImport = assertTypeOf("ModuleImport");
      assertModuleExportDescr = assertTypeOf("ModuleExportDescr");
      assertModuleExport = assertTypeOf("ModuleExport");
      assertLimit = assertTypeOf("Limit");
      assertSignature = assertTypeOf("Signature");
      assertProgram = assertTypeOf("Program");
      assertIdentifier = assertTypeOf("Identifier");
      assertBlockInstruction = assertTypeOf("BlockInstruction");
      assertCallInstruction = assertTypeOf("CallInstruction");
      assertCallIndirectInstruction = assertTypeOf("CallIndirectInstruction");
      assertByteArray = assertTypeOf("ByteArray");
      assertFunc = assertTypeOf("Func");
      assertInternalBrUnless = assertTypeOf("InternalBrUnless");
      assertInternalGoto = assertTypeOf("InternalGoto");
      assertInternalCallExtern = assertTypeOf("InternalCallExtern");
      assertInternalEndAndReturn = assertTypeOf("InternalEndAndReturn");
      unionTypesMap = {
        Module: ["Node"],
        ModuleMetadata: ["Node"],
        ModuleNameMetadata: ["Node"],
        FunctionNameMetadata: ["Node"],
        LocalNameMetadata: ["Node"],
        BinaryModule: ["Node"],
        QuoteModule: ["Node"],
        SectionMetadata: ["Node"],
        ProducersSectionMetadata: ["Node"],
        ProducerMetadata: ["Node"],
        ProducerMetadataVersionedName: ["Node"],
        LoopInstruction: ["Node", "Block", "Instruction"],
        Instr: ["Node", "Expression", "Instruction"],
        IfInstruction: ["Node", "Instruction"],
        StringLiteral: ["Node", "Expression"],
        NumberLiteral: ["Node", "NumericLiteral", "Expression"],
        LongNumberLiteral: ["Node", "NumericLiteral", "Expression"],
        FloatLiteral: ["Node", "NumericLiteral", "Expression"],
        Elem: ["Node"],
        IndexInFuncSection: ["Node"],
        ValtypeLiteral: ["Node", "Expression"],
        TypeInstruction: ["Node", "Instruction"],
        Start: ["Node"],
        GlobalType: ["Node", "ImportDescr"],
        LeadingComment: ["Node"],
        BlockComment: ["Node"],
        Data: ["Node"],
        Global: ["Node"],
        Table: ["Node", "ImportDescr"],
        Memory: ["Node", "ImportDescr"],
        FuncImportDescr: ["Node", "ImportDescr"],
        ModuleImport: ["Node"],
        ModuleExportDescr: ["Node"],
        ModuleExport: ["Node"],
        Limit: ["Node"],
        Signature: ["Node"],
        Program: ["Node"],
        Identifier: ["Node", "Expression"],
        BlockInstruction: ["Node", "Block", "Instruction"],
        CallInstruction: ["Node", "Instruction"],
        CallIndirectInstruction: ["Node", "Instruction"],
        ByteArray: ["Node"],
        Func: ["Node", "Block"],
        InternalBrUnless: ["Node", "Intrinsic"],
        InternalGoto: ["Node", "Intrinsic"],
        InternalCallExtern: ["Node", "Intrinsic"],
        InternalEndAndReturn: ["Node", "Intrinsic"]
      };
      nodeAndUnionTypes = ["Module", "ModuleMetadata", "ModuleNameMetadata", "FunctionNameMetadata", "LocalNameMetadata", "BinaryModule", "QuoteModule", "SectionMetadata", "ProducersSectionMetadata", "ProducerMetadata", "ProducerMetadataVersionedName", "LoopInstruction", "Instr", "IfInstruction", "StringLiteral", "NumberLiteral", "LongNumberLiteral", "FloatLiteral", "Elem", "IndexInFuncSection", "ValtypeLiteral", "TypeInstruction", "Start", "GlobalType", "LeadingComment", "BlockComment", "Data", "Global", "Table", "Memory", "FuncImportDescr", "ModuleImport", "ModuleExportDescr", "ModuleExport", "Limit", "Signature", "Program", "Identifier", "BlockInstruction", "CallInstruction", "CallIndirectInstruction", "ByteArray", "Func", "InternalBrUnless", "InternalGoto", "InternalCallExtern", "InternalEndAndReturn", "Node", "Block", "Instruction", "Expression", "NumericLiteral", "ImportDescr", "Intrinsic"];
    }
  });

  // node_modules/@xtuc/long/src/long.js
  var require_long = __commonJS({
    "node_modules/@xtuc/long/src/long.js"(exports, module2) {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      module2.exports = Long8;
      var wasm = null;
      try {
        wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
      } catch (e) {
      }
      function Long8(low, high, unsigned) {
        this.low = low | 0;
        this.high = high | 0;
        this.unsigned = !!unsigned;
      }
      Long8.prototype.__isLong__;
      Object.defineProperty(Long8.prototype, "__isLong__", {
        value: true
      });
      function isLong(obj) {
        return (obj && obj["__isLong__"]) === true;
      }
      Long8.isLong = isLong;
      var INT_CACHE = {};
      var UINT_CACHE = {};
      function fromInt(value, unsigned) {
        var obj, cachedObj, cache;
        if (unsigned) {
          value >>>= 0;
          if (cache = 0 <= value && value < 256) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj)
              return cachedObj;
          }
          obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
          if (cache)
            UINT_CACHE[value] = obj;
          return obj;
        } else {
          value |= 0;
          if (cache = -128 <= value && value < 128) {
            cachedObj = INT_CACHE[value];
            if (cachedObj)
              return cachedObj;
          }
          obj = fromBits(value, value < 0 ? -1 : 0, false);
          if (cache)
            INT_CACHE[value] = obj;
          return obj;
        }
      }
      Long8.fromInt = fromInt;
      function fromNumber(value, unsigned) {
        if (isNaN(value))
          return unsigned ? UZERO : ZERO;
        if (unsigned) {
          if (value < 0)
            return UZERO;
          if (value >= TWO_PWR_64_DBL)
            return MAX_UNSIGNED_VALUE;
        } else {
          if (value <= -TWO_PWR_63_DBL)
            return MIN_VALUE;
          if (value + 1 >= TWO_PWR_63_DBL)
            return MAX_VALUE;
        }
        if (value < 0)
          return fromNumber(-value, unsigned).neg();
        return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
      }
      Long8.fromNumber = fromNumber;
      function fromBits(lowBits, highBits, unsigned) {
        return new Long8(lowBits, highBits, unsigned);
      }
      Long8.fromBits = fromBits;
      var pow_dbl = Math.pow;
      function fromString2(str, unsigned, radix) {
        if (str.length === 0)
          throw Error("empty string");
        if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
          return ZERO;
        if (typeof unsigned === "number") {
          radix = unsigned, unsigned = false;
        } else {
          unsigned = !!unsigned;
        }
        radix = radix || 10;
        if (radix < 2 || 36 < radix)
          throw RangeError("radix");
        var p;
        if ((p = str.indexOf("-")) > 0)
          throw Error("interior hyphen");
        else if (p === 0) {
          return fromString2(str.substring(1), unsigned, radix).neg();
        }
        var radixToPower = fromNumber(pow_dbl(radix, 8));
        var result = ZERO;
        for (var i = 0; i < str.length; i += 8) {
          var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
          if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = result.mul(power).add(fromNumber(value));
          } else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber(value));
          }
        }
        result.unsigned = unsigned;
        return result;
      }
      Long8.fromString = fromString2;
      function fromValue(val, unsigned) {
        if (typeof val === "number")
          return fromNumber(val, unsigned);
        if (typeof val === "string")
          return fromString2(val, unsigned);
        return fromBits(val.low, val.high, typeof unsigned === "boolean" ? unsigned : val.unsigned);
      }
      Long8.fromValue = fromValue;
      var TWO_PWR_16_DBL = 1 << 16;
      var TWO_PWR_24_DBL = 1 << 24;
      var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
      var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
      var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
      var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
      var ZERO = fromInt(0);
      Long8.ZERO = ZERO;
      var UZERO = fromInt(0, true);
      Long8.UZERO = UZERO;
      var ONE = fromInt(1);
      Long8.ONE = ONE;
      var UONE = fromInt(1, true);
      Long8.UONE = UONE;
      var NEG_ONE = fromInt(-1);
      Long8.NEG_ONE = NEG_ONE;
      var MAX_VALUE = fromBits(4294967295 | 0, 2147483647 | 0, false);
      Long8.MAX_VALUE = MAX_VALUE;
      var MAX_UNSIGNED_VALUE = fromBits(4294967295 | 0, 4294967295 | 0, true);
      Long8.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
      var MIN_VALUE = fromBits(0, 2147483648 | 0, false);
      Long8.MIN_VALUE = MIN_VALUE;
      var LongPrototype = Long8.prototype;
      LongPrototype.toInt = function toInt() {
        return this.unsigned ? this.low >>> 0 : this.low;
      };
      LongPrototype.toNumber = function toNumber() {
        if (this.unsigned)
          return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
      };
      LongPrototype.toString = function toString3(radix) {
        radix = radix || 10;
        if (radix < 2 || 36 < radix)
          throw RangeError("radix");
        if (this.isZero())
          return "0";
        if (this.isNegative()) {
          if (this.eq(MIN_VALUE)) {
            var radixLong = fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
            return div.toString(radix) + rem1.toInt().toString(radix);
          } else
            return "-" + this.neg().toString(radix);
        }
        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned), rem = this;
        var result = "";
        while (true) {
          var remDiv = rem.div(radixToPower), intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0, digits = intval.toString(radix);
          rem = remDiv;
          if (rem.isZero())
            return digits + result;
          else {
            while (digits.length < 6) {
              digits = "0" + digits;
            }
            result = "" + digits + result;
          }
        }
      };
      LongPrototype.getHighBits = function getHighBits() {
        return this.high;
      };
      LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
        return this.high >>> 0;
      };
      LongPrototype.getLowBits = function getLowBits() {
        return this.low;
      };
      LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
        return this.low >>> 0;
      };
      LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
        if (this.isNegative())
          return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        var val = this.high != 0 ? this.high : this.low;
        for (var bit = 31; bit > 0; bit--) {
          if ((val & 1 << bit) != 0)
            break;
        }
        return this.high != 0 ? bit + 33 : bit + 1;
      };
      LongPrototype.isZero = function isZero() {
        return this.high === 0 && this.low === 0;
      };
      LongPrototype.eqz = LongPrototype.isZero;
      LongPrototype.isNegative = function isNegative() {
        return !this.unsigned && this.high < 0;
      };
      LongPrototype.isPositive = function isPositive() {
        return this.unsigned || this.high >= 0;
      };
      LongPrototype.isOdd = function isOdd() {
        return (this.low & 1) === 1;
      };
      LongPrototype.isEven = function isEven() {
        return (this.low & 1) === 0;
      };
      LongPrototype.equals = function equals2(other) {
        if (!isLong(other))
          other = fromValue(other);
        if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1)
          return false;
        return this.high === other.high && this.low === other.low;
      };
      LongPrototype.eq = LongPrototype.equals;
      LongPrototype.notEquals = function notEquals(other) {
        return !this.eq(
          /* validates */
          other
        );
      };
      LongPrototype.neq = LongPrototype.notEquals;
      LongPrototype.ne = LongPrototype.notEquals;
      LongPrototype.lessThan = function lessThan(other) {
        return this.comp(
          /* validates */
          other
        ) < 0;
      };
      LongPrototype.lt = LongPrototype.lessThan;
      LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
        return this.comp(
          /* validates */
          other
        ) <= 0;
      };
      LongPrototype.lte = LongPrototype.lessThanOrEqual;
      LongPrototype.le = LongPrototype.lessThanOrEqual;
      LongPrototype.greaterThan = function greaterThan(other) {
        return this.comp(
          /* validates */
          other
        ) > 0;
      };
      LongPrototype.gt = LongPrototype.greaterThan;
      LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
        return this.comp(
          /* validates */
          other
        ) >= 0;
      };
      LongPrototype.gte = LongPrototype.greaterThanOrEqual;
      LongPrototype.ge = LongPrototype.greaterThanOrEqual;
      LongPrototype.compare = function compare5(other) {
        if (!isLong(other))
          other = fromValue(other);
        if (this.eq(other))
          return 0;
        var thisNeg = this.isNegative(), otherNeg = other.isNegative();
        if (thisNeg && !otherNeg)
          return -1;
        if (!thisNeg && otherNeg)
          return 1;
        if (!this.unsigned)
          return this.sub(other).isNegative() ? -1 : 1;
        return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
      };
      LongPrototype.comp = LongPrototype.compare;
      LongPrototype.negate = function negate() {
        if (!this.unsigned && this.eq(MIN_VALUE))
          return MIN_VALUE;
        return this.not().add(ONE);
      };
      LongPrototype.neg = LongPrototype.negate;
      LongPrototype.add = function add(addend) {
        if (!isLong(addend))
          addend = fromValue(addend);
        var a48 = this.high >>> 16;
        var a32 = this.high & 65535;
        var a16 = this.low >>> 16;
        var a00 = this.low & 65535;
        var b48 = addend.high >>> 16;
        var b32 = addend.high & 65535;
        var b16 = addend.low >>> 16;
        var b00 = addend.low & 65535;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 + b00;
        c16 += c00 >>> 16;
        c00 &= 65535;
        c16 += a16 + b16;
        c32 += c16 >>> 16;
        c16 &= 65535;
        c32 += a32 + b32;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c48 += a48 + b48;
        c48 &= 65535;
        return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
      };
      LongPrototype.subtract = function subtract(subtrahend) {
        if (!isLong(subtrahend))
          subtrahend = fromValue(subtrahend);
        return this.add(subtrahend.neg());
      };
      LongPrototype.sub = LongPrototype.subtract;
      LongPrototype.multiply = function multiply(multiplier) {
        if (this.isZero())
          return ZERO;
        if (!isLong(multiplier))
          multiplier = fromValue(multiplier);
        if (wasm) {
          var low = wasm["mul"](this.low, this.high, multiplier.low, multiplier.high);
          return fromBits(low, wasm["get_high"](), this.unsigned);
        }
        if (multiplier.isZero())
          return ZERO;
        if (this.eq(MIN_VALUE))
          return multiplier.isOdd() ? MIN_VALUE : ZERO;
        if (multiplier.eq(MIN_VALUE))
          return this.isOdd() ? MIN_VALUE : ZERO;
        if (this.isNegative()) {
          if (multiplier.isNegative())
            return this.neg().mul(multiplier.neg());
          else
            return this.neg().mul(multiplier).neg();
        } else if (multiplier.isNegative())
          return this.mul(multiplier.neg()).neg();
        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
          return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
        var a48 = this.high >>> 16;
        var a32 = this.high & 65535;
        var a16 = this.low >>> 16;
        var a00 = this.low & 65535;
        var b48 = multiplier.high >>> 16;
        var b32 = multiplier.high & 65535;
        var b16 = multiplier.low >>> 16;
        var b00 = multiplier.low & 65535;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 * b00;
        c16 += c00 >>> 16;
        c00 &= 65535;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c16 &= 65535;
        c16 += a00 * b16;
        c32 += c16 >>> 16;
        c16 &= 65535;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c32 += a00 * b32;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
        c48 &= 65535;
        return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
      };
      LongPrototype.mul = LongPrototype.multiply;
      LongPrototype.divide = function divide(divisor) {
        if (!isLong(divisor))
          divisor = fromValue(divisor);
        if (divisor.isZero())
          throw Error("division by zero");
        if (wasm) {
          if (!this.unsigned && this.high === -2147483648 && divisor.low === -1 && divisor.high === -1) {
            return this;
          }
          var low = (this.unsigned ? wasm["div_u"] : wasm["div_s"])(this.low, this.high, divisor.low, divisor.high);
          return fromBits(low, wasm["get_high"](), this.unsigned);
        }
        if (this.isZero())
          return this.unsigned ? UZERO : ZERO;
        var approx, rem, res;
        if (!this.unsigned) {
          if (this.eq(MIN_VALUE)) {
            if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
              return MIN_VALUE;
            else if (divisor.eq(MIN_VALUE))
              return ONE;
            else {
              var halfThis = this.shr(1);
              approx = halfThis.div(divisor).shl(1);
              if (approx.eq(ZERO)) {
                return divisor.isNegative() ? ONE : NEG_ONE;
              } else {
                rem = this.sub(divisor.mul(approx));
                res = approx.add(rem.div(divisor));
                return res;
              }
            }
          } else if (divisor.eq(MIN_VALUE))
            return this.unsigned ? UZERO : ZERO;
          if (this.isNegative()) {
            if (divisor.isNegative())
              return this.neg().div(divisor.neg());
            return this.neg().div(divisor).neg();
          } else if (divisor.isNegative())
            return this.div(divisor.neg()).neg();
          res = ZERO;
        } else {
          if (!divisor.unsigned)
            divisor = divisor.toUnsigned();
          if (divisor.gt(this))
            return UZERO;
          if (divisor.gt(this.shru(1)))
            return UONE;
          res = UZERO;
        }
        rem = this;
        while (rem.gte(divisor)) {
          approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
          var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48), approxRes = fromNumber(approx), approxRem = approxRes.mul(divisor);
          while (approxRem.isNegative() || approxRem.gt(rem)) {
            approx -= delta;
            approxRes = fromNumber(approx, this.unsigned);
            approxRem = approxRes.mul(divisor);
          }
          if (approxRes.isZero())
            approxRes = ONE;
          res = res.add(approxRes);
          rem = rem.sub(approxRem);
        }
        return res;
      };
      LongPrototype.div = LongPrototype.divide;
      LongPrototype.modulo = function modulo(divisor) {
        if (!isLong(divisor))
          divisor = fromValue(divisor);
        if (wasm) {
          var low = (this.unsigned ? wasm["rem_u"] : wasm["rem_s"])(this.low, this.high, divisor.low, divisor.high);
          return fromBits(low, wasm["get_high"](), this.unsigned);
        }
        return this.sub(this.div(divisor).mul(divisor));
      };
      LongPrototype.mod = LongPrototype.modulo;
      LongPrototype.rem = LongPrototype.modulo;
      LongPrototype.not = function not() {
        return fromBits(~this.low, ~this.high, this.unsigned);
      };
      LongPrototype.and = function and(other) {
        if (!isLong(other))
          other = fromValue(other);
        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
      };
      LongPrototype.or = function or(other) {
        if (!isLong(other))
          other = fromValue(other);
        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
      };
      LongPrototype.xor = function xor(other) {
        if (!isLong(other))
          other = fromValue(other);
        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
      };
      LongPrototype.shiftLeft = function shiftLeft(numBits) {
        if (isLong(numBits))
          numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
          return this;
        else if (numBits < 32)
          return fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);
        else
          return fromBits(0, this.low << numBits - 32, this.unsigned);
      };
      LongPrototype.shl = LongPrototype.shiftLeft;
      LongPrototype.shiftRight = function shiftRight(numBits) {
        if (isLong(numBits))
          numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
          return this;
        else if (numBits < 32)
          return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);
        else
          return fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
      };
      LongPrototype.shr = LongPrototype.shiftRight;
      LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
        if (isLong(numBits))
          numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
          return this;
        if (numBits < 32)
          return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >>> numBits, this.unsigned);
        if (numBits === 32)
          return fromBits(this.high, 0, this.unsigned);
        return fromBits(this.high >>> numBits - 32, 0, this.unsigned);
      };
      LongPrototype.shru = LongPrototype.shiftRightUnsigned;
      LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
      LongPrototype.rotateLeft = function rotateLeft(numBits) {
        var b;
        if (isLong(numBits))
          numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
          return this;
        if (numBits === 32)
          return fromBits(this.high, this.low, this.unsigned);
        if (numBits < 32) {
          b = 32 - numBits;
          return fromBits(this.low << numBits | this.high >>> b, this.high << numBits | this.low >>> b, this.unsigned);
        }
        numBits -= 32;
        b = 32 - numBits;
        return fromBits(this.high << numBits | this.low >>> b, this.low << numBits | this.high >>> b, this.unsigned);
      };
      LongPrototype.rotl = LongPrototype.rotateLeft;
      LongPrototype.rotateRight = function rotateRight(numBits) {
        var b;
        if (isLong(numBits))
          numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
          return this;
        if (numBits === 32)
          return fromBits(this.high, this.low, this.unsigned);
        if (numBits < 32) {
          b = 32 - numBits;
          return fromBits(this.high << b | this.low >>> numBits, this.low << b | this.high >>> numBits, this.unsigned);
        }
        numBits -= 32;
        b = 32 - numBits;
        return fromBits(this.low << b | this.high >>> numBits, this.high << b | this.low >>> numBits, this.unsigned);
      };
      LongPrototype.rotr = LongPrototype.rotateRight;
      LongPrototype.toSigned = function toSigned() {
        if (!this.unsigned)
          return this;
        return fromBits(this.low, this.high, false);
      };
      LongPrototype.toUnsigned = function toUnsigned3() {
        if (this.unsigned)
          return this;
        return fromBits(this.low, this.high, true);
      };
      LongPrototype.toBytes = function toBytes(le) {
        return le ? this.toBytesLE() : this.toBytesBE();
      };
      LongPrototype.toBytesLE = function toBytesLE() {
        var hi = this.high, lo = this.low;
        return [lo & 255, lo >>> 8 & 255, lo >>> 16 & 255, lo >>> 24, hi & 255, hi >>> 8 & 255, hi >>> 16 & 255, hi >>> 24];
      };
      LongPrototype.toBytesBE = function toBytesBE() {
        var hi = this.high, lo = this.low;
        return [hi >>> 24, hi >>> 16 & 255, hi >>> 8 & 255, hi & 255, lo >>> 24, lo >>> 16 & 255, lo >>> 8 & 255, lo & 255];
      };
      Long8.fromBytes = function fromBytes(bytes, unsigned, le) {
        return le ? Long8.fromBytesLE(bytes, unsigned) : Long8.fromBytesBE(bytes, unsigned);
      };
      Long8.fromBytesLE = function fromBytesLE(bytes, unsigned) {
        return new Long8(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
      };
      Long8.fromBytesBE = function fromBytesBE(bytes, unsigned) {
        return new Long8(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
      };
    }
  });

  // packages/floating-point-hex-parser/src/index.js
  function parse(input) {
    input = input.toUpperCase();
    var splitIndex = input.indexOf("P");
    var mantissa, exponent;
    if (splitIndex !== -1) {
      mantissa = input.substring(0, splitIndex);
      exponent = parseInt(input.substring(splitIndex + 1));
    } else {
      mantissa = input;
      exponent = 0;
    }
    var dotIndex = mantissa.indexOf(".");
    if (dotIndex !== -1) {
      var integerPart = parseInt(mantissa.substring(0, dotIndex), 16);
      var sign2 = Math.sign(integerPart);
      integerPart = sign2 * integerPart;
      var fractionLength = mantissa.length - dotIndex - 1;
      var fractionalPart = parseInt(mantissa.substring(dotIndex + 1), 16);
      var fraction = fractionLength > 0 ? fractionalPart / Math.pow(16, fractionLength) : 0;
      if (sign2 === 0) {
        if (fraction === 0) {
          mantissa = sign2;
        } else {
          if (Object.is(sign2, -0)) {
            mantissa = -fraction;
          } else {
            mantissa = fraction;
          }
        }
      } else {
        mantissa = sign2 * (integerPart + fraction);
      }
    } else {
      mantissa = parseInt(mantissa, 16);
    }
    return mantissa * (splitIndex !== -1 ? Math.pow(2, exponent) : 1);
  }
  var init_src = __esm({
    "packages/floating-point-hex-parser/src/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
    }
  });

  // packages/helper-api-error/src/index.js
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof18(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof18(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof2(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrapNativeSuper = function _wrapNativeSuper4(Class2) {
      if (Class2 === null || !_isNativeFunction(Class2))
        return Class2;
      if (typeof Class2 !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2))
          return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
      return _setPrototypeOf(Wrapper, Class2);
    };
    return _wrapNativeSuper(Class);
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct4(Parent2, args2, Class2) {
        var a = [null];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2)
          _setPrototypeOf(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var CompileError;
  var init_src2 = __esm({
    "packages/helper-api-error/src/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      CompileError = /* @__PURE__ */ function(_Error2) {
        _inherits(CompileError5, _Error2);
        var _super2 = _createSuper(CompileError5);
        function CompileError5() {
          _classCallCheck(this, CompileError5);
          return _super2.apply(this, arguments);
        }
        return CompileError5;
      }(/* @__PURE__ */ _wrapNativeSuper(Error));
    }
  });

  // packages/helper-numbers/src/index.js
  function parse32F(sourceString) {
    if (isHexLiteral(sourceString)) {
      return parse(sourceString);
    }
    if (isInfLiteral(sourceString)) {
      return sourceString[0] === "-" ? -1 : 1;
    }
    if (isNanLiteral(sourceString)) {
      return (sourceString[0] === "-" ? -1 : 1) * (sourceString.includes(":") ? parseInt(sourceString.substring(sourceString.indexOf(":") + 1), 16) : 4194304);
    }
    return parseFloat(sourceString);
  }
  function parse64F(sourceString) {
    if (isHexLiteral(sourceString)) {
      return parse(sourceString);
    }
    if (isInfLiteral(sourceString)) {
      return sourceString[0] === "-" ? -1 : 1;
    }
    if (isNanLiteral(sourceString)) {
      return (sourceString[0] === "-" ? -1 : 1) * (sourceString.includes(":") ? parseInt(sourceString.substring(sourceString.indexOf(":") + 1), 16) : 2251799813685248);
    }
    if (isHexLiteral(sourceString)) {
      return parse(sourceString);
    }
    return parseFloat(sourceString);
  }
  function parse32I(sourceString) {
    var value = 0;
    if (isHexLiteral(sourceString)) {
      value = ~~parseInt(sourceString, 16);
    } else if (isDecimalExponentLiteral(sourceString)) {
      throw new Error("This number literal format is yet to be implemented.");
    } else {
      value = parseInt(sourceString, 10);
    }
    return value;
  }
  function parseU32(sourceString) {
    var value = parse32I(sourceString);
    if (value < 0) {
      throw new CompileError("Illegal value for u32: " + sourceString);
    }
    return value;
  }
  function parse64I(sourceString) {
    var _long;
    if (isHexLiteral(sourceString)) {
      _long = import_long.default.fromString(sourceString, false, 16);
    } else if (isDecimalExponentLiteral(sourceString)) {
      throw new Error("This number literal format is yet to be implemented.");
    } else {
      _long = import_long.default.fromString(sourceString);
    }
    return {
      high: _long.high,
      low: _long.low
    };
  }
  function isInfLiteral(sourceString) {
    return INF_WORD.test(sourceString.toLowerCase());
  }
  function isNanLiteral(sourceString) {
    return NAN_WORD.test(sourceString.toLowerCase());
  }
  function isDecimalExponentLiteral(sourceString) {
    return !isHexLiteral(sourceString) && sourceString.toUpperCase().includes("E");
  }
  function isHexLiteral(sourceString) {
    return sourceString.substring(0, 2).toUpperCase() === "0X" || sourceString.substring(0, 3).toUpperCase() === "-0X";
  }
  var import_long, NAN_WORD, INF_WORD;
  var init_src3 = __esm({
    "packages/helper-numbers/src/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      import_long = __toESM(require_long());
      init_src();
      init_src2();
      NAN_WORD = /^\+?-?nan/;
      INF_WORD = /^\+?-?inf/;
    }
  });

  // packages/ast/src/node-helpers.js
  function numberLiteralFromRaw(rawValue) {
    var instructionType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "i32";
    var original = rawValue;
    if (typeof rawValue === "string") {
      rawValue = rawValue.replace(/_/g, "");
    }
    if (typeof rawValue === "number") {
      return numberLiteral(rawValue, String(original));
    } else {
      switch (instructionType) {
        case "i32": {
          return numberLiteral(parse32I(rawValue), String(original));
        }
        case "u32": {
          return numberLiteral(parseU32(rawValue), String(original));
        }
        case "i64": {
          return longNumberLiteral(parse64I(rawValue), String(original));
        }
        case "f32": {
          return floatLiteral(parse32F(rawValue), isNanLiteral(rawValue), isInfLiteral(rawValue), String(original));
        }
        default: {
          return floatLiteral(parse64F(rawValue), isNanLiteral(rawValue), isInfLiteral(rawValue), String(original));
        }
      }
    }
  }
  function instruction(id) {
    var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var namedArgs = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return instr(id, void 0, args, namedArgs);
  }
  function objectInstruction(id, object) {
    var args = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var namedArgs = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return instr(id, object, args, namedArgs);
  }
  function withLoc(n, end, start2) {
    var loc = {
      start: start2,
      end
    };
    n.loc = loc;
    return n;
  }
  function withRaw(n, raw) {
    n.raw = raw;
    return n;
  }
  function funcParam(valtype, id) {
    return {
      id,
      valtype
    };
  }
  function indexLiteral(value) {
    var x = numberLiteralFromRaw(value, "u32");
    return x;
  }
  function memIndexLiteral(value) {
    var x = numberLiteralFromRaw(value, "u32");
    return x;
  }
  var init_node_helpers = __esm({
    "packages/ast/src/node-helpers.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src3();
      init_nodes();
    }
  });

  // packages/ast/src/node-path.js
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function findParent(_ref, cb) {
    var parentPath = _ref.parentPath;
    if (parentPath == null) {
      throw new Error("node is root");
    }
    var currentPath = parentPath;
    while (cb(currentPath) !== false) {
      if (currentPath.parentPath == null) {
        return null;
      }
      currentPath = currentPath.parentPath;
    }
    return currentPath.node;
  }
  function insertBefore(context, newNode) {
    return insert(context, newNode);
  }
  function insertAfter(context, newNode) {
    return insert(context, newNode, 1);
  }
  function insert(_ref2, newNode) {
    var node = _ref2.node, inList = _ref2.inList, parentPath = _ref2.parentPath, parentKey = _ref2.parentKey;
    var indexOffset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    if (!inList) {
      throw new Error("inList error: insert can only be used for nodes that are within lists");
    }
    if (!(parentPath != null)) {
      throw new Error("parentPath != null error: Can not remove root node");
    }
    var parentList = parentPath.node[parentKey];
    var indexInList = parentList.findIndex(function(n) {
      return n === node;
    });
    parentList.splice(indexInList + indexOffset, 0, newNode);
  }
  function remove(_ref3) {
    var node = _ref3.node, parentKey = _ref3.parentKey, parentPath = _ref3.parentPath;
    if (!(parentPath != null)) {
      throw new Error("parentPath != null error: Can not remove root node");
    }
    var parentNode = parentPath.node;
    var parentProperty = parentNode[parentKey];
    if (Array.isArray(parentProperty)) {
      parentNode[parentKey] = parentProperty.filter(function(n) {
        return n !== node;
      });
    } else {
      delete parentNode[parentKey];
    }
    node._deleted = true;
  }
  function stop(context) {
    context.shouldStop = true;
  }
  function replaceWith(context, newNode) {
    var parentNode = context.parentPath.node;
    var parentProperty = parentNode[context.parentKey];
    if (Array.isArray(parentProperty)) {
      var indexInList = parentProperty.findIndex(function(n) {
        return n === context.node;
      });
      parentProperty.splice(indexInList, 1, newNode);
    } else {
      parentNode[context.parentKey] = newNode;
    }
    context.node._deleted = true;
    context.node = newNode;
  }
  function bindNodeOperations(operations, context) {
    var keys = Object.keys(operations);
    var boundOperations = {};
    keys.forEach(function(key) {
      boundOperations[key] = operations[key].bind(null, context);
    });
    return boundOperations;
  }
  function createPathOperations(context) {
    return bindNodeOperations({
      findParent,
      replaceWith,
      remove,
      insertBefore,
      insertAfter,
      stop
    }, context);
  }
  function createPath(context) {
    var path = _objectSpread({}, context);
    Object.assign(path, createPathOperations(path));
    return path;
  }
  var init_node_path = __esm({
    "packages/ast/src/node-path.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
    }
  });

  // packages/ast/src/traverse.js
  function walk(context, callback) {
    var stop2 = false;
    function innerWalk(context2, callback2) {
      if (stop2) {
        return;
      }
      var node = context2.node;
      if (node === void 0) {
        console.warn("traversing with an empty context");
        return;
      }
      if (node._deleted === true) {
        return;
      }
      var path = createPath(context2);
      callback2(node.type, path);
      if (path.shouldStop) {
        stop2 = true;
        return;
      }
      Object.keys(node).forEach(function(prop) {
        var value = node[prop];
        if (value === null || value === void 0) {
          return;
        }
        var valueAsArray = Array.isArray(value) ? value : [value];
        valueAsArray.forEach(function(childNode) {
          if (typeof childNode.type === "string") {
            var childContext = {
              node: childNode,
              parentKey: prop,
              parentPath: path,
              shouldStop: false,
              inList: Array.isArray(value)
            };
            innerWalk(childContext, callback2);
          }
        });
      });
    }
    innerWalk(context, callback);
  }
  function traverse(node, visitors) {
    var before = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : noop;
    var after = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : noop;
    Object.keys(visitors).forEach(function(visitor) {
      if (!nodeAndUnionTypes.includes(visitor)) {
        throw new Error("Unexpected visitor ".concat(visitor));
      }
    });
    var context = {
      node,
      inList: false,
      shouldStop: false,
      parentPath: null,
      parentKey: null
    };
    walk(context, function(type6, path) {
      if (typeof visitors[type6] === "function") {
        before(type6, path);
        visitors[type6](path);
        after(type6, path);
      }
      var unionTypes = unionTypesMap[type6];
      if (!unionTypes) {
        throw new Error("Unexpected node type ".concat(type6));
      }
      unionTypes.forEach(function(unionType) {
        if (typeof visitors[unionType] === "function") {
          before(unionType, path);
          visitors[unionType](path);
          after(unionType, path);
        }
      });
    });
  }
  var noop;
  var init_traverse = __esm({
    "packages/ast/src/traverse.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_node_path();
      init_nodes();
      noop = function noop2() {
      };
    }
  });

  // packages/ast/src/signatures.js
  function sign(input, output) {
    return [input, output];
  }
  var u32, i32, i64, f32, f64, vector, controlInstructions, parametricInstructions, variableInstructions, memoryInstructions, numericInstructions, signatures;
  var init_signatures = __esm({
    "packages/ast/src/signatures.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      u32 = "u32";
      i32 = "i32";
      i64 = "i64";
      f32 = "f32";
      f64 = "f64";
      vector = function vector2(t5) {
        var vecType = [t5];
        vecType.vector = true;
        return vecType;
      };
      controlInstructions = {
        unreachable: sign([], []),
        nop: sign([], []),
        // block ?
        // loop ?
        // if ?
        // if else ?
        br: sign([u32], []),
        br_if: sign([u32], []),
        br_table: sign(vector(u32), []),
        "return": sign([], []),
        call: sign([u32], []),
        call_indirect: sign([u32], [])
      };
      parametricInstructions = {
        drop: sign([], []),
        select: sign([], [])
      };
      variableInstructions = {
        get_local: sign([u32], []),
        set_local: sign([u32], []),
        tee_local: sign([u32], []),
        get_global: sign([u32], []),
        set_global: sign([u32], [])
      };
      memoryInstructions = {
        "i32.load": sign([u32, u32], [i32]),
        "i64.load": sign([u32, u32], []),
        "f32.load": sign([u32, u32], []),
        "f64.load": sign([u32, u32], []),
        "i32.load8_s": sign([u32, u32], [i32]),
        "i32.load8_u": sign([u32, u32], [i32]),
        "i32.load16_s": sign([u32, u32], [i32]),
        "i32.load16_u": sign([u32, u32], [i32]),
        "i64.load8_s": sign([u32, u32], [i64]),
        "i64.load8_u": sign([u32, u32], [i64]),
        "i64.load16_s": sign([u32, u32], [i64]),
        "i64.load16_u": sign([u32, u32], [i64]),
        "i64.load32_s": sign([u32, u32], [i64]),
        "i64.load32_u": sign([u32, u32], [i64]),
        "i32.store": sign([u32, u32], []),
        "i64.store": sign([u32, u32], []),
        "f32.store": sign([u32, u32], []),
        "f64.store": sign([u32, u32], []),
        "i32.store8": sign([u32, u32], []),
        "i32.store16": sign([u32, u32], []),
        "i64.store8": sign([u32, u32], []),
        "i64.store16": sign([u32, u32], []),
        "i64.store32": sign([u32, u32], []),
        current_memory: sign([], []),
        grow_memory: sign([], [])
      };
      numericInstructions = {
        "i32.const": sign([i32], [i32]),
        "i64.const": sign([i64], [i64]),
        "f32.const": sign([f32], [f32]),
        "f64.const": sign([f64], [f64]),
        "i32.eqz": sign([i32], [i32]),
        "i32.eq": sign([i32, i32], [i32]),
        "i32.ne": sign([i32, i32], [i32]),
        "i32.lt_s": sign([i32, i32], [i32]),
        "i32.lt_u": sign([i32, i32], [i32]),
        "i32.gt_s": sign([i32, i32], [i32]),
        "i32.gt_u": sign([i32, i32], [i32]),
        "i32.le_s": sign([i32, i32], [i32]),
        "i32.le_u": sign([i32, i32], [i32]),
        "i32.ge_s": sign([i32, i32], [i32]),
        "i32.ge_u": sign([i32, i32], [i32]),
        "i64.eqz": sign([i64], [i64]),
        "i64.eq": sign([i64, i64], [i32]),
        "i64.ne": sign([i64, i64], [i32]),
        "i64.lt_s": sign([i64, i64], [i32]),
        "i64.lt_u": sign([i64, i64], [i32]),
        "i64.gt_s": sign([i64, i64], [i32]),
        "i64.gt_u": sign([i64, i64], [i32]),
        "i64.le_s": sign([i64, i64], [i32]),
        "i64.le_u": sign([i64, i64], [i32]),
        "i64.ge_s": sign([i64, i64], [i32]),
        "i64.ge_u": sign([i64, i64], [i32]),
        "f32.eq": sign([f32, f32], [i32]),
        "f32.ne": sign([f32, f32], [i32]),
        "f32.lt": sign([f32, f32], [i32]),
        "f32.gt": sign([f32, f32], [i32]),
        "f32.le": sign([f32, f32], [i32]),
        "f32.ge": sign([f32, f32], [i32]),
        "f64.eq": sign([f64, f64], [i32]),
        "f64.ne": sign([f64, f64], [i32]),
        "f64.lt": sign([f64, f64], [i32]),
        "f64.gt": sign([f64, f64], [i32]),
        "f64.le": sign([f64, f64], [i32]),
        "f64.ge": sign([f64, f64], [i32]),
        "i32.clz": sign([i32], [i32]),
        "i32.ctz": sign([i32], [i32]),
        "i32.popcnt": sign([i32], [i32]),
        "i32.add": sign([i32, i32], [i32]),
        "i32.sub": sign([i32, i32], [i32]),
        "i32.mul": sign([i32, i32], [i32]),
        "i32.div_s": sign([i32, i32], [i32]),
        "i32.div_u": sign([i32, i32], [i32]),
        "i32.rem_s": sign([i32, i32], [i32]),
        "i32.rem_u": sign([i32, i32], [i32]),
        "i32.and": sign([i32, i32], [i32]),
        "i32.or": sign([i32, i32], [i32]),
        "i32.xor": sign([i32, i32], [i32]),
        "i32.shl": sign([i32, i32], [i32]),
        "i32.shr_s": sign([i32, i32], [i32]),
        "i32.shr_u": sign([i32, i32], [i32]),
        "i32.rotl": sign([i32, i32], [i32]),
        "i32.rotr": sign([i32, i32], [i32]),
        "i64.clz": sign([i64], [i64]),
        "i64.ctz": sign([i64], [i64]),
        "i64.popcnt": sign([i64], [i64]),
        "i64.add": sign([i64, i64], [i64]),
        "i64.sub": sign([i64, i64], [i64]),
        "i64.mul": sign([i64, i64], [i64]),
        "i64.div_s": sign([i64, i64], [i64]),
        "i64.div_u": sign([i64, i64], [i64]),
        "i64.rem_s": sign([i64, i64], [i64]),
        "i64.rem_u": sign([i64, i64], [i64]),
        "i64.and": sign([i64, i64], [i64]),
        "i64.or": sign([i64, i64], [i64]),
        "i64.xor": sign([i64, i64], [i64]),
        "i64.shl": sign([i64, i64], [i64]),
        "i64.shr_s": sign([i64, i64], [i64]),
        "i64.shr_u": sign([i64, i64], [i64]),
        "i64.rotl": sign([i64, i64], [i64]),
        "i64.rotr": sign([i64, i64], [i64]),
        "f32.abs": sign([f32], [f32]),
        "f32.neg": sign([f32], [f32]),
        "f32.ceil": sign([f32], [f32]),
        "f32.floor": sign([f32], [f32]),
        "f32.trunc": sign([f32], [f32]),
        "f32.nearest": sign([f32], [f32]),
        "f32.sqrt": sign([f32], [f32]),
        "f32.add": sign([f32, f32], [f32]),
        "f32.sub": sign([f32, f32], [f32]),
        "f32.mul": sign([f32, f32], [f32]),
        "f32.div": sign([f32, f32], [f32]),
        "f32.min": sign([f32, f32], [f32]),
        "f32.max": sign([f32, f32], [f32]),
        "f32.copysign": sign([f32, f32], [f32]),
        "f64.abs": sign([f64], [f64]),
        "f64.neg": sign([f64], [f64]),
        "f64.ceil": sign([f64], [f64]),
        "f64.floor": sign([f64], [f64]),
        "f64.trunc": sign([f64], [f64]),
        "f64.nearest": sign([f64], [f64]),
        "f64.sqrt": sign([f64], [f64]),
        "f64.add": sign([f64, f64], [f64]),
        "f64.sub": sign([f64, f64], [f64]),
        "f64.mul": sign([f64, f64], [f64]),
        "f64.div": sign([f64, f64], [f64]),
        "f64.min": sign([f64, f64], [f64]),
        "f64.max": sign([f64, f64], [f64]),
        "f64.copysign": sign([f64, f64], [f64]),
        "i32.wrap/i64": sign([i64], [i32]),
        "i32.trunc_s/f32": sign([f32], [i32]),
        "i32.trunc_u/f32": sign([f32], [i32]),
        "i32.trunc_s/f64": sign([f32], [i32]),
        "i32.trunc_u/f64": sign([f64], [i32]),
        "i64.extend_s/i32": sign([i32], [i64]),
        "i64.extend_u/i32": sign([i32], [i64]),
        "i64.trunc_s/f32": sign([f32], [i64]),
        "i64.trunc_u/f32": sign([f32], [i64]),
        "i64.trunc_s/f64": sign([f64], [i64]),
        "i64.trunc_u/f64": sign([f64], [i64]),
        "f32.convert_s/i32": sign([i32], [f32]),
        "f32.convert_u/i32": sign([i32], [f32]),
        "f32.convert_s/i64": sign([i64], [f32]),
        "f32.convert_u/i64": sign([i64], [f32]),
        "f32.demote/f64": sign([f64], [f32]),
        "f64.convert_s/i32": sign([i32], [f64]),
        "f64.convert_u/i32": sign([i32], [f64]),
        "f64.convert_s/i64": sign([i64], [f64]),
        "f64.convert_u/i64": sign([i64], [f64]),
        "f64.promote/f32": sign([f32], [f64]),
        "i32.reinterpret/f32": sign([f32], [i32]),
        "i64.reinterpret/f64": sign([f64], [i64]),
        "f32.reinterpret/i32": sign([i32], [f32]),
        "f64.reinterpret/i64": sign([i64], [f64])
      };
      signatures = Object.assign({}, controlInstructions, parametricInstructions, variableInstructions, memoryInstructions, numericInstructions);
    }
  });

  // packages/helper-wasm-bytecode/src/section.js
  function getSectionForNode(n) {
    switch (n.type) {
      case "ModuleImport":
        return "import";
      case "CallInstruction":
      case "CallIndirectInstruction":
      case "Func":
      case "Instr":
        return "code";
      case "ModuleExport":
        return "export";
      case "Start":
        return "start";
      case "TypeInstruction":
        return "type";
      case "IndexInFuncSection":
        return "func";
      case "Global":
        return "global";
      default:
        return;
    }
  }
  var init_section = __esm({
    "packages/helper-wasm-bytecode/src/section.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
    }
  });

  // packages/helper-wasm-bytecode/src/index.js
  function invertMap(obj) {
    var keyModifierFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function(k) {
      return k;
    };
    var result = {};
    var keys = Object.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[keyModifierFn(obj[keys[i]])] = keys[i];
    }
    return result;
  }
  function createSymbolObject(name, object) {
    var numberOfArgs = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    return {
      name,
      object,
      numberOfArgs
    };
  }
  function createSymbol(name) {
    var numberOfArgs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return {
      name,
      numberOfArgs
    };
  }
  var illegalop, magicModuleHeader, moduleVersion, types, exportTypes, exportTypesByName, valtypes, valtypesByString, tableTypes, blockTypes, globalTypes, globalTypesByString, importTypes, sections, symbolsByByte, symbolsByName, src_default;
  var init_src4 = __esm({
    "packages/helper-wasm-bytecode/src/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_section();
      illegalop = "illegal";
      magicModuleHeader = [0, 97, 115, 109];
      moduleVersion = [1, 0, 0, 0];
      types = {
        func: 96,
        result: 64
      };
      exportTypes = {
        0: "Func",
        1: "Table",
        2: "Memory",
        3: "Global"
      };
      exportTypesByName = invertMap(exportTypes);
      valtypes = {
        127: "i32",
        126: "i64",
        125: "f32",
        124: "f64",
        123: "v128"
      };
      valtypesByString = invertMap(valtypes);
      tableTypes = {
        112: "anyfunc"
      };
      blockTypes = Object.assign({}, valtypes, {
        // https://webassembly.github.io/spec/core/binary/types.html#binary-blocktype
        64: null,
        // https://webassembly.github.io/spec/core/binary/types.html#binary-valtype
        127: "i32",
        126: "i64",
        125: "f32",
        124: "f64"
      });
      globalTypes = {
        0: "const",
        1: "var"
      };
      globalTypesByString = invertMap(globalTypes);
      importTypes = {
        0: "func",
        1: "table",
        2: "memory",
        3: "global"
      };
      sections = {
        custom: 0,
        type: 1,
        "import": 2,
        func: 3,
        table: 4,
        memory: 5,
        global: 6,
        "export": 7,
        start: 8,
        element: 9,
        code: 10,
        data: 11
      };
      symbolsByByte = {
        0: createSymbol("unreachable"),
        1: createSymbol("nop"),
        2: createSymbol("block"),
        3: createSymbol("loop"),
        4: createSymbol("if"),
        5: createSymbol("else"),
        6: illegalop,
        7: illegalop,
        8: illegalop,
        9: illegalop,
        10: illegalop,
        11: createSymbol("end"),
        12: createSymbol("br", 1),
        13: createSymbol("br_if", 1),
        14: createSymbol("br_table"),
        15: createSymbol("return"),
        16: createSymbol("call", 1),
        17: createSymbol("call_indirect", 2),
        18: illegalop,
        19: illegalop,
        20: illegalop,
        21: illegalop,
        22: illegalop,
        23: illegalop,
        24: illegalop,
        25: illegalop,
        26: createSymbol("drop"),
        27: createSymbol("select"),
        28: illegalop,
        29: illegalop,
        30: illegalop,
        31: illegalop,
        32: createSymbol("get_local", 1),
        33: createSymbol("set_local", 1),
        34: createSymbol("tee_local", 1),
        35: createSymbol("get_global", 1),
        36: createSymbol("set_global", 1),
        37: illegalop,
        38: illegalop,
        39: illegalop,
        40: createSymbolObject("load", "u32", 1),
        41: createSymbolObject("load", "u64", 1),
        42: createSymbolObject("load", "f32", 1),
        43: createSymbolObject("load", "f64", 1),
        44: createSymbolObject("load8_s", "u32", 1),
        45: createSymbolObject("load8_u", "u32", 1),
        46: createSymbolObject("load16_s", "u32", 1),
        47: createSymbolObject("load16_u", "u32", 1),
        48: createSymbolObject("load8_s", "u64", 1),
        49: createSymbolObject("load8_u", "u64", 1),
        50: createSymbolObject("load16_s", "u64", 1),
        51: createSymbolObject("load16_u", "u64", 1),
        52: createSymbolObject("load32_s", "u64", 1),
        53: createSymbolObject("load32_u", "u64", 1),
        54: createSymbolObject("store", "u32", 1),
        55: createSymbolObject("store", "u64", 1),
        56: createSymbolObject("store", "f32", 1),
        57: createSymbolObject("store", "f64", 1),
        58: createSymbolObject("store8", "u32", 1),
        59: createSymbolObject("store16", "u32", 1),
        60: createSymbolObject("store8", "u64", 1),
        61: createSymbolObject("store16", "u64", 1),
        62: createSymbolObject("store32", "u64", 1),
        63: createSymbolObject("current_memory"),
        64: createSymbolObject("grow_memory"),
        65: createSymbolObject("const", "i32", 1),
        66: createSymbolObject("const", "i64", 1),
        67: createSymbolObject("const", "f32", 1),
        68: createSymbolObject("const", "f64", 1),
        69: createSymbolObject("eqz", "i32"),
        70: createSymbolObject("eq", "i32"),
        71: createSymbolObject("ne", "i32"),
        72: createSymbolObject("lt_s", "i32"),
        73: createSymbolObject("lt_u", "i32"),
        74: createSymbolObject("gt_s", "i32"),
        75: createSymbolObject("gt_u", "i32"),
        76: createSymbolObject("le_s", "i32"),
        77: createSymbolObject("le_u", "i32"),
        78: createSymbolObject("ge_s", "i32"),
        79: createSymbolObject("ge_u", "i32"),
        80: createSymbolObject("eqz", "i64"),
        81: createSymbolObject("eq", "i64"),
        82: createSymbolObject("ne", "i64"),
        83: createSymbolObject("lt_s", "i64"),
        84: createSymbolObject("lt_u", "i64"),
        85: createSymbolObject("gt_s", "i64"),
        86: createSymbolObject("gt_u", "i64"),
        87: createSymbolObject("le_s", "i64"),
        88: createSymbolObject("le_u", "i64"),
        89: createSymbolObject("ge_s", "i64"),
        90: createSymbolObject("ge_u", "i64"),
        91: createSymbolObject("eq", "f32"),
        92: createSymbolObject("ne", "f32"),
        93: createSymbolObject("lt", "f32"),
        94: createSymbolObject("gt", "f32"),
        95: createSymbolObject("le", "f32"),
        96: createSymbolObject("ge", "f32"),
        97: createSymbolObject("eq", "f64"),
        98: createSymbolObject("ne", "f64"),
        99: createSymbolObject("lt", "f64"),
        100: createSymbolObject("gt", "f64"),
        101: createSymbolObject("le", "f64"),
        102: createSymbolObject("ge", "f64"),
        103: createSymbolObject("clz", "i32"),
        104: createSymbolObject("ctz", "i32"),
        105: createSymbolObject("popcnt", "i32"),
        106: createSymbolObject("add", "i32"),
        107: createSymbolObject("sub", "i32"),
        108: createSymbolObject("mul", "i32"),
        109: createSymbolObject("div_s", "i32"),
        110: createSymbolObject("div_u", "i32"),
        111: createSymbolObject("rem_s", "i32"),
        112: createSymbolObject("rem_u", "i32"),
        113: createSymbolObject("and", "i32"),
        114: createSymbolObject("or", "i32"),
        115: createSymbolObject("xor", "i32"),
        116: createSymbolObject("shl", "i32"),
        117: createSymbolObject("shr_s", "i32"),
        118: createSymbolObject("shr_u", "i32"),
        119: createSymbolObject("rotl", "i32"),
        120: createSymbolObject("rotr", "i32"),
        121: createSymbolObject("clz", "i64"),
        122: createSymbolObject("ctz", "i64"),
        123: createSymbolObject("popcnt", "i64"),
        124: createSymbolObject("add", "i64"),
        125: createSymbolObject("sub", "i64"),
        126: createSymbolObject("mul", "i64"),
        127: createSymbolObject("div_s", "i64"),
        128: createSymbolObject("div_u", "i64"),
        129: createSymbolObject("rem_s", "i64"),
        130: createSymbolObject("rem_u", "i64"),
        131: createSymbolObject("and", "i64"),
        132: createSymbolObject("or", "i64"),
        133: createSymbolObject("xor", "i64"),
        134: createSymbolObject("shl", "i64"),
        135: createSymbolObject("shr_s", "i64"),
        136: createSymbolObject("shr_u", "i64"),
        137: createSymbolObject("rotl", "i64"),
        138: createSymbolObject("rotr", "i64"),
        139: createSymbolObject("abs", "f32"),
        140: createSymbolObject("neg", "f32"),
        141: createSymbolObject("ceil", "f32"),
        142: createSymbolObject("floor", "f32"),
        143: createSymbolObject("trunc", "f32"),
        144: createSymbolObject("nearest", "f32"),
        145: createSymbolObject("sqrt", "f32"),
        146: createSymbolObject("add", "f32"),
        147: createSymbolObject("sub", "f32"),
        148: createSymbolObject("mul", "f32"),
        149: createSymbolObject("div", "f32"),
        150: createSymbolObject("min", "f32"),
        151: createSymbolObject("max", "f32"),
        152: createSymbolObject("copysign", "f32"),
        153: createSymbolObject("abs", "f64"),
        154: createSymbolObject("neg", "f64"),
        155: createSymbolObject("ceil", "f64"),
        156: createSymbolObject("floor", "f64"),
        157: createSymbolObject("trunc", "f64"),
        158: createSymbolObject("nearest", "f64"),
        159: createSymbolObject("sqrt", "f64"),
        160: createSymbolObject("add", "f64"),
        161: createSymbolObject("sub", "f64"),
        162: createSymbolObject("mul", "f64"),
        163: createSymbolObject("div", "f64"),
        164: createSymbolObject("min", "f64"),
        165: createSymbolObject("max", "f64"),
        166: createSymbolObject("copysign", "f64"),
        167: createSymbolObject("wrap/i64", "i32"),
        168: createSymbolObject("trunc_s/f32", "i32"),
        169: createSymbolObject("trunc_u/f32", "i32"),
        170: createSymbolObject("trunc_s/f64", "i32"),
        171: createSymbolObject("trunc_u/f64", "i32"),
        172: createSymbolObject("extend_s/i32", "i64"),
        173: createSymbolObject("extend_u/i32", "i64"),
        174: createSymbolObject("trunc_s/f32", "i64"),
        175: createSymbolObject("trunc_u/f32", "i64"),
        176: createSymbolObject("trunc_s/f64", "i64"),
        177: createSymbolObject("trunc_u/f64", "i64"),
        178: createSymbolObject("convert_s/i32", "f32"),
        179: createSymbolObject("convert_u/i32", "f32"),
        180: createSymbolObject("convert_s/i64", "f32"),
        181: createSymbolObject("convert_u/i64", "f32"),
        182: createSymbolObject("demote/f64", "f32"),
        183: createSymbolObject("convert_s/i32", "f64"),
        184: createSymbolObject("convert_u/i32", "f64"),
        185: createSymbolObject("convert_s/i64", "f64"),
        186: createSymbolObject("convert_u/i64", "f64"),
        187: createSymbolObject("promote/f32", "f64"),
        188: createSymbolObject("reinterpret/f32", "i32"),
        189: createSymbolObject("reinterpret/f64", "i64"),
        190: createSymbolObject("reinterpret/i32", "f32"),
        191: createSymbolObject("reinterpret/i64", "f64"),
        // Atomic Memory Instructions
        65024: createSymbol("memory.atomic.notify", 1),
        65025: createSymbol("memory.atomic.wait32", 1),
        65026: createSymbol("memory.atomic.wait64", 1),
        65040: createSymbolObject("atomic.load", "i32", 1),
        65041: createSymbolObject("atomic.load", "i64", 1),
        65042: createSymbolObject("atomic.load8_u", "i32", 1),
        65043: createSymbolObject("atomic.load16_u", "i32", 1),
        65044: createSymbolObject("atomic.load8_u", "i64", 1),
        65045: createSymbolObject("atomic.load16_u", "i64", 1),
        65046: createSymbolObject("atomic.load32_u", "i64", 1),
        65047: createSymbolObject("atomic.store", "i32", 1),
        65048: createSymbolObject("atomic.store", "i64", 1),
        65049: createSymbolObject("atomic.store8_u", "i32", 1),
        65050: createSymbolObject("atomic.store16_u", "i32", 1),
        65051: createSymbolObject("atomic.store8_u", "i64", 1),
        65052: createSymbolObject("atomic.store16_u", "i64", 1),
        65053: createSymbolObject("atomic.store32_u", "i64", 1),
        65054: createSymbolObject("atomic.rmw.add", "i32", 1),
        65055: createSymbolObject("atomic.rmw.add", "i64", 1),
        65056: createSymbolObject("atomic.rmw8_u.add_u", "i32", 1),
        65057: createSymbolObject("atomic.rmw16_u.add_u", "i32", 1),
        65058: createSymbolObject("atomic.rmw8_u.add_u", "i64", 1),
        65059: createSymbolObject("atomic.rmw16_u.add_u", "i64", 1),
        65060: createSymbolObject("atomic.rmw32_u.add_u", "i64", 1),
        65061: createSymbolObject("atomic.rmw.sub", "i32", 1),
        65062: createSymbolObject("atomic.rmw.sub", "i64", 1),
        65063: createSymbolObject("atomic.rmw8_u.sub_u", "i32", 1),
        65064: createSymbolObject("atomic.rmw16_u.sub_u", "i32", 1),
        65065: createSymbolObject("atomic.rmw8_u.sub_u", "i64", 1),
        65066: createSymbolObject("atomic.rmw16_u.sub_u", "i64", 1),
        65067: createSymbolObject("atomic.rmw32_u.sub_u", "i64", 1),
        65068: createSymbolObject("atomic.rmw.and", "i32", 1),
        65069: createSymbolObject("atomic.rmw.and", "i64", 1),
        65070: createSymbolObject("atomic.rmw8_u.and_u", "i32", 1),
        65071: createSymbolObject("atomic.rmw16_u.and_u", "i32", 1),
        65072: createSymbolObject("atomic.rmw8_u.and_u", "i64", 1),
        65073: createSymbolObject("atomic.rmw16_u.and_u", "i64", 1),
        65074: createSymbolObject("atomic.rmw32_u.and_u", "i64", 1),
        65075: createSymbolObject("atomic.rmw.or", "i32", 1),
        65076: createSymbolObject("atomic.rmw.or", "i64", 1),
        65077: createSymbolObject("atomic.rmw8_u.or_u", "i32", 1),
        65078: createSymbolObject("atomic.rmw16_u.or_u", "i32", 1),
        65079: createSymbolObject("atomic.rmw8_u.or_u", "i64", 1),
        65080: createSymbolObject("atomic.rmw16_u.or_u", "i64", 1),
        65081: createSymbolObject("atomic.rmw32_u.or_u", "i64", 1),
        65082: createSymbolObject("atomic.rmw.xor", "i32", 1),
        65083: createSymbolObject("atomic.rmw.xor", "i64", 1),
        65084: createSymbolObject("atomic.rmw8_u.xor_u", "i32", 1),
        65085: createSymbolObject("atomic.rmw16_u.xor_u", "i32", 1),
        65086: createSymbolObject("atomic.rmw8_u.xor_u", "i64", 1),
        65087: createSymbolObject("atomic.rmw16_u.xor_u", "i64", 1),
        65088: createSymbolObject("atomic.rmw32_u.xor_u", "i64", 1),
        65089: createSymbolObject("atomic.rmw.xchg", "i32", 1),
        65090: createSymbolObject("atomic.rmw.xchg", "i64", 1),
        65091: createSymbolObject("atomic.rmw8_u.xchg_u", "i32", 1),
        65092: createSymbolObject("atomic.rmw16_u.xchg_u", "i32", 1),
        65093: createSymbolObject("atomic.rmw8_u.xchg_u", "i64", 1),
        65094: createSymbolObject("atomic.rmw16_u.xchg_u", "i64", 1),
        65095: createSymbolObject("atomic.rmw32_u.xchg_u", "i64", 1),
        65096: createSymbolObject("atomic.rmw.cmpxchg", "i32", 1),
        65097: createSymbolObject("atomic.rmw.cmpxchg", "i64", 1),
        65098: createSymbolObject("atomic.rmw8_u.cmpxchg_u", "i32", 1),
        65099: createSymbolObject("atomic.rmw16_u.cmpxchg_u", "i32", 1),
        65100: createSymbolObject("atomic.rmw8_u.cmpxchg_u", "i64", 1),
        65101: createSymbolObject("atomic.rmw16_u.cmpxchg_u", "i64", 1),
        65102: createSymbolObject("atomic.rmw32_u.cmpxchg_u", "i64", 1)
      };
      symbolsByName = invertMap(symbolsByByte, function(obj) {
        if (typeof obj.object === "string") {
          return "".concat(obj.object, ".").concat(obj.name);
        }
        return obj.name;
      });
      src_default = {
        symbolsByByte,
        sections,
        magicModuleHeader,
        moduleVersion,
        types,
        valtypes,
        exportTypes,
        blockTypes,
        tableTypes,
        globalTypes,
        importTypes,
        valtypesByString,
        globalTypesByString,
        exportTypesByName,
        symbolsByName
      };
    }
  });

  // packages/ast/src/utils.js
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _typeof3(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof3 = function _typeof18(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof3 = function _typeof18(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof3(obj);
  }
  function isAnonymous(ident) {
    return ident.raw === "";
  }
  function getSectionMetadata(ast, name) {
    var section;
    traverse(ast, {
      SectionMetadata: function(_SectionMetadata) {
        function SectionMetadata(_x) {
          return _SectionMetadata.apply(this, arguments);
        }
        SectionMetadata.toString = function() {
          return _SectionMetadata.toString();
        };
        return SectionMetadata;
      }(function(_ref) {
        var node = _ref.node;
        if (node.section === name) {
          section = node;
        }
      })
    });
    return section;
  }
  function getSectionMetadatas(ast, name) {
    var sections2 = [];
    traverse(ast, {
      SectionMetadata: function(_SectionMetadata2) {
        function SectionMetadata(_x2) {
          return _SectionMetadata2.apply(this, arguments);
        }
        SectionMetadata.toString = function() {
          return _SectionMetadata2.toString();
        };
        return SectionMetadata;
      }(function(_ref2) {
        var node = _ref2.node;
        if (node.section === name) {
          sections2.push(node);
        }
      })
    });
    return sections2;
  }
  function sortSectionMetadata(m) {
    if (m.metadata == null) {
      console.warn("sortSectionMetadata: no metadata to sort");
      return;
    }
    m.metadata.sections.sort(function(a, b) {
      var aId = src_default.sections[a.section];
      var bId = src_default.sections[b.section];
      if (typeof aId !== "number" || typeof bId !== "number") {
        throw new Error("Section id not found");
      }
      return aId - bId;
    });
  }
  function orderedInsertNode(m, n) {
    assertHasLoc(n);
    var didInsert = false;
    if (n.type === "ModuleExport") {
      m.fields.push(n);
      return;
    }
    m.fields = m.fields.reduce(function(acc, field) {
      var fieldEndCol = Infinity;
      if (field.loc != null) {
        fieldEndCol = field.loc.end.column;
      }
      if (didInsert === false && n.loc.start.column < fieldEndCol) {
        didInsert = true;
        acc.push(n);
      }
      acc.push(field);
      return acc;
    }, []);
    if (didInsert === false) {
      m.fields.push(n);
    }
  }
  function assertHasLoc(n) {
    if (n.loc == null || n.loc.start == null || n.loc.end == null) {
      throw new Error("Internal failure: node (".concat(JSON.stringify(n.type), ") has no location information"));
    }
  }
  function getEndOfSection(s) {
    assertHasLoc(s.size);
    return s.startOffset + s.size.value + (s.size.loc.end.column - s.size.loc.start.column);
  }
  function shiftLoc(node, delta) {
    node.loc.start.column += delta;
    node.loc.end.column += delta;
  }
  function shiftSection(ast, node, delta) {
    if (node.type !== "SectionMetadata") {
      throw new Error("Can not shift node " + JSON.stringify(node.type));
    }
    node.startOffset += delta;
    if (_typeof3(node.size.loc) === "object") {
      shiftLoc(node.size, delta);
    }
    if (_typeof3(node.vectorOfSize) === "object" && _typeof3(node.vectorOfSize.loc) === "object") {
      shiftLoc(node.vectorOfSize, delta);
    }
    var sectionName = node.section;
    traverse(ast, {
      Node: function Node(_ref3) {
        var node2 = _ref3.node;
        var section = getSectionForNode(node2);
        if (section === sectionName && _typeof3(node2.loc) === "object") {
          shiftLoc(node2, delta);
        }
      }
    });
  }
  function signatureForOpcode(object, name) {
    var opcodeName = name;
    if (object !== void 0 && object !== "") {
      opcodeName = object + "." + name;
    }
    var sign2 = signatures[opcodeName];
    if (sign2 == void 0) {
      return [object, object];
    }
    return sign2[0];
  }
  function getUniqueNameGenerator() {
    var inc = {};
    return function() {
      var prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "temp";
      if (!(prefix in inc)) {
        inc[prefix] = 0;
      } else {
        inc[prefix] = inc[prefix] + 1;
      }
      return prefix + "_" + inc[prefix];
    };
  }
  function getStartByteOffset(n) {
    if (typeof n.loc === "undefined" || typeof n.loc.start === "undefined") {
      throw new Error(
        // $FlowIgnore
        "Can not get byte offset without loc informations, node: " + String(n.id)
      );
    }
    return n.loc.start.column;
  }
  function getEndByteOffset(n) {
    if (typeof n.loc === "undefined" || typeof n.loc.end === "undefined") {
      throw new Error("Can not get byte offset without loc informations, node: " + n.type);
    }
    return n.loc.end.column;
  }
  function getFunctionBeginingByteOffset(n) {
    if (!(n.body.length > 0)) {
      throw new Error("n.body.length > 0 error: unknown");
    }
    var _n$body = _slicedToArray(n.body, 1), firstInstruction = _n$body[0];
    return getStartByteOffset(firstInstruction);
  }
  function getEndBlockByteOffset(n) {
    if (!(n.instr.length > 0 || n.body.length > 0)) {
      throw new Error("n.instr.length > 0 || n.body.length > 0 error: unknown");
    }
    var lastInstruction;
    if (n.instr) {
      lastInstruction = n.instr[n.instr.length - 1];
    }
    if (n.body) {
      lastInstruction = n.body[n.body.length - 1];
    }
    if (!(_typeof3(lastInstruction) === "object")) {
      throw new Error('typeof lastInstruction === "object" error: unknown');
    }
    return getStartByteOffset(lastInstruction);
  }
  function getStartBlockByteOffset(n) {
    if (!(n.instr.length > 0 || n.body.length > 0)) {
      throw new Error("n.instr.length > 0 || n.body.length > 0 error: unknown");
    }
    var fistInstruction;
    if (n.instr) {
      var _n$instr = _slicedToArray(n.instr, 1);
      fistInstruction = _n$instr[0];
    }
    if (n.body) {
      var _n$body2 = _slicedToArray(n.body, 1);
      fistInstruction = _n$body2[0];
    }
    if (!(_typeof3(fistInstruction) === "object")) {
      throw new Error('typeof fistInstruction === "object" error: unknown');
    }
    return getStartByteOffset(fistInstruction);
  }
  var init_utils = __esm({
    "packages/ast/src/utils.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_signatures();
      init_traverse();
      init_src4();
      init_src4();
    }
  });

  // packages/ast/src/clone.js
  function cloneNode(n) {
    return Object.assign({}, n);
  }
  var init_clone = __esm({
    "packages/ast/src/clone.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
    }
  });

  // packages/ast/src/transform/ast-module-to-module-context/index.js
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function moduleContextFromModuleAST(m) {
    var moduleContext = new ModuleContext();
    if (!(m.type === "Module")) {
      throw new Error('m.type === "Module" error: unknown');
    }
    m.fields.forEach(function(field) {
      switch (field.type) {
        case "Start": {
          moduleContext.setStart(field.index);
          break;
        }
        case "TypeInstruction": {
          moduleContext.addType(field);
          break;
        }
        case "Func": {
          moduleContext.addFunction(field);
          break;
        }
        case "Global": {
          moduleContext.defineGlobal(field);
          break;
        }
        case "ModuleImport": {
          switch (field.descr.type) {
            case "GlobalType": {
              moduleContext.importGlobal(field.descr.valtype, field.descr.mutability);
              break;
            }
            case "Memory": {
              moduleContext.addMemory(field.descr.limits.min, field.descr.limits.max);
              break;
            }
            case "FuncImportDescr": {
              moduleContext.importFunction(field.descr);
              break;
            }
            case "Table": {
              break;
            }
            default:
              throw new Error("Unsupported ModuleImport of type " + JSON.stringify(field.descr.type));
          }
          break;
        }
        case "Memory": {
          moduleContext.addMemory(field.limits.min, field.limits.max);
          break;
        }
      }
    });
    return moduleContext;
  }
  var ModuleContext;
  var init_ast_module_to_module_context = __esm({
    "packages/ast/src/transform/ast-module-to-module-context/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_nodes();
      ModuleContext = /* @__PURE__ */ function() {
        function ModuleContext2() {
          _classCallCheck2(this, ModuleContext2);
          this.funcs = [];
          this.funcsOffsetByIdentifier = [];
          this.types = [];
          this.globals = [];
          this.globalsOffsetByIdentifier = [];
          this.mems = [];
          this.locals = [];
          this.labels = [];
          this["return"] = [];
          this.debugName = "unknown";
          this.start = null;
        }
        _createClass(ModuleContext2, [{
          key: "setStart",
          value: function setStart(index) {
            this.start = index.value;
          }
          /**
           * Get start function
           */
        }, {
          key: "getStart",
          value: function getStart() {
            return this.start;
          }
          /**
           * Reset the active stack frame
           */
        }, {
          key: "newContext",
          value: function newContext(debugName, expectedResult) {
            this.locals = [];
            this.labels = [expectedResult];
            this["return"] = expectedResult;
            this.debugName = debugName;
          }
          /**
           * Functions
           */
        }, {
          key: "addFunction",
          value: function addFunction(func3) {
            var _ref = func3.signature || {}, _ref$params = _ref.params, args = _ref$params === void 0 ? [] : _ref$params, _ref$results = _ref.results, result = _ref$results === void 0 ? [] : _ref$results;
            args = args.map(function(arg) {
              return arg.valtype;
            });
            this.funcs.push({
              args,
              result
            });
            if (typeof func3.name !== "undefined") {
              this.funcsOffsetByIdentifier[func3.name.value] = this.funcs.length - 1;
            }
          }
        }, {
          key: "importFunction",
          value: function importFunction(funcimport) {
            if (isSignature(funcimport.signature)) {
              var _funcimport$signature = funcimport.signature, args = _funcimport$signature.params, result = _funcimport$signature.results;
              args = args.map(function(arg) {
                return arg.valtype;
              });
              this.funcs.push({
                args,
                result
              });
            } else {
              if (!isNumberLiteral(funcimport.signature)) {
                throw new Error("isNumberLiteral(funcimport.signature) error: unknown");
              }
              var typeId = funcimport.signature.value;
              if (!this.hasType(typeId)) {
                throw new Error("this.hasType(typeId) error: unknown");
              }
              var signature2 = this.getType(typeId);
              this.funcs.push({
                args: signature2.params.map(function(arg) {
                  return arg.valtype;
                }),
                result: signature2.results
              });
            }
            if (typeof funcimport.id !== "undefined") {
              this.funcsOffsetByIdentifier[funcimport.id.value] = this.funcs.length - 1;
            }
          }
        }, {
          key: "hasFunction",
          value: function hasFunction(index) {
            return typeof this.getFunction(index) !== "undefined";
          }
        }, {
          key: "getFunction",
          value: function getFunction(index) {
            if (typeof index !== "number") {
              throw new Error("getFunction only supported for number index");
            }
            return this.funcs[index];
          }
        }, {
          key: "getFunctionOffsetByIdentifier",
          value: function getFunctionOffsetByIdentifier(name) {
            if (!(typeof name === "string")) {
              throw new Error('typeof name === "string" error: unknown');
            }
            return this.funcsOffsetByIdentifier[name];
          }
          /**
           * Labels
           */
        }, {
          key: "addLabel",
          value: function addLabel(result) {
            this.labels.unshift(result);
          }
        }, {
          key: "hasLabel",
          value: function hasLabel(index) {
            return this.labels.length > index && index >= 0;
          }
        }, {
          key: "getLabel",
          value: function getLabel(index) {
            return this.labels[index];
          }
        }, {
          key: "popLabel",
          value: function popLabel() {
            this.labels.shift();
          }
          /**
           * Locals
           */
        }, {
          key: "hasLocal",
          value: function hasLocal(index) {
            return typeof this.getLocal(index) !== "undefined";
          }
        }, {
          key: "getLocal",
          value: function getLocal(index) {
            return this.locals[index];
          }
        }, {
          key: "addLocal",
          value: function addLocal(type6) {
            this.locals.push(type6);
          }
          /**
           * Types
           */
        }, {
          key: "addType",
          value: function addType(type6) {
            if (!(type6.functype.type === "Signature")) {
              throw new Error('type.functype.type === "Signature" error: unknown');
            }
            this.types.push(type6.functype);
          }
        }, {
          key: "hasType",
          value: function hasType(index) {
            return this.types[index] !== void 0;
          }
        }, {
          key: "getType",
          value: function getType3(index) {
            return this.types[index];
          }
          /**
           * Globals
           */
        }, {
          key: "hasGlobal",
          value: function hasGlobal(index) {
            return this.globals.length > index && index >= 0;
          }
        }, {
          key: "getGlobal",
          value: function getGlobal(index) {
            return this.globals[index].type;
          }
        }, {
          key: "getGlobalOffsetByIdentifier",
          value: function getGlobalOffsetByIdentifier(name) {
            if (!(typeof name === "string")) {
              throw new Error('typeof name === "string" error: unknown');
            }
            return this.globalsOffsetByIdentifier[name];
          }
        }, {
          key: "defineGlobal",
          value: function defineGlobal(global4) {
            var type6 = global4.globalType.valtype;
            var mutability = global4.globalType.mutability;
            this.globals.push({
              type: type6,
              mutability
            });
            if (typeof global4.name !== "undefined") {
              this.globalsOffsetByIdentifier[global4.name.value] = this.globals.length - 1;
            }
          }
        }, {
          key: "importGlobal",
          value: function importGlobal(type6, mutability) {
            this.globals.push({
              type: type6,
              mutability
            });
          }
        }, {
          key: "isMutableGlobal",
          value: function isMutableGlobal(index) {
            return this.globals[index].mutability === "var";
          }
        }, {
          key: "isImmutableGlobal",
          value: function isImmutableGlobal(index) {
            return this.globals[index].mutability === "const";
          }
          /**
           * Memories
           */
        }, {
          key: "hasMemory",
          value: function hasMemory(index) {
            return this.mems.length > index && index >= 0;
          }
        }, {
          key: "addMemory",
          value: function addMemory(min, max) {
            this.mems.push({
              min,
              max
            });
          }
        }, {
          key: "getMemory",
          value: function getMemory(index) {
            return this.mems[index];
          }
        }]);
        return ModuleContext2;
      }();
    }
  });

  // packages/ast/src/index.js
  var src_exports = {};
  __export(src_exports, {
    assertBinaryModule: () => assertBinaryModule,
    assertBlockComment: () => assertBlockComment,
    assertBlockInstruction: () => assertBlockInstruction,
    assertByteArray: () => assertByteArray,
    assertCallIndirectInstruction: () => assertCallIndirectInstruction,
    assertCallInstruction: () => assertCallInstruction,
    assertData: () => assertData,
    assertElem: () => assertElem,
    assertFloatLiteral: () => assertFloatLiteral,
    assertFunc: () => assertFunc,
    assertFuncImportDescr: () => assertFuncImportDescr,
    assertFunctionNameMetadata: () => assertFunctionNameMetadata,
    assertGlobal: () => assertGlobal,
    assertGlobalType: () => assertGlobalType,
    assertHasLoc: () => assertHasLoc,
    assertIdentifier: () => assertIdentifier,
    assertIfInstruction: () => assertIfInstruction,
    assertIndexInFuncSection: () => assertIndexInFuncSection,
    assertInstr: () => assertInstr,
    assertInternalBrUnless: () => assertInternalBrUnless,
    assertInternalCallExtern: () => assertInternalCallExtern,
    assertInternalEndAndReturn: () => assertInternalEndAndReturn,
    assertInternalGoto: () => assertInternalGoto,
    assertLeadingComment: () => assertLeadingComment,
    assertLimit: () => assertLimit,
    assertLocalNameMetadata: () => assertLocalNameMetadata,
    assertLongNumberLiteral: () => assertLongNumberLiteral,
    assertLoopInstruction: () => assertLoopInstruction,
    assertMemory: () => assertMemory,
    assertModule: () => assertModule,
    assertModuleExport: () => assertModuleExport,
    assertModuleExportDescr: () => assertModuleExportDescr,
    assertModuleImport: () => assertModuleImport,
    assertModuleMetadata: () => assertModuleMetadata,
    assertModuleNameMetadata: () => assertModuleNameMetadata,
    assertNumberLiteral: () => assertNumberLiteral,
    assertProducerMetadata: () => assertProducerMetadata,
    assertProducerMetadataVersionedName: () => assertProducerMetadataVersionedName,
    assertProducersSectionMetadata: () => assertProducersSectionMetadata,
    assertProgram: () => assertProgram,
    assertQuoteModule: () => assertQuoteModule,
    assertSectionMetadata: () => assertSectionMetadata,
    assertSignature: () => assertSignature,
    assertStart: () => assertStart,
    assertStringLiteral: () => assertStringLiteral,
    assertTable: () => assertTable,
    assertTypeInstruction: () => assertTypeInstruction,
    assertValtypeLiteral: () => assertValtypeLiteral,
    binaryModule: () => binaryModule,
    blockComment: () => blockComment,
    blockInstruction: () => blockInstruction,
    byteArray: () => byteArray,
    callIndirectInstruction: () => callIndirectInstruction,
    callInstruction: () => callInstruction,
    cloneNode: () => cloneNode,
    data: () => data,
    elem: () => elem,
    floatLiteral: () => floatLiteral,
    func: () => func,
    funcImportDescr: () => funcImportDescr,
    funcParam: () => funcParam,
    functionNameMetadata: () => functionNameMetadata,
    getEndBlockByteOffset: () => getEndBlockByteOffset,
    getEndByteOffset: () => getEndByteOffset,
    getEndOfSection: () => getEndOfSection,
    getFunctionBeginingByteOffset: () => getFunctionBeginingByteOffset,
    getSectionMetadata: () => getSectionMetadata,
    getSectionMetadatas: () => getSectionMetadatas,
    getStartBlockByteOffset: () => getStartBlockByteOffset,
    getStartByteOffset: () => getStartByteOffset,
    getUniqueNameGenerator: () => getUniqueNameGenerator,
    global: () => global2,
    globalType: () => globalType,
    identifier: () => identifier,
    ifInstruction: () => ifInstruction,
    indexInFuncSection: () => indexInFuncSection,
    indexLiteral: () => indexLiteral,
    instr: () => instr,
    instruction: () => instruction,
    internalBrUnless: () => internalBrUnless,
    internalCallExtern: () => internalCallExtern,
    internalEndAndReturn: () => internalEndAndReturn,
    internalGoto: () => internalGoto,
    isAnonymous: () => isAnonymous,
    isBinaryModule: () => isBinaryModule,
    isBlock: () => isBlock,
    isBlockComment: () => isBlockComment,
    isBlockInstruction: () => isBlockInstruction,
    isByteArray: () => isByteArray,
    isCallIndirectInstruction: () => isCallIndirectInstruction,
    isCallInstruction: () => isCallInstruction,
    isData: () => isData,
    isElem: () => isElem,
    isExpression: () => isExpression,
    isFloatLiteral: () => isFloatLiteral,
    isFunc: () => isFunc,
    isFuncImportDescr: () => isFuncImportDescr,
    isFunctionNameMetadata: () => isFunctionNameMetadata,
    isGlobal: () => isGlobal,
    isGlobalType: () => isGlobalType,
    isIdentifier: () => isIdentifier,
    isIfInstruction: () => isIfInstruction,
    isImportDescr: () => isImportDescr,
    isIndexInFuncSection: () => isIndexInFuncSection,
    isInstr: () => isInstr,
    isInstruction: () => isInstruction,
    isInternalBrUnless: () => isInternalBrUnless,
    isInternalCallExtern: () => isInternalCallExtern,
    isInternalEndAndReturn: () => isInternalEndAndReturn,
    isInternalGoto: () => isInternalGoto,
    isIntrinsic: () => isIntrinsic,
    isLeadingComment: () => isLeadingComment,
    isLimit: () => isLimit,
    isLocalNameMetadata: () => isLocalNameMetadata,
    isLongNumberLiteral: () => isLongNumberLiteral,
    isLoopInstruction: () => isLoopInstruction,
    isMemory: () => isMemory,
    isModule: () => isModule,
    isModuleExport: () => isModuleExport,
    isModuleExportDescr: () => isModuleExportDescr,
    isModuleImport: () => isModuleImport,
    isModuleMetadata: () => isModuleMetadata,
    isModuleNameMetadata: () => isModuleNameMetadata,
    isNode: () => isNode,
    isNumberLiteral: () => isNumberLiteral,
    isNumericLiteral: () => isNumericLiteral,
    isProducerMetadata: () => isProducerMetadata,
    isProducerMetadataVersionedName: () => isProducerMetadataVersionedName,
    isProducersSectionMetadata: () => isProducersSectionMetadata,
    isProgram: () => isProgram,
    isQuoteModule: () => isQuoteModule,
    isSectionMetadata: () => isSectionMetadata,
    isSignature: () => isSignature,
    isStart: () => isStart,
    isStringLiteral: () => isStringLiteral,
    isTable: () => isTable,
    isTypeInstruction: () => isTypeInstruction,
    isValtypeLiteral: () => isValtypeLiteral,
    leadingComment: () => leadingComment,
    limit: () => limit,
    localNameMetadata: () => localNameMetadata,
    longNumberLiteral: () => longNumberLiteral,
    loopInstruction: () => loopInstruction,
    memIndexLiteral: () => memIndexLiteral,
    memory: () => memory,
    module: () => module,
    moduleContextFromModuleAST: () => moduleContextFromModuleAST,
    moduleExport: () => moduleExport,
    moduleExportDescr: () => moduleExportDescr,
    moduleImport: () => moduleImport,
    moduleMetadata: () => moduleMetadata,
    moduleNameMetadata: () => moduleNameMetadata,
    nodeAndUnionTypes: () => nodeAndUnionTypes,
    numberLiteral: () => numberLiteral,
    numberLiteralFromRaw: () => numberLiteralFromRaw,
    objectInstruction: () => objectInstruction,
    orderedInsertNode: () => orderedInsertNode,
    producerMetadata: () => producerMetadata,
    producerMetadataVersionedName: () => producerMetadataVersionedName,
    producersSectionMetadata: () => producersSectionMetadata,
    program: () => program,
    quoteModule: () => quoteModule,
    sectionMetadata: () => sectionMetadata,
    shiftLoc: () => shiftLoc,
    shiftSection: () => shiftSection,
    signature: () => signature,
    signatureForOpcode: () => signatureForOpcode,
    signatures: () => signatures,
    sortSectionMetadata: () => sortSectionMetadata,
    start: () => start,
    stringLiteral: () => stringLiteral,
    table: () => table,
    traverse: () => traverse,
    typeInstruction: () => typeInstruction,
    unionTypesMap: () => unionTypesMap,
    valtypeLiteral: () => valtypeLiteral,
    withLoc: () => withLoc,
    withRaw: () => withRaw
  });
  var init_src5 = __esm({
    "packages/ast/src/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_nodes();
      init_node_helpers();
      init_traverse();
      init_signatures();
      init_utils();
      init_clone();
      init_ast_module_to_module_context();
    }
  });

  // packages/wast-printer/src/index.js
  var import_long2;
  var init_src6 = __esm({
    "packages/wast-printer/src/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src5();
      import_long2 = __toESM(require_long());
    }
  });

  // packages/helper-code-frame/src/index.js
  function _typeof4(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof4 = function _typeof18(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof4 = function _typeof18(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof4(obj);
  }
  function repeat(_char, nb) {
    return Array(nb).fill(_char).join("");
  }
  function codeFrameFromSource(source, loc) {
    var start2 = loc.start, end = loc.end;
    var length = 1;
    if (_typeof4(end) === "object") {
      length = end.column - start2.column + 1;
    }
    return source.split("\n").reduce(function(acc, line, lineNbr) {
      if (Math.abs(start2.line - lineNbr) < SHOW_LINES_AROUND_POINTER) {
        acc += line + "\n";
      }
      if (lineNbr === start2.line - 1) {
        acc += repeat(" ", start2.column - 1);
        acc += repeat("^", length);
        acc += "\n";
      }
      return acc;
    }, "");
  }
  var SHOW_LINES_AROUND_POINTER;
  var init_src7 = __esm({
    "packages/helper-code-frame/src/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src6();
      SHOW_LINES_AROUND_POINTER = 5;
    }
  });

  // packages/wast-parser/src/string-literals.js
  function decodeControlCharacter(_char) {
    switch (_char) {
      case "t":
        return 9;
      case "n":
        return 10;
      case "r":
        return 13;
      case '"':
        return 34;
      case "\u2032":
        return 39;
      case "\\":
        return 92;
    }
    return -1;
  }
  function parseString(value) {
    var byteArray2 = [];
    var index = 0;
    while (index < value.length) {
      var charCode = value.charCodeAt(index);
      if (CONTROL_CODES.indexOf(charCode) !== -1) {
        throw new Error("ASCII control characters are not permitted within string literals");
      }
      if (charCode === QUOTE_CHAR) {
        throw new Error("quotes are not permitted within string literals");
      }
      if (charCode === ESCAPE_CHAR) {
        var firstChar = value.substr(index + 1, 1);
        var decodedControlChar = decodeControlCharacter(firstChar);
        if (decodedControlChar !== -1) {
          byteArray2.push(decodedControlChar);
          index += 2;
        } else {
          var hexValue = value.substr(index + 1, 2);
          if (!/^[0-9A-F]{2}$/i.test(hexValue)) {
            throw new Error("invalid character encoding");
          }
          byteArray2.push(parseInt(hexValue, 16));
          index += 3;
        }
      } else {
        byteArray2.push(charCode);
        index++;
      }
    }
    return byteArray2;
  }
  var CONTROL_CODES, ESCAPE_CHAR, QUOTE_CHAR;
  var init_string_literals = __esm({
    "packages/wast-parser/src/string-literals.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      CONTROL_CODES = [
        0,
        // null
        7,
        // bell
        8,
        // backspace
        9,
        // horizontal
        10,
        // line feed
        11,
        // vertical tab
        12,
        // form feed
        13,
        // carriage return
        26,
        // Control-Z
        27,
        // escape
        127
        // delete
      ];
      ESCAPE_CHAR = 92;
      QUOTE_CHAR = 34;
    }
  });

  // packages/helper-fsm/src/index.js
  function _slicedToArray2(arr, i) {
    return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
  }
  function _nonIterableRest2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray2(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray2(o, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit2(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles2(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _classCallCheck3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties2(Constructor, staticProps);
    return Constructor;
  }
  function makeTransition(regex, nextState) {
    var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref$n = _ref.n, n = _ref$n === void 0 ? 1 : _ref$n, allowedSeparator = _ref.allowedSeparator;
    return function(instance) {
      if (allowedSeparator) {
        if (instance.input[instance.ptr] === allowedSeparator) {
          if (regex.test(instance.input.substring(instance.ptr - 1, instance.ptr))) {
            return [instance.currentState, 1];
          } else {
            return [instance.terminatingState, 0];
          }
        }
      }
      if (regex.test(instance.input.substring(instance.ptr, instance.ptr + n))) {
        return [nextState, n];
      }
      return false;
    };
  }
  function combineTransitions(transitions) {
    return function() {
      var match = false;
      var currentTransitions = transitions[this.currentState] || [];
      for (var i = 0; i < currentTransitions.length; ++i) {
        match = currentTransitions[i](this);
        if (match !== false) {
          break;
        }
      }
      return match || [this.terminatingState, 0];
    };
  }
  var STOP, FSM;
  var init_src8 = __esm({
    "packages/helper-fsm/src/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      STOP = Symbol("STOP");
      FSM = /* @__PURE__ */ function() {
        function FSM2(transitions, initialState) {
          var terminatingState = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : STOP;
          _classCallCheck3(this, FSM2);
          this.initialState = initialState;
          this.terminatingState = terminatingState;
          if (terminatingState === STOP || !transitions[terminatingState]) {
            transitions[terminatingState] = [];
          }
          this.transitionFunction = combineTransitions.call(this, transitions);
        }
        _createClass2(FSM2, [{
          key: "run",
          value: function run(input) {
            this.input = input;
            this.ptr = 0;
            this.currentState = this.initialState;
            var value = "";
            var eatLength, nextState;
            while (this.currentState !== this.terminatingState && this.ptr < this.input.length) {
              var _this$transitionFunct = this.transitionFunction();
              var _this$transitionFunct2 = _slicedToArray2(_this$transitionFunct, 2);
              nextState = _this$transitionFunct2[0];
              eatLength = _this$transitionFunct2[1];
              value += this.input.substring(this.ptr, this.ptr += eatLength);
              this.currentState = nextState;
            }
            return value;
          }
        }]);
        return FSM2;
      }();
    }
  });

  // packages/wast-parser/src/tokenizer.js
  function getCodeFrame(source, line, column) {
    var loc = {
      start: {
        line,
        column
      }
    };
    return "\n" + codeFrameFromSource(source, loc) + "\n";
  }
  function isNewLine(_char) {
    return _char.charCodeAt(0) === 10 || _char.charCodeAt(0) === 13;
  }
  function Token(type6, value, start2, end) {
    var opts = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
    var token = {
      type: type6,
      value,
      loc: {
        start: start2,
        end
      }
    };
    if (Object.keys(opts).length > 0) {
      token["opts"] = opts;
    }
    return token;
  }
  function tokenize(input) {
    var current = 0;
    var _char2 = input[current];
    var column = 1;
    var line = 1;
    var tokens2 = [];
    function pushToken(type6) {
      return function(v) {
        var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var startColumn2 = opts.startColumn || column - String(v).length;
        delete opts.startColumn;
        var endColumn2 = opts.endColumn || startColumn2 + String(v).length - 1;
        delete opts.endColumn;
        var start2 = {
          line,
          column: startColumn2
        };
        var end = {
          line,
          column: endColumn2
        };
        tokens2.push(Token(type6, v, start2, end, opts));
      };
    }
    var pushCloseParenToken = pushToken(tokenTypes.closeParen);
    var pushOpenParenToken = pushToken(tokenTypes.openParen);
    var pushNumberToken = pushToken(tokenTypes.number);
    var pushValtypeToken = pushToken(tokenTypes.valtype);
    var pushNameToken = pushToken(tokenTypes.name);
    var pushIdentifierToken = pushToken(tokenTypes.identifier);
    var pushKeywordToken = pushToken(tokenTypes.keyword);
    var pushDotToken = pushToken(tokenTypes.dot);
    var pushStringToken = pushToken(tokenTypes.string);
    var pushCommentToken = pushToken(tokenTypes.comment);
    var pushEqualToken = pushToken(tokenTypes.equal);
    function lookahead() {
      var length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      return input.substring(current + offset, current + offset + length).toLowerCase();
    }
    function eatCharacter() {
      var amount = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      column += amount;
      current += amount;
      _char2 = input[current];
    }
    while (current < input.length) {
      if (_char2 === ";" && lookahead() === ";") {
        var startColumn = column;
        eatCharacter(2);
        var text = "";
        while (!isNewLine(_char2)) {
          text += _char2;
          eatCharacter();
          if (_char2 === void 0) {
            break;
          }
        }
        var endColumn = column;
        pushCommentToken(text, {
          type: "leading",
          startColumn,
          endColumn
        });
        continue;
      }
      if (_char2 === "(" && lookahead() === ";") {
        var _startColumn = column;
        eatCharacter(2);
        var _text = "";
        while (true) {
          _char2 = input[current];
          if (_char2 === ";" && lookahead() === ")") {
            eatCharacter(2);
            break;
          }
          _text += _char2;
          eatCharacter();
          if (isNewLine(_char2)) {
            line++;
            column = 0;
          }
        }
        var _endColumn = column;
        pushCommentToken(_text, {
          type: "block",
          startColumn: _startColumn,
          endColumn: _endColumn
        });
        continue;
      }
      if (_char2 === "(") {
        pushOpenParenToken(_char2);
        eatCharacter();
        continue;
      }
      if (_char2 === "=") {
        pushEqualToken(_char2);
        eatCharacter();
        continue;
      }
      if (_char2 === ")") {
        pushCloseParenToken(_char2);
        eatCharacter();
        continue;
      }
      if (isNewLine(_char2)) {
        line++;
        eatCharacter();
        column = 0;
        continue;
      }
      if (WHITESPACE.test(_char2)) {
        eatCharacter();
        continue;
      }
      if (_char2 === "$") {
        var _startColumn2 = column;
        eatCharacter();
        var value = "";
        while (idchar.test(_char2)) {
          value += _char2;
          eatCharacter();
        }
        var _endColumn2 = column;
        pushIdentifierToken(value, {
          startColumn: _startColumn2,
          endColumn: _endColumn2
        });
        continue;
      }
      if (NUMBERS.test(_char2) || NUMBER_KEYWORDS.test(lookahead(3, 0)) || _char2 === "-" || _char2 === "+") {
        var _startColumn3 = column;
        var _value = numberLiteralFSM.run(input.slice(current));
        if (_value === "") {
          throw new Error(getCodeFrame(input, line, column) + "Unexpected character " + JSON.stringify(_char2));
        }
        pushNumberToken(_value, {
          startColumn: _startColumn3
        });
        eatCharacter(_value.length);
        if (_char2 && !PARENS.test(_char2) && !WHITESPACE.test(_char2)) {
          throw new Error(getCodeFrame(input, line, column) + "Unexpected character " + JSON.stringify(_char2));
        }
        continue;
      }
      if (_char2 === '"') {
        var _startColumn4 = column;
        var _value2 = "";
        eatCharacter();
        while (_char2 !== '"') {
          if (isNewLine(_char2)) {
            throw new Error(getCodeFrame(input, line, column) + "Unexpected character " + JSON.stringify(_char2));
          }
          _value2 += _char2;
          eatCharacter();
        }
        eatCharacter();
        var _endColumn3 = column;
        pushStringToken(_value2, {
          startColumn: _startColumn4,
          endColumn: _endColumn3
        });
        continue;
      }
      if (LETTERS.test(_char2)) {
        var _value3 = "";
        var _startColumn5 = column;
        while (_char2 && LETTERS.test(_char2)) {
          _value3 += _char2;
          eatCharacter();
        }
        if (_char2 === ".") {
          var dotStartColumn = column;
          if (valtypes2.indexOf(_value3) !== -1) {
            pushValtypeToken(_value3, {
              startColumn: _startColumn5
            });
          } else {
            pushNameToken(_value3);
          }
          while (_char2 === ".") {
            eatCharacter();
            _value3 = "";
            var nameStartColumn = column;
            while (LETTERS.test(_char2)) {
              _value3 += _char2;
              eatCharacter();
            }
            pushDotToken(".", {
              startColumn: dotStartColumn
            });
            pushNameToken(_value3, {
              startColumn: nameStartColumn
            });
          }
          continue;
        }
        if (typeof keywords[_value3] === "string") {
          pushKeywordToken(_value3, {
            startColumn: _startColumn5
          });
          continue;
        }
        if (valtypes2.indexOf(_value3) !== -1) {
          pushValtypeToken(_value3, {
            startColumn: _startColumn5
          });
          continue;
        }
        pushNameToken(_value3, {
          startColumn: _startColumn5
        });
        continue;
      }
      throw new Error(getCodeFrame(input, line, column) + "Unexpected character " + JSON.stringify(_char2));
    }
    return tokens2;
  }
  var WHITESPACE, PARENS, LETTERS, idchar, valtypes2, NUMBERS, NUMBER_KEYWORDS, tokenTypes, keywords, NUMERIC_SEPARATOR, numberLiteralFSM, tokens;
  var init_tokenizer = __esm({
    "packages/wast-parser/src/tokenizer.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src8();
      init_src7();
      WHITESPACE = /\s/;
      PARENS = /\(|\)/;
      LETTERS = /[a-z0-9_/]/i;
      idchar = /[a-z0-9!#$%&*+./:<=>?@\\[\]^_`|~-]/i;
      valtypes2 = ["i32", "i64", "f32", "f64"];
      NUMBERS = /[0-9|.|_]/;
      NUMBER_KEYWORDS = /nan|inf/;
      tokenTypes = {
        openParen: "openParen",
        closeParen: "closeParen",
        number: "number",
        string: "string",
        name: "name",
        identifier: "identifier",
        valtype: "valtype",
        dot: "dot",
        comment: "comment",
        equal: "equal",
        keyword: "keyword"
      };
      keywords = {
        module: "module",
        func: "func",
        param: "param",
        result: "result",
        "export": "export",
        loop: "loop",
        block: "block",
        "if": "if",
        then: "then",
        "else": "else",
        call: "call",
        call_indirect: "call_indirect",
        "import": "import",
        memory: "memory",
        shared: "shared",
        table: "table",
        global: "global",
        anyfunc: "anyfunc",
        mut: "mut",
        data: "data",
        type: "type",
        elem: "elem",
        start: "start",
        offset: "offset"
      };
      NUMERIC_SEPARATOR = "_";
      numberLiteralFSM = new FSM({
        START: [makeTransition(/-|\+/, "AFTER_SIGN"), makeTransition(/nan:0x/, "NAN_HEX", {
          n: 6
        }), makeTransition(/nan|inf/, "STOP", {
          n: 3
        }), makeTransition(/0x/, "HEX", {
          n: 2
        }), makeTransition(/[0-9]/, "DEC"), makeTransition(/\./, "DEC_FRAC")],
        AFTER_SIGN: [makeTransition(/nan:0x/, "NAN_HEX", {
          n: 6
        }), makeTransition(/nan|inf/, "STOP", {
          n: 3
        }), makeTransition(/0x/, "HEX", {
          n: 2
        }), makeTransition(/[0-9]/, "DEC"), makeTransition(/\./, "DEC_FRAC")],
        DEC_FRAC: [makeTransition(/[0-9]/, "DEC_FRAC", {
          allowedSeparator: NUMERIC_SEPARATOR
        }), makeTransition(/e|E/, "DEC_SIGNED_EXP")],
        DEC: [makeTransition(/[0-9]/, "DEC", {
          allowedSeparator: NUMERIC_SEPARATOR
        }), makeTransition(/\./, "DEC_FRAC"), makeTransition(/e|E/, "DEC_SIGNED_EXP")],
        DEC_SIGNED_EXP: [makeTransition(/\+|-/, "DEC_EXP"), makeTransition(/[0-9]/, "DEC_EXP")],
        DEC_EXP: [makeTransition(/[0-9]/, "DEC_EXP", {
          allowedSeparator: NUMERIC_SEPARATOR
        })],
        HEX: [makeTransition(/[0-9|A-F|a-f]/, "HEX", {
          allowedSeparator: NUMERIC_SEPARATOR
        }), makeTransition(/\./, "HEX_FRAC"), makeTransition(/p|P/, "HEX_SIGNED_EXP")],
        HEX_FRAC: [makeTransition(/[0-9|A-F|a-f]/, "HEX_FRAC", {
          allowedSeparator: NUMERIC_SEPARATOR
        }), makeTransition(/p|P|/, "HEX_SIGNED_EXP")],
        HEX_SIGNED_EXP: [makeTransition(/[0-9|+|-]/, "HEX_EXP")],
        HEX_EXP: [makeTransition(/[0-9]/, "HEX_EXP", {
          allowedSeparator: NUMERIC_SEPARATOR
        })],
        NAN_HEX: [makeTransition(/[0-9|A-F|a-f]/, "NAN_HEX", {
          allowedSeparator: NUMERIC_SEPARATOR
        })],
        STOP: []
      }, "START", "STOP");
      tokens = tokenTypes;
    }
  });

  // packages/wast-parser/src/grammar.js
  function _typeof5(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof5 = function _typeof18(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof5 = function _typeof18(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof5(obj);
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray3(arr) || _nonIterableSpread();
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray3(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray3(o, minLen);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray3(arr);
  }
  function _arrayLikeToArray3(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function hasPlugin(name) {
    if (name !== "wast")
      throw new Error("unknow plugin");
    return true;
  }
  function isKeyword(token, id) {
    return token.type === tokens.keyword && token.value === id;
  }
  function tokenToString(token) {
    if (token.type === "keyword") {
      return "keyword (".concat(token.value, ")");
    }
    return token.type;
  }
  function identifierFromToken(token) {
    var _token$loc = token.loc, end = _token$loc.end, start2 = _token$loc.start;
    return withLoc(identifier(token.value), end, start2);
  }
  function parse2(tokensList, source) {
    var current = 0;
    var getUniqueName = getUniqueNameGenerator();
    var state = {
      registredExportedElements: []
    };
    function walk3() {
      var token = tokensList[current];
      function eatToken() {
        token = tokensList[++current];
      }
      function getEndLoc() {
        var currentToken = token;
        if (typeof currentToken === "undefined") {
          var lastToken = tokensList[tokensList.length - 1];
          currentToken = lastToken;
        }
        return currentToken.loc.end;
      }
      function getStartLoc() {
        return token.loc.start;
      }
      function eatTokenOfType(type6) {
        if (token.type !== type6) {
          throw new Error("\n" + codeFrameFromSource(source, token.loc) + "Assertion error: expected token of type " + type6 + ", given " + tokenToString(token));
        }
        eatToken();
      }
      function parseExportIndex(token2) {
        if (token2.type === tokens.identifier) {
          var index = identifierFromToken(token2);
          eatToken();
          return index;
        } else if (token2.type === tokens.number) {
          var _index = numberLiteralFromRaw(token2.value);
          eatToken();
          return _index;
        } else {
          throw function() {
            return new Error("\n" + codeFrameFromSource(source, token2.loc) + "\nunknown export index, given " + tokenToString(token2));
          }();
        }
      }
      function lookaheadAndCheck() {
        var len = arguments.length;
        for (var i = 0; i < len; i++) {
          var tokenAhead = tokensList[current + i];
          var expectedToken = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (tokenAhead.type === "keyword") {
            if (isKeyword(tokenAhead, expectedToken) === false) {
              return false;
            }
          } else if (expectedToken !== tokenAhead.type) {
            return false;
          }
        }
        return true;
      }
      function maybeIgnoreComment() {
        if (typeof token === "undefined") {
          return;
        }
        while (token.type === tokens.comment) {
          eatToken();
          if (typeof token === "undefined") {
            break;
          }
        }
      }
      function parseMemory() {
        var id = identifier(getUniqueName("memory"));
        var limits = limit(0);
        if (token.type === tokens.string || token.type === tokens.identifier) {
          id = identifier(token.value);
          eatToken();
        } else {
          id = withRaw(id, "");
        }
        if (lookaheadAndCheck(tokens.openParen, keywords.data)) {
          eatToken();
          eatToken();
          var stringInitializer = token.value;
          eatTokenOfType(tokens.string);
          limits = limit(stringInitializer.length);
          eatTokenOfType(tokens.closeParen);
        }
        if (lookaheadAndCheck(tokens.openParen, keywords["export"])) {
          eatToken();
          eatToken();
          if (token.type !== tokens.string) {
            throw function() {
              return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nExpected string in export, given " + tokenToString(token));
            }();
          }
          var name = token.value;
          eatToken();
          state.registredExportedElements.push({
            exportType: "Memory",
            name,
            id
          });
          eatTokenOfType(tokens.closeParen);
        }
        if (token.type === tokens.number) {
          limits = limit(parse32I(token.value));
          eatToken();
          if (token.type === tokens.number) {
            limits.max = parse32I(token.value);
            eatToken();
            if (token.type === tokens.keyword && token.value === "shared") {
              limits.shared = true;
              eatToken();
            }
          }
        }
        return memory(limits, id);
      }
      function parseData() {
        var memidx = 0;
        if (token.type === tokens.number) {
          memidx = token.value;
          eatTokenOfType(tokens.number);
        }
        eatTokenOfType(tokens.openParen);
        var offset;
        if (token.type === tokens.valtype) {
          eatTokenOfType(tokens.valtype);
          eatTokenOfType(tokens.dot);
          if (token.value !== "const") {
            throw new Error("constant expression required");
          }
          eatTokenOfType(tokens.name);
          var numberLiteral2 = numberLiteralFromRaw(token.value, "i32");
          offset = objectInstruction("const", "i32", [numberLiteral2]);
          eatToken();
          eatTokenOfType(tokens.closeParen);
        } else {
          eatTokenOfType(tokens.name);
          var _numberLiteral = numberLiteralFromRaw(token.value, "i32");
          offset = instruction("get_global", [_numberLiteral]);
          eatToken();
          eatTokenOfType(tokens.closeParen);
        }
        var byteArray2 = parseString(token.value);
        eatToken();
        return data(memIndexLiteral(memidx), offset, byteArray(byteArray2));
      }
      function parseTable() {
        var name = identifier(getUniqueName("table"));
        var limit2 = limit(0);
        var elemIndices = [];
        var elemType = "anyfunc";
        if (token.type === tokens.string || token.type === tokens.identifier) {
          name = identifierFromToken(token);
          eatToken();
        } else {
          name = withRaw(name, "");
        }
        while (token.type !== tokens.closeParen) {
          if (lookaheadAndCheck(tokens.openParen, keywords.elem)) {
            eatToken();
            eatToken();
            while (token.type === tokens.identifier) {
              elemIndices.push(identifier(token.value));
              eatToken();
            }
            eatTokenOfType(tokens.closeParen);
          } else if (lookaheadAndCheck(tokens.openParen, keywords["export"])) {
            eatToken();
            eatToken();
            if (token.type !== tokens.string) {
              throw function() {
                return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nExpected string in export, given " + tokenToString(token));
              }();
            }
            var exportName = token.value;
            eatToken();
            state.registredExportedElements.push({
              exportType: "Table",
              name: exportName,
              id: name
            });
            eatTokenOfType(tokens.closeParen);
          } else if (isKeyword(token, keywords.anyfunc)) {
            eatToken();
          } else if (token.type === tokens.number) {
            var min = parseInt(token.value);
            eatToken();
            if (token.type === tokens.number) {
              var max = parseInt(token.value);
              eatToken();
              limit2 = limit(min, max);
            } else {
              limit2 = limit(min);
            }
            eatToken();
          } else {
            throw function() {
              return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nUnexpected token, given " + tokenToString(token));
            }();
          }
        }
        if (elemIndices.length > 0) {
          return table(elemType, limit2, name, elemIndices);
        } else {
          return table(elemType, limit2, name);
        }
      }
      function parseImport() {
        if (token.type !== tokens.string) {
          throw new Error("Expected a string, " + token.type + " given.");
        }
        var moduleName = token.value;
        eatToken();
        if (token.type !== tokens.string) {
          throw new Error("Expected a string, " + token.type + " given.");
        }
        var name = token.value;
        eatToken();
        eatTokenOfType(tokens.openParen);
        var descr;
        if (isKeyword(token, keywords.func)) {
          eatToken();
          var fnParams = [];
          var fnResult = [];
          var typeRef;
          var fnName = identifier(getUniqueName("func"));
          if (token.type === tokens.identifier) {
            fnName = identifierFromToken(token);
            eatToken();
          }
          while (token.type === tokens.openParen) {
            eatToken();
            if (lookaheadAndCheck(keywords.type) === true) {
              eatToken();
              typeRef = parseTypeReference();
            } else if (lookaheadAndCheck(keywords.param) === true) {
              eatToken();
              fnParams.push.apply(fnParams, _toConsumableArray(parseFuncParam()));
            } else if (lookaheadAndCheck(keywords.result) === true) {
              eatToken();
              fnResult.push.apply(fnResult, _toConsumableArray(parseFuncResult()));
            } else {
              throw function() {
                return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nUnexpected token in import of type, given " + tokenToString(token));
              }();
            }
            eatTokenOfType(tokens.closeParen);
          }
          if (typeof fnName === "undefined") {
            throw new Error("Imported function must have a name");
          }
          descr = funcImportDescr(fnName, typeRef !== void 0 ? typeRef : signature(fnParams, fnResult));
        } else if (isKeyword(token, keywords.global)) {
          eatToken();
          if (token.type === tokens.openParen) {
            eatToken();
            eatTokenOfType(tokens.keyword);
            var valtype = token.value;
            eatToken();
            descr = globalType(valtype, "var");
            eatTokenOfType(tokens.closeParen);
          } else {
            var _valtype = token.value;
            eatTokenOfType(tokens.valtype);
            descr = globalType(_valtype, "const");
          }
        } else if (isKeyword(token, keywords.memory) === true) {
          eatToken();
          descr = parseMemory();
        } else if (isKeyword(token, keywords.table) === true) {
          eatToken();
          descr = parseTable();
        } else {
          throw new Error("Unsupported import type: " + tokenToString(token));
        }
        eatTokenOfType(tokens.closeParen);
        return moduleImport(moduleName, name, descr);
      }
      function parseBlock() {
        var label2 = identifier(getUniqueName("block"));
        var blockResult = null;
        var instr2 = [];
        if (token.type === tokens.identifier) {
          label2 = identifierFromToken(token);
          eatToken();
        } else {
          label2 = withRaw(label2, "");
        }
        while (token.type === tokens.openParen) {
          eatToken();
          if (lookaheadAndCheck(keywords.result) === true) {
            eatToken();
            blockResult = token.value;
            eatToken();
          } else if (lookaheadAndCheck(tokens.name) === true || lookaheadAndCheck(tokens.valtype) === true || token.type === "keyword") {
            instr2.push(parseFuncInstr());
          } else {
            throw function() {
              return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nUnexpected token in block body of type, given " + tokenToString(token));
            }();
          }
          maybeIgnoreComment();
          eatTokenOfType(tokens.closeParen);
        }
        return blockInstruction(label2, instr2, blockResult);
      }
      function parseIf() {
        var blockResult = null;
        var label2 = identifier(getUniqueName("if"));
        var testInstrs = [];
        var consequent = [];
        var alternate = [];
        if (token.type === tokens.identifier) {
          label2 = identifierFromToken(token);
          eatToken();
        } else {
          label2 = withRaw(label2, "");
        }
        while (token.type === tokens.openParen) {
          eatToken();
          if (isKeyword(token, keywords.result) === true) {
            eatToken();
            blockResult = token.value;
            eatTokenOfType(tokens.valtype);
            eatTokenOfType(tokens.closeParen);
            continue;
          }
          if (isKeyword(token, keywords.then) === true) {
            eatToken();
            while (token.type === tokens.openParen) {
              eatToken();
              if (lookaheadAndCheck(tokens.name) === true || lookaheadAndCheck(tokens.valtype) === true || token.type === "keyword") {
                consequent.push(parseFuncInstr());
              } else {
                throw function() {
                  return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nUnexpected token in consequent body of type, given " + tokenToString(token));
                }();
              }
              eatTokenOfType(tokens.closeParen);
            }
            eatTokenOfType(tokens.closeParen);
            continue;
          }
          if (isKeyword(token, keywords["else"])) {
            eatToken();
            while (token.type === tokens.openParen) {
              eatToken();
              if (lookaheadAndCheck(tokens.name) === true || lookaheadAndCheck(tokens.valtype) === true || token.type === "keyword") {
                alternate.push(parseFuncInstr());
              } else {
                throw function() {
                  return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nUnexpected token in alternate body of type, given " + tokenToString(token));
                }();
              }
              eatTokenOfType(tokens.closeParen);
            }
            eatTokenOfType(tokens.closeParen);
            continue;
          }
          if (lookaheadAndCheck(tokens.name) === true || lookaheadAndCheck(tokens.valtype) === true || token.type === "keyword") {
            testInstrs.push(parseFuncInstr());
            eatTokenOfType(tokens.closeParen);
            continue;
          }
          throw function() {
            return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nUnexpected token in if body, given " + tokenToString(token));
          }();
        }
        return ifInstruction(label2, testInstrs, blockResult, consequent, alternate);
      }
      function parseLoop() {
        var label2 = identifier(getUniqueName("loop"));
        var blockResult;
        var instr2 = [];
        if (token.type === tokens.identifier) {
          label2 = identifierFromToken(token);
          eatToken();
        } else {
          label2 = withRaw(label2, "");
        }
        while (token.type === tokens.openParen) {
          eatToken();
          if (lookaheadAndCheck(keywords.result) === true) {
            eatToken();
            blockResult = token.value;
            eatToken();
          } else if (lookaheadAndCheck(tokens.name) === true || lookaheadAndCheck(tokens.valtype) === true || token.type === "keyword") {
            instr2.push(parseFuncInstr());
          } else {
            throw function() {
              return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nUnexpected token in loop body, given " + tokenToString(token));
            }();
          }
          eatTokenOfType(tokens.closeParen);
        }
        return loopInstruction(label2, blockResult, instr2);
      }
      function parseCallIndirect() {
        var typeRef;
        var params = [];
        var results = [];
        var instrs = [];
        while (token.type !== tokens.closeParen) {
          if (lookaheadAndCheck(tokens.openParen, keywords.type)) {
            eatToken();
            eatToken();
            typeRef = parseTypeReference();
          } else if (lookaheadAndCheck(tokens.openParen, keywords.param)) {
            eatToken();
            eatToken();
            if (token.type !== tokens.closeParen) {
              params.push.apply(params, _toConsumableArray(parseFuncParam()));
            }
          } else if (lookaheadAndCheck(tokens.openParen, keywords.result)) {
            eatToken();
            eatToken();
            if (token.type !== tokens.closeParen) {
              results.push.apply(results, _toConsumableArray(parseFuncResult()));
            }
          } else {
            eatTokenOfType(tokens.openParen);
            instrs.push(parseFuncInstr());
          }
          eatTokenOfType(tokens.closeParen);
        }
        return callIndirectInstruction(typeRef !== void 0 ? typeRef : signature(params, results), instrs);
      }
      function parseExport() {
        if (token.type !== tokens.string) {
          throw new Error("Expected string after export, got: " + token.type);
        }
        var name = token.value;
        eatToken();
        var moduleExportDescr2 = parseModuleExportDescr();
        return moduleExport(name, moduleExportDescr2);
      }
      function parseModuleExportDescr() {
        var startLoc2 = getStartLoc();
        var type6 = "";
        var index;
        eatTokenOfType(tokens.openParen);
        while (token.type !== tokens.closeParen) {
          if (isKeyword(token, keywords.func)) {
            type6 = "Func";
            eatToken();
            index = parseExportIndex(token);
          } else if (isKeyword(token, keywords.table)) {
            type6 = "Table";
            eatToken();
            index = parseExportIndex(token);
          } else if (isKeyword(token, keywords.global)) {
            type6 = "Global";
            eatToken();
            index = parseExportIndex(token);
          } else if (isKeyword(token, keywords.memory)) {
            type6 = "Memory";
            eatToken();
            index = parseExportIndex(token);
          }
          eatToken();
        }
        if (type6 === "") {
          throw new Error("Unknown export type");
        }
        if (index === void 0) {
          throw new Error("Exported function must have a name");
        }
        var node2 = moduleExportDescr(type6, index);
        var endLoc2 = getEndLoc();
        eatTokenOfType(tokens.closeParen);
        return withLoc(node2, endLoc2, startLoc2);
      }
      function parseModule() {
        var name = null;
        var isBinary = false;
        var isQuote = false;
        var moduleFields = [];
        if (token.type === tokens.identifier) {
          name = token.value;
          eatToken();
        }
        if (hasPlugin("wast") && token.type === tokens.name && token.value === "binary") {
          eatToken();
          isBinary = true;
        }
        if (hasPlugin("wast") && token.type === tokens.name && token.value === "quote") {
          eatToken();
          isQuote = true;
        }
        if (isBinary === true) {
          var blob = [];
          while (token.type === tokens.string) {
            blob.push(token.value);
            eatToken();
            maybeIgnoreComment();
          }
          eatTokenOfType(tokens.closeParen);
          return binaryModule(name, blob);
        }
        if (isQuote === true) {
          var string = [];
          while (token.type === tokens.string) {
            string.push(token.value);
            eatToken();
          }
          eatTokenOfType(tokens.closeParen);
          return quoteModule(name, string);
        }
        while (token.type !== tokens.closeParen) {
          moduleFields.push(walk3());
          if (state.registredExportedElements.length > 0) {
            state.registredExportedElements.forEach(function(decl) {
              moduleFields.push(moduleExport(decl.name, moduleExportDescr(decl.exportType, decl.id)));
            });
            state.registredExportedElements = [];
          }
          token = tokensList[current];
        }
        eatTokenOfType(tokens.closeParen);
        return module(name, moduleFields);
      }
      function parseFuncInstrArguments(signature2) {
        var args = [];
        var namedArgs = {};
        var signaturePtr = 0;
        while (token.type === tokens.name || isKeyword(token, keywords.offset)) {
          var key = token.value;
          eatToken();
          eatTokenOfType(tokens.equal);
          var value = void 0;
          if (token.type === tokens.number) {
            value = numberLiteralFromRaw(token.value);
          } else {
            throw new Error("Unexpected type for argument: " + token.type);
          }
          namedArgs[key] = value;
          eatToken();
        }
        var signatureLength = signature2.vector ? Infinity : signature2.length;
        while (token.type !== tokens.closeParen && (token.type === tokens.openParen || signaturePtr < signatureLength)) {
          if (token.type === tokens.identifier) {
            args.push(identifier(token.value));
            eatToken();
          } else if (token.type === tokens.valtype) {
            args.push(valtypeLiteral(token.value));
            eatToken();
          } else if (token.type === tokens.string) {
            args.push(stringLiteral(token.value));
            eatToken();
          } else if (token.type === tokens.number) {
            args.push(
              // TODO(sven): refactor the type signature handling
              // https://github.com/xtuc/webassemblyjs/pull/129 is a good start
              numberLiteralFromRaw(
                token.value,
                // $FlowIgnore
                signature2[signaturePtr] || "f64"
              )
            );
            if (!signature2.vector) {
              ++signaturePtr;
            }
            eatToken();
          } else if (token.type === tokens.openParen) {
            eatToken();
            if (lookaheadAndCheck(tokens.name) === true || lookaheadAndCheck(tokens.valtype) === true || token.type === "keyword") {
              args.push(parseFuncInstr());
            } else {
              throw function() {
                return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nUnexpected token in nested instruction, given " + tokenToString(token));
              }();
            }
            if (token.type === tokens.closeParen) {
              eatToken();
            }
          } else {
            throw function() {
              return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nUnexpected token in instruction argument, given " + tokenToString(token));
            }();
          }
        }
        return {
          args,
          namedArgs
        };
      }
      function parseFuncInstr() {
        var startLoc2 = getStartLoc();
        maybeIgnoreComment();
        if (token.type === tokens.name || token.type === tokens.valtype) {
          var name = token.value;
          var object;
          eatToken();
          if (token.type === tokens.dot) {
            object = name;
            var name_parts = [];
            do {
              eatToken();
              if (token.type !== tokens.name) {
                throw new TypeError("Unknown token: " + token.type + ", name expected");
              }
              name_parts.push(token.value);
              eatToken();
            } while (token.type === tokens.dot);
            name = name_parts.join(".");
          }
          if (token.type === tokens.closeParen) {
            var _endLoc = token.loc.end;
            if (typeof object === "undefined") {
              return withLoc(instruction(name), _endLoc, startLoc2);
            } else {
              return withLoc(objectInstruction(name, object, []), _endLoc, startLoc2);
            }
          }
          var signature2 = signatureForOpcode(object || "", name);
          var _parseFuncInstrArgume = parseFuncInstrArguments(signature2), args = _parseFuncInstrArgume.args, namedArgs = _parseFuncInstrArgume.namedArgs;
          var endLoc2 = token.loc.end;
          if (typeof object === "undefined") {
            return withLoc(instruction(name, args, namedArgs), endLoc2, startLoc2);
          } else {
            return withLoc(objectInstruction(name, object, args, namedArgs), endLoc2, startLoc2);
          }
        } else if (isKeyword(token, keywords.loop)) {
          eatToken();
          return parseLoop();
        } else if (isKeyword(token, keywords.block)) {
          eatToken();
          return parseBlock();
        } else if (isKeyword(token, keywords.call_indirect)) {
          eatToken();
          return parseCallIndirect();
        } else if (isKeyword(token, keywords.call)) {
          eatToken();
          var index;
          if (token.type === tokens.identifier) {
            index = identifierFromToken(token);
            eatToken();
          } else if (token.type === tokens.number) {
            index = indexLiteral(token.value);
            eatToken();
          }
          var instrArgs = [];
          while (token.type === tokens.openParen) {
            eatToken();
            instrArgs.push(parseFuncInstr());
            eatTokenOfType(tokens.closeParen);
          }
          if (typeof index === "undefined") {
            throw new Error("Missing argument in call instruciton");
          }
          if (instrArgs.length > 0) {
            return callInstruction(index, instrArgs);
          } else {
            return callInstruction(index);
          }
        } else if (isKeyword(token, keywords["if"])) {
          eatToken();
          return parseIf();
        } else if (isKeyword(token, keywords.module) && hasPlugin("wast")) {
          eatToken();
          var module2 = parseModule();
          return module2;
        } else {
          throw function() {
            return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nUnexpected instruction in function body, given " + tokenToString(token));
          }();
        }
      }
      function parseFunc() {
        var fnName = identifier(getUniqueName("func"));
        var typeRef;
        var fnBody = [];
        var fnParams = [];
        var fnResult = [];
        if (token.type === tokens.identifier) {
          fnName = identifierFromToken(token);
          eatToken();
        } else {
          fnName = withRaw(fnName, "");
        }
        maybeIgnoreComment();
        while (token.type === tokens.openParen || token.type === tokens.name || token.type === tokens.valtype) {
          if (token.type === tokens.name || token.type === tokens.valtype) {
            fnBody.push(parseFuncInstr());
            continue;
          }
          eatToken();
          if (lookaheadAndCheck(keywords.param) === true) {
            eatToken();
            fnParams.push.apply(fnParams, _toConsumableArray(parseFuncParam()));
          } else if (lookaheadAndCheck(keywords.result) === true) {
            eatToken();
            fnResult.push.apply(fnResult, _toConsumableArray(parseFuncResult()));
          } else if (lookaheadAndCheck(keywords["export"]) === true) {
            eatToken();
            parseFuncExport(fnName);
          } else if (lookaheadAndCheck(keywords.type) === true) {
            eatToken();
            typeRef = parseTypeReference();
          } else if (lookaheadAndCheck(tokens.name) === true || lookaheadAndCheck(tokens.valtype) === true || token.type === "keyword") {
            fnBody.push(parseFuncInstr());
          } else {
            throw function() {
              return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nUnexpected token in func body, given " + tokenToString(token));
            }();
          }
          eatTokenOfType(tokens.closeParen);
        }
        return func(fnName, typeRef !== void 0 ? typeRef : signature(fnParams, fnResult), fnBody);
      }
      function parseFuncExport(funcId) {
        if (token.type !== tokens.string) {
          throw function() {
            return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nFunction export expected a string, given " + tokenToString(token));
          }();
        }
        var name = token.value;
        eatToken();
        var id = identifier(funcId.value);
        state.registredExportedElements.push({
          exportType: "Func",
          name,
          id
        });
      }
      function parseType() {
        var id;
        var params = [];
        var result = [];
        if (token.type === tokens.identifier) {
          id = identifierFromToken(token);
          eatToken();
        }
        if (lookaheadAndCheck(tokens.openParen, keywords.func)) {
          eatToken();
          eatToken();
          if (token.type === tokens.closeParen) {
            eatToken();
            return typeInstruction(id, signature([], []));
          }
          if (lookaheadAndCheck(tokens.openParen, keywords.param)) {
            eatToken();
            eatToken();
            params = parseFuncParam();
            eatTokenOfType(tokens.closeParen);
          }
          if (lookaheadAndCheck(tokens.openParen, keywords.result)) {
            eatToken();
            eatToken();
            result = parseFuncResult();
            eatTokenOfType(tokens.closeParen);
          }
          eatTokenOfType(tokens.closeParen);
        }
        return typeInstruction(id, signature(params, result));
      }
      function parseFuncResult() {
        var results = [];
        while (token.type !== tokens.closeParen) {
          if (token.type !== tokens.valtype) {
            throw function() {
              return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nUnexpected token in func result, given " + tokenToString(token));
            }();
          }
          var valtype = token.value;
          eatToken();
          results.push(valtype);
        }
        return results;
      }
      function parseTypeReference() {
        var ref;
        if (token.type === tokens.identifier) {
          ref = identifierFromToken(token);
          eatToken();
        } else if (token.type === tokens.number) {
          ref = numberLiteralFromRaw(token.value);
          eatToken();
        }
        return ref;
      }
      function parseGlobal() {
        var name = identifier(getUniqueName("global"));
        var type6;
        var importing = null;
        maybeIgnoreComment();
        if (token.type === tokens.identifier) {
          name = identifierFromToken(token);
          eatToken();
        } else {
          name = withRaw(name, "");
        }
        if (lookaheadAndCheck(tokens.openParen, keywords["export"])) {
          eatToken();
          eatToken();
          var exportName = token.value;
          eatTokenOfType(tokens.string);
          state.registredExportedElements.push({
            exportType: "Global",
            name: exportName,
            id: name
          });
          eatTokenOfType(tokens.closeParen);
        }
        if (lookaheadAndCheck(tokens.openParen, keywords["import"])) {
          eatToken();
          eatToken();
          var moduleName = token.value;
          eatTokenOfType(tokens.string);
          var _name = token.value;
          eatTokenOfType(tokens.string);
          importing = {
            module: moduleName,
            name: _name,
            descr: void 0
          };
          eatTokenOfType(tokens.closeParen);
        }
        if (token.type === tokens.valtype) {
          type6 = globalType(token.value, "const");
          eatToken();
        } else if (token.type === tokens.openParen) {
          eatToken();
          if (isKeyword(token, keywords.mut) === false) {
            throw function() {
              return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nUnsupported global type, expected mut, given " + tokenToString(token));
            }();
          }
          eatToken();
          type6 = globalType(token.value, "var");
          eatToken();
          eatTokenOfType(tokens.closeParen);
        }
        if (type6 === void 0) {
          throw function() {
            return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nCould not determine global type, given " + tokenToString(token));
          }();
        }
        maybeIgnoreComment();
        var init2 = [];
        if (importing != null) {
          importing.descr = type6;
          init2.push(moduleImport(importing.module, importing.name, importing.descr));
        }
        while (token.type === tokens.openParen) {
          eatToken();
          init2.push(parseFuncInstr());
          eatTokenOfType(tokens.closeParen);
        }
        return global2(type6, init2, name);
      }
      function parseFuncParam() {
        var params = [];
        var id;
        var valtype;
        if (token.type === tokens.identifier) {
          id = token.value;
          eatToken();
        }
        if (token.type === tokens.valtype) {
          valtype = token.value;
          eatToken();
          params.push({
            id,
            valtype
          });
          if (id === void 0) {
            while (token.type === tokens.valtype) {
              valtype = token.value;
              eatToken();
              params.push({
                id: void 0,
                valtype
              });
            }
          }
        } else {
        }
        return params;
      }
      function parseElem() {
        var tableIndex = indexLiteral(0);
        var offset = [];
        var funcs = [];
        if (token.type === tokens.identifier) {
          tableIndex = identifierFromToken(token);
          eatToken();
        }
        if (token.type === tokens.number) {
          tableIndex = indexLiteral(token.value);
          eatToken();
        }
        while (token.type !== tokens.closeParen) {
          if (lookaheadAndCheck(tokens.openParen, keywords.offset)) {
            eatToken();
            eatToken();
            while (token.type !== tokens.closeParen) {
              eatTokenOfType(tokens.openParen);
              offset.push(parseFuncInstr());
              eatTokenOfType(tokens.closeParen);
            }
            eatTokenOfType(tokens.closeParen);
          } else if (token.type === tokens.identifier) {
            funcs.push(identifier(token.value));
            eatToken();
          } else if (token.type === tokens.number) {
            funcs.push(indexLiteral(token.value));
            eatToken();
          } else if (token.type === tokens.openParen) {
            eatToken();
            offset.push(parseFuncInstr());
            eatTokenOfType(tokens.closeParen);
          } else {
            throw function() {
              return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nUnsupported token in elem, given " + tokenToString(token));
            }();
          }
        }
        return elem(tableIndex, offset, funcs);
      }
      function parseStart() {
        if (token.type === tokens.identifier) {
          var index = identifierFromToken(token);
          eatToken();
          return start(index);
        }
        if (token.type === tokens.number) {
          var _index2 = indexLiteral(token.value);
          eatToken();
          return start(_index2);
        }
        throw new Error("Unknown start, token: " + tokenToString(token));
      }
      if (token.type === tokens.openParen) {
        eatToken();
        var startLoc = getStartLoc();
        if (isKeyword(token, keywords["export"])) {
          eatToken();
          var node = parseExport();
          var _endLoc2 = getEndLoc();
          return withLoc(node, _endLoc2, startLoc);
        }
        if (isKeyword(token, keywords.loop)) {
          eatToken();
          var _node = parseLoop();
          var _endLoc3 = getEndLoc();
          return withLoc(_node, _endLoc3, startLoc);
        }
        if (isKeyword(token, keywords.func)) {
          eatToken();
          var _node2 = parseFunc();
          var _endLoc4 = getEndLoc();
          maybeIgnoreComment();
          eatTokenOfType(tokens.closeParen);
          return withLoc(_node2, _endLoc4, startLoc);
        }
        if (isKeyword(token, keywords.module)) {
          eatToken();
          var _node3 = parseModule();
          var _endLoc5 = getEndLoc();
          return withLoc(_node3, _endLoc5, startLoc);
        }
        if (isKeyword(token, keywords["import"])) {
          eatToken();
          var _node4 = parseImport();
          var _endLoc6 = getEndLoc();
          eatTokenOfType(tokens.closeParen);
          return withLoc(_node4, _endLoc6, startLoc);
        }
        if (isKeyword(token, keywords.block)) {
          eatToken();
          var _node5 = parseBlock();
          var _endLoc7 = getEndLoc();
          eatTokenOfType(tokens.closeParen);
          return withLoc(_node5, _endLoc7, startLoc);
        }
        if (isKeyword(token, keywords.memory)) {
          eatToken();
          var _node6 = parseMemory();
          var _endLoc8 = getEndLoc();
          eatTokenOfType(tokens.closeParen);
          return withLoc(_node6, _endLoc8, startLoc);
        }
        if (isKeyword(token, keywords.data)) {
          eatToken();
          var _node7 = parseData();
          var _endLoc9 = getEndLoc();
          eatTokenOfType(tokens.closeParen);
          return withLoc(_node7, _endLoc9, startLoc);
        }
        if (isKeyword(token, keywords.table)) {
          eatToken();
          var _node8 = parseTable();
          var _endLoc10 = getEndLoc();
          eatTokenOfType(tokens.closeParen);
          return withLoc(_node8, _endLoc10, startLoc);
        }
        if (isKeyword(token, keywords.global)) {
          eatToken();
          var _node9 = parseGlobal();
          var _endLoc11 = getEndLoc();
          eatTokenOfType(tokens.closeParen);
          return withLoc(_node9, _endLoc11, startLoc);
        }
        if (isKeyword(token, keywords.type)) {
          eatToken();
          var _node10 = parseType();
          var _endLoc12 = getEndLoc();
          eatTokenOfType(tokens.closeParen);
          return withLoc(_node10, _endLoc12, startLoc);
        }
        if (isKeyword(token, keywords.start)) {
          eatToken();
          var _node11 = parseStart();
          var _endLoc13 = getEndLoc();
          eatTokenOfType(tokens.closeParen);
          return withLoc(_node11, _endLoc13, startLoc);
        }
        if (isKeyword(token, keywords.elem)) {
          eatToken();
          var _node12 = parseElem();
          var _endLoc14 = getEndLoc();
          eatTokenOfType(tokens.closeParen);
          return withLoc(_node12, _endLoc14, startLoc);
        }
        var instruction2 = parseFuncInstr();
        var endLoc = getEndLoc();
        maybeIgnoreComment();
        if (_typeof5(instruction2) === "object") {
          if (typeof token !== "undefined") {
            eatTokenOfType(tokens.closeParen);
          }
          return withLoc(instruction2, endLoc, startLoc);
        }
      }
      if (token.type === tokens.comment) {
        var _startLoc = getStartLoc();
        var builder = token.opts.type === "leading" ? leadingComment : blockComment;
        var _node13 = builder(token.value);
        eatToken();
        var _endLoc15 = getEndLoc();
        return withLoc(_node13, _endLoc15, _startLoc);
      }
      throw function() {
        return new Error("\n" + codeFrameFromSource(source, token.loc) + "\nUnknown token, given " + tokenToString(token));
      }();
    }
    var body = [];
    while (current < tokensList.length) {
      body.push(walk3());
    }
    return program(body);
  }
  var init_grammar = __esm({
    "packages/wast-parser/src/grammar.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src7();
      init_src5();
      init_src3();
      init_string_literals();
      init_tokenizer();
    }
  });

  // packages/wast-parser/src/index.js
  var src_exports2 = {};
  __export(src_exports2, {
    isInfLiteral: () => isInfLiteral,
    isNanLiteral: () => isNanLiteral,
    parse: () => parse3,
    parse32F: () => parse32F,
    parse32I: () => parse32I,
    parse64F: () => parse64F,
    parse64I: () => parse64I,
    parseU32: () => parseU32
  });
  function parse3(source) {
    var tokens2 = tokenize(source);
    var ast = parse2(tokens2, source);
    return ast;
  }
  var init_src9 = __esm({
    "packages/wast-parser/src/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_grammar();
      init_tokenizer();
      init_src3();
    }
  });

  // node_modules/@xtuc/ieee754/index.js
  function read2(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
    }
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
    }
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  }
  var init_ieee7542 = __esm({
    "node_modules/@xtuc/ieee754/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
    }
  });

  // packages/ieee754/src/index.js
  function decodeF32(bytes) {
    var buffer = Buffer2.from(bytes);
    return read2(buffer, 0, true, SINGLE_PRECISION_MANTISSA, NUMBER_OF_BYTE_F32);
  }
  function decodeF64(bytes) {
    var buffer = Buffer2.from(bytes);
    return read2(buffer, 0, true, DOUBLE_PRECISION_MANTISSA, NUMBER_OF_BYTE_F64);
  }
  var NUMBER_OF_BYTE_F32, NUMBER_OF_BYTE_F64, SINGLE_PRECISION_MANTISSA, DOUBLE_PRECISION_MANTISSA;
  var init_src10 = __esm({
    "packages/ieee754/src/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_ieee7542();
      NUMBER_OF_BYTE_F32 = 4;
      NUMBER_OF_BYTE_F64 = 8;
      SINGLE_PRECISION_MANTISSA = 23;
      DOUBLE_PRECISION_MANTISSA = 52;
    }
  });

  // packages/utf8/src/decoder.js
  function _toConsumableArray2(arr) {
    return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray4(arr) || _nonIterableSpread2();
  }
  function _nonIterableSpread2() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _arrayWithoutHoles2(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray4(arr);
  }
  function _toArray(arr) {
    return _arrayWithHoles3(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray4(arr) || _nonIterableRest3();
  }
  function _nonIterableRest3() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray4(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray4(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray4(o, minLen);
  }
  function _arrayLikeToArray4(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArray2(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _arrayWithHoles3(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function con(b) {
    if ((b & 192) === 128) {
      return b & 63;
    } else {
      throw new Error("invalid UTF-8 encoding");
    }
  }
  function code(min, n) {
    if (n < min || 55296 <= n && n < 57344 || n >= 65536) {
      throw new Error("invalid UTF-8 encoding");
    } else {
      return n;
    }
  }
  function decode(bytes) {
    return _decode(bytes).map(function(x) {
      return String.fromCharCode(x);
    }).join("");
  }
  function _decode(bytes) {
    if (bytes.length === 0) {
      return [];
    }
    {
      var _bytes = _toArray(bytes), b1 = _bytes[0], bs = _bytes.slice(1);
      if (b1 < 128) {
        return [code(0, b1)].concat(_toConsumableArray2(_decode(bs)));
      }
      if (b1 < 192) {
        throw new Error("invalid UTF-8 encoding");
      }
    }
    {
      var _bytes2 = _toArray(bytes), _b = _bytes2[0], b2 = _bytes2[1], _bs = _bytes2.slice(2);
      if (_b < 224) {
        return [code(128, ((_b & 31) << 6) + con(b2))].concat(_toConsumableArray2(_decode(_bs)));
      }
    }
    {
      var _bytes3 = _toArray(bytes), _b2 = _bytes3[0], _b3 = _bytes3[1], b3 = _bytes3[2], _bs2 = _bytes3.slice(3);
      if (_b2 < 240) {
        return [code(2048, ((_b2 & 15) << 12) + (con(_b3) << 6) + con(b3))].concat(_toConsumableArray2(_decode(_bs2)));
      }
    }
    {
      var _bytes4 = _toArray(bytes), _b4 = _bytes4[0], _b5 = _bytes4[1], _b6 = _bytes4[2], b4 = _bytes4[3], _bs3 = _bytes4.slice(4);
      if (_b4 < 248) {
        return [code(65536, (((_b4 & 7) << 18) + con(_b5) << 12) + (con(_b6) << 6) + con(b4))].concat(_toConsumableArray2(_decode(_bs3)));
      }
    }
    throw new Error("invalid UTF-8 encoding");
  }
  var init_decoder = __esm({
    "packages/utf8/src/decoder.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
    }
  });

  // packages/utf8/src/encoder.js
  var init_encoder = __esm({
    "packages/utf8/src/encoder.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
    }
  });

  // packages/utf8/src/index.js
  var init_src11 = __esm({
    "packages/utf8/src/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_decoder();
      init_encoder();
    }
  });

  // packages/leb128/src/bits.js
  function extract(buffer, bitIndex, bitLength, defaultBit) {
    if (bitLength < 0 || bitLength > 32) {
      throw new Error("Bad value for bitLength.");
    }
    if (defaultBit === void 0) {
      defaultBit = 0;
    } else if (defaultBit !== 0 && defaultBit !== 1) {
      throw new Error("Bad value for defaultBit.");
    }
    var defaultByte = defaultBit * 255;
    var result = 0;
    var lastBit = bitIndex + bitLength;
    var startByte = Math.floor(bitIndex / 8);
    var startBit = bitIndex % 8;
    var endByte = Math.floor(lastBit / 8);
    var endBit = lastBit % 8;
    if (endBit !== 0) {
      result = get(endByte) & (1 << endBit) - 1;
    }
    while (endByte > startByte) {
      endByte--;
      result = result << 8 | get(endByte);
    }
    result >>>= startBit;
    return result;
    function get(index) {
      var result2 = buffer[index];
      return result2 === void 0 ? defaultByte : result2;
    }
  }
  function inject(buffer, bitIndex, bitLength, value) {
    if (bitLength < 0 || bitLength > 32) {
      throw new Error("Bad value for bitLength.");
    }
    var lastByte = Math.floor((bitIndex + bitLength - 1) / 8);
    if (bitIndex < 0 || lastByte >= buffer.length) {
      throw new Error("Index out of range.");
    }
    var atByte = Math.floor(bitIndex / 8);
    var atBit = bitIndex % 8;
    while (bitLength > 0) {
      if (value & 1) {
        buffer[atByte] |= 1 << atBit;
      } else {
        buffer[atByte] &= ~(1 << atBit);
      }
      value >>= 1;
      bitLength--;
      atBit = (atBit + 1) % 8;
      if (atBit === 0) {
        atByte++;
      }
    }
  }
  function getSign(buffer) {
    return buffer[buffer.length - 1] >>> 7;
  }
  function highOrder(bit, buffer) {
    var length = buffer.length;
    var fullyWrongByte = (bit ^ 1) * 255;
    while (length > 0 && buffer[length - 1] === fullyWrongByte) {
      length--;
    }
    if (length === 0) {
      return -1;
    }
    var byteToCheck = buffer[length - 1];
    var result = length * 8 - 1;
    for (var i = 7; i > 0; i--) {
      if ((byteToCheck >> i & 1) === bit) {
        break;
      }
      result--;
    }
    return result;
  }
  var init_bits = __esm({
    "packages/leb128/src/bits.js"() {
      "use strict";
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
    }
  });

  // packages/leb128/src/bufs.js
  function lowestBit(num) {
    return num & -num;
  }
  function isLossyToAdd(accum, num) {
    if (num === 0) {
      return false;
    }
    var lowBit = lowestBit(num);
    var added = accum + lowBit;
    if (added === accum) {
      return true;
    }
    if (added - lowBit !== accum) {
      return true;
    }
    return false;
  }
  function alloc2(length) {
    var result = bufPool[length];
    if (result) {
      bufPool[length] = void 0;
    } else {
      result = new Buffer2(length);
    }
    result.fill(0);
    return result;
  }
  function free(buffer) {
    var length = buffer.length;
    if (length < TEMP_BUF_MAXIMUM_LENGTH) {
      bufPool[length] = buffer;
    }
  }
  function resize(buffer, length) {
    if (length === buffer.length) {
      return buffer;
    }
    var newBuf = alloc2(length);
    buffer.copy(newBuf);
    free(buffer);
    return newBuf;
  }
  function readInt(buffer) {
    var length = buffer.length;
    var positive = buffer[length - 1] < 128;
    var result = positive ? 0 : -1;
    var lossy = false;
    if (length < 7) {
      for (var i = length - 1; i >= 0; i--) {
        result = result * 256 + buffer[i];
      }
    } else {
      for (var _i = length - 1; _i >= 0; _i--) {
        var one2 = buffer[_i];
        result *= 256;
        if (isLossyToAdd(result, one2)) {
          lossy = true;
        }
        result += one2;
      }
    }
    return {
      value: result,
      lossy
    };
  }
  function readUInt(buffer) {
    var length = buffer.length;
    var result = 0;
    var lossy = false;
    if (length < 7) {
      for (var i = length - 1; i >= 0; i--) {
        result = result * 256 + buffer[i];
      }
    } else {
      for (var _i2 = length - 1; _i2 >= 0; _i2--) {
        var one2 = buffer[_i2];
        result *= 256;
        if (isLossyToAdd(result, one2)) {
          lossy = true;
        }
        result += one2;
      }
    }
    return {
      value: result,
      lossy
    };
  }
  function writeInt64(value, buffer) {
    if (value < MIN_EXACT_INT64 || value > MAX_EXACT_INT64) {
      throw new Error("Value out of range.");
    }
    if (value < 0) {
      value += BIT_64;
    }
    writeUInt64(value, buffer);
  }
  function writeUInt64(value, buffer) {
    if (value < 0 || value > MAX_EXACT_UINT64) {
      throw new Error("Value out of range.");
    }
    var lowWord = value % BIT_32;
    var highWord = Math.floor(value / BIT_32);
    buffer.writeUInt32LE(lowWord, 0);
    buffer.writeUInt32LE(highWord, 4);
  }
  var bufPool, TEMP_BUF_MAXIMUM_LENGTH, MIN_EXACT_INT64, MAX_EXACT_INT64, MAX_EXACT_UINT64, BIT_32, BIT_64;
  var init_bufs = __esm({
    "packages/leb128/src/bufs.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      bufPool = [];
      TEMP_BUF_MAXIMUM_LENGTH = 20;
      MIN_EXACT_INT64 = -9223372036854776e3;
      MAX_EXACT_INT64 = 9223372036854775e3;
      MAX_EXACT_UINT64 = 1844674407370955e4;
      BIT_32 = 4294967296;
      BIT_64 = 18446744073709552e3;
    }
  });

  // packages/leb128/src/leb.js
  function signedBitCount(buffer) {
    return highOrder(getSign(buffer) ^ 1, buffer) + 2;
  }
  function unsignedBitCount(buffer) {
    var result = highOrder(1, buffer) + 1;
    return result ? result : 1;
  }
  function encodeBufferCommon(buffer, signed) {
    var signBit;
    var bitCount;
    if (signed) {
      signBit = getSign(buffer);
      bitCount = signedBitCount(buffer);
    } else {
      signBit = 0;
      bitCount = unsignedBitCount(buffer);
    }
    var byteCount = Math.ceil(bitCount / 7);
    var result = alloc2(byteCount);
    for (var i = 0; i < byteCount; i++) {
      var payload = extract(buffer, i * 7, 7, signBit);
      result[i] = payload | 128;
    }
    result[byteCount - 1] &= 127;
    return result;
  }
  function encodedLength(encodedBuffer, index) {
    var result = 0;
    while (encodedBuffer[index + result] >= 128) {
      result++;
    }
    result++;
    if (index + result > encodedBuffer.length) {
    }
    return result;
  }
  function decodeBufferCommon(encodedBuffer, index, signed) {
    index = index === void 0 ? 0 : index;
    var length = encodedLength(encodedBuffer, index);
    var bitLength = length * 7;
    var byteLength2 = Math.ceil(bitLength / 8);
    var result = alloc2(byteLength2);
    var outIndex = 0;
    while (length > 0) {
      inject(result, outIndex, 7, encodedBuffer[index]);
      outIndex += 7;
      index++;
      length--;
    }
    var signBit;
    var signByte;
    if (signed) {
      var lastByte = result[byteLength2 - 1];
      var endBit = outIndex % 8;
      if (endBit !== 0) {
        var shift = 32 - endBit;
        lastByte = result[byteLength2 - 1] = lastByte << shift >> shift & 255;
      }
      signBit = lastByte >> 7;
      signByte = signBit * 255;
    } else {
      signBit = 0;
      signByte = 0;
    }
    while (byteLength2 > 1 && result[byteLength2 - 1] === signByte && (!signed || result[byteLength2 - 2] >> 7 === signBit)) {
      byteLength2--;
    }
    result = resize(result, byteLength2);
    return {
      value: result,
      nextIndex: index
    };
  }
  function encodeIntBuffer(buffer) {
    return encodeBufferCommon(buffer, true);
  }
  function decodeIntBuffer(encodedBuffer, index) {
    return decodeBufferCommon(encodedBuffer, index, true);
  }
  function encodeInt32(num) {
    var buf = alloc2(4);
    buf.writeInt32LE(num, 0);
    var result = encodeIntBuffer(buf);
    free(buf);
    return result;
  }
  function decodeInt32(encodedBuffer, index) {
    var result = decodeIntBuffer(encodedBuffer, index);
    var parsed = readInt(result.value);
    var value = parsed.value;
    free(result.value);
    if (value < MIN_INT32 || value > MAX_INT32) {
      throw new Error("integer too large");
    }
    return {
      value,
      nextIndex: result.nextIndex
    };
  }
  function encodeInt64(num) {
    var buf = alloc2(8);
    writeInt64(num, buf);
    var result = encodeIntBuffer(buf);
    free(buf);
    return result;
  }
  function decodeInt64(encodedBuffer, index) {
    var result = decodeIntBuffer(encodedBuffer, index);
    var length = result.value.length;
    if (result.value[length - 1] >> 7) {
      result.value = resize(result.value, 8);
      result.value.fill(255, length);
    }
    var value = import_long3.default.fromBytesLE(result.value, false);
    free(result.value);
    return {
      value,
      nextIndex: result.nextIndex,
      lossy: false
    };
  }
  function encodeUIntBuffer(buffer) {
    return encodeBufferCommon(buffer, false);
  }
  function decodeUIntBuffer(encodedBuffer, index) {
    return decodeBufferCommon(encodedBuffer, index, false);
  }
  function encodeUInt32(num) {
    var buf = alloc2(4);
    buf.writeUInt32LE(num, 0);
    var result = encodeUIntBuffer(buf);
    free(buf);
    return result;
  }
  function decodeUInt32(encodedBuffer, index) {
    var result = decodeUIntBuffer(encodedBuffer, index);
    var parsed = readUInt(result.value);
    var value = parsed.value;
    free(result.value);
    if (value > MAX_UINT32) {
      throw new Error("integer too large");
    }
    return {
      value,
      nextIndex: result.nextIndex
    };
  }
  function encodeUInt64(num) {
    var buf = alloc2(8);
    writeUInt64(num, buf);
    var result = encodeUIntBuffer(buf);
    free(buf);
    return result;
  }
  function decodeUInt64(encodedBuffer, index) {
    var result = decodeUIntBuffer(encodedBuffer, index);
    var value = import_long3.default.fromBytesLE(result.value, true);
    free(result.value);
    return {
      value,
      nextIndex: result.nextIndex,
      lossy: false
    };
  }
  var import_long3, MIN_INT32, MAX_INT32, MAX_UINT32, leb_default;
  var init_leb = __esm({
    "packages/leb128/src/leb.js"() {
      "use strict";
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      import_long3 = __toESM(require_long());
      init_bits();
      init_bufs();
      MIN_INT32 = -2147483648;
      MAX_INT32 = 2147483647;
      MAX_UINT32 = 4294967295;
      leb_default = {
        decodeInt32,
        decodeInt64,
        decodeIntBuffer,
        decodeUInt32,
        decodeUInt64,
        decodeUIntBuffer,
        encodeInt32,
        encodeInt64,
        encodeIntBuffer,
        encodeUInt32,
        encodeUInt64,
        encodeUIntBuffer
      };
    }
  });

  // packages/leb128/src/index.js
  function decodeInt642(encodedBuffer, index) {
    return leb_default.decodeInt64(encodedBuffer, index);
  }
  function decodeUInt642(encodedBuffer, index) {
    return leb_default.decodeUInt64(encodedBuffer, index);
  }
  function decodeInt322(encodedBuffer, index) {
    return leb_default.decodeInt32(encodedBuffer, index);
  }
  function decodeUInt322(encodedBuffer, index) {
    return leb_default.decodeUInt32(encodedBuffer, index);
  }
  var MAX_NUMBER_OF_BYTE_U32, MAX_NUMBER_OF_BYTE_U64;
  var init_src12 = __esm({
    "packages/leb128/src/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_leb();
      MAX_NUMBER_OF_BYTE_U32 = 5;
      MAX_NUMBER_OF_BYTE_U64 = 10;
    }
  });

  // packages/wasm-parser/src/decoder.js
  function _toConsumableArray3(arr) {
    return _arrayWithoutHoles3(arr) || _iterableToArray3(arr) || _unsupportedIterableToArray5(arr) || _nonIterableSpread3();
  }
  function _nonIterableSpread3() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray5(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray5(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray5(o, minLen);
  }
  function _iterableToArray3(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _arrayWithoutHoles3(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray5(arr);
  }
  function _arrayLikeToArray5(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function toHex2(n) {
    return "0x" + Number(n).toString(16);
  }
  function byteArrayEq(l, r) {
    if (l.length !== r.length) {
      return false;
    }
    for (var i = 0; i < l.length; i++) {
      if (l[i] !== r[i]) {
        return false;
      }
    }
    return true;
  }
  function decode2(ab, opts) {
    var buf = new Uint8Array(ab);
    var getUniqueName = getUniqueNameGenerator();
    var offset = 0;
    function getPosition() {
      return {
        line: -1,
        column: offset
      };
    }
    function dump(b, msg) {
      if (opts.dump === false)
        return;
      var pad = "										";
      var str = "";
      if (b.length < 5) {
        str = b.map(toHex2).join(" ");
      } else {
        str = "...";
      }
      console.log(toHex2(offset) + ":	", str, pad, ";", msg);
    }
    function dumpSep(msg) {
      if (opts.dump === false)
        return;
      console.log(";", msg);
    }
    var state = {
      elementsInFuncSection: [],
      elementsInExportSection: [],
      elementsInCodeSection: [],
      /**
       * Decode memory from:
       * - Memory section
       */
      memoriesInModule: [],
      /**
       * Decoded types from:
       * - Type section
       */
      typesInModule: [],
      /**
       * Decoded functions from:
       * - Function section
       * - Import section
       */
      functionsInModule: [],
      /**
       * Decoded tables from:
       * - Table section
       */
      tablesInModule: [],
      /**
       * Decoded globals from:
       * - Global section
       */
      globalsInModule: []
    };
    function isEOF() {
      return offset >= buf.length;
    }
    function eatBytes(n) {
      offset = offset + n;
    }
    function readBytesAtOffset(_offset, numberOfBytes) {
      var arr = [];
      for (var i = 0; i < numberOfBytes; i++) {
        arr.push(buf[_offset + i]);
      }
      return arr;
    }
    function readBytes(numberOfBytes) {
      return readBytesAtOffset(offset, numberOfBytes);
    }
    function readF64() {
      var bytes = readBytes(NUMBER_OF_BYTE_F64);
      var value = decodeF64(bytes);
      if (Math.sign(value) * value === Infinity) {
        return {
          value: Math.sign(value),
          inf: true,
          nextIndex: NUMBER_OF_BYTE_F64
        };
      }
      if (isNaN(value)) {
        var sign2 = bytes[bytes.length - 1] >> 7 ? -1 : 1;
        var mantissa = 0;
        for (var i = 0; i < bytes.length - 2; ++i) {
          mantissa += bytes[i] * Math.pow(256, i);
        }
        mantissa += bytes[bytes.length - 2] % 16 * Math.pow(256, bytes.length - 2);
        return {
          value: sign2 * mantissa,
          nan: true,
          nextIndex: NUMBER_OF_BYTE_F64
        };
      }
      return {
        value,
        nextIndex: NUMBER_OF_BYTE_F64
      };
    }
    function readF32() {
      var bytes = readBytes(NUMBER_OF_BYTE_F32);
      var value = decodeF32(bytes);
      if (Math.sign(value) * value === Infinity) {
        return {
          value: Math.sign(value),
          inf: true,
          nextIndex: NUMBER_OF_BYTE_F32
        };
      }
      if (isNaN(value)) {
        var sign2 = bytes[bytes.length - 1] >> 7 ? -1 : 1;
        var mantissa = 0;
        for (var i = 0; i < bytes.length - 2; ++i) {
          mantissa += bytes[i] * Math.pow(256, i);
        }
        mantissa += bytes[bytes.length - 2] % 128 * Math.pow(256, bytes.length - 2);
        return {
          value: sign2 * mantissa,
          nan: true,
          nextIndex: NUMBER_OF_BYTE_F32
        };
      }
      return {
        value,
        nextIndex: NUMBER_OF_BYTE_F32
      };
    }
    function readUTF8String() {
      var lenu32 = readU32();
      var strlen = lenu32.value;
      dump([strlen], "string length");
      var bytes = readBytesAtOffset(offset + lenu32.nextIndex, strlen);
      var value = decode(bytes);
      return {
        value,
        nextIndex: strlen + lenu32.nextIndex
      };
    }
    function readU32() {
      var bytes = readBytes(MAX_NUMBER_OF_BYTE_U32);
      var buffer = Buffer2.from(bytes);
      return decodeUInt322(buffer);
    }
    function readVaruint32() {
      var bytes = readBytes(4);
      var buffer = Buffer2.from(bytes);
      return decodeUInt322(buffer);
    }
    function readVaruint7() {
      var bytes = readBytes(1);
      var buffer = Buffer2.from(bytes);
      return decodeUInt322(buffer);
    }
    function read32() {
      var bytes = readBytes(MAX_NUMBER_OF_BYTE_U32);
      var buffer = Buffer2.from(bytes);
      return decodeInt322(buffer);
    }
    function read64() {
      var bytes = readBytes(MAX_NUMBER_OF_BYTE_U64);
      var buffer = Buffer2.from(bytes);
      return decodeInt642(buffer);
    }
    function readU64() {
      var bytes = readBytes(MAX_NUMBER_OF_BYTE_U64);
      var buffer = Buffer2.from(bytes);
      return decodeUInt642(buffer);
    }
    function readByte() {
      return readBytes(1)[0];
    }
    function parseModuleHeader() {
      if (isEOF() === true || offset + 4 > buf.length) {
        throw new Error("unexpected end");
      }
      var header = readBytes(4);
      if (byteArrayEq(src_default.magicModuleHeader, header) === false) {
        throw new CompileError("magic header not detected");
      }
      dump(header, "wasm magic header");
      eatBytes(4);
    }
    function parseVersion() {
      if (isEOF() === true || offset + 4 > buf.length) {
        throw new Error("unexpected end");
      }
      var version = readBytes(4);
      if (byteArrayEq(src_default.moduleVersion, version) === false) {
        throw new CompileError("unknown binary version");
      }
      dump(version, "wasm version");
      eatBytes(4);
    }
    function parseVec(cast) {
      var u322 = readU32();
      var length = u322.value;
      eatBytes(u322.nextIndex);
      dump([length], "number");
      if (length === 0) {
        return [];
      }
      var elements = [];
      for (var i = 0; i < length; i++) {
        var _byte = readByte();
        eatBytes(1);
        var value = cast(_byte);
        dump([_byte], value);
        if (typeof value === "undefined") {
          throw new CompileError("Internal failure: parseVec could not cast the value");
        }
        elements.push(value);
      }
      return elements;
    }
    function parseTypeSection(numberOfTypes) {
      var typeInstructionNodes = [];
      dump([numberOfTypes], "num types");
      for (var i = 0; i < numberOfTypes; i++) {
        var _startLoc = getPosition();
        dumpSep("type " + i);
        var type6 = readByte();
        eatBytes(1);
        if (type6 == src_default.types.func) {
          dump([type6], "func");
          var paramValtypes = parseVec(function(b) {
            return src_default.valtypes[b];
          });
          var params = paramValtypes.map(function(v) {
            return funcParam(
              /*valtype*/
              v
            );
          });
          var result = parseVec(function(b) {
            return src_default.valtypes[b];
          });
          typeInstructionNodes.push(function() {
            var endLoc = getPosition();
            return withLoc(typeInstruction(void 0, signature(params, result)), endLoc, _startLoc);
          }());
          state.typesInModule.push({
            params,
            result
          });
        } else {
          throw new Error("Unsupported type: " + toHex2(type6));
        }
      }
      return typeInstructionNodes;
    }
    function parseImportSection(numberOfImports) {
      var imports = [];
      for (var i = 0; i < numberOfImports; i++) {
        dumpSep("import header " + i);
        var _startLoc2 = getPosition();
        var moduleName = readUTF8String();
        eatBytes(moduleName.nextIndex);
        dump([], "module name (".concat(moduleName.value, ")"));
        var name = readUTF8String();
        eatBytes(name.nextIndex);
        dump([], "name (".concat(name.value, ")"));
        var descrTypeByte = readByte();
        eatBytes(1);
        var descrType = src_default.importTypes[descrTypeByte];
        dump([descrTypeByte], "import kind");
        if (typeof descrType === "undefined") {
          throw new CompileError("Unknown import description type: " + toHex2(descrTypeByte));
        }
        var importDescr = void 0;
        if (descrType === "func") {
          var indexU32 = readU32();
          var typeindex = indexU32.value;
          eatBytes(indexU32.nextIndex);
          dump([typeindex], "type index");
          var signature2 = state.typesInModule[typeindex];
          if (typeof signature2 === "undefined") {
            throw new CompileError("function signature not found (".concat(typeindex, ")"));
          }
          var id = getUniqueName("func");
          importDescr = funcImportDescr(id, signature(signature2.params, signature2.result));
          state.functionsInModule.push({
            id: identifier(name.value),
            signature: signature2,
            isExternal: true
          });
        } else if (descrType === "global") {
          importDescr = parseGlobalType();
          var globalNode = global2(importDescr, []);
          state.globalsInModule.push(globalNode);
        } else if (descrType === "table") {
          importDescr = parseTableType(i);
        } else if (descrType === "memory") {
          var memoryNode = parseMemoryType(0);
          state.memoriesInModule.push(memoryNode);
          importDescr = memoryNode;
        } else {
          throw new CompileError("Unsupported import of type: " + descrType);
        }
        imports.push(function() {
          var endLoc = getPosition();
          return withLoc(moduleImport(moduleName.value, name.value, importDescr), endLoc, _startLoc2);
        }());
      }
      return imports;
    }
    function parseFuncSection(numberOfFunctions) {
      dump([numberOfFunctions], "num funcs");
      for (var i = 0; i < numberOfFunctions; i++) {
        var indexU32 = readU32();
        var typeindex = indexU32.value;
        eatBytes(indexU32.nextIndex);
        dump([typeindex], "type index");
        var signature2 = state.typesInModule[typeindex];
        if (typeof signature2 === "undefined") {
          throw new CompileError("function signature not found (".concat(typeindex, ")"));
        }
        var id = withRaw(identifier(getUniqueName("func")), "");
        state.functionsInModule.push({
          id,
          signature: signature2,
          isExternal: false
        });
      }
    }
    function parseExportSection(numberOfExport) {
      dump([numberOfExport], "num exports");
      for (var i = 0; i < numberOfExport; i++) {
        var _startLoc3 = getPosition();
        var name = readUTF8String();
        eatBytes(name.nextIndex);
        dump([], "export name (".concat(name.value, ")"));
        var typeIndex = readByte();
        eatBytes(1);
        dump([typeIndex], "export kind");
        var indexu32 = readU32();
        var index = indexu32.value;
        eatBytes(indexu32.nextIndex);
        dump([index], "export index");
        var id = void 0, signature2 = void 0;
        if (src_default.exportTypes[typeIndex] === "Func") {
          var func3 = state.functionsInModule[index];
          if (typeof func3 === "undefined") {
            throw new CompileError("unknown function (".concat(index, ")"));
          }
          id = numberLiteralFromRaw(index, String(index));
          signature2 = func3.signature;
        } else if (src_default.exportTypes[typeIndex] === "Table") {
          var table2 = state.tablesInModule[index];
          if (typeof table2 === "undefined") {
            throw new CompileError("unknown table ".concat(index));
          }
          id = numberLiteralFromRaw(index, String(index));
          signature2 = null;
        } else if (src_default.exportTypes[typeIndex] === "Memory") {
          var memNode = state.memoriesInModule[index];
          if (typeof memNode === "undefined") {
            throw new CompileError("unknown memory ".concat(index));
          }
          id = numberLiteralFromRaw(index, String(index));
          signature2 = null;
        } else if (src_default.exportTypes[typeIndex] === "Global") {
          var global4 = state.globalsInModule[index];
          if (typeof global4 === "undefined") {
            throw new CompileError("unknown global ".concat(index));
          }
          id = numberLiteralFromRaw(index, String(index));
          signature2 = null;
        } else {
          console.warn("Unsupported export type: " + toHex2(typeIndex));
          return;
        }
        var endLoc = getPosition();
        state.elementsInExportSection.push({
          name: name.value,
          type: src_default.exportTypes[typeIndex],
          signature: signature2,
          id,
          index,
          endLoc,
          startLoc: _startLoc3
        });
      }
    }
    function parseCodeSection(numberOfFuncs) {
      dump([numberOfFuncs], "number functions");
      for (var i = 0; i < numberOfFuncs; i++) {
        var _startLoc4 = getPosition();
        dumpSep("function body " + i);
        var bodySizeU32 = readU32();
        eatBytes(bodySizeU32.nextIndex);
        dump([bodySizeU32.value], "function body size");
        var code2 = [];
        var funcLocalNumU32 = readU32();
        var funcLocalNum = funcLocalNumU32.value;
        eatBytes(funcLocalNumU32.nextIndex);
        dump([funcLocalNum], "num locals");
        var locals = [];
        for (var _i = 0; _i < funcLocalNum; _i++) {
          var _startLoc5 = getPosition();
          var localCountU32 = readU32();
          var localCount = localCountU32.value;
          eatBytes(localCountU32.nextIndex);
          dump([localCount], "num local");
          var valtypeByte = readByte();
          eatBytes(1);
          var type6 = src_default.valtypes[valtypeByte];
          var args = [];
          for (var _i2 = 0; _i2 < localCount; _i2++) {
            args.push(valtypeLiteral(type6));
          }
          var localNode = function() {
            var endLoc2 = getPosition();
            return withLoc(instruction("local", args), endLoc2, _startLoc5);
          }();
          locals.push(localNode);
          dump([valtypeByte], type6);
          if (typeof type6 === "undefined") {
            throw new CompileError("Unexpected valtype: " + toHex2(valtypeByte));
          }
        }
        code2.push.apply(code2, locals);
        parseInstructionBlock(code2);
        var endLoc = getPosition();
        state.elementsInCodeSection.push({
          code: code2,
          locals,
          endLoc,
          startLoc: _startLoc4,
          bodySize: bodySizeU32.value
        });
      }
    }
    function parseInstructionBlock(code2) {
      while (true) {
        var _startLoc6 = getPosition();
        var instructionAlreadyCreated = false;
        var instructionByte = readByte();
        eatBytes(1);
        if (instructionByte === 254) {
          instructionByte = 65024 + readByte();
          eatBytes(1);
        }
        var instruction2 = src_default.symbolsByByte[instructionByte];
        if (typeof instruction2 === "undefined") {
          throw new CompileError("Unexpected instruction: " + toHex2(instructionByte));
        }
        if (typeof instruction2.object === "string") {
          dump([instructionByte], "".concat(instruction2.object, ".").concat(instruction2.name));
        } else {
          dump([instructionByte], instruction2.name);
        }
        if (instruction2.name === "end") {
          var node = function() {
            var endLoc = getPosition();
            return withLoc(instruction(instruction2.name), endLoc, _startLoc6);
          }();
          code2.push(node);
          break;
        }
        var args = [];
        var namedArgs = void 0;
        if (instruction2.name === "loop") {
          var _startLoc7 = getPosition();
          var blocktypeByte = readByte();
          eatBytes(1);
          var blocktype = src_default.blockTypes[blocktypeByte];
          dump([blocktypeByte], "blocktype");
          if (typeof blocktype === "undefined") {
            throw new CompileError("Unexpected blocktype: " + toHex2(blocktypeByte));
          }
          var instr2 = [];
          parseInstructionBlock(instr2);
          var label2 = withRaw(identifier(getUniqueName("loop")), "");
          var loopNode = function() {
            var endLoc = getPosition();
            return withLoc(loopInstruction(label2, blocktype, instr2), endLoc, _startLoc7);
          }();
          code2.push(loopNode);
          instructionAlreadyCreated = true;
        } else if (instruction2.name === "if") {
          var _startLoc8 = getPosition();
          var _blocktypeByte = readByte();
          eatBytes(1);
          var _blocktype = src_default.blockTypes[_blocktypeByte];
          dump([_blocktypeByte], "blocktype");
          if (typeof _blocktype === "undefined") {
            throw new CompileError("Unexpected blocktype: " + toHex2(_blocktypeByte));
          }
          var testIndex = withRaw(identifier(getUniqueName("if")), "");
          var ifBody = [];
          parseInstructionBlock(ifBody);
          var elseIndex = 0;
          for (elseIndex = 0; elseIndex < ifBody.length; ++elseIndex) {
            var _instr = ifBody[elseIndex];
            if (_instr.type === "Instr" && _instr.id === "else") {
              break;
            }
          }
          var consequentInstr = ifBody.slice(0, elseIndex);
          var alternate = ifBody.slice(elseIndex + 1);
          var testInstrs = [];
          var ifNode = function() {
            var endLoc = getPosition();
            return withLoc(ifInstruction(testIndex, testInstrs, _blocktype, consequentInstr, alternate), endLoc, _startLoc8);
          }();
          code2.push(ifNode);
          instructionAlreadyCreated = true;
        } else if (instruction2.name === "block") {
          var _startLoc9 = getPosition();
          var _blocktypeByte2 = readByte();
          eatBytes(1);
          var _blocktype2 = src_default.blockTypes[_blocktypeByte2];
          dump([_blocktypeByte2], "blocktype");
          if (typeof _blocktype2 === "undefined") {
            throw new CompileError("Unexpected blocktype: " + toHex2(_blocktypeByte2));
          }
          var _instr2 = [];
          parseInstructionBlock(_instr2);
          var _label = withRaw(identifier(getUniqueName("block")), "");
          var blockNode = function() {
            var endLoc = getPosition();
            return withLoc(blockInstruction(_label, _instr2, _blocktype2), endLoc, _startLoc9);
          }();
          code2.push(blockNode);
          instructionAlreadyCreated = true;
        } else if (instruction2.name === "call") {
          var indexu32 = readU32();
          var index = indexu32.value;
          eatBytes(indexu32.nextIndex);
          dump([index], "index");
          var callNode = function() {
            var endLoc = getPosition();
            return withLoc(callInstruction(indexLiteral(index)), endLoc, _startLoc6);
          }();
          code2.push(callNode);
          instructionAlreadyCreated = true;
        } else if (instruction2.name === "call_indirect") {
          var _startLoc10 = getPosition();
          var indexU32 = readU32();
          var typeindex = indexU32.value;
          eatBytes(indexU32.nextIndex);
          dump([typeindex], "type index");
          var signature2 = state.typesInModule[typeindex];
          if (typeof signature2 === "undefined") {
            throw new CompileError("call_indirect signature not found (".concat(typeindex, ")"));
          }
          var _callNode = callIndirectInstruction(signature(signature2.params, signature2.result), []);
          var flagU32 = readU32();
          var flag = flagU32.value;
          eatBytes(flagU32.nextIndex);
          if (flag !== 0) {
            throw new CompileError("zero flag expected");
          }
          code2.push(function() {
            var endLoc = getPosition();
            return withLoc(_callNode, endLoc, _startLoc10);
          }());
          instructionAlreadyCreated = true;
        } else if (instruction2.name === "br_table") {
          var indicesu32 = readU32();
          var indices = indicesu32.value;
          eatBytes(indicesu32.nextIndex);
          dump([indices], "num indices");
          for (var i = 0; i <= indices; i++) {
            var _indexu = readU32();
            var _index = _indexu.value;
            eatBytes(_indexu.nextIndex);
            dump([_index], "index");
            args.push(numberLiteralFromRaw(_indexu.value.toString(), "u32"));
          }
        } else if (instructionByte >= 40 && instructionByte <= 64) {
          if (instruction2.name === "grow_memory" || instruction2.name === "current_memory") {
            var _indexU = readU32();
            var _index2 = _indexU.value;
            eatBytes(_indexU.nextIndex);
            if (_index2 !== 0) {
              throw new Error("zero flag expected");
            }
            dump([_index2], "index");
          } else {
            var aligun32 = readU32();
            var align = aligun32.value;
            eatBytes(aligun32.nextIndex);
            dump([align], "align");
            var offsetu32 = readU32();
            var _offset2 = offsetu32.value;
            eatBytes(offsetu32.nextIndex);
            dump([_offset2], "offset");
            if (namedArgs === void 0)
              namedArgs = {};
            namedArgs.offset = numberLiteralFromRaw(_offset2);
          }
        } else if (instructionByte >= 65 && instructionByte <= 68) {
          if (instruction2.object === "i32") {
            var value32 = read32();
            var value = value32.value;
            eatBytes(value32.nextIndex);
            dump([value], "i32 value");
            args.push(numberLiteralFromRaw(value));
          }
          if (instruction2.object === "u32") {
            var valueu32 = readU32();
            var _value = valueu32.value;
            eatBytes(valueu32.nextIndex);
            dump([_value], "u32 value");
            args.push(numberLiteralFromRaw(_value));
          }
          if (instruction2.object === "i64") {
            var value64 = read64();
            var _value2 = value64.value;
            eatBytes(value64.nextIndex);
            dump([Number(_value2.toString())], "i64 value");
            var high = _value2.high, low = _value2.low;
            var _node = {
              type: "LongNumberLiteral",
              value: {
                high,
                low
              }
            };
            args.push(_node);
          }
          if (instruction2.object === "u64") {
            var valueu64 = readU64();
            var _value3 = valueu64.value;
            eatBytes(valueu64.nextIndex);
            dump([Number(_value3.toString())], "u64 value");
            var _high = _value3.high, _low = _value3.low;
            var _node2 = {
              type: "LongNumberLiteral",
              value: {
                high: _high,
                low: _low
              }
            };
            args.push(_node2);
          }
          if (instruction2.object === "f32") {
            var valuef32 = readF32();
            var _value4 = valuef32.value;
            eatBytes(valuef32.nextIndex);
            dump([_value4], "f32 value");
            args.push(
              // $FlowIgnore
              floatLiteral(_value4, valuef32.nan, valuef32.inf, String(_value4))
            );
          }
          if (instruction2.object === "f64") {
            var valuef64 = readF64();
            var _value5 = valuef64.value;
            eatBytes(valuef64.nextIndex);
            dump([_value5], "f64 value");
            args.push(
              // $FlowIgnore
              floatLiteral(_value5, valuef64.nan, valuef64.inf, String(_value5))
            );
          }
        } else if (instructionByte >= 65024 && instructionByte <= 65279) {
          var align32 = readU32();
          var _align = align32.value;
          eatBytes(align32.nextIndex);
          dump([_align], "align");
          var _offsetu = readU32();
          var _offset3 = _offsetu.value;
          eatBytes(_offsetu.nextIndex);
          dump([_offset3], "offset");
        } else {
          for (var _i3 = 0; _i3 < instruction2.numberOfArgs; _i3++) {
            var u322 = readU32();
            eatBytes(u322.nextIndex);
            dump([u322.value], "argument " + _i3);
            args.push(numberLiteralFromRaw(u322.value));
          }
        }
        if (instructionAlreadyCreated === false) {
          if (typeof instruction2.object === "string") {
            var _node3 = function() {
              var endLoc = getPosition();
              return withLoc(objectInstruction(instruction2.name, instruction2.object, args, namedArgs), endLoc, _startLoc6);
            }();
            code2.push(_node3);
          } else {
            var _node4 = function() {
              var endLoc = getPosition();
              return withLoc(instruction(instruction2.name, args, namedArgs), endLoc, _startLoc6);
            }();
            code2.push(_node4);
          }
        }
      }
    }
    function parseLimits() {
      var limitType = readByte();
      eatBytes(1);
      var shared = limitType === 3;
      dump([limitType], "limit type" + (shared ? " (shared)" : ""));
      var min, max;
      if (limitType === 1 || limitType === 3) {
        var u32min = readU32();
        min = parseInt(u32min.value);
        eatBytes(u32min.nextIndex);
        dump([min], "min");
        var u32max = readU32();
        max = parseInt(u32max.value);
        eatBytes(u32max.nextIndex);
        dump([max], "max");
      }
      if (limitType === 0) {
        var _u32min = readU32();
        min = parseInt(_u32min.value);
        eatBytes(_u32min.nextIndex);
        dump([min], "min");
      }
      return limit(min, max, shared);
    }
    function parseTableType(index) {
      var name = withRaw(identifier(getUniqueName("table")), String(index));
      var elementTypeByte = readByte();
      eatBytes(1);
      dump([elementTypeByte], "element type");
      var elementType = src_default.tableTypes[elementTypeByte];
      if (typeof elementType === "undefined") {
        throw new CompileError("Unknown element type in table: " + toHex2(elementType));
      }
      var limits = parseLimits();
      return table(elementType, limits, name);
    }
    function parseGlobalType() {
      var valtypeByte = readByte();
      eatBytes(1);
      var type6 = src_default.valtypes[valtypeByte];
      dump([valtypeByte], type6);
      if (typeof type6 === "undefined") {
        throw new CompileError("Unknown valtype: " + toHex2(valtypeByte));
      }
      var globalTypeByte = readByte();
      eatBytes(1);
      var globalType2 = src_default.globalTypes[globalTypeByte];
      dump([globalTypeByte], "global type (".concat(globalType2, ")"));
      if (typeof globalType2 === "undefined") {
        throw new CompileError("Invalid mutability: " + toHex2(globalTypeByte));
      }
      return globalType(type6, globalType2);
    }
    function parseNameSectionFunctions() {
      var functionNames = [];
      var numberOfFunctionsu32 = readU32();
      var numbeOfFunctions = numberOfFunctionsu32.value;
      eatBytes(numberOfFunctionsu32.nextIndex);
      for (var i = 0; i < numbeOfFunctions; i++) {
        var indexu32 = readU32();
        var index = indexu32.value;
        eatBytes(indexu32.nextIndex);
        var name = readUTF8String();
        eatBytes(name.nextIndex);
        functionNames.push(functionNameMetadata(name.value, index));
      }
      return functionNames;
    }
    function parseNameSectionLocals() {
      var localNames = [];
      var numbeOfFunctionsu32 = readU32();
      var numbeOfFunctions = numbeOfFunctionsu32.value;
      eatBytes(numbeOfFunctionsu32.nextIndex);
      for (var i = 0; i < numbeOfFunctions; i++) {
        var functionIndexu32 = readU32();
        var functionIndex = functionIndexu32.value;
        eatBytes(functionIndexu32.nextIndex);
        var numLocalsu32 = readU32();
        var numLocals = numLocalsu32.value;
        eatBytes(numLocalsu32.nextIndex);
        for (var _i4 = 0; _i4 < numLocals; _i4++) {
          var localIndexu32 = readU32();
          var localIndex = localIndexu32.value;
          eatBytes(localIndexu32.nextIndex);
          var name = readUTF8String();
          eatBytes(name.nextIndex);
          localNames.push(localNameMetadata(name.value, localIndex, functionIndex));
        }
      }
      return localNames;
    }
    function parseNameSection(remainingBytes) {
      var nameMetadata = [];
      var initialOffset = offset;
      while (offset - initialOffset < remainingBytes) {
        var sectionTypeByte = readVaruint7();
        eatBytes(sectionTypeByte.nextIndex);
        var subSectionSizeInBytesu32 = readVaruint32();
        eatBytes(subSectionSizeInBytesu32.nextIndex);
        switch (sectionTypeByte.value) {
          case 1: {
            nameMetadata.push.apply(nameMetadata, _toConsumableArray3(parseNameSectionFunctions()));
            break;
          }
          case 2: {
            nameMetadata.push.apply(nameMetadata, _toConsumableArray3(parseNameSectionLocals()));
            break;
          }
          default: {
            eatBytes(subSectionSizeInBytesu32.value);
          }
        }
      }
      return nameMetadata;
    }
    function parseProducersSection() {
      var metadata2 = producersSectionMetadata([]);
      var sectionTypeByte = readVaruint32();
      eatBytes(sectionTypeByte.nextIndex);
      dump([sectionTypeByte.value], "num of producers");
      var fields = {
        language: [],
        "processed-by": [],
        sdk: []
      };
      for (var fieldI = 0; fieldI < sectionTypeByte.value; fieldI++) {
        var fieldName = readUTF8String();
        eatBytes(fieldName.nextIndex);
        var valueCount = readVaruint32();
        eatBytes(valueCount.nextIndex);
        for (var producerI = 0; producerI < valueCount.value; producerI++) {
          var producerName = readUTF8String();
          eatBytes(producerName.nextIndex);
          var producerVersion = readUTF8String();
          eatBytes(producerVersion.nextIndex);
          fields[fieldName.value].push(producerMetadataVersionedName(producerName.value, producerVersion.value));
        }
        metadata2.producers.push(fields[fieldName.value]);
      }
      return metadata2;
    }
    function parseGlobalSection(numberOfGlobals) {
      var globals = [];
      dump([numberOfGlobals], "num globals");
      for (var i = 0; i < numberOfGlobals; i++) {
        var _startLoc11 = getPosition();
        var globalType2 = parseGlobalType();
        var init2 = [];
        parseInstructionBlock(init2);
        var node = function() {
          var endLoc = getPosition();
          return withLoc(global2(globalType2, init2), endLoc, _startLoc11);
        }();
        globals.push(node);
        state.globalsInModule.push(node);
      }
      return globals;
    }
    function parseElemSection(numberOfElements) {
      var elems = [];
      dump([numberOfElements], "num elements");
      for (var i = 0; i < numberOfElements; i++) {
        var _startLoc12 = getPosition();
        var tableindexu32 = readU32();
        var tableindex = tableindexu32.value;
        eatBytes(tableindexu32.nextIndex);
        dump([tableindex], "table index");
        var instr2 = [];
        parseInstructionBlock(instr2);
        var indicesu32 = readU32();
        var indices = indicesu32.value;
        eatBytes(indicesu32.nextIndex);
        dump([indices], "num indices");
        var indexValues = [];
        for (var _i5 = 0; _i5 < indices; _i5++) {
          var indexu32 = readU32();
          var index = indexu32.value;
          eatBytes(indexu32.nextIndex);
          dump([index], "index");
          indexValues.push(indexLiteral(index));
        }
        var elemNode = function() {
          var endLoc = getPosition();
          return withLoc(elem(indexLiteral(tableindex), instr2, indexValues), endLoc, _startLoc12);
        }();
        elems.push(elemNode);
      }
      return elems;
    }
    function parseMemoryType(i) {
      var limits = parseLimits();
      return memory(limits, indexLiteral(i));
    }
    function parseTableSection(numberOfElements) {
      var tables = [];
      dump([numberOfElements], "num elements");
      for (var i = 0; i < numberOfElements; i++) {
        var tablesNode = parseTableType(i);
        state.tablesInModule.push(tablesNode);
        tables.push(tablesNode);
      }
      return tables;
    }
    function parseMemorySection(numberOfElements) {
      var memories = [];
      dump([numberOfElements], "num elements");
      for (var i = 0; i < numberOfElements; i++) {
        var memoryNode = parseMemoryType(i);
        state.memoriesInModule.push(memoryNode);
        memories.push(memoryNode);
      }
      return memories;
    }
    function parseStartSection() {
      var startLoc = getPosition();
      var u322 = readU32();
      var startFuncIndex = u322.value;
      eatBytes(u322.nextIndex);
      dump([startFuncIndex], "index");
      return function() {
        var endLoc = getPosition();
        return withLoc(start(indexLiteral(startFuncIndex)), endLoc, startLoc);
      }();
    }
    function parseDataSection(numberOfElements) {
      var dataEntries = [];
      dump([numberOfElements], "num elements");
      for (var i = 0; i < numberOfElements; i++) {
        var memoryIndexu32 = readU32();
        var memoryIndex = memoryIndexu32.value;
        eatBytes(memoryIndexu32.nextIndex);
        dump([memoryIndex], "memory index");
        var instrs = [];
        parseInstructionBlock(instrs);
        var hasExtraInstrs = instrs.filter(function(i2) {
          return i2.id !== "end";
        }).length !== 1;
        if (hasExtraInstrs) {
          throw new CompileError("data section offset must be a single instruction");
        }
        var bytes = parseVec(function(b) {
          return b;
        });
        dump([], "init");
        dataEntries.push(data(memIndexLiteral(memoryIndex), instrs[0], byteArray(bytes)));
      }
      return dataEntries;
    }
    function parseSection(sectionIndex2) {
      var sectionId = readByte();
      eatBytes(1);
      if (sectionId >= sectionIndex2 || sectionIndex2 === src_default.sections.custom) {
        sectionIndex2 = sectionId + 1;
      } else {
        if (sectionId !== src_default.sections.custom)
          throw new CompileError("Unexpected section: " + toHex2(sectionId));
      }
      var nextSectionIndex2 = sectionIndex2;
      var startOffset = offset;
      var startLoc = getPosition();
      var u322 = readU32();
      var sectionSizeInBytes = u322.value;
      eatBytes(u322.nextIndex);
      var sectionSizeInBytesNode = function() {
        var endLoc = getPosition();
        return withLoc(numberLiteralFromRaw(sectionSizeInBytes), endLoc, startLoc);
      }();
      switch (sectionId) {
        case src_default.sections.type: {
          dumpSep("section Type");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");
          var _startLoc13 = getPosition();
          var _u = readU32();
          var numberOfTypes = _u.value;
          eatBytes(_u.nextIndex);
          var metadata2 = sectionMetadata("type", startOffset, sectionSizeInBytesNode, function() {
            var endLoc = getPosition();
            return withLoc(numberLiteralFromRaw(numberOfTypes), endLoc, _startLoc13);
          }());
          var nodes2 = parseTypeSection(numberOfTypes);
          return {
            nodes: nodes2,
            metadata: metadata2,
            nextSectionIndex: nextSectionIndex2
          };
        }
        case src_default.sections.table: {
          dumpSep("section Table");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");
          var _startLoc14 = getPosition();
          var _u2 = readU32();
          var numberOfTable = _u2.value;
          eatBytes(_u2.nextIndex);
          dump([numberOfTable], "num tables");
          var _metadata = sectionMetadata("table", startOffset, sectionSizeInBytesNode, function() {
            var endLoc = getPosition();
            return withLoc(numberLiteralFromRaw(numberOfTable), endLoc, _startLoc14);
          }());
          var _nodes = parseTableSection(numberOfTable);
          return {
            nodes: _nodes,
            metadata: _metadata,
            nextSectionIndex: nextSectionIndex2
          };
        }
        case src_default.sections["import"]: {
          dumpSep("section Import");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");
          var _startLoc15 = getPosition();
          var numberOfImportsu32 = readU32();
          var numberOfImports = numberOfImportsu32.value;
          eatBytes(numberOfImportsu32.nextIndex);
          dump([numberOfImports], "number of imports");
          var _metadata2 = sectionMetadata("import", startOffset, sectionSizeInBytesNode, function() {
            var endLoc = getPosition();
            return withLoc(numberLiteralFromRaw(numberOfImports), endLoc, _startLoc15);
          }());
          var _nodes2 = parseImportSection(numberOfImports);
          return {
            nodes: _nodes2,
            metadata: _metadata2,
            nextSectionIndex: nextSectionIndex2
          };
        }
        case src_default.sections.func: {
          dumpSep("section Function");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");
          var _startLoc16 = getPosition();
          var numberOfFunctionsu32 = readU32();
          var numberOfFunctions = numberOfFunctionsu32.value;
          eatBytes(numberOfFunctionsu32.nextIndex);
          var _metadata3 = sectionMetadata("func", startOffset, sectionSizeInBytesNode, function() {
            var endLoc = getPosition();
            return withLoc(numberLiteralFromRaw(numberOfFunctions), endLoc, _startLoc16);
          }());
          parseFuncSection(numberOfFunctions);
          var _nodes3 = [];
          return {
            nodes: _nodes3,
            metadata: _metadata3,
            nextSectionIndex: nextSectionIndex2
          };
        }
        case src_default.sections["export"]: {
          dumpSep("section Export");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");
          var _startLoc17 = getPosition();
          var _u3 = readU32();
          var numberOfExport = _u3.value;
          eatBytes(_u3.nextIndex);
          var _metadata4 = sectionMetadata("export", startOffset, sectionSizeInBytesNode, function() {
            var endLoc = getPosition();
            return withLoc(numberLiteralFromRaw(numberOfExport), endLoc, _startLoc17);
          }());
          parseExportSection(numberOfExport);
          var _nodes4 = [];
          return {
            nodes: _nodes4,
            metadata: _metadata4,
            nextSectionIndex: nextSectionIndex2
          };
        }
        case src_default.sections.code: {
          dumpSep("section Code");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");
          var _startLoc18 = getPosition();
          var _u4 = readU32();
          var numberOfFuncs = _u4.value;
          eatBytes(_u4.nextIndex);
          var _metadata5 = sectionMetadata("code", startOffset, sectionSizeInBytesNode, function() {
            var endLoc = getPosition();
            return withLoc(numberLiteralFromRaw(numberOfFuncs), endLoc, _startLoc18);
          }());
          if (opts.ignoreCodeSection === true) {
            var remainingBytes = sectionSizeInBytes - _u4.nextIndex;
            eatBytes(remainingBytes);
          } else {
            parseCodeSection(numberOfFuncs);
          }
          var _nodes5 = [];
          return {
            nodes: _nodes5,
            metadata: _metadata5,
            nextSectionIndex: nextSectionIndex2
          };
        }
        case src_default.sections.start: {
          dumpSep("section Start");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");
          var _metadata6 = sectionMetadata("start", startOffset, sectionSizeInBytesNode);
          var _nodes6 = [parseStartSection()];
          return {
            nodes: _nodes6,
            metadata: _metadata6,
            nextSectionIndex: nextSectionIndex2
          };
        }
        case src_default.sections.element: {
          dumpSep("section Element");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");
          var _startLoc19 = getPosition();
          var numberOfElementsu32 = readU32();
          var numberOfElements = numberOfElementsu32.value;
          eatBytes(numberOfElementsu32.nextIndex);
          var _metadata7 = sectionMetadata("element", startOffset, sectionSizeInBytesNode, function() {
            var endLoc = getPosition();
            return withLoc(numberLiteralFromRaw(numberOfElements), endLoc, _startLoc19);
          }());
          var _nodes7 = parseElemSection(numberOfElements);
          return {
            nodes: _nodes7,
            metadata: _metadata7,
            nextSectionIndex: nextSectionIndex2
          };
        }
        case src_default.sections.global: {
          dumpSep("section Global");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");
          var _startLoc20 = getPosition();
          var numberOfGlobalsu32 = readU32();
          var numberOfGlobals = numberOfGlobalsu32.value;
          eatBytes(numberOfGlobalsu32.nextIndex);
          var _metadata8 = sectionMetadata("global", startOffset, sectionSizeInBytesNode, function() {
            var endLoc = getPosition();
            return withLoc(numberLiteralFromRaw(numberOfGlobals), endLoc, _startLoc20);
          }());
          var _nodes8 = parseGlobalSection(numberOfGlobals);
          return {
            nodes: _nodes8,
            metadata: _metadata8,
            nextSectionIndex: nextSectionIndex2
          };
        }
        case src_default.sections.memory: {
          dumpSep("section Memory");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");
          var _startLoc21 = getPosition();
          var _numberOfElementsu = readU32();
          var _numberOfElements = _numberOfElementsu.value;
          eatBytes(_numberOfElementsu.nextIndex);
          var _metadata9 = sectionMetadata("memory", startOffset, sectionSizeInBytesNode, function() {
            var endLoc = getPosition();
            return withLoc(numberLiteralFromRaw(_numberOfElements), endLoc, _startLoc21);
          }());
          var _nodes9 = parseMemorySection(_numberOfElements);
          return {
            nodes: _nodes9,
            metadata: _metadata9,
            nextSectionIndex: nextSectionIndex2
          };
        }
        case src_default.sections.data: {
          dumpSep("section Data");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");
          var _metadata10 = sectionMetadata("data", startOffset, sectionSizeInBytesNode);
          var _startLoc22 = getPosition();
          var _numberOfElementsu2 = readU32();
          var _numberOfElements2 = _numberOfElementsu2.value;
          eatBytes(_numberOfElementsu2.nextIndex);
          _metadata10.vectorOfSize = function() {
            var endLoc = getPosition();
            return withLoc(numberLiteralFromRaw(_numberOfElements2), endLoc, _startLoc22);
          }();
          if (opts.ignoreDataSection === true) {
            var _remainingBytes = sectionSizeInBytes - _numberOfElementsu2.nextIndex;
            eatBytes(_remainingBytes);
            dumpSep("ignore data (" + sectionSizeInBytes + " bytes)");
            return {
              nodes: [],
              metadata: _metadata10,
              nextSectionIndex: nextSectionIndex2
            };
          } else {
            var _nodes10 = parseDataSection(_numberOfElements2);
            return {
              nodes: _nodes10,
              metadata: _metadata10,
              nextSectionIndex: nextSectionIndex2
            };
          }
        }
        case src_default.sections.custom: {
          dumpSep("section Custom");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");
          var _metadata11 = [sectionMetadata("custom", startOffset, sectionSizeInBytesNode)];
          var sectionName = readUTF8String();
          eatBytes(sectionName.nextIndex);
          dump([], "section name (".concat(sectionName.value, ")"));
          var _remainingBytes2 = sectionSizeInBytes - sectionName.nextIndex;
          if (sectionName.value === "name") {
            var initialOffset = offset;
            try {
              _metadata11.push.apply(_metadata11, _toConsumableArray3(parseNameSection(_remainingBytes2)));
            } catch (e) {
              console.warn('Failed to decode custom "name" section @'.concat(offset, "; ignoring (").concat(e.message, ")."));
              eatBytes(offset - (initialOffset + _remainingBytes2));
            }
          } else if (sectionName.value === "producers") {
            var _initialOffset = offset;
            try {
              _metadata11.push(parseProducersSection());
            } catch (e) {
              console.warn('Failed to decode custom "producers" section @'.concat(offset, "; ignoring (").concat(e.message, ")."));
              eatBytes(offset - (_initialOffset + _remainingBytes2));
            }
          } else {
            eatBytes(_remainingBytes2);
            dumpSep("ignore custom " + JSON.stringify(sectionName.value) + " section (" + _remainingBytes2 + " bytes)");
          }
          return {
            nodes: [],
            metadata: _metadata11,
            nextSectionIndex: nextSectionIndex2
          };
        }
      }
      if (opts.errorOnUnknownSection) {
        throw new CompileError("Unexpected section: " + toHex2(sectionId));
      } else {
        dumpSep("section " + toHex2(sectionId));
        dump([sectionId], "section code");
        dump([sectionSizeInBytes], "section size");
        eatBytes(sectionSizeInBytes);
        dumpSep("ignoring (" + sectionSizeInBytes + " bytes)");
        return {
          nodes: [],
          metadata: [],
          nextSectionIndex: 0
        };
      }
    }
    parseModuleHeader();
    parseVersion();
    var moduleFields = [];
    var sectionIndex = 0;
    var moduleMetadata2 = {
      sections: [],
      functionNames: [],
      localNames: [],
      producers: []
    };
    while (offset < buf.length) {
      var _parseSection = parseSection(sectionIndex), nodes = _parseSection.nodes, metadata = _parseSection.metadata, nextSectionIndex = _parseSection.nextSectionIndex;
      moduleFields.push.apply(moduleFields, _toConsumableArray3(nodes));
      var metadataArray = Array.isArray(metadata) ? metadata : [metadata];
      metadataArray.forEach(function(metadataItem) {
        if (metadataItem.type === "FunctionNameMetadata") {
          moduleMetadata2.functionNames.push(metadataItem);
        } else if (metadataItem.type === "LocalNameMetadata") {
          moduleMetadata2.localNames.push(metadataItem);
        } else if (metadataItem.type === "ProducersSectionMetadata") {
          moduleMetadata2.producers.push(metadataItem);
        } else {
          moduleMetadata2.sections.push(metadataItem);
        }
      });
      if (nextSectionIndex) {
        sectionIndex = nextSectionIndex;
      }
    }
    var funcIndex = 0;
    state.functionsInModule.forEach(function(func3) {
      var params = func3.signature.params;
      var result = func3.signature.result;
      var body = [];
      if (func3.isExternal === true) {
        return;
      }
      var decodedElementInCodeSection = state.elementsInCodeSection[funcIndex];
      if (opts.ignoreCodeSection === false) {
        if (typeof decodedElementInCodeSection === "undefined") {
          throw new CompileError("func " + toHex2(funcIndex) + " code not found");
        }
        body = decodedElementInCodeSection.code;
      }
      funcIndex++;
      var funcNode = func(func3.id, signature(params, result), body);
      if (func3.isExternal === true) {
        funcNode.isExternal = func3.isExternal;
      }
      if (opts.ignoreCodeSection === false) {
        var _startLoc23 = decodedElementInCodeSection.startLoc, endLoc = decodedElementInCodeSection.endLoc, bodySize = decodedElementInCodeSection.bodySize;
        funcNode = withLoc(funcNode, endLoc, _startLoc23);
        funcNode.metadata = {
          bodySize
        };
      }
      moduleFields.push(funcNode);
    });
    state.elementsInExportSection.forEach(function(moduleExport2) {
      if (moduleExport2.id != null) {
        moduleFields.push(withLoc(moduleExport(moduleExport2.name, moduleExportDescr(moduleExport2.type, moduleExport2.id)), moduleExport2.endLoc, moduleExport2.startLoc));
      }
    });
    dumpSep("end of program");
    var module2 = module(null, moduleFields, moduleMetadata(moduleMetadata2.sections, moduleMetadata2.functionNames, moduleMetadata2.localNames, moduleMetadata2.producers));
    return program([module2]);
  }
  var init_decoder2 = __esm({
    "packages/wasm-parser/src/decoder.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src2();
      init_src10();
      init_src11();
      init_src5();
      init_src12();
      init_src4();
    }
  });

  // packages/wasm-parser/src/index.js
  var src_exports5 = {};
  __export(src_exports5, {
    decode: () => decode3
  });
  function restoreFunctionNames(ast) {
    var functionNames = [];
    traverse(ast, {
      FunctionNameMetadata: function FunctionNameMetadata(_ref) {
        var node = _ref.node;
        functionNames.push({
          name: node.value,
          index: node.index
        });
      }
    });
    if (functionNames.length === 0) {
      return;
    }
    traverse(ast, {
      Func: function(_Func) {
        function Func(_x) {
          return _Func.apply(this, arguments);
        }
        Func.toString = function() {
          return _Func.toString();
        };
        return Func;
      }(function(_ref2) {
        var node = _ref2.node;
        var nodeName = node.name;
        var indexBasedFunctionName = nodeName.value;
        var index = Number(indexBasedFunctionName.replace("func_", ""));
        var functionName = functionNames.find(function(f) {
          return f.index === index;
        });
        if (functionName) {
          var oldValue = nodeName.value;
          nodeName.value = functionName.name;
          nodeName.numeric = oldValue;
          delete nodeName.raw;
        }
      }),
      // Also update the reference in the export
      ModuleExport: function(_ModuleExport) {
        function ModuleExport(_x2) {
          return _ModuleExport.apply(this, arguments);
        }
        ModuleExport.toString = function() {
          return _ModuleExport.toString();
        };
        return ModuleExport;
      }(function(_ref3) {
        var node = _ref3.node;
        if (node.descr.exportType === "Func") {
          var nodeName = node.descr.id;
          var index = nodeName.value;
          var functionName = functionNames.find(function(f) {
            return f.index === index;
          });
          if (functionName) {
            node.descr.id = identifier(functionName.name);
          }
        }
      }),
      ModuleImport: function(_ModuleImport) {
        function ModuleImport(_x3) {
          return _ModuleImport.apply(this, arguments);
        }
        ModuleImport.toString = function() {
          return _ModuleImport.toString();
        };
        return ModuleImport;
      }(function(_ref4) {
        var node = _ref4.node;
        if (node.descr.type === "FuncImportDescr") {
          var indexBasedFunctionName = node.descr.id;
          var index = Number(indexBasedFunctionName.replace("func_", ""));
          var functionName = functionNames.find(function(f) {
            return f.index === index;
          });
          if (functionName) {
            node.descr.id = identifier(functionName.name);
          }
        }
      }),
      CallInstruction: function(_CallInstruction) {
        function CallInstruction(_x4) {
          return _CallInstruction.apply(this, arguments);
        }
        CallInstruction.toString = function() {
          return _CallInstruction.toString();
        };
        return CallInstruction;
      }(function(nodePath) {
        var node = nodePath.node;
        var index = node.index.value;
        var functionName = functionNames.find(function(f) {
          return f.index === index;
        });
        if (functionName) {
          var oldValue = node.index;
          node.index = identifier(functionName.name);
          node.numeric = oldValue;
          delete node.raw;
        }
      })
    });
  }
  function restoreLocalNames(ast) {
    var localNames = [];
    traverse(ast, {
      LocalNameMetadata: function LocalNameMetadata(_ref5) {
        var node = _ref5.node;
        localNames.push({
          name: node.value,
          localIndex: node.localIndex,
          functionIndex: node.functionIndex
        });
      }
    });
    if (localNames.length === 0) {
      return;
    }
    traverse(ast, {
      Func: function(_Func2) {
        function Func(_x5) {
          return _Func2.apply(this, arguments);
        }
        Func.toString = function() {
          return _Func2.toString();
        };
        return Func;
      }(function(_ref6) {
        var node = _ref6.node;
        var signature2 = node.signature;
        if (signature2.type !== "Signature") {
          return;
        }
        var nodeName = node.name;
        var indexBasedFunctionName = nodeName.value;
        var functionIndex = Number(indexBasedFunctionName.replace("func_", ""));
        signature2.params.forEach(function(param, paramIndex) {
          var paramName = localNames.find(function(f) {
            return f.localIndex === paramIndex && f.functionIndex === functionIndex;
          });
          if (paramName && paramName.name !== "") {
            param.id = paramName.name;
          }
        });
      })
    });
  }
  function restoreModuleName(ast) {
    traverse(ast, {
      ModuleNameMetadata: function(_ModuleNameMetadata) {
        function ModuleNameMetadata(_x6) {
          return _ModuleNameMetadata.apply(this, arguments);
        }
        ModuleNameMetadata.toString = function() {
          return _ModuleNameMetadata.toString();
        };
        return ModuleNameMetadata;
      }(function(moduleNameMetadataPath) {
        traverse(ast, {
          Module: function(_Module) {
            function Module4(_x7) {
              return _Module.apply(this, arguments);
            }
            Module4.toString = function() {
              return _Module.toString();
            };
            return Module4;
          }(function(_ref7) {
            var node = _ref7.node;
            var name = moduleNameMetadataPath.node.value;
            if (name === "") {
              name = null;
            }
            node.id = name;
          })
        });
      })
    });
  }
  function decode3(buf, customOpts) {
    var opts = Object.assign({}, defaultDecoderOpts, customOpts);
    var ast = decode2(buf, opts);
    if (opts.ignoreCustomNameSection === false) {
      restoreFunctionNames(ast);
      restoreLocalNames(ast);
      restoreModuleName(ast);
    }
    return ast;
  }
  var defaultDecoderOpts;
  var init_src13 = __esm({
    "packages/wasm-parser/src/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_decoder2();
      init_src5();
      defaultDecoderOpts = {
        dump: false,
        ignoreCodeSection: false,
        ignoreDataSection: false,
        ignoreCustomNameSection: false
      };
    }
  });

  // packages/ast/src/transform/wast-identifier-to-index/index.js
  function _typeof6(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof6 = function _typeof18(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof6 = function _typeof18(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof6(obj);
  }
  function _slicedToArray3(arr, i) {
    return _arrayWithHoles4(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray6(arr, i) || _nonIterableRest4();
  }
  function _nonIterableRest4() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray6(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray6(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray6(o, minLen);
  }
  function _arrayLikeToArray6(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit3(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles4(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function newUnexpectedFunction(i) {
    return new Error("unknown function at offset: " + i);
  }
  function transform(ast) {
    var module2 = null;
    traverse(ast, {
      Module: function(_Module) {
        function Module4(_x) {
          return _Module.apply(this, arguments);
        }
        Module4.toString = function() {
          return _Module.toString();
        };
        return Module4;
      }(function(path) {
        module2 = path.node;
      })
    });
    if (module2 == null) {
      throw new Error("Module not foudn in program");
    }
    var moduleContext = moduleContextFromModuleAST(module2);
    traverse(ast, {
      Func: function(_Func) {
        function Func(_x2) {
          return _Func.apply(this, arguments);
        }
        Func.toString = function() {
          return _Func.toString();
        };
        return Func;
      }(function(path) {
        transformFuncPath(path, moduleContext);
      }),
      Start: function(_Start) {
        function Start(_x3) {
          return _Start.apply(this, arguments);
        }
        Start.toString = function() {
          return _Start.toString();
        };
        return Start;
      }(function(path) {
        var index = path.node.index;
        if (isIdentifier(index) === true) {
          var offsetInModule = moduleContext.getFunctionOffsetByIdentifier(index.value);
          if (typeof offsetInModule === "undefined") {
            throw newUnexpectedFunction(index.value);
          }
          path.node.index = numberLiteralFromRaw(offsetInModule);
        }
      })
    });
  }
  function transformFuncPath(funcPath, moduleContext) {
    var funcNode = funcPath.node;
    var signature2 = funcNode.signature;
    if (signature2.type !== "Signature") {
      throw new Error("Function signatures must be denormalised before execution");
    }
    var params = signature2.params;
    params.forEach(function(p) {
      return moduleContext.addLocal(p.valtype);
    });
    traverse(funcNode, {
      Instr: function(_Instr) {
        function Instr(_x4) {
          return _Instr.apply(this, arguments);
        }
        Instr.toString = function() {
          return _Instr.toString();
        };
        return Instr;
      }(function(instrPath) {
        var instrNode = instrPath.node;
        if (instrNode.id === "get_local" || instrNode.id === "set_local" || instrNode.id === "tee_local") {
          var _instrNode$args = _slicedToArray3(instrNode.args, 1), firstArg = _instrNode$args[0];
          if (firstArg.type === "Identifier") {
            var offsetInParams = params.findIndex(function(_ref) {
              var id = _ref.id;
              return id === firstArg.value;
            });
            if (offsetInParams === -1) {
              throw new Error("".concat(firstArg.value, " not found in ").concat(instrNode.id, ": not declared in func params"));
            }
            instrNode.args[0] = numberLiteralFromRaw(offsetInParams);
          }
        }
        if (instrNode.id === "get_global" || instrNode.id === "set_global") {
          var _instrNode$args2 = _slicedToArray3(instrNode.args, 1), _firstArg = _instrNode$args2[0];
          if (isIdentifier(_firstArg) === true) {
            var globalOffset = moduleContext.getGlobalOffsetByIdentifier(
              // $FlowIgnore: reference?
              _firstArg.value
            );
            if (typeof globalOffset === "undefined") {
              throw new Error("global ".concat(_firstArg.value, " not found in module"));
            }
            instrNode.args[0] = numberLiteralFromRaw(globalOffset);
          }
        }
        if (instrNode.id === "br") {
          var _instrNode$args3 = _slicedToArray3(instrNode.args, 1), _firstArg2 = _instrNode$args3[0];
          if (isIdentifier(_firstArg2) === true) {
            var relativeBlockCount = -1;
            instrPath.findParent(function(_ref2) {
              var node = _ref2.node;
              if (isBlock(node)) {
                relativeBlockCount++;
                var name = node.label || node.name;
                if (_typeof6(name) === "object") {
                  if (name.value === _firstArg2.value) {
                    return false;
                  }
                }
              }
              if (isFunc(node)) {
                return false;
              }
            });
            instrNode.args[0] = numberLiteralFromRaw(relativeBlockCount);
          }
        }
      }),
      /**
       * Func lookup
       */
      CallInstruction: function(_CallInstruction) {
        function CallInstruction(_x5) {
          return _CallInstruction.apply(this, arguments);
        }
        CallInstruction.toString = function() {
          return _CallInstruction.toString();
        };
        return CallInstruction;
      }(function(_ref3) {
        var node = _ref3.node;
        var index = node.index;
        if (isIdentifier(index) === true) {
          var offsetInModule = moduleContext.getFunctionOffsetByIdentifier(index.value);
          if (typeof offsetInModule === "undefined") {
            throw newUnexpectedFunction(index.value);
          }
          node.index = numberLiteralFromRaw(offsetInModule);
        }
      })
    });
  }
  var init_wast_identifier_to_index = __esm({
    "packages/ast/src/transform/wast-identifier-to-index/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src5();
      init_ast_module_to_module_context();
    }
  });

  // packages/ast/src/transform/denormalize-type-references/index.js
  function transform2(ast) {
    var typeInstructions = [];
    t.traverse(ast, {
      TypeInstruction: function TypeInstruction(_ref) {
        var node = _ref.node;
        typeInstructions.push(node);
      }
    });
    if (!typeInstructions.length) {
      return;
    }
    function denormalizeSignature(signature2) {
      if (signature2.type === "Identifier") {
        var identifier2 = signature2;
        var typeInstruction2 = typeInstructions.find(function(t5) {
          return t5.id.type === identifier2.type && t5.id.value === identifier2.value;
        });
        if (!typeInstruction2) {
          throw new Error("A type instruction reference was not found ".concat(JSON.stringify(signature2)));
        }
        return typeInstruction2.functype;
      }
      if (signature2.type === "NumberLiteral") {
        var signatureRef = signature2;
        var _typeInstruction = typeInstructions[signatureRef.value];
        return _typeInstruction.functype;
      }
      return signature2;
    }
    t.traverse(ast, {
      Func: function(_Func) {
        function Func(_x) {
          return _Func.apply(this, arguments);
        }
        Func.toString = function() {
          return _Func.toString();
        };
        return Func;
      }(function(_ref2) {
        var node = _ref2.node;
        node.signature = denormalizeSignature(node.signature);
      }),
      CallIndirectInstruction: function CallIndirectInstruction(_ref3) {
        var node = _ref3.node;
        node.signature = denormalizeSignature(node.signature);
      }
    });
  }
  var t;
  var init_denormalize_type_references = __esm({
    "packages/ast/src/transform/denormalize-type-references/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      t = (init_src5(), __toCommonJS(src_exports));
    }
  });

  // packages/helper-flatten-ast/src/index.js
  function _toConsumableArray4(arr) {
    return _arrayWithoutHoles4(arr) || _iterableToArray4(arr) || _unsupportedIterableToArray7(arr) || _nonIterableSpread4();
  }
  function _nonIterableSpread4() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray7(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray7(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray7(o, minLen);
  }
  function _iterableToArray4(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _arrayWithoutHoles4(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray7(arr);
  }
  function _arrayLikeToArray7(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function flatten(ast) {
    function CallInstructionVisitor(path) {
      var instrArgs = path.node.instrArgs;
      if (typeof instrArgs === "undefined" || instrArgs.length === 0) {
        return;
      }
      instrArgs.forEach(path.insertBefore);
      path.node.instrArgs = [];
      didFlatten = true;
    }
    function InstrVisitor(path) {
      if (path.node.args.length === 0) {
        return;
      }
      path.node.args = path.node.args.reduce(function(acc, arg) {
        if (isInstruction(arg) === false) {
          return [].concat(_toConsumableArray4(acc), [arg]);
        }
        path.insertBefore(arg);
        didFlatten = true;
        return acc;
      }, []);
    }
    var didFlatten = true;
    while (didFlatten) {
      didFlatten = false;
      traverse(ast, {
        CallInstruction: CallInstructionVisitor,
        Instr: InstrVisitor
      });
    }
    return ast;
  }
  var init_src14 = __esm({
    "packages/helper-flatten-ast/src/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src5();
    }
  });

  // packages/helper-compiler/src/module.js
  function _typeof7(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof7 = function _typeof18(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof7 = function _typeof18(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof7(obj);
  }
  function _classCallCheck4(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties3(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass3(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties3(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties3(Constructor, staticProps);
    return Constructor;
  }
  function createContext(ast) {
    var context = {
      funcs: []
    };
    traverse(ast, {
      ModuleImport: function(_ModuleImport) {
        function ModuleImport(_x) {
          return _ModuleImport.apply(this, arguments);
        }
        ModuleImport.toString = function() {
          return _ModuleImport.toString();
        };
        return ModuleImport;
      }(function(path) {
        if (isFuncImportDescr(path.node.descr)) {
          context.funcs.push({
            isImplemented: false
          });
        }
      }),
      Func: function(_Func) {
        function Func(_x2) {
          return _Func.apply(this, arguments);
        }
        Func.toString = function() {
          return _Func.toString();
        };
        return Func;
      }(function(path) {
        context.funcs.push({
          isImplemented: true,
          node: path.node
        });
      })
    });
    return context;
  }
  var kStart, Module;
  var init_module = __esm({
    "packages/helper-compiler/src/module.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src5();
      kStart = Symbol("_start");
      Module = /* @__PURE__ */ function() {
        function Module4(ast) {
          _classCallCheck4(this, Module4);
          this._labels = [];
          this._program = [];
          this._currentFunc = null;
          this._context = createContext(ast);
        }
        _createClass3(Module4, [{
          key: "_emit",
          value: function _emit(node) {
            var offset = getStartByteOffset(node);
            this._program.push({
              offset,
              node
            });
          }
        }, {
          key: "beginFuncBody",
          value: function beginFuncBody(func3) {
            this._labels = [];
            this._program = [];
            this._currentFunc = func3;
            this._labels.push(func3);
          }
        }, {
          key: "onFuncInstruction",
          value: function onFuncInstruction(node) {
            var _this = this;
            if (isCallInstruction(node)) {
              if (!(node.numeric !== null)) {
                throw new Error("node.numeric !== null error: unknown");
              }
              var funcIndex = null;
              if (isNumberLiteral(node.index)) {
                funcIndex = parseInt(node.index.value);
              }
              if (isIdentifier(node.index)) {
                funcIndex = parseInt(node.numeric.value);
              }
              if (!(funcIndex !== null)) {
                throw new Error("funcIndex !== null error: unknown");
              }
              var funcInContext = this._context.funcs[funcIndex];
              if (!(_typeof7(funcInContext) === "object")) {
                throw new Error('typeof funcInContext === "object" error: unknown');
              }
              if (funcInContext.isImplemented === true) {
                var func3 = funcInContext.node;
                node.index.value = getFunctionBeginingByteOffset(func3);
                this._emit(node);
              } else {
                var internalCallExternNode = internalCallExtern(funcIndex);
                internalCallExternNode.loc = node.loc;
                this._emit(internalCallExternNode);
              }
              return;
            }
            if (isBlock(node)) {
              this._labels.push(node);
            }
            if (isLoopInstruction(node)) {
              this._labels.push(node);
            }
            if (node.id === "br" || node.id === "br_if") {
              var depth = node.args[0].value;
              var target = this._labels[this._labels.length - depth - 1];
              if (!(_typeof7(target) === "object")) {
                throw new Error('typeof target === "object" error: ' + ("Label ".concat(String(depth), " not found") || "unknown"));
              }
              if (isLoopInstruction(target) && depth === 0) {
                node.args[0].value = getStartBlockByteOffset(target);
              } else {
                node.args[0].value = getEndBlockByteOffset(target);
              }
            }
            if (isIfInstruction(node)) {
              var alternateOffset = getStartByteOffset(node.alternate[0]);
              var internalBrUnlessNode = internalBrUnless(alternateOffset);
              internalBrUnlessNode.loc = node.loc;
              this._emit(internalBrUnlessNode);
              node.consequent.forEach(function(n) {
                return _this._emit(n);
              });
              var internalGotoNode = internalGoto(
                // $FlowIgnore
                getEndByteOffset(node.alternate[node.alternate.length - 1])
              );
              internalGotoNode.loc = {
                start: {
                  line: -1,
                  // $FlowIgnore
                  column: node.alternate[0].loc.start.column - 1
                }
              };
              this._emit(internalGotoNode);
              node.alternate.forEach(function(n) {
                return _this._emit(n);
              });
              return;
            }
            this._emit(node);
          }
        }, {
          key: "emitStartFunc",
          value: function emitStartFunc(index) {
            var funcInContext = this._context.funcs[index];
            if (!(_typeof7(funcInContext) === "object")) {
              throw new Error('typeof funcInContext === "object" error: unknown');
            }
            if (!funcInContext.isImplemented) {
              throw new Error("funcInContext.isImplemented error: unknown");
            }
            var func3 = funcInContext.node;
            return {
              name: kStart,
              startAt: getFunctionBeginingByteOffset(func3)
            };
          }
        }, {
          key: "finalizeFunc",
          value: function finalizeFunc(func3) {
            this._labels.pop();
            var lastInstruction = this._program[this._program.length - 1];
            var internalEndAndReturnNode = internalEndAndReturn();
            internalEndAndReturnNode.loc = lastInstruction.node.loc;
            this._emit(internalEndAndReturnNode);
            this._currentFunc = null;
            return {
              name: func3.name ? func3.name.value : null,
              startAt: getFunctionBeginingByteOffset(func3),
              instructions: this._program
            };
          }
        }]);
        return Module4;
      }();
    }
  });

  // packages/helper-compiler/src/printer.js
  var init_printer = __esm({
    "packages/helper-compiler/src/printer.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src15();
    }
  });

  // packages/helper-compiler/src/index.js
  function toIR(ast) {
    var program2 = {};
    var funcTable = [];
    flatten(ast);
    var module2 = new Module(ast);
    traverse(ast, {
      Start: function(_Start) {
        function Start(_x) {
          return _Start.apply(this, arguments);
        }
        Start.toString = function() {
          return _Start.toString();
        };
        return Start;
      }(function(_ref) {
        var node = _ref.node;
        var _module$emitStartFunc = module2.emitStartFunc(parseInt(node.index.value)), name = _module$emitStartFunc.name, startAt = _module$emitStartFunc.startAt;
        funcTable.push({
          name,
          startAt
        });
      }),
      Func: function(_Func) {
        function Func(_x2) {
          return _Func.apply(this, arguments);
        }
        Func.toString = function() {
          return _Func.toString();
        };
        return Func;
      }(function(funcPath) {
        module2.beginFuncBody(funcPath.node);
        traverse(funcPath.node, {
          Instruction: function(_Instruction) {
            function Instruction(_x3) {
              return _Instruction.apply(this, arguments);
            }
            Instruction.toString = function() {
              return _Instruction.toString();
            };
            return Instruction;
          }(function(path) {
            module2.onFuncInstruction(path.node);
          })
        });
        var _module$finalizeFunc = module2.finalizeFunc(funcPath.node), name = _module$finalizeFunc.name, instructions = _module$finalizeFunc.instructions, startAt = _module$finalizeFunc.startAt;
        funcTable.push({
          name,
          startAt
        });
        instructions.forEach(function(instruction2) {
          program2[instruction2.offset] = instruction2.node;
        });
      })
    });
    return {
      // $FlowIgnore
      funcTable,
      program: program2
    };
  }
  function listOfInstructionsToIr(instrs) {
    var program2 = {};
    var funcTable = [];
    var module2 = new Module(program([]));
    var fakeFunc = func(identifier("main"), [], instrs);
    module2.beginFuncBody(fakeFunc);
    instrs.forEach(function(i) {
      return module2.onFuncInstruction(i);
    });
    var _module$finalizeFunc2 = module2.finalizeFunc(fakeFunc), name = _module$finalizeFunc2.name, instructions = _module$finalizeFunc2.instructions, startAt = _module$finalizeFunc2.startAt;
    funcTable.push({
      name,
      startAt
    });
    instructions.forEach(function(instruction2) {
      program2[instruction2.offset] = instruction2.node;
    });
    return {
      // $FlowIgnore
      funcTable,
      program: program2
    };
  }
  var init_src15 = __esm({
    "packages/helper-compiler/src/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src5();
      init_src14();
      init_module();
      init_module();
      init_printer();
    }
  });

  // packages/validation/src/import-order.js
  function validate(ast) {
    var errors = [];
    function isImportInstruction(path) {
      return path.parentPath.node.type === "ModuleImport";
    }
    var noMoreImports = false;
    traverse(ast, {
      ModuleImport: function ModuleImport(path) {
        if (noMoreImports && path.parentPath.node.type !== "Global") {
          return errors.push("imports must occur before all non-import definitions");
        }
      },
      Global: function Global(path) {
        if (!isImportInstruction(path)) {
          noMoreImports = true;
        }
      },
      Memory: function Memory2(path) {
        if (!isImportInstruction(path)) {
          noMoreImports = true;
        }
      },
      Table: function Table2(path) {
        if (!isImportInstruction(path)) {
          noMoreImports = true;
        }
      },
      Func: function Func(path) {
        if (!isImportInstruction(path)) {
          noMoreImports = true;
        }
      }
    });
    return errors;
  }
  var init_import_order = __esm({
    "packages/validation/src/import-order.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src5();
    }
  });

  // packages/validation/src/is-const.js
  function isConst(ast, moduleContext) {
    function isConstInstruction(instr2) {
      if (instr2.id === "const") {
        return true;
      }
      if (instr2.id === "get_global") {
        var index = instr2.args[0].value;
        return !moduleContext.isMutableGlobal(index);
      }
      if (instr2.id === "end") {
        return true;
      }
      return false;
    }
    var errors = [];
    traverse(ast, {
      Global: function Global(path) {
        var isValid = path.node.init.reduce(function(acc, instr2) {
          return acc && isConstInstruction(instr2);
        }, true);
        if (!isValid) {
          errors.push("constant expression required: initializer expression cannot reference mutable global");
        }
        if (path.node.init.length > 0) {
          var type6 = path.node.globalType.valtype;
          var initType = path.node.init[0].object;
          if (initType && type6 !== initType) {
            errors.push("type mismatch in global initializer");
          }
        }
      }
    });
    return errors;
  }
  var init_is_const = __esm({
    "packages/validation/src/is-const.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src5();
    }
  });

  // packages/validation/src/type-checker/types.js
  var ANY, POLYMORPHIC;
  var init_types = __esm({
    "packages/validation/src/type-checker/types.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      ANY = "ANY";
      POLYMORPHIC = "POLYMORPHIC";
    }
  });

  // packages/validation/src/type-checker/get-type.js
  function _toConsumableArray5(arr) {
    return _arrayWithoutHoles5(arr) || _iterableToArray5(arr) || _unsupportedIterableToArray8(arr) || _nonIterableSpread5();
  }
  function _nonIterableSpread5() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray8(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray8(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray8(o, minLen);
  }
  function _iterableToArray5(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _arrayWithoutHoles5(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray8(arr);
  }
  function _arrayLikeToArray8(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function equalResultTypes(t1, t22) {
    if (t1.length !== t22.length) {
      return false;
    }
    return t1.every(function(t5, i) {
      return t5 === t22[i];
    });
  }
  function getType(moduleContext, stack, instruction2) {
    var args = [];
    var result = [];
    var error;
    switch (instruction2.id) {
      case "local": {
        instruction2.args.forEach(function(t6) {
          return moduleContext.addLocal(t6.name);
        });
        args = [];
        result = [];
        break;
      }
      case "select": {
        if (stack.length < 3) {
          error = "Stack contains too few arguments for select";
          break;
        }
        var first = stack[stack.length - 2];
        var second = stack[stack.length - 3];
        if (first !== second) {
          error = "Type mismatch in select";
          break;
        }
        args = ["i32", first, first];
        result = [first];
        break;
      }
      case "get_global": {
        var index = instruction2.args[0].value;
        if (!moduleContext.hasGlobal(index)) {
          error = "Module does not have global ".concat(index);
          break;
        }
        args = [];
        result = [moduleContext.getGlobal(index)];
        break;
      }
      case "set_global": {
        var _index = instruction2.args[0].value;
        if (!moduleContext.hasGlobal(_index)) {
          error = "Module does not have global ".concat(_index);
          break;
        }
        if (moduleContext.isImmutableGlobal(_index)) {
          error = "global is immutable";
          break;
        }
        args = [moduleContext.getGlobal(_index)];
        result = [];
        break;
      }
      case "set_local": {
        var _index2 = instruction2.args[0].value;
        if (!moduleContext.hasLocal(_index2)) {
          error = "Function does not have local ".concat(_index2);
          break;
        }
        args = [moduleContext.getLocal(_index2)];
        result = [];
        break;
      }
      case "tee_local": {
        var _index3 = instruction2.args[0].value;
        if (!moduleContext.hasLocal(_index3)) {
          error = "Function does not have local ".concat(_index3);
          break;
        }
        args = [moduleContext.getLocal(_index3)];
        result = [moduleContext.getLocal(_index3)];
        break;
      }
      case "get_local": {
        var _index4 = instruction2.args[0].value;
        if (!moduleContext.hasLocal(_index4)) {
          error = "Function does not have local ".concat(_index4);
          break;
        }
        args = [];
        result = [moduleContext.getLocal(_index4)];
        break;
      }
      case "block": {
        args = [];
        result = instruction2.result ? [instruction2.result] : [];
        break;
      }
      case "if": {
        args = ["i32"];
        result = instruction2.result ? [instruction2.result] : [];
        break;
      }
      case "end":
      case "nop": {
        args = [];
        result = [];
        break;
      }
      case "loop": {
        args = [];
        result = instruction2.resulttype ? [instruction2.resulttype] : [];
        break;
      }
      case "call": {
        if (!moduleContext.hasFunction(instruction2.index.value)) {
          error = "Call to undefined function index ".concat(instruction2.index.value, ".");
          break;
        }
        var _moduleContext$getFun = moduleContext.getFunction(instruction2.index.value);
        args = _moduleContext$getFun.args;
        result = _moduleContext$getFun.result;
        break;
      }
      case "const": {
        args = [];
        result = [instruction2.object];
        break;
      }
      case "drop": {
        args = [ANY];
        result = [];
        break;
      }
      case "clz":
      case "ctz":
      case "popcnt":
      case "abs":
      case "neg":
      case "sqrt":
      case "ceil":
      case "floor":
      case "trunc":
      case "nearest": {
        args = [instruction2.object];
        result = [instruction2.object];
        break;
      }
      case "add":
      case "sub":
      case "mul":
      case "div":
      case "min":
      case "max":
      case "copysign":
      case "div_u":
      case "div_s":
      case "rem_u":
      case "rem_s":
      case "and":
      case "or":
      case "xor":
      case "shl":
      case "shr_u":
      case "shr_s":
      case "rotl":
      case "rotr": {
        args = [instruction2.object, instruction2.object];
        result = [instruction2.object];
        break;
      }
      case "eqz": {
        args = [instruction2.object];
        result = ["i32"];
        break;
      }
      case "eq":
      case "ne":
      case "lt_u":
      case "lt_s":
      case "lt":
      case "gt_u":
      case "gt_s":
      case "gt":
      case "le_u":
      case "le_s":
      case "le":
      case "ge_u":
      case "ge_s":
      case "ge": {
        args = [instruction2.object, instruction2.object];
        result = ["i32"];
        break;
      }
      case "wrap/i64":
      case "convert_s/i64":
      case "convert_u/i64":
      case "reinterpret/i64": {
        args = ["i64"];
        result = [instruction2.object];
        break;
      }
      case "promote/f32":
      case "trunc_u/f32":
      case "trunc_s/f32":
      case "convert_s/f32":
      case "convert_u/f32":
      case "reinterpret/f32": {
        args = ["f32"];
        result = [instruction2.object];
        break;
      }
      case "demote/f64":
      case "trunc_u/f64":
      case "trunc_s/f64":
      case "convert_s/f64":
      case "convert_u/f64":
      case "reinterpret/f64": {
        args = ["f64"];
        result = [instruction2.object];
        break;
      }
      case "extend_u/i32":
      case "extend_s/i32":
      case "convert_s/i32":
      case "convert_u/i32":
      case "reinterpret/i32": {
        args = ["i32"];
        result = [instruction2.object];
        break;
      }
      case "br": {
        var _index5 = instruction2.args[0].value;
        if (!moduleContext.getLabel(_index5)) {
          error = "Label ".concat(_index5, " does not exist");
          break;
        }
        args = moduleContext.getLabel(_index5);
        result = [POLYMORPHIC];
        break;
      }
      case "br_if": {
        var _index6 = instruction2.args[0].value;
        if (!moduleContext.getLabel(_index6)) {
          error = "Label ".concat(_index6, " does not exist");
          break;
        }
        args = [].concat(_toConsumableArray5(moduleContext.getLabel(_index6)), ["i32"]);
        result = moduleContext.getLabel(_index6);
        break;
      }
      case "load":
      case "load8_u":
      case "load8_s":
      case "load16_u":
      case "load16_s":
      case "load32_u":
      case "load32_s": {
        if (!moduleContext.hasMemory(0)) {
          error = "Module does not have memory 0";
          break;
        }
        args = ["i32"];
        result = [instruction2.object];
        break;
      }
      case "store":
      case "store8":
      case "store16":
      case "store32": {
        if (!moduleContext.hasMemory(0)) {
          error = "Module does not have memory 0";
          break;
        }
        args = [instruction2.object, "i32"];
        result = [];
        break;
      }
      case "return": {
        args = moduleContext["return"];
        result = [POLYMORPHIC];
        stack["return"] = true;
        break;
      }
      case "unreachable":
      case "trap": {
        args = [];
        result = [POLYMORPHIC];
        break;
      }
      case "size":
      case "current_memory": {
        if (!moduleContext.hasMemory(0)) {
          error = "Module does not have memory 0";
          break;
        }
        args = [];
        result = ["i32"];
        break;
      }
      case "grow":
      case "grow_memory": {
        if (!moduleContext.hasMemory(0)) {
          error = "Module does not have memory 0";
          break;
        }
        args = ["i32"];
        result = ["i32"];
        break;
      }
      case "br_table": {
        var _index7 = instruction2.args[0].value;
        if (!moduleContext.hasLabel(_index7)) {
          error = "Module does not have memory ".concat(_index7);
          break;
        }
        var t5 = moduleContext.getLabel(_index7);
        var validLabels = true;
        for (var i = 1; i < instruction2.args.length; ++i) {
          var arg = instruction2.args[i];
          if (arg.type === "Instr") {
            break;
          }
          var _index8 = arg.value;
          if (!moduleContext.hasLabel(_index8)) {
            error = "Module does not have memory ".concat(_index8);
            validLabels = false;
            break;
          }
          if (!equalResultTypes(moduleContext.getLabel(_index8), t5)) {
            error = "br_table index ".concat(_index8, " at position ").concat(i, " has mismatching result type.");
            validLabels = false;
            break;
          }
        }
        if (!validLabels) {
          break;
        }
        args = [].concat(_toConsumableArray5(t5), ["i32"]);
        result = [POLYMORPHIC];
        break;
      }
      case "call_indirect": {
        var signature2;
        {
          if (instruction2.signature.type === "Signature") {
            signature2 = instruction2.signature;
          } else {
            var typeId = instruction2.signature.value;
            signature2 = moduleContext.getType(typeId);
          }
        }
        args = ["i32"].concat(_toConsumableArray5(signature2.params.reverse().map(function(p) {
          return p.valtype;
        })));
        result = signature2.results;
        break;
      }
      default:
        throw new Error("Unknown instruction ".concat(instruction2.id, "."));
    }
    return {
      args,
      result,
      error
    };
  }
  var init_get_type = __esm({
    "packages/validation/src/type-checker/get-type.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_types();
    }
  });

  // packages/validation/src/type-checker.js
  function _toConsumableArray6(arr) {
    return _arrayWithoutHoles6(arr) || _iterableToArray6(arr) || _unsupportedIterableToArray9(arr) || _nonIterableSpread6();
  }
  function _nonIterableSpread6() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray9(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray9(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray9(o, minLen);
  }
  function _iterableToArray6(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _arrayWithoutHoles6(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray9(arr);
  }
  function _arrayLikeToArray9(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function createTypeChecker() {
    var errors = [];
    var stopFuncCheck = false;
    var currentFuncName;
    function onError(msg, index) {
      msg += " at " + (currentFuncName || "unknown");
      if (typeof index === "number") {
        msg += ":" + index;
      }
      msg += ".";
      errors.push(msg);
    }
    function checkTypes(a, b, index) {
      if (a === ANY && b) {
        return;
      }
      if (b === ANY && a) {
        return;
      }
      if (a === "u32")
        a = "i32";
      if (b === "u32")
        b = "i32";
      if (a === "u64")
        a = "i64";
      if (b === "u64")
        b = "i64";
      if (a !== b) {
        onError("Expected type ".concat(a, " but got ").concat(b || "none"), index);
        stopFuncCheck = true;
      }
    }
    function isEmptyStack(stack) {
      return stack.filter(function(t5) {
        return t5 !== POLYMORPHIC;
      }).length === 0;
    }
    function checkStacks(expectedStack, actualStack) {
      if (!(expectedStack !== void 0)) {
        throw new Error("expectedStack !== undefined error: unknown");
      }
      if (!(actualStack !== void 0)) {
        throw new Error("actualStack !== undefined error: unknown");
      }
      if (actualStack !== false) {
        var j = actualStack.length - 1;
        for (var i = 0; i < expectedStack.length; ++i) {
          var expected = expectedStack[i];
          var actual = actualStack[j];
          if (actual === POLYMORPHIC || stopFuncCheck) {
            return;
          }
          checkTypes(expected, actual);
          --j;
        }
        if (!isEmptyStack(actualStack.slice(0, j + 1))) {
          onError("Stack contains additional type ".concat(actualStack.slice(0, j + 1)));
        }
      }
    }
    function applyInstruction(moduleContext, stack, instruction2, index) {
      if (stack === false || stack["return"]) {
        return stack;
      }
      if (isInstruction(instruction2) === false) {
        return stack;
      }
      if (instruction2.args) {
        stack = instruction2.args.reduce(applyInstruction.bind(null, moduleContext), stack);
      }
      if (instruction2.instrArgs) {
        stack = instruction2.instrArgs.reduce(applyInstruction.bind(null, moduleContext), stack);
      }
      if (instruction2.intrs) {
        stack = instruction2.intrs.reduce(applyInstruction.bind(null, moduleContext), stack);
      }
      var type6 = getType(moduleContext, stack, instruction2);
      if (type6.error) {
        onError(type6.error, index);
        return false;
      }
      if (instruction2.type === "BlockInstruction" || instruction2.type === "LoopInstruction") {
        moduleContext.addLabel(type6.result);
        var newStack = instruction2.instr.reduce(applyInstruction.bind(null, moduleContext), []);
        if (!stopFuncCheck) {
          checkStacks(type6.result, newStack);
        }
        stack = [].concat(_toConsumableArray6(stack), _toConsumableArray6(type6.result));
        moduleContext.popLabel();
      } else if (instruction2.type === "IfInstruction") {
        moduleContext.addLabel(type6.result);
        if (instruction2.test) {
          stack = instruction2.test.reduce(applyInstruction.bind(null, moduleContext), stack);
        }
        var actual;
        for (var _i = 0; _i < type6.args.length; ++_i) {
          var argType = type6.args[_i];
          if (stack[stack.length - 1] === POLYMORPHIC || stopFuncCheck) {
            return false;
          }
          actual = stack.pop();
          checkTypes(argType, actual, index);
        }
        var stackConsequent = instruction2.consequent.reduce(applyInstruction.bind(null, moduleContext), []);
        var stackAlternate = instruction2.alternate.reduce(applyInstruction.bind(null, moduleContext), []);
        var i = 0;
        var j = 0;
        var compareLengths = true;
        while (i < stackConsequent.length && j < stackAlternate.length) {
          if (stackConsequent[i] === POLYMORPHIC || stackAlternate[j] === POLYMORPHIC) {
            compareLengths = false;
            break;
          }
          checkTypes(stackConsequent[i], stackAlternate[j], index);
          ++i;
          ++j;
        }
        while (compareLengths && i < stackConsequent.length) {
          if (stackConsequent[i] === POLYMORPHIC) {
            compareLengths = false;
          }
          ++i;
        }
        while (compareLengths && j < stackConsequent.length) {
          if (stackConsequent[j] === POLYMORPHIC) {
            compareLengths = false;
          }
          ++j;
        }
        if (compareLengths && stackConsequent.length !== stackAlternate.length) {
          onError("Type mismatch in if, got ".concat(stackConsequent, " and ").concat(stackAlternate), index);
        }
        checkStacks(type6.result, stackConsequent);
        moduleContext.popLabel();
        stack = type6.result;
      } else {
        if (stack === false) {
          return false;
        }
        var _actual;
        for (var _i2 = 0; _i2 < type6.args.length; ++_i2) {
          var _argType = type6.args[_i2];
          if (stack[stack.length - 1] === POLYMORPHIC || stopFuncCheck) {
            return false;
          }
          _actual = stack.pop();
          checkTypes(_argType, _actual, index);
        }
        stack = [].concat(_toConsumableArray6(stack), _toConsumableArray6(type6.result));
      }
      return stack;
    }
    return {
      getErrors: function getErrors() {
        return errors;
      },
      addError: function addError(msg) {
        errors.push(msg);
      },
      setStopFuncCheck: function setStopFuncCheck(state) {
        stopFuncCheck = state;
      },
      getStopFuncCheck: function getStopFuncCheck() {
        return stopFuncCheck;
      },
      setCurrentFuncName: function setCurrentFuncName(name) {
        currentFuncName = name;
      },
      applyInstruction,
      checkStacks
    };
  }
  function validate2(ast) {
    if (!ast.body || !ast.body[0] || !ast.body[0].fields) {
      return [];
    }
    var moduleContext = moduleContextFromModuleAST(ast.body[0]);
    var typeChecker = createTypeChecker();
    traverse(ast, {
      Func: function Func(_ref) {
        var node = _ref.node;
        typeChecker.setStopFuncCheck(false);
        typeChecker.setCurrentFuncName(node.name.value);
        var signature2;
        {
          if (isSignature(node.signature)) {
            signature2 = node.signature;
          } else {
            if (!isNumberLiteral(node.signature)) {
              throw new Error("isNumberLiteral(node.signature) error: unknown");
            }
            var typeId = node.signature.value;
            if (!moduleContext.hasType(typeId)) {
              throw new Error("moduleContext.hasType(typeId) error: unknown");
            }
            signature2 = moduleContext.getType(typeId);
          }
        }
        var expectedResult = signature2.results;
        moduleContext.newContext(node.name.value, expectedResult);
        signature2.params.forEach(function(p) {
          return moduleContext.addLocal(p.valtype);
        });
        var resultingStack = node.body.reduce(typeChecker.applyInstruction.bind(null, moduleContext), []);
        if (typeChecker.getStopFuncCheck()) {
          return typeChecker.getErrors();
        }
        typeChecker.checkStacks(expectedResult, resultingStack);
      }
    });
    return typeChecker.getErrors();
  }
  var init_type_checker = __esm({
    "packages/validation/src/type-checker.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src5();
      init_src5();
      init_get_type();
      init_types();
    }
  });

  // packages/validation/src/imports.js
  function imports_default(ast) {
    var errors = [];
    traverse(ast, {
      ModuleImport: function ModuleImport(_ref) {
        var node = _ref.node;
        var mutability = node.descr.mutability;
        if (mutability === "var") {
          errors.push("mutable globals cannot be imported");
        }
      }
    });
    return errors;
  }
  var init_imports = __esm({
    "packages/validation/src/imports.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src5();
    }
  });

  // packages/validation/src/duplicated-exports.js
  function duplicatedExports(name) {
    return 'duplicate export name "'.concat(name, '"');
  }
  function validate3(ast) {
    var errors = [];
    var seenExports = {};
    traverse(ast, {
      ModuleExport: function(_ModuleExport) {
        function ModuleExport(_x) {
          return _ModuleExport.apply(this, arguments);
        }
        ModuleExport.toString = function() {
          return _ModuleExport.toString();
        };
        return ModuleExport;
      }(function(path) {
        var name = path.node.name;
        if (seenExports[name] !== void 0) {
          return errors.push(duplicatedExports(name));
        }
        seenExports[name] = true;
      })
    });
    return errors;
  }
  var init_duplicated_exports = __esm({
    "packages/validation/src/duplicated-exports.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src5();
    }
  });

  // packages/validation/src/type-inference.js
  function typeEq(l, r) {
    if (l.length !== r.length) {
      return false;
    }
    for (var i = 0; i < l.length; i++) {
      if (l[i] != r[i]) {
        return false;
      }
    }
    return true;
  }
  function getType2(instrs) {
    if (instrs.length === 0) {
      return;
    }
    var last = instrs[instrs.length - 1];
    if (last.id === "end") {
      last = instrs[instrs.length - 2];
    }
    if (typeof last.object === "string") {
      if (last.object === "u32") {
        last.object = "i32";
      }
      var opName = "".concat(last.object, ".").concat(last.id);
      var signature2 = signatures[opName];
      if (typeof signature2 === "undefined") {
        throw new Error("Unknow type signature for instruction: " + opName);
      }
      return signature2[1];
    }
    if (last.id === "get_global" || last.id === "get_local") {
      return;
    }
    if (last.type === "LoopInstruction") {
      var loop = last;
      if (loop.resulttype != null) {
        return [loop.resulttype];
      }
    }
    if (last.type === "IfInstruction") {
      var ifInstruction2 = last;
      var res = [];
      if (typeof ifInstruction2.result === "string") {
        res = [ifInstruction2.result];
      }
      var leftType = getType2(ifInstruction2.consequent) || [];
      var rightType = getType2(ifInstruction2.alternate) || [];
      if (typeEq(leftType, res) === false || typeEq(rightType, res) === false) {
        throw new Error("type mismatch in if branches");
      }
      return res;
    }
  }
  var init_type_inference = __esm({
    "packages/validation/src/type-inference.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src5();
    }
  });

  // packages/validation/src/index.js
  function _toConsumableArray7(arr) {
    return _arrayWithoutHoles7(arr) || _iterableToArray7(arr) || _unsupportedIterableToArray10(arr) || _nonIterableSpread7();
  }
  function _nonIterableSpread7() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray10(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray10(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray10(o, minLen);
  }
  function _iterableToArray7(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _arrayWithoutHoles7(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray10(arr);
  }
  function _arrayLikeToArray10(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function validateAST(ast) {
    var errors = getValidationErrors(ast);
    if (errors.length !== 0) {
      var errorMessage = "Validation errors:\n" + errors.join("\n");
      throw new Error(errorMessage);
    }
  }
  function getValidationErrors(ast) {
    var errors = [];
    var modules = [];
    if (ast.type === "Module") {
      modules = [ast];
    }
    if (ast.type === "Program") {
      modules = ast.body.filter(function(_ref) {
        var type6 = _ref.type;
        return type6 === "Module";
      });
    }
    modules.forEach(function(m) {
      var moduleContext = moduleContextFromModuleAST(m);
      errors.push.apply(errors, _toConsumableArray7(imports_default(ast, moduleContext)));
      errors.push.apply(errors, _toConsumableArray7(isConst(ast, moduleContext)));
      errors.push.apply(errors, _toConsumableArray7(validate(ast)));
      errors.push.apply(errors, _toConsumableArray7(validate2(ast, moduleContext)));
      errors.push.apply(errors, _toConsumableArray7(validate3(ast)));
    });
    return errors;
  }
  var init_src16 = __esm({
    "packages/validation/src/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_import_order();
      init_is_const();
      init_type_checker();
      init_imports();
      init_duplicated_exports();
      init_src5();
      init_type_inference();
    }
  });

  // packages/webassemblyjs/src/compiler/compile/module.js
  var module_exports = {};
  __export(module_exports, {
    Module: () => Module2,
    createCompiledModule: () => createCompiledModule
  });
  function _classCallCheck5(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function createCompiledModule(ast) {
    var exports = [];
    var imports = [];
    transform2(ast);
    transform(ast);
    validateAST(ast);
    t2.traverse(ast, {
      ModuleExport: function(_ModuleExport) {
        function ModuleExport(_x) {
          return _ModuleExport.apply(this, arguments);
        }
        ModuleExport.toString = function() {
          return _ModuleExport.toString();
        };
        return ModuleExport;
      }(function(_ref) {
        var node = _ref.node;
        if (node.descr.exportType === "Func") {
          exports.push({
            name: node.name,
            kind: "function"
          });
        }
      })
    });
    var ir = toIR(ast);
    return new Module2(ir, ast, exports, imports);
  }
  var t2, Module2;
  var init_module2 = __esm({
    "packages/webassemblyjs/src/compiler/compile/module.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_wast_identifier_to_index();
      init_denormalize_type_references();
      init_src15();
      init_src16();
      t2 = (init_src5(), __toCommonJS(src_exports));
      Module2 = function Module3(ir, ast, exports, imports) {
        _classCallCheck5(this, Module3);
        this._ir = ir;
        this._ast = ast;
        this.exports = exports;
        this.imports = imports;
      };
    }
  });

  // packages/webassemblyjs/src/errors.js
  var errors_exports = {};
  __export(errors_exports, {
    CompileError: () => CompileError2,
    LinkError: () => LinkError,
    RuntimeError: () => RuntimeError
  });
  function _typeof8(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof8 = function _typeof18(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof8 = function _typeof18(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof8(obj);
  }
  function _classCallCheck6(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _createSuper2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct2();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf2(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf2(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn2(this, result);
    };
  }
  function _possibleConstructorReturn2(self, call) {
    if (call && (_typeof8(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized2(self);
  }
  function _assertThisInitialized2(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _wrapNativeSuper2(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrapNativeSuper2 = function _wrapNativeSuper4(Class2) {
      if (Class2 === null || !_isNativeFunction2(Class2))
        return Class2;
      if (typeof Class2 !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2))
          return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct2(Class2, arguments, _getPrototypeOf2(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
      return _setPrototypeOf2(Wrapper, Class2);
    };
    return _wrapNativeSuper2(Class);
  }
  function _construct2(Parent, args, Class) {
    if (_isNativeReflectConstruct2()) {
      _construct2 = Reflect.construct;
    } else {
      _construct2 = function _construct4(Parent2, args2, Class2) {
        var a = [null];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2)
          _setPrototypeOf2(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct2.apply(null, arguments);
  }
  function _isNativeReflectConstruct2() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _isNativeFunction2(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf2(o, p);
  }
  function _getPrototypeOf2(o) {
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  var RuntimeError, CompileError2, LinkError;
  var init_errors = __esm({
    "packages/webassemblyjs/src/errors.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      RuntimeError = /* @__PURE__ */ function(_Error) {
        _inherits2(RuntimeError7, _Error);
        var _super = _createSuper2(RuntimeError7);
        function RuntimeError7() {
          _classCallCheck6(this, RuntimeError7);
          return _super.apply(this, arguments);
        }
        return RuntimeError7;
      }(/* @__PURE__ */ _wrapNativeSuper2(Error));
      CompileError2 = /* @__PURE__ */ function(_Error2) {
        _inherits2(CompileError5, _Error2);
        var _super2 = _createSuper2(CompileError5);
        function CompileError5() {
          _classCallCheck6(this, CompileError5);
          return _super2.apply(this, arguments);
        }
        return CompileError5;
      }(/* @__PURE__ */ _wrapNativeSuper2(Error));
      LinkError = /* @__PURE__ */ function(_Error3) {
        _inherits2(LinkError2, _Error3);
        var _super3 = _createSuper2(LinkError2);
        function LinkError2() {
          _classCallCheck6(this, LinkError2);
          return _super3.apply(this, arguments);
        }
        return LinkError2;
      }(/* @__PURE__ */ _wrapNativeSuper2(Error));
    }
  });

  // packages/webassemblyjs/src/interpreter/runtime/values/i32.js
  var i32_exports = {};
  __export(i32_exports, {
    createFalse: () => createFalse,
    createTrue: () => createTrue,
    createValue: () => createValue,
    createValueFromAST: () => createValueFromAST,
    createValueFromArrayBuffer: () => createValueFromArrayBuffer,
    i32: () => i322
  });
  function _classCallCheck7(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties4(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass4(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties4(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties4(Constructor, staticProps);
    return Constructor;
  }
  function createValueFromAST(value) {
    return {
      type,
      value: new i322(value)
    };
  }
  function createValue(value) {
    return {
      type,
      value
    };
  }
  function createValueFromArrayBuffer(buffer, ptr, extend, signed) {
    return {
      type,
      value: i322.fromArrayBuffer(buffer, ptr, extend, signed)
    };
  }
  function createTrue() {
    return new i322(1);
  }
  function createFalse() {
    return new i322(0);
  }
  var import_long4, _require, RuntimeError2, bits, type, toUnsigned, i322;
  var init_i32 = __esm({
    "packages/webassemblyjs/src/interpreter/runtime/values/i32.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      import_long4 = __toESM(require_long());
      _require = (init_errors(), __toCommonJS(errors_exports));
      RuntimeError2 = _require.RuntimeError;
      bits = 32;
      type = "i32";
      toUnsigned = function toUnsigned2(a) {
        return a >>> 0;
      };
      i322 = /* @__PURE__ */ function() {
        function i328(value) {
          _classCallCheck7(this, i328);
          this._value = value | 0;
        }
        _createClass4(i328, [{
          key: "add",
          value: function add(operand) {
            return new i328(this._value + operand._value);
          }
        }, {
          key: "sub",
          value: function sub(operand) {
            return new i328(this._value - operand._value);
          }
        }, {
          key: "mul",
          value: function mul(operand) {
            return new i328(import_long4.default.fromNumber(this._value).mul(import_long4.default.fromNumber(operand._value)).mod(Math.pow(2, bits)).toNumber());
          }
        }, {
          key: "div_s",
          value: function div_s(operand) {
            if (operand._value == 0) {
              throw new RuntimeError2("integer divide by zero");
            }
            if (this._value == -2147483648 && operand._value == -1) {
              throw new RuntimeError2("integer overflow");
            }
            return new i328(this._value / operand._value);
          }
        }, {
          key: "div_u",
          value: function div_u(operand) {
            if (operand._value == 0) {
              throw new RuntimeError2("integer divide by zero");
            }
            return new i328(toUnsigned(this._value) / toUnsigned(operand._value));
          }
        }, {
          key: "rem_s",
          value: function rem_s(operand) {
            if (operand._value == 0) {
              throw new RuntimeError2("integer divide by zero");
            }
            return new i328(this._value % operand._value);
          }
        }, {
          key: "rem_u",
          value: function rem_u(operand) {
            if (operand._value == 0) {
              throw new RuntimeError2("integer divide by zero");
            }
            return new i328(toUnsigned(this._value) % toUnsigned(operand._value));
          }
        }, {
          key: "shl",
          value: function shl(operand) {
            return new i328(this._value << operand._value);
          }
        }, {
          key: "shr_s",
          value: function shr_s(operand) {
            return new i328(this._value >> operand._value);
          }
        }, {
          key: "shr_u",
          value: function shr_u(operand) {
            return new i328(this._value >>> operand._value);
          }
        }, {
          key: "rotl",
          value: function rotl(rotation) {
            return new i328(this._value << rotation._value | this._value >>> bits - rotation._value);
          }
        }, {
          key: "rotr",
          value: function rotr(rotation) {
            return new i328(this._value >>> rotation._value | this._value << bits - rotation._value);
          }
        }, {
          key: "clz",
          value: function clz() {
            if (this._value == 0) {
              return new i328(bits);
            }
            var lead = 0;
            var temp = toUnsigned(this._value);
            while ((temp & 2147483648) == 0) {
              lead++;
              temp = temp << 1 >>> 0;
            }
            return new i328(lead);
          }
        }, {
          key: "ctz",
          value: function ctz() {
            if (this._value == 0) {
              return new i328(bits);
            }
            var lead = 0;
            var temp = toUnsigned(this._value);
            while ((temp & 1) == 0) {
              lead++;
              temp = temp >> 1 >>> 0;
            }
            return new i328(lead);
          }
        }, {
          key: "popcnt",
          value: function popcnt() {
            var temp = toUnsigned(this._value);
            var count = 0;
            while (temp != 0) {
              if (temp & 2147483648) {
                count++;
              }
              temp = temp << 1;
            }
            return new i328(count);
          }
        }, {
          key: "div",
          value: function div() {
            throw new RuntimeError2("Unsupported operation");
          }
        }, {
          key: "and",
          value: function and(operand) {
            return new i328(this._value & operand._value);
          }
        }, {
          key: "or",
          value: function or(operand) {
            return new i328(this._value | operand._value);
          }
        }, {
          key: "xor",
          value: function xor(operand) {
            return new i328(this._value ^ operand._value);
          }
        }, {
          key: "eqz",
          value: function eqz() {
            return new i328(this._value == 0 ? 1 : 0);
          }
        }, {
          key: "eq",
          value: function eq(operand) {
            return new i328(this._value == operand._value ? 1 : 0);
          }
        }, {
          key: "ne",
          value: function ne(operand) {
            return new i328(this._value != operand._value ? 1 : 0);
          }
        }, {
          key: "lt_u",
          value: function lt_u(operand) {
            return new i328(toUnsigned(this._value) < toUnsigned(operand._value) ? 1 : 0);
          }
        }, {
          key: "lt_s",
          value: function lt_s(operand) {
            return new i328(this._value < operand._value ? 1 : 0);
          }
        }, {
          key: "le_u",
          value: function le_u(operand) {
            return new i328(toUnsigned(this._value) <= toUnsigned(operand._value) ? 1 : 0);
          }
        }, {
          key: "le_s",
          value: function le_s(operand) {
            return new i328(this._value <= operand._value ? 1 : 0);
          }
        }, {
          key: "gt_u",
          value: function gt_u(operand) {
            return new i328(toUnsigned(this._value) > toUnsigned(operand._value) ? 1 : 0);
          }
        }, {
          key: "gt_s",
          value: function gt_s(operand) {
            return new i328(this._value > operand._value ? 1 : 0);
          }
        }, {
          key: "ge_u",
          value: function ge_u(operand) {
            return new i328(toUnsigned(this._value) >= toUnsigned(operand._value) ? 1 : 0);
          }
        }, {
          key: "ge_s",
          value: function ge_s(operand) {
            return new i328(this._value >= operand._value ? 1 : 0);
          }
        }, {
          key: "equals",
          value: function equals2(operand) {
            return isNaN(this._value) ? isNaN(operand._value) : this._value == operand._value;
          }
        }, {
          key: "min",
          value: function min(operand) {
            return new i328(Math.min(this._value, operand._value));
          }
        }, {
          key: "max",
          value: function max(operand) {
            return new i328(Math.max(this._value, operand._value));
          }
        }, {
          key: "abs",
          value: function abs() {
            return new i328(Math.abs(this._value));
          }
        }, {
          key: "neg",
          value: function neg() {
            return new i328(-this._value);
          }
        }, {
          key: "copysign",
          value: function copysign(operand) {
            return new i328(Math.sign(this._value) === Math.sign(operand._value) ? this._value : -this._value);
          }
        }, {
          key: "toNumber",
          value: function toNumber() {
            return this._value;
          }
        }, {
          key: "toString",
          value: function toString3() {
            return this._value + "";
          }
        }, {
          key: "isTrue",
          value: function isTrue() {
            return this._value == 1;
          }
        }, {
          key: "toByteArray",
          value: function toByteArray2() {
            var byteArray2 = new Array(4);
            for (var offset = 0, shift = 0; offset < byteArray2.length; offset++, shift += 8) {
              byteArray2[offset] = this._value >>> shift & 255;
            }
            return byteArray2;
          }
        }], [{
          key: "fromArrayBuffer",
          value: function fromArrayBuffer2(buffer, ptr, extend, signed) {
            var slice2 = buffer.slice(ptr, ptr + 4);
            var asInt32 = new Int32Array(slice2)[0];
            asInt32 <<= extend;
            return new i328(signed ? asInt32 >> extend : asInt32 >>> extend);
          }
        }]);
        return i328;
      }();
    }
  });

  // packages/webassemblyjs/src/interpreter/runtime/values/i64.js
  var i64_exports = {};
  __export(i64_exports, {
    createValue: () => createValue2,
    createValueFromAST: () => createValueFromAST2,
    createValueFromArrayBuffer: () => createValueFromArrayBuffer2,
    i64: () => i642
  });
  function _classCallCheck8(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties5(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass5(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties5(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties5(Constructor, staticProps);
    return Constructor;
  }
  function createValueFromAST2(value) {
    if (typeof value.low === "undefined" || typeof value.high === "undefined") {
      throw new Error("i64.createValueFromAST malformed value: " + JSON.stringify(value));
    }
    return {
      type: type2,
      value: new i642(new import_long5.default(value.low, value.high))
    };
  }
  function createValue2(value) {
    return {
      type: type2,
      value
    };
  }
  function createValueFromArrayBuffer2(buffer, ptr, extend, signed) {
    return {
      type: type2,
      value: i642.fromArrayBuffer(buffer, ptr, extend, signed)
    };
  }
  var import_long5, _require2, RuntimeError3, type2, i642;
  var init_i64 = __esm({
    "packages/webassemblyjs/src/interpreter/runtime/values/i64.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      import_long5 = __toESM(require_long());
      init_i32();
      _require2 = (init_errors(), __toCommonJS(errors_exports));
      RuntimeError3 = _require2.RuntimeError;
      type2 = "i64";
      i642 = /* @__PURE__ */ function() {
        function i646(value) {
          _classCallCheck8(this, i646);
          if (!(value instanceof import_long5.default)) {
            throw new Error("value instanceof Long error: unknown");
          }
          this._value = value;
        }
        _createClass5(i646, [{
          key: "add",
          value: function add(operand) {
            return new i646(this._value.add(operand._value));
          }
        }, {
          key: "sub",
          value: function sub(operand) {
            return new i646(this._value.sub(operand._value));
          }
        }, {
          key: "mul",
          value: function mul(operand) {
            return new i646(this._value.mul(operand._value));
          }
        }, {
          key: "div_s",
          value: function div_s(operand) {
            {
              if (operand._value.isZero()) {
                throw new RuntimeError3("integer divide by zero");
              }
            }
            return new i646(this._value.div(operand._value));
          }
        }, {
          key: "div_u",
          value: function div_u(operand) {
            {
              if (operand._value.isZero()) {
                throw new RuntimeError3("integer divide by zero");
              }
            }
            return new i646(this._value.div(operand._value));
          }
        }, {
          key: "div",
          value: function div(operand) {
            return new i646(this._value.div(operand._value));
          }
        }, {
          key: "and",
          value: function and(operand) {
            return new i646(this._value.and(operand._value));
          }
        }, {
          key: "or",
          value: function or(operand) {
            return new i646(this._value.or(operand._value));
          }
        }, {
          key: "xor",
          value: function xor(operand) {
            return new i646(this._value.xor(operand._value));
          }
        }, {
          key: "equals",
          value: function equals2(operand) {
            return this._value.equals(operand._value);
          }
        }, {
          key: "isZero",
          value: function isZero() {
            return this._value.low == 0 && this._value.high == 0;
          }
        }, {
          key: "abs",
          value: function abs() {
            if (this._value.isNegative()) {
              return this._value.mul(-1);
            }
            return this;
          }
        }, {
          key: "copysign",
          value: function copysign() {
            throw new RuntimeError3("Unsupported operation: copysign");
          }
        }, {
          key: "max",
          value: function max(operand) {
            if (this._value.lessThan(operand) === true) {
              return operand;
            } else {
              return this;
            }
          }
        }, {
          key: "min",
          value: function min(operand) {
            if (this._value.lessThan(operand) === true) {
              return this;
            } else {
              return operand;
            }
          }
        }, {
          key: "neg",
          value: function neg() {
            return this._value.neg();
          }
        }, {
          key: "lt_s",
          value: function lt_s(operand) {
            return this._value.toSigned().lt(operand._value.toSigned()) ? createTrue() : createFalse();
          }
        }, {
          key: "lt_u",
          value: function lt_u(operand) {
            return this._value.toUnsigned().lt(operand._value.toUnsigned()) ? createTrue() : createFalse();
          }
        }, {
          key: "le_s",
          value: function le_s(operand) {
            return this._value.toSigned().lte(operand._value.toSigned()) ? createTrue() : createFalse();
          }
        }, {
          key: "le_u",
          value: function le_u(operand) {
            return this._value.toUnsigned().lte(operand._value.toUnsigned()) ? createTrue() : createFalse();
          }
        }, {
          key: "gt_s",
          value: function gt_s(operand) {
            return this._value.toSigned().gt(operand._value.toSigned()) ? createTrue() : createFalse();
          }
        }, {
          key: "gt_u",
          value: function gt_u(operand) {
            return this._value.toUnsigned().gt(operand._value.toUnsigned()) ? createTrue() : createFalse();
          }
        }, {
          key: "ge_s",
          value: function ge_s(operand) {
            return this._value.toSigned().gte(operand._value.toSigned()) ? createTrue() : createFalse();
          }
        }, {
          key: "ge_u",
          value: function ge_u(operand) {
            return this._value.toUnsigned().gte(operand._value.toUnsigned()) ? createTrue() : createFalse();
          }
        }, {
          key: "rem_s",
          value: function rem_s(operand) {
            {
              if (operand._value.isZero()) {
                throw new RuntimeError3("integer divide by zero");
              }
            }
            return new i646(this._value.rem(operand._value));
          }
        }, {
          key: "rem_u",
          value: function rem_u(operand) {
            {
              if (operand._value.isZero()) {
                throw new RuntimeError3("integer divide by zero");
              }
            }
            return new i646(this._value.rem(operand._value));
          }
        }, {
          key: "shl",
          value: function shl(operand) {
            return new i646(this._value.shiftLeft(operand._value));
          }
        }, {
          key: "shr_s",
          value: function shr_s(operand) {
            return new i646(this._value.shiftRight(operand._value));
          }
        }, {
          key: "shr_u",
          value: function shr_u(operand) {
            return new i646(this._value.shiftRight(operand._value));
          }
        }, {
          key: "rotl",
          value: function rotl(rotation) {
            return new i646(this._value.rotateLeft(rotation._value));
          }
        }, {
          key: "rotr",
          value: function rotr(rotation) {
            return new i646(this._value.rotateRight(rotation._value));
          }
        }, {
          key: "clz",
          value: function clz() {
            var lead = 0;
            var str = this._value.toUnsigned().toString(2);
            for (var i = 0, len = str.length; i < len; i++) {
              if (str[i] !== "0") {
                break;
              }
              lead++;
            }
            return new i646(new import_long5.default(lead));
          }
        }, {
          key: "ctz",
          value: function ctz() {
            var count = 0;
            var str = this._value.toUnsigned().toString(2);
            for (var i = str.length; i <= 0; i--) {
              if (str[i] !== "0") {
                break;
              }
              count++;
            }
            return new i646(new import_long5.default(count));
          }
        }, {
          key: "popcnt",
          value: function popcnt() {
            var count = 0;
            var str = this._value.toUnsigned().toString(2);
            for (var i = str.length; i <= 0; i--) {
              if (str[i] !== "0") {
                count++;
              }
            }
            return new i646(new import_long5.default(count));
          }
        }, {
          key: "eqz",
          value: function eqz() {
            return this._value.isZero() ? createTrue() : createFalse();
          }
        }, {
          key: "eq",
          value: function eq(operand) {
            return this.equals(operand) ? createTrue() : createFalse();
          }
        }, {
          key: "ne",
          value: function ne(operand) {
            return new i322(this.equals(operand) ? 0 : 1);
          }
        }, {
          key: "toString",
          value: function toString3() {
            return this._value.toString();
          }
        }, {
          key: "toNumber",
          value: function toNumber() {
            return this._value.toNumber();
          }
        }, {
          key: "isTrue",
          value: function isTrue() {
            return this.toNumber() == 1;
          }
        }, {
          key: "toByteArray",
          value: function toByteArray2() {
            var byteArray2 = new Array(8);
            for (var offset = 0, shift = 0; offset < byteArray2.length; offset++, shift += 8) {
              byteArray2[offset] = this._value.shru(shift).and(255).toNumber();
            }
            return byteArray2;
          }
        }], [{
          key: "fromArrayBuffer",
          value: function fromArrayBuffer2(buffer, ptr, extend, signed) {
            var slice2 = buffer.slice(ptr, ptr + 8);
            var value = new Int32Array(slice2);
            var longVal = new import_long5.default(value[0], value[1]);
            longVal = longVal.shiftLeft(extend);
            return new i646(signed ? longVal.shiftRight(extend) : longVal.shiftRightUnsigned(extend));
          }
        }]);
        return i646;
      }();
    }
  });

  // packages/webassemblyjs/src/interpreter/runtime/values/number.js
  function _classCallCheck9(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties6(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass6(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties6(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties6(Constructor, staticProps);
    return Constructor;
  }
  function typedArrayToArray(typedArray) {
    var byteArray2 = new Array(typedArray.byteLength);
    for (var i = 0; i < byteArray2.length; i++) {
      byteArray2[i] = typedArray[i];
    }
    return byteArray2;
  }
  var Float;
  var init_number = __esm({
    "packages/webassemblyjs/src/interpreter/runtime/values/number.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_errors();
      Float = /* @__PURE__ */ function() {
        function Float2(value) {
          _classCallCheck9(this, Float2);
          this._value = value;
        }
        _createClass6(Float2, [{
          key: "add",
          value: function add(operand) {
            return new this.constructor(this._value + operand._value);
          }
        }, {
          key: "sub",
          value: function sub(operand) {
            return new this.constructor(this._value - operand._value);
          }
        }, {
          key: "mul",
          value: function mul(operand) {
            return new this.constructor(this._value * operand._value);
          }
        }, {
          key: "div_s",
          value: function div_s(operand) {
            return new this.constructor(this._value / operand._value);
          }
        }, {
          key: "div_u",
          value: function div_u(operand) {
            return new this.constructor(this._value / operand._value);
          }
        }, {
          key: "div",
          value: function div(operand) {
            return new this.constructor(this._value / operand._value);
          }
        }, {
          key: "and",
          value: function and(operand) {
            return new this.constructor(this._value & operand._value);
          }
        }, {
          key: "or",
          value: function or(operand) {
            return new this.constructor(this._value | operand._value);
          }
        }, {
          key: "xor",
          value: function xor(operand) {
            return new this.constructor(this._value ^ operand._value);
          }
        }, {
          key: "isZero",
          value: function isZero() {
            return this._value == 0;
          }
        }, {
          key: "equals",
          value: function equals2(operand) {
            return isNaN(this._value) ? isNaN(operand._value) : this._value == operand._value;
          }
        }, {
          key: "min",
          value: function min(operand) {
            return new this.constructor(Math.min(this._value, operand._value));
          }
        }, {
          key: "max",
          value: function max(operand) {
            return new this.constructor(Math.max(this._value, operand._value));
          }
        }, {
          key: "abs",
          value: function abs() {
            return new this.constructor(Math.abs(this._value));
          }
        }, {
          key: "neg",
          value: function neg() {
            return new this.constructor(-this._value);
          }
        }, {
          key: "copysign",
          value: function copysign(operand) {
            return new this.constructor(Math.sign(this._value) === Math.sign(operand._value) ? this._value : -this._value);
          }
        }, {
          key: "reinterpret",
          value: function reinterpret() {
            throw new RuntimeError("unsupported operation");
          }
        }, {
          key: "eq",
          value: function eq(_operand) {
            throw new RuntimeError("unsupported operation");
          }
        }, {
          key: "toByteArray",
          value: function toByteArray2() {
            throw new RuntimeError("unsupported operation");
          }
        }, {
          key: "toNumber",
          value: function toNumber() {
            return this._value;
          }
        }, {
          key: "isTrue",
          value: function isTrue() {
            return this._value == 1;
          }
        }, {
          key: "toString",
          value: function toString3() {
            return this.toNumber().toString();
          }
        }]);
        return Float2;
      }();
    }
  });

  // packages/webassemblyjs/src/interpreter/runtime/values/f32.js
  var f32_exports = {};
  __export(f32_exports, {
    createInfFromAST: () => createInfFromAST,
    createNanFromAST: () => createNanFromAST,
    createValue: () => createValue3,
    createValueFromAST: () => createValueFromAST3,
    createValueFromArrayBuffer: () => createValueFromArrayBuffer3,
    f32: () => f322,
    f32inf: () => f32inf,
    f32nan: () => f32nan
  });
  function _typeof9(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof9 = function _typeof18(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof9 = function _typeof18(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof9(obj);
  }
  function _classCallCheck10(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties7(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass7(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties7(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties7(Constructor, staticProps);
    return Constructor;
  }
  function _inherits3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf3(subClass, superClass);
  }
  function _setPrototypeOf3(o, p) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf3(o, p);
  }
  function _createSuper3(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct3();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf3(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf3(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn3(this, result);
    };
  }
  function _possibleConstructorReturn3(self, call) {
    if (call && (_typeof9(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized3(self);
  }
  function _assertThisInitialized3(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct3() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf3(o) {
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf3(o);
  }
  function createInfFromAST(sign2) {
    return {
      type: type3,
      value: new f32inf(sign2)
    };
  }
  function createNanFromAST(payload) {
    return {
      type: type3,
      value: new f32nan(payload)
    };
  }
  function createValueFromAST3(value) {
    return {
      type: type3,
      value: new f322(value)
    };
  }
  function createValue3(value) {
    return {
      type: type3,
      value
    };
  }
  function createValueFromArrayBuffer3(buffer, ptr) {
    return {
      type: type3,
      value: f322.fromArrayBuffer(buffer, ptr)
    };
  }
  var type3, one, zero, f322, f32nan, f32inf;
  var init_f32 = __esm({
    "packages/webassemblyjs/src/interpreter/runtime/values/f32.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_number();
      init_i32();
      type3 = "f32";
      one = new i322(1);
      zero = new i322(0);
      f322 = /* @__PURE__ */ function(_Float) {
        _inherits3(f326, _Float);
        var _super = _createSuper3(f326);
        function f326() {
          _classCallCheck10(this, f326);
          return _super.apply(this, arguments);
        }
        _createClass7(f326, [{
          key: "reinterpret",
          value: function reinterpret() {
            var floatArray = new Float32Array(1);
            floatArray[0] = this._value;
            var intArray = new Int32Array(floatArray.buffer);
            return new i322(intArray[0]);
          }
        }, {
          key: "add",
          value: function add(operand) {
            return operand instanceof f32nan ? (
              // $FlowIgnore
              operand.add(this)
            ) : (
              // $FlowIgnore
              Float.prototype.add.call(this, operand)
            );
          }
        }, {
          key: "sub",
          value: function sub(operand) {
            return operand instanceof f32nan ? (
              // $FlowIgnore
              operand.sub(this)
            ) : (
              // $FlowIgnore
              Float.prototype.sub.call(this, operand)
            );
          }
        }, {
          key: "mul",
          value: function mul(operand) {
            return operand instanceof f32nan ? (
              // $FlowIgnore
              operand.mul(this)
            ) : (
              // $FlowIgnore
              Float.prototype.mul.call(this, operand)
            );
          }
        }, {
          key: "div",
          value: function div(operand) {
            return operand instanceof f32nan ? (
              // $FlowIgnore
              operand.div(this)
            ) : (
              // $FlowIgnore
              Float.prototype.div.call(this, operand)
            );
          }
        }, {
          key: "toByteArray",
          value: function toByteArray2() {
            var floatArray = new Float32Array(1);
            floatArray[0] = this._value;
            return typedArrayToArray(new Int8Array(floatArray.buffer));
          }
        }, {
          key: "eq",
          value: function eq(operand) {
            if (operand instanceof f32nan) {
              return operand.eq();
            }
            if (this._value === operand._value) {
              return one;
            } else {
              return zero;
            }
          }
        }, {
          key: "gt",
          value: function gt(operand) {
            var z1 = this;
            var z2 = operand;
            if (isNaN(z1._value) === true || isNaN(z2._value) === true) {
              return zero;
            }
            if (z1.equals(z2) === true) {
              return zero;
            }
            if (Math.sign(z1._value) === 1 && z1 instanceof f32inf) {
              return one;
            }
            if (Math.sign(z1._value) === -1 && z1 instanceof f32inf) {
              return one;
            }
            if (Math.sign(z2._value) === 1 && z2 instanceof f32inf) {
              return zero;
            }
            if (Math.sign(z2._value) === -1 && z2 instanceof f32inf) {
              return one;
            }
            if (z1._value === 0 && z2._value === 0) {
              return zero;
            }
            if (z1._value > z2._value) {
              return one;
            }
            return zero;
          }
        }], [{
          key: "fromArrayBuffer",
          value: function fromArrayBuffer2(buffer, ptr) {
            var slice2 = buffer.slice(ptr, ptr + 4);
            var value = new Float32Array(slice2);
            return new f326(value[0]);
          }
        }]);
        return f326;
      }(Float);
      f32nan = /* @__PURE__ */ function(_f) {
        _inherits3(f32nan2, _f);
        var _super2 = _createSuper3(f32nan2);
        function f32nan2() {
          _classCallCheck10(this, f32nan2);
          return _super2.apply(this, arguments);
        }
        _createClass7(f32nan2, [{
          key: "reinterpret",
          value: (
            /**
             * Interprets the bit representation for this nan as an integer
             * https://webassembly.github.io/spec/core/syntax/values.html#floating-point
             *
             * A 32 bit nan looks like this
             *
             * ------------------------------
             * |s|1|1|1|1|1|1|1|1|m1|...|m23|
             * ------------------------------
             *
             * The exponent is all 1's and the mantissa [m1,...m23] is non-zero ().
             *
             * We store sign and mantissa both in the _value field,
             * which is reflected by the computation below.
             */
            function reinterpret() {
              var result = 0;
              if (this._value <= 0) {
                result = result | 2147483648;
              }
              result = result | 255 << 23;
              var mantissa = this._value <= 0 ? -this._value : this._value;
              result = result | mantissa;
              return new i322(result);
            }
          )
        }, {
          key: "add",
          value: function add() {
            return this;
          }
        }, {
          key: "sub",
          value: function sub() {
            return this;
          }
        }, {
          key: "mul",
          value: function mul() {
            return this;
          }
        }, {
          key: "div",
          value: function div() {
            return this;
          }
        }, {
          key: "eq",
          value: function eq() {
            return new i322(0);
          }
        }]);
        return f32nan2;
      }(f322);
      f32inf = /* @__PURE__ */ function(_f2) {
        _inherits3(f32inf2, _f2);
        var _super3 = _createSuper3(f32inf2);
        function f32inf2() {
          _classCallCheck10(this, f32inf2);
          return _super3.apply(this, arguments);
        }
        _createClass7(f32inf2, [{
          key: "reinterpret",
          value: function reinterpret() {
            var result = 255 << 23;
            if (this._value < 0) {
              result = result | 2147483648;
            }
            return new i322(result);
          }
        }]);
        return f32inf2;
      }(f322);
    }
  });

  // packages/webassemblyjs/src/interpreter/runtime/values/f64.js
  var f64_exports = {};
  __export(f64_exports, {
    createInfFromAST: () => createInfFromAST2,
    createNanFromAST: () => createNanFromAST2,
    createValue: () => createValue4,
    createValueFromAST: () => createValueFromAST4,
    createValueFromArrayBuffer: () => createValueFromArrayBuffer4,
    f64: () => f642,
    f64inf: () => f64inf,
    f64nan: () => f64nan
  });
  function _typeof10(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof10 = function _typeof18(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof10 = function _typeof18(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof10(obj);
  }
  function _classCallCheck11(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties8(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass8(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties8(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties8(Constructor, staticProps);
    return Constructor;
  }
  function _inherits4(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf4(subClass, superClass);
  }
  function _setPrototypeOf4(o, p) {
    _setPrototypeOf4 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf4(o, p);
  }
  function _createSuper4(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct4();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf4(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf4(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn4(this, result);
    };
  }
  function _possibleConstructorReturn4(self, call) {
    if (call && (_typeof10(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized4(self);
  }
  function _assertThisInitialized4(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct4() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf4(o) {
    _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf4(o);
  }
  function createInfFromAST2(sign2) {
    return {
      type: type4,
      value: new f64inf(sign2)
    };
  }
  function createNanFromAST2(payload) {
    return {
      type: type4,
      value: new f64nan(payload)
    };
  }
  function createValueFromAST4(value) {
    return {
      type: type4,
      value: new f642(value)
    };
  }
  function createValue4(value) {
    return {
      type: type4,
      value
    };
  }
  function createValueFromArrayBuffer4(buffer, ptr) {
    return {
      type: type4,
      value: f642.fromArrayBuffer(buffer, ptr)
    };
  }
  var import_long6, type4, f642, f64inf, f64nan;
  var init_f64 = __esm({
    "packages/webassemblyjs/src/interpreter/runtime/values/f64.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      import_long6 = __toESM(require_long());
      init_number();
      init_i64();
      type4 = "f64";
      f642 = /* @__PURE__ */ function(_Float) {
        _inherits4(f646, _Float);
        var _super = _createSuper4(f646);
        function f646() {
          _classCallCheck11(this, f646);
          return _super.apply(this, arguments);
        }
        _createClass8(f646, [{
          key: "reinterpret",
          value: function reinterpret() {
            var floatArray = new Float64Array(1);
            floatArray[0] = this._value;
            var lowIntArray = new Int32Array(floatArray.buffer.slice(0, 4));
            var highIntArray = new Int32Array(floatArray.buffer.slice(4, 8));
            return new i642(import_long6.default.fromBits(lowIntArray[0], highIntArray[0]));
          }
        }, {
          key: "toByteArray",
          value: function toByteArray2() {
            var floatArray = new Float64Array(1);
            floatArray[0] = this._value;
            return typedArrayToArray(new Int8Array(floatArray.buffer));
          }
        }], [{
          key: "fromArrayBuffer",
          value: function fromArrayBuffer2(buffer, ptr) {
            var slice2 = buffer.slice(ptr, ptr + 8);
            var value = new Float64Array(slice2);
            return new f646(value[0]);
          }
        }]);
        return f646;
      }(Float);
      f64inf = /* @__PURE__ */ function(_f) {
        _inherits4(f64inf2, _f);
        var _super2 = _createSuper4(f64inf2);
        function f64inf2() {
          _classCallCheck11(this, f64inf2);
          return _super2.apply(this, arguments);
        }
        _createClass8(f64inf2, [{
          key: "reinterpret",
          value: function reinterpret() {
            var upper = 2047 << 20;
            if (this._value < 0) {
              upper = upper | 2147483648;
            }
            return new i642(import_long6.default.fromBits(0, upper).toSigned());
          }
        }]);
        return f64inf2;
      }(f642);
      f64nan = /* @__PURE__ */ function(_f2) {
        _inherits4(f64nan2, _f2);
        var _super3 = _createSuper4(f64nan2);
        function f64nan2() {
          _classCallCheck11(this, f64nan2);
          return _super3.apply(this, arguments);
        }
        _createClass8(f64nan2, [{
          key: "reinterpret",
          value: function reinterpret() {
            var lower = 0;
            var upper = 0;
            if (this._value <= 0) {
              upper = upper | 2147483648;
            }
            upper = upper | 2047 << 20;
            var mantissa = this._value <= 0 ? -this._value : this._value;
            lower = lower | mantissa % Math.pow(2, 32);
            upper = upper | Math.floor(mantissa / Math.pow(2, 32));
            return new i642(import_long6.default.fromBits(lower, upper));
          }
        }]);
        return f64nan2;
      }(f642);
    }
  });

  // packages/webassemblyjs/src/interpreter/runtime/castIntoStackLocalOfType.js
  var castIntoStackLocalOfType_exports = {};
  __export(castIntoStackLocalOfType_exports, {
    castIntoStackLocalOfType: () => castIntoStackLocalOfType
  });
  function castIntoStackLocalOfType(type6, v) {
    var nan = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var inf = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    var castFn = {
      i32: i323.createValueFromAST,
      i64: i643.createValueFromAST,
      f32: f323.createValueFromAST,
      f64: f643.createValueFromAST
    };
    if (nan === true) {
      castFn.f32 = f323.createNanFromAST;
      castFn.f64 = f643.createNanFromAST;
    }
    if (inf === true) {
      castFn.f32 = f323.createInfFromAST;
      castFn.f64 = f643.createInfFromAST;
    }
    if (typeof castFn[type6] === "undefined") {
      throw new RuntimeError4("Cannot cast: unsupported type " + JSON.stringify(type6));
    }
    return castFn[type6](v);
  }
  var _require3, RuntimeError4, i323, i643, f323, f643;
  var init_castIntoStackLocalOfType = __esm({
    "packages/webassemblyjs/src/interpreter/runtime/castIntoStackLocalOfType.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      _require3 = (init_errors(), __toCommonJS(errors_exports));
      RuntimeError4 = _require3.RuntimeError;
      i323 = (init_i32(), __toCommonJS(i32_exports));
      i643 = (init_i64(), __toCommonJS(i64_exports));
      f323 = (init_f32(), __toCommonJS(f32_exports));
      f643 = (init_f64(), __toCommonJS(f64_exports));
    }
  });

  // packages/webassemblyjs/src/interpreter/runtime/values/memory.js
  var memory_exports = {};
  __export(memory_exports, {
    Memory: () => Memory
  });
  function _typeof11(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof11 = function _typeof18(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof11 = function _typeof18(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof11(obj);
  }
  function _classCallCheck12(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties9(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass9(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties9(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties9(Constructor, staticProps);
    return Constructor;
  }
  var _require4, RuntimeError5, WEBASSEMBLY_PAGE_SIZE, Memory;
  var init_memory = __esm({
    "packages/webassemblyjs/src/interpreter/runtime/values/memory.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      _require4 = (init_errors(), __toCommonJS(errors_exports));
      RuntimeError5 = _require4.RuntimeError;
      WEBASSEMBLY_PAGE_SIZE = 64 * 1024;
      Memory = /* @__PURE__ */ function() {
        function Memory2(descr) {
          _classCallCheck12(this, Memory2);
          if (_typeof11(descr) !== "object") {
            throw new TypeError("MemoryDescriptor must be an object");
          }
          if (typeof descr.maximum === "number" && descr.maximum < descr.initial) {
            throw new RangeError("Initial memory can not be higher than the maximum");
          }
          if (descr.initial > 65536) {
            throw new RuntimeError5("memory size must be at most 65536 pages (4GiB)");
          }
          if (typeof descr.maximum === "number") {
            this._maximumBytes = descr.maximum * WEBASSEMBLY_PAGE_SIZE;
          }
          this._initialBytes = descr.initial * WEBASSEMBLY_PAGE_SIZE;
          this._allocateInitial();
        }
        _createClass9(Memory2, [{
          key: "_allocateInitial",
          value: function _allocateInitial() {
            this.buffer = new ArrayBuffer(this._initialBytes);
          }
        }]);
        return Memory2;
      }();
    }
  });

  // packages/webassemblyjs/src/interpreter/kernel/instruction/binop.js
  var binop_exports = {};
  __export(binop_exports, {
    binopf32: () => binopf32,
    binopf64: () => binopf64,
    binopi32: () => binopi32,
    binopi64: () => binopi64
  });
  function binop(_ref, _ref2, sign2, createValue6) {
    var value1 = _ref.value;
    var value2 = _ref2.value;
    switch (sign2) {
      case "add":
        return createValue6(value1.add(value2));
      case "sub":
        return createValue6(value1.sub(value2));
      case "mul":
        return createValue6(value1.mul(value2));
      case "div_s":
        return createValue6(value1.div_s(value2));
      case "div_u":
        return createValue6(value1.div_u(value2));
      case "rem_s":
        return createValue6(value1.rem_s(value2));
      case "rem_u":
        return createValue6(value1.rem_u(value2));
      case "shl":
        return createValue6(value1.shl(value2));
      case "shr_s":
        return createValue6(value1.shr_s(value2));
      case "shr_u":
        return createValue6(value1.shr_u(value2));
      case "rotl":
        return createValue6(value1.rotl(value2));
      case "rotr":
        return createValue6(value1.rotr(value2));
      case "div":
        return createValue6(value1.div(value2));
      case "and":
        return createValue6(value1.and(value2));
      case "or":
        return createValue6(value1.or(value2));
      case "xor":
        return createValue6(value1.xor(value2));
      case "min":
        return createValue6(value1.min(value2));
      case "max":
        return createValue6(value1.max(value2));
      case "copysign":
        return createValue6(value1.copysign(value2));
    }
    throw new Error("Unsupported binop: " + sign2);
  }
  function binopi32(value1, value2, sign2) {
    return binop(value1, value2, sign2, i324.createValue);
  }
  function binopi64(value1, value2, sign2) {
    return binop(value1, value2, sign2, i644.createValue);
  }
  function binopf32(value1, value2, sign2) {
    return binop(value1, value2, sign2, f324.createValue);
  }
  function binopf64(value1, value2, sign2) {
    return binop(value1, value2, sign2, f644.createValue);
  }
  var i324, i644, f324, f644;
  var init_binop = __esm({
    "packages/webassemblyjs/src/interpreter/kernel/instruction/binop.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      i324 = (init_i32(), __toCommonJS(i32_exports));
      i644 = (init_i64(), __toCommonJS(i64_exports));
      f324 = (init_f32(), __toCommonJS(f32_exports));
      f644 = (init_f64(), __toCommonJS(f64_exports));
    }
  });

  // packages/webassemblyjs/src/interpreter/kernel/instruction/unop.js
  var unop_exports = {};
  __export(unop_exports, {
    unopf32: () => unopf32,
    unopf64: () => unopf64,
    unopi32: () => unopi32,
    unopi64: () => unopi64
  });
  function unop(_ref, operation, createValue6) {
    var value = _ref.value;
    switch (operation) {
      case "abs":
        return createValue6(value.abs());
      case "neg":
        return createValue6(value.neg());
      case "clz":
        return createValue6(value.clz());
      case "ctz":
        return createValue6(value.ctz());
      case "popcnt":
        return createValue6(value.popcnt());
      case "eqz":
        return createValue(value.eqz());
      case "reinterpret/f32":
        return createValue(value.reinterpret());
      case "reinterpret/f64":
        return createValue2(value.reinterpret());
    }
    throw new Error("Unsupported unop: " + operation);
  }
  function unopi32(c, operation) {
    return unop(c, operation, createValue);
  }
  function unopi64(c, operation) {
    return unop(c, operation, createValue2);
  }
  function unopf32(c, operation) {
    return unop(c, operation, createValue3);
  }
  function unopf64(c, operation) {
    return unop(c, operation, createValue4);
  }
  var init_unop = __esm({
    "packages/webassemblyjs/src/interpreter/kernel/instruction/unop.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_i32();
      init_i64();
      init_f32();
      init_f64();
    }
  });

  // packages/webassemblyjs/src/interpreter/runtime/values/label.js
  var label_exports = {};
  __export(label_exports, {
    createValue: () => createValue5
  });
  function createValue5(value) {
    return {
      type: type5,
      value
    };
  }
  var type5;
  var init_label = __esm({
    "packages/webassemblyjs/src/interpreter/runtime/values/label.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      type5 = "label";
    }
  });

  // packages/webassemblyjs/src/interpreter/kernel/signals.js
  var signals_exports = {};
  __export(signals_exports, {
    ExecutionHasBeenTrapped: () => ExecutionHasBeenTrapped,
    createTrap: () => createTrap
  });
  function _typeof12(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof12 = function _typeof18(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof12 = function _typeof18(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof12(obj);
  }
  function _classCallCheck13(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _inherits5(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf5(subClass, superClass);
  }
  function _createSuper5(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct5();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf5(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf5(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn5(this, result);
    };
  }
  function _possibleConstructorReturn5(self, call) {
    if (call && (_typeof12(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized5(self);
  }
  function _assertThisInitialized5(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _wrapNativeSuper3(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrapNativeSuper3 = function _wrapNativeSuper4(Class2) {
      if (Class2 === null || !_isNativeFunction3(Class2))
        return Class2;
      if (typeof Class2 !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2))
          return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct3(Class2, arguments, _getPrototypeOf5(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
      return _setPrototypeOf5(Wrapper, Class2);
    };
    return _wrapNativeSuper3(Class);
  }
  function _construct3(Parent, args, Class) {
    if (_isNativeReflectConstruct5()) {
      _construct3 = Reflect.construct;
    } else {
      _construct3 = function _construct4(Parent2, args2, Class2) {
        var a = [null];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2)
          _setPrototypeOf5(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct3.apply(null, arguments);
  }
  function _isNativeReflectConstruct5() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _isNativeFunction3(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _setPrototypeOf5(o, p) {
    _setPrototypeOf5 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf5(o, p);
  }
  function _getPrototypeOf5(o) {
    _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf5(o);
  }
  function createTrap() {
    var reason = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Execution has been trapped";
    return new ExecutionHasBeenTrapped(reason);
  }
  var ExecutionHasBeenTrapped;
  var init_signals = __esm({
    "packages/webassemblyjs/src/interpreter/kernel/signals.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      ExecutionHasBeenTrapped = /* @__PURE__ */ function(_Error) {
        _inherits5(ExecutionHasBeenTrapped3, _Error);
        var _super = _createSuper5(ExecutionHasBeenTrapped3);
        function ExecutionHasBeenTrapped3() {
          _classCallCheck13(this, ExecutionHasBeenTrapped3);
          return _super.apply(this, arguments);
        }
        return ExecutionHasBeenTrapped3;
      }(/* @__PURE__ */ _wrapNativeSuper3(Error));
    }
  });

  // packages/webassemblyjs/src/interpreter/kernel/instruction/comparison.js
  var comparison_exports = {};
  __export(comparison_exports, {
    compare: () => compare3
  });
  function compare3(_ref, _ref2, op) {
    var value1 = _ref.value;
    var value2 = _ref2.value;
    switch (op) {
      case "eq":
        return i325.createValue(value1.eq(value2));
      case "ne":
        return i325.createValue(value1.ne(value2));
      case "lt_s":
        return i325.createValue(value1.lt_s(value2));
      case "lt_u":
        return i325.createValue(value1.lt_u(value2));
      case "le_s":
        return i325.createValue(value1.le_s(value2));
      case "le_u":
        return i325.createValue(value1.le_u(value2));
      case "gt":
        return i325.createValue(value1.gt(value2));
      case "gt_s":
        return i325.createValue(value1.gt_s(value2));
      case "gt_u":
        return i325.createValue(value1.gt_u(value2));
      case "ge_s":
        return i325.createValue(value1.ge_s(value2));
      case "ge_u":
        return i325.createValue(value1.ge_u(value2));
    }
    throw new Error("Unsupported binop: " + op);
  }
  var i325;
  var init_comparison = __esm({
    "packages/webassemblyjs/src/interpreter/kernel/instruction/comparison.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      i325 = (init_i32(), __toCommonJS(i32_exports));
    }
  });

  // packages/webassemblyjs/src/interpreter/kernel/stackframe.js
  var stackframe_exports = {};
  __export(stackframe_exports, {
    createChildStackFrame: () => createChildStackFrame,
    createStackFrame: () => createStackFrame
  });
  function createStackFrame(locals, originatingModule, allocator) {
    return {
      locals,
      globals: [],
      /**
       * Labels are named block of code.
       * We maintain a map to access the block for a given identifier.
       *
       * https://webassembly.github.io/spec/core/exec/runtime.html#labels
       */
      labels: [],
      /**
       * Local applicatif Stack for the current stackframe.
       *
       * https://webassembly.github.io/spec/core/exec/runtime.html#stack
       */
      values: [],
      /**
       * We keep a reference to its originating module.
       *
       * When we need to lookup a function by addr for example.
       */
      originatingModule,
      /**
       * For shared memory operations
       */
      allocator,
      /**
       * The callee address
       */
      returnAddress: -1
    };
  }
  function createChildStackFrame(parent, pc) {
    var locals = parent.locals, originatingModule = parent.originatingModule, allocator = parent.allocator, trace = parent.trace;
    var frame = createStackFrame(locals, originatingModule, allocator);
    frame.trace = trace;
    frame.returnAddress = pc;
    return frame;
  }
  var init_stackframe = __esm({
    "packages/webassemblyjs/src/interpreter/kernel/stackframe.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
    }
  });

  // packages/webassemblyjs/src/interpreter/kernel/exec.js
  var exec_exports = {};
  __export(exec_exports, {
    executeStackFrame: () => executeStackFrame
  });
  function _slicedToArray4(arr, i) {
    return _arrayWithHoles5(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray11(arr, i) || _nonIterableRest5();
  }
  function _nonIterableRest5() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray11(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray11(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray11(o, minLen);
  }
  function _arrayLikeToArray11(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit4(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles5(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _typeof13(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof13 = function _typeof18(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof13 = function _typeof18(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof13(obj);
  }
  function executeStackFrame(_ref, offset, firstFrame) {
    var program2 = _ref.program;
    if (!(_typeof13(program2) === "object")) {
      throw new RuntimeError('typeof program === "object" error: unknown');
    }
    var callStack = [firstFrame];
    var framepointer = 0;
    function getLocalByIndex(frame2, index2) {
      var local = frame2.locals[index2];
      if (typeof local === "undefined") {
        throw newRuntimeError("Assertion error: no local value at index " + index2);
      }
      frame2.values.push(local);
    }
    function setLocalByIndex(frame2, index2, value) {
      if (!(typeof index2 === "number")) {
        throw new RuntimeError('typeof index === "number" error: unknown');
      }
      frame2.locals[index2] = value;
    }
    function pushResult(frame2, res2) {
      if (typeof res2 === "undefined") {
        return;
      }
      frame2.values.push(res2);
    }
    function popArrayOfValTypes(frame2, types2) {
      if (frame2.values.length < types2.length) {
        throw new RuntimeError("Assertion error: expected " + JSON.stringify(types2.length) + " on the stack, found " + frame2.values.length);
      }
      return types2.map(function(type6) {
        return pop1OfType(frame2, type6);
      });
    }
    function valueTypeEq(l, r) {
      if (l === "u32") {
        l = "i32";
      }
      if (l === "u64") {
        l = "i64";
      }
      if (r === "u32") {
        r = "i32";
      }
      if (r === "u64") {
        r = "i64";
      }
      return l === r;
    }
    function pop1OfType(frame2, type6) {
      if (frame2.values.length < 1) {
        throw new RuntimeError("Assertion error: expected " + JSON.stringify(1) + " on the stack, found " + frame2.values.length);
      }
      var v = frame2.values.pop();
      if (typeof type6 === "string" && valueTypeEq(v.type, type6) === false) {
        throw newRuntimeError("Internal failure: expected value of type " + type6 + " on top of the stack, type given: " + v.type);
      }
      return v;
    }
    function pop1(frame2) {
      if (frame2.values.length < 1) {
        throw new RuntimeError("Assertion error: expected " + JSON.stringify(1) + " on the stack, found " + frame2.values.length);
      }
      return frame2.values.pop();
    }
    function pop2(frame2, type1, type22) {
      if (frame2.values.length < 2) {
        throw new RuntimeError("Assertion error: expected " + JSON.stringify(2) + " on the stack, found " + frame2.values.length);
      }
      var c22 = frame2.values.pop();
      var c12 = frame2.values.pop();
      if (valueTypeEq(c22.type, type22) === false) {
        throw newRuntimeError("Internal failure: expected c2 value of type " + type22 + " on top of the stack, given type: " + c22.type);
      }
      if (valueTypeEq(c12.type, type1) === false) {
        throw newRuntimeError("Internal failure: expected c1 value of type " + type1 + " on top of the stack, given type: " + c12.type);
      }
      return [c12, c22];
    }
    function getMemoryOffset(frame2, instruction3) {
      if (instruction3.namedArgs && instruction3.namedArgs.offset) {
        var _offset = instruction3.namedArgs.offset.value;
        if (_offset < 0) {
          throw newRuntimeError("offset must be positive");
        }
        if (_offset > 4294967295) {
          throw newRuntimeError("offset must be less than or equal to 0xffffffff");
        }
        return _offset;
      } else {
        return 0;
      }
    }
    function getMemory(frame2) {
      if (frame2.originatingModule.memaddrs.length !== 1) {
        throw newRuntimeError("unknown memory");
      }
      var memAddr = frame2.originatingModule.memaddrs[0];
      return frame2.allocator.get(memAddr);
    }
    function newRuntimeError(msg) {
      return new RuntimeError(msg);
    }
    function getActiveStackFrame() {
      if (!(framepointer > -1)) {
        throw new RuntimeError("framepointer > -1 error: call stack underflow");
      }
      var frame2 = callStack[framepointer];
      if (!(frame2 !== void 0)) {
        throw new RuntimeError("frame !== undefined error: " + ("no frame at " + framepointer || "unknown"));
      }
      return frame2;
    }
    var offsets = Object.keys(program2);
    var pc = offsets.indexOf(String(offset));
    while (true) {
      var frame = getActiveStackFrame();
      var instruction2 = program2[parseInt(offsets[pc])];
      if (!(instruction2 !== void 0)) {
        throw new RuntimeError("instruction !== undefined error: " + ("no instruction at pc ".concat(pc, " in frame ").concat(framepointer) || "unknown"));
      }
      if (typeof frame.trace === "function") {
        frame.trace(framepointer, pc, instruction2, frame);
      }
      pc++;
      switch (instruction2.type) {
        case "InternalEndAndReturn": {
          if (frame.returnAddress !== -1) {
            pc = frame.returnAddress;
            var activeFrame = getActiveStackFrame();
            var res = void 0;
            if (activeFrame.values.length > 0) {
              res = pop1(activeFrame);
            }
            callStack.pop();
            framepointer--;
            var newStackFrame = getActiveStackFrame();
            if (res !== void 0 && newStackFrame !== void 0) {
              pushResult(newStackFrame, res);
            }
            break;
          } else {
            var activeFrame = getActiveStackFrame();
            if (activeFrame.values.length > 0) {
              return pop1(activeFrame);
            } else {
              return;
            }
          }
        }
        case "InternalGoto": {
          var target = instruction2.target;
          pc = offsets.indexOf(String(target));
          break;
        }
        case "InternalCallExtern": {
          var _target = instruction2.target;
          var funcaddr = frame.originatingModule.funcaddrs[_target];
          if (typeof funcaddr === "undefined") {
            throw newRuntimeError("No function was found in module at address ".concat(_target));
          }
          var subroutine = frame.allocator.get(funcaddr);
          if (_typeof13(subroutine) !== "object") {
            throw newRuntimeError("Cannot call function at address ".concat(funcaddr, ": not a function"));
          }
          var _subroutine$type = _slicedToArray4(subroutine.type, 2), argTypes = _subroutine$type[0], resultType = _subroutine$type[1];
          var args = popArrayOfValTypes(frame, argTypes);
          if (!subroutine.isExternal) {
            throw new RuntimeError("subroutine.isExternal error: unknown");
          }
          var _res = subroutine.code(args.map(function(arg) {
            return arg.value;
          }));
          if (typeof _res !== "undefined") {
            pushResult(frame, castIntoStackLocalOfType2(resultType, _res));
          }
          break;
        }
      }
      switch (instruction2.id) {
        case "const": {
          var _n2 = instruction2.args[0];
          if (typeof _n2 === "undefined") {
            throw newRuntimeError("const requires one argument, none given.");
          }
          if (_n2.type !== "NumberLiteral" && _n2.type !== "LongNumberLiteral" && _n2.type !== "FloatLiteral") {
            throw newRuntimeError("const: unsupported value of type: " + _n2.type);
          }
          pushResult(
            frame,
            // $FlowIgnore
            castIntoStackLocalOfType2(instruction2.object, _n2.value)
          );
          break;
        }
        case "nop": {
          break;
        }
        case "drop": {
          if (frame.values.length < 1) {
            throw new RuntimeError("Assertion error: expected " + JSON.stringify(1) + " on the stack, found " + frame.values.length);
          }
          pop1(frame);
          break;
        }
        case "call": {
          var index = instruction2.index.value;
          var stackframe = (init_stackframe(), __toCommonJS(stackframe_exports));
          var activeFrame = getActiveStackFrame();
          var newStackFrame = stackframe.createChildStackFrame(activeFrame, pc);
          framepointer++;
          if (framepointer >= 300) {
            throw new RuntimeError("Maximum call stack depth reached");
          }
          callStack[framepointer] = newStackFrame;
          pc = offsets.indexOf(String(index));
          break;
        }
        case "end": {
          var found = false;
          var index = frame.values.slice(0).reverse().findIndex(function(_ref2) {
            var type6 = _ref2.type;
            return type6 === "label";
          });
          if (index !== -1) {
            var initialOrderIndex = frame.values.length - 1 - index;
            frame.values.splice(initialOrderIndex, 1);
          }
          break;
        }
        case "loop":
        case "block": {
          var block = instruction2;
          frame.labels.push({
            value: block,
            arity: 0,
            // $FlowIgnore
            id: block.label
          });
          pushResult(frame, label.createValue(block.label.value));
          break;
        }
        case "br": {
          var _label = instruction2.args[0];
          pc = offsets.indexOf(String(_label.value));
          break;
        }
        case "br_if": {
          var _label2 = instruction2.args[0];
          var c = pop1OfType(frame, "i32");
          if (c.value.eqz().isTrue() === false) {
            pc = offsets.indexOf(String(_label2.value));
          } else {
          }
          break;
        }
        case "unreachable":
        case "trap": {
          throw createTrap2();
        }
        case "local": {
          var _instruction$args = _slicedToArray4(instruction2.args, 1), valtype = _instruction$args[0];
          if (valtype.name === "i64") {
            var init2 = castIntoStackLocalOfType2(valtype.name, new import_long7.default(0, 0));
            frame.locals.push(init2);
          } else {
            var _init = castIntoStackLocalOfType2(valtype.name, 0);
            frame.locals.push(_init);
          }
          break;
        }
        case "get_local": {
          var _index = instruction2.args[0];
          if (typeof _index === "undefined") {
            throw newRuntimeError("get_local requires one argument, none given.");
          }
          if (_index.type === "NumberLiteral" || _index.type === "FloatLiteral") {
            getLocalByIndex(frame, _index.value);
          } else {
            throw newRuntimeError("get_local: unsupported index of type: " + _index.type);
          }
          break;
        }
        case "set_local": {
          var _index2 = instruction2.args[0];
          if (_index2.type === "NumberLiteral") {
            var val = pop1(frame);
            setLocalByIndex(frame, _index2.value, val);
          } else {
            throw newRuntimeError("set_local: unsupported index of type: " + _index2.type);
          }
          break;
        }
        case "tee_local": {
          var _index3 = instruction2.args[0];
          if (_index3.type === "NumberLiteral") {
            var _val = pop1(frame);
            pushResult(frame, _val);
            pushResult(frame, _val);
            var val2 = pop1(frame);
            setLocalByIndex(frame, _index3.value, val2);
          } else {
            throw newRuntimeError("tee_local: unsupported index of type: " + _index3.type);
          }
          break;
        }
        case "set_global": {
          var _index4 = instruction2.args[0];
          var globaladdr = frame.originatingModule.globaladdrs[_index4.value];
          if (typeof globaladdr === "undefined") {
            throw newRuntimeError("Global address ".concat(_index4.value, " not found"));
          }
          var globalinst = frame.allocator.get(globaladdr);
          if (_typeof13(globalinst) !== "object") {
            throw newRuntimeError("Unexpected data for global at ".concat(globaladdr.toString()));
          }
          var _val2 = pop1(frame);
          globalinst.value = _val2.value;
          frame.allocator.set(globaladdr, globalinst);
          break;
        }
        case "get_global": {
          var _index5 = instruction2.args[0];
          var _globaladdr = frame.originatingModule.globaladdrs[_index5.value];
          if (typeof _globaladdr === "undefined") {
            throw newRuntimeError(
              // $FlowIgnore
              "Unknown global at index: ".concat(_index5.value.toString())
            );
          }
          var _globalinst = frame.allocator.get(_globaladdr);
          if (_typeof13(_globalinst) !== "object") {
            throw newRuntimeError("Unexpected data for global at ".concat(_globaladdr.toString()));
          }
          pushResult(frame, _globalinst);
          break;
        }
        case "store":
        case "store8":
        case "store16":
        case "store32": {
          var id = instruction2.id, object = instruction2.object;
          var memory2 = getMemory(frame);
          var _pop = pop2(frame, "i32", object), _pop2 = _slicedToArray4(_pop, 2), c1 = _pop2[0], c2 = _pop2[1];
          var ptr = c1.value.toNumber() + getMemoryOffset(frame, instruction2);
          var valueBuffer = c2.value.toByteArray();
          switch (id) {
            case "store":
              break;
            case "store8":
              valueBuffer = valueBuffer.slice(0, 1);
              break;
            case "store16":
              valueBuffer = valueBuffer.slice(0, 2);
              break;
            case "store32":
              valueBuffer = valueBuffer.slice(0, 4);
              break;
            default:
              throw newRuntimeError("illegal operation: " + id);
          }
          if (ptr + valueBuffer.length > memory2.buffer.byteLength) {
            throw newRuntimeError("memory access out of bounds");
          }
          var memoryBuffer = new Uint8Array(memory2.buffer);
          for (var ptrOffset = 0; ptrOffset < valueBuffer.length; ptrOffset++) {
            memoryBuffer[ptr + ptrOffset] = valueBuffer[ptrOffset];
          }
          break;
        }
        case "load":
        case "load16_s":
        case "load16_u":
        case "load8_s":
        case "load8_u":
        case "load32_s":
        case "load32_u": {
          var _id = instruction2.id, _object = instruction2.object;
          var _memory = getMemory(frame);
          var _ptr = pop1OfType(frame, "i32").value.toNumber() + getMemoryOffset(frame, instruction2);
          var extend = 0;
          var extendOffset = _object === "i32" ? 0 : 32;
          var signed = false;
          switch (_id) {
            case "load16_s":
              extend = 16 + extendOffset;
              signed = true;
              break;
            case "load16_u":
              extend = 16 + extendOffset;
              signed = false;
              break;
            case "load8_s":
              extend = 24 + extendOffset;
              signed = true;
              break;
            case "load8_u":
              extend = 24 + extendOffset;
              signed = false;
              break;
            case "load32_u":
              extend = 0 + extendOffset;
              signed = false;
              break;
            case "load32_s":
              extend = 0 + extendOffset;
              signed = true;
              break;
          }
          switch (_object) {
            case "u32":
            case "i32":
            case "f32": {
              if (_ptr + 4 > _memory.buffer.byteLength) {
                throw newRuntimeError("memory access out of bounds");
              }
              break;
            }
            case "i64":
            case "f64": {
              if (_ptr + 8 > _memory.buffer.byteLength) {
                throw newRuntimeError("memory access out of bounds");
              }
              break;
            }
            default:
              throw new RuntimeError("Unsupported " + _object + " load");
          }
          switch (_object) {
            case "i32":
            case "u32":
              pushResult(frame, i326.createValueFromArrayBuffer(_memory.buffer, _ptr, extend, signed));
              break;
            case "i64":
              pushResult(frame, i645.createValueFromArrayBuffer(_memory.buffer, _ptr, extend, signed));
              break;
            case "f32":
              pushResult(frame, f325.createValueFromArrayBuffer(_memory.buffer, _ptr));
              break;
            case "f64":
              pushResult(frame, f645.createValueFromArrayBuffer(_memory.buffer, _ptr));
              break;
            default:
              throw new RuntimeError("Unsupported " + _object + " load");
          }
          break;
        }
        case "add":
        case "mul":
        case "sub":
        case "div_s":
        case "div_u":
        case "rem_s":
        case "rem_u":
        case "shl":
        case "shr_s":
        case "shr_u":
        case "rotl":
        case "rotr":
        case "div":
        case "min":
        case "max":
        case "copysign":
        case "or":
        case "xor":
        case "and": {
          var binopFn = void 0;
          switch (instruction2.object) {
            case "i32":
              binopFn = binopi322;
              break;
            case "i64":
              binopFn = binopi642;
              break;
            case "f32":
              binopFn = binopf322;
              break;
            case "f64":
              binopFn = binopf642;
              break;
            default:
              throw createTrap2("Unsupported operation " + instruction2.id + " on " + // $FlowIgnore
              instruction2.object);
          }
          var _pop3 = pop2(frame, instruction2.object, instruction2.object), _pop4 = _slicedToArray4(_pop3, 2), _c = _pop4[0], _c2 = _pop4[1];
          pushResult(frame, binopFn(_c, _c2, instruction2.id));
          break;
        }
        case "eq":
        case "ne":
        case "lt_s":
        case "lt_u":
        case "le_s":
        case "le_u":
        case "gt":
        case "gt_s":
        case "gt_u":
        case "ge_s":
        case "ge_u": {
          var _pop5 = pop2(frame, instruction2.object, instruction2.object), _pop6 = _slicedToArray4(_pop5, 2), _c3 = _pop6[0], _c4 = _pop6[1];
          pushResult(frame, compare4(_c3, _c4, instruction2.id));
          break;
        }
        case "abs":
        case "neg":
        case "clz":
        case "ctz":
        case "popcnt":
        case "eqz":
        case "reinterpret/f32":
        case "reinterpret/f64": {
          var unopFn = void 0;
          var opType = instruction2.id.indexOf("/") !== -1 ? (
            // $FlowIgnore
            instruction2.id.split("/")[1]
          ) : (
            // $FlowIgnore
            instruction2.object
          );
          switch (opType) {
            case "i32":
              unopFn = unopi322;
              break;
            case "i64":
              unopFn = unopi642;
              break;
            case "f32":
              unopFn = unopf322;
              break;
            case "f64":
              unopFn = unopf642;
              break;
            default:
              throw createTrap2(
                // $FlowIgnore
                "Unsupported operation " + instruction2.id + " on " + opType
              );
          }
          var _c5 = pop1OfType(frame, opType);
          pushResult(frame, unopFn(_c5, instruction2.id));
          break;
        }
        case "return": {
          if (frame.returnAddress !== -1) {
            pc = frame.returnAddress;
            var activeFrame = getActiveStackFrame();
            var res = void 0;
            if (activeFrame.values.length > 0) {
              res = pop1(activeFrame);
            }
            callStack.pop();
            framepointer--;
            var newStackFrame = getActiveStackFrame();
            if (res !== void 0 && newStackFrame !== void 0) {
              pushResult(newStackFrame, res);
            }
          }
          var activeFrame = getActiveStackFrame();
          if (activeFrame.values.length > 0) {
            return pop1(activeFrame);
          } else {
            return;
          }
        }
      }
    }
  }
  var import_long7, _require5, binopi322, binopi642, binopf322, binopf642, _require22, unopi322, unopi642, unopf322, unopf642, _require32, castIntoStackLocalOfType2, i326, i645, f325, f645, label, _require42, createTrap2, _require52, compare4;
  var init_exec = __esm({
    "packages/webassemblyjs/src/interpreter/kernel/exec.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      import_long7 = __toESM(require_long());
      init_memory();
      init_errors();
      _require5 = (init_binop(), __toCommonJS(binop_exports));
      binopi322 = _require5.binopi32;
      binopi642 = _require5.binopi64;
      binopf322 = _require5.binopf32;
      binopf642 = _require5.binopf64;
      _require22 = (init_unop(), __toCommonJS(unop_exports));
      unopi322 = _require22.unopi32;
      unopi642 = _require22.unopi64;
      unopf322 = _require22.unopf32;
      unopf642 = _require22.unopf64;
      _require32 = (init_castIntoStackLocalOfType(), __toCommonJS(castIntoStackLocalOfType_exports));
      castIntoStackLocalOfType2 = _require32.castIntoStackLocalOfType;
      i326 = (init_i32(), __toCommonJS(i32_exports));
      i645 = (init_i64(), __toCommonJS(i64_exports));
      f325 = (init_f32(), __toCommonJS(f32_exports));
      f645 = (init_f64(), __toCommonJS(f64_exports));
      label = (init_label(), __toCommonJS(label_exports));
      _require42 = (init_signals(), __toCommonJS(signals_exports));
      createTrap2 = _require42.createTrap;
      _require52 = (init_comparison(), __toCommonJS(comparison_exports));
      compare4 = _require52.compare;
    }
  });

  // packages/webassemblyjs/src/interpreter/host-func.js
  function _toConsumableArray8(arr) {
    return _arrayWithoutHoles8(arr) || _iterableToArray8(arr) || _unsupportedIterableToArray12(arr) || _nonIterableSpread8();
  }
  function _nonIterableSpread8() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray12(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray12(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray12(o, minLen);
  }
  function _iterableToArray8(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _arrayWithoutHoles8(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray12(arr);
  }
  function _arrayLikeToArray12(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function createHostfunc(ir, moduleinst, exportinst, allocator, _ref) {
    var checkForI64InSignature = _ref.checkForI64InSignature, returnStackLocal = _ref.returnStackLocal;
    return function hostfunc() {
      var _stackFrame$locals;
      var exportinstAddr = exportinst.value.addr;
      var hasModuleInstantiatedFunc = moduleinst.funcaddrs.indexOf(exportinstAddr);
      if (hasModuleInstantiatedFunc === -1) {
        throw new RuntimeError("Function at addr ".concat(exportinstAddr.index, " has not been initialized in the module.") + "Probably an internal failure");
      }
      var funcinst = allocator.get(exportinstAddr);
      if (funcinst === null) {
        throw new RuntimeError("Function was not found at addr ".concat(exportinstAddr.index));
      }
      var funcinstArgs = funcinst.type[0];
      if (checkForI64InSignature === true) {
        var funcinstResults = funcinst.type[1];
        var funcinstArgsHasi64 = funcinstArgs.indexOf("i64") !== -1;
        var funcinstResultsHasi64 = funcinstResults.indexOf("i64") !== -1;
        if (funcinstArgsHasi64 === true || funcinstResultsHasi64 === true) {
          throw new TypeError("Can not call this function from JavaScript: i64 in signature.");
        }
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length !== funcinstArgs.length) {
        throw new RuntimeError("Function ".concat(exportinstAddr.index, " called with ").concat(args.length, " arguments but ") + funcinst.type[0].length + " expected");
      }
      var argsWithType = args.map(function(value, i) {
        return castIntoStackLocalOfType3(funcinstArgs[i], value);
      });
      var stackFrame = createStackFrame2(argsWithType, funcinst.module, allocator);
      (_stackFrame$locals = stackFrame.locals).push.apply(_stackFrame$locals, _toConsumableArray8(argsWithType));
      stackFrame.labels.push({
        value: funcinst,
        arity: funcinstArgs.length,
        id: t3.identifier(exportinst.name)
      });
      return executeStackFrameAndGetResult(ir, funcinst.atOffset, stackFrame, returnStackLocal);
    };
  }
  function executeStackFrameAndGetResult(ir, offset, stackFrame, returnStackLocal) {
    try {
      var res = executeStackFrame2(ir, offset, stackFrame);
      if (returnStackLocal === true) {
        return res;
      }
      if (res != null && res.value != null) {
        if (!(res.type !== "label")) {
          throw new Error('res.type !== "label" error: unknown');
        }
        return res.value.toNumber();
      }
    } catch (e) {
      if (e instanceof ExecutionHasBeenTrapped2) {
        throw e;
      } else {
        var err = new RuntimeError(e.message);
        err.stack = e.stack;
        throw err;
      }
    }
  }
  var t3, _require6, castIntoStackLocalOfType3, _require23, executeStackFrame2, _require33, createStackFrame2, _require43, ExecutionHasBeenTrapped2;
  var init_host_func = __esm({
    "packages/webassemblyjs/src/interpreter/host-func.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_errors();
      t3 = (init_src5(), __toCommonJS(src_exports));
      _require6 = (init_castIntoStackLocalOfType(), __toCommonJS(castIntoStackLocalOfType_exports));
      castIntoStackLocalOfType3 = _require6.castIntoStackLocalOfType;
      _require23 = (init_exec(), __toCommonJS(exec_exports));
      executeStackFrame2 = _require23.executeStackFrame;
      _require33 = (init_stackframe(), __toCommonJS(stackframe_exports));
      createStackFrame2 = _require33.createStackFrame;
      _require43 = (init_signals(), __toCommonJS(signals_exports));
      ExecutionHasBeenTrapped2 = _require43.ExecutionHasBeenTrapped;
    }
  });

  // packages/webassemblyjs/src/interpreter/runtime/values/table.js
  var table_exports = {};
  __export(table_exports, {
    Table: () => Table
  });
  function _typeof14(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof14 = function _typeof18(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof14 = function _typeof18(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof14(obj);
  }
  function _classCallCheck14(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties10(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass10(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties10(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties10(Constructor, staticProps);
    return Constructor;
  }
  var DEFAULT_MAX_TABLE_ENTRY, Table;
  var init_table = __esm({
    "packages/webassemblyjs/src/interpreter/runtime/values/table.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      DEFAULT_MAX_TABLE_ENTRY = Math.pow(2, 23);
      Table = /* @__PURE__ */ function() {
        function Table2(descr) {
          _classCallCheck14(this, Table2);
          if (_typeof14(descr) !== "object") {
            throw new TypeError("TableDescriptor must be an object");
          }
          if (typeof descr.maximum === "number") {
            this._maximum = descr.maximum;
          } else {
            this._maximum = DEFAULT_MAX_TABLE_ENTRY;
          }
          if (typeof descr.initial === "number") {
            this._initial = descr.initial;
            if (this._initial > this._maximum) {
              throw new RangeError("Initial number can not be higher than the maximum");
            }
          }
          this._elements = Array(this._initial);
          this._offset = 0;
        }
        _createClass10(Table2, [{
          key: "push",
          value: function push(fn) {
            var offset = this._offset % this._maximum;
            this._elements[offset] = fn;
            this._offset = offset + 1;
          }
        }, {
          key: "get",
          value: function get(offset) {
            var element = this._elements[offset];
            if (typeof element === "undefined") {
              return null;
            } else {
              return element;
            }
          }
        }, {
          key: "length",
          get: function get() {
            return this._elements.length;
          }
        }]);
        return Table2;
      }();
    }
  });

  // packages/webassemblyjs/src/interpreter/runtime/values/func.js
  var require_func = __commonJS({
    "packages/webassemblyjs/src/interpreter/runtime/values/func.js"(exports, module2) {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_errors();
      function createInstance3(atOffset, n, fromModule) {
        if (!(typeof atOffset === "number")) {
          throw new Error('typeof atOffset === "number" error: unknown');
        }
        var type6 = [[], []];
        if (n.signature.type !== "Signature") {
          throw new RuntimeError("Function signatures must be denormalised before execution");
        }
        var signature2 = n.signature;
        signature2.params.forEach(function(param) {
          type6[0].push(param.valtype);
        });
        signature2.results.forEach(function(result) {
          type6[1].push(result);
        });
        var code2 = n.body;
        return {
          atOffset,
          type: type6,
          code: code2,
          module: fromModule,
          isExternal: false
        };
      }
      module2.exports = {
        createInstance: createInstance3
      };
    }
  });

  // packages/webassemblyjs/src/interpreter/runtime/values/extern.js
  var extern_exports = {};
  __export(extern_exports, {
    createFuncInstance: () => createFuncInstance,
    createGlobalInstance: () => createGlobalInstance
  });
  function createFuncInstance(func3, params, results) {
    var type6 = [params, results];
    return {
      type: type6,
      code: func3,
      module: null,
      isExternal: true
    };
  }
  function createGlobalInstance(value, type6, mutability) {
    return {
      type: type6,
      mutability,
      value
    };
  }
  var init_extern = __esm({
    "packages/webassemblyjs/src/interpreter/runtime/values/extern.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
    }
  });

  // packages/webassemblyjs/src/interpreter/partial-evaluation.js
  var partial_evaluation_exports = {};
  __export(partial_evaluation_exports, {
    evaluate: () => evaluate
  });
  function _typeof15(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof15 = function _typeof18(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof15 = function _typeof18(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof15(obj);
  }
  function evaluate(allocator, code2) {
    var ir = listOfInstructionsToIr(code2);
    var moduleInstance = modulevalue.createInstance(ir, allocator, t4.module(void 0, []));
    var stackFrame = createStackFrame3([], moduleInstance, allocator);
    var main = ir.funcTable.find(function(f) {
      return f.name === "main";
    });
    if (!(_typeof15(main) === "object")) {
      throw new Error('typeof main === "object" error: unknown');
    }
    return executeStackFrame3(ir, main.startAt, stackFrame);
  }
  var t4, _require7, executeStackFrame3, _require24, createStackFrame3, modulevalue;
  var init_partial_evaluation = __esm({
    "packages/webassemblyjs/src/interpreter/partial-evaluation.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src15();
      t4 = (init_src5(), __toCommonJS(src_exports));
      _require7 = (init_exec(), __toCommonJS(exec_exports));
      executeStackFrame3 = _require7.executeStackFrame;
      _require24 = (init_stackframe(), __toCommonJS(stackframe_exports));
      createStackFrame3 = _require24.createStackFrame;
      modulevalue = (init_module3(), __toCommonJS(module_exports2));
    }
  });

  // packages/webassemblyjs/src/interpreter/runtime/values/global.js
  var global_exports = {};
  __export(global_exports, {
    createInstance: () => createInstance
  });
  function createInstance(allocator, node) {
    var value;
    var _node$globalType = node.globalType, valtype = _node$globalType.valtype, mutability = _node$globalType.mutability;
    if (node.init.length > 2 || node.init.length === 1) {
      throw new CompileError3("type mismatch");
    }
    var resultInferedType = getType2(node.init);
    if (resultInferedType != null && typeEq([node.globalType.valtype], resultInferedType) === false) {
      throw new CompileError3("type mismatch");
    }
    var res = evaluate2(allocator, node.init);
    if (res != null) {
      value = res.value;
    }
    return {
      type: valtype,
      mutability,
      value
    };
  }
  var _require8, evaluate2, _require25, CompileError3;
  var init_global2 = __esm({
    "packages/webassemblyjs/src/interpreter/runtime/values/global.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src16();
      _require8 = (init_partial_evaluation(), __toCommonJS(partial_evaluation_exports));
      evaluate2 = _require8.evaluate;
      _require25 = (init_errors(), __toCommonJS(errors_exports));
      CompileError3 = _require25.CompileError;
    }
  });

  // packages/webassemblyjs/src/interpreter/runtime/values/module.js
  var module_exports2 = {};
  __export(module_exports2, {
    createInstance: () => createInstance2
  });
  function _typeof16(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof16 = function _typeof18(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof16 = function _typeof18(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof16(obj);
  }
  function instantiateImports(n, allocator, externalElements, internals, moduleInstance) {
    function getExternalElementOrThrow(key, key2) {
      if (typeof externalElements[key] === "undefined" || typeof externalElements[key][key2] === "undefined") {
        throw new CompileError4("Unknown import ".concat(key, ".").concat(key2));
      }
      return externalElements[key][key2];
    }
    function handleFuncImport(node, descr) {
      var element = getExternalElementOrThrow(node.module, node.name);
      var params = descr.signature.params != null ? descr.signature.params : [];
      var results = descr.signature.results != null ? descr.signature.results : [];
      var externFuncinstance = externvalue.createFuncInstance(
        element,
        // $FlowIgnore
        params,
        results
      );
      var externFuncinstanceAddr = allocator.malloc(
        1
        /* sizeof externFuncinstance */
      );
      allocator.set(externFuncinstanceAddr, externFuncinstance);
      moduleInstance.funcaddrs.push(externFuncinstanceAddr);
    }
    function handleGlobalImport(node, descr) {
      var element = getExternalElementOrThrow(node.module, node.name);
      var externglobalinstance = externvalue.createGlobalInstance(new i327(element), descr.valtype, descr.mutability);
      var addr = allocator.malloc(
        1
        /* size of the globalinstance struct */
      );
      allocator.set(addr, externglobalinstance);
      moduleInstance.globaladdrs.push(addr);
    }
    function handleMemoryImport(node) {
      var memoryinstance = getExternalElementOrThrow(node.module, node.name);
      var addr = allocator.malloc(
        1
        /* size of the memoryinstance struct */
      );
      allocator.set(addr, memoryinstance);
      moduleInstance.memaddrs.push(addr);
    }
    function handleTableImport(node) {
      var tableinstance = getExternalElementOrThrow(node.module, node.name);
      var addr = allocator.malloc(
        1
        /* size of the tableinstance struct */
      );
      allocator.set(addr, tableinstance);
      moduleInstance.tableaddrs.push(addr);
    }
    traverse(n, {
      ModuleImport: function(_ModuleImport) {
        function ModuleImport(_x) {
          return _ModuleImport.apply(this, arguments);
        }
        ModuleImport.toString = function() {
          return _ModuleImport.toString();
        };
        return ModuleImport;
      }(function(_ref) {
        var node = _ref.node;
        switch (node.descr.type) {
          case "FuncImportDescr":
            return handleFuncImport(node, node.descr);
          case "GlobalType":
            return handleGlobalImport(node, node.descr);
          case "Memory":
            return handleMemoryImport(node);
          case "Table":
            return handleTableImport(node);
          default:
            throw new Error("Unsupported import of type: " + node.descr.type);
        }
      })
    });
  }
  function instantiateDataSections(n, allocator, moduleInstance) {
    traverse(n, {
      Data: function(_Data) {
        function Data(_x2) {
          return _Data.apply(this, arguments);
        }
        Data.toString = function() {
          return _Data.toString();
        };
        return Data;
      }(function(_ref2) {
        var node = _ref2.node;
        var memIndex = node.memoryIndex.value;
        var memoryAddr = moduleInstance.memaddrs[memIndex];
        var memory2 = allocator.get(memoryAddr);
        var buffer = new Uint8Array(memory2.buffer);
        var offset;
        if (node.offset.id === "const") {
          var offsetInstruction = node.offset;
          var arg = offsetInstruction.args[0];
          offset = arg.value;
        } else if (node.offset.id === "get_global") {
          var _offsetInstruction = node.offset;
          var globalIndex = _offsetInstruction.args[0].value;
          var globalAddr = moduleInstance.globaladdrs[globalIndex];
          var globalInstance = allocator.get(globalAddr);
          offset = globalInstance.value.toNumber();
        } else {
          throw new RuntimeError6("data segment offsets can only be specified as constants or globals");
        }
        for (var i = 0; i < node.init.values.length; i++) {
          buffer[i + offset] = node.init.values[i];
        }
      })
    });
  }
  function instantiateInternals(funcTable, n, allocator, internals, moduleInstance) {
    var funcIndex = 0;
    traverse(n, {
      Func: function(_Func) {
        function Func(_x3) {
          return _Func.apply(this, arguments);
        }
        Func.toString = function() {
          return _Func.toString();
        };
        return Func;
      }(function(_ref3) {
        var node = _ref3.node;
        if (node.isExternal === true) {
          return;
        }
        var atOffset = funcTable[funcIndex].startAt;
        var funcinstance = func2.createInstance(atOffset, node, moduleInstance);
        var addr = allocator.malloc(
          1
          /* size of the funcinstance struct */
        );
        allocator.set(addr, funcinstance);
        moduleInstance.funcaddrs.push(addr);
        if (node.name != null) {
          if (node.name.type === "Identifier") {
            internals.instantiatedFuncs[node.name.value] = {
              addr
            };
          }
        }
        funcIndex++;
      }),
      Table: function(_Table) {
        function Table2(_x4) {
          return _Table.apply(this, arguments);
        }
        Table2.toString = function() {
          return _Table.toString();
        };
        return Table2;
      }(function(_ref4) {
        var node = _ref4.node;
        var initial = node.limits.min;
        var element = node.elementType;
        var tableinstance = new WebAssemblyTable.Table({
          initial,
          element
        });
        var addr = allocator.malloc(
          1
          /* size of the tableinstance struct */
        );
        allocator.set(addr, tableinstance);
        moduleInstance.tableaddrs.push(addr);
        if (node.name != null) {
          if (node.name.type === "Identifier") {
            internals.instantiatedTables[node.name.value] = {
              addr
            };
          }
        }
      }),
      Elem: function(_Elem) {
        function Elem(_x5) {
          return _Elem.apply(this, arguments);
        }
        Elem.toString = function() {
          return _Elem.toString();
        };
        return Elem;
      }(function(_ref5) {
        var node = _ref5.node;
        var table2;
        if (node.table.type === "NumberLiteral") {
          var addr = moduleInstance.tableaddrs[node.table.value];
          table2 = allocator.get(addr);
        }
        if (_typeof16(table2) === "object") {
          table2.push(function() {
            throw new Error("Unsupported operation");
          });
        } else {
          throw new CompileError4("Unknown table");
        }
      }),
      Memory: function(_Memory) {
        function Memory2(_x6) {
          return _Memory.apply(this, arguments);
        }
        Memory2.toString = function() {
          return _Memory.toString();
        };
        return Memory2;
      }(function(_ref6) {
        var node = _ref6.node;
        if (moduleInstance.memaddrs.length !== 0) {
          return;
        }
        var _node$limits = node.limits, min = _node$limits.min, max = _node$limits.max;
        var memoryDescriptor = {
          initial: min
        };
        if (typeof max === "number") {
          memoryDescriptor.maximum = max;
        }
        var memoryinstance = new Memory(memoryDescriptor);
        var addr = allocator.malloc(
          1
          /* size of the memoryinstance struct */
        );
        allocator.set(addr, memoryinstance);
        moduleInstance.memaddrs.push(addr);
        internals.instantiatedMemories.push({
          addr
        });
      }),
      Global: function(_Global) {
        function Global(_x7) {
          return _Global.apply(this, arguments);
        }
        Global.toString = function() {
          return _Global.toString();
        };
        return Global;
      }(function(_ref7) {
        var node = _ref7.node;
        var globalinstance = global3.createInstance(allocator, node);
        var addr = allocator.malloc(
          1
          /* size of the globalinstance struct */
        );
        allocator.set(addr, globalinstance);
        moduleInstance.globaladdrs.push(addr);
        internals.instantiatedGlobals.push({
          addr,
          type: node.globalType
        });
      })
    });
  }
  function instantiateExports(n, allocator, internals, moduleInstance) {
    function assertNotAlreadyExported(str) {
      var moduleInstanceExport = moduleInstance.exports.find(function(_ref8) {
        var name = _ref8.name;
        return name === str;
      });
      if (moduleInstanceExport !== void 0) {
        throw new CompileError4("duplicate export name");
      }
    }
    function createModuleExport(node, instantiatedItemArray, instantiatedItemInFromModule, validate4) {
      if (isIdentifier(node.descr.id) === true) {
        var instantiatedItem = instantiatedItemArray[node.descr.id.value];
        validate4(instantiatedItem);
        assertNotAlreadyExported(node.name);
        moduleInstance.exports.push({
          name: node.name,
          value: {
            type: node.descr.exportType,
            addr: instantiatedItem.addr
          }
        });
      } else if (isNumberLiteral(node.descr.id) === true) {
        var _instantiatedItem = {
          addr: instantiatedItemInFromModule[parseInt(node.descr.id.value)]
        };
        if (!(_instantiatedItem !== void 0)) {
          throw new Error("_instantiatedItem !== undefined error: unknown");
        }
        validate4(_instantiatedItem);
        assertNotAlreadyExported(node.name);
        moduleInstance.exports.push({
          name: node.name,
          value: {
            type: node.descr.exportType,
            addr: _instantiatedItem.addr
          }
        });
      } else {
        throw new CompileError4("Module exports must be referenced via an Identifier");
      }
    }
    traverse(n, {
      ModuleExport: function(_ModuleExport) {
        function ModuleExport(_x8) {
          return _ModuleExport.apply(this, arguments);
        }
        ModuleExport.toString = function() {
          return _ModuleExport.toString();
        };
        return ModuleExport;
      }(function(_ref9) {
        var node = _ref9.node;
        switch (node.descr.exportType) {
          case "Func": {
            createModuleExport(node, internals.instantiatedFuncs, moduleInstance.funcaddrs, function(instantiatedFunc) {
              if (!(instantiatedFunc !== void 0)) {
                throw new Error("instantiatedFunc !== undefined error: " + ("Function ".concat(node.name, " has been exported but was not instantiated") || "unknown"));
              }
            });
            break;
          }
          case "Global": {
            createModuleExport(node, internals.instantiatedGlobals, moduleInstance.globaladdrs, function(instantiatedGlobal) {
              if (!(instantiatedGlobal !== void 0)) {
                throw new Error("instantiatedGlobal !== undefined error: " + ("Global ".concat(node.name, " has been exported but was not instantiated") || "unknown"));
              }
              var global4 = allocator.get(instantiatedGlobal.addr);
              if (!(global4 !== void 0)) {
                throw new Error("global !== undefined error: unknown");
              }
              if (global4.mutability === "var") {
                throw new CompileError4("Mutable globals cannot be exported");
              }
            });
            break;
          }
          case "Table": {
            createModuleExport(node, internals.instantiatedTables, moduleInstance.tableaddrs, function(instantiatedTable) {
              if (!(instantiatedTable !== void 0)) {
                throw new Error("instantiatedTable !== undefined error: " + ("Table ".concat(node.name, " has been exported but was not instantiated") || "unknown"));
              }
            });
            break;
          }
          case "Memory": {
            createModuleExport(node, internals.instantiatedMemories, moduleInstance.memaddrs, function(instantiatedMemory) {
              if (!(instantiatedMemory !== void 0)) {
                throw new Error("instantiatedMemory !== undefined error: " + ("Memory ".concat(node.name, " has been exported but was not instantiated") || "unknown"));
              }
            });
            break;
          }
          default: {
            throw new CompileError4("unknown export: " + node.descr.exportType);
          }
        }
      })
    });
  }
  function createInstance2(funcTable, allocator, n) {
    var externalElements = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    var moduleInstance = {
      types: [],
      funcaddrs: [],
      tableaddrs: [],
      memaddrs: [],
      globaladdrs: [],
      exports: []
    };
    var instantiatedInternals = {
      instantiatedFuncs: {},
      instantiatedGlobals: [],
      instantiatedTables: {},
      instantiatedMemories: []
    };
    instantiateImports(n, allocator, externalElements, instantiatedInternals, moduleInstance);
    instantiateInternals(funcTable, n, allocator, instantiatedInternals, moduleInstance);
    instantiateDataSections(n, allocator, moduleInstance);
    instantiateExports(n, allocator, instantiatedInternals, moduleInstance);
    return moduleInstance;
  }
  var _require9, RuntimeError6, CompileError4, WebAssemblyTable, func2, externvalue, global3, _require26, i327;
  var init_module3 = __esm({
    "packages/webassemblyjs/src/interpreter/runtime/values/module.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src5();
      init_nodes();
      init_memory();
      _require9 = (init_errors(), __toCommonJS(errors_exports));
      RuntimeError6 = _require9.RuntimeError;
      CompileError4 = _require9.CompileError;
      WebAssemblyTable = (init_table(), __toCommonJS(table_exports));
      func2 = require_func();
      externvalue = (init_extern(), __toCommonJS(extern_exports));
      global3 = (init_global2(), __toCommonJS(global_exports));
      _require26 = (init_i32(), __toCommonJS(i32_exports));
      i327 = _require26.i32;
    }
  });

  // packages/webassemblyjs/src/interpreter/kernel/memory.js
  var memory_exports2 = {};
  __export(memory_exports2, {
    NULL: () => NULL,
    createAllocator: () => createAllocator
  });
  function createAllocator() {
    var store = [];
    var offset = 0;
    function malloc(size) {
      offset += size;
      return {
        index: offset,
        size
      };
    }
    function get(p) {
      return store[p.index];
    }
    function set(p, value) {
      store[p.index] = value;
    }
    function free2(p) {
      store[p.index] = NULL;
    }
    return {
      malloc,
      free: free2,
      get,
      set
    };
  }
  var NULL;
  var init_memory2 = __esm({
    "packages/webassemblyjs/src/interpreter/kernel/memory.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      NULL = 0;
    }
  });

  // packages/webassemblyjs/src/interpreter/import-object.js
  var import_object_exports = {};
  __export(import_object_exports, {
    walk: () => walk2
  });
  function walk2(object, visitor) {
    Object.keys(object).forEach(function(key) {
      Object.keys(object[key]).forEach(function(key2) {
        var val = object[key][key2];
        visitor(key, key2, val);
      });
    });
  }
  var init_import_object = __esm({
    "packages/webassemblyjs/src/interpreter/import-object.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
    }
  });

  // packages/webassemblyjs/src/interpreter/index.js
  var interpreter_exports = {};
  __export(interpreter_exports, {
    Instance: () => Instance
  });
  function _typeof17(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof17 = function _typeof18(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof17 = function _typeof18(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof17(obj);
  }
  function _classCallCheck15(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties11(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass11(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties11(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties11(Constructor, staticProps);
    return Constructor;
  }
  function getModuleFromProgram(ast) {
    var module2 = null;
    traverse(ast, {
      Module: function Module4(_ref) {
        var node = _ref.node;
        module2 = node;
      }
    });
    return module2;
  }
  var modulevalue2, _require10, createAllocator2, importObjectUtils, _require27, createStackFrame4, Instance;
  var init_interpreter = __esm({
    "packages/webassemblyjs/src/interpreter/index.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      init_src5();
      init_module2();
      init_errors();
      init_host_func();
      init_src15();
      modulevalue2 = (init_module3(), __toCommonJS(module_exports2));
      _require10 = (init_memory2(), __toCommonJS(memory_exports2));
      createAllocator2 = _require10.createAllocator;
      importObjectUtils = (init_import_object(), __toCommonJS(import_object_exports));
      _require27 = (init_stackframe(), __toCommonJS(stackframe_exports));
      createStackFrame4 = _require27.createStackFrame;
      Instance = /* @__PURE__ */ function() {
        function Instance2(module2, importObject) {
          var _this = this;
          _classCallCheck15(this, Instance2);
          if (module2 instanceof Module2 === false) {
            throw new TypeError("module must be of type WebAssembly.Module, " + _typeof17(module2) + " given.");
          }
          this._externalElements = {};
          this.exports = {};
          this._allocator = createAllocator2();
          var internalInstanceOptions = {
            checkForI64InSignature: true,
            returnStackLocal: false
          };
          if (_typeof17(importObject._internalInstanceOptions) === "object") {
            internalInstanceOptions = importObject._internalInstanceOptions;
          }
          if (_typeof17(importObject) === "object") {
            importObjectUtils.walk(importObject, function(key, key2, value) {
              if (_typeof17(_this._externalElements[key]) !== "object") {
                _this._externalElements[key] = {};
              }
              _this._externalElements[key][key2] = value;
            });
          }
          var moduleNode = getModuleFromProgram(module2._ast);
          if (moduleNode === null) {
            throw new RuntimeError("Module not found");
          }
          var moduleInstance = modulevalue2.createInstance(
            module2._ir.funcTable,
            this._allocator,
            // $FlowIgnore: that's the correct type but Flow fails to get it
            moduleNode,
            this._externalElements
          );
          moduleInstance.exports.forEach(function(exportinst) {
            if (exportinst.value.type === "Func") {
              _this.exports[exportinst.name] = createHostfunc(module2._ir, moduleInstance, exportinst, _this._allocator, internalInstanceOptions);
              return;
            }
            if (exportinst.value.type === "Global") {
              var globalinst = _this._allocator.get(exportinst.value.addr);
              if (globalinst == null) {
                throw new RuntimeError("Global instance has not been instantiated");
              }
              if (internalInstanceOptions.returnStackLocal === true) {
                _this.exports[exportinst.name] = globalinst;
              } else {
                _this.exports[exportinst.name] = globalinst.value.toNumber();
              }
              return;
            }
            if (exportinst.value.type === "Memory") {
              var memoryinst = _this._allocator.get(exportinst.value.addr);
              if (memoryinst == null) {
                throw new RuntimeError("Memory instance has not been instantiated");
              }
              _this.exports[exportinst.name] = memoryinst;
              return;
            }
            if (exportinst.value.type === "Table") {
              var tableinst = _this._allocator.get(exportinst.value.addr);
              if (tableinst == null) {
                throw new RuntimeError("Table instance has not been instantiated");
              }
              _this.exports[exportinst.name] = tableinst;
              return;
            }
            throw new Error("Unknown export type: " + exportinst.value.type);
          });
          this._moduleInstance = moduleInstance;
          var startFunc = module2._ir.funcTable.find(function(x) {
            return x.name === kStart;
          });
          if (startFunc != null) {
            this.executeStartFunc(module2._ir, startFunc.startAt);
          }
        }
        _createClass11(Instance2, [{
          key: "executeStartFunc",
          value: function executeStartFunc(ir, offset) {
            var params = [];
            var stackFrame = createStackFrame4(params, this._moduleInstance, this._allocator);
            executeStackFrameAndGetResult(
              ir,
              offset,
              stackFrame,
              /* returnStackLocal */
              true
            );
          }
        }]);
        return Instance2;
      }();
    }
  });

  // packages/webassemblyjs/src/check-endianness.js
  var check_endianness_exports = {};
  __export(check_endianness_exports, {
    checkEndianness: () => checkEndianness
  });
  function checkEndianness() {
    var viewInt16 = new Int16Array(buff);
    var viewInt8 = new Int8Array(buff);
    viewInt16[0] = 25459;
    return viewInt8[0] === 115 && viewInt8[1] === 99;
  }
  var buff;
  var init_check_endianness = __esm({
    "packages/webassemblyjs/src/check-endianness.js"() {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      buff = new ArrayBuffer(16);
    }
  });

  // packages/webassemblyjs/src/index.js
  var require_src = __commonJS({
    "packages/webassemblyjs/src/index.js"(exports, module2) {
      init_global();
      init_dirname();
      init_filename();
      init_buffer();
      init_process();
      function _typeof18(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof18 = function _typeof19(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof18 = function _typeof19(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof18(obj);
      }
      var _require11 = (init_src9(), __toCommonJS(src_exports2));
      var parse4 = _require11.parse;
      var _require28 = (init_src13(), __toCommonJS(src_exports5));
      var decode4 = _require28.decode;
      var _require34 = (init_interpreter(), __toCommonJS(interpreter_exports));
      var Instance2 = _require34.Instance;
      var _require44 = (init_memory(), __toCommonJS(memory_exports));
      var Memory2 = _require44.Memory;
      var _require53 = (init_table(), __toCommonJS(table_exports));
      var Table2 = _require53.Table;
      var _require62 = (init_errors(), __toCommonJS(errors_exports));
      var RuntimeError7 = _require62.RuntimeError;
      var CompileError5 = _require62.CompileError;
      var LinkError2 = _require62.LinkError;
      var _require72 = (init_module2(), __toCommonJS(module_exports));
      var createCompiledModule2 = _require72.createCompiledModule;
      var Module4 = _require72.Module;
      var _require82 = (init_check_endianness(), __toCommonJS(check_endianness_exports));
      var checkEndianness2 = _require82.checkEndianness;
      var WebAssembly2 = {
        instantiate: function instantiate(buff2) {
          var importObject = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return new Promise(function(resolve, reject) {
            if (checkEndianness2() === false) {
              return reject(new RuntimeError7("expected the system to be little-endian"));
            }
            if (buff2 instanceof ArrayBuffer === false && buff2 instanceof Uint8Array === false) {
              return reject("Module must be either an ArrayBuffer or an Uint8Array (BufferSource), " + _typeof18(buff2) + " given.");
            }
            var ast = decode4(buff2);
            var module3 = createCompiledModule2(ast);
            var instance = new Instance2(module3, importObject);
            resolve({
              // $FlowIgnore
              instance,
              module: module3
            });
          });
        },
        compile: function compile(buff2) {
          return new Promise(function(resolve) {
            var ast = decode4(buff2);
            resolve(createCompiledModule2(ast));
          });
        },
        validate: function validate4(buff2) {
          try {
            createCompiledModule2(decode4(buff2));
            return true;
          } catch (e) {
            return false;
          }
        },
        // FIXME(sven): remove this
        instantiateFromSource: function instantiateFromSource(content) {
          var importObject = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var ast = parse4(content);
          var module3 = createCompiledModule2(ast);
          console.warn("using deprecated instantiateFromSource");
          return new Instance2(module3, importObject);
        },
        Instance: Instance2,
        Module: Module4,
        Memory: Memory2,
        Table: Table2,
        RuntimeError: RuntimeError7,
        LinkError: LinkError2,
        CompileError: CompileError5
      };
      module2.exports = WebAssembly2;
    }
  });
  return require_src();
})();
/*! Bundled license information:

buffer-es6/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   *)
*/
