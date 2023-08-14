<template>
  <div class="container my-24 mx-auto" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
    <!-- Section: Design Block -->
    <section class="mb-32 text-gray-800">
      <div
        class="relative overflow-hidden bg-no-repeat bg-cover"
        style="
          background-position: 50%;
          background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
          height: 300px;
        "
      ></div>
      <div :class="config.public.container_class">
        <div
          class="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6"
          style="
            margin-top: -100px;
            background: hsla(0, 0%, 100%, 0.8);
            backdrop-filter: blur(30px);
          "
        >
          <h1 class="text-3xl text-center mb-4">{{ $t("have_a_coupon") }}</h1>
          <div class="max-w-[700px] mx-auto">
            <form @submit.prevent="sendCouponRequest">
              <div class="form-group mb-6">
                <input
                  type="text"
                  name="name"
                  id="name"
                  :placeholder="$t('your-name')"
                  required
                  v-model="form.name"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  :placeholder="$t('your-email')"
                  required
                  v-model="form.email"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div class="form-group mb-6">
                <input
                  type="text"
                  name="phone"
                  v-model="form.phone"
                  id="phone"
                  :placeholder="$t('your-phone')"
                  required
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div class="form-group mb-6">
                <input
                  type="text"
                  name="promo_code"
                  v-model="form.promo_code"
                  id="promo_code"
                  :placeholder="$t('your_promo_code')"
                  required
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div class="my-6">
                <button
                  type="submit"
                  class="w-full px-3 py-2 text-white bg-blue-500 rounded-md focus:bg-indigo-600 focus:outline-none flex"
                >
                  <div class="flex justify-center mx-auto">
                    <svg
                      v-if="sending"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="xMidYMid"
                      class="animate-spin h-6"
                    >
                      <path
                        d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
                        fill="#fefefe"
                        stroke="none"
                        transform="matrix(1,0,0,1,0,0)"
                        style="
                          transform: matrix(1, 0, 0, 1, 0, 0);
                          animation-play-state: paused;
                        "
                      />
                    </svg>
                    <span> {{ $t("submit") }} </span>
                  </div>
                </button>
              </div>
              <p class="text-base text-center text-green-400" id="result">
                {{ $t(flashMessage) }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Section: Design Block -->
  </div>
  <!-- Container for demo purpose -->
</template>
<script setup>
const { locale } = useI18n();
const config = useRuntimeConfig();
useHead({
  title: "Coupons | Tourexpect",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with Tourexpect, a leading tourism company, to plan your next adventure. Our expert team is available to answer any questions you may have about our services, destinations, and travel packages. Contact us today and start planning your dream vacation.",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
});
let form = reactive({
  name: "",
  email: "",
  phone: "",
  promo_code: "",
});
let flashMessage = ref("");
let sending = ref(false);

const sendCouponRequest = async () => {
  flashMessage.value = "message_sending";
  sending.value = true;
  let { data: send } = await useFetch(() => `coupon`, {
    baseURL: config.API_BASE_URL,
    query: { ...form },
  });
  sending.value = false;
  flashMessage.value = "message_sent";
  clearForm();
};

const clearForm = () => {
  form.name = "";
  form.email = "";
  form.phone = "";
  form.promo_code = "";
};
</script>
