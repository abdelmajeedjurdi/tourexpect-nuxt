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
        <nuxt-link
          :to="localePath(`/destinations/${country_slug}/${item.slug}`)"
        >
          <div class="">
            <div class="relative">
              <img
                :src="`${config.BASE_URL}/images/destinations/${item.image}`"
                :alt="item.name_en"
                class="h-96 w-full object-cover rounded-xl"
              />
              <div
                class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 px-2 pb-1 rounded-b-xl"
              >
                <div
                  class="text-body-color flex items-center overflow-hidden leading-relaxed text-white"
                >
                  <h1 class="text-2xl mb-3">{{ item["name_" + locale] }}</h1>
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
const props = defineProps({
  items: Array,
  title: String,
  country_slug: String,
});
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
