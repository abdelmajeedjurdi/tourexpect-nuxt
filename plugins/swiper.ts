// import SwiperClass, { Navigation, Pagination } from 'Swiper'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import { Swiper, SwiperSlide } from 'swiper/vue';

// // import swiper module styles
// import 'swiper/css'

// SwiperClass.use([Navigation])
// export default defineNuxtPlugin(nuxtApp => {
//     nuxtApp.vueApp.use(VueAwesomeSwiper, SwiperClass, Swiper, SwiperSlide)
// })

import { defineNuxtPlugin } from "#app"
// import SwiperClass, { Pagination, Navigation, Autoplay, Parallax } from 'Swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import { Swiper, SwiperSlide } from 'swiper/vue';

// import swiper module styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Swiper, SwiperSlide)
})
