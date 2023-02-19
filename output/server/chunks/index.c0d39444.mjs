import { c as useRuntimeConfig, d as useFetch, e as _imports_0$1, f as __nuxt_component_0$1 } from './server.mjs';
import { v as vue_cjs_prod, s as serverRenderer } from './renderer.mjs';
import 'ufo';
import 'click-outside-vue3';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'h3';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';
import '@intlify/core-base';
import '@intlify/shared';
import 'unenv/runtime/mock/proxy';
import 'stream';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    let { data: province_tours } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useFetch(() => `destination-tours`, {
      baseURL: config.API_BASE_URL
    }, "$SQxEi19eMP")), __temp = await __temp, __restore(), __temp);
    let { data: countries } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useFetch(() => `trending-destinations`, {
      baseURL: config.API_BASE_URL
    }, "$RsJRLFQHUf")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue_cjs_prod.resolveComponent("router-link");
      const _component_item_slider = __nuxt_component_0$1;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "" }, _attrs))}><div class=""><div class="relative overflow-hidden w-full block md:flex items-center bg-no-repeat bg-cover bg-center"><img${serverRenderer.exports.ssrRenderAttr("src", _imports_0$1)} alt=""></div></div><div class="sm:px-4 xl:px-0 w-full max-w-6xl mx-auto my-14"><div class="px-4 sm:px-0"><div class="border-b-4 border-yellow-500 text-center mb-6"><h2 class="font-extrabold uppercase text-black">${serverRenderer.exports.ssrInterpolate(_ctx.$t("turkey_tours"))}</h2></div><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_router_link, {
        to: "/tours/turkey",
        class: "relative overflow-hidden row-span-2"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${serverRenderer.exports.ssrRenderAttr("src", `${vue_cjs_prod.unref(config).BASE_URL}/images/turkey.jpg`)} class="h-full w-full object-cover" alt="Product Image"${_scopeId}><div class="relative"${_scopeId}><div class="text-body-color absolute bottom-0 left-0 right-0 flex justify-between overflow-hidden text-base font-bold leading-relaxed text-indigo-800"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_router_link, {
              to: "/tours/turkey",
              class: "mx-auto h-12 w-full bg-main-orange px-4 justify-center text-white flex items-center"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.exports.ssrInterpolate(_ctx.$t("turkey_tours"))}`);
                } else {
                  return [
                    vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$t("turkey_tours")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("img", {
                src: `${vue_cjs_prod.unref(config).BASE_URL}/images/turkey.jpg`,
                class: "h-full w-full object-cover",
                alt: "Product Image"
              }, null, 8, ["src"]),
              vue_cjs_prod.createVNode("div", { class: "relative" }, [
                vue_cjs_prod.createVNode("div", { class: "text-body-color absolute bottom-0 left-0 right-0 flex justify-between overflow-hidden text-base font-bold leading-relaxed text-indigo-800" }, [
                  vue_cjs_prod.createVNode(_component_router_link, {
                    to: "/tours/turkey",
                    class: "mx-auto h-12 w-full bg-main-orange px-4 justify-center text-white flex items-center"
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$t("turkey_tours")), 1)
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(countries)["turkey"], (province) => {
        _push(serverRenderer.exports.ssrRenderComponent(_component_router_link, {
          to: `/tours/turkey/${province.slug}`,
          class: "relative bg-blue-50 overflow-hidden",
          key: province.slug
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${serverRenderer.exports.ssrRenderAttr("src", `${vue_cjs_prod.unref(config).BASE_URL}/images/destinations/${province.image}`)} class="w-full h-56 object-cover" alt="Product Image"${_scopeId}><div class="h-36 relative"${_scopeId}><div class="items-center justify-center mb-2 h-16 flex px-2"${_scopeId}><h3 class="text-lg text-black font-bold"${_scopeId}>${serverRenderer.exports.ssrInterpolate(province["name_" + _ctx.lang])}</h3></div><div class="bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold"${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_component_router_link, {
                to: `/tours/turkey/${province.slug}`,
                class: "px-4 h-8 bg-main-orange text-white rounded-full mx-auto w-full text-center"
              }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${serverRenderer.exports.ssrInterpolate(_ctx.$t("see_more"))}`);
                  } else {
                    return [
                      vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$t("see_more")), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                vue_cjs_prod.createVNode("img", {
                  src: `${vue_cjs_prod.unref(config).BASE_URL}/images/destinations/${province.image}`,
                  class: "w-full h-56 object-cover",
                  alt: "Product Image"
                }, null, 8, ["src"]),
                vue_cjs_prod.createVNode("div", { class: "h-36 relative" }, [
                  vue_cjs_prod.createVNode("div", { class: "items-center justify-center mb-2 h-16 flex px-2" }, [
                    vue_cjs_prod.createVNode("h3", { class: "text-lg text-black font-bold" }, vue_cjs_prod.toDisplayString(province["name_" + _ctx.lang]), 1)
                  ]),
                  vue_cjs_prod.createVNode("div", { class: "bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold" }, [
                    vue_cjs_prod.createVNode(_component_router_link, {
                      to: `/tours/turkey/${province.slug}`,
                      class: "px-4 h-8 bg-main-orange text-white rounded-full mx-auto w-full text-center"
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$t("see_more")), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="mt-20 px-4 sm:px-0"><div class="border-b-4 border-yellow-500 text-center mb-6"><h2 class="font-extrabold uppercase text-black">${serverRenderer.exports.ssrInterpolate(_ctx.$t("uae_tours"))}</h2></div><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_router_link, {
        to: "/tours/uae",
        class: "relative overflow-hidden mb-3 row-span-2"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${serverRenderer.exports.ssrRenderAttr("src", `${vue_cjs_prod.unref(config).BASE_URL}/images/uae.webp`)} class="h-full w-full object-cover" alt="Product Image"${_scopeId}><div class="relative"${_scopeId}><div class="text-body-color absolute bottom-0 left-0 right-0 flex justify-between overflow-hidden text-base font-bold leading-relaxed text-indigo-800"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_router_link, {
              to: "/tours/uae",
              class: "mx-auto h-12 w-full bg-main-orange px-4 flex justify-center items-center text-white"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.exports.ssrInterpolate(_ctx.$t("uae_tours"))}`);
                } else {
                  return [
                    vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$t("uae_tours")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("img", {
                src: `${vue_cjs_prod.unref(config).BASE_URL}/images/uae.webp`,
                class: "h-full w-full object-cover",
                alt: "Product Image"
              }, null, 8, ["src"]),
              vue_cjs_prod.createVNode("div", { class: "relative" }, [
                vue_cjs_prod.createVNode("div", { class: "text-body-color absolute bottom-0 left-0 right-0 flex justify-between overflow-hidden text-base font-bold leading-relaxed text-indigo-800" }, [
                  vue_cjs_prod.createVNode(_component_router_link, {
                    to: "/tours/uae",
                    class: "mx-auto h-12 w-full bg-main-orange px-4 flex justify-center items-center text-white"
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$t("uae_tours")), 1)
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(countries)["uae"], (province) => {
        _push(serverRenderer.exports.ssrRenderComponent(_component_router_link, {
          to: `/tours/uae/${province.slug}`,
          class: "relative bg-blue-50 overflow-hidden",
          key: province.slug
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${serverRenderer.exports.ssrRenderAttr("src", `${vue_cjs_prod.unref(config).BASE_URL}/images/destinations/${province.image}`)} class="w-full h-56 object-cover" alt="Product Image"${_scopeId}><div class="h-36 relative"${_scopeId}><div class="items-center justify-center mb-2 h-16 flex px-2"${_scopeId}><h3 class="text-lg text-black font-bold"${_scopeId}>${serverRenderer.exports.ssrInterpolate(province["name_" + _ctx.lang])}</h3></div><div class="bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold"${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_component_router_link, {
                to: `/tours/uae/${province.slug}`,
                class: "px-4 h-8 bg-main-orange text-white rounded-full mx-auto w-full text-center"
              }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${serverRenderer.exports.ssrInterpolate(_ctx.$t("see_more"))}`);
                  } else {
                    return [
                      vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$t("see_more")), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                vue_cjs_prod.createVNode("img", {
                  src: `${vue_cjs_prod.unref(config).BASE_URL}/images/destinations/${province.image}`,
                  class: "w-full h-56 object-cover",
                  alt: "Product Image"
                }, null, 8, ["src"]),
                vue_cjs_prod.createVNode("div", { class: "h-36 relative" }, [
                  vue_cjs_prod.createVNode("div", { class: "items-center justify-center mb-2 h-16 flex px-2" }, [
                    vue_cjs_prod.createVNode("h3", { class: "text-lg text-black font-bold" }, vue_cjs_prod.toDisplayString(province["name_" + _ctx.lang]), 1)
                  ]),
                  vue_cjs_prod.createVNode("div", { class: "bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold" }, [
                    vue_cjs_prod.createVNode(_component_router_link, {
                      to: `/tours/uae/${province.slug}`,
                      class: "px-4 h-8 bg-main-orange text-white rounded-full mx-auto w-full text-center"
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$t("see_more")), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_item_slider, {
        title: _ctx.$t("best_of_trabzon_tours"),
        items: vue_cjs_prod.unref(province_tours)["trabzon"]
      }, null, _parent));
      _push(`</div><div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_item_slider, {
        title: _ctx.$t("best_of_rize_tours"),
        items: vue_cjs_prod.unref(province_tours)["rize"]
      }, null, _parent));
      _push(`</div><div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_item_slider, {
        title: _ctx.$t("best_of_east_black_sea_region_tours"),
        items: vue_cjs_prod.unref(province_tours)["east-black-sea-region"]
      }, null, _parent));
      _push(`</div><div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_item_slider, {
        title: _ctx.$t("best_of_dubai_tours"),
        items: vue_cjs_prod.unref(province_tours)["dubai"]
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.c0d39444.mjs.map
