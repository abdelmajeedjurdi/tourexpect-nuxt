<template>
  <div>
    <!-- <swiper
    class="parallax-slider relative"
    :pagination="{ clickable: true }"
    :controller="true"
    navigation
    :allow-slide-next="true"
    parallax
    grabCursor
    :allow-touch-move="true"
    :slides-per-view="1"
  >
    <swiper-slide v-for="image in images" :key="image" style="">
      <img class="h-80 w-full object-cover" :src="image.imageUrl" alt="" />
    </swiper-slide>
  </swiper> -->
  </div>
</template>

<script setup>
let images = reactive([
  {
    id: 1,
    imageUrl:
      "https://assets.safaraq.com/images/800/trips/79b5edebe8fe1c9a14cbffcd49dca6a3DI4614.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://assets.safaraq.com/images/800/trips/79b5edebe8fe1c9a14cbffcd49dca6a37Nh398.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://assets.safaraq.com/images/800/trips/79b5edebe8fe1c9a14cbffcd49dca6a3xc3946.jpg",
  },
  {
    id: 4,
    imageUrl:
      "https://assets.safaraq.com/images/800/trips/79b5edebe8fe1c9a14cbffcd49dca6a310P156.jpg",
  },
  {
    id: 5,
    imageUrl:
      "https://assets.safaraq.com/images/800/trips/79b5edebe8fe1c9a14cbffcd49dca6a3zSf839.jpg",
  },
]);
</script>
