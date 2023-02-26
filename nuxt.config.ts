// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Tourexpect",
      link: [
        {
          rel: "icon",
          type: "image/svg",
          href: "/favicon.svg",
        },
      ],
      meta: [
        // <meta name="description" content="My amazing site">
        {
          name: "description",
          content:
            "Discover your next adventure with Tourexpect! Our website offers a wide range of travel options, from breathtaking natural landscapes to vibrant urban destinations. Whether you're looking for a relaxing getaway or an action-packed trip, we've got you covered. Browse our carefully curated selection of hotels, activities, and tours to find the perfect fit for your travel style and budget. Book your next adventure today with Tourexpect.",
        },
      ],
    },
  },
  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss", "nuxt-swiper"],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },

  i18n: {
    detectBrowserLanguage: true,
    defaultLocale: process.env.DEFAULT_LOCALE ?? "en",
    strategy: "prefix_except_default",
    locales: ["en", "ar"],
    vueI18n: {
      fallbackLocale: process.env.DEFAULT_LOCALE ?? "en",
      messages: {
        en: require("./translations/en"),
        ar: require("./translations/ar"),
      },
    },
  },

  runtimeConfig: {
    public: {
      API_BASE_URL: "https://admin.tourexpect.com/api",
      BASE_URL: "https://admin.tourexpect.com",
    },
  },
});
