<template>
    <!-- :modules="modules" :pagination="{ clickable: true }" -->
    <swiper :modules="modules" :pagination="{ clickable: true }" :controller="true" navigation :allow-slide-next="true"
        :autoplay="{ delay: 3500, disableOnInteraction: false }" :allow-touch-move="true" :slides-per-view="1">
        <swiper-slide> <img class=""
                src="https://assets.safaraq.com/images/800/trips/79b5edebe8fe1c9a14cbffcd49dca6a37Nh398.jpg" alt="">

        </swiper-slide>
        <swiper-slide> <img class="  h-full object-cover" src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" alt="">
        </swiper-slide>
    </swiper>
</template>

<script>
import SwiperClass, { Pagination, Navigation, Autoplay, Controller, Thumbs } from 'Swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import swiper module styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation';
// more module style...

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Pagination, Navigation, Autoplay, Controller, Thumbs]
        }
    }
}
</script>