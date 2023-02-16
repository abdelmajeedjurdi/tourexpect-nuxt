import { u as useRoute, i as useRuntimeConfig, b as useMeta, c as useFetch, j as _sfc_main$4 } from './server.mjs';
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
    const route = useRoute();
    const config = useRuntimeConfig();
    useMeta({
      title: route.params["country"] + " | Tourexpect"
    });
    let filter = vue_cjs_prod.ref({
      destinations: [],
      categories: [],
      page: 1
    });
    let lang = vue_cjs_prod.ref("en");
    let {
      data: tours,
      pending,
      refresh,
      error
    } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useFetch(
      () => `filtered-tours?d=${JSON.stringify(
        filter.value.destinations
      )}&c=${JSON.stringify(filter.value.categories)}&page=${filter.value.page}`,
      {
        transform: (_tours) => _tours.data,
        baseURL: config.API_BASE_URL
      },
      "$vHJVBsHKgz"
    )), __temp = await __temp, __restore(), __temp);
    const { data: countries } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useFetch(
      "http://127.0.0.1:8000/api/countries-destinations",
      "$rluY6zTEgq"
    )), __temp = await __temp, __restore(), __temp);
    const { data: categories } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useFetch(
      `http://127.0.0.1:8000/api/categories-on-section?type=tours`,
      "$OZoJtz0Prm"
    )), __temp = await __temp, __restore(), __temp);
    const getFilteredTours = async () => {
      refresh();
    };
    vue_cjs_prod.ref(1);
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
    vue_cjs_prod.ref("0");
    let active_countries = { id: false };
    let mobileFiltersOpen = vue_cjs_prod.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TourCard = _sfc_main$4;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "sm:px-4 xl:px-0 sm:flex w-full max-w-6xl mx-auto my-28" }, _attrs))}><div><div class="relative z-40 lg:hidden" style="${serverRenderer.exports.ssrRenderStyle(vue_cjs_prod.unref(mobileFiltersOpen) ? null : { display: "none" })}" role="dialog" aria-modal="true"><div class="fixed inset-0 z-40 flex"><div class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"><div class="flex items-center justify-between px-4"><h2 class="text-lg font-medium text-gray-900">Filters</h2><button type="button" class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"><span class="sr-only">Close menu</span><svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><form class="mt-4 border-t border-gray-200"><div class="border-t border-gray-200 px-4 py-6"><h3 class="-my-3 flow-root"><button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false"><span class="font-medium text-gray-900">${serverRenderer.exports.ssrInterpolate(_ctx.$t("categories"))}</span></button></h3><div class="pt-6" id="filter-section-1"><div class="space-y-4"><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(categories)["data"], (category) => {
        _push(`<div class="flex items-center"><input${serverRenderer.exports.ssrRenderAttr("id", category["name_en"])}${serverRenderer.exports.ssrRenderAttr("name", category["name_en"])}${serverRenderer.exports.ssrRenderAttr("value", category.id)} type="checkbox"${serverRenderer.exports.ssrIncludeBooleanAttr(Array.isArray(vue_cjs_prod.unref(filter).categories) ? serverRenderer.exports.ssrLooseContain(vue_cjs_prod.unref(filter).categories, category.id) : vue_cjs_prod.unref(filter).categories) ? " checked" : ""} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"><label${serverRenderer.exports.ssrRenderAttr("for", category["name_en"])} class="mx-2 text-sm text-gray-600">${serverRenderer.exports.ssrInterpolate(category["name_" + vue_cjs_prod.unref(lang)])}</label></div>`);
      });
      _push(`<!--]--></div></div></div><div class="border-t border-gray-200 px-4 py-6"><h3 class="-my-3 flow-root"><button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false"><span class="font-medium text-gray-900">${serverRenderer.exports.ssrInterpolate(_ctx.$t("destinations"))}</span></button></h3><div class="pt-6" id="filter-section-1"><div class="space-y-4"><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(countries)["data"], (country) => {
        _push(`<div><div class="flex items-center mb-1"><input${serverRenderer.exports.ssrRenderAttr("id", country["name_en"])}${serverRenderer.exports.ssrRenderAttr("name", country["name_en"])}${serverRenderer.exports.ssrRenderAttr("value", country.id)} type="checkbox"${serverRenderer.exports.ssrIncludeBooleanAttr(Array.isArray(vue_cjs_prod.unref(active_countries)[country.id]) ? serverRenderer.exports.ssrLooseContain(vue_cjs_prod.unref(active_countries)[country.id], country.id) : vue_cjs_prod.unref(active_countries)[country.id]) ? " checked" : ""} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"><label${serverRenderer.exports.ssrRenderAttr("for", country["name_en"])} class="mx-2 text-sm text-gray-600">${serverRenderer.exports.ssrInterpolate(country["name_" + vue_cjs_prod.unref(lang)])}</label></div><!--[-->`);
        serverRenderer.exports.ssrRenderList(country["items"], (province) => {
          _push(`<div class="flex items-center mx-2"><input${serverRenderer.exports.ssrRenderAttr("id", province["name_en"])}${serverRenderer.exports.ssrRenderAttr("name", province["name_en"])}${serverRenderer.exports.ssrRenderAttr("value", province.id)} type="checkbox"${serverRenderer.exports.ssrIncludeBooleanAttr(Array.isArray(vue_cjs_prod.unref(filter).destinations) ? serverRenderer.exports.ssrLooseContain(vue_cjs_prod.unref(filter).destinations, province.id) : vue_cjs_prod.unref(filter).destinations) ? " checked" : ""} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"><label${serverRenderer.exports.ssrRenderAttr("for", province["name_en"])} class="mx-2 text-sm text-gray-600">${serverRenderer.exports.ssrInterpolate(province["name_" + vue_cjs_prod.unref(lang)])}</label></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></div></form></div></div></div><div class="mx-auto max-w-7xl"><div class="flex items-baseline justify-between border-b border-gray-200 pt-12 pb-6"><h1 class="text-4xl font-bold tracking-tight text-gray-900">${serverRenderer.exports.ssrInterpolate(_ctx.$t("tours"))}</h1><div class="flex items-center"><button type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"><span class="sr-only">Filters</span><svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clip-rule="evenodd"></path></svg></button></div></div><section aria-labelledby="products-heading" class="pt-6 pb-24"><h2 id="products-heading" class="sr-only">Products</h2><div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4"><form class="hidden lg:block"><div class="border-b border-gray-200 py-6"><h3 class="-my-3 flow-root"><button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false"><span class="font-medium text-gray-900">${serverRenderer.exports.ssrInterpolate(_ctx.$t("categories"))}</span></button></h3><div class="pt-6" id="filter-section-1"><div class="space-y-4"><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(categories)["data"], (category) => {
        _push(`<div class="flex items-center"><input${serverRenderer.exports.ssrRenderAttr("id", category["name_en"])}${serverRenderer.exports.ssrRenderAttr("name", category["name_en"])}${serverRenderer.exports.ssrRenderAttr("value", category.id)} type="checkbox"${serverRenderer.exports.ssrIncludeBooleanAttr(Array.isArray(vue_cjs_prod.unref(filter).categories) ? serverRenderer.exports.ssrLooseContain(vue_cjs_prod.unref(filter).categories, category.id) : vue_cjs_prod.unref(filter).categories) ? " checked" : ""} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"><label${serverRenderer.exports.ssrRenderAttr("for", category["name_en"])} class="mx-2 text-sm text-gray-600">${serverRenderer.exports.ssrInterpolate(category["name_" + vue_cjs_prod.unref(lang)])}</label></div>`);
      });
      _push(`<!--]--></div></div></div><div class="border-b border-gray-200 py-6"><h3 class="-my-3 flow-root"><button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false"><span class="font-medium text-gray-900">${serverRenderer.exports.ssrInterpolate(_ctx.$t("destinations"))}</span></button></h3><div class="pt-6" id="filter-section-1"><div class="space-y-4"><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(countries)["data"], (country) => {
        _push(`<div><div class="flex items-center mb-1"><input${serverRenderer.exports.ssrRenderAttr("id", country["name_en"])}${serverRenderer.exports.ssrRenderAttr("name", country["name_en"])}${serverRenderer.exports.ssrRenderAttr("value", country.id)} type="checkbox"${serverRenderer.exports.ssrIncludeBooleanAttr(Array.isArray(vue_cjs_prod.unref(active_countries)[country.id]) ? serverRenderer.exports.ssrLooseContain(vue_cjs_prod.unref(active_countries)[country.id], country.id) : vue_cjs_prod.unref(active_countries)[country.id]) ? " checked" : ""} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"><label${serverRenderer.exports.ssrRenderAttr("for", country["name_en"])} class="mx-2 text-sm text-gray-600">${serverRenderer.exports.ssrInterpolate(country["name_" + vue_cjs_prod.unref(lang)])}</label></div><!--[-->`);
        serverRenderer.exports.ssrRenderList(country["items"], (province) => {
          _push(`<div class="flex items-center mx-2"><input${serverRenderer.exports.ssrRenderAttr("id", province["name_en"])}${serverRenderer.exports.ssrRenderAttr("name", province["name_en"])}${serverRenderer.exports.ssrRenderAttr("value", province.id)} type="checkbox"${serverRenderer.exports.ssrIncludeBooleanAttr(Array.isArray(vue_cjs_prod.unref(filter).destinations) ? serverRenderer.exports.ssrLooseContain(vue_cjs_prod.unref(filter).destinations, province.id) : vue_cjs_prod.unref(filter).destinations) ? " checked" : ""} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"><label${serverRenderer.exports.ssrRenderAttr("for", province["name_en"])} class="mx-2 text-sm text-gray-600">${serverRenderer.exports.ssrInterpolate(province["name_" + vue_cjs_prod.unref(lang)])}</label></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></div></form><div class="lg:col-span-3"><div class="w-full px-4"><div style="${serverRenderer.exports.ssrRenderStyle({ "min-height": "80vh" })}" class="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-between"><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(tours), (t) => {
        _push(`<div>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_TourCard, { tour: t }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div></section></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tours/[country]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.bb991f3d.mjs.map
