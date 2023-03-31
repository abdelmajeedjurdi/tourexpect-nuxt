<template>
  <div class="my-20" v-if="props.items">
    <div class="">
      <h2 class="font-extrabold text-black text-center text-2xl">
        {{ props.title }}
      </h2>
      <div class="border-b-4 border-yellow-500 w-12 mx-auto my-6"></div>
    </div>
    <swiper
      class="parallax-slider relative"
      :modules="[SwiperNavigation]"
      :navigation="true"
      :allow-slide-next="true"
      grabCursor
      :allow-touch-move="true"
      :breakpoints="break_pts"
      :space-between="30"
    >
      <swiper-slide
        v-for="(item, index) in items"
        :key="index"
        :virtualIndex="index"
      >
        <nuxt-link :to="localePath(`/packages/details/${item.slug}`)">
          <div class="">
            <div class="relative">
              <img
                :src="`${config.BASE_URL}/images/packages/${item['thumbnail']}`"
                alt="image"
                class="h-80 w-full object-cover rounded-xl"
              />
              <div
                class="rounded-b-xl absolute bottom-0 left-0 right-0 flex justify-between bg-gradient-to-t from-gray-900 px-2 pb-1"
              >
                <div
                  class="text-body-color flex items-center overflow-hidden text-base leading-relaxed text-white"
                >
                  <span class=""
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-5"
                      style="margin: -3px"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      ></path></svg></span
                  ><span class="ml-1"> {{ item["address_" + locale] }}</span>
                </div>
              </div>
            </div>
            <div class="mt-2 px-2">
              <h3 class="font-bold text-gray-800 text-xl">
                {{ item["title_" + locale] }}
              </h3>
              <div
                v-if="item != undefined && item['options'].length > 4"
                class="text-gray-400 font-semibold"
              >
                <div>
                  <div
                    v-if="JSON.parse(item['options'])[0]['option_discount']"
                    style="text-decoration: line-through"
                    class="text-gray-400 me-1 text-base"
                  >
                    {{ JSON.parse(item["options"])[0]["adult_price"] + "$" }}
                  </div>
                  <div class="text-gray-800 font-bold text-lg">
                    {{
                      JSON.parse(item["options"])[0]["option_discount_type"] ==
                      "amount"
                        ? JSON.parse(item["options"])[0]["adult_price"] -
                          JSON.parse(item["options"])[0]["option_discount"]
                        : (
                            JSON.parse(item["options"])[0]["adult_price"] -
                            (JSON.parse(item["options"])[0]["adult_price"] *
                              JSON.parse(item["options"])[0][
                                "option_discount"
                              ]) /
                              100
                          ).toFixed(2)
                    }}$
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
const localePath = useLocalePath();
const { locale } = useI18n();
const props = defineProps({ items: Array, title: String });
const config = useRuntimeConfig();
// Create array with 1000 slides
const slides = Array.from({ length: 1000 }).map(
  (el, index) => `Slide ${index + 1}`
);
const break_pts = {
  640: {
    width: 640,
    slidesPerView: 2,
  },
  768: {
    width: 768,
    slidesPerView: 3,
  },
  1024: {
    width: 1024,
    slidesPerView: 4,
  },
  1280: {
    width: 1280,
    slidesPerView: 5,
  },
};
</script>
<style scoped>
.swiper-virtual {
  /* padding-right: 1.5rem;
    padding-left: 1.5rem; */
}
.swiper-button-next,
.swiper-button-prev {
  /* top: 33% !important; */
}

.swiper-button-next::after {
  content: url("/images/arrow-circle-right.svg");
  /* content: "➔"; Using a unicode character */
  font-size: 16px; /* specify the font-size */
}

.swiper-button-prev::after {
  content: url("/images/arrow-circle-left.svg");
  /* content: "➔"; Using a unicode character */
  font-size: 16px; /* specify the font-size */
}
</style>
