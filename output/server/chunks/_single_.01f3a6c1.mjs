import { h as _sfc_main$5 } from './server.mjs';
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
    let images = vue_cjs_prod.reactive([
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
      const _component_swiper = vue_cjs_prod.resolveComponent("swiper");
      const _component_swiper_slide = vue_cjs_prod.resolveComponent("swiper-slide");
      const _component_tour_slider = _sfc_main$5;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "container" }, _attrs))}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_swiper, {
        class: "parallax-slider relative",
        pagination: { clickable: true },
        controller: true,
        navigation: "",
        "allow-slide-next": true,
        parallax: "",
        grabCursor: "",
        "allow-touch-move": true,
        breakpoints: break_pts
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(images), (image) => {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_swiper_slide, {
                key: image.id
              }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="h-80 w-full object-cover"${serverRenderer.exports.ssrRenderAttr("src", image.imageUrl)} alt=""${_scopeId2}>`);
                  } else {
                    return [
                      vue_cjs_prod.createVNode("img", {
                        class: "h-80 w-full object-cover",
                        src: image.imageUrl,
                        alt: ""
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(images), (image) => {
                return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_swiper_slide, {
                  key: image.id
                }, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createVNode("img", {
                      class: "h-80 w-full object-cover",
                      src: image.imageUrl,
                      alt: ""
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="border border-green-500 w-full my-5"></div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_swiper, {
        breakpoints: break_pts,
        "space-between": 30,
        virtual: "",
        navigation: true,
        lazy: "true",
        "slides-per-view": 2
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(images), (image) => {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_swiper_slide, {
                key: image.id
              }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="h-80 w-full object-cover"${serverRenderer.exports.ssrRenderAttr("src", image.imageUrl)} alt=""${_scopeId2}>`);
                  } else {
                    return [
                      vue_cjs_prod.createVNode("img", {
                        class: "h-80 w-full object-cover",
                        src: image.imageUrl,
                        alt: ""
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(images), (image) => {
                return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_swiper_slide, {
                  key: image.id
                }, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createVNode("img", {
                      class: "h-80 w-full object-cover",
                      src: image.imageUrl,
                      alt: ""
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="border border-green-500 w-full my-5"></div>`);
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
//# sourceMappingURL=_single_.01f3a6c1.mjs.map
