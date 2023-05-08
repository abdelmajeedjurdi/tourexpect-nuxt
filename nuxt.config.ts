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
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-9N7J72C065",
          async: true,
        },
        {
          innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9N7J72C065');
        `,
        },
      ],
      meta: [
        // <meta name="description" content="My amazing site">
        {
          name: "description",
          content:
            "Discover your next adventure with Tourexpect! Our website offers a wide range of travel options, from breathtaking natural landscapes to vibrant urban destinations. Whether you're looking for a relaxing getaway or an action-packed trip, we've got you covered. Browse our carefully curated selection of hotels, activities, and tours to find the perfect fit for your travel style and budget. Book your next adventure today with Tourexpect.",
        },
        //<meta name="google-site-verification" content="m069H781MfwypAd6ZG-yxEmnr4vZdqly6_d7PNJ9m3Y" />
        {
          name: "google-site-verification",
          content: "m069H781MfwypAd6ZG-yxEmnr4vZdqly6_d7PNJ9m3Y",
        },
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    },
  },
  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss", "nuxt-swiper"],

  i18n: {
    baseUrl: "https://tourexpect.com",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      onlyOnRoot: true, // Only redirect on homepage
    },
    defaultLocale: "en",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en",
        iso: "en-US",
      },
      {
        code: "ar",
        iso: "ar-AR",
      },
    ],
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: require("./translations/en"),
        ar: require("./translations/ar"),
      },
    },
  },

  runtimeConfig: {
    public: {
      API_BASE_URL: "https://admin.tourexpect.com/api",
      // API_BASE_URL: "http://localhost:8000/api",
      BASE_URL: "https://admin.tourexpect.com",
      APP_DOMAIN: "http://localhost:3000",
      container_class: "sm:px-4 xl:px-0 w-full max-w-6xl mx-auto",
    },
    private: {
      stripeSecretKey:
        "sk_test_51MGGbYDcVBlUUJwWosz12YB0lTkQFMjoksatXlDK0nmDAdEcpo4jBWqewP1hGJ6KcPWp20WHueqx0diwWvAUptg700EgsPzPGY",
    },
  },
});
