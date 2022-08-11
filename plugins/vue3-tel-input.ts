import { defineNuxtPlugin } from "#app"
import VueTelInput from 'vue-tel-input';
// import 'vue3-tel-input/dist/vue3-tel-input.css'
import 'vue-tel-input/dist/vue-tel-input.css';

const globalOptions = {

    mode: "international",
    onlyCountries: ['IQ', 'AE'],
    placeholder: "Hello"
}

export default defineNuxtPlugin(nuxtApp => {

    nuxtApp.vueApp.use(VueTelInput, globalOptions);
})