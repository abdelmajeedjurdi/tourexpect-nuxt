import { getCurrentInstance, inject, unref, computed, reactive, version, defineComponent, h, onUnmounted, Suspense, nextTick, Transition, provide, useSSRContext, ref, onServerPrefetch, resolveComponent, shallowRef, watch, Fragment as Fragment$1, mergeProps, withCtx, createVNode, createApp, toRef, isRef, effectScope, withAsyncContext, createTextVNode, toDisplayString, defineAsyncComponent, onErrorCaptured, Text } from 'vue';
import { $fetch as $fetch$1 } from 'ofetch';
import { createHooks } from 'hookable';
import { getContext, executeAsync } from 'unctx';
import { hasProtocol, isEqual, joinURL, parseURL } from 'ufo';
import { createError as createError$1, sendRedirect } from 'h3';
import { useHead, createHead as createHead$1 } from '@unhead/vue';
import { renderDOMHead, debouncedRenderDOMHead } from '@unhead/dom';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, useRouter as useRouter$1 } from 'vue-router';
import { CoreWarnCodes, CompileErrorCodes, registerMessageResolver, resolveValue, registerLocaleFallbacker, fallbackWithLocaleChain, setDevToolsHook, createCompileError, DEFAULT_LOCALE as DEFAULT_LOCALE$1, updateFallbackLocale, NUMBER_FORMAT_OPTIONS_KEYS, DATETIME_FORMAT_OPTIONS_KEYS, setFallbackContext, createCoreContext, clearDateTimeFormat, clearNumberFormat, setAdditionalMeta, getFallbackContext, NOT_REOSLVED, parseTranslateArgs, translate, MISSING_RESOLVE_VALUE, parseDateTimeArgs, datetime, parseNumberArgs, number } from '@intlify/core-base';
import { parse, serialize } from 'cookie-es';
import isHTTPS from 'is-https';
import SwiperClass, { Navigation, Pagination, Autoplay, Parallax, EffectFade, Virtual } from 'Swiper';
import VueAwesomeSwiper, { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import vClickOutside from 'click-outside-vue3';
import VueTelInput from 'vue-tel-input';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderSuspense } from 'vue/server-renderer';
import { hash } from 'ohash';
import { defu } from 'defu';
import { a as useRuntimeConfig$1 } from './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa;
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter$1(nuxtApp, $name, value);
    defineGetter$1(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter$1(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter$1(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a2;
      if (prop === "public") {
        return target.public;
      }
      return (_a2 = target[prop]) != null ? _a2 : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return null;
    }
    if (plugin.length > 1) {
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    return plugin;
  }).filter(Boolean);
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter$1(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const getDefault = () => null;
function useAsyncData(...args) {
  var _a2, _b2, _c2, _d2, _e2, _f2, _g2;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b2 = options.default) != null ? _b2 : getDefault;
  options.lazy = (_c2 = options.lazy) != null ? _c2 : false;
  options.immediate = (_d2 = options.immediate) != null ? _d2 : true;
  const nuxt = useNuxtApp();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref((_g2 = (_f2 = getCachedData()) != null ? _f2 : (_e2 = options.default) == null ? void 0 : _e2.call(options)) != null ? _g2 : null),
      pending: ref(!hasCachedData()),
      error: ref(nuxt.payload._errors[key] ? createError(nuxt.payload._errors[key]) : null)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    const promise = new Promise(
      (resolve2, reject) => {
        try {
          resolve2(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      var _a3, _b3;
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref((_b3 = (_a3 = options.default) == null ? void 0 : _a3.call(options)) != null ? _b3 : null);
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    onServerPrefetch(() => promise);
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useRouter = () => {
  var _a2;
  return (_a2 = useNuxtApp()) == null ? void 0 : _a2.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = hasProtocol(toPath, true);
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, (options == null ? void 0 : options.redirectCode) || 302));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || hash([autoKey, unref(opts.baseURL), typeof request === "string" ? request : "", unref(opts.params)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return unref(r);
  });
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch: watch2,
    immediate,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    watch: [
      _fetchOptions,
      _request,
      ...watch2 || []
    ]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a2;
    (_a2 = controller == null ? void 0 : controller.abort) == null ? void 0 : _a2.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    return $fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function useRequestHeaders(include) {
  var _a2, _b2;
  const headers = (_b2 = (_a2 = useNuxtApp().ssrContext) == null ? void 0 : _a2.event.node.req.headers) != null ? _b2 : {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.map((key) => key.toLowerCase()).filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a2;
  return (_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.event;
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  return defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        return props.to || props.href || "";
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      const prefetched = ref(false);
      const el = void 0;
      return () => {
        var _a2, _b2, _c2;
        if (!isExternal.value) {
          return h(
            resolveComponent("RouterLink"),
            {
              ref: void 0,
              to: to.value,
              ...prefetched.value && !props.custom ? { class: props.prefetchedClass || options.prefetchedClass } : {},
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? (_b2 = (_a2 = router.resolve(to.value)) == null ? void 0 : _a2.href) != null ? _b2 : null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate2 = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate: navigate2,
            route: router.resolve(href),
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_c2 = slots.default) == null ? void 0 : _c2.call(slots));
      };
    }
  });
}
const __nuxt_component_0$1 = defineNuxtLink({ componentName: "NuxtLink" });
function isObject$1(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject$1(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject$1(value) && isObject$1(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => arguments_.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defuFn = createDefu((object, key, currentValue) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
const inlineConfig = {};
defuFn(inlineConfig);
const components = {};
const _nuxt_components_plugin_mjs_KR1HBZs4kY = defineNuxtPlugin((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
});
function createHead(initHeadObject) {
  const unhead = createHead$1();
  const legacyHead = {
    unhead,
    install(app) {
      if (version.startsWith("3")) {
        app.config.globalProperties.$head = unhead;
        app.provide("usehead", unhead);
      }
    },
    use(plugin) {
      unhead.use(plugin);
    },
    resolveTags() {
      return unhead.resolveTags();
    },
    headEntries() {
      return unhead.headEntries();
    },
    headTags() {
      return unhead.resolveTags();
    },
    push(input, options) {
      return unhead.push(input, options);
    },
    addEntry(input, options) {
      return unhead.push(input, options);
    },
    addHeadObjs(input, options) {
      return unhead.push(input, options);
    },
    addReactiveEntry(input, options) {
      const api = useHead(input, options);
      if (typeof api !== "undefined")
        return api.dispose;
      return () => {
      };
    },
    removeHeadObjs() {
    },
    updateDOM(document2, force) {
      if (force)
        renderDOMHead(unhead, { document: document2 });
      else
        debouncedRenderDOMHead(unhead, { delayFn: (fn) => setTimeout(() => fn(), 50), document: document2 });
    },
    internalHooks: unhead.hooks,
    hooks: {
      "before:dom": [],
      "resolved:tags": [],
      "resolved:entries": []
    }
  };
  unhead.addHeadObjs = legacyHead.addHeadObjs;
  unhead.updateDOM = legacyHead.updateDOM;
  unhead.hooks.hook("dom:beforeRender", (ctx) => {
    for (const hook of legacyHead.hooks["before:dom"]) {
      if (hook() === false)
        ctx.shouldRender = false;
    }
  });
  if (initHeadObject)
    legacyHead.addHeadObjs(initHeadObject);
  return legacyHead;
}
version.startsWith("2.");
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [], "noscript": [] };
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  head.push(appHead);
  nuxtApp.vueApp.use(head);
  nuxtApp._useHead = useHead;
  {
    nuxtApp.ssrContext.renderMeta = async () => {
      const { renderSSRHead } = await import('@unhead/ssr');
      const meta = await renderSSRHead(head.unhead);
      return {
        ...meta,
        bodyScriptsPrepend: meta.bodyTagsOpen,
        bodyScripts: meta.bodyTags
      };
    };
  }
});
const __nuxt_page_meta$e = {};
const __nuxt_page_meta$d = {};
const __nuxt_page_meta$c = {};
const __nuxt_page_meta$b = {};
const __nuxt_page_meta$a = {};
const __nuxt_page_meta$9 = {};
const __nuxt_page_meta$8 = {};
const __nuxt_page_meta$7 = {};
const __nuxt_page_meta$6 = {};
const __nuxt_page_meta$5 = {};
const __nuxt_page_meta$4 = {};
const __nuxt_page_meta$3 = {};
const __nuxt_page_meta$2 = {};
const __nuxt_page_meta$1 = {};
const __nuxt_page_meta = {};
const _routes = [
  {
    name: (_a = __nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.name) != null ? _a : "about___en",
    path: (_b = __nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.path) != null ? _b : "/about",
    file: "F:/tourexpect-nuxt/pages/about/index.vue",
    children: [],
    meta: __nuxt_page_meta$e,
    alias: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.alias) || [],
    redirect: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.redirect) || void 0,
    component: () => import('./index.38da5b62.mjs').then((m) => m.default || m)
  },
  {
    name: (_c = __nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.name) != null ? _c : "about___ar",
    path: (_d = __nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.path) != null ? _d : "/ar/about",
    file: "F:/tourexpect-nuxt/pages/about/index.vue",
    children: [],
    meta: __nuxt_page_meta$e,
    alias: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.alias) || [],
    redirect: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.redirect) || void 0,
    component: () => import('./index.38da5b62.mjs').then((m) => m.default || m)
  },
  {
    name: (_e = __nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.name) != null ? _e : "activities___en",
    path: (_f = __nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.path) != null ? _f : "/activities",
    file: "F:/tourexpect-nuxt/pages/activities/index.vue",
    children: [],
    meta: __nuxt_page_meta$d,
    alias: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.alias) || [],
    redirect: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.redirect) || void 0,
    component: () => import('./index.152b853c.mjs').then((m) => m.default || m)
  },
  {
    name: (_g = __nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.name) != null ? _g : "activities___ar",
    path: (_h = __nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.path) != null ? _h : "/ar/activities",
    file: "F:/tourexpect-nuxt/pages/activities/index.vue",
    children: [],
    meta: __nuxt_page_meta$d,
    alias: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.alias) || [],
    redirect: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.redirect) || void 0,
    component: () => import('./index.152b853c.mjs').then((m) => m.default || m)
  },
  {
    name: (_i = __nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.name) != null ? _i : "blogs___en",
    path: (_j = __nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.path) != null ? _j : "/blogs",
    file: "F:/tourexpect-nuxt/pages/blogs/index.vue",
    children: [],
    meta: __nuxt_page_meta$c,
    alias: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.alias) || [],
    redirect: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.redirect) || void 0,
    component: () => import('./index.18fb988a.mjs').then((m) => m.default || m)
  },
  {
    name: (_k = __nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.name) != null ? _k : "blogs___ar",
    path: (_l = __nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.path) != null ? _l : "/ar/blogs",
    file: "F:/tourexpect-nuxt/pages/blogs/index.vue",
    children: [],
    meta: __nuxt_page_meta$c,
    alias: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.alias) || [],
    redirect: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.redirect) || void 0,
    component: () => import('./index.18fb988a.mjs').then((m) => m.default || m)
  },
  {
    name: (_m = __nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.name) != null ? _m : "contact___en",
    path: (_n = __nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.path) != null ? _n : "/contact",
    file: "F:/tourexpect-nuxt/pages/contact/index.vue",
    children: [],
    meta: __nuxt_page_meta$b,
    alias: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.alias) || [],
    redirect: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.redirect) || void 0,
    component: () => import('./index.df16d007.mjs').then((m) => m.default || m)
  },
  {
    name: (_o = __nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.name) != null ? _o : "contact___ar",
    path: (_p = __nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.path) != null ? _p : "/ar/contact",
    file: "F:/tourexpect-nuxt/pages/contact/index.vue",
    children: [],
    meta: __nuxt_page_meta$b,
    alias: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.alias) || [],
    redirect: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.redirect) || void 0,
    component: () => import('./index.df16d007.mjs').then((m) => m.default || m)
  },
  {
    name: (_q = __nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.name) != null ? _q : "destinations-country-single___en",
    path: (_r = __nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.path) != null ? _r : "/destinations/:country/:single",
    file: "F:/tourexpect-nuxt/pages/destinations/[country]/[single].vue",
    children: [],
    meta: __nuxt_page_meta$a,
    alias: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.alias) || [],
    redirect: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.redirect) || void 0,
    component: () => import('./_single_.1b529cd0.mjs').then((m) => m.default || m)
  },
  {
    name: (_s = __nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.name) != null ? _s : "destinations-country-single___ar",
    path: (_t = __nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.path) != null ? _t : "/ar/destinations/:country/:single",
    file: "F:/tourexpect-nuxt/pages/destinations/[country]/[single].vue",
    children: [],
    meta: __nuxt_page_meta$a,
    alias: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.alias) || [],
    redirect: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.redirect) || void 0,
    component: () => import('./_single_.1b529cd0.mjs').then((m) => m.default || m)
  },
  {
    name: (_u = __nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.name) != null ? _u : "destinations-country___en",
    path: (_v = __nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.path) != null ? _v : "/destinations/:country",
    file: "F:/tourexpect-nuxt/pages/destinations/[country]/index.vue",
    children: [],
    meta: __nuxt_page_meta$9,
    alias: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.alias) || [],
    redirect: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.redirect) || void 0,
    component: () => import('./index.c5a088aa.mjs').then((m) => m.default || m)
  },
  {
    name: (_w = __nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.name) != null ? _w : "destinations-country___ar",
    path: (_x = __nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.path) != null ? _x : "/ar/destinations/:country",
    file: "F:/tourexpect-nuxt/pages/destinations/[country]/index.vue",
    children: [],
    meta: __nuxt_page_meta$9,
    alias: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.alias) || [],
    redirect: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.redirect) || void 0,
    component: () => import('./index.c5a088aa.mjs').then((m) => m.default || m)
  },
  {
    name: (_y = __nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.name) != null ? _y : "destinations___en",
    path: (_z = __nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.path) != null ? _z : "/destinations",
    file: "F:/tourexpect-nuxt/pages/destinations/index.vue",
    children: [],
    meta: __nuxt_page_meta$8,
    alias: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.alias) || [],
    redirect: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.redirect) || void 0,
    component: () => import('./index.3c70bbe0.mjs').then((m) => m.default || m)
  },
  {
    name: (_A = __nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.name) != null ? _A : "destinations___ar",
    path: (_B = __nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.path) != null ? _B : "/ar/destinations",
    file: "F:/tourexpect-nuxt/pages/destinations/index.vue",
    children: [],
    meta: __nuxt_page_meta$8,
    alias: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.alias) || [],
    redirect: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.redirect) || void 0,
    component: () => import('./index.3c70bbe0.mjs').then((m) => m.default || m)
  },
  {
    name: (_C = __nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.name) != null ? _C : "hotels-and-resorts___en",
    path: (_D = __nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.path) != null ? _D : "/hotels-and-resorts",
    file: "F:/tourexpect-nuxt/pages/hotels-and-resorts/index.vue",
    children: [],
    meta: __nuxt_page_meta$7,
    alias: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.alias) || [],
    redirect: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.redirect) || void 0,
    component: () => import('./index.f2e2e52d.mjs').then((m) => m.default || m)
  },
  {
    name: (_E = __nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.name) != null ? _E : "hotels-and-resorts___ar",
    path: (_F = __nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.path) != null ? _F : "/ar/hotels-and-resorts",
    file: "F:/tourexpect-nuxt/pages/hotels-and-resorts/index.vue",
    children: [],
    meta: __nuxt_page_meta$7,
    alias: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.alias) || [],
    redirect: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.redirect) || void 0,
    component: () => import('./index.f2e2e52d.mjs').then((m) => m.default || m)
  },
  {
    name: (_G = __nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.name) != null ? _G : "index___en",
    path: (_H = __nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.path) != null ? _H : "/",
    file: "F:/tourexpect-nuxt/pages/index.vue",
    children: [],
    meta: __nuxt_page_meta$6,
    alias: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.alias) || [],
    redirect: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.redirect) || void 0,
    component: () => import('./index.5497e9c0.mjs').then((m) => m.default || m)
  },
  {
    name: (_I = __nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.name) != null ? _I : "index___ar",
    path: (_J = __nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.path) != null ? _J : "/ar",
    file: "F:/tourexpect-nuxt/pages/index.vue",
    children: [],
    meta: __nuxt_page_meta$6,
    alias: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.alias) || [],
    redirect: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.redirect) || void 0,
    component: () => import('./index.5497e9c0.mjs').then((m) => m.default || m)
  },
  {
    name: (_K = __nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.name) != null ? _K : "packages___en",
    path: (_L = __nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.path) != null ? _L : "/packages",
    file: "F:/tourexpect-nuxt/pages/packages/index.vue",
    children: [],
    meta: __nuxt_page_meta$5,
    alias: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.alias) || [],
    redirect: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.redirect) || void 0,
    component: () => import('./index.03b7803b.mjs').then((m) => m.default || m)
  },
  {
    name: (_M = __nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.name) != null ? _M : "packages___ar",
    path: (_N = __nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.path) != null ? _N : "/ar/packages",
    file: "F:/tourexpect-nuxt/pages/packages/index.vue",
    children: [],
    meta: __nuxt_page_meta$5,
    alias: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.alias) || [],
    redirect: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.redirect) || void 0,
    component: () => import('./index.03b7803b.mjs').then((m) => m.default || m)
  },
  {
    name: (_O = __nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.name) != null ? _O : "test___en",
    path: (_P = __nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.path) != null ? _P : "/test",
    file: "F:/tourexpect-nuxt/pages/test/index.vue",
    children: [],
    meta: __nuxt_page_meta$4,
    alias: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.alias) || [],
    redirect: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.redirect) || void 0,
    component: () => import('./index.58bd54ad.mjs').then((m) => m.default || m)
  },
  {
    name: (_Q = __nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.name) != null ? _Q : "test___ar",
    path: (_R = __nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.path) != null ? _R : "/ar/test",
    file: "F:/tourexpect-nuxt/pages/test/index.vue",
    children: [],
    meta: __nuxt_page_meta$4,
    alias: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.alias) || [],
    redirect: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.redirect) || void 0,
    component: () => import('./index.58bd54ad.mjs').then((m) => m.default || m)
  },
  {
    name: (_S = __nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.name) != null ? _S : "tours-country-single___en",
    path: (_T = __nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.path) != null ? _T : "/tours/:country/:single",
    file: "F:/tourexpect-nuxt/pages/tours/[country]/[single].vue",
    children: [],
    meta: __nuxt_page_meta$3,
    alias: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.alias) || [],
    redirect: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.redirect) || void 0,
    component: () => import('./_single_.dc9f6193.mjs').then((m) => m.default || m)
  },
  {
    name: (_U = __nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.name) != null ? _U : "tours-country-single___ar",
    path: (_V = __nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.path) != null ? _V : "/ar/tours/:country/:single",
    file: "F:/tourexpect-nuxt/pages/tours/[country]/[single].vue",
    children: [],
    meta: __nuxt_page_meta$3,
    alias: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.alias) || [],
    redirect: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.redirect) || void 0,
    component: () => import('./_single_.dc9f6193.mjs').then((m) => m.default || m)
  },
  {
    name: (_W = __nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.name) != null ? _W : "tours-country___en",
    path: (_X = __nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.path) != null ? _X : "/tours/:country",
    file: "F:/tourexpect-nuxt/pages/tours/[country]/index.vue",
    children: [],
    meta: __nuxt_page_meta$2,
    alias: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.alias) || [],
    redirect: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.redirect) || void 0,
    component: () => import('./index.2038dd33.mjs').then((m) => m.default || m)
  },
  {
    name: (_Y = __nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.name) != null ? _Y : "tours-country___ar",
    path: (_Z = __nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.path) != null ? _Z : "/ar/tours/:country",
    file: "F:/tourexpect-nuxt/pages/tours/[country]/index.vue",
    children: [],
    meta: __nuxt_page_meta$2,
    alias: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.alias) || [],
    redirect: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.redirect) || void 0,
    component: () => import('./index.2038dd33.mjs').then((m) => m.default || m)
  },
  {
    name: (__ = __nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.name) != null ? __ : "tours___en",
    path: (_$ = __nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.path) != null ? _$ : "/tours",
    file: "F:/tourexpect-nuxt/pages/tours/index.vue",
    children: [],
    meta: __nuxt_page_meta$1,
    alias: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.alias) || [],
    redirect: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.redirect) || void 0,
    component: () => import('./index.9e48ec1b.mjs').then((m) => m.default || m)
  },
  {
    name: (_aa = __nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.name) != null ? _aa : "tours___ar",
    path: (_ba = __nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.path) != null ? _ba : "/ar/tours",
    file: "F:/tourexpect-nuxt/pages/tours/index.vue",
    children: [],
    meta: __nuxt_page_meta$1,
    alias: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.alias) || [],
    redirect: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.redirect) || void 0,
    component: () => import('./index.9e48ec1b.mjs').then((m) => m.default || m)
  },
  {
    name: (_ca = __nuxt_page_meta == null ? void 0 : __nuxt_page_meta.name) != null ? _ca : "transfer___en",
    path: (_da = __nuxt_page_meta == null ? void 0 : __nuxt_page_meta.path) != null ? _da : "/transfer",
    file: "F:/tourexpect-nuxt/pages/transfer/index.vue",
    children: [],
    meta: __nuxt_page_meta,
    alias: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.alias) || [],
    redirect: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect) || void 0,
    component: () => import('./index.61a73eef.mjs').then((m) => m.default || m)
  },
  {
    name: (_ea = __nuxt_page_meta == null ? void 0 : __nuxt_page_meta.name) != null ? _ea : "transfer___ar",
    path: (_fa = __nuxt_page_meta == null ? void 0 : __nuxt_page_meta.path) != null ? _fa : "/ar/transfer",
    file: "F:/tourexpect-nuxt/pages/transfer/index.vue",
    children: [],
    meta: __nuxt_page_meta,
    alias: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.alias) || [],
    redirect: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect) || void 0,
    component: () => import('./index.61a73eef.mjs').then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => {
      var _a2;
      return !!((_a2 = route.meta.pageTransition) != null ? _a2 : appPageTransition);
    };
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve2) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve2(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(a, b) {
  const samePageComponent = a.matched[0] === b.matched[0];
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(a.params) !== JSON.stringify(b.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = defineNuxtRouteMiddleware(async (to) => {
  var _a2;
  let __temp, __restore;
  if (!((_a2 = to.meta) == null ? void 0 : _a2.validate)) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (typeof result === "boolean") {
    return result;
  }
  return createError(result);
});
const globalMiddleware = [
  validate
];
const namedMiddleware = {};
const node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB = defineNuxtPlugin(async (nuxtApp) => {
  var _a2, _b2, _c2, _d2;
  let __temp, __restore;
  let routerBase = useRuntimeConfig().app.baseURL;
  if (routerOptions.hashMode && !routerBase.includes("#")) {
    routerBase += "#";
  }
  const history = (_b2 = (_a2 = routerOptions.history) == null ? void 0 : _a2.call(routerOptions, routerBase)) != null ? _b2 : createMemoryHistory(routerBase);
  const routes = (_d2 = (_c2 = routerOptions.routes) == null ? void 0 : _c2.call(routerOptions, _routes)) != null ? _d2 : _routes;
  const initialURL = nuxtApp.ssrContext.url;
  const router = createRouter({
    ...routerOptions,
    history,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a3, _b3, _c3, _d3;
    if (((_b3 = (_a3 = to.matched[0]) == null ? void 0 : _a3.components) == null ? void 0 : _b3.default) === ((_d3 = (_c3 = from.matched[0]) == null ? void 0 : _c3.components) == null ? void 0 : _d3.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = computed(() => _route.value[key]);
  }
  nuxtApp._route = reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      ;
      [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      ;
    }
    ;
    [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    ;
  } catch (error2) {
    callWithNuxt(nuxtApp, showError, [error2]);
  }
  const initialLayout = useState("_layout");
  router.beforeEach(async (to, from) => {
    var _a3, _b3;
    to.meta = reactive(to.meta);
    if (nuxtApp.isHydrating) {
      to.meta.layout = (_a3 = initialLayout.value) != null ? _a3 : to.meta.layout;
    }
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b3 = namedMiddleware[entry2]) == null ? void 0 : _b3.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError$1({
            statusCode: 404,
            statusMessage: `Page Not Found: ${initialURL}`
          });
          await callWithNuxt(nuxtApp, showError, [error2]);
          return false;
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, showError, [createError$1({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      callWithNuxt(nuxtApp, showError, [error2]);
    }
  });
  return { provide: { router } };
});
const node_modules__64nuxtjs_i18n_dist_runtime_plugins_composition_mjs_sLxaNGmlSL = defineNuxtPlugin(() => {
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var shared$1 = { exports: {} };
var shared_prod = {};
/*!
  * shared v9.3.0-beta.11
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var hasRequiredShared_prod;
function requireShared_prod() {
  if (hasRequiredShared_prod)
    return shared_prod;
  hasRequiredShared_prod = 1;
  Object.defineProperty(shared_prod, "__esModule", { value: true });
  const inBrowser = false;
  let mark;
  let measure;
  const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
  function format(message, ...args) {
    if (args.length === 1 && isObject2(args[0])) {
      args = args[0];
    }
    if (!args || !args.hasOwnProperty) {
      args = {};
    }
    return message.replace(RE_ARGS, (match, identifier) => {
      return args.hasOwnProperty(identifier) ? args[identifier] : "";
    });
  }
  const makeSymbol2 = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
  const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
  const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
  const isNumber = (val) => typeof val === "number" && isFinite(val);
  const isDate = (val) => toTypeString(val) === "[object Date]";
  const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
  const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
  function warn2(msg, err) {
    if (typeof console !== "undefined") {
      console.warn(`[intlify] ` + msg);
      if (err) {
        console.warn(err.stack);
      }
    }
  }
  const assign2 = Object.assign;
  let _globalThis;
  const getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
  };
  function escapeHtml(rawText) {
    return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }
  const isArray2 = Array.isArray;
  const isFunction2 = (val) => typeof val === "function";
  const isString2 = (val) => typeof val === "string";
  const isBoolean2 = (val) => typeof val === "boolean";
  const isSymbol2 = (val) => typeof val === "symbol";
  const isObject2 = (val) => val !== null && typeof val === "object";
  const isPromise = (val) => {
    return isObject2(val) && isFunction2(val.then) && isFunction2(val.catch);
  };
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const isPlainObject = (val) => toTypeString(val) === "[object Object]";
  const toDisplayString2 = (val) => {
    return val == null ? "" : isArray2(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
  };
  const RANGE = 2;
  function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (let j = i - RANGE; j <= i + RANGE || end > count; j++) {
          if (j < 0 || j >= lines.length)
            continue;
          const line = j + 1;
          res.push(`${line}${" ".repeat(3 - String(line).length)}|  ${lines[j]}`);
          const lineLength = lines[j].length;
          if (j === i) {
            const pad = start - (count - lineLength) + 1;
            const length = Math.max(1, end > count ? lineLength - pad : end - start);
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + 1;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }
  function createEmitter() {
    const events = /* @__PURE__ */ new Map();
    const emitter = {
      events,
      on(event, handler) {
        const handlers = events.get(event);
        const added = handlers && handlers.push(handler);
        if (!added) {
          events.set(event, [handler]);
        }
      },
      off(event, handler) {
        const handlers = events.get(event);
        if (handlers) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        }
      },
      emit(event, payload) {
        (events.get(event) || []).slice().map((handler) => handler(payload));
        (events.get("*") || []).slice().map((handler) => handler(event, payload));
      }
    };
    return emitter;
  }
  shared_prod.assign = assign2;
  shared_prod.createEmitter = createEmitter;
  shared_prod.escapeHtml = escapeHtml;
  shared_prod.format = format;
  shared_prod.friendlyJSONstringify = friendlyJSONstringify;
  shared_prod.generateCodeFrame = generateCodeFrame;
  shared_prod.generateFormatCacheKey = generateFormatCacheKey;
  shared_prod.getGlobalThis = getGlobalThis;
  shared_prod.hasOwn = hasOwn;
  shared_prod.inBrowser = inBrowser;
  shared_prod.isArray = isArray2;
  shared_prod.isBoolean = isBoolean2;
  shared_prod.isDate = isDate;
  shared_prod.isEmptyObject = isEmptyObject;
  shared_prod.isFunction = isFunction2;
  shared_prod.isNumber = isNumber;
  shared_prod.isObject = isObject2;
  shared_prod.isPlainObject = isPlainObject;
  shared_prod.isPromise = isPromise;
  shared_prod.isRegExp = isRegExp;
  shared_prod.isString = isString2;
  shared_prod.isSymbol = isSymbol2;
  shared_prod.makeSymbol = makeSymbol2;
  shared_prod.mark = mark;
  shared_prod.measure = measure;
  shared_prod.objectToString = objectToString;
  shared_prod.toDisplayString = toDisplayString2;
  shared_prod.toTypeString = toTypeString;
  shared_prod.warn = warn2;
  return shared_prod;
}
(function(module) {
  {
    module.exports = requireShared_prod();
  }
})(shared$1);
/*!
  * vue-i18n v9.3.0-beta.16
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION = "9.3.0-beta.16";
function initFeatureFlags() {
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    shared$1.exports.getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
CoreWarnCodes.__EXTEND_POINT__;
let code = CompileErrorCodes.__EXTEND_POINT__;
const inc = () => ++code;
const I18nErrorCodes = {
  UNEXPECTED_RETURN_TYPE: code,
  INVALID_ARGUMENT: inc(),
  MUST_BE_CALL_SETUP_TOP: inc(),
  NOT_INSLALLED: inc(),
  NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
  REQUIRED_VALUE: inc(),
  INVALID_VALUE: inc(),
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
  NOT_INSLALLED_WITH_PROVIDE: inc(),
  UNEXPECTED_ERROR: inc(),
  NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
  BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
  __EXTEND_POINT__: inc()
};
function createI18nError(code2, ...args) {
  return createCompileError(code2, null, void 0);
}
const TranslateVNodeSymbol = /* @__PURE__ */ shared$1.exports.makeSymbol("__translateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ shared$1.exports.makeSymbol("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ shared$1.exports.makeSymbol("__numberParts");
const SetPluralRulesSymbol = shared$1.exports.makeSymbol("__setPluralRules");
shared$1.exports.makeSymbol("__intlifyMeta");
const InejctWithOption = /* @__PURE__ */ shared$1.exports.makeSymbol("__injectWithOption");
function handleFlatJson(obj) {
  if (!shared$1.exports.isObject(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!shared$1.exports.hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (shared$1.exports.isObject(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      for (let i = 0; i < lastIndex; i++) {
        if (!(subKeys[i] in currentObj)) {
          currentObj[subKeys[i]] = {};
        }
        currentObj = currentObj[subKeys[i]];
      }
      currentObj[subKeys[lastIndex]] = obj[key];
      delete obj[key];
      if (shared$1.exports.isObject(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const { messages, __i18n, messageResolver, flatJson } = options;
  const ret = shared$1.exports.isPlainObject(messages) ? messages : shared$1.exports.isArray(__i18n) ? {} : { [locale]: {} };
  if (shared$1.exports.isArray(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale2, resource } = custom;
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy$1(resource, ret[locale2]);
        } else {
          deepCopy$1(resource, ret);
        }
      } else {
        shared$1.exports.isString(custom) && deepCopy$1(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (shared$1.exports.hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
const isNotObjectOrIsArray = (val) => !shared$1.exports.isObject(val) || shared$1.exports.isArray(val);
function deepCopy$1(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
  for (const key in src) {
    if (shared$1.exports.hasOwn(src, key)) {
      if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
        des[key] = src[key];
      } else {
        deepCopy$1(src[key], des[key]);
      }
    }
  }
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(global2, options, componentOptions) {
  let messages = shared$1.exports.isObject(options.messages) ? options.messages : {};
  if ("__i18nGlobal" in componentOptions) {
    messages = getLocaleMessages(globalThis.locale.value, {
      messages,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages);
  if (locales.length) {
    locales.forEach((locale) => {
      global2.mergeLocaleMessage(locale, messages[locale]);
    });
  }
  {
    if (shared$1.exports.isObject(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (shared$1.exports.isObject(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return createVNode(Text, null, key, 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, getCurrentInstance() || void 0, type);
  };
}
const getMetaInfo = () => {
  const instance = getCurrentInstance();
  let meta = null;
  return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
};
function createComposer(options = {}, VueI18nLegacy) {
  const { __root } = options;
  const _isGlobal = __root === void 0;
  let _inheritLocale = shared$1.exports.isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = ref(
    __root && _inheritLocale ? __root.locale.value : shared$1.exports.isString(options.locale) ? options.locale : DEFAULT_LOCALE$1
  );
  const _fallbackLocale = ref(
    __root && _inheritLocale ? __root.fallbackLocale.value : shared$1.exports.isString(options.fallbackLocale) || shared$1.exports.isArray(options.fallbackLocale) || shared$1.exports.isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = ref(shared$1.exports.isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = ref(shared$1.exports.isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : shared$1.exports.isBoolean(options.missingWarn) || shared$1.exports.isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : shared$1.exports.isBoolean(options.fallbackWarn) || shared$1.exports.isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : shared$1.exports.isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = shared$1.exports.isFunction(options.missing) ? options.missing : null;
  let _runtimeMissing = shared$1.exports.isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = shared$1.exports.isFunction(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : shared$1.exports.isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : shared$1.exports.isPlainObject(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  const getCoreContext = () => {
    _isGlobal && setFallbackContext(null);
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = shared$1.exports.isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = shared$1.exports.isPlainObject(_context) ? _context.__numberFormatters : void 0;
    }
    const ctx = createCoreContext(ctxOptions);
    _isGlobal && setFallbackContext(ctx);
    return ctx;
  };
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages = computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return shared$1.exports.isFunction(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
    trackReactivityValues();
    let ret;
    if (__INTLIFY_PROD_DEVTOOLS__) {
      try {
        setAdditionalMeta(getMetaInfo());
        if (!_isGlobal) {
          _context.fallbackContext = __root ? getFallbackContext() : void 0;
        }
        ret = fn(_context);
      } finally {
        setAdditionalMeta(null);
        if (!_isGlobal) {
          _context.fallbackContext = void 0;
        }
      }
    } else {
      ret = fn(_context);
    }
    if (shared$1.exports.isNumber(ret) && ret === NOT_REOSLVED) {
      const [key, arg2] = argumentParser();
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  };
  function t(...args) {
    return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => shared$1.exports.isString(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !shared$1.exports.isObject(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t(...[arg1, arg2, shared$1.exports.assign({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => shared$1.exports.isString(val));
  }
  function n(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => shared$1.exports.isString(val));
  }
  function normalize(values) {
    return values.map((val) => shared$1.exports.isString(val) || shared$1.exports.isNumber(val) || shared$1.exports.isBoolean(val) ? createTextNode(String(val)) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function translateVNode(...args) {
    return wrapWithDeps(
      (context) => {
        let ret;
        const _context2 = context;
        try {
          _context2.processor = processor;
          ret = Reflect.apply(translate, null, [_context2, ...args]);
        } finally {
          _context2.processor = null;
        }
        return ret;
      },
      () => parseTranslateArgs(...args),
      "translate",
      (root) => root[TranslateVNodeSymbol](...args),
      (key) => [createTextNode(key)],
      (val) => shared$1.exports.isArray(val)
    );
  }
  function numberParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(number, null, [context, ...args]),
      () => parseNumberArgs(...args),
      "number format",
      (root) => root[NumberPartsSymbol](...args),
      () => [],
      (val) => shared$1.exports.isString(val) || shared$1.exports.isArray(val)
    );
  }
  function datetimeParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(datetime, null, [context, ...args]),
      () => parseDateTimeArgs(...args),
      "datetime format",
      (root) => root[DatetimePartsSymbol](...args),
      () => [],
      (val) => shared$1.exports.isString(val) || shared$1.exports.isArray(val)
    );
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te(key, locale2) {
    const targetLocale = shared$1.exports.isString(locale2) ? locale2 : _locale.value;
    const message = getLocaleMessage(targetLocale);
    return _context.messageResolver(message, key) !== null;
  }
  function resolveMessages(key) {
    let messages2 = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales.length; i++) {
      const targetLocaleMessages = _messages.value[locales[i]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages2 = messageValue;
        break;
      }
    }
    return messages2;
  }
  function tm(key) {
    const messages2 = resolveMessages(key);
    return messages2 != null ? messages2 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage2(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    deepCopy$1(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format) {
    _datetimeFormats.value[locale2] = format;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format);
  }
  function mergeDateTimeFormat(locale2, format) {
    _datetimeFormats.value[locale2] = shared$1.exports.assign(_datetimeFormats.value[locale2] || {}, format);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format) {
    _numberFormats.value[locale2] = format;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format);
  }
  function mergeNumberFormat(locale2, format) {
    _numberFormats.value[locale2] = shared$1.exports.assign(_numberFormats.value[locale2] || {}, format);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format);
  }
  composerID++;
  if (__root && shared$1.exports.inBrowser) {
    watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage: mergeLocaleMessage2,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te;
    composer.tm = tm;
    composer.d = d;
    composer.n = n;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOption] = options.__injectWithOption;
    composer[TranslateVNodeSymbol] = translateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  return composer;
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return [
        ...slot,
        ...current.type === Fragment$1 ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, {});
  }
}
function getFragmentableTag(tag) {
  return Fragment$1;
}
const TranslationImpl = /* @__PURE__ */ defineComponent({
  name: "i18n-t",
  props: shared$1.exports.assign({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      validator: (val) => shared$1.exports.isNumber(val) || !isNaN(val)
    }
  }, baseFormatProps),
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return () => {
      const keys = Object.keys(slots).filter((key) => key !== "_");
      const options = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = shared$1.exports.isString(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n[TranslateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = shared$1.exports.assign({}, attrs);
      const tag = shared$1.exports.isString(props.tag) || shared$1.exports.isObject(props.tag) ? props.tag : getFragmentableTag();
      return h(tag, assignedAttrs, children);
    };
  }
});
const Translation = TranslationImpl;
function isVNode(target) {
  return shared$1.exports.isArray(target) && !shared$1.exports.isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (shared$1.exports.isString(props.format)) {
      options.key = props.format;
    } else if (shared$1.exports.isObject(props.format)) {
      if (shared$1.exports.isString(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? shared$1.exports.assign({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (shared$1.exports.isArray(parts)) {
      children = parts.map((part, index) => {
        const slot = slots[part.type];
        const node = slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index}`;
        }
        return node;
      });
    } else if (shared$1.exports.isString(parts)) {
      children = [parts];
    }
    const assignedAttrs = shared$1.exports.assign({}, attrs);
    const tag = shared$1.exports.isString(props.tag) || shared$1.exports.isObject(props.tag) ? props.tag : getFragmentableTag();
    return h(tag, assignedAttrs, children);
  };
}
const NumberFormatImpl = /* @__PURE__ */ defineComponent({
  name: "i18n-n",
  props: shared$1.exports.assign({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: "parent",
      __useComponent: true
    });
    return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => i18n[NumberPartsSymbol](...args));
  }
});
const NumberFormat = NumberFormatImpl;
const DatetimeFormatImpl = /* @__PURE__ */ defineComponent({
  name: "i18n-d",
  props: shared$1.exports.assign({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: "parent",
      __useComponent: true
    });
    return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => i18n[DatetimePartsSymbol](...args));
  }
});
const DatetimeFormat = DatetimeFormatImpl;
function getComposer$2(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
  }
}
function vTDirective(i18n) {
  const _process = (binding) => {
    const { instance, modifiers, value } = binding;
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$2(i18n, instance.$);
    const parsedValue = parseValue(value);
    return [
      Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
      composer
    ];
  };
  const register = (el, binding) => {
    const [textContent, composer] = _process(binding);
    if (shared$1.exports.inBrowser && i18n.global === composer) {
      el.__i18nWatcher = watch(composer.locale, () => {
        binding.instance && binding.instance.$forceUpdate();
      });
    }
    el.__composer = composer;
    el.textContent = textContent;
  };
  const unregister = (el) => {
    if (shared$1.exports.inBrowser && el.__i18nWatcher) {
      el.__i18nWatcher();
      el.__i18nWatcher = void 0;
      delete el.__i18nWatcher;
    }
    if (el.__composer) {
      el.__composer = void 0;
      delete el.__composer;
    }
  };
  const update = (el, { value }) => {
    if (el.__composer) {
      const composer = el.__composer;
      const parsedValue = parseValue(value);
      el.textContent = Reflect.apply(composer.t, composer, [
        ...makeParams(parsedValue)
      ]);
    }
  };
  const getSSRProps = (binding) => {
    const [textContent] = _process(binding);
    return { textContent };
  };
  return {
    created: register,
    unmounted: unregister,
    beforeUpdate: update,
    getSSRProps
  };
}
function parseValue(value) {
  if (shared$1.exports.isString(value)) {
    return { path: value };
  } else if (shared$1.exports.isPlainObject(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (shared$1.exports.isString(locale)) {
    options.locale = locale;
  }
  if (shared$1.exports.isNumber(choice)) {
    options.plural = choice;
  }
  if (shared$1.exports.isNumber(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n, ...options) {
  const pluginOptions = shared$1.exports.isPlainObject(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = shared$1.exports.isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall) {
    app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
    app.component(NumberFormat.name, NumberFormat);
    app.component(DatetimeFormat.name, DatetimeFormat);
  }
  {
    app.directive("t", vTDirective(i18n));
  }
}
const I18nInjectionKey = /* @__PURE__ */ shared$1.exports.makeSymbol("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __globalInjection = shared$1.exports.isBoolean(options.globalInjection) ? options.globalInjection : true;
  const __allowComposition = true;
  const __instances = /* @__PURE__ */ new Map();
  const [globalScope, __global] = createGlobal(options);
  const symbol = /* @__PURE__ */ shared$1.exports.makeSymbol("");
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  {
    const i18n = {
      get mode() {
        return "composition";
      },
      get allowComposition() {
        return __allowComposition;
      },
      async install(app, ...options2) {
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n);
        if (shared$1.exports.isPlainObject(options2[0])) {
          const opts = options2[0];
          i18n.__composerExtend = opts.__composerExtend;
          i18n.__vueI18nExtend = opts.__vueI18nExtend;
        }
        if (__globalInjection) {
          injectGlobalFields(app, i18n.global);
        }
        {
          apply(app, i18n, ...options2);
        }
        const unmountApp = app.unmount;
        app.unmount = () => {
          i18n.dispose();
          unmountApp();
        };
      },
      get global() {
        return __global;
      },
      dispose() {
        globalScope.stop();
      },
      __instances,
      __getInstance,
      __setInstance,
      __deleteInstance
    };
    return i18n;
  }
}
function useI18n(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSLALLED);
  }
  const i18n = getI18nInstance(instance);
  const global2 = getGlobalComposer(i18n);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (scope === "global") {
    adjustI18nResources(global2, options, componentOptions);
    return global2;
  }
  if (scope === "parent") {
    let composer2 = getComposer$3(i18n, instance, options.__useComponent);
    if (composer2 == null) {
      composer2 = global2;
    }
    return composer2;
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = shared$1.exports.assign({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (global2) {
      composerOptions.__root = global2;
    }
    composer = createComposer(composerOptions);
    if (i18nInternal.__composerExtend) {
      i18nInternal.__composerExtend(composer);
    }
    setupLifeCycle(i18nInternal, instance);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  const scope = effectScope();
  {
    const obj = scope.run(() => createComposer(options));
    if (obj == null) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    return [scope, obj];
  }
}
function getI18nInstance(instance) {
  {
    const i18n = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
    if (!i18n) {
      throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE);
    }
    return i18n;
  }
}
function getScope(options, componentOptions) {
  return shared$1.exports.isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n) {
  return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
}
function getComposer$3(i18n, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = target.parent;
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function setupLifeCycle(i18n, target, composer) {
  {
    onUnmounted(() => {
      i18n.__deleteInstance(target);
    }, target);
  }
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm", "te"];
function injectGlobalFields(app, composer) {
  const i18n = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
}
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
{
  initFeatureFlags();
}
if (__INTLIFY_PROD_DEVTOOLS__) {
  const target = shared$1.exports.getGlobalThis();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const isVue3 = true;
const STRATEGIES = {
  PREFIX: "prefix",
  PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
  PREFIX_AND_DEFAULT: "prefix_and_default",
  NO_PREFIX: "no_prefix"
};
const DEFAULT_LOCALE = "";
const DEFAULT_STRATEGY = STRATEGIES.PREFIX_EXCEPT_DEFAULT;
const DEFAULT_TRAILING_SLASH = false;
const DEFAULT_ROUTES_NAME_SEPARATOR = "___";
const DEFAULT_LOCALE_ROUTE_NAME_SUFFIX = "default";
const DEFAULT_DETECTION_DIRECTION = "ltr";
const DEFAULT_BASE_URL = "";
const DEFAULT_DYNAMIC_PARAMS_KEY = "";
/*!
  * shared v9.3.0-beta.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
const assign = Object.assign;
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "");
}
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[vue-i18n-routing] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
function getNormalizedLocales(locales) {
  locales = locales || [];
  const normalized = [];
  for (const locale of locales) {
    if (isString(locale)) {
      normalized.push({ code: locale });
    } else {
      normalized.push(locale);
    }
  }
  return normalized;
}
function isI18nInstance(i18n) {
  return i18n != null && "global" in i18n && "mode" in i18n;
}
function isComposer(target) {
  return target != null && !("__composer" in target) && isRef(target.locale);
}
function isVueI18n(target) {
  return target != null && "__composer" in target;
}
function isExportedGlobalComposer(target) {
  return target != null && !("__composer" in target) && !isRef(target.locale);
}
function isLegacyVueI18n$1(target) {
  return target != null && ("__VUE_I18N_BRIDGE__" in target || "_sync" in target);
}
function getComposer(i18n) {
  return isI18nInstance(i18n) ? isComposer(i18n.global) ? i18n.global : i18n.global.__composer : isVueI18n(i18n) ? i18n.__composer : i18n;
}
function getLocale(i18n) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  return isComposer(target) ? target.locale.value : isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n$1(target) ? target.locale : target.locale;
}
function getLocales(i18n) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  return isComposer(target) ? target.locales.value : isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n$1(target) ? target.locales : target.locales;
}
function getLocaleCodes(i18n) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  return isComposer(target) ? target.localeCodes.value : isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n$1(target) ? target.localeCodes : target.localeCodes;
}
function setLocale(i18n, locale) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  if (isComposer(target)) {
    {
      target.locale.value = locale;
    }
  } else if (isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n$1(target)) {
    target.locale = locale;
  } else {
    throw new Error("TODO:");
  }
}
function getRouteName(routeName) {
  return isString(routeName) ? routeName : isSymbol(routeName) ? routeName.toString() : "(null)";
}
function getLocaleRouteName(routeName, locale, {
  defaultLocale,
  strategy,
  routesNameSeparator,
  defaultLocaleRouteNameSuffix
}) {
  let name = getRouteName(routeName) + (strategy === "no_prefix" ? "" : routesNameSeparator + locale);
  if (locale === defaultLocale && strategy === "prefix_and_default") {
    name += routesNameSeparator + defaultLocaleRouteNameSuffix;
  }
  return name;
}
function resolveBaseUrl(baseUrl, context) {
  if (isFunction(baseUrl)) {
    return baseUrl(context);
  }
  return baseUrl;
}
function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.iso.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.iso.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
const DefaultBrowserLocaleMatcher = matchBrowserLocale;
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
const DefaultBrowerLocaleComparer = compareBrowserLocale;
function findBrowserLocale(locales, browserLocales, { matcher = DefaultBrowserLocaleMatcher, comparer = DefaultBrowerLocaleComparer } = {}) {
  const normalizedLocales = [];
  for (const l of locales) {
    const { code: code2 } = l;
    const iso = l.iso || code2;
    normalizedLocales.push({ code: code2, iso });
  }
  const matchedLocales = matcher(normalizedLocales, browserLocales);
  if (matchedLocales.length > 1) {
    matchedLocales.sort(comparer);
  }
  return matchedLocales.length ? matchedLocales[0].code : "";
}
function proxyVueInstance(target) {
  return function() {
    return Reflect.apply(
      target,
      {
        getRouteBaseName: this.getRouteBaseName,
        localePath: this.localePath,
        localeRoute: this.localeRoute,
        localeLocation: this.localeLocation,
        resolveRoute: this.resolveRoute,
        switchLocalePath: this.switchLocalePath,
        localeHead: this.localeHead,
        i18n: this.$i18n,
        route: this.$route,
        router: this.$router
      },
      arguments
    );
  };
}
function extendI18n(i18n, {
  locales = [],
  localeCodes: localeCodes2 = [],
  baseUrl = DEFAULT_BASE_URL,
  hooks = {},
  context = {}
} = {}) {
  const scope = effectScope();
  const orgInstall = i18n.install;
  i18n.install = (vue, ...options) => {
    const pluginOptions = isPluginOptions(options[0]) ? assign({}, options[0]) : { inject: true };
    if (pluginOptions.inject == null) {
      pluginOptions.inject = true;
    }
    const orgComposerExtend = pluginOptions.__composerExtend;
    pluginOptions.__composerExtend = (c) => {
      const g = getComposer(i18n);
      c.locales = computed(() => g.locales.value);
      c.localeCodes = computed(() => g.localeCodes.value);
      c.baseUrl = computed(() => g.baseUrl.value);
      if (isFunction(orgComposerExtend)) {
        Reflect.apply(orgComposerExtend, pluginOptions, [c]);
      }
    };
    if (isVueI18n(i18n.global)) {
      const orgVueI18nExtend = pluginOptions.__vueI18nExtend;
      pluginOptions.__vueI18nExtend = (vueI18n) => {
        extendVueI18n(vueI18n, hooks.onExtendVueI18n);
        if (isFunction(orgVueI18nExtend)) {
          Reflect.apply(orgVueI18nExtend, pluginOptions, [vueI18n]);
        }
      };
    }
    options[0] = pluginOptions;
    Reflect.apply(orgInstall, i18n, [vue, ...options]);
    const composer = getComposer(i18n);
    scope.run(() => extendComposer(composer, { locales, localeCodes: localeCodes2, baseUrl, hooks, context }));
    if (isVueI18n(i18n.global)) {
      extendVueI18n(i18n.global, hooks.onExtendVueI18n);
    }
    const app = vue;
    const exported = i18n.mode === "composition" ? app.config.globalProperties.$i18n : null;
    if (exported) {
      extendExportedGlobal(exported, composer, hooks.onExtendExportedGlobal);
    }
    if (pluginOptions.inject) {
      vue.mixin({
        methods: {
          resolveRoute: proxyVueInstance(resolveRoute),
          localePath: proxyVueInstance(localePath),
          localeRoute: proxyVueInstance(localeRoute),
          localeLocation: proxyVueInstance(localeLocation),
          switchLocalePath: proxyVueInstance(switchLocalePath),
          getRouteBaseName: proxyVueInstance(getRouteBaseName),
          localeHead: proxyVueInstance(localeHead)
        }
      });
    }
    if (app.unmount) {
      const unmountApp = app.unmount;
      app.unmount = () => {
        scope.stop();
        unmountApp();
      };
    }
  };
  return scope;
}
function extendComposer(composer, options) {
  const { locales, localeCodes: localeCodes2, baseUrl, context } = options;
  const _locales = ref(locales);
  const _localeCodes = ref(localeCodes2);
  const _baseUrl = ref("");
  composer.locales = computed(() => _locales.value);
  composer.localeCodes = computed(() => _localeCodes.value);
  composer.baseUrl = computed(() => _baseUrl.value);
  {
    _baseUrl.value = resolveBaseUrl(baseUrl, context);
  }
  if (options.hooks && options.hooks.onExtendComposer) {
    options.hooks.onExtendComposer(composer);
  }
}
function extendExportedGlobal(exported, g, hook) {
  const properties = [
    {
      locales: {
        get() {
          return g.locales.value;
        }
      },
      localeCodes: {
        get() {
          return g.localeCodes.value;
        }
      },
      baseUrl: {
        get() {
          return g.baseUrl.value;
        }
      }
    }
  ];
  hook && properties.push(hook(g));
  for (const property of properties) {
    for (const [key, descriptor] of Object.entries(property)) {
      Object.defineProperty(exported, key, descriptor);
    }
  }
}
function extendVueI18n(vueI18n, hook) {
  const composer = getComposer(vueI18n);
  const properties = [
    {
      locales: {
        get() {
          return composer.locales.value;
        }
      },
      localeCodes: {
        get() {
          return composer.localeCodes.value;
        }
      },
      baseUrl: {
        get() {
          return composer.baseUrl.value;
        }
      }
    }
  ];
  hook && properties.push(hook(composer));
  for (const property of properties) {
    for (const [key, descriptor] of Object.entries(property)) {
      Object.defineProperty(vueI18n, key, descriptor);
    }
  }
}
function isPluginOptions(options) {
  return isObject(options) && ("inject" in options || "__composerExtend" in options || "__vueI18nExtend" in options) && isBoolean(options.inject);
}
const GlobalOptionsRegistory = makeSymbol("vue-i18n-routing-gor");
function registerGlobalOptions(router, options) {
  const _options = router[GlobalOptionsRegistory];
  if (_options) {
    warn("already registered global options");
  } else {
    router[GlobalOptionsRegistory] = options;
  }
}
function getGlobalOptions(router) {
  var _a2;
  return (_a2 = router[GlobalOptionsRegistory]) != null ? _a2 : {};
}
function getLocalesRegex(localeCodes2) {
  return new RegExp(`^/(${localeCodes2.join("|")})(?:/|$)`, "i");
}
function createLocaleFromRouteGetter(localeCodes2, routesNameSeparator, defaultLocaleRouteNameSuffix) {
  const localesPattern = `(${localeCodes2.join("|")})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, "i");
  const regexpPath = getLocalesRegex(localeCodes2);
  const getLocaleFromRoute = (route) => {
    if (isObject(route)) {
      if (route.name) {
        const name = isString(route.name) ? route.name : route.name.toString();
        const matches = name.match(regexpName);
        if (matches && matches.length > 1) {
          return matches[1];
        }
      } else if (route.path) {
        const matches = route.path.match(regexpPath);
        if (matches && matches.length > 1) {
          return matches[1];
        }
      }
    } else if (isString(route)) {
      const matches = route.match(regexpPath);
      if (matches && matches.length > 1) {
        return matches[1];
      }
    }
    return "";
  };
  return getLocaleFromRoute;
}
function getI18nRoutingOptions(router, proxy, {
  defaultLocale = DEFAULT_LOCALE,
  defaultDirection = DEFAULT_DETECTION_DIRECTION,
  defaultLocaleRouteNameSuffix = DEFAULT_LOCALE_ROUTE_NAME_SUFFIX,
  routesNameSeparator = DEFAULT_ROUTES_NAME_SEPARATOR,
  strategy = DEFAULT_STRATEGY,
  trailingSlash = DEFAULT_TRAILING_SLASH,
  localeCodes: localeCodes2 = [],
  prefixable: prefixable2 = DefaultPrefixable,
  switchLocalePathIntercepter = DefaultSwitchLocalePathIntercepter,
  dynamicRouteParamsKey = DEFAULT_DYNAMIC_PARAMS_KEY
} = {}) {
  const options = getGlobalOptions(router);
  return {
    defaultLocale: proxy.defaultLocale || options.defaultLocale || defaultLocale,
    defaultDirection: proxy.defaultDirection || options.defaultDirection || defaultDirection,
    defaultLocaleRouteNameSuffix: proxy.defaultLocaleRouteNameSuffix || options.defaultLocaleRouteNameSuffix || defaultLocaleRouteNameSuffix,
    routesNameSeparator: proxy.routesNameSeparator || options.routesNameSeparator || routesNameSeparator,
    strategy: proxy.strategy || options.strategy || strategy,
    trailingSlash: proxy.trailingSlash || options.trailingSlash || trailingSlash,
    localeCodes: proxy.localeCodes || options.localeCodes || localeCodes2,
    prefixable: proxy.prefixable || options.prefixable || prefixable2,
    switchLocalePathIntercepter: proxy.switchLocalePathIntercepter || options.switchLocalePathIntercepter || switchLocalePathIntercepter,
    dynamicRouteParamsKey: proxy.dynamicRouteParamsKey || options.dynamicRouteParamsKey || dynamicRouteParamsKey
  };
}
function split(str, index) {
  const result = [str.slice(0, index), str.slice(index)];
  return result;
}
function resolve(router, route, strategy, locale) {
  if (strategy === "prefix") {
    if (isArray(route.matched) && route.matched.length > 0) {
      return route.matched[0];
    }
    const [rootSlash, restPath] = split(route.path, 1);
    const targetPath = `${rootSlash}${locale}${restPath === "" ? restPath : `/${restPath}`}`;
    const _route = router.options.routes.find((r) => r.path === targetPath);
    if (_route == null) {
      return route;
    } else {
      const _resolevableRoute = assign({}, _route);
      _resolevableRoute.path = targetPath;
      return router.resolve(_resolevableRoute);
    }
  } else {
    return router.resolve(route);
  }
}
const RESOLVED_PREFIXED = /* @__PURE__ */ new Set(["prefix_and_default", "prefix_except_default"]);
function prefixable(optons) {
  const { currentLocale, defaultLocale, strategy } = optons;
  const isDefaultLocale = currentLocale === defaultLocale;
  return !(isDefaultLocale && RESOLVED_PREFIXED.has(strategy)) && !(strategy === "no_prefix");
}
const DefaultPrefixable = prefixable;
function getRouteBaseName(givenRoute) {
  const router = this.router;
  const { routesNameSeparator } = getI18nRoutingOptions(router, this);
  const route = givenRoute != null ? isRef(givenRoute) ? unref(givenRoute) : givenRoute : this.route;
  if (route == null || !route.name) {
    return;
  }
  const name = getRouteName(route.name);
  return name.split(routesNameSeparator)[0];
}
function localePath(route, locale) {
  const localizedRoute = resolveRoute.call(this, route, locale);
  return localizedRoute == null ? "" : localizedRoute.redirectedFrom || localizedRoute.fullPath;
}
function localeRoute(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved == null ? void 0 : resolved;
}
function localeLocation(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved == null ? void 0 : resolved;
}
function resolveRoute(route, locale) {
  const router = this.router;
  const i18n = this.i18n;
  const _locale = locale || getLocale(i18n);
  const { routesNameSeparator, defaultLocale, defaultLocaleRouteNameSuffix, strategy, trailingSlash, prefixable: prefixable2 } = getI18nRoutingOptions(router, this);
  let _route = route;
  if (isString(route)) {
    if (_route[0] === "/") {
      _route = { path: route };
    } else {
      _route = { name: route };
    }
  }
  let localizedRoute = assign({}, _route);
  if (localizedRoute.path && !localizedRoute.name) {
    let _resolvedRoute = null;
    try {
      _resolvedRoute = resolve(router, localizedRoute, strategy, _locale);
    } catch {
    }
    const resolvedRoute = _resolvedRoute;
    const resolvedRouteName = getRouteBaseName.call(this, resolvedRoute);
    if (isString(resolvedRouteName)) {
      localizedRoute = {
        name: getLocaleRouteName(resolvedRouteName, _locale, {
          defaultLocale,
          strategy,
          routesNameSeparator,
          defaultLocaleRouteNameSuffix
        }),
        params: resolvedRoute.params,
        query: resolvedRoute.query,
        hash: resolvedRoute.hash
      };
      {
        localizedRoute.state = resolvedRoute.state;
      }
    } else {
      if (prefixable2({ currentLocale: _locale, defaultLocale, strategy })) {
        localizedRoute.path = `/${_locale}${localizedRoute.path}`;
      }
      localizedRoute.path = trailingSlash ? withTrailingSlash(localizedRoute.path, true) : withoutTrailingSlash(localizedRoute.path, true);
    }
  } else {
    if (!localizedRoute.name && !localizedRoute.path) {
      localizedRoute.name = getRouteBaseName.call(this, this.route);
    }
    localizedRoute.name = getLocaleRouteName(localizedRoute.name, _locale, {
      defaultLocale,
      strategy,
      routesNameSeparator,
      defaultLocaleRouteNameSuffix
    });
  }
  try {
    const resolvedRoute = router.resolve(localizedRoute);
    if (isVue3 ? resolvedRoute.name : resolvedRoute.route.name) {
      return resolvedRoute;
    }
    return router.resolve(route);
  } catch (e) {
    if (e.type === 1) {
      return null;
    }
  }
}
const DefaultSwitchLocalePathIntercepter = (path) => path;
function getLocalizableMetaFromDynamicParams(route, key) {
  const metaDefault = {};
  if (key === DEFAULT_DYNAMIC_PARAMS_KEY) {
    return metaDefault;
  }
  const meta = route.meta;
  if (isRef(meta)) {
    return meta.value[key] || metaDefault;
  } else {
    return meta[key] || metaDefault;
  }
}
function switchLocalePath(locale) {
  const route = this.route;
  const name = getRouteBaseName.call(this, route);
  if (!name) {
    return "";
  }
  const { switchLocalePathIntercepter, dynamicRouteParamsKey } = getI18nRoutingOptions(this.router, this);
  const { params, ...routeCopy } = route;
  const langSwitchParams = getLocalizableMetaFromDynamicParams(route, dynamicRouteParamsKey)[locale] || {};
  const _baseRoute = {
    name,
    params: {
      ...params,
      ...langSwitchParams
    }
  };
  const baseRoute = assign({}, routeCopy, _baseRoute);
  let path = localePath.call(this, baseRoute, locale);
  path = switchLocalePathIntercepter(path, locale);
  return path;
}
function localeHead({ addDirAttribute = false, addSeoAttributes = false, identifierAttribute = "hid" } = {}) {
  const router = this.router;
  const i18n = this.i18n;
  const { defaultDirection } = getI18nRoutingOptions(router, this);
  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  if (i18n.locales == null || i18n.baseUrl == null) {
    return metaObject;
  }
  const locale = getLocale(i18n);
  const locales = getLocales(i18n);
  const currentLocale = getNormalizedLocales(locales).find((l) => l.code === locale) || {
    code: locale
  };
  const currentLocaleIso = currentLocale.iso;
  const currentLocaleDir = currentLocale.dir || defaultDirection;
  if (addDirAttribute) {
    metaObject.htmlAttrs.dir = currentLocaleDir;
  }
  if (addSeoAttributes && locale && i18n.locales) {
    if (currentLocaleIso) {
      metaObject.htmlAttrs.lang = currentLocaleIso;
    }
    addHreflangLinks.call(this, locales, unref(i18n.baseUrl), metaObject.link, identifierAttribute);
    addCanonicalLinks.call(this, unref(i18n.baseUrl), metaObject.link, identifierAttribute, addSeoAttributes);
    addCurrentOgLocale(currentLocale, currentLocaleIso, metaObject.meta, identifierAttribute);
    addAlternateOgLocales(locales, currentLocaleIso, metaObject.meta, identifierAttribute);
  }
  return metaObject;
}
function addHreflangLinks(locales, baseUrl, link, identifierAttribute) {
  const router = this.router;
  const { defaultLocale, strategy } = getI18nRoutingOptions(router, this);
  if (strategy === STRATEGIES.NO_PREFIX) {
    return;
  }
  const localeMap = /* @__PURE__ */ new Map();
  for (const locale of locales) {
    const localeIso = locale.iso;
    if (!localeIso) {
      warn("Locale ISO code is required to generate alternate link");
      continue;
    }
    const [language, region] = localeIso.split("-");
    if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
      localeMap.set(language, locale);
    }
    localeMap.set(localeIso, locale);
  }
  for (const [iso, mapLocale] of localeMap.entries()) {
    const localePath2 = switchLocalePath.call(this, mapLocale.code);
    if (localePath2) {
      link.push({
        [identifierAttribute]: `i18n-alt-${iso}`,
        rel: "alternate",
        href: toAbsoluteUrl(localePath2, baseUrl),
        hreflang: iso
      });
    }
  }
  if (defaultLocale) {
    const localePath2 = switchLocalePath.call(this, defaultLocale);
    if (localePath2) {
      link.push({
        [identifierAttribute]: "i18n-xd",
        rel: "alternate",
        href: toAbsoluteUrl(localePath2, baseUrl),
        hreflang: "x-default"
      });
    }
  }
}
function addCanonicalLinks(baseUrl, link, identifierAttribute, seoAttributesOptions) {
  const route = this.route;
  const currentRoute = localeRoute.call(this, {
    ...route,
    name: getRouteBaseName.call(this, route)
  });
  if (currentRoute) {
    let href = toAbsoluteUrl(currentRoute.path, baseUrl);
    const canonicalQueries = isObject(seoAttributesOptions) && seoAttributesOptions.canonicalQueries || [];
    if (canonicalQueries.length) {
      const currentRouteQueryParams = currentRoute.query;
      const params = new URLSearchParams();
      for (const queryParamName of canonicalQueries) {
        if (queryParamName in currentRouteQueryParams) {
          const queryParamValue = currentRouteQueryParams[queryParamName];
          if (isArray(queryParamValue)) {
            queryParamValue.forEach((v) => params.append(queryParamName, v || ""));
          } else {
            params.append(queryParamName, queryParamValue || "");
          }
        }
      }
      const queryString = params.toString();
      if (queryString) {
        href = `${href}?${queryString}`;
      }
    }
    link.push({
      [identifierAttribute]: "i18n-can",
      rel: "canonical",
      href
    });
  }
}
function addCurrentOgLocale(currentLocale, currentLocaleIso, meta, identifierAttribute) {
  const hasCurrentLocaleAndIso = currentLocale && currentLocaleIso;
  if (!hasCurrentLocaleAndIso) {
    return;
  }
  meta.push({
    [identifierAttribute]: "i18n-og",
    property: "og:locale",
    content: hypenToUnderscore(currentLocaleIso)
  });
}
function addAlternateOgLocales(locales, currentLocaleIso, meta, identifierAttribute) {
  const localesWithoutCurrent = locales.filter((locale) => {
    const localeIso = locale.iso;
    return localeIso && localeIso !== currentLocaleIso;
  });
  if (localesWithoutCurrent.length) {
    const alternateLocales = localesWithoutCurrent.map((locale) => ({
      [identifierAttribute]: `i18n-og-alt-${locale.iso}`,
      property: "og:locale:alternate",
      content: hypenToUnderscore(locale.iso)
    }));
    meta.push(...alternateLocales);
  }
}
function hypenToUnderscore(str) {
  return (str || "").replace(/-/g, "_");
}
function toAbsoluteUrl(urlOrPath, baseUrl) {
  if (urlOrPath.match(/^https?:\/\//)) {
    return urlOrPath;
  }
  return baseUrl + urlOrPath;
}
function proxyForComposable(options, target) {
  const {
    router,
    route,
    i18n,
    defaultLocale,
    strategy,
    defaultLocaleRouteNameSuffix,
    trailingSlash,
    routesNameSeparator
  } = options;
  return function(...args) {
    return Reflect.apply(
      target,
      {
        router,
        route,
        i18n,
        defaultLocale,
        strategy,
        defaultLocaleRouteNameSuffix,
        trailingSlash,
        routesNameSeparator
      },
      args
    );
  };
}
function useLocalePath$1({
  router = useRouter$1(),
  route = useRoute$1(),
  i18n = useI18n(),
  defaultLocale = void 0,
  defaultLocaleRouteNameSuffix = void 0,
  routesNameSeparator = void 0,
  strategy = void 0,
  trailingSlash = void 0
} = {}) {
  return proxyForComposable(
    { router, route, i18n, defaultLocale, defaultLocaleRouteNameSuffix, routesNameSeparator, strategy, trailingSlash },
    localePath
  );
}
function useSwitchLocalePath$1({
  router = useRouter$1(),
  route = useRoute$1(),
  i18n = useI18n(),
  defaultLocale = void 0,
  defaultLocaleRouteNameSuffix = void 0,
  routesNameSeparator = void 0,
  strategy = void 0,
  trailingSlash = void 0
} = {}) {
  return proxyForComposable(
    {
      router,
      route,
      i18n,
      defaultLocale,
      defaultLocaleRouteNameSuffix,
      routesNameSeparator,
      strategy,
      trailingSlash
    },
    switchLocalePath
  );
}
const localeCodes = ["en", "ar"];
const localeMessages = {};
const additionalMessages = Object({ "en": [], "ar": [] });
const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({});
  const vueI18nOptionsLoader = async (context2) => Object({ "fallbackLocale": "en", "messages": Object({ "en": {
    "hello": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Hello World p"]);
    },
    "hello2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Hello World 2"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Home"]);
    },
    "destinations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Destinations"]);
    },
    "Destinations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Destinations"]);
    },
    "packages": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Packages"]);
    },
    "tours": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tours"]);
    },
    "activities": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Activities"]);
    },
    "transfer": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Transfer"]);
    },
    "hero-header": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["The world's best is waiting for you."]);
    },
    "hero-description": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Find exceptional real_life experiences curated by experts. Get last minute discounts, save with cashback and much more."]);
    },
    "search_all_experiences_and_destinations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Search all experiences and destinations"]);
    },
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Search"]);
    },
    "airport_transfer": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Airport Transfer"]);
    },
    "private_car": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Private Car"]);
    },
    "header": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ayder Heights Tour"]);
    },
    "start_from": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Starting from"]);
    },
    "reservation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Reserve Your Trip Immediately"]);
    },
    "your_name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Your Name"]);
    },
    "your_phone": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Your Phone"]);
    },
    "guests": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Number Guests"]);
    },
    "antalya": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["ANTALYA DIVING TOUR"]);
    },
    "antalya_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Water Sports Tourism Is Prospering In The City Of Antalya Due To Its Distinctive Views Of Several Se..."]);
    },
    "setoff": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["LET\u2019S SET OFF TOGETHER"]);
    },
    "details_of_trip": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Details of the trip"]);
    },
    "details": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["We have breakfast then we go to Ayder Heights, where you can enjoy the adventure of jumping rope between the banks of the river and rowing, in addition to mineral baths (sulfur water), and then we go to the waterfalls and enjoy free time to wander until the time to return to the hotel."]);
    },
    "pictures_and_videos": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Pictures and Videos"]);
    },
    "detail1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Breakfast and heading (with a group) to Ayder plateau"]);
    },
    "detail2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Enjoy the adventure of rafting and jumping between the two banks of the river"]);
    },
    "detail3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["And then we go to the waterfalls and sulfur baths"]);
    },
    "what_expected": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["What are you expecting?"]);
    },
    "includes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["The trip Includes"]);
    },
    "include1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Transportation"]);
    },
    "include2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tourist guide"]);
    },
    "excludes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["The trip does not include"]);
    },
    "exclude1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Shopping and purchases"]);
    },
    "exclude2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Enjoy the adventure of rafting and jumping between the two banks of the river"]);
    },
    "exclude3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["And then we go to the waterfalls and sulfur baths"]);
    },
    "terms_and_policy": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Terms and Policy"]);
    },
    "term1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["The tour starts at 09:30 am"]);
    },
    "term2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["The tour ends at 06:00"]);
    },
    "term3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["The tour is daily with a tourist group"]);
    },
    "required": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["This Field is required"]);
    },
    "child": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Child"]);
    },
    "adults": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Adults"]);
    },
    "turkiye": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Turkiye"]);
    },
    "trabzon": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Trabzon"]);
    },
    "istanbul": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Istanbul"]);
    },
    "select_destination": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Select a country or a city to explore"]);
    },
    "uae": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["UAE"]);
    },
    "all-destinations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["All Destinations"]);
    },
    "all-categories": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["All Categories"]);
    },
    "categories": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Categories"]);
    },
    "blogs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Blogs"]);
    },
    "test": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Test"]);
    },
    "book_now": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["More Info & Booking"]);
    },
    "from": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["From"]);
    },
    "tour_overview": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tour Overview"]);
    },
    "tour_options": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tour Options"]);
    },
    "tour_highlights": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tour Highlights"]);
    },
    "tour_inclusion": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tour Inclusion"]);
    },
    "tour_exclusion": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tour Exclusion"]);
    },
    "important_information": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Important Information"]);
    },
    "timing_and_transfer": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Timing and Transfer"]);
    },
    "policy": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Policy"]);
    },
    "terms_and_conditions": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Terms and Conditions"]);
    },
    "notes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Notes"]);
    },
    "package_options": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Packages Options"]);
    },
    "itinerary": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Itinerary"]);
    },
    "package_overview": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Packages Overview"]);
    },
    "package_highlights": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Package Highlights"]);
    },
    "package_inclusion": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Package Inclusion"]);
    },
    "package_exclusion": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Package Exclusion"]);
    },
    "newsletter_text": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Subscribe our Newsletter"]);
    },
    "newsletter_subtext": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Subscribe now to get all news"]);
    },
    "subscribe": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Subscribe"]);
    },
    "your_email": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Your Email"]);
    },
    "footer_message": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Your ideal partner in the middle east to discover Tourexpect wonders"]);
    },
    "copyright_text": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Copyright \xA9 2022 . Powered by Tourexpect All rights reserved."]);
    },
    "whatsapp_text": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Text us on Whatsapp"]);
    },
    "children": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Children"]);
    },
    "infants": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Infants"]);
    },
    "inquiry": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Inquiry"]);
    },
    "your_message": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Your Message"]);
    },
    "inquire_now": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Inquire Now"]);
    },
    "activity_options": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Activity Options"]);
    },
    "activity_overview": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Activity Overview"]);
    },
    "activity_highlights": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Activity Highlights"]);
    },
    "activity_inclusion": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Activity Inclusion"]);
    },
    "activity_exclusion": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Activity Exclusion"]);
    },
    "off": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Off"]);
    },
    "apply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Apply"]);
    },
    "we_are_hiring": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["We Are Hiring"]);
    },
    "hiring_section_1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Human resources are the core of our interest at Tourexpect as we always focus on developing our staff and improve our team."]);
    },
    "hiring_section_2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["We are always looking for promising talents who want to prove their worth. Besides, we are working to develop their capabilities so that they meet our goals and objectives, and we seek to provide our team with expertise and professional skills adding to our work what is new and fruitful."]);
    },
    "hiring_section_3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["If you are one of those who have experience in our field ofwork, and at the beginning of youth, and enjoy high ambition,spirit of fair competition and challenge to reach theprofessional goals that we aspire to, you can be part ofTourexpect team, by sending your CV. We will contact you in casethere are suitable and available vacancies, or we will keep your job files for the appropriate time."]);
    },
    "hiring_section_4": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["We believe in working as a united team, respecting employees' rights, and applying humanitarian and ethical standards in treatment."]);
    },
    "hiring_section_5": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["The successful employee must be of courtesy, ethics, and high values to provide the best service to our valued clients. Successful employees are the key to corporate success, so we are interested in attracting outstanding talents and experienced competencies."]);
    },
    "hiring_section_6": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["We always aim to work with the finest people to preserve our reputation, improve our distinguished services, and uphold our social responsibility by providing a comfortable and effective work environment."]);
    },
    "hiring_header_1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Join Tourexpect Team"]);
    },
    "hiring_header_2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Our Vision For Work And Employment:"]);
    },
    "hiring_header_3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Apply To Join Tourexpect Team"]);
    },
    "linkedin_link": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["LinkedIn Link"]);
    },
    "position": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Position"]);
    },
    "documents": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Documents"]);
    },
    "visa_types_available": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Available Visa Types"]);
    },
    "requirements": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Requirements"]);
    },
    "proceed_to_apply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Proceed to Apply"]);
    },
    "apply_to_visa": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Apply to The Visa"]);
    },
    "uae-visa-application-form": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["UAE Visa Application Form"]);
    },
    "person_1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Person 1"]);
    },
    "person_2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Person 2"]);
    },
    "person_3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Person 3"]);
    },
    "person_4": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Person 4"]);
    },
    "person_5": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Person 5"]);
    },
    "person_6": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Person 6"]);
    },
    "uae_tours": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["UAE Tours"]);
    },
    "turkey_tours": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Turkey Tours"]);
    },
    "see_more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["See More"]);
    },
    "best_of_trabzon_tours": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Best Of Trabzon Tours"]);
    },
    "best_of_rize_tours": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Best Of Rize Tours"]);
    },
    "best_of_east_black_sea_region_tours": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Best Of East Black Sea Tours"]);
    },
    "best_of_dubai_tours": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Best Of Dubai Tours"]);
    },
    "turkey_description": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Discover the beauty of Turkey with our exclusive tour packages. Visit iconic landmarks, experience rich culture, and taste delicious cuisine. Book now for an unforgettable adventure."]);
    },
    "we_accept": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["We Accept"]);
    },
    "single_entry": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Single Entry"]);
    }
  }, "ar": {
    "hello": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0631\u062D\u0628\u0627 \u0627\u064A\u0647\u0627 \u0627\u0644\u0639\u0627\u0644\u0645"]);
    },
    "hello2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0631\u062D\u0628\u0627 \u0627\u064A\u0647\u0627 \u0627\u0644\u0639\u0627\u0644\u0645 2"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"]);
    },
    "destinations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0648\u062C\u0647\u0627\u062A"]);
    },
    "Destinations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0648\u062C\u0647\u0627\u062A"]);
    },
    "packages": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0628\u0631\u0627\u0645\u062C \u0633\u064A\u0627\u062D\u064A\u0629"]);
    },
    "tours": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062C\u0648\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629"]);
    },
    "activities": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0646\u0634\u0637\u0629"]);
    },
    "transfer": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0646\u0642\u0644"]);
    },
    "hero-header": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0623\u0641\u0636\u0644 \u0641\u064A \u0627\u0644\u0639\u0627\u0644\u0645 \u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631\u0643."]);
    },
    "hero-description": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0643\u062A\u0634\u0641 \u062A\u062C\u0627\u0631\u0628 \u0648\u0627\u0642\u0639\u064A\u0629 \u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A\u0629 \u0628\u0631\u0639\u0627\u064A\u0629 \u062E\u0628\u0631\u0627\u0621. \u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u062E\u0635\u0648\u0645\u0627\u062A \u0627\u0644\u0644\u062D\u0638\u0629 \u0627\u0644\u0623\u062E\u064A\u0631\u0629 \u0648\u0648\u0641\u0631 \u0645\u0639 \u0627\u0633\u062A\u0631\u062F\u0627\u062F \u0627\u0644\u0646\u0642\u0648\u062F \u0648\u063A\u064A\u0631 \u0630\u0644\u0643 \u0627\u0644\u0643\u062B\u064A\u0631."]);
    },
    "search_all_experiences_and_destinations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0628\u062D\u062B \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u062C\u0627\u0631\u0628 \u0648\u0627\u0644\u0648\u062C\u0647\u0627\u062A"]);
    },
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0628\u062D\u062B"]);
    },
    "airport_transfer": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0646\u0642\u0644 \u0645\u0646 \u0627\u0644\u0645\u0637\u0627\u0631"]);
    },
    "private_car": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0633\u064A\u0627\u0631\u0629 \u0645\u0639 \u0633\u0627\u0626\u0642"]);
    },
    "header": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062C\u0648\u0644\u0629 \u0645\u0631\u062A\u0641\u0639\u0627\u062A \u0627\u064A\u062F\u0631"]);
    },
    "start_from": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0628\u062F\u0623 \u0645\u0646"]);
    },
    "reservation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u062D\u062C\u0632 \u0631\u062D\u0644\u062A\u0643 \u0639\u0644\u0649 \u0627\u0644\u0641\u0648\u0631"]);
    },
    "your_name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0627\u0633\u0645 :"]);
    },
    "your_phone": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 :"]);
    },
    "guests": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u0633\u0627\u0641\u0631\u0648\u0646"]);
    },
    "antalya": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0631\u062D\u0644\u0629 \u0623\u0631\u0636 \u0627\u0644\u0627\u0633\u0627\u0637\u064A\u0631 \u0623\u0646\u0637\u0627\u0644\u064A\u0627"]);
    },
    "antalya_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0631\u062D\u0644\u0629 \u0633\u064A\u0627\u062D\u064A\u0629 \u0644\u064A\u0648\u0645 \u0648\u0627\u062D\u062F \u0627\u0644\u0649 \u0627\u0631\u0636 \u0627\u0644\u0627\u0633\u0627\u0637\u064A\u0631 \u0644\u0644\u0627\u0633\u062A\u0645\u062A\u0627\u0639 \u0628\u0623\u062C\u0645\u0644 \u0627\u0644\u0627\u0648\u0642\u0627\u062A \u0648\u0645\u0645\u0627\u0631\u0633\u0629 \u0627\u0644\u0646\u0634\u0627\u0637\u0627\u062A \u0627\u0644\u0645\u0645\u062A\u0639\u0629 \u0648\u0627\u0644\u0645\u062A\u0646\u0648\u0639\u0629 \u0641\u064A..."]);
    },
    "setoff": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0646\u0637\u0644\u0642 \u0645\u0639\u0646\u0627"]);
    },
    "details_of_trip": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0631\u062D\u0644\u0629"]);
    },
    "details": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0634\u0631\u0643\u0629 \u0633\u0641\u0631\u0643 \u0627\u0644\u0633\u064A\u0627\u062D\u064A\u0629 \u062A\u0642\u062F\u0645 \u0644\u0639\u0645\u0644\u0627\u0626\u0647\u0627 \u0627\u0644\u0643\u0631\u0627\u0645 \u062C\u0648\u0644\u0629 \u0645\u0645\u062A\u0639\u0629 \u0641\u064A \u0645\u0631\u062A\u0641\u0639\u0627\u062A \u0622\u064A\u062F\u0631 \u0627\u0644\u0634\u0647\u064A\u0631\u0629\u060C \u0648\u0627\u0644\u062A\u064A \u062A\u0639\u062F \u0628\u0627\u0644\u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0645\u0641\u0627\u062C\u0622\u062A\u060C \u0645\u062B\u0644: \u0627\u0644\u062D\u0645\u0627\u0645\u0627\u062A \u0627\u0644\u0635\u062D\u064A\u0629 \u0648\u0627\u0644\u0645\u064A\u0627\u0647 \u0627\u0644\u0645\u0639\u062F\u0646\u064A\u0629 \u0648\u0627\u0644\u0643\u0628\u0631\u064A\u062A\u064A\u0629\u060C \u0643\u0645\u0627 \u062A\u0634\u062A\u0647\u0631 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0628\u0627\u0644\u0648\u062C\u0628\u0627\u062A \u0627\u0644\u0644\u0630\u064A\u0630\u0629\u060C \u0648\u0628\u0628\u064A\u0648\u062A\u0647\u0627 \u0627\u0644\u062E\u0634\u0628\u064A\u0629 \u0627\u0644\u062C\u0630\u0627\u0628\u0629 \u0648\u0627\u0644\u062C\u0628\u0627\u0644 \u0627\u0644\u0634\u0627\u0647\u0642\u0629 \u0627\u0644\u062A\u064A \u064A\u0635\u0644 \u0627\u0631\u062A\u0641\u0627\u0639\u0647\u0627 \u0625\u0644\u0649 1350 \u0645\u062A\u0631\u0627\u064B\u060C \u062D\u064A\u062B \u064A\u0644\u0642\u0628 \u0627\u0644\u0628\u0639\u0636 \u0642\u0631\u064A\u0629 \u0622\u064A\u062F\u0631 \u0628\u0642\u0631\u064A\u0629 \u062C\u0628\u0627\u0644 \u0627\u0644\u0623\u0644\u0628 \u0627\u0644\u062A\u0631\u0643\u064A\u0629 \u0628\u0633\u0628\u0628 \u0631\u0648\u0639\u062A\u0647\u0627 \u0648\u062C\u0645\u0627\u0644\u0647\u0627\u060C \u0644\u062A\u0633\u062A\u0645\u062A\u0639\u0648\u0627 \u0628\u0631\u062D\u0644\u0629 \u062C\u0645\u064A\u0644\u0629 \u0634\u0627\u0645\u0644\u0629 \u0644\u0648\u062C\u0628\u0629 \u0627\u0644\u063A\u062F\u0627\u0621 \u0648\u0627\u0644\u0645\u0648\u0627\u0635\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u0631\u0634\u062F \u0627\u0644\u0633\u064A\u0627\u062D\u064A."]);
    },
    "pictures_and_videos": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0635\u0648\u0631 \u0648\u0627\u0644\u0641\u064A\u062F\u064A\u0648\u0647\u0627\u062A"]);
    },
    "detail1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0625\u0641\u0637\u0627\u0631 \u0648\u0627\u0644\u062A\u0648\u062C\u0647 (\u0645\u0639 \u062C\u0631\u0648\u0628 \u062C\u0645\u0627\u0639\u064A) \u0625\u0644\u0649 \u0647\u0636\u0628\u0629 \u0627\u064A\u062F\u0631"]);
    },
    "detail2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0627\u0633\u062A\u0645\u062A\u0627\u0639 \u0628\u0645\u063A\u0627\u0645\u0631\u0629 \u0627\u0644\u062A\u062C\u062F\u064A\u0641 \u0648 \u0627\u0644\u0642\u0641\u0632 \u0628\u064A\u0646 \u0636\u0641\u062A\u064A \u0627\u0644\u0646\u0647\u0631"]);
    },
    "detail3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0648 \u0645\u0646 \u062B\u0645 \u0627\u0644\u062A\u0648\u062C\u0647 \u0627\u0644\u0649 \u0627\u0644\u0634\u0644\u0627\u0644\u0627\u062A \u0648 \u0627\u0644\u062D\u0645\u0627\u0645\u0627\u062A \u0627\u0644\u0643\u0628\u0631\u064A\u062A\u064A\u0629"]);
    },
    "what_expected": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0627\u0630\u0627 \u062A\u062A\u0648\u0642\u0639\u061F"]);
    },
    "includes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0631\u062D\u0644\u0629 \u062A\u0634\u0645\u0644"]);
    },
    "include1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u0648\u0627\u0635\u0644\u0627\u062A"]);
    },
    "include2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0631\u0634\u062F \u0633\u064A\u0627\u062D\u064A"]);
    },
    "excludes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0631\u062D\u0644\u0629 \u0644\u0627 \u062A\u0634\u0645\u0644"]);
    },
    "exclude1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u062A\u0633\u0648\u0642 \u0648\u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A"]);
    },
    "terms_and_policy": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645"]);
    },
    "term1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0628\u062F\u0623 \u0627\u0644\u0631\u062D\u0644\u0629 \u0627\u0644\u0633\u0627\u0639\u0629 09:30 \u0635"]);
    },
    "term2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0646\u062A\u0647\u064A \u0627\u0644\u0631\u062D\u0644\u0629 \u0627\u0644\u0633\u0627\u0639\u0629 06:00 \u0645"]);
    },
    "term3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0631\u062D\u0644\u0629 \u064A\u0648\u0645\u064A\u0651\u0629 \u0645\u0639 \u063A\u0631\u0648\u0628 \u0633\u064A\u0627\u062D\u064A"]);
    },
    "child": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0637\u0641\u0644"]);
    },
    "adults": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0628\u0627\u0644\u063A\u064A\u0646"]);
    },
    "required": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062D\u0642\u0644 \u0627\u0644\u0632\u0627\u0645\u064A"]);
    },
    "turkiye": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0631\u0643\u064A\u0627"]);
    },
    "trabzon": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize([" \u062A\u0631\u0627\u0628\u0632\u0648\u0646"]);
    },
    "istanbul": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0633\u062A\u0646\u0628\u0648\u0644 "]);
    },
    "select_destination": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062D\u062F\u062F \u062F\u0648\u0644\u0629 \u0623\u0648 \u0645\u062F\u064A\u0646\u0629 \u0644\u0627\u0633\u062A\u0643\u0634\u0627\u0641\u0647\u0627"]);
    },
    "uae": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0627\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629"]);
    },
    "all-destinations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062C\u0645\u064A\u0639 \u0627\u0644\u0648\u062C\u0647\u0627\u062A"]);
    },
    "all-categories": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062C\u0645\u064A\u0639 \u0627\u0644\u0641\u0626\u0627\u062A"]);
    },
    "categories": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0641\u0626\u0627\u062A"]);
    },
    "blogs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u062F\u0648\u0646\u0629"]);
    },
    "test": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u062C\u0631\u064A\u0628\u064A"]);
    },
    "book_now": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u062E\u0631\u0649 \u0648 \u062D\u062C\u0632"]);
    },
    "from": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0628\u062F\u0623"]);
    },
    "tour_overview": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0631\u062D\u0644\u0629"]);
    },
    "tour_options": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0631\u062D\u0644\u0629"]);
    },
    "tour_highlights": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0631\u062D\u0644\u0629"]);
    },
    "tour_inclusion": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0631\u062D\u0644\u0629 \u062A\u0634\u0645\u0644"]);
    },
    "tour_exclusion": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0631\u062D\u0644\u0629 \u0644\u0627 \u062A\u0634\u0645\u0644"]);
    },
    "important_information": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0645\u0647\u0645\u0629"]);
    },
    "timing_and_transfer_policy": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0648\u0627\u0644\u062A\u062D\u0648\u064A\u0644"]);
    },
    "timing_and_transfer": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0648\u0627\u0644\u062A\u062D\u0648\u064A\u0644"]);
    },
    "policy": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0633\u064A\u0627\u0633\u0629"]);
    },
    "terms_and_conditions": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0623\u062D\u0643\u0627\u0645 \u0648\u0627\u0644\u0634\u0631\u0648\u0637"]);
    },
    "notes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0644\u0627\u062D\u0638\u0627\u062A"]);
    },
    "package_options": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u062C\u0648\u0644\u0629"]);
    },
    "itinerary": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u0633\u0627\u0631"]);
    },
    "package_overview": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u062C\u0648\u0644\u0629"]);
    },
    "package_highlights": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u062C\u0648\u0644\u0629"]);
    },
    "package_inclusion": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u062C\u0648\u0644\u0629 \u062A\u0634\u0645\u0644"]);
    },
    "package_exclusion": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u062C\u0648\u0644\u0629 \u0644\u0627 \u062A\u0634\u0645\u0644"]);
    },
    "newsletter_text": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u0634\u062A\u0631\u0643 \u0644\u0644\u062D\u0635\u0648\u0644 \u062C\u062F\u064A\u062F\u0646\u0627"]);
    },
    "newsletter_subtext": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0634\u062A\u0631\u0643 \u0627\u0644\u0627\u0646 \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u062E\u0631 \u0627\u0644\u0627\u062E\u0628\u0627\u0631"]);
    },
    "subscribe": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u0634\u062A\u0631\u0627\u0643"]);
    },
    "your_email": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A"]);
    },
    "footer_message": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0634\u0631\u064A\u0643\u0643 \u0627\u0644\u0645\u062B\u0627\u0644\u064A \u0641\u064A \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0623\u0648\u0633\u0637 \u0644\u0627\u0643\u062A\u0634\u0627\u0641 \u0639\u062C\u0627\u0626\u0628 \u062A\u0648\u0631\u064A\u0643\u0633\u0628\u064A\u0643\u062A"]);
    },
    "copyright_text": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062D\u0642\u0648\u0642 \u0627\u0644\u0646\u0634\u0631 \xA9 2022, \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629 \u0644\u062A\u0648\u0631\u064A\u0643\u0633\u0628\u064A\u0643\u062A"]);
    },
    "pricing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0633\u0639\u0631"]);
    },
    "reserve": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062D\u062C\u0632"]);
    },
    "whatsapp_text": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0631\u0627\u0633\u0644\u0646\u0627 \u0639\u0644\u0649 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628"]);
    },
    "children": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0627\u0637\u0641\u0627\u0644"]);
    },
    "infants": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0631\u0636\u0639"]);
    },
    "inquiry": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0623\u0633\u062A\u0641\u0633\u0627\u0631"]);
    },
    "your_message": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0631\u0633\u0627\u0644\u0629"]);
    },
    "inquire_now": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0633\u062A\u0641\u0633\u0631 \u0627\u0644\u0627\u0646"]);
    },
    "activity_options": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u0634\u0627\u0637"]);
    },
    "activity_overview": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u062A\u0634\u0627\u0637"]);
    },
    "activity_highlights": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u062A\u0634\u0627\u0637"]);
    },
    "activity_inclusion": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u062A\u0634\u0627\u0637 \u062A\u0634\u0645\u0644"]);
    },
    "activity_exclusion": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u062A\u0634\u0627\u0637 \u0644\u0627 \u062A\u0634\u0645\u0644"]);
    },
    "off": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062E\u0635\u0645"]);
    },
    "apply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0642\u062F\u064A\u0645"]);
    },
    "we_are_hiring": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0646\u062D\u0646 \u0646\u0648\u0638\u0641"]);
    },
    "hiring_section_1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0628\u0634\u0631\u064A\u0629 \u0647\u064A \u062C\u0648\u0647\u0631 \u0648\u0623\u0633\u0627\u0633 \u0627\u0647\u062A\u0645\u0627\u0645\u0646\u0627 \u0641\u064A Tourexpect \u062D\u064A\u062B \u0646\u0631\u0643\u0632 \u062F\u0627\u0626\u0645\u0627\u064B \u0639\u0644\u0649 \u062A\u0637\u0648\u064A\u0631 \u0645\u0647\u0627\u0631\u0627\u062A \u0645\u0648\u0638\u0641\u064A\u0646\u0627 \u0648\u062A\u062D\u0633\u064A\u0646 \u0641\u0631\u064A\u0642\u0646\u0627."]);
    },
    "hiring_section_2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0643\u0645\u0627 \u0646\u0628\u062D\u062B \u062F\u0627\u0626\u0645\u0627\u064B \u0639\u0646 \u0627\u0644\u0645\u0648\u0627\u0647\u0628 \u0627\u0644\u0623\u0643\u062B\u0631 \u0625\u062D\u062A\u0631\u0627\u0641\u064A\u0629 \u0644\u0643\u0644 \u0627\u0644\u0630\u064A\u0646 \u064A\u0631\u064A\u062F\u0648\u0646 \u0625\u062B\u0628\u0627\u062A \u062C\u062F\u0627\u0631\u062A\u0647\u0645. \u0625\u0644\u0649 \u062C\u0627\u0646\u0628 \u0630\u0644\u0643\u060C \u0646\u0639\u0645\u0644 \u0639\u0644\u0649 \u062A\u0637\u0648\u064A\u0631 \u0642\u062F\u0631\u0627\u062A\u0647\u0645 \u0628\u062D\u064A\u062B \u062A\u0644\u0628\u064A \u0623\u0647\u062F\u0627\u0641 \u0648\u063A\u0627\u064A\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u060C \u0648\u0646\u0633\u0639\u0649 \u0644\u062A\u0632\u0648\u064A\u062F \u0641\u0631\u064A\u0642\u0646\u0627 \u0628\u0627\u0644\u062E\u0628\u0631\u0627\u062A \u0648\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0647\u0646\u064A\u0629 \u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0639\u0645\u0644\u0646\u0627 \u0628\u0645\u0627 \u0647\u0648 \u062C\u062F\u064A\u062F \u0648\u0645\u062B\u0645\u0631."]);
    },
    "hiring_section_3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0646 \u0623\u0648\u0644\u0626\u0643 \u0627\u0644\u0630\u064A\u0646 \u0644\u062F\u064A\u0647\u0645 \u062E\u0628\u0631\u0629 \u0641\u064A \u0645\u062C\u0627\u0644 \u0639\u0645\u0644\u0646\u0627\u060C \u0648\u062A\u062A\u0645\u062A\u0639 \u0628\u0637\u0645\u0648\u062D \u0639\u0627\u0644\u064D \u0648\u0631\u0648\u062D \u0627\u0644\u0645\u0646\u0627\u0641\u0633\u0629 \u0627\u0644\u0634\u0631\u064A\u0641\u0629 \u0648\u0627\u0644\u062A\u062D\u062F\u064A \u0644\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0623\u0647\u062F\u0627\u0641 \u0627\u0644\u0645\u0647\u0646\u064A\u0629 \u0627\u0644\u062A\u064A \u0646\u0637\u0645\u062D \u0625\u0644\u064A\u0647\u0627\u060C \u064A\u0645\u0643\u0646\u0643 \u0623\u0646 \u062A\u0643\u0648\u0646 \u062C\u0632\u0621\u0627\u064B \u0645\u0646 \u0641\u0631\u064A\u0642 Tourexpect  \u0639\u0646 \u0637\u0631\u064A\u0642 \u0625\u0631\u0633\u0627\u0644 \u0633\u064A\u0631\u062A\u0643 \u0627\u0644\u0630\u0627\u062A\u064A\u0629."]);
    },
    "hiring_section_4": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0646\u0624\u0645\u0646 \u0628\u0627\u0644\u0639\u0645\u0644 \u0643\u0641\u0631\u064A\u0642 \u0645\u0648\u062D\u062F\u060C \u0648\u0627\u062D\u062A\u0631\u0627\u0645 \u062D\u0642\u0648\u0642 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 \u0648\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0625\u0646\u0633\u0627\u0646\u064A\u0629 \u0648\u0627\u0644\u0623\u062E\u0644\u0627\u0642\u064A\u0629 \u0641\u064A \u0627\u0644\u0639\u0645\u0644."]);
    },
    "hiring_section_5": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u062D\u0644\u0649 \u0627\u0644\u0645\u0648\u0638\u0641 \u0627\u0644\u0646\u0627\u062C\u062D \u0628\u0623\u0633\u0644\u0648\u0628 \u0631\u0627\u0642\u064A \u0639\u0646\u062F \u0627\u0644\u062A\u062D\u062F\u062B \u0648\u0628\u0627\u0644\u0623\u062E\u0644\u0627\u0642 \u0648\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0639\u0627\u0644\u064A\u0629 \u0644\u062A\u0642\u062F\u064A\u0645 \u0623\u0641\u0636\u0644 \u062E\u062F\u0645\u0629 \u0644\u0639\u0645\u0644\u0627\u0626\u0646\u0627 \u0627\u0644\u0643\u0631\u0627\u0645."]);
    },
    "hiring_section_6": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0644\u0645\u0648\u0638\u0641\u0648\u0646 \u0627\u0644\u0646\u0627\u062C\u062D\u0648\u0646 \u0647\u0645 \u0645\u0641\u062A\u0627\u062D \u0646\u062C\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0629\u060C \u0644\u0630\u0644\u0643 \u0646\u062D\u0646 \u0645\u0647\u062A\u0645\u0648\u0646 \u0628\u0625\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0648\u0627\u0647\u0628 \u0627\u0644\u0645\u062A\u0645\u064A\u0632\u0629 \u0648\u0627\u0644\u0643\u0641\u0627\u0621\u0627\u062A \u0630\u0627\u062A \u0627\u0644\u062E\u0628\u0631\u0627\u062A \u0627\u0644\u0639\u0627\u0644\u064A\u0629."]);
    },
    "hiring_header_1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0641\u0631\u064A\u0642 Tourexpect"]);
    },
    "hiring_header_2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0631\u0624\u064A\u062A\u0646\u0627 \u0644\u0644\u0639\u0645\u0644 \u0648\u0627\u0644\u062A\u0648\u0638\u064A\u0641:"]);
    },
    "hiring_header_3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0642\u062F\u0645 \u0644\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0625\u0644\u0649 \u0641\u0631\u064A\u0642 Tourexpect"]);
    },
    "linkedin_link": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0631\u0627\u0628\u0637 LinkedIn"]);
    },
    "position": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0646\u0635\u0628"]);
    },
    "documents": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A"]);
    },
    "visa_types_available": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u062A\u0623\u0634\u064A\u0631\u0627\u062A \u0627\u0644\u0645\u062A\u0648\u0641\u0631\u0629"]);
    },
    "requirements": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u062A\u0637\u0644\u0628\u0627\u062A"]);
    },
    "proceed_to_apply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u062A\u0627\u0628\u0639\u0629 \u0644\u0644\u062A\u0642\u062F\u064A\u0645"]);
    },
    "apply_to_visa": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0642\u062F\u0645 \u0639\u0644\u0649 \u0627\u0644\u062A\u0623\u0634\u064A\u0631\u0629"]);
    },
    "uae-visa": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0623\u0634\u064A\u0631\u0629 \u0627\u0644\u0623\u0645\u0627\u0631\u0627\u062A"]);
    },
    "uae-visa-application-form": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0641\u0648\u0631\u0645\u0629 \u0627\u0644\u062A\u0642\u062F\u064A\u0645 \u0639\u0644\u0649 \u062A\u0623\u0634\u064A\u0631\u0629 \u0627\u0644\u0623\u0645\u0627\u0631\u0627\u062A"]);
    },
    "person_1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0634\u062E\u0635 1"]);
    },
    "person_2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0634\u062E\u0635 2"]);
    },
    "person_3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0634\u062E\u0635 3"]);
    },
    "person_4": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0634\u062E\u0635 4"]);
    },
    "person_5": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0634\u062E\u0635 5"]);
    },
    "person_6": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0634\u062E\u0635 6"]);
    },
    "uae_tours": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062C\u0648\u0644\u0627\u062A \u0627\u0644\u0627\u0645\u0627\u0631\u0627\u062A"]);
    },
    "turkey_tours": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062C\u0648\u0644\u0627\u062A \u062A\u0631\u0643\u064A\u0627"]);
    },
    "see_more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0631\u0624\u064A\u0629 \u0627\u0644\u0645\u0632\u064A\u062F"]);
    },
    "best_of_trabzon_tours": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u0641\u0636\u0644 \u062C\u0648\u0644\u0627\u062A \u0637\u0631\u0627\u0628\u0632\u0648\u0646"]);
    },
    "best_of_rize_tours": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u0641\u0636\u0644 \u062C\u0648\u0644\u0627\u062A \u0631\u0627\u064A\u0632\u0627"]);
    },
    "best_of_east_black_sea_region_tours": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u0641\u0636\u0644 \u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0628\u062D\u0631 \u0627\u0644\u0623\u0633\u0648\u062F \u0627\u0644\u0634\u0631\u0642\u064A"]);
    },
    "best_of_dubai_tours": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u0641\u0636\u0644 \u062C\u0648\u0644\u0627\u062A \u062F\u0628\u064A"]);
    },
    "turkey_description": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0643\u062A\u0634\u0641 \u062C\u0645\u0627\u0644 \u062A\u0631\u0643\u064A\u0627 \u0645\u0639 \u0628\u0627\u0642\u0627\u062A\u0646\u0627 \u0627\u0644\u0633\u064A\u0627\u062D\u064A\u0629 \u0627\u0644\u062D\u0635\u0631\u064A\u0629. \u0642\u0645 \u0628\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u0645\u0639\u0627\u0644\u0645 \u0627\u0644\u0628\u0627\u0631\u0632\u0629 \u0648\u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u062B\u0642\u0627\u0641\u0629 \u0627\u0644\u063A\u0646\u064A\u0629 \u0648\u062A\u0630\u0648\u0642 \u0627\u0644\u0645\u0623\u0643\u0648\u0644\u0627\u062A \u0627\u0644\u0644\u0630\u064A\u0630\u0629. \u0627\u062D\u062C\u0632 \u0627\u0644\u0622\u0646 \u0644\u0645\u063A\u0627\u0645\u0631\u0629 \u0644\u0627 \u062A\u064F\u0646\u0633\u0649."]);
    },
    "we_accept": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0646\u062D\u0646 \u0646\u0642\u0628\u0644"]);
    },
    "single_entry": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062F\u062E\u0648\u0644 \u0641\u0631\u062F\u064A"]);
    }
  } }) });
  nuxtI18nOptions.vueI18n = await vueI18nOptionsLoader();
  nuxtI18nOptions.locales = ["en", "ar"];
  nuxtI18nOptions.defaultLocale = "en";
  nuxtI18nOptions.defaultDirection = "ltr";
  nuxtI18nOptions.routesNameSeparator = "___";
  nuxtI18nOptions.trailingSlash = false;
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default";
  nuxtI18nOptions.strategy = "prefix_except_default";
  nuxtI18nOptions.lazy = false;
  nuxtI18nOptions.langDir = null;
  nuxtI18nOptions.rootRedirect = null;
  nuxtI18nOptions.detectBrowserLanguage = true;
  nuxtI18nOptions.differentDomains = false;
  nuxtI18nOptions.baseUrl = "";
  nuxtI18nOptions.dynamicRouteParams = false;
  nuxtI18nOptions.customRoutes = "page";
  nuxtI18nOptions.pages = Object({});
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false;
  nuxtI18nOptions.onBeforeLanguageSwitch = () => "";
  nuxtI18nOptions.onLanguageSwitched = () => null;
  nuxtI18nOptions.types = void 0;
  nuxtI18nOptions.debug = false;
  return nuxtI18nOptions;
};
const nuxtI18nOptionsDefault = Object({ vueI18n: void 0, locales: [], defaultLocale: "", defaultDirection: "ltr", routesNameSeparator: "___", trailingSlash: false, defaultLocaleRouteNameSuffix: "default", strategy: "prefix_except_default", lazy: false, langDir: null, rootRedirect: null, detectBrowserLanguage: Object({ "alwaysRedirect": false, "cookieCrossOrigin": false, "cookieDomain": null, "cookieKey": "i18n_redirected", "cookieSecure": false, "fallbackLocale": "", "redirectOn": "root", "useCookie": true }), differentDomains: false, baseUrl: "", dynamicRouteParams: false, customRoutes: "page", pages: Object({}), skipSettingLocaleOnNavigate: false, onBeforeLanguageSwitch: () => "", onLanguageSwitched: () => null, types: void 0, debug: false });
const nuxtI18nInternalOptions = Object({ __normalizedLocales: [Object({ "code": "en", "iso": "en" }), Object({ "code": "ar", "iso": "ar" })] });
const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n";
const isSSG = false;
function formatMessage(message) {
  return NUXT_I18N_MODULE_ID + " " + message;
}
function isLegacyVueI18n(target) {
  return target != null && ("__VUE_I18N_BRIDGE__" in target || "_sync" in target);
}
function callVueI18nInterfaces(i18n, name, ...args) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  const [obj, method] = [target, target[name]];
  return Reflect.apply(method, obj, [...args]);
}
function getVueI18nPropertyValue(i18n, name) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  const ret = isComposer(target) ? target[name].value : isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n(target) ? target[name] : target[name];
  return ret;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function proxyNuxt(nuxt, target) {
  return function() {
    return Reflect.apply(
      target,
      {
        i18n: nuxt.$i18n,
        getRouteBaseName: nuxt.$getRouteBaseName,
        localePath: nuxt.$localePath,
        localeRoute: nuxt.$localeRoute,
        switchLocalePath: nuxt.$switchLocalePath,
        localeHead: nuxt.$localeHead,
        route: nuxt.$router.currentRoute.value,
        router: nuxt.$router,
        store: void 0
      },
      arguments
    );
  };
}
function parseAcceptLanguage(input) {
  return input.split(",").map((tag) => tag.split(";")[0]);
}
function deepCopy(src, des) {
  for (const key in src) {
    if (shared$1.exports.isObject(src[key])) {
      if (!shared$1.exports.isObject(des[key]))
        des[key] = {};
      deepCopy(src[key], des[key]);
    } else {
      des[key] = src[key];
    }
  }
}
async function loadMessage(context, loader) {
  let message = null;
  try {
    const getter = await loader().then((r) => r.default || r);
    if (shared$1.exports.isFunction(getter)) {
      console.error(formatMessage("Not support executable file (e.g. js, cjs, mjs)"));
    } else {
      message = getter;
    }
  } catch (e) {
    console.error(formatMessage("Failed locale loading: " + e.message));
  }
  return message;
}
const loadedMessages = /* @__PURE__ */ new Map();
async function loadLocale(context, locale, setter) {
  {
    const loaders = localeMessages[locale];
    if (loaders != null) {
      if (loaders.length === 1) {
        const { key, load } = loaders[0];
        let message = null;
        if (loadedMessages.has(key)) {
          message = loadedMessages.get(key);
        } else {
          message = await loadMessage(context, load);
          if (message != null) {
            loadedMessages.set(key, message);
          }
        }
        if (message != null) {
          setter(locale, message);
        }
      } else if (loaders.length > 1) {
        const targetMessage = {};
        for (const { key, load } of loaders) {
          let message = null;
          if (loadedMessages.has(key)) {
            message = loadedMessages.get(key);
          } else {
            message = await loadMessage(context, load);
            if (message != null) {
              loadedMessages.set(key, message);
            }
          }
          if (message != null) {
            deepCopy(message, targetMessage);
          }
        }
        setter(locale, targetMessage);
      }
    }
  }
}
async function loadAdditionalLocale(context, locale, merger) {
  {
    const additionalLoaders = additionalMessages[locale] || [];
    for (const additionalLoader of additionalLoaders) {
      const message = await loadMessage(context, additionalLoader);
      if (message != null) {
        merger(locale, message);
      }
    }
  }
}
function getBrowserLocale(options, context) {
  let ret;
  {
    const header = useRequestHeaders(["accept-language"]);
    const accept = header["accept-language"];
    if (accept) {
      ret = findBrowserLocale(options.__normalizedLocales, parseAcceptLanguage(accept));
    }
  }
  return ret;
}
function getLocaleCookie(context, {
  useCookie = nuxtI18nOptionsDefault.detectBrowserLanguage.useCookie,
  cookieKey = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieKey,
  localeCodes: localeCodes2 = []
} = {}) {
  if (useCookie) {
    let localeCode;
    {
      const cookie = useRequestHeaders(["cookie"]);
      if ("cookie" in cookie) {
        const parsedCookie = parse(cookie["cookie"]);
        localeCode = parsedCookie[cookieKey];
      }
    }
    if (localeCode && localeCodes2.includes(localeCode)) {
      return localeCode;
    }
  }
}
function setLocaleCookie(locale, context, {
  useCookie = nuxtI18nOptionsDefault.detectBrowserLanguage.useCookie,
  cookieKey = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieKey,
  cookieDomain = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieDomain,
  cookieSecure = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieSecure,
  cookieCrossOrigin = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieCrossOrigin
} = {}) {
  if (!useCookie) {
    return;
  }
  const date = new Date();
  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: "/",
    sameSite: cookieCrossOrigin ? "none" : "lax",
    secure: cookieCrossOrigin || cookieSecure
  };
  if (cookieDomain) {
    cookieOptions.domain = cookieDomain;
  }
  {
    if (context.res) {
      const { res } = context;
      let headers = res.getHeader("Set-Cookie") || [];
      if (!shared$1.exports.isArray(headers)) {
        headers = [String(headers)];
      }
      const redirectCookie = serialize(cookieKey, locale, cookieOptions);
      headers.push(redirectCookie);
      res.setHeader("Set-Cookie", headers);
    }
  }
}
const DefaultDetectBrowserLanguageFromResult = {
  locale: "",
  stat: false,
  reason: "unknown",
  from: "unknown"
};
function detectBrowserLanguage(route, context, nuxtI18nOptions, nuxtI18nInternalOptions2, localeCodes2 = [], locale = "", mode) {
  const { strategy } = nuxtI18nOptions;
  const { redirectOn, alwaysRedirect, useCookie, fallbackLocale } = nuxtI18nOptions.detectBrowserLanguage;
  const path = shared$1.exports.isString(route) ? route : route.path;
  if (strategy !== "no_prefix") {
    if (redirectOn === "root") {
      if (path !== "/") {
        return { locale: "", stat: false, reason: "not_redirect_on_root" };
      }
    } else if (redirectOn === "no prefix") {
      if (!alwaysRedirect && path.match(getLocalesRegex(localeCodes2))) {
        return { locale: "", stat: false, reason: "not_redirect_on_no_prefix" };
      }
    }
  }
  let localeFrom = "unknown";
  let cookieLocale;
  let matchedLocale;
  if (useCookie) {
    matchedLocale = cookieLocale = getLocaleCookie(context, { ...nuxtI18nOptions.detectBrowserLanguage, localeCodes: localeCodes2 });
    localeFrom = "cookie";
  }
  if (!matchedLocale) {
    matchedLocale = getBrowserLocale(nuxtI18nInternalOptions2);
    localeFrom = "navigator_or_header";
  }
  const finalLocale = matchedLocale || fallbackLocale;
  if (!matchedLocale && fallbackLocale) {
    localeFrom = "fallback";
  }
  const vueI18nLocale = locale || nuxtI18nOptions.vueI18n.locale;
  if (finalLocale && (!useCookie || alwaysRedirect || !cookieLocale)) {
    if (strategy === "no_prefix") {
      return { locale: finalLocale, stat: true, from: localeFrom };
    } else {
      if (finalLocale !== vueI18nLocale) {
        return { locale: finalLocale, stat: true, from: localeFrom };
      } else {
        if (alwaysRedirect && path === "/") {
          return { locale: finalLocale, stat: true, from: localeFrom };
        }
      }
    }
  }
  if (mode === "ssg_setup" && finalLocale) {
    return { locale: finalLocale, stat: true, from: localeFrom };
  }
  return { locale: "", stat: false, reason: "not_found_match" };
}
function getHost() {
  let host;
  {
    const header = useRequestHeaders(["x-forwarded-host", "host"]);
    let detectedHost;
    if ("x-forwarded-host" in header) {
      detectedHost = header["x-forwarded-host"];
    } else if ("host" in header) {
      detectedHost = header["host"];
    }
    host = shared$1.exports.isArray(detectedHost) ? detectedHost[0] : detectedHost;
  }
  return host;
}
function getLocaleDomain(locales) {
  let host = getHost() || "";
  if (host) {
    const matchingLocale = locales.find((locale) => locale.domain === host);
    if (matchingLocale) {
      return matchingLocale.code;
    } else {
      host = "";
    }
  }
  return host;
}
function getDomainFromLocale(localeCode, locales, nuxt) {
  const lang = locales.find((locale) => locale.code === localeCode);
  if (lang && lang.domain) {
    if (hasProtocol(lang.domain)) {
      return lang.domain;
    }
    let protocol;
    {
      const {
        node: { req }
      } = useRequestEvent(nuxt);
      protocol = req && isHTTPS(req) ? "https" : "http";
    }
    return protocol + "://" + lang.domain;
  }
  console.warn(formatMessage("Could not find domain name for locale " + localeCode));
}
function setCookieLocale(i18n, locale) {
  return callVueI18nInterfaces(i18n, "setLocaleCookie", locale);
}
function mergeLocaleMessage(i18n, locale, messages) {
  return callVueI18nInterfaces(i18n, "mergeLocaleMessage", locale, messages);
}
function onBeforeLanguageSwitch(i18n, oldLocale, newLocale, initial, context) {
  return callVueI18nInterfaces(i18n, "onBeforeLanguageSwitch", oldLocale, newLocale, initial, context);
}
function onLanguageSwitched(i18n, oldLocale, newLocale) {
  return callVueI18nInterfaces(i18n, "onLanguageSwitched", oldLocale, newLocale);
}
function makeFallbackLocaleCodes(fallback, locales) {
  let fallbackLocales = [];
  if (shared$1.exports.isArray(fallback)) {
    fallbackLocales = fallback;
  } else if (shared$1.exports.isObject(fallback)) {
    const targets = [...locales, "default"];
    for (const locale of targets) {
      if (fallback[locale]) {
        fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
      }
    }
  } else if (shared$1.exports.isString(fallback) && locales.every((locale) => locale !== fallback)) {
    fallbackLocales.push(fallback);
  }
  return fallbackLocales;
}
async function loadInitialMessages(context, messages, options) {
  const { defaultLocale, initialLocale, localeCodes: localeCodes2, fallbackLocale, langDir, lazy } = options;
  const setter = (locale, message) => {
    const base = messages[locale] || {};
    messages[locale] = { ...base, ...message };
  };
  if (langDir) {
    if (lazy && fallbackLocale) {
      const fallbackLocales = makeFallbackLocaleCodes(fallbackLocale, [defaultLocale, initialLocale]);
      await Promise.all(fallbackLocales.map((locale) => loadLocale(context, locale, setter)));
    }
    const locales = lazy ? [...(/* @__PURE__ */ new Set()).add(defaultLocale).add(initialLocale)] : localeCodes2;
    await Promise.all(locales.map((locale) => loadLocale(context, locale, setter)));
  }
  return messages;
}
async function mergeAdditionalMessages(context, i18n, locale) {
  await loadAdditionalLocale(
    context,
    locale,
    (locale2, message) => mergeLocaleMessage(i18n, locale2, message)
  );
}
async function loadAndSetLocale(newLocale, context, i18n, {
  useCookie = nuxtI18nOptionsDefault.detectBrowserLanguage.useCookie,
  skipSettingLocaleOnNavigate = nuxtI18nOptionsDefault.skipSettingLocaleOnNavigate,
  differentDomains = nuxtI18nOptionsDefault.differentDomains,
  initial = false,
  lazy = false,
  langDir = null
} = {}) {
  let ret = false;
  const oldLocale = getLocale(i18n);
  if (!newLocale) {
    return [ret, oldLocale];
  }
  if (!initial && differentDomains) {
    return [ret, oldLocale];
  }
  if (oldLocale === newLocale) {
    return [ret, oldLocale];
  }
  const localeOverride = onBeforeLanguageSwitch(i18n, oldLocale, newLocale, initial, context);
  const localeCodes2 = getLocaleCodes(i18n);
  if (localeOverride && localeCodes2 && localeCodes2.includes(localeOverride)) {
    if (localeOverride === oldLocale) {
      return [ret, oldLocale];
    }
    newLocale = localeOverride;
  }
  if (langDir) {
    const i18nFallbackLocales = getVueI18nPropertyValue(i18n, "fallbackLocale");
    if (lazy) {
      const setter = (locale, message) => mergeLocaleMessage(i18n, locale, message);
      if (i18nFallbackLocales) {
        const fallbackLocales = makeFallbackLocaleCodes(i18nFallbackLocales, [newLocale]);
        await Promise.all(fallbackLocales.map((locale) => loadLocale(context, locale, setter)));
      }
      await loadLocale(context, newLocale, setter);
    }
  }
  await mergeAdditionalMessages(context, i18n, newLocale);
  if (skipSettingLocaleOnNavigate) {
    return [ret, oldLocale];
  }
  if (useCookie) {
    setCookieLocale(i18n, newLocale);
  }
  setLocale(i18n, newLocale);
  onLanguageSwitched(i18n, oldLocale, newLocale);
  ret = true;
  return [ret, oldLocale];
}
function detectLocale(route, context, routeLocaleGetter, nuxtI18nOptions, initialLocaleLoader, normalizedLocales, localeCodes2 = [], ssgStatus = "normal") {
  const { strategy, defaultLocale, differentDomains } = nuxtI18nOptions;
  const initialLocale = shared$1.exports.isFunction(initialLocaleLoader) ? initialLocaleLoader() : initialLocaleLoader;
  const { locale: browserLocale, stat, reason, from } = nuxtI18nOptions.detectBrowserLanguage ? detectBrowserLanguage(route, context, nuxtI18nOptions, nuxtI18nInternalOptions, localeCodes2, initialLocale, ssgStatus) : DefaultDetectBrowserLanguageFromResult;
  if (reason === "detect_ignore_on_ssg") {
    return initialLocale;
  }
  let finalLocale = browserLocale;
  if (!finalLocale) {
    if (differentDomains) {
      finalLocale = getLocaleDomain(normalizedLocales);
    } else if (strategy !== "no_prefix") {
      finalLocale = routeLocaleGetter(route);
    } else {
      if (!nuxtI18nOptions.detectBrowserLanguage) {
        finalLocale = initialLocale;
      }
    }
  }
  if (!finalLocale && nuxtI18nOptions.detectBrowserLanguage && nuxtI18nOptions.detectBrowserLanguage.useCookie) {
    finalLocale = getLocaleCookie(context, { ...nuxtI18nOptions.detectBrowserLanguage, localeCodes: localeCodes2 });
  }
  if (!finalLocale) {
    finalLocale = defaultLocale || "";
  }
  return finalLocale;
}
function detectRedirect(route, context, targetLocale, routeLocaleGetter, nuxtI18nOptions) {
  const { strategy, defaultLocale, differentDomains } = nuxtI18nOptions;
  let redirectPath = "";
  if (!differentDomains && strategy !== "no_prefix" && (routeLocaleGetter(route) !== targetLocale || strategy === "prefix_and_default" && targetLocale === defaultLocale)) {
    const { fullPath } = route;
    const decodedRoute = decodeURI(fullPath);
    const routePath = context.$switchLocalePath(targetLocale) || context.$localePath(fullPath, targetLocale);
    if (shared$1.exports.isString(routePath) && routePath && routePath !== fullPath && routePath !== decodedRoute && !routePath.startsWith("//")) {
      redirectPath = routePath;
    }
  }
  if (differentDomains || isSSG) {
    const switchLocalePath2 = useSwitchLocalePath$1({
      i18n: getComposer(context.$i18n),
      route,
      router: context.$router
    });
    const routePath = switchLocalePath2(targetLocale);
    if (shared$1.exports.isString(routePath)) {
      redirectPath = routePath;
    }
  }
  return redirectPath;
}
function isRootRedirectOptions(rootRedirect) {
  return shared$1.exports.isObject(rootRedirect) && "path" in rootRedirect && "statusCode" in rootRedirect;
}
const useRedirectState = () => useState(NUXT_I18N_MODULE_ID + ":redirect", () => "");
async function navigate(args, {
  status = 302,
  rootRedirect = nuxtI18nOptionsDefault.rootRedirect,
  differentDomains = nuxtI18nOptionsDefault.differentDomains,
  skipSettingLocaleOnNavigate = nuxtI18nOptionsDefault.skipSettingLocaleOnNavigate
} = {}) {
  const { i18n, locale, route } = args;
  let { redirectPath } = args;
  if (route.path === "/" && rootRedirect) {
    if (shared$1.exports.isString(rootRedirect)) {
      redirectPath = rootRedirect;
    } else if (isRootRedirectOptions(rootRedirect)) {
      redirectPath = "/" + rootRedirect.path;
      status = rootRedirect.statusCode;
    }
    return navigateTo(redirectPath, { redirectCode: status });
  }
  if (!differentDomains) {
    if (redirectPath) {
      return navigateTo(redirectPath, { redirectCode: status });
    }
  } else {
    const state = useRedirectState();
    {
      state.value = redirectPath;
    }
  }
}
function inejctNuxtHelpers(nuxt, i18n) {
  defineGetter(nuxt, "$i18n", i18n.global);
  for (const pair of [
    ["getRouteBaseName", getRouteBaseName],
    ["localePath", localePath],
    ["localeRoute", localeRoute],
    ["switchLocalePath", switchLocalePath],
    ["localeHead", localeHead]
  ]) {
    defineGetter(nuxt, "$" + pair[0], proxyNuxt(nuxt, pair[1]));
  }
}
function extendPrefixable(differentDomains) {
  return (opts) => {
    return DefaultPrefixable(opts) && !differentDomains;
  };
}
function extendSwitchLocalePathIntercepter(differentDomains, normalizedLocales, nuxt) {
  return (path, locale) => {
    if (differentDomains) {
      const domain = getDomainFromLocale(locale, normalizedLocales, nuxt);
      if (domain) {
        return joinURL(domain, path);
      } else {
        return path;
      }
    } else {
      return DefaultSwitchLocalePathIntercepter(path);
    }
  };
}
function extendBaseUrl(baseUrl, options) {
  return (context) => {
    if (shared$1.exports.isFunction(baseUrl)) {
      return baseUrl(context);
    }
    const { differentDomains, localeCodeLoader, normalizedLocales } = options;
    const localeCode = shared$1.exports.isFunction(localeCodeLoader) ? localeCodeLoader() : localeCodeLoader;
    if (differentDomains && localeCode) {
      const domain = getDomainFromLocale(localeCode, normalizedLocales, options.nuxt);
      if (domain) {
        return domain;
      }
    }
    return baseUrl;
  };
}
const node_modules__64nuxtjs_i18n_dist_runtime_plugins_i18n_mjs_yfWm7jX06p = defineNuxtPlugin(async (nuxt) => {
  var _a2;
  let __temp, __restore;
  const router = useRouter();
  const route = useRoute();
  const { vueApp: app } = nuxt;
  const nuxtContext = nuxt;
  const nuxtI18nOptions = ([__temp, __restore] = executeAsync(() => resolveNuxtI18nOptions()), __temp = await __temp, __restore(), __temp);
  const useCookie = nuxtI18nOptions.detectBrowserLanguage && nuxtI18nOptions.detectBrowserLanguage.useCookie;
  const { __normalizedLocales: normalizedLocales } = nuxtI18nInternalOptions;
  const {
    defaultLocale,
    differentDomains,
    skipSettingLocaleOnNavigate,
    lazy,
    langDir,
    routesNameSeparator,
    defaultLocaleRouteNameSuffix,
    strategy,
    rootRedirect
  } = nuxtI18nOptions;
  nuxtI18nOptions.baseUrl = extendBaseUrl(nuxtI18nOptions.baseUrl, {
    differentDomains,
    nuxt: nuxtContext,
    localeCodeLoader: defaultLocale,
    normalizedLocales
  });
  const getLocaleFromRoute = createLocaleFromRouteGetter(localeCodes, routesNameSeparator, defaultLocaleRouteNameSuffix);
  const vueI18nOptions = nuxtI18nOptions.vueI18n;
  vueI18nOptions.messages = vueI18nOptions.messages || {};
  vueI18nOptions.fallbackLocale = (_a2 = vueI18nOptions.fallbackLocale) != null ? _a2 : false;
  registerGlobalOptions(router, {
    ...nuxtI18nOptions,
    dynamicRouteParamsKey: "nuxtI18n",
    switchLocalePathIntercepter: extendSwitchLocalePathIntercepter(differentDomains, normalizedLocales, nuxtContext),
    prefixable: extendPrefixable(differentDomains)
  });
  const getDefaultLocale = (defaultLocale2) => defaultLocale2 || vueI18nOptions.locale || "en-US";
  let initialLocale = detectLocale(
    route,
    nuxt.ssrContext,
    getLocaleFromRoute,
    nuxtI18nOptions,
    getDefaultLocale(defaultLocale),
    normalizedLocales,
    localeCodes,
    "normal"
  );
  vueI18nOptions.messages = ([__temp, __restore] = executeAsync(() => loadInitialMessages(nuxtContext, vueI18nOptions.messages, {
    ...nuxtI18nOptions,
    initialLocale,
    fallbackLocale: vueI18nOptions.fallbackLocale,
    localeCodes
  })), __temp = await __temp, __restore(), __temp);
  initialLocale = getDefaultLocale(initialLocale);
  const i18n = createI18n({
    ...vueI18nOptions,
    locale: initialLocale
  });
  let notInitialSetup = true;
  const isInitialLocaleSetup = (locale) => initialLocale !== locale && notInitialSetup;
  extendI18n(i18n, {
    locales: nuxtI18nOptions.locales,
    localeCodes,
    baseUrl: nuxtI18nOptions.baseUrl,
    context: nuxtContext,
    hooks: {
      onExtendComposer(composer) {
        composer.strategy = strategy;
        composer.localeProperties = computed(() => {
          return normalizedLocales.find((l) => l.code === composer.locale.value) || {
            code: composer.locale.value
          };
        });
        composer.setLocale = async (locale) => {
          const localeSetup = isInitialLocaleSetup(locale);
          const [modified] = await loadAndSetLocale(locale, nuxtContext, i18n, {
            useCookie,
            differentDomains,
            initial: localeSetup,
            skipSettingLocaleOnNavigate,
            lazy,
            langDir
          });
          if (modified && localeSetup) {
            notInitialSetup = false;
          }
          const redirectPath = detectRedirect(route, nuxtContext, locale, getLocaleFromRoute, nuxtI18nOptions);
          navigate(
            {
              i18n,
              redirectPath,
              locale,
              route
            },
            {
              differentDomains,
              skipSettingLocaleOnNavigate,
              rootRedirect
            }
          );
        };
        composer.differentDomains = differentDomains;
        composer.getBrowserLocale = () => getBrowserLocale(nuxtI18nInternalOptions, nuxt.ssrContext);
        composer.getLocaleCookie = () => getLocaleCookie(nuxt.ssrContext, { ...nuxtI18nOptions.detectBrowserLanguage, localeCodes });
        composer.setLocaleCookie = (locale) => setLocaleCookie(locale, nuxt.ssrContext, nuxtI18nOptions.detectBrowserLanguage || void 0);
        composer.onBeforeLanguageSwitch = nuxtI18nOptions.onBeforeLanguageSwitch;
        composer.onLanguageSwitched = nuxtI18nOptions.onLanguageSwitched;
        composer.finalizePendingLocaleChange = async () => {
          if (!i18n.__pendingLocale) {
            return;
          }
          setLocale(i18n, i18n.__pendingLocale);
          if (i18n.__resolvePendingLocalePromise) {
            await i18n.__resolvePendingLocalePromise();
          }
          i18n.__pendingLocale = void 0;
        };
        composer.waitForPendingLocaleChange = async () => {
          if (i18n.__pendingLocale && i18n.__pendingLocalePromise) {
            await i18n.__pendingLocalePromise;
          }
        };
      },
      onExtendExportedGlobal(g) {
        return {
          strategy: {
            get() {
              return g.strategy;
            }
          },
          localeProperties: {
            get() {
              return g.localeProperties.value;
            }
          },
          setLocale: {
            get() {
              return async (locale) => Reflect.apply(g.setLocale, g, [locale]);
            }
          },
          differentDomains: {
            get() {
              return g.differentDomains;
            }
          },
          getBrowserLocale: {
            get() {
              return () => Reflect.apply(g.getBrowserLocale, g, []);
            }
          },
          getLocaleCookie: {
            get() {
              return () => Reflect.apply(g.getLocaleCookie, g, []);
            }
          },
          setLocaleCookie: {
            get() {
              return (locale) => Reflect.apply(g.setLocaleCookie, g, [locale]);
            }
          },
          onBeforeLanguageSwitch: {
            get() {
              return (oldLocale, newLocale, initialSetup, context) => Reflect.apply(g.onBeforeLanguageSwitch, g, [oldLocale, newLocale, initialSetup, context]);
            }
          },
          onLanguageSwitched: {
            get() {
              return (oldLocale, newLocale) => Reflect.apply(g.onLanguageSwitched, g, [oldLocale, newLocale]);
            }
          },
          finalizePendingLocaleChange: {
            get() {
              return () => Reflect.apply(g.finalizePendingLocaleChange, g, []);
            }
          },
          waitForPendingLocaleChange: {
            get() {
              return () => Reflect.apply(g.waitForPendingLocaleChange, g, []);
            }
          }
        };
      },
      onExtendVueI18n(composer) {
        return {
          strategy: {
            get() {
              return composer.strategy;
            }
          },
          localeProperties: {
            get() {
              return composer.localeProperties.value;
            }
          },
          setLocale: {
            get() {
              return async (locale) => Reflect.apply(composer.setLocale, composer, [locale]);
            }
          },
          differentDomains: {
            get() {
              return composer.differentDomains;
            }
          },
          getBrowserLocale: {
            get() {
              return () => Reflect.apply(composer.getBrowserLocale, composer, []);
            }
          },
          getLocaleCookie: {
            get() {
              return () => Reflect.apply(composer.getLocaleCookie, composer, []);
            }
          },
          setLocaleCookie: {
            get() {
              return (locale) => Reflect.apply(composer.setLocaleCookie, composer, [locale]);
            }
          },
          onBeforeLanguageSwitch: {
            get() {
              return (oldLocale, newLocale, initialSetup, context) => Reflect.apply(composer.onBeforeLanguageSwitch, composer, [oldLocale, newLocale, initialSetup, context]);
            }
          },
          onLanguageSwitched: {
            get() {
              return (oldLocale, newLocale) => Reflect.apply(composer.onLanguageSwitched, composer, [oldLocale, newLocale]);
            }
          },
          finalizePendingLocaleChange: {
            get() {
              return () => Reflect.apply(composer.finalizePendingLocaleChange, composer, []);
            }
          },
          waitForPendingLocaleChange: {
            get() {
              return () => Reflect.apply(composer.waitForPendingLocaleChange, composer, []);
            }
          }
        };
      }
    }
  });
  const pluginOptions = {
    __composerExtend: (c) => {
      const g = getComposer(i18n);
      c.strategy = g.strategy;
      c.localeProperties = computed(() => g.localeProperties.value);
      c.setLocale = g.setLocale;
      c.differentDomains = g.differentDomains;
      c.getBrowserLocale = g.getBrowserLocale;
      c.getLocaleCookie = g.getLocaleCookie;
      c.setLocaleCookie = g.setLocaleCookie;
      c.onBeforeLanguageSwitch = g.onBeforeLanguageSwitch;
      c.onLanguageSwitched = g.onLanguageSwitched;
      c.finalizePendingLocaleChange = g.finalizePendingLocaleChange;
      c.waitForPendingLocaleChange = g.waitForPendingLocaleChange;
    }
  };
  app.use(i18n, pluginOptions);
  inejctNuxtHelpers(nuxtContext, i18n);
  [__temp, __restore] = executeAsync(() => mergeAdditionalMessages(nuxtContext, i18n, initialLocale)), await __temp, __restore();
  addRouteMiddleware(
    "locale-changing",
    defineNuxtRouteMiddleware(async (to, from) => {
      let __temp2, __restore2;
      const locale = detectLocale(
        to,
        nuxt.ssrContext,
        getLocaleFromRoute,
        nuxtI18nOptions,
        () => {
          return getLocale(i18n) || getDefaultLocale(defaultLocale);
        },
        normalizedLocales,
        localeCodes,
        "normal"
      );
      const localeSetup = isInitialLocaleSetup(locale);
      const [modified] = ([__temp2, __restore2] = executeAsync(() => loadAndSetLocale(locale, nuxtContext, i18n, {
        useCookie,
        differentDomains,
        initial: localeSetup,
        skipSettingLocaleOnNavigate,
        lazy,
        langDir
      })), __temp2 = await __temp2, __restore2(), __temp2);
      if (modified && localeSetup) {
        notInitialSetup = false;
      }
      const redirectPath = detectRedirect(to, nuxtContext, locale, getLocaleFromRoute, nuxtI18nOptions);
      navigate(
        {
          i18n,
          redirectPath,
          locale,
          route: to
        },
        {
          differentDomains,
          skipSettingLocaleOnNavigate,
          rootRedirect
        }
      );
    }),
    { global: true }
  );
});
let modules = [Pagination, Navigation, Autoplay, Parallax, EffectFade, Virtual];
SwiperClass.use([Navigation, Pagination]);
const plugins_swiper_ts_eteSCvuYkd = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAwesomeSwiper, SwiperClass, Swiper, SwiperSlide, modules);
});
const plugins_v_click_outside_ts_NsCOXhKC9o = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vClickOutside);
});
const globalOptions = {
  mode: "international",
  onlyCountries: ["IQ", "AE"],
  placeholder: "Hello"
};
const plugins_vue3_tel_input_ts_aL2CwhQBQA = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueTelInput, globalOptions);
});
const _plugins = [
  _nuxt_components_plugin_mjs_KR1HBZs4kY,
  node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0,
  node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB,
  node_modules__64nuxtjs_i18n_dist_runtime_plugins_composition_mjs_sLxaNGmlSL,
  node_modules__64nuxtjs_i18n_dist_runtime_plugins_i18n_mjs_yfWm7jX06p,
  plugins_swiper_ts_eteSCvuYkd,
  plugins_v_click_outside_ts_NsCOXhKC9o,
  plugins_vue3_tel_input_ts_aL2CwhQBQA
];
function useLocalePath(options = {}) {
  const i18n = options.i18n || getComposer(useNuxtApp().$i18n);
  const route = useRoute();
  const router = useRouter();
  return useLocalePath$1({
    router,
    route,
    i18n
  });
}
function useSwitchLocalePath(options = {}) {
  const i18n = options.i18n || getComposer(useNuxtApp().$i18n);
  const route = useRoute();
  const router = useRouter();
  return useSwitchLocalePath$1({
    router,
    route,
    i18n
  });
}
const _imports_0$1 = "" + globalThis.__buildAssetsURL("logo.457d8669.svg");
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = {
  __name: "NavigationBar",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const localePath2 = useLocalePath();
    const { locale } = useI18n();
    const switchLocalePath2 = useSwitchLocalePath();
    const config = useRuntimeConfig();
    useRouter();
    ref(useRoute());
    [__temp, __restore] = withAsyncContext(() => useFetch(() => `nav-destination`, {
      baseURL: config.public.API_BASE_URL
    }, "$ToaDOU3Lb4")), __temp = await __temp, __restore();
    let menu = ref([
      {
        id: 0,
        name_en: "Destinations",
        name_ar: "\u0627\u0644\u0648\u062C\u0647\u0627\u062A",
        slug: "destinations",
        only_sidebar: false,
        is_link: false,
        items: []
      },
      {
        id: 1,
        name_en: "Packages",
        name_ar: "\u0627\u0644\u0628\u0627\u0642\u0627\u062A",
        slug: "packages",
        only_sidebar: false,
        is_link: false,
        items: []
      },
      {
        id: 2,
        name_en: "Tours",
        name_ar: "\u0627\u0644\u062C\u0648\u0644\u0627\u062A",
        slug: "tours",
        only_sidebar: false,
        is_link: false,
        items: []
      },
      {
        id: 3,
        name_en: "Activities",
        name_ar: "\u0627\u0646\u0634\u0637\u0629",
        slug: "activities",
        is_link: false,
        only_sidebar: false,
        items: []
      },
      {
        id: 4,
        name_en: "Visas",
        name_ar: "\u0627\u0644\u062A\u0623\u0634\u064A\u0631\u0627\u062A",
        slug: "visas",
        is_link: false,
        only_sidebar: false,
        items: []
      },
      {
        id: 5,
        name_en: "Transfer",
        name_ar: "\u0627\u0644\u062A\u0646\u0642\u0644",
        slug: "transfer",
        is_link: true,
        only_sidebar: false,
        items: []
      },
      {
        id: 6,
        name_en: "Hotels & Resorts",
        name_ar: "\u0627\u0644\u0641\u0646\u0627\u062F\u0642 \u0648 \u0627\u0644\u0645\u0646\u062A\u062C\u0639\u0627\u062A",
        slug: "hotels-and-resorts",
        only_sidebar: false,
        is_link: true,
        items: []
      },
      {
        id: 7,
        name_en: "Blogs",
        name_ar: "\u0627\u0644\u0645\u062F\u0648\u0646\u0629",
        slug: "blogs",
        only_sidebar: true,
        is_link: true,
        items: []
      }
    ]);
    let submenu = ref([]);
    let subsubmenu = ref([]);
    let menu_title = ref("");
    let menu_slug = ref("");
    let submenu_title = ref("");
    let submenu_slug = ref("");
    let menu_path_by_id = ref({
      menu: -1,
      sub_menu: -1
    });
    let is_menu = ref(false);
    let mobile_menu = ref(false);
    const closeMenu = () => {
      menu_path_by_id.value.menu = -1;
      menu_path_by_id.value.sub_menu = -1;
      submenu_title.value = "";
      submenu.value = [];
      subsubmenu.value = [];
      is_menu.value = false;
      mobile_menu.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bg-white w-full fixed top-0 z-20",
        style: { "font-family": "'Source Sans Pro', sans-serif" }
      }, _attrs))} data-v-d3552728><nav data-v-d3552728><div id="navbar" data-v-d3552728><div class="flex outclick justify-between h-16 px-3 md:px-0 max-w-6xl mx-auto" data-v-d3552728><div class="flex items-center" data-v-d3552728><svg xmlns="http://www.w3.org/2000/svg" class="h-6 text-gray-600 hover:text-black cursor-pointer mx-3" viewBox="0 0 20 20" fill="currentColor" data-v-d3552728><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" data-v-d3552728></path></svg>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath2)("/"),
        class: "items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="logo" class="h-6" data-v-d3552728${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "logo",
                class: "h-6"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-36 my-auto" data-v-d3552728><div class="flex justify-end items-center" data-v-d3552728>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(switchLocalePath2)(unref(locale) == "ar" ? "en" : "ar"),
        class: "bg-white text-xs border px-2 flex items-center md:py-1 rounded shadow-md hover:shadow-sm duration-700 h-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(locale) == "ar" ? "English" : "\u0627\u0644\u0639\u0631\u0628\u064A\u0629")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(locale) == "ar" ? "English" : "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<select name="curr" id="curr" class="bg-white text-xs border w-20 m-1 md:m-0 py-1 md:py-1 rounded shadow-md hover:shadow-sm duration-700 h-8" data-v-d3552728><option value="USD" data-v-d3552728>USD</option><option value="aed" data-v-d3552728>AED</option></select></div></div></div><div class="flex justify-between px-3 md:px-0 w-full max-w-6xl mx-auto" data-v-d3552728><div class="hidden lg:block w-full" data-v-d3552728><nav class="border-gray-200 sm:px-4 rounded w-full hidden lg:block" data-v-d3552728><div class="flex items-center justify-center" data-v-d3552728><div class="absolute md:static w-full md:block md:w-auto left-0 right-0 z-20" style="${ssrRenderStyle({ "top": "8rem" })}" id="mobile-menu" data-v-d3552728><ul class="flex flex-col mx-auto my-auto md:flex-row md:mt-0 md:text-sm md:font-medium items-center" data-v-d3552728><!--[-->`);
      ssrRenderList(unref(menu), (item, i) => {
        _push(`<li class="w-full md:w-auto text-center" data-v-d3552728>`);
        if (item.only_sidebar == false && item.is_link == false) {
          _push(`<div class="md:mx-4" data-v-d3552728><button class="peer pr-4 pl-3 font-bold text-xl text-gray-800 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0" data-v-d3552728>${ssrInterpolate(item["name_" + unref(locale)])}</button></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.is_link == true) {
          _push(`<div class="md:mx-4" data-v-d3552728>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: unref(localePath2)(item.slug)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="peer pr-4 pl-3 font-bold text-xl text-gray-800 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0" data-v-d3552728${_scopeId}>${ssrInterpolate(item["name_" + unref(locale)])}</div>`);
              } else {
                return [
                  createVNode("div", { class: "peer pr-4 pl-3 font-bold text-xl text-gray-800 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0" }, toDisplayString(item["name_" + unref(locale)]), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div></nav></div></div></div><div style="${ssrRenderStyle(unref(is_menu) ? null : { display: "none" })}" class="top-0 outclick z-40 absolute w-full h-screen menu bg-black bg-opacity-25 hidden md:flex" data-v-d3552728><div class="flex" id="menu" data-v-d3552728><div class="w-80 h-screen border bg-white" data-v-d3552728><div class="w-full py-10 flex items-center mx-auto" data-v-d3552728><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mx-5 hover:text-gray-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor" data-v-d3552728><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-d3552728></path></svg>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath2)("/"),
        class: "flex items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="logo" class="h-6" data-v-d3552728${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "logo",
                class: "h-6"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul class="space-y-6 md:flex-row md:mt-0 md:text-sm md:font-medium items-center" data-v-d3552728><!--[-->`);
      ssrRenderList(unref(menu), (item, i) => {
        _push(`<li class="w-full md:w-auto" data-v-d3552728>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: unref(localePath2)(item["slug"])
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="block font-semibold text-2xl py-2 pr-4 pl-3 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0" data-v-d3552728${_scopeId}>${ssrInterpolate(item["name_" + unref(locale)])}</div>`);
            } else {
              return [
                createVNode("div", { class: "block font-semibold text-2xl py-2 pr-4 pl-3 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0" }, toDisplayString(item["name_" + unref(locale)]), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
      if (unref(submenu).length) {
        _push(`<div class="w-64 md:w-64 h-screen border bg-white" data-v-d3552728><div class="w-full py-10 text-center text-xl font-bold" data-v-d3552728><span data-v-d3552728>${ssrInterpolate(_ctx.$t(unref(menu_title)))}</span></div><ul class="space-y-4 md:flex-row mx-6 md:mt-0 md:text-sm md:font-medium items-center" data-v-d3552728><!--[-->`);
        ssrRenderList(unref(submenu), (item, j) => {
          _push(`<li class="w-full flex justify-between md:w-auto items-center" data-v-d3552728>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: unref(localePath2)(`/${unref(menu_slug)}/${unref(submenu_slug)}`),
            onClick: closeMenu,
            class: [
              unref(menu_path_by_id).sub_menu == j ? "text-blue-400" : "text-black",
              "block text-sm py-2 pr-4 pl-3 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
            ]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item["name_" + unref(locale)])}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item["name_" + unref(locale)]), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          if (unref(locale) == "en") {
            _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-d3552728><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" data-v-d3552728></path></svg>`);
          } else {
            _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 text-gray-600" data-v-d3552728><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" data-v-d3552728></path></svg>`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(submenu_title).length) {
        _push(`<div class="w-64 md:w-64 h-screen border bg-white" data-v-d3552728><div class="w-full py-10 text-center text-xl font-bold" data-v-d3552728><span data-v-d3552728>${ssrInterpolate(unref(submenu_title))}</span></div><ul class="space-y-4 md:flex-row mx-6 md:mt-0 md:text-sm md:font-medium items-center" data-v-d3552728><!--[-->`);
        ssrRenderList(unref(subsubmenu)["items"], (item, i) => {
          _push(`<li class="w-full md:w-auto" data-v-d3552728>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: unref(localePath2)(`/${unref(menu_slug)}/${unref(submenu_slug)}/${item["slug"]}`),
            onClick: closeMenu,
            class: "block text-sm py-2 pr-4 pl-3 text-gray-700 border-gray-100 md:border-0 hover:text-blue-400 md:p-0"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item["name_" + unref(locale)])}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item["name_" + unref(locale)]), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div style="${ssrRenderStyle(unref(mobile_menu) ? null : { display: "none" })}" id="mobilemenu" class="top-0 outclick z-40 absolute w-full h-screen menu flex bg-opacity-25 md:hidden" data-v-d3552728><div class="w-full h-screen border bg-white" data-v-d3552728><div class="w-full py-10 flex items-center mx-auto" data-v-d3552728><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mx-5 hover:text-gray-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor" data-v-d3552728><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-d3552728></path></svg>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath2)("/"),
        class: "flex items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="logo" class="h-6" data-v-d3552728${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "logo",
                class: "h-6"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul class="space-y-6 md:flex-row mx-20 md:mt-0 md:text-sm md:font-medium items-center" data-v-d3552728><!--[-->`);
      ssrRenderList(unref(menu), (item, i) => {
        _push(`<li class="w-full md:w-auto" data-v-d3552728><button class="${ssrRenderClass([unref(menu_path_by_id).menu == i ? "text-blue-400" : "", "block font-semibold text-xl py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"])}" data-v-d3552728>${ssrInterpolate(item["name_" + unref(locale)])}</button></li>`);
      });
      _push(`<!--]--></ul></div><div style="${ssrRenderStyle(unref(submenu).length ? null : { display: "none" })}" class="w-full md:w-64 h-screen border bg-white z-20 absolute md:static" data-v-d3552728><div class="flex w-full justify-between mt-4 px-4" data-v-d3552728><svg xmlns="http://www.w3.org/2000/svg" class="h-6 text-gray-400 hover:text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-d3552728><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" data-v-d3552728></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-6 text-gray-400 hover:text-gray-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor" data-v-d3552728><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-d3552728></path></svg></div><div class="w-full py-10 text-center text-xl font-bold" data-v-d3552728><span data-v-d3552728>${ssrInterpolate(_ctx.$t(unref(menu_title)))}</span></div><ul class="space-y-4 md:flex-row mx-6 md:mt-0 md:text-sm md:font-medium items-center" data-v-d3552728><!--[-->`);
      ssrRenderList(unref(submenu), (item, j) => {
        _push(`<li class="w-full flex justify-between items-center md:w-auto" data-v-d3552728><button class="${ssrRenderClass([unref(menu_path_by_id).sub_menu == j ? "text-blue-400" : "", "block text-sm py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"])}" data-v-d3552728>${ssrInterpolate(item["name_" + unref(locale)])}</button>`);
        if (item.items.length) {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-d3552728><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" data-v-d3552728></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div style="${ssrRenderStyle(unref(submenu_title).length ? null : { display: "none" })}" class="w-full md:w-64 h-screen border bg-white z-30 absolute md:static" data-v-d3552728><div class="flex w-full justify-between mt-4 px-4" data-v-d3552728><svg xmlns="http://www.w3.org/2000/svg" class="h-6 text-gray-400 hover:text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-d3552728><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" data-v-d3552728></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-6 text-gray-400 hover:text-gray-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor" data-v-d3552728><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-d3552728></path></svg></div><div class="w-full py-10 text-center text-xl font-bold" data-v-d3552728><span data-v-d3552728>${ssrInterpolate(unref(submenu_title))}</span></div><ul class="space-y-4 md:flex-row mx-6 md:mt-0 md:text-sm md:font-medium items-center" data-v-d3552728><!--[-->`);
      ssrRenderList(unref(subsubmenu)["items"], (item, i) => {
        _push(`<li class="w-full md:w-auto" data-v-d3552728><button class="block text-sm py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0" data-v-d3552728>${ssrInterpolate(item["name_" + unref(locale)])}</button></li>`);
      });
      _push(`<!--]--></ul></div></div></nav></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavigationBar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d3552728"]]);
const Fragment = defineComponent({
  setup(_props, { slots }) {
    return () => {
      var _a2;
      return (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h(component, props === true ? {} : props, slots) : h(Fragment, {}, slots) };
};
const layouts = {};
const LayoutLoader = defineComponent({
  props: {
    name: String,
    ...{}
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => {
      return h(LayoutComponent, {}, context.slots);
    };
  }
});
const __nuxt_component_1 = defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const injectedRoute = inject("_route");
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = unref(props.name)) != null ? _a2 : route.meta.layout) != null ? _b2 : "default";
    });
    return () => {
      var _a2;
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = (_a2 = route.meta.layoutTransition) != null ? _a2 : appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => _wrapIf(LayoutLoader, hasLayout && { key: layout.value, name: layout.value, hasTransition: void 0 }, context.slots).default()
      }).default();
    };
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a2;
    return ((_a2 = route.params[r.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a2;
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a3;
    return ((_a3 = m.components) == null ? void 0 : _a3.default) === routeProps.Component.type;
  });
  const source = (_a2 = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a2 : matchedRoute && interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const __nuxt_component_2 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          var _a2, _b2, _c2, _d2;
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(props.pageKey, routeProps);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!((_b2 = (_a2 = props.transition) != null ? _a2 : routeProps.route.meta.pageTransition) != null ? _b2 : appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          return _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              (_d2 = (_c2 = props.keepalive) != null ? _c2 : routeProps.route.meta.keepalive) != null ? _d2 : appKeepalive,
              h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, { default: () => h(Component, { key, routeProps, pageKey: key, hasTransition }) })
            )
          ).default();
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const Component = defineComponent({
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const _imports_0 = "" + globalThis.__buildAssetsURL("news-letter-img.b6367af2.png");
const _imports_1 = "" + globalThis.__buildAssetsURL("footer-logo.c8bcef80.svg");
const _imports_2 = "" + globalThis.__buildAssetsURL("visa.79b6bdb5.jpg");
const _imports_3 = "" + globalThis.__buildAssetsURL("mastercard.e76ad166.jpg");
const _imports_4 = "" + globalThis.__buildAssetsURL("american_express.2043242a.jpg");
const _imports_5 = "" + globalThis.__buildAssetsURL("union-pay.833ed72d.png");
const _imports_6 = "" + globalThis.__buildAssetsURL("google_pay.0d903dde.jpg");
const _imports_7 = "" + globalThis.__buildAssetsURL("apple_pay.109e35d7.jpg");
const _sfc_main$2 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath2 = useLocalePath();
    const { locale } = useI18n();
    const menu_meue = ref([
      {
        title_en: "Our Services",
        title_ar: "\u062E\u062F\u0645\u0627\u062A\u0646\u0627",
        links: [
          {
            name_en: "Packages",
            name_ar: "\u0627\u0644\u0628\u0627\u0642\u0627\u062A",
            slug: "packages"
          },
          {
            name_en: "Tours",
            name_ar: "\u0627\u0644\u062C\u0648\u0644\u0627\u062A",
            slug: "tours"
          },
          {
            name_en: "Activities",
            name_ar: "\u0627\u0644\u0623\u0646\u0634\u0637\u0629",
            slug: "#"
          },
          {
            name_en: "Transfer",
            name_ar: "\u0627\u0644\u062A\u0646\u0642\u0644",
            slug: "#"
          },
          {
            name_en: "Hotels & Resorts",
            name_ar: "\u0627\u0644\u0646\u0627\u062F\u0642 \u0648 \u0627\u0644\u0645\u0646\u062A\u062C\u0639\u0627\u062A",
            slug: "#"
          }
        ]
      },
      {
        title_en: "About Tourexpect",
        title_ar: "\u0639\u0646 \u062A\u0648\u0631\u0627\u064A\u0643\u0633\u0628\u0643\u062A",
        links: [
          {
            name_en: "About Us",
            name_ar: "\u062D\u0648\u0644\u0646\u0627",
            slug: "about"
          },
          {
            name_en: "We Are Hiring",
            name_ar: "\u0646\u062D\u0646 \u0646\u0648\u0638\u0641",
            slug: "we-are-hiring"
          },
          {
            name_en: "Terms & Conditions",
            name_ar: "\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645",
            slug: "#"
          },
          {
            name_en: "Privicy Policies",
            name_ar: "\u0633\u064A\u0627\u0633\u0627\u062A \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629",
            slug: "#"
          },
          {
            name_en: "Contact Us",
            name_ar: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627",
            slug: "#"
          }
        ]
      },
      {
        title_en: "Our Links",
        title_ar: "\u0631\u0648\u0627\u0628\u0637\u0646\u0627",
        links: [
          {
            name_en: "First Link",
            slug: "#"
          },
          {
            name_en: "Second Link",
            slug: "#"
          },
          {
            name_en: "Third Link",
            slug: "#"
          },
          {
            name_en: "Fourth Link",
            slug: "#"
          },
          {
            name_en: "Fifth Link",
            slug: "#"
          }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-blue-900 w-full" }, _attrs))}><div id="app2"><div id="livechat-widget"></div></div><div class="w-full h-96 bg-no-repeat bg-cover pt-16" style="${ssrRenderStyle({ "background-image": "url('/_nuxt/assets/images/newsletter-bg.png')" })}"><div class="max-w-4xl mx-auto flex"><div class="hidden lg:block absolute left-32 -mt-32"><img${ssrRenderAttr("src", _imports_0)} class="floating" alt="news letter image"></div><div class="w-full lg:w-1/2 xl:w-2/3 2xl:w-3/4 px-4 ml-auto"><h1 class="text-xl md:text-3xl xl:text-3xl font-bold leading-10 text-gray-800 mb-2 text-center xl:text-left md:mt-0 mt-4">${ssrInterpolate(_ctx.$t("newsletter_text"))}</h1><p class="text-base leading-normal text-gray-900 text-center xl:text-left">${ssrInterpolate(_ctx.$t("newsletter_subtext"))}</p><div class="flex items-stretch mt-12 h-10 md:h-14"><input class="${ssrRenderClass([unref(locale) == "en" ? "rounded-r-none" : "rounded-l-none", "bg-gray-100 rounded-lg px-2 text-base leading-none text-gray-800 w-4/5 border border-transparent focus:outline-none focus:border-gray-500"])}" type="email"${ssrRenderAttr("placeholder", _ctx.$t("your_email"))}><button class="${ssrRenderClass([unref(locale) == "en" ? "rounded-r" : "rounded-l", "w-32 hover:bg-indigo-600 bg-indigo-700 text-base font-medium leading-none text-white uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"])}">${ssrInterpolate(_ctx.$t("subscribe"))}</button></div></div></div></div><div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-w-6xl mx-auto"><div><img${ssrRenderAttr("src", _imports_1)} alt="footer logo" class="mx-7 mt-4"><p class="mx-7 text-white mt-2">${ssrInterpolate(_ctx.$t("footer_message"))}</p></div><!--[-->`);
      ssrRenderList(unref(menu_meue), (coulomn) => {
        _push(`<div><h3 class="text-white pt-4">${ssrInterpolate(coulomn["title_" + unref(locale)])}</h3><ul class="w-full"><!--[-->`);
        ssrRenderList(coulomn["links"], (link) => {
          _push(`<li class="w-full">`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            class: "text-white",
            to: unref(localePath2)("/" + link["slug"])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link["name_" + unref(locale)])}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link["name_" + unref(locale)]), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div><div class="w-full border-t border-b border-blue-500"><h4 class="text-white mt-4 text-center">${ssrInterpolate(_ctx.$t("we_accept"))}</h4><div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 py-3 justify-center border-gray-600 max-w-6xl mx-auto"><img class="rounded h-12"${ssrRenderAttr("src", _imports_2)} alt="Visa"><img class="rounded h-12"${ssrRenderAttr("src", _imports_3)} alt="Mastercard"><img class="rounded h-12"${ssrRenderAttr("src", _imports_4)} alt="American Express"><img class="rounded h-12 bg-white w-20"${ssrRenderAttr("src", _imports_5)} alt="Union pay"><img class="rounded h-12"${ssrRenderAttr("src", _imports_6)} alt="Google Pay"><img class="rounded h-12"${ssrRenderAttr("src", _imports_7)} alt="Apple pay"></div></div><div class="w-full py-3 text-center text-white">${ssrInterpolate(_ctx.$t("copyright_text"))}</div></footer>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavigationBar = __nuxt_component_0;
      const _component_NuxtLayout = __nuxt_component_1;
      const _component_NuxtPage = __nuxt_component_2;
      const _component_Footer = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        dir: unref(locale) == "en" ? "ltr" : "rtl"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NavigationBar, null, null, _parent));
      _push(`<div class="bg-white min-h-screen py-20" id="parent">`);
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = defineAsyncComponent(() => import('./error-component.0478f6a9.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, showError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { _export_sfc as _, useLocalePath as a, useI18n as b, useRuntimeConfig as c, __nuxt_component_0$1 as d, entry$1 as default, useFetch as e, _imports_0$1 as f, useNuxtApp as g, useRoute as u };
//# sourceMappingURL=server.mjs.map
