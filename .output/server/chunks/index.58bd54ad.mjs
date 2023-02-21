import { f as _imports_0$1, d as __nuxt_component_0$1 } from './server.mjs';
import { ref, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let menu = ref([
      {
        id: 1,
        name: "destinations",
        items: ["istanbul", "trabzon"]
      },
      {
        id: 2,
        name: "packages",
        items: []
      },
      {
        id: 3,
        name: "tours",
        items: ["trabzon", "istanbul"]
      },
      {
        id: 4,
        name: "activities",
        items: []
      },
      {
        id: 5,
        name: "transfer",
        items: ["airport_transfer", "private_car"]
      }
    ]);
    let submenu = ref([]);
    let menu_title = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "top-0 z-50 absolute w-full h-screen flex bg-black bg-opacity-25" }, _attrs))}><div class="w-80 h-screen border bg-white"><div class="w-full py-10">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "flex items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="logo" class="h-6"${_scopeId}>`);
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
      _push(`</div><ul class="space-y-6 md:flex-row mx-20 md:mt-0 md:text-sm md:font-medium items-center"><!--[-->`);
      ssrRenderList(unref(menu), (item, i) => {
        _push(`<li class="w-full md:w-auto">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/" + item.name,
          class: "block font-bold text-xl py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(item.name))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(item.name)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
      if (unref(submenu).length) {
        _push(`<div class="w-60 h-screen border bg-white"><div class="w-full py-10 text-center text-xl font-bold"><span>${ssrInterpolate(unref(menu_title))}</span></div><ul class="space-y-4 md:flex-row mx-20 md:mt-0 md:text-sm md:font-medium items-center"><!--[-->`);
        ssrRenderList(unref(submenu), (item, i) => {
          _push(`<li class="w-full md:w-auto">`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: "/" + unref(menu_title) + "/" + item,
            class: "block text-base py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t(item))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t(item)), 1)
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
      _push(`<div class="w-80 h-screen border-2 border-black bg-blue-200 hidden">${ssrInterpolate(unref(submenu))}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.58bd54ad.mjs.map
