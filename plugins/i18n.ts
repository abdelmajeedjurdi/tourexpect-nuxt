import { defineNuxtPlugin } from "#app"
import { createI18n } from 'vue-i18n'
import en from "../assets/i18n/en.json"
import ar from "../assets/i18n/ar.json"


const i18n = createI18n({
    globalInjection: true,
    legacy: false,
    mode: "composition",
    inheritLocale: true,
    locale: process.server ? 'en' : localStorage.getItem("lang") || "en",
    // locale: "en",
    messages: {
        en: en,
        ar: ar,
    },
})
export default defineNuxtPlugin(nuxtApp => {

    nuxtApp.vueApp.use(i18n);
})