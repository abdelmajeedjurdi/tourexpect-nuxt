<template>
  <!-- component -->
  <div class="mx-auto w-full max-w-[550px]">
    <form class="space-y-2" @submit.prevent="sendInquiry">
      <input
        type="name"
        id="name"
        class="block w-full border border-gray-300 rounded-full p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        :placeholder="$t('your_name') + '*'"
        v-model="inquiry_form.name"
        required
      />
      <input
        type="tel"
        id="phone"
        class="block w-full border border-gray-300 rounded-full p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        :placeholder="$t('your_phone') + '*'"
        v-model="inquiry_form.phone"
        required
      />
      <input
        type="email"
        id="email"
        class="block w-full border border-gray-300 rounded-full p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        :placeholder="$t('your_email') + '*'"
        v-model="inquiry_form.email"
        required
      />
      <textarea
        id="message"
        class="block w-full border border-gray-300 rounded-full p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        :placeholder="$t('your_message') + '*'"
        v-model="inquiry_form.message"
        required
      />

      <div>
        <button
          type="submit"
          v-if="!is_sending"
          class="hover:shadow-form rounded-full bg-main-orange h-10 w-full text-base font-semibold text-white outline-none"
        >
          <span>
            {{ $t("inquire_now") }}
          </span>
        </button>

        <button
          type="button"
          v-else
          class="hover:shadow-form rounded-full bg-main-orange m-auto h-10 w-full text-base font-semibold text-white outline-none cursor-not-allowed"
        >
          <div id="animation">
            <div class="box" id="box1"></div>
            <div class="box" id="box2"></div>
            <div class="box" id="box3"></div>
            <div class="box" id="box4"></div>
          </div>
        </button>
      </div>
    </form>
  </div>
</template>
<script setup>
const props = defineProps({ type: String, item_name: String, url: String });
const config = useRuntimeConfig();
let is_sending = ref(false);
let inquiry_form = ref({
  name: "",
  phone: "",
  message: "",
  email: "",
  url: props.url,
  type: props.type,
  item_name: props.item_name,
});

const inquire = async (form) => {
  let { data: resp } = await useFetch(() => `inquire`, {
    baseURL: config.public.API_BASE_URL,
    query: { ...form },
  });
  console.log(resp.value);
  return resp.value;
};
const sendInquiry = async () => {
  is_sending.value = true;
  const res = await inquire(inquiry_form.value);
  inquiry_form.value = {
    name: "",
    phone: "",
    message: "",
    email: "",
    url: props.url,
    type: props.type,
    item_name: props.item_name,
  };
  is_sending.value = res.status ? false : true;
};
</script>
<style scoped>
#animation {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 5px;
  height: 5px;
  margin: 2px;
}
.box:nth-child(1) {
  background: white;
  animation: balls 1s linear infinite;
}
.box:nth-child(2) {
  background: white;
  animation: balls 1s 0.1s linear infinite;
}
.box:nth-child(3) {
  background: white;
  animation: balls 1s 0.2s linear infinite;
}
.box:nth-child(4) {
  background: white;
  animation: balls 1s 0.4s linear infinite;
}
@keyframes balls {
  0% {
    transform: sclaeY(1);
  }
  50% {
    transform: scaleY(3);
  }
  100% {
    transform: sclaeY(1);
  }
}
</style>
