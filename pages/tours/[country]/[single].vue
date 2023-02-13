<template>
  <div class="container">
    <swiper
      class="parallax-slider relative"
      :pagination="{ clickable: true }"
      :controller="true"
      navigation
      :allow-slide-next="true"
      parallax
      grabCursor
      :allow-touch-move="true"
      :breakpoints="break_pts"
    >
      <swiper-slide v-for="image in images" :key="image.id">
        <img class="h-80 w-full object-cover" :src="image.imageUrl" alt="" />
      </swiper-slide>
    </swiper>
    <div class="border border-green-500 w-full my-5"></div>
    <swiper
      :breakpoints="break_pts"
      :space-between="30"
      virtual
      :navigation="true"
      lazy="true"
      :slides-per-view="2"
    >
      <swiper-slide v-for="image in images" :key="image.id">
        <img class="h-80 w-full object-cover" :src="image.imageUrl" alt="" />
      </swiper-slide>
    </swiper>
    <div class="border border-green-500 w-full my-5"></div>
    <tour-slider />
  </div>
</template>

<script setup>
let phone = ref(null);
let adults = ref(0);
let children = ref(0);

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
let images = reactive([
  {
    id: 1,
    imageUrl:
      "https://www.tourexpect.com/images/destinations/1675196833_default.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://www.tourexpect.com/images/destinations/1675493519_u1.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://www.tourexpect.com/images/destinations/1675499230_Cappad.jpg",
  },
  {
    id: 1,
    imageUrl:
      "https://www.tourexpect.com/images/destinations/1675196833_default.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://www.tourexpect.com/images/destinations/1675493519_u1.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://www.tourexpect.com/images/destinations/1675499230_Cappad.jpg",
  },
  {
    id: 1,
    imageUrl:
      "https://www.tourexpect.com/images/destinations/1675196833_default.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://www.tourexpect.com/images/destinations/1675493519_u1.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://www.tourexpect.com/images/destinations/1675499230_Cappad.jpg",
  },
]);
</script>
<style>
.card-link-a {
  fill: #fff;
}

.trip-decor-a {
  opacity: 0.1;
}

.trip-decor-b {
  fill: #ff8e3c;
}

.trip-decor-c {
  fill: #80177e;
}

.trip-decor-a {
  opacity: 0.1;
}

.trip-decor-b {
  fill: #ff8e3c;
}

.trip-decor-c {
  fill: #80177e;
}
</style>
