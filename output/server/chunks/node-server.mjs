globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, createApp, createRouter, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createRouter as createRouter$1 } from 'radix3';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import { promises } from 'fs';
import { dirname, resolve } from 'pathe';
import { fileURLToPath } from 'url';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"API_BASE_URL":"https://admin.tourexpect.com/api","BASE_URL":"https://admin.tourexpect.com:","public":{"API_BASE_URL":"https://admin.tourexpect.com/api","BASE_URL":"https://admin.tourexpect.com:"}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(_error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(_error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    description: "",
    data: _error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (errorObject.statusCode !== 404) {
    console.error("[nuxt] [request error]", errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const url = withQuery("/__nuxt_error", errorObject);
  const html = await $fetch(url).catch((error) => {
    console.error("[nitro] Error while generating error response", error);
    return errorObject.statusMessage;
  });
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/.htaccess": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"270-S2LSs6Ow2gr5zYSUhjByc8SZdBk\"",
    "mtime": "2023-02-09T20:04:23.409Z",
    "path": "../public/.htaccess"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-02-09T20:04:23.431Z",
    "path": "../public/favicon.ico"
  },
  "/index.php": {
    "type": "application/x-httpd-php",
    "etag": "\"706-8kzeLnR1ZRc281n6i5ijjwI2p7I\"",
    "mtime": "2023-02-09T20:04:23.441Z",
    "path": "../public/index.php"
  },
  "/mix-manifest.json": {
    "type": "application/json",
    "etag": "\"4b-81hJIqTtFoF/WrSGwS7+TBRsg2Q\"",
    "mtime": "2023-02-09T20:04:23.475Z",
    "path": "../public/mix-manifest.json"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1a-Ww60UaGmGdV+XIDLkNZIDigz3YA\"",
    "mtime": "2023-02-09T20:04:23.475Z",
    "path": "../public/robots.txt"
  },
  "/web.config": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4bb-gdhv4ehOp+htMzqqQuGrkuJ65rQ\"",
    "mtime": "2023-02-09T20:04:23.475Z",
    "path": "../public/web.config"
  },
  "/css/app.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"402328-koj+hdEwR2b10Bi+ZkAuvdwUT9U\"",
    "mtime": "2023-02-09T20:04:23.431Z",
    "path": "../public/css/app.css"
  },
  "/images/bold.png": {
    "type": "image/png",
    "etag": "\"14046-TxMxbezqNK15fR/LgXhBhtGzsxw\"",
    "mtime": "2023-02-09T20:04:23.431Z",
    "path": "../public/images/bold.png"
  },
  "/images/clean.png": {
    "type": "image/png",
    "etag": "\"f148-OtuKrPTvNoqRGaHHa24HWlX4snY\"",
    "mtime": "2023-02-09T20:04:23.431Z",
    "path": "../public/images/clean.png"
  },
  "/images/default.jpg": {
    "type": "image/jpeg",
    "etag": "\"116d-NbUqyp7esGu89OKgV5Ftms/sZOk\"",
    "mtime": "2023-02-09T20:04:23.431Z",
    "path": "../public/images/default.jpg"
  },
  "/images/elegant.png": {
    "type": "image/png",
    "etag": "\"165a9-srXJTd0Cc49cCJ5gjZ4KbgkwDTg\"",
    "mtime": "2023-02-09T20:04:23.431Z",
    "path": "../public/images/elegant.png"
  },
  "/images/fun.png": {
    "type": "image/png",
    "etag": "\"269f2-9KAKtL5WRzyvhbhCx6dV0OxMj7o\"",
    "mtime": "2023-02-09T20:04:23.431Z",
    "path": "../public/images/fun.png"
  },
  "/images/ha.jpeg": {
    "type": "image/jpeg",
    "etag": "\"36c29-UnX0x+mBqg+pLlIoKHCibPDtcAo\"",
    "mtime": "2023-02-09T20:04:23.439Z",
    "path": "../public/images/ha.jpeg"
  },
  "/images/header-dots.png": {
    "type": "image/png",
    "etag": "\"55d3-/mQtGOJg3k3TMTlvgEXFKuZe2BY\"",
    "mtime": "2023-02-09T20:04:23.439Z",
    "path": "../public/images/header-dots.png"
  },
  "/images/logo.jpg": {
    "type": "image/jpeg",
    "etag": "\"2cf1-HZBG2Vnc3RVo1a0rhNVyTY2XkuI\"",
    "mtime": "2023-02-09T20:04:23.439Z",
    "path": "../public/images/logo.jpg"
  },
  "/images/photographer.jpg": {
    "type": "image/jpeg",
    "etag": "\"15be8-3ZQVCUiI8r/3of3rERTd1PyISoY\"",
    "mtime": "2023-02-09T20:04:23.441Z",
    "path": "../public/images/photographer.jpg"
  },
  "/images/right-side-image.jpg": {
    "type": "image/jpeg",
    "etag": "\"2c9c9-ih+5FdIlpqBXna2ofBfOklcAwVU\"",
    "mtime": "2023-02-09T20:04:23.441Z",
    "path": "../public/images/right-side-image.jpg"
  },
  "/images/rustic.png": {
    "type": "image/png",
    "etag": "\"1fdb2-mBMBuhVLYcGzNcrC/Zk5Ug63Uhg\"",
    "mtime": "2023-02-09T20:04:23.441Z",
    "path": "../public/images/rustic.png"
  },
  "/images/web.png": {
    "type": "image/png",
    "etag": "\"7b704-TbbUa+MqAgpulK6FQ2FwN4FRVN8\"",
    "mtime": "2023-02-09T20:04:23.441Z",
    "path": "../public/images/web.png"
  },
  "/js/app.js": {
    "type": "application/javascript",
    "etag": "\"5b36d9-G4iR9TzGEBI8SM+KHlpxlPRwkm8\"",
    "mtime": "2023-02-09T20:04:23.475Z",
    "path": "../public/js/app.js"
  },
  "/_nuxt/ComingSoon-2538cfc3.mjs": {
    "type": "application/javascript",
    "etag": "\"106-F5hs9YjqaFvJd5Sg3jy2WgEL9z4\"",
    "mtime": "2023-02-20T09:02:51.009Z",
    "path": "../public/_nuxt/ComingSoon-2538cfc3.mjs"
  },
  "/_nuxt/entry-16acf4b5.mjs": {
    "type": "application/javascript",
    "etag": "\"7f333-xCp+xIJize4CAqCVFvyGVNz+igg\"",
    "mtime": "2023-02-20T09:02:51.010Z",
    "path": "../public/_nuxt/entry-16acf4b5.mjs"
  },
  "/_nuxt/entry.abbd81ee.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"23b33-33mmMDfe/SYWl/W69gwWTPktkD0\"",
    "mtime": "2023-02-20T09:02:51.010Z",
    "path": "../public/_nuxt/entry.abbd81ee.css"
  },
  "/_nuxt/error-404-a46828d3.mjs": {
    "type": "application/javascript",
    "etag": "\"81a-z5opO4PACgFgWrKXGQGLQIegW8A\"",
    "mtime": "2023-02-20T09:02:51.010Z",
    "path": "../public/_nuxt/error-404-a46828d3.mjs"
  },
  "/_nuxt/error-404.314f7075.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11bd-kF6SKfdJYaoPOx5XSNB4IuKqq6c\"",
    "mtime": "2023-02-20T09:02:51.010Z",
    "path": "../public/_nuxt/error-404.314f7075.css"
  },
  "/_nuxt/error-500-accde8e2.mjs": {
    "type": "application/javascript",
    "etag": "\"6c8-NMBc2LntScDLEy0iUse0dBowreM\"",
    "mtime": "2023-02-20T09:02:51.010Z",
    "path": "../public/_nuxt/error-500-accde8e2.mjs"
  },
  "/_nuxt/error-500.4e3461e5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"af4-ckENJljqPJ6JYcymKbQpp8F2r1I\"",
    "mtime": "2023-02-20T09:02:51.010Z",
    "path": "../public/_nuxt/error-500.4e3461e5.css"
  },
  "/_nuxt/error-component-683ae497.mjs": {
    "type": "application/javascript",
    "etag": "\"425-pNWJTXNaFEspZJdQq/E24brfE4c\"",
    "mtime": "2023-02-20T09:02:51.009Z",
    "path": "../public/_nuxt/error-component-683ae497.mjs"
  },
  "/_nuxt/hero.f899869c.jpg": {
    "type": "image/jpeg",
    "etag": "\"20547-I8Zp/0DtQu6TALK6YCpFM20teoU\"",
    "mtime": "2023-02-20T09:02:51.009Z",
    "path": "../public/_nuxt/hero.f899869c.jpg"
  },
  "/_nuxt/index-1dae7289.mjs": {
    "type": "application/javascript",
    "etag": "\"e5-cIA4VNq9kQWR2HDHzZWzYymJLuw\"",
    "mtime": "2023-02-20T09:02:51.010Z",
    "path": "../public/_nuxt/index-1dae7289.mjs"
  },
  "/_nuxt/index-3a9b6cbc.mjs": {
    "type": "application/javascript",
    "etag": "\"f0-RwekqqRa0IME5UiJ1+dGyUV/yvQ\"",
    "mtime": "2023-02-20T09:02:51.009Z",
    "path": "../public/_nuxt/index-3a9b6cbc.mjs"
  },
  "/_nuxt/index-4089e5ec.mjs": {
    "type": "application/javascript",
    "etag": "\"e1-8lhV3sROBYLw0CvVOcuBnaiL/b4\"",
    "mtime": "2023-02-20T09:02:51.009Z",
    "path": "../public/_nuxt/index-4089e5ec.mjs"
  },
  "/_nuxt/index-45a77980.mjs": {
    "type": "application/javascript",
    "etag": "\"e8-6/YS9gf8tFDSWaL6vit4ewuCi9s\"",
    "mtime": "2023-02-20T09:02:51.009Z",
    "path": "../public/_nuxt/index-45a77980.mjs"
  },
  "/_nuxt/index-53e7608f.mjs": {
    "type": "application/javascript",
    "etag": "\"14ab-8UIIAEUpbuc2zpO84dGhVKG7c/Q\"",
    "mtime": "2023-02-20T09:02:51.009Z",
    "path": "../public/_nuxt/index-53e7608f.mjs"
  },
  "/_nuxt/index-6e563a34.mjs": {
    "type": "application/javascript",
    "etag": "\"118-U/LGTz55pAnZVTGePtZ7XRuwTHg\"",
    "mtime": "2023-02-20T09:02:51.009Z",
    "path": "../public/_nuxt/index-6e563a34.mjs"
  },
  "/_nuxt/index-7035bc85.mjs": {
    "type": "application/javascript",
    "etag": "\"824-TKfX9W8lrupgqHRQLxTDfx+6Z94\"",
    "mtime": "2023-02-20T09:02:51.009Z",
    "path": "../public/_nuxt/index-7035bc85.mjs"
  },
  "/_nuxt/index-7c0fa756.mjs": {
    "type": "application/javascript",
    "etag": "\"2cdf-Qta6BpMXXmm1OQbAEz0ppENsaXI\"",
    "mtime": "2023-02-20T09:02:51.010Z",
    "path": "../public/_nuxt/index-7c0fa756.mjs"
  },
  "/_nuxt/index-a1d1a727.mjs": {
    "type": "application/javascript",
    "etag": "\"f0-RwekqqRa0IME5UiJ1+dGyUV/yvQ\"",
    "mtime": "2023-02-20T09:02:51.009Z",
    "path": "../public/_nuxt/index-a1d1a727.mjs"
  },
  "/_nuxt/index-a7078590.mjs": {
    "type": "application/javascript",
    "etag": "\"f0-RwekqqRa0IME5UiJ1+dGyUV/yvQ\"",
    "mtime": "2023-02-20T09:02:51.009Z",
    "path": "../public/_nuxt/index-a7078590.mjs"
  },
  "/_nuxt/index-c72b3aa6.mjs": {
    "type": "application/javascript",
    "etag": "\"f0-RwekqqRa0IME5UiJ1+dGyUV/yvQ\"",
    "mtime": "2023-02-20T09:02:51.009Z",
    "path": "../public/_nuxt/index-c72b3aa6.mjs"
  },
  "/_nuxt/index-dd9fe150.mjs": {
    "type": "application/javascript",
    "etag": "\"1d8a-D6fohVBaND8aelBjVF4ybGRQXHg\"",
    "mtime": "2023-02-20T09:02:51.009Z",
    "path": "../public/_nuxt/index-dd9fe150.mjs"
  },
  "/_nuxt/index-f921bd3d.mjs": {
    "type": "application/javascript",
    "etag": "\"e8-FXzEWS3Jp9gNwda8nm7KL/C4H60\"",
    "mtime": "2023-02-20T09:02:51.010Z",
    "path": "../public/_nuxt/index-f921bd3d.mjs"
  },
  "/_nuxt/logo.457d8669.svg": {
    "type": "image/svg+xml",
    "etag": "\"128e-qqiN4M7oQdxOwWlI1bSqAA8ItqA\"",
    "mtime": "2023-02-20T09:02:51.009Z",
    "path": "../public/_nuxt/logo.457d8669.svg"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"15e5-gPHJfkU5vecPPcwMm53rzGGw1k0\"",
    "mtime": "2023-02-20T09:02:51.088Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/_single_-00dcbee2.mjs": {
    "type": "application/javascript",
    "etag": "\"6c9-hq39O9Fzmn/fFzqzPAXbepdIZe4\"",
    "mtime": "2023-02-20T09:02:51.010Z",
    "path": "../public/_nuxt/_single_-00dcbee2.mjs"
  },
  "/_nuxt/_single_-f8d6263b.mjs": {
    "type": "application/javascript",
    "etag": "\"11b-g6Drt0f+1cuQ9iB+lBBfl35mzO8\"",
    "mtime": "2023-02-20T09:02:51.009Z",
    "path": "../public/_nuxt/_single_-f8d6263b.mjs"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = ["/_nuxt"];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const _f4b49z = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

const _lazy_0gQ51t = () => import('./renderer.mjs').then(function (n) { return n.b; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_0gQ51t, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_0gQ51t, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, nitroApp.h3App.nodeHandler) : new Server$1(nitroApp.h3App.nodeHandler);
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const hostname = process.env.NITRO_HOST || process.env.HOST || "0.0.0.0";
server.listen(port, hostname, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  console.log(`Listening on ${protocol}://${hostname}:${port}${useRuntimeConfig().app.baseURL}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { nodeServer as n, useRuntimeConfig as u };
//# sourceMappingURL=node-server.mjs.map
