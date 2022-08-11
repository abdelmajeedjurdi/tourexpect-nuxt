<template>
    <!--:autoplay="{ delay: 3500, disableOnInteraction: false }" -->
    <swiper class="parallax-slider relative" :modules="modules" :pagination="{ clickable: true }" :controller="true"
        navigation :allow-slide-next="true" parallax grabCursor :allow-touch-move="true" :slides-per-view="1">
        <swiper-slide v-for="image in images" style="; ">
            <img class="h-80 w-full object-cover" :src="image.imageUrl" alt="">

        </swiper-slide>
    </swiper>
</template>

<script setup>
// import SwiperClass, { Pagination, Navigation, Autoplay, Parallax } from 'Swiper'
// import { Swiper, SwiperSlide } from 'swiper/vue';
// // import swiper module styles
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation';

// let modules = [Pagination, Navigation, Autoplay, Parallax]

let parallaxSwiperWidth = ref(0);
let images = reactive([{
    id: 1, imageUrl: "https://assets.safaraq.com/images/800/trips/79b5edebe8fe1c9a14cbffcd49dca6a3DI4614.jpg",
},
{
    id: 2, imageUrl: "https://assets.safaraq.com/images/800/trips/79b5edebe8fe1c9a14cbffcd49dca6a37Nh398.jpg",
},
{
    id: 3, imageUrl: "https://assets.safaraq.com/images/800/trips/79b5edebe8fe1c9a14cbffcd49dca6a3xc3946.jpg"
},
{
    id: 4, imageUrl: "https://assets.safaraq.com/images/800/trips/79b5edebe8fe1c9a14cbffcd49dca6a310P156.jpg",
},
{
    id: 5, imageUrl: "https://assets.safaraq.com/images/800/trips/79b5edebe8fe1c9a14cbffcd49dca6a3zSf839.jpg",
},
])
// more module style...



</script> 