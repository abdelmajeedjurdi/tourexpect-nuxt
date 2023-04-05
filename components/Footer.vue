<template>
  <footer class="bg-blue-900 w-full">
    <div id="app2">
      <!-- Place the live chat widget here -->
      <div id="livechat-widget"></div>
    </div>
    <!-- first layer -->
    <div
      class="w-full h-96 bg-no-repeat bg-cover pt-16"
      style="background-image: url('/images/newsletter-bg.png')"
    >
      <div class="max-w-4xl mx-auto flex">
        <div class="hidden lg:block absolute left-32 -mt-32">
          <img
            src="/images/news-letter-img.png"
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
          src="/images/footer-logo.svg"
          alt="footer logo"
          class="mx-7 mt-4"
        />
        <p class="mx-7 text-white mt-2">
          {{ $t("footer_message") }}
        </p>
      </div>
      <div v-for="column in menu_meue" :key="column" class="mx-7">
        <h3 class="text-white pt-4">
          {{ column["title_" + locale] }}
        </h3>
        <ul class="w-full">
          <li class="w-full" v-for="link in column['links']" :key="link">
            <nuxt-link class="text-white" :to="localePath('/' + link['slug'])"
              >{{ link["name_" + locale] }}
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="mx-7">
        <h3 class="text-white pt-4">{{ $t("follow_us") }}</h3>
        <div class="flex mt-4">
          <a
            target="_blank"
            href="https://www.facebook.com/tourexpect"
            class="mr-4 text-gray-500 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#fff"
              class="h-6 w-6"
              version="1.1"
              id="Layer_1"
              viewBox="-143 145 512 512"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7   c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4   c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8   c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4   c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"
                />
                <path
                  d="M146.8,313.7c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3   c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H51.2v38.3h26.5v133h49.6v-133h39.3l2.9-38.3h-42.2v-29.9C127.3,317.4,136.5,313.7,146.8,313.7z"
                />
              </g>
            </svg>
          </a>

          <a
            target="_blank"
            href="https://www.instagram.com/tourexpect/"
            class="mr-4 text-gray-500 hover:text-white border-2 rounded-full h-6 w-6 p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              class=""
              viewBox="0 0 24 24"
              role="img"
            >
              <path
                d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"
              />
            </svg>
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/company/tourexpect"
            class="mr-4 text-gray-500 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#fff"
              class="h-6 w-6"
              version="1.1"
              id="Layer_1"
              viewBox="-143 145 512 512"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7   c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4   c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8   c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4   c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"
                />
                <rect x="-8.5" y="348.4" width="49.9" height="159.7" />
                <path
                  d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7   C45.1,284.9,33.8,273,15.4,273z"
                />
                <path
                  d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1   c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z"
                />
              </g>
            </svg>
          </a>

          <a
            target="_blank"
            href="https://www.youtube.com/@TourExpect"
            class="text-gray-500 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#fff"
              class="h-6"
              version="1.1"
              id="Layer_1"
              viewBox="-143 145 512 512"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7   c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4   c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8   c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4   c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"
                />
                <path
                  d="M196.9,311.2H29.1c0,0-44.1,0-44.1,44.1v91.5c0,0,0,44.1,44.1,44.1h167.8c0,0,44.1,0,44.1-44.1v-91.5   C241,355.3,241,311.2,196.9,311.2z M78.9,450.3v-98.5l83.8,49.3L78.9,450.3z"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <!-- last layer -->
    <div class="w-full border-t border-b border-blue-500">
      <h4 class="text-white mt-4 text-center">{{ $t("we_accept") }}</h4>
      <div
        class="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 py-3 justify-center border-gray-600 max-w-6xl mx-auto"
      >
        <img
          class="rounded h-10 mx-auto"
          src="/images/payment/visa.jpg"
          alt="Visa"
        />
        <img
          class="rounded h-10 mx-auto"
          src="/images/payment/mastercard.jpg"
          alt="Mastercard"
        />
        <img
          class="rounded h-10 mx-auto"
          src="/images/payment/american_express.jpg"
          alt="American Express"
        />
        <img
          class="rounded h-10 mx-auto bg-white w-20"
          src="/images/payment/union-pay.png"
          alt="Union pay"
        />
        <img
          class="rounded h-10 mx-auto"
          src="/images/payment/google_pay.jpg"
          alt="Google Pay"
        />
        <img
          class="rounded h-10 mx-auto"
          src="/images/payment/apple_pay.jpg"
          alt="Apple pay"
        />
      </div>
    </div>
    <div class="w-full py-3 text-center text-white px-2">
      {{ $t("copyright_text").replace("2022", new Date().getFullYear()) }}
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
        name_en: "Destinations",
        name_ar: "الوجهات",
        slug: "destinations",
      },
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
      /* 
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
      */
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
      /*{
        name_en: "We Are Hiring",
        name_ar: "نحن نوظف",
        slug: "we-are-hiring",
      },*/
      {
        name_en: "Contact Us",
        name_ar: "اتصل بنا",
        slug: "contact",
      },
      // {
      //   name_en: "Terms & Conditions",
      //   name_ar: "الشروط والأحكام",
      //   slug: "#",
      // },
      {
        name_en: "Privacy Policies",
        name_ar: "سياسات الخصوصية",
        slug: "privacy-policies",
      },
      {
        name_en: "Cookie Policy",
        name_ar: "سياسات الخصوصية",
        slug: "cookie-policy",
      },
    ],
  },
  // {
  //   title_en: "Follow Us",
  //   title_ar: "روابطنا",
  //   links: [
  //     {
  //       name_en: "First Link",
  //       slug: "#",
  //     },
  //     {
  //       name_en: "Second Link",
  //       slug: "#",
  //     },
  //     {
  //       name_en: "Third Link",
  //       slug: "#",
  //     },
  //     {
  //       name_en: "Fourth Link",
  //       slug: "#",
  //     },
  //     {
  //       name_en: "Fifth Link",
  //       slug: "#",
  //     },
  //   ],
  // },
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
