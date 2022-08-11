import { defineNuxtPlugin } from "#app"
import SwiperClass, { Navigation, Pagination, Autoplay, Parallax } from 'Swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

// import swiper module styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation';

let modules = [Pagination, Navigation, Autoplay, Parallax]

SwiperClass.use([Navigation, Pagination])
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueAwesomeSwiper, SwiperClass, Swiper, SwiperSlide)
})
