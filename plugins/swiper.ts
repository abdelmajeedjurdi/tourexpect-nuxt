import SwiperClass, { Navigation, Pagination } from 'Swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import swiper module styles
import 'swiper/css'

SwiperClass.use([Navigation])
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueAwesomeSwiper, SwiperClass)
})