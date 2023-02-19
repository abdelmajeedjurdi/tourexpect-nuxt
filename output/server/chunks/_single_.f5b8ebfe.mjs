import { i as _sfc_main$5 } from './server.mjs';
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
  __name: "[single]",
  __ssrInlineRender: true,
  setup(__props) {
    vue_cjs_prod.ref(null);
    vue_cjs_prod.ref(0);
    vue_cjs_prod.ref(0);
    vue_cjs_prod.reactive([
      {
        id: 1,
        imageUrl: "https://www.tourexpect.com/images/destinations/1675196833_default.jpg"
      },
      {
        id: 2,
        imageUrl: "https://www.tourexpect.com/images/destinations/1675493519_u1.jpg"
      },
      {
        id: 3,
        imageUrl: "https://www.tourexpect.com/images/destinations/1675499230_Cappad.jpg"
      },
      {
        id: 1,
        imageUrl: "https://www.tourexpect.com/images/destinations/1675196833_default.jpg"
      },
      {
        id: 2,
        imageUrl: "https://www.tourexpect.com/images/destinations/1675493519_u1.jpg"
      },
      {
        id: 3,
        imageUrl: "https://www.tourexpect.com/images/destinations/1675499230_Cappad.jpg"
      },
      {
        id: 1,
        imageUrl: "https://www.tourexpect.com/images/destinations/1675196833_default.jpg"
      },
      {
        id: 2,
        imageUrl: "https://www.tourexpect.com/images/destinations/1675493519_u1.jpg"
      },
      {
        id: 3,
        imageUrl: "https://www.tourexpect.com/images/destinations/1675499230_Cappad.jpg"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_tour_slider = _sfc_main$5;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "container" }, _attrs))}><div class="border border-green-500 w-full my-5"></div><div class="border border-green-500 w-full my-5"></div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_tour_slider, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tours/[country]/[single].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_single_.f5b8ebfe.mjs.map
