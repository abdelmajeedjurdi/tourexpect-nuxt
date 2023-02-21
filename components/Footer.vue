<template>
  <footer class="bg-blue-900 w-full">
    <div id="app2">
      <!-- Place the live chat widget here -->
      <div id="livechat-widget"></div>
    </div>
    <!-- first layer -->
    <div
      class="w-full h-96 bg-no-repeat bg-cover pt-16"
      style="background-image: url('/_nuxt/assets/images/newsletter-bg.png')"
    >
      <div class="max-w-4xl mx-auto flex">
        <div class="hidden lg:block absolute left-32 -mt-32">
          <img
            src="~/assets/images/news-letter-img.png"
            class="floating"
            alt="news letter image"
          />
        </div>
        <div class="w-full lg:w-1/2 xl:w-2/3 2xl:w-3/4 px-4 ml-auto">
          <h1
            class="text-xl md:text-3xl xl:text-3xl font-bold leading-10 text-gray-800 mb-2 text-center xl:text-left md:mt-0 mt-4"
          >
            {{ $t("newsletter_text") }}
          </h1>
          <p
            class="text-base leading-normal text-gray-900 text-center xl:text-left"
          >
            {{ $t("newsletter_subtext") }}
          </p>
          <div class="flex items-stretch mt-12 h-10 md:h-14">
            <input
              class="bg-gray-100 rounded-lg px-2 text-base leading-none text-gray-800 w-4/5 border border-transparent focus:outline-none focus:border-gray-500"
              :class="locale == 'en' ? 'rounded-r-none' : 'rounded-l-none'"
              type="email"
              :placeholder="$t('your_email')"
            />
            <button
              class="w-32 hover:bg-indigo-600 bg-indigo-700 text-base font-medium leading-none text-white uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
              :class="locale == 'en' ? 'rounded-r' : 'rounded-l'"
            >
              {{ $t("subscribe") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- mid layer -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-w-6xl mx-auto"
    >
      <div>
        <img
          src="~/assets/images/footer-logo.svg"
          alt="footer logo"
          class="mx-7 mt-4"
        />
        <p class="mx-7 text-white mt-2">
          {{ $t("footer_message") }}
        </p>
      </div>
      <div v-for="coulomn in menu_meue" :key="coulomn">
        <h3 class="text-white pt-4">
          {{ coulomn["title_" + locale] }}
        </h3>
        <ul class="w-full">
          <li class="w-full" v-for="link in coulomn['links']" :key="link">
            <nuxt-link class="text-white" :to="localePath('/' + link['slug'])"
              >{{ link["name_" + locale] }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- last layer -->
    <div class="w-full border-t border-b border-blue-500">
      <h4 class="text-white mt-4 text-center">{{ $t("we_accept") }}</h4>
      <div
        class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 py-3 justify-center border-gray-600 max-w-6xl mx-auto"
      >
        <img
          class="rounded h-12"
          src="~/assets/images/payment/visa.jpg"
          alt="Visa"
        />
        <img
          class="rounded h-12"
          src="~/assets/images/payment/mastercard.jpg"
          alt="Mastercard"
        />
        <img
          class="rounded h-12"
          src="~/assets/images/payment/american_express.jpg"
          alt="American Express"
        />
        <img
          class="rounded h-12 bg-white w-20"
          src="~/assets/images/payment/union-pay.png"
          alt="Union pay"
        />
        <img
          class="rounded h-12"
          src="~/assets/images/payment/google_pay.jpg"
          alt="Google Pay"
        />
        <img
          class="rounded h-12"
          src="~/assets/images/payment/apple_pay.jpg"
          alt="Apple pay"
        />
      </div>
    </div>
    <div class="w-full py-3 text-center text-white">
      {{ $t("copyright_text") }}
    </div>
  </footer>
</template>

<script setup>
const localePath = useLocalePath();
const { locale } = useI18n();
onBeforeMount(() => {
  // Add the live chat CSS
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://tourexpect.odoo.com/im_livechat/external_lib.css";
  document.head.appendChild(link);

  // Add the live chat JavaScript code
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://tourexpect.odoo.com/im_livechat/external_lib.js";
  document.body.appendChild(script);

  script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://tourexpect.odoo.com/im_livechat/loader/8";
  document.body.appendChild(script);
});
const menu_meue = ref([
  {
    title_en: "Our Services",
    title_ar: "خدماتنا",
    links: [
      {
        name_en: "Packages",
        name_ar: "الباقات",
        slug: "packages",
      },
      {
        name_en: "Tours",
        name_ar: "الجولات",
        slug: "tours",
      },
      {
        name_en: "Activities",
        name_ar: "الأنشطة",
        slug: "#",
      },
      {
        name_en: "Transfer",
        name_ar: "التنقل",
        slug: "#",
      },
      {
        name_en: "Hotels & Resorts",
        name_ar: "النادق و المنتجعات",
        slug: "#",
      },
    ],
  },
  {
    title_en: "About Tourexpect",
    title_ar: "عن تورايكسبكت",
    links: [
      {
        name_en: "About Us",
        name_ar: "حولنا",
        slug: "about",
      },
      {
        name_en: "We Are Hiring",
        name_ar: "نحن نوظف",
        slug: "we-are-hiring",
      },
      {
        name_en: "Terms & Conditions",
        name_ar: "الشروط والأحكام",
        slug: "#",
      },
      {
        name_en: "Privicy Policies",
        name_ar: "سياسات الخصوصية",
        slug: "#",
      },
      {
        name_en: "Contact Us",
        name_ar: "اتصل بنا",
        slug: "#",
      },
    ],
  },
  {
    title_en: "Our Links",
    title_ar: "روابطنا",
    links: [
      {
        name_en: "First Link",
        slug: "#",
      },
      {
        name_en: "Second Link",
        slug: "#",
      },
      {
        name_en: "Third Link",
        slug: "#",
      },
      {
        name_en: "Fourth Link",
        slug: "#",
      },
      {
        name_en: "Fifth Link",
        slug: "#",
      },
    ],
  },
]);
</script>
<style>
.o_thread_window .o_composer_text_field {
  line-height: 2rem !important;
  padding-left: 0.5rem !important;
}
.o_thread_window_buttons {
  margin-top: -0.3rem !important;
}
.o_thread_window_header {
  padding-bottom: 1.5rem !important;
}
@keyframes Floating {
  0% {
    transform: translate(0px, 0px);
  }
  65% {
    transform: translate(0px, 15px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
.floating {
  float: left;
  animation-name: Floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  top: 33rem;
}
</style>
