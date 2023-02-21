import { c as useRuntimeConfig, a as useLocalePath, b as useI18n, e as useFetch, d as __nuxt_component_0$1, _ as _export_sfc } from './server.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext, resolveComponent, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';
import 'Swiper';
import 'vue-awesome-swiper';
import 'click-outside-vue3';
import 'vue-tel-input';
import 'ohash';
import 'defu';
import './node-server.mjs';
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

const _sfc_main$1 = {
  __name: "ItemSlider",
  __ssrInlineRender: true,
  props: { items: Array, title: String },
  setup(__props) {
    const props = __props;
    const localePath = useLocalePath();
    const { locale } = useI18n();
    const config = useRuntimeConfig();
    Array.from({ length: 1e3 }).map(
      (el, index) => `Slide ${index + 1}`
    );
    const break_pts = {
      640: {
        width: 640,
        slidesPerView: 2
      },
      768: {
        width: 768,
        slidesPerView: 3
      },
      1024: {
        width: 1024,
        slidesPerView: 4
      },
      1280: {
        width: 1280,
        slidesPerView: 5
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = resolveComponent("swiper");
      const _component_swiper_slide = resolveComponent("swiper-slide");
      const _component_nuxt_link = __nuxt_component_0$1;
      if (props.items) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-20" }, _attrs))} data-v-66f9e85e><div class="" data-v-66f9e85e><h2 class="font-extrabold text-black text-center" data-v-66f9e85e>${ssrInterpolate(props.title)}</h2><div class="border-b-4 border-yellow-500 w-12 mx-auto my-6" data-v-66f9e85e></div></div>`);
        _push(ssrRenderComponent(_component_swiper, {
          class: "parallax-slider relative",
          navigation: "",
          "allow-slide-next": true,
          grabCursor: "",
          "allow-touch-move": true,
          breakpoints: break_pts,
          "space-between": 30
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.items, (item, index) => {
                _push2(ssrRenderComponent(_component_swiper_slide, {
                  key: index,
                  virtualIndex: index
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_nuxt_link, {
                        to: unref(localePath)(`/tours/details/${item.slug}`)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="" data-v-66f9e85e${_scopeId3}><div class="relative" data-v-66f9e85e${_scopeId3}><img${ssrRenderAttr("src", `${unref(config).BASE_URL}/images/tours/${item["thumbnail"]}`)} alt="image" class="h-80 w-full object-cover rounded-xl" data-v-66f9e85e${_scopeId3}><div class="rounded-b-xl absolute bottom-0 left-0 right-0 flex justify-between bg-gradient-to-t from-gray-900 px-2 pb-1" data-v-66f9e85e${_scopeId3}><div class="text-body-color flex items-center overflow-hidden text-base leading-relaxed text-white" data-v-66f9e85e${_scopeId3}><span class="" data-v-66f9e85e${_scopeId3}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5" style="${ssrRenderStyle({ "margin": "-3px" })}" data-v-66f9e85e${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" data-v-66f9e85e${_scopeId3}></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" data-v-66f9e85e${_scopeId3}></path></svg></span><span class="ml-1" data-v-66f9e85e${_scopeId3}>${ssrInterpolate(item["address_" + unref(locale)])}</span></div></div></div><div class="mt-2 px-2" data-v-66f9e85e${_scopeId3}><h3 class="font-bold text-gray-800 text-xl" data-v-66f9e85e${_scopeId3}>${ssrInterpolate(item["title_" + unref(locale)])}</h3>`);
                            if (item != void 0 && item["options"].length > 4) {
                              _push4(`<div class="text-gray-400 font-semibold" data-v-66f9e85e${_scopeId3}><div data-v-66f9e85e${_scopeId3}>`);
                              if (JSON.parse(item["options"])[0]["option_discount"]) {
                                _push4(`<div style="${ssrRenderStyle({ "text-decoration": "line-through" })}" class="text-gray-400 me-1 text-base" data-v-66f9e85e${_scopeId3}>${ssrInterpolate(JSON.parse(item["options"])[0]["adult_price"] + "$")}</div>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`<div class="text-gray-800 font-bold text-lg" data-v-66f9e85e${_scopeId3}>${ssrInterpolate(JSON.parse(item["options"])[0]["option_discount_type"] == "amount" ? JSON.parse(item["options"])[0]["adult_price"] - JSON.parse(item["options"])[0]["option_discount"] : (JSON.parse(item["options"])[0]["adult_price"] - JSON.parse(item["options"])[0]["adult_price"] * JSON.parse(item["options"])[0]["option_discount"] / 100).toFixed(2))}$ </div></div></div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "" }, [
                                createVNode("div", { class: "relative" }, [
                                  createVNode("img", {
                                    src: `${unref(config).BASE_URL}/images/tours/${item["thumbnail"]}`,
                                    alt: "image",
                                    class: "h-80 w-full object-cover rounded-xl"
                                  }, null, 8, ["src"]),
                                  createVNode("div", { class: "rounded-b-xl absolute bottom-0 left-0 right-0 flex justify-between bg-gradient-to-t from-gray-900 px-2 pb-1" }, [
                                    createVNode("div", { class: "text-body-color flex items-center overflow-hidden text-base leading-relaxed text-white" }, [
                                      createVNode("span", { class: "" }, [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          "stroke-width": "1.5",
                                          stroke: "currentColor",
                                          class: "h-5",
                                          style: { "margin": "-3px" }
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                          }),
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                          })
                                        ]))
                                      ]),
                                      createVNode("span", { class: "ml-1" }, toDisplayString(item["address_" + unref(locale)]), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-2 px-2" }, [
                                  createVNode("h3", { class: "font-bold text-gray-800 text-xl" }, toDisplayString(item["title_" + unref(locale)]), 1),
                                  item != void 0 && item["options"].length > 4 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "text-gray-400 font-semibold"
                                  }, [
                                    createVNode("div", null, [
                                      JSON.parse(item["options"])[0]["option_discount"] ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        style: { "text-decoration": "line-through" },
                                        class: "text-gray-400 me-1 text-base"
                                      }, toDisplayString(JSON.parse(item["options"])[0]["adult_price"] + "$"), 1)) : createCommentVNode("", true),
                                      createVNode("div", { class: "text-gray-800 font-bold text-lg" }, toDisplayString(JSON.parse(item["options"])[0]["option_discount_type"] == "amount" ? JSON.parse(item["options"])[0]["adult_price"] - JSON.parse(item["options"])[0]["option_discount"] : (JSON.parse(item["options"])[0]["adult_price"] - JSON.parse(item["options"])[0]["adult_price"] * JSON.parse(item["options"])[0]["option_discount"] / 100).toFixed(2)) + "$ ", 1)
                                    ])
                                  ])) : createCommentVNode("", true)
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_nuxt_link, {
                          to: unref(localePath)(`/tours/details/${item.slug}`)
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "" }, [
                              createVNode("div", { class: "relative" }, [
                                createVNode("img", {
                                  src: `${unref(config).BASE_URL}/images/tours/${item["thumbnail"]}`,
                                  alt: "image",
                                  class: "h-80 w-full object-cover rounded-xl"
                                }, null, 8, ["src"]),
                                createVNode("div", { class: "rounded-b-xl absolute bottom-0 left-0 right-0 flex justify-between bg-gradient-to-t from-gray-900 px-2 pb-1" }, [
                                  createVNode("div", { class: "text-body-color flex items-center overflow-hidden text-base leading-relaxed text-white" }, [
                                    createVNode("span", { class: "" }, [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        "stroke-width": "1.5",
                                        stroke: "currentColor",
                                        class: "h-5",
                                        style: { "margin": "-3px" }
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                        }),
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                        })
                                      ]))
                                    ]),
                                    createVNode("span", { class: "ml-1" }, toDisplayString(item["address_" + unref(locale)]), 1)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "mt-2 px-2" }, [
                                createVNode("h3", { class: "font-bold text-gray-800 text-xl" }, toDisplayString(item["title_" + unref(locale)]), 1),
                                item != void 0 && item["options"].length > 4 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-gray-400 font-semibold"
                                }, [
                                  createVNode("div", null, [
                                    JSON.parse(item["options"])[0]["option_discount"] ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      style: { "text-decoration": "line-through" },
                                      class: "text-gray-400 me-1 text-base"
                                    }, toDisplayString(JSON.parse(item["options"])[0]["adult_price"] + "$"), 1)) : createCommentVNode("", true),
                                    createVNode("div", { class: "text-gray-800 font-bold text-lg" }, toDisplayString(JSON.parse(item["options"])[0]["option_discount_type"] == "amount" ? JSON.parse(item["options"])[0]["adult_price"] - JSON.parse(item["options"])[0]["option_discount"] : (JSON.parse(item["options"])[0]["adult_price"] - JSON.parse(item["options"])[0]["adult_price"] * JSON.parse(item["options"])[0]["option_discount"] / 100).toFixed(2)) + "$ ", 1)
                                  ])
                                ])) : createCommentVNode("", true)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                  return openBlock(), createBlock(_component_swiper_slide, {
                    key: index,
                    virtualIndex: index
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_nuxt_link, {
                        to: unref(localePath)(`/tours/details/${item.slug}`)
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "" }, [
                            createVNode("div", { class: "relative" }, [
                              createVNode("img", {
                                src: `${unref(config).BASE_URL}/images/tours/${item["thumbnail"]}`,
                                alt: "image",
                                class: "h-80 w-full object-cover rounded-xl"
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "rounded-b-xl absolute bottom-0 left-0 right-0 flex justify-between bg-gradient-to-t from-gray-900 px-2 pb-1" }, [
                                createVNode("div", { class: "text-body-color flex items-center overflow-hidden text-base leading-relaxed text-white" }, [
                                  createVNode("span", { class: "" }, [
                                    (openBlock(), createBlock("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      "stroke-width": "1.5",
                                      stroke: "currentColor",
                                      class: "h-5",
                                      style: { "margin": "-3px" }
                                    }, [
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                      }),
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                      })
                                    ]))
                                  ]),
                                  createVNode("span", { class: "ml-1" }, toDisplayString(item["address_" + unref(locale)]), 1)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "mt-2 px-2" }, [
                              createVNode("h3", { class: "font-bold text-gray-800 text-xl" }, toDisplayString(item["title_" + unref(locale)]), 1),
                              item != void 0 && item["options"].length > 4 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-gray-400 font-semibold"
                              }, [
                                createVNode("div", null, [
                                  JSON.parse(item["options"])[0]["option_discount"] ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    style: { "text-decoration": "line-through" },
                                    class: "text-gray-400 me-1 text-base"
                                  }, toDisplayString(JSON.parse(item["options"])[0]["adult_price"] + "$"), 1)) : createCommentVNode("", true),
                                  createVNode("div", { class: "text-gray-800 font-bold text-lg" }, toDisplayString(JSON.parse(item["options"])[0]["option_discount_type"] == "amount" ? JSON.parse(item["options"])[0]["adult_price"] - JSON.parse(item["options"])[0]["option_discount"] : (JSON.parse(item["options"])[0]["adult_price"] - JSON.parse(item["options"])[0]["adult_price"] * JSON.parse(item["options"])[0]["option_discount"] / 100).toFixed(2)) + "$ ", 1)
                                ])
                              ])) : createCommentVNode("", true)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    _: 2
                  }, 1032, ["virtualIndex"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ItemSlider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-66f9e85e"]]);
const _imports_0 = "" + globalThis.__buildAssetsURL("hero.f899869c.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const localePath = useLocalePath();
    const { locale } = useI18n();
    let { data: province_tours } = ([__temp, __restore] = withAsyncContext(() => useFetch(() => `destination-tours`, {
      baseURL: config.API_BASE_URL
    }, "$PslAyef5YX")), __temp = await __temp, __restore(), __temp);
    let { data: countries } = ([__temp, __restore] = withAsyncContext(() => useFetch(() => `trending-destinations`, {
      baseURL: config.API_BASE_URL
    }, "$6PO73qLRkI")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_item_slider = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class=""><div class="relative overflow-hidden w-full block md:flex items-center bg-no-repeat bg-cover bg-center"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="sm:px-4 xl:px-0 w-full max-w-6xl mx-auto my-14"><div class="px-4 sm:px-0"><div class="border-b-4 border-yellow-500 text-center mb-6"><h2 class="font-extrabold uppercase text-black">${ssrInterpolate(_ctx.$t("turkey_tours"))}</h2></div><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/tours/turkey"),
        class: "relative overflow-hidden row-span-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", `${unref(config).BASE_URL}/images/turkey.jpg`)} class="h-full w-full object-cover" alt="Product Image"${_scopeId}><div class="relative"${_scopeId}><div class="text-body-color absolute bottom-0 left-0 right-0 flex justify-between overflow-hidden text-base font-bold leading-relaxed text-indigo-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: unref(localePath)("/tours/turkey"),
              class: "mx-auto h-12 w-full bg-main-orange px-4 justify-center text-white flex items-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("turkey_tours"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("turkey_tours")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("img", {
                src: `${unref(config).BASE_URL}/images/turkey.jpg`,
                class: "h-full w-full object-cover",
                alt: "Product Image"
              }, null, 8, ["src"]),
              createVNode("div", { class: "relative" }, [
                createVNode("div", { class: "text-body-color absolute bottom-0 left-0 right-0 flex justify-between overflow-hidden text-base font-bold leading-relaxed text-indigo-800" }, [
                  createVNode(_component_nuxt_link, {
                    to: unref(localePath)("/tours/turkey"),
                    class: "mx-auto h-12 w-full bg-main-orange px-4 justify-center text-white flex items-center"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("turkey_tours")), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(countries)["turkey"], (province) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: unref(localePath)(`/tours/turkey/${province.slug}`),
          class: "relative bg-blue-50 overflow-hidden",
          key: province.slug
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", `${unref(config).BASE_URL}/images/destinations/${province.image}`)} class="w-full h-56 object-cover" alt="Product Image"${_scopeId}><div class="h-36 relative"${_scopeId}><div class="items-center justify-center mb-2 h-16 flex px-2"${_scopeId}><h3 class="text-lg text-black font-bold"${_scopeId}>${ssrInterpolate(province["name_" + unref(locale)])}</h3></div><div class="bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_link, {
                to: unref(localePath)(`/tours/turkey/${province.slug}`),
                class: "px-4 h-8 bg-main-orange text-white rounded-full mx-auto w-full text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("see_more"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("see_more")), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("img", {
                  src: `${unref(config).BASE_URL}/images/destinations/${province.image}`,
                  class: "w-full h-56 object-cover",
                  alt: "Product Image"
                }, null, 8, ["src"]),
                createVNode("div", { class: "h-36 relative" }, [
                  createVNode("div", { class: "items-center justify-center mb-2 h-16 flex px-2" }, [
                    createVNode("h3", { class: "text-lg text-black font-bold" }, toDisplayString(province["name_" + unref(locale)]), 1)
                  ]),
                  createVNode("div", { class: "bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold" }, [
                    createVNode(_component_nuxt_link, {
                      to: unref(localePath)(`/tours/turkey/${province.slug}`),
                      class: "px-4 h-8 bg-main-orange text-white rounded-full mx-auto w-full text-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("see_more")), 1)
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
      _push(`<!--]--></div></div><div class="mt-20 px-4 sm:px-0"><div class="border-b-4 border-yellow-500 text-center mb-6"><h2 class="font-extrabold uppercase text-black">${ssrInterpolate(_ctx.$t("uae_tours"))}</h2></div><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/tours/uae"),
        class: "relative overflow-hidden mb-3 row-span-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", `${unref(config).BASE_URL}/images/uae.webp`)} class="h-full w-full object-cover" alt="Product Image"${_scopeId}><div class="relative"${_scopeId}><div class="text-body-color absolute bottom-0 left-0 right-0 flex justify-between overflow-hidden text-base font-bold leading-relaxed text-indigo-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: unref(localePath)("/tours/uae"),
              class: "mx-auto h-12 w-full bg-main-orange px-4 flex justify-center items-center text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("uae_tours"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("uae_tours")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("img", {
                src: `${unref(config).BASE_URL}/images/uae.webp`,
                class: "h-full w-full object-cover",
                alt: "Product Image"
              }, null, 8, ["src"]),
              createVNode("div", { class: "relative" }, [
                createVNode("div", { class: "text-body-color absolute bottom-0 left-0 right-0 flex justify-between overflow-hidden text-base font-bold leading-relaxed text-indigo-800" }, [
                  createVNode(_component_nuxt_link, {
                    to: unref(localePath)("/tours/uae"),
                    class: "mx-auto h-12 w-full bg-main-orange px-4 flex justify-center items-center text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("uae_tours")), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(countries)["uae"], (province) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: unref(localePath)(`/tours/uae/${province.slug}`),
          class: "relative bg-blue-50 overflow-hidden",
          key: province.slug
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", `${unref(config).BASE_URL}/images/destinations/${province.image}`)} class="w-full h-56 object-cover" alt="Product Image"${_scopeId}><div class="h-36 relative"${_scopeId}><div class="items-center justify-center mb-2 h-16 flex px-2"${_scopeId}><h3 class="text-lg text-black font-bold"${_scopeId}>${ssrInterpolate(province["name_" + unref(locale)])}</h3></div><div class="bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_link, {
                to: unref(localePath)(`/tours/uae/${province.slug}`),
                class: "px-4 h-8 bg-main-orange text-white rounded-full mx-auto w-full text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("see_more"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("see_more")), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("img", {
                  src: `${unref(config).BASE_URL}/images/destinations/${province.image}`,
                  class: "w-full h-56 object-cover",
                  alt: "Product Image"
                }, null, 8, ["src"]),
                createVNode("div", { class: "h-36 relative" }, [
                  createVNode("div", { class: "items-center justify-center mb-2 h-16 flex px-2" }, [
                    createVNode("h3", { class: "text-lg text-black font-bold" }, toDisplayString(province["name_" + unref(locale)]), 1)
                  ]),
                  createVNode("div", { class: "bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold" }, [
                    createVNode(_component_nuxt_link, {
                      to: unref(localePath)(`/tours/uae/${province.slug}`),
                      class: "px-4 h-8 bg-main-orange text-white rounded-full mx-auto w-full text-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("see_more")), 1)
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
      _push(ssrRenderComponent(_component_item_slider, {
        title: _ctx.$t("best_of_trabzon_tours"),
        items: unref(province_tours)["trabzon"]
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_item_slider, {
        title: _ctx.$t("best_of_rize_tours"),
        items: unref(province_tours)["rize"]
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_item_slider, {
        title: _ctx.$t("best_of_east_black_sea_region_tours"),
        items: unref(province_tours)["east-black-sea-region"]
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_item_slider, {
        title: _ctx.$t("best_of_dubai_tours"),
        items: unref(province_tours)["dubai"]
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.5497e9c0.mjs.map
