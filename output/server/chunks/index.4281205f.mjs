import { u as useRoute, b as useMeta, a as __nuxt_component_0$2 } from './server.mjs';
import { s as serverRenderer, v as vue_cjs_prod } from './renderer.mjs';
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
    useRoute();
    useMeta({
      title: "Tourexpect - Home"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_coming_soon = __nuxt_component_0$2;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "pt-32" }, _attrs))}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_coming_soon, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/destinations/[country]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.4281205f.mjs.map
