<template>
  <div class="relative">
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :spaceBetween="10"
      :thumbs="{ swiper: thumbsSwiper }"
      :navigation="true"
      :modules="[SwiperNavigation, SwiperFreeMode, SwiperThumbs]"
      :loop="true"
      :effect="'fade'"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide v-for="image in imgs" :key="image.id">
        <img
          :src="`${config.public.BASE_URL}/images/${img_src}/${image.image}`"
          alt="image"
          class="w-full object-cover hero_img"
          style="border-radius: unset"
        />
      </swiper-slide>
    </swiper>

    <swiper
      @swiper="setThumbsSwiper"
      :loop="true"
      :spaceBetween="10"
      :slidesPerView="5"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="image in imgs" :key="image.id">
        <img
          :src="`${config.public.BASE_URL}/images/${img_src}/${image.image}`"
          alt="image"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
const config = useRuntimeConfig();
const props = defineProps({ imgs: Array, img_src: String });

let thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  console.log("hello");
  thumbsSwiper.value = swiper;
};
</script>
<style scoped>
.hero_img {
  height: 40vh !important;
}
/* sm */
@media (min-width: 540px) {
  .hero_img {
    height: 79vh !important;
  }
}
/* md */
/* @media (min-width: 768px) {
  .hero_img {
    height: 90vh !important;
  }
} */
/* lg */
/* @media (min-width: 1024px) {
  .hero_img {
    height: 90vh !important;
  }
} */
/* xl */
/* @media (min-width: 1280px) {
  .hero_img {
    height: 90vh !important;
  }
} */
/* 2xl */
@media (min-width: 1536px) {
  /* .hero_img {
    height: 45vh !important;
  } */
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 20%;
  width: 100%;
}

.mySwiper {
  position: absolute;
  height: 20%;
  width: 50%;
  box-sizing: border-box;
  padding: 10px 0;
  bottom: 0.5rem;
  right: 1rem;
  left: 1rem;
}

.mySwiper .swiper-slide {
  width: 2rem;
  height: 100%;
  filter: brightness(0.7);
  border-radius: 0.4rem;
}

.mySwiper .swiper-slide-thumb-active {
  filter: brightness(1);
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.4rem;
}
</style>
