import { f as _imports_0, g as __nuxt_component_0$3 } from './server.mjs';
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
  setup(__props) {
    let menu = vue_cjs_prod.ref([
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
    let submenu = vue_cjs_prod.ref([]);
    let menu_title = vue_cjs_prod.ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$3;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "top-0 z-50 absolute w-full h-screen flex bg-black bg-opacity-25" }, _attrs))}><div class="w-80 h-screen border bg-white"><div class="w-full py-10">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "flex items-center justify-center"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${serverRenderer.exports.ssrRenderAttr("src", _imports_0)} alt="logo" class="h-6"${_scopeId}>`);
          } else {
            return [
              vue_cjs_prod.createVNode("img", {
                src: _imports_0,
                alt: "logo",
                class: "h-6"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul class="space-y-6 md:flex-row mx-20 md:mt-0 md:text-sm md:font-medium items-center"><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(menu), (item, i) => {
        _push(`<li class="w-full md:w-auto">`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
          to: "/" + item.name,
          class: "block font-bold text-xl py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0"
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.exports.ssrInterpolate(_ctx.$t(item.name))}`);
            } else {
              return [
                vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$t(item.name)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
      if (vue_cjs_prod.unref(submenu).length) {
        _push(`<div class="w-60 h-screen border bg-white"><div class="w-full py-10 text-center text-xl font-bold"><span>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(menu_title))}</span></div><ul class="space-y-4 md:flex-row mx-20 md:mt-0 md:text-sm md:font-medium items-center"><!--[-->`);
        serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(submenu), (item, i) => {
          _push(`<li class="w-full md:w-auto">`);
          _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
            to: "/" + vue_cjs_prod.unref(menu_title) + "/" + item,
            class: "block text-base py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0"
          }, {
            default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${serverRenderer.exports.ssrInterpolate(_ctx.$t(item))}`);
              } else {
                return [
                  vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$t(item)), 1)
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
      _push(`<div class="w-80 h-screen border-2 border-black bg-blue-200 hidden">${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(submenu))}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.b441f8be.mjs.map
