import { defineNuxtPlugin } from "#app"
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

const globalOptions = {

    mode: "international",
    onlyCountries: ['IQ', 'AE']
}

export default defineNuxtPlugin(nuxtApp => {

    nuxtApp.vueApp.use(VueTelInput, globalOptions);
})