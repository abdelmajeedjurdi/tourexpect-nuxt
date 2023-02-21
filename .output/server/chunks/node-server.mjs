globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{"API_BASE_URL":"https://admin.tourexpect.com/api","BASE_URL":"https://admin.tourexpect.com:"}};
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
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
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
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
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

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

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
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
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
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
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
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
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
    let _resSendBody;
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
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
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
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
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

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
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
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/.htaccess": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"270-S2LSs6Ow2gr5zYSUhjByc8SZdBk\"",
    "mtime": "2023-02-09T20:04:23.409Z",
    "size": 624,
    "path": "../public/.htaccess"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-02-09T20:04:23.431Z",
    "size": 0,
    "path": "../public/favicon.ico"
  },
  "/index.php": {
    "type": "application/x-httpd-php",
    "etag": "\"706-8kzeLnR1ZRc281n6i5ijjwI2p7I\"",
    "mtime": "2023-02-09T20:04:23.441Z",
    "size": 1798,
    "path": "../public/index.php"
  },
  "/mix-manifest.json": {
    "type": "application/json",
    "etag": "\"4b-81hJIqTtFoF/WrSGwS7+TBRsg2Q\"",
    "mtime": "2023-02-09T20:04:23.475Z",
    "size": 75,
    "path": "../public/mix-manifest.json"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1a-Ww60UaGmGdV+XIDLkNZIDigz3YA\"",
    "mtime": "2023-02-09T20:04:23.475Z",
    "size": 26,
    "path": "../public/robots.txt"
  },
  "/web.config": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4bb-gdhv4ehOp+htMzqqQuGrkuJ65rQ\"",
    "mtime": "2023-02-09T20:04:23.475Z",
    "size": 1211,
    "path": "../public/web.config"
  },
  "/css/app.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"402328-koj+hdEwR2b10Bi+ZkAuvdwUT9U\"",
    "mtime": "2023-02-09T20:04:23.431Z",
    "size": 4203304,
    "path": "../public/css/app.css"
  },
  "/images/bold.png": {
    "type": "image/png",
    "etag": "\"14046-TxMxbezqNK15fR/LgXhBhtGzsxw\"",
    "mtime": "2023-02-09T20:04:23.431Z",
    "size": 81990,
    "path": "../public/images/bold.png"
  },
  "/images/clean.png": {
    "type": "image/png",
    "etag": "\"f148-OtuKrPTvNoqRGaHHa24HWlX4snY\"",
    "mtime": "2023-02-09T20:04:23.431Z",
    "size": 61768,
    "path": "../public/images/clean.png"
  },
  "/images/default.jpg": {
    "type": "image/jpeg",
    "etag": "\"116d-NbUqyp7esGu89OKgV5Ftms/sZOk\"",
    "mtime": "2023-02-09T20:04:23.431Z",
    "size": 4461,
    "path": "../public/images/default.jpg"
  },
  "/images/elegant.png": {
    "type": "image/png",
    "etag": "\"165a9-srXJTd0Cc49cCJ5gjZ4KbgkwDTg\"",
    "mtime": "2023-02-09T20:04:23.431Z",
    "size": 91561,
    "path": "../public/images/elegant.png"
  },
  "/images/fun.png": {
    "type": "image/png",
    "etag": "\"269f2-9KAKtL5WRzyvhbhCx6dV0OxMj7o\"",
    "mtime": "2023-02-09T20:04:23.431Z",
    "size": 158194,
    "path": "../public/images/fun.png"
  },
  "/images/ha.jpeg": {
    "type": "image/jpeg",
    "etag": "\"36c29-UnX0x+mBqg+pLlIoKHCibPDtcAo\"",
    "mtime": "2023-02-09T20:04:23.439Z",
    "size": 224297,
    "path": "../public/images/ha.jpeg"
  },
  "/images/header-dots.png": {
    "type": "image/png",
    "etag": "\"55d3-/mQtGOJg3k3TMTlvgEXFKuZe2BY\"",
    "mtime": "2023-02-09T20:04:23.439Z",
    "size": 21971,
    "path": "../public/images/header-dots.png"
  },
  "/images/logo.jpg": {
    "type": "image/jpeg",
    "etag": "\"2cf1-HZBG2Vnc3RVo1a0rhNVyTY2XkuI\"",
    "mtime": "2023-02-09T20:04:23.439Z",
    "size": 11505,
    "path": "../public/images/logo.jpg"
  },
  "/images/photographer.jpg": {
    "type": "image/jpeg",
    "etag": "\"15be8-3ZQVCUiI8r/3of3rERTd1PyISoY\"",
    "mtime": "2023-02-09T20:04:23.441Z",
    "size": 89064,
    "path": "../public/images/photographer.jpg"
  },
  "/images/right-side-image.jpg": {
    "type": "image/jpeg",
    "etag": "\"2c9c9-ih+5FdIlpqBXna2ofBfOklcAwVU\"",
    "mtime": "2023-02-09T20:04:23.441Z",
    "size": 182729,
    "path": "../public/images/right-side-image.jpg"
  },
  "/images/rustic.png": {
    "type": "image/png",
    "etag": "\"1fdb2-mBMBuhVLYcGzNcrC/Zk5Ug63Uhg\"",
    "mtime": "2023-02-09T20:04:23.441Z",
    "size": 130482,
    "path": "../public/images/rustic.png"
  },
  "/images/web.png": {
    "type": "image/png",
    "etag": "\"7b704-TbbUa+MqAgpulK6FQ2FwN4FRVN8\"",
    "mtime": "2023-02-09T20:04:23.441Z",
    "size": 505604,
    "path": "../public/images/web.png"
  },
  "/js/app.js": {
    "type": "application/javascript",
    "etag": "\"5b36d9-G4iR9TzGEBI8SM+KHlpxlPRwkm8\"",
    "mtime": "2023-02-09T20:04:23.475Z",
    "size": 5977817,
    "path": "../public/js/app.js"
  },
  "/_nuxt/american_express.2043242a.jpg": {
    "type": "image/jpeg",
    "etag": "\"e508-uWQBH2bhWbOk6TDcZnU/LptxOIs\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 58632,
    "path": "../public/_nuxt/american_express.2043242a.jpg"
  },
  "/_nuxt/apple_pay.109e35d7.jpg": {
    "type": "image/jpeg",
    "etag": "\"9f67-T6rkvZUpuUf8g7woPZ0kjw0M6RE\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 40807,
    "path": "../public/_nuxt/apple_pay.109e35d7.jpg"
  },
  "/_nuxt/ComingSoon.8e21c3f5.js": {
    "type": "application/javascript",
    "etag": "\"107-0bP8e59WdGw5VZ7SnNloJPf5oKw\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 263,
    "path": "../public/_nuxt/ComingSoon.8e21c3f5.js"
  },
  "/_nuxt/composables.829ebbd6.js": {
    "type": "application/javascript",
    "etag": "\"61-osl6mKigSaoJoymEyB78ZdZPm+Q\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 97,
    "path": "../public/_nuxt/composables.829ebbd6.js"
  },
  "/_nuxt/entry.321ac491.js": {
    "type": "application/javascript",
    "etag": "\"8e079-oe3bRdM9ddgnZZzu4FEWnr+lDeA\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 581753,
    "path": "../public/_nuxt/entry.321ac491.js"
  },
  "/_nuxt/entry.6f42f83b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"23bb4-2HSYq5mLeLT1DcTjZQpIBXqC0Po\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 146356,
    "path": "../public/_nuxt/entry.6f42f83b.css"
  },
  "/_nuxt/error-404.0557995d.js": {
    "type": "application/javascript",
    "etag": "\"8cf-PhrVvDU0O4OlXMX/yEFJrA+qMIw\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 2255,
    "path": "../public/_nuxt/error-404.0557995d.js"
  },
  "/_nuxt/error-404.8d64ac55.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-WRog53jTtZnY80+Uv2rnvrqlcOU\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 3696,
    "path": "../public/_nuxt/error-404.8d64ac55.css"
  },
  "/_nuxt/error-500.44e613ec.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-+CwDp+aKlJ0tWK6k415rwjOVM2U\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.44e613ec.css"
  },
  "/_nuxt/error-500.661760c9.js": {
    "type": "application/javascript",
    "etag": "\"778-lzspesrViCp5B5Dni4qxJ8wFZDc\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 1912,
    "path": "../public/_nuxt/error-500.661760c9.js"
  },
  "/_nuxt/error-component.3334ac28.js": {
    "type": "application/javascript",
    "etag": "\"4ad-BgHwDQDc/7jIAITnh3L19GBqeTo\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 1197,
    "path": "../public/_nuxt/error-component.3334ac28.js"
  },
  "/_nuxt/footer-logo.c8bcef80.svg": {
    "type": "image/svg+xml",
    "etag": "\"128c-MuJpQWBBbGrl+kxvYv7KnpsZMVA\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 4748,
    "path": "../public/_nuxt/footer-logo.c8bcef80.svg"
  },
  "/_nuxt/google_pay.0d903dde.jpg": {
    "type": "image/jpeg",
    "etag": "\"3618-4EmG6+E5+mkSWtfb2ZaMyir0kho\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 13848,
    "path": "../public/_nuxt/google_pay.0d903dde.jpg"
  },
  "/_nuxt/hero.f899869c.jpg": {
    "type": "image/jpeg",
    "etag": "\"20547-I8Zp/0DtQu6TALK6YCpFM20teoU\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 132423,
    "path": "../public/_nuxt/hero.f899869c.jpg"
  },
  "/_nuxt/index.0425db2d.js": {
    "type": "application/javascript",
    "etag": "\"115-6R7srOBC39uGaikHBG8dvVmk9zY\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 277,
    "path": "../public/_nuxt/index.0425db2d.js"
  },
  "/_nuxt/index.0f57d486.js": {
    "type": "application/javascript",
    "etag": "\"f0-FurnCL11x4Wa/uzsxQe+Lj9/PeU\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 240,
    "path": "../public/_nuxt/index.0f57d486.js"
  },
  "/_nuxt/index.182169a0.js": {
    "type": "application/javascript",
    "etag": "\"f0-FurnCL11x4Wa/uzsxQe+Lj9/PeU\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 240,
    "path": "../public/_nuxt/index.182169a0.js"
  },
  "/_nuxt/index.1891da00.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"26-3L3PfDFrOzL4OgU+u4a2aY9cMr0\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 38,
    "path": "../public/_nuxt/index.1891da00.css"
  },
  "/_nuxt/index.1a1289e2.js": {
    "type": "application/javascript",
    "etag": "\"14ac-lkjC3kqIZszuGjxS9P1RC10rHe4\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 5292,
    "path": "../public/_nuxt/index.1a1289e2.js"
  },
  "/_nuxt/index.2a69b104.js": {
    "type": "application/javascript",
    "etag": "\"e9-LirCxwWBedknBS+ElUkGv6Xdy0E\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 233,
    "path": "../public/_nuxt/index.2a69b104.js"
  },
  "/_nuxt/index.313fd7ed.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"26a-dl4BHH1BpiNVybZ9n1yiY647AAI\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 618,
    "path": "../public/_nuxt/index.313fd7ed.css"
  },
  "/_nuxt/index.355bcbd3.js": {
    "type": "application/javascript",
    "etag": "\"823-+e80OTlGORbkl2h+Ywydmg0ypD0\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 2083,
    "path": "../public/_nuxt/index.355bcbd3.js"
  },
  "/_nuxt/index.63f19bc2.js": {
    "type": "application/javascript",
    "etag": "\"e9-8sMEmI/cBZdF0vLNfubuy3W1IDA\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 233,
    "path": "../public/_nuxt/index.63f19bc2.js"
  },
  "/_nuxt/index.73f6f77f.js": {
    "type": "application/javascript",
    "etag": "\"f0-FurnCL11x4Wa/uzsxQe+Lj9/PeU\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 240,
    "path": "../public/_nuxt/index.73f6f77f.js"
  },
  "/_nuxt/index.841e179c.js": {
    "type": "application/javascript",
    "etag": "\"e1-cFTMaYfqH+Glbo3gfTO3XpdTNao\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 225,
    "path": "../public/_nuxt/index.841e179c.js"
  },
  "/_nuxt/index.90041394.js": {
    "type": "application/javascript",
    "etag": "\"2cdb-xsi7qd9jH7mux2jf2R+Kk4m+bUs\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 11483,
    "path": "../public/_nuxt/index.90041394.js"
  },
  "/_nuxt/index.9b38e7c5.js": {
    "type": "application/javascript",
    "etag": "\"e6-wpobfCalAo8/BEX0LSv/En8FcME\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 230,
    "path": "../public/_nuxt/index.9b38e7c5.js"
  },
  "/_nuxt/index.9c4be533.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"cc-sn3SePUNMNihHVqnsVdES1FrbuA\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 204,
    "path": "../public/_nuxt/index.9c4be533.css"
  },
  "/_nuxt/index.ad6deb7c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"99-ygrlQk8whvFxSdNjDEVB93sGAUk\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 153,
    "path": "../public/_nuxt/index.ad6deb7c.css"
  },
  "/_nuxt/index.df0f0d8a.js": {
    "type": "application/javascript",
    "etag": "\"f0-FurnCL11x4Wa/uzsxQe+Lj9/PeU\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 240,
    "path": "../public/_nuxt/index.df0f0d8a.js"
  },
  "/_nuxt/index.ecf03380.js": {
    "type": "application/javascript",
    "etag": "\"1e0f-c/i2XaJP6y8e1my8Amuq95wu2yE\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 7695,
    "path": "../public/_nuxt/index.ecf03380.js"
  },
  "/_nuxt/logo.457d8669.svg": {
    "type": "image/svg+xml",
    "etag": "\"128e-qqiN4M7oQdxOwWlI1bSqAA8ItqA\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 4750,
    "path": "../public/_nuxt/logo.457d8669.svg"
  },
  "/_nuxt/mastercard.e76ad166.jpg": {
    "type": "image/jpeg",
    "etag": "\"aca2-KEHSBlG+89ViBbEK1CTZJVjZeWQ\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 44194,
    "path": "../public/_nuxt/mastercard.e76ad166.jpg"
  },
  "/_nuxt/news-letter-img.b6367af2.png": {
    "type": "image/png",
    "etag": "\"c734-kfNzjj+nooLfV881tzJm93v7cQw\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 50996,
    "path": "../public/_nuxt/news-letter-img.b6367af2.png"
  },
  "/_nuxt/union-pay.833ed72d.png": {
    "type": "image/png",
    "etag": "\"c57b-uWP1Z2rYJOsimi+szkj5oGV/L2I\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 50555,
    "path": "../public/_nuxt/union-pay.833ed72d.png"
  },
  "/_nuxt/visa.79b6bdb5.jpg": {
    "type": "image/jpeg",
    "etag": "\"499e-n/bViGSbLwwHp5ahQPPjhdP2mO8\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 18846,
    "path": "../public/_nuxt/visa.79b6bdb5.jpg"
  },
  "/_nuxt/_single_.1891da00.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"26-3L3PfDFrOzL4OgU+u4a2aY9cMr0\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 38,
    "path": "../public/_nuxt/_single_.1891da00.css"
  },
  "/_nuxt/_single_.2280d6f8.js": {
    "type": "application/javascript",
    "etag": "\"6ce-MJzO/Yl1J7IwlG+2lAlvBLEvxi4\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 1742,
    "path": "../public/_nuxt/_single_.2280d6f8.js"
  },
  "/_nuxt/_single_.4772d4eb.js": {
    "type": "application/javascript",
    "etag": "\"118-nFz8Scxkhg8g7j6XTPOT3qRjTds\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 280,
    "path": "../public/_nuxt/_single_.4772d4eb.js"
  },
  "/_nuxt/_single_.f249df06.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"67-aqZ0nLS6Tw6FInJUljhmxT8FAkM\"",
    "mtime": "2023-02-21T21:40:51.065Z",
    "size": 103,
    "path": "../public/_nuxt/_single_.f249df06.css"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

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
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
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
    event.res.end();
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end();
      return;
    }
  }
  if (asset.type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.getHeader("ETag")) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.getHeader("Last-Modified")) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.res.getHeader("Content-Encoding")) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size && !event.res.getHeader("Content-Length")) {
    event.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_0gQ51t = () => import('./renderer.mjs');

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
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
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
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
