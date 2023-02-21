import { ref, reactive, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main$1 = {
  __name: "TourSlider",
  __ssrInlineRender: true,
  setup(__props) {
    reactive([
      {
        id: 1,
        imageUrl: "https://assets.safaraq.com/images/800/trips/79b5edebe8fe1c9a14cbffcd49dca6a3DI4614.jpg"
      },
      {
        id: 2,
        imageUrl: "https://assets.safaraq.com/images/800/trips/79b5edebe8fe1c9a14cbffcd49dca6a37Nh398.jpg"
      },
      {
        id: 3,
        imageUrl: "https://assets.safaraq.com/images/800/trips/79b5edebe8fe1c9a14cbffcd49dca6a3xc3946.jpg"
      },
      {
        id: 4,
        imageUrl: "https://assets.safaraq.com/images/800/trips/79b5edebe8fe1c9a14cbffcd49dca6a310P156.jpg"
      },
      {
        id: 5,
        imageUrl: "https://assets.safaraq.com/images/800/trips/79b5edebe8fe1c9a14cbffcd49dca6a3zSf839.jpg"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TourSlider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[single]",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(0);
    ref(0);
    reactive([
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
      const _component_tour_slider = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="border border-green-500 w-full my-5"></div><div class="border border-green-500 w-full my-5"></div>`);
      _push(ssrRenderComponent(_component_tour_slider, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tours/[country]/[single].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_single_.dc9f6193.mjs.map
