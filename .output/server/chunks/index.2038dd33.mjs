import { ref, withAsyncContext, mergeProps, unref, useSSRContext, resolveComponent, withCtx, createVNode, openBlock, createBlock, toDisplayString, createTextVNode, Fragment, renderList, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from 'vue/server-renderer';
import { u as useRoute, c as useRuntimeConfig, e as useFetch } from './server.mjs';
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
  __name: "TourCard",
  __ssrInlineRender: true,
  props: {
    tour: Object
  },
  setup(__props) {
    let lang = "en";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white border hover:shadow-lg duration-700 overflow-hidden mb-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_router_link, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative"${_scopeId}><img${ssrRenderAttr("src", "http://127.0.0.1:8000/images/tours/" + __props.tour.thumbnail)} alt="image" class="w-full h-56 object-cover"${_scopeId}><div class="bg-gradient-to-t from-gray-900 absolute flex justify-between bottom-0 left-0 right-0 px-2 pb-1"${_scopeId}><div class="overflow-hidden flex text-base text-body-color leading-relaxed items-center text-white"${_scopeId}><span class=""${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5" style="${ssrRenderStyle({ "margin": "-3px" })}"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"${_scopeId}></path></svg></span><span class="ms-1"${_scopeId}>${ssrInterpolate(__props.tour["address_" + unref(lang)])}</span></div><div class="overflow-hidden flex text-base text-body-color leading-relaxed items-center text-white"${_scopeId}><span class=""${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg></span> ${ssrInterpolate(__props.tour["duration_" + unref(lang)])}</div></div></div><div class="h-72 relative"${_scopeId}><div class="items-center border-b mb-2 h-16 flex px-2"${_scopeId}><h3 class="text-lg text-black font-bold"${_scopeId}>${ssrInterpolate(__props.tour["title_" + unref(lang)].substring(0, 50) + (__props.tour["title_" + unref(lang)].length > 50 ? "..." : ""))}</h3></div><div class="overflow-hidden text-base text-body-color leading-relaxed text-gray-700 px-2"${_scopeId}>`);
            if (__props.tour["banner_highlights"]) {
              _push2(`<div class="grid gap-0 grid-cols-2"${_scopeId}><!--[-->`);
              ssrRenderList(JSON.parse(__props.tour["banner_highlights"]), (highlight, i) => {
                _push2(`<div class="flex h-12"${_scopeId}>`);
                if (i < 6) {
                  _push2(`<div class="flex space-x-1"${_scopeId}><img${ssrRenderAttr("src", "/images/icons/" + highlight["img"])} class="w-5" style="${ssrRenderStyle({ "fill": "orange" })}" alt=""${_scopeId}><span class="flex items-center text-black text-xs font-bold"${_scopeId}>${ssrInterpolate(highlight["title_" + unref(lang)])}</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="border-t bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold"${_scopeId}><button class="px-4 h-8 bg-yellow-600 text-white rounded-full mx-auto w-full"${_scopeId}>${ssrInterpolate(_ctx.$t("book_now"))}</button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative" }, [
                createVNode("img", {
                  src: "http://127.0.0.1:8000/images/tours/" + __props.tour.thumbnail,
                  alt: "image",
                  class: "w-full h-56 object-cover"
                }, null, 8, ["src"]),
                createVNode("div", { class: "bg-gradient-to-t from-gray-900 absolute flex justify-between bottom-0 left-0 right-0 px-2 pb-1" }, [
                  createVNode("div", { class: "overflow-hidden flex text-base text-body-color leading-relaxed items-center text-white" }, [
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
                    createVNode("span", { class: "ms-1" }, toDisplayString(__props.tour["address_" + unref(lang)]), 1)
                  ]),
                  createVNode("div", { class: "overflow-hidden flex text-base text-body-color leading-relaxed items-center text-white" }, [
                    createVNode("span", { class: "" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor",
                        class: "w-5"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                      ]))
                    ]),
                    createTextVNode(" " + toDisplayString(__props.tour["duration_" + unref(lang)]), 1)
                  ])
                ])
              ]),
              createVNode("div", { class: "h-72 relative" }, [
                createVNode("div", { class: "items-center border-b mb-2 h-16 flex px-2" }, [
                  createVNode("h3", { class: "text-lg text-black font-bold" }, toDisplayString(__props.tour["title_" + unref(lang)].substring(0, 50) + (__props.tour["title_" + unref(lang)].length > 50 ? "..." : "")), 1)
                ]),
                createVNode("div", { class: "overflow-hidden text-base text-body-color leading-relaxed text-gray-700 px-2" }, [
                  __props.tour["banner_highlights"] ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "grid gap-0 grid-cols-2"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(JSON.parse(__props.tour["banner_highlights"]), (highlight, i) => {
                      return openBlock(), createBlock("div", {
                        key: highlight,
                        class: "flex h-12"
                      }, [
                        i < 6 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex space-x-1"
                        }, [
                          createVNode("img", {
                            src: "/images/icons/" + highlight["img"],
                            class: "w-5",
                            style: { "fill": "orange" },
                            alt: ""
                          }, null, 8, ["src"]),
                          createVNode("span", { class: "flex items-center text-black text-xs font-bold" }, toDisplayString(highlight["title_" + unref(lang)]), 1)
                        ])) : createCommentVNode("", true)
                      ]);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "border-t bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold" }, [
                  createVNode("button", { class: "px-4 h-8 bg-yellow-600 text-white rounded-full mx-auto w-full" }, toDisplayString(_ctx.$t("book_now")), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TourCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const config = useRuntimeConfig();
    useMeta({
      title: route.params["country"] + " | Tourexpect"
    });
    let filter = ref({
      destinations: [],
      categories: [],
      page: 1
    });
    let lang = ref("en");
    let {
      data: tours,
      pending,
      refresh,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `filtered-tours?d=${JSON.stringify(
        filter.value.destinations
      )}&c=${JSON.stringify(filter.value.categories)}&page=${filter.value.page}`,
      {
        transform: (_tours) => _tours.data,
        baseURL: config.API_BASE_URL
      },
      "$6SS08HzENB"
    )), __temp = await __temp, __restore(), __temp);
    const { data: countries } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "http://127.0.0.1:8000/api/countries-destinations",
      "$bF6NAlnzjb"
    )), __temp = await __temp, __restore(), __temp);
    const { data: categories } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `http://127.0.0.1:8000/api/categories-on-section?type=tours`,
      "$wOnEggSrX1"
    )), __temp = await __temp, __restore(), __temp);
    const getFilteredTours = async () => {
      refresh();
    };
    ref(1);
    const destination = route.params["country"];
    const currentCountryItems = () => {
      for (let i in countries.value.data) {
        if (countries.value.data[i]["slug"].trim() == destination.trim()) {
          let c = countries.value.data[i]["items"];
          for (var j in c) {
            filter.value.destinations.push(
              countries.value.data[i]["items"][j]["id"]
            );
          }
          getFilteredTours();
          break;
        }
      }
    };
    currentCountryItems();
    ref("0");
    let active_countries = { id: false };
    let mobileFiltersOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TourCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sm:px-4 xl:px-0 sm:flex w-full max-w-6xl mx-auto my-28" }, _attrs))}><div><div class="relative z-40 lg:hidden" style="${ssrRenderStyle(unref(mobileFiltersOpen) ? null : { display: "none" })}" role="dialog" aria-modal="true"><div class="fixed inset-0 z-40 flex"><div class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"><div class="flex items-center justify-between px-4"><h2 class="text-lg font-medium text-gray-900">Filters</h2><button type="button" class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"><span class="sr-only">Close menu</span><svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><form class="mt-4 border-t border-gray-200"><div class="border-t border-gray-200 px-4 py-6"><h3 class="-my-3 flow-root"><button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false"><span class="font-medium text-gray-900">${ssrInterpolate(_ctx.$t("categories"))}</span></button></h3><div class="pt-6" id="filter-section-1"><div class="space-y-4"><!--[-->`);
      ssrRenderList(unref(categories)["data"], (category) => {
        _push(`<div class="flex items-center"><input${ssrRenderAttr("id", category["name_en"])}${ssrRenderAttr("name", category["name_en"])}${ssrRenderAttr("value", category.id)} type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(filter).categories) ? ssrLooseContain(unref(filter).categories, category.id) : unref(filter).categories) ? " checked" : ""} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"><label${ssrRenderAttr("for", category["name_en"])} class="mx-2 text-sm text-gray-600">${ssrInterpolate(category["name_" + unref(lang)])}</label></div>`);
      });
      _push(`<!--]--></div></div></div><div class="border-t border-gray-200 px-4 py-6"><h3 class="-my-3 flow-root"><button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false"><span class="font-medium text-gray-900">${ssrInterpolate(_ctx.$t("destinations"))}</span></button></h3><div class="pt-6" id="filter-section-1"><div class="space-y-4"><!--[-->`);
      ssrRenderList(unref(countries)["data"], (country) => {
        _push(`<div><div class="flex items-center mb-1"><input${ssrRenderAttr("id", country["name_en"])}${ssrRenderAttr("name", country["name_en"])}${ssrRenderAttr("value", country.id)} type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(active_countries)[country.id]) ? ssrLooseContain(unref(active_countries)[country.id], country.id) : unref(active_countries)[country.id]) ? " checked" : ""} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"><label${ssrRenderAttr("for", country["name_en"])} class="mx-2 text-sm text-gray-600">${ssrInterpolate(country["name_" + unref(lang)])}</label></div><!--[-->`);
        ssrRenderList(country["items"], (province) => {
          _push(`<div class="flex items-center mx-2"><input${ssrRenderAttr("id", province["name_en"])}${ssrRenderAttr("name", province["name_en"])}${ssrRenderAttr("value", province.id)} type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(filter).destinations) ? ssrLooseContain(unref(filter).destinations, province.id) : unref(filter).destinations) ? " checked" : ""} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"><label${ssrRenderAttr("for", province["name_en"])} class="mx-2 text-sm text-gray-600">${ssrInterpolate(province["name_" + unref(lang)])}</label></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></div></form></div></div></div><div class="mx-auto max-w-7xl"><div class="flex items-baseline justify-between border-b border-gray-200 pt-12 pb-6"><h1 class="text-4xl font-bold tracking-tight text-gray-900">${ssrInterpolate(_ctx.$t("tours"))}</h1><div class="flex items-center"><button type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"><span class="sr-only">Filters</span><svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clip-rule="evenodd"></path></svg></button></div></div><section aria-labelledby="products-heading" class="pt-6 pb-24"><h2 id="products-heading" class="sr-only">Products</h2><div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4"><form class="hidden lg:block"><div class="border-b border-gray-200 py-6"><h3 class="-my-3 flow-root"><button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false"><span class="font-medium text-gray-900">${ssrInterpolate(_ctx.$t("categories"))}</span></button></h3><div class="pt-6" id="filter-section-1"><div class="space-y-4"><!--[-->`);
      ssrRenderList(unref(categories)["data"], (category) => {
        _push(`<div class="flex items-center"><input${ssrRenderAttr("id", category["name_en"])}${ssrRenderAttr("name", category["name_en"])}${ssrRenderAttr("value", category.id)} type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(filter).categories) ? ssrLooseContain(unref(filter).categories, category.id) : unref(filter).categories) ? " checked" : ""} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"><label${ssrRenderAttr("for", category["name_en"])} class="mx-2 text-sm text-gray-600">${ssrInterpolate(category["name_" + unref(lang)])}</label></div>`);
      });
      _push(`<!--]--></div></div></div><div class="border-b border-gray-200 py-6"><h3 class="-my-3 flow-root"><button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false"><span class="font-medium text-gray-900">${ssrInterpolate(_ctx.$t("destinations"))}</span></button></h3><div class="pt-6" id="filter-section-1"><div class="space-y-4"><!--[-->`);
      ssrRenderList(unref(countries)["data"], (country) => {
        _push(`<div><div class="flex items-center mb-1"><input${ssrRenderAttr("id", country["name_en"])}${ssrRenderAttr("name", country["name_en"])}${ssrRenderAttr("value", country.id)} type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(active_countries)[country.id]) ? ssrLooseContain(unref(active_countries)[country.id], country.id) : unref(active_countries)[country.id]) ? " checked" : ""} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"><label${ssrRenderAttr("for", country["name_en"])} class="mx-2 text-sm text-gray-600">${ssrInterpolate(country["name_" + unref(lang)])}</label></div><!--[-->`);
        ssrRenderList(country["items"], (province) => {
          _push(`<div class="flex items-center mx-2"><input${ssrRenderAttr("id", province["name_en"])}${ssrRenderAttr("name", province["name_en"])}${ssrRenderAttr("value", province.id)} type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(filter).destinations) ? ssrLooseContain(unref(filter).destinations, province.id) : unref(filter).destinations) ? " checked" : ""} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"><label${ssrRenderAttr("for", province["name_en"])} class="mx-2 text-sm text-gray-600">${ssrInterpolate(province["name_" + unref(lang)])}</label></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></div></form><div class="lg:col-span-3"><div class="w-full px-4"><div style="${ssrRenderStyle({ "min-height": "80vh" })}" class="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-between"><!--[-->`);
      ssrRenderList(unref(tours), (t) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_TourCard, { tour: t }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div></section></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tours/[country]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.2038dd33.mjs.map
