
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    
      modules: [
        '@nuxtjs/i18n',
         '@nuxtjs/tailwindcss'
      ],

      i18n: {
        detectBrowserLanguage: true, 
      defaultLocale: process.env.DEFAULT_LOCALE ?? 'en',
      strategy: 'prefix_except_default',
      locales: [
        'en',
        'ar'
      ],
      vueI18n: {
        fallbackLocale: process.env.DEFAULT_LOCALE ?? 'en',
        messages: {
          'en': require('./translations/en'),
          'ar': require('./translations/ar')
        }
      }
  },
      
    runtimeConfig: {
      public: {
        API_BASE_URL: process.env.API_BASE_URL,
        BASE_URL: process.env.BASE_URL
      }
    },
    
})
