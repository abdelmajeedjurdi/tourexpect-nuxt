<template>
  <div>
    <swiper
      :navigation="true"
      :modules="[SwiperNavigation]"
      :loop="true"
      :effect="'fade'"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="image in imgs" :key="image.id">
        <img
          :src="`${config.public.BASE_URL}/images/${img_src}/${image.image}`"
          alt="image"
          class="w-full object-cover hero_img"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
// import "swiper/css";

// import "swiper/css/navigation";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";

// const modules = [EffectFade, Navigation, Pagination, Autoplay];

const config = useRuntimeConfig();
const props = defineProps({ imgs: Array, img_src: String });
</script>
<style>
.hero_img {
  height: 25 !important;
}
/* sm */
@media (min-width: 640px) {
  /* .hero_img {
    height: 10vh !important;
  } */
}
/* md */
@media (min-width: 768px) {
  .hero_img {
    height: 60vh !important;
  }
}
/* lg */
@media (min-width: 1024px) {
  .hero_img {
    height: 60vh !important;
  }
}
/* xl */
@media (min-width: 1280px) {
  .hero_img {
    height: 60vh !important;
  }
}
/* 2xl */
@media (min-width: 1536px) {
  /* .hero_img {
    height: 45vh !important;
  } */
}
</style>
