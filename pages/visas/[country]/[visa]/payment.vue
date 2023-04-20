<template>
  <div class="sm:px-4 xl:px-0 w-full max-w-6xl mx-auto my-32">
    <div class="border-2 border-gray-500">
      <div
        class="bg-main-blue py-1 border-b-2 border-gray-500 text-center uppercase text-white"
      >
        {{ $t("payment_method") }}
      </div>
      <div class="px-8 py-4">
        <div>
          <label for="credit">{{ $t("pay_online") }}</label>
          <div class="flex items-center">
            <div class="flex">
              <input
                type="radio"
                value="1"
                v-model="payment_method"
                name="payment_method"
                id="credit"
              />

              <div class="flex space-x-1 mx-2">
                <img
                  class="rounded h-4"
                  src="/images/payment/visa.jpg"
                  alt="Visa"
                />
                <img
                  class="rounded h-4"
                  src="/images/payment/mastercard.jpg"
                  alt="Mastercard"
                />
                <img
                  class="rounded h-4"
                  src="/images/payment/american_express.jpg"
                  alt="American Express"
                />
                <img
                  class="rounded h-4 bg-white w-8"
                  src="/images/payment/union-pay.png"
                  alt="Union pay"
                />
                <img
                  class="rounded h-4"
                  src="/images/payment/google_pay.jpg"
                  alt="Google Pay"
                />
                <img
                  class="rounded h-4"
                  src="/images/payment/apple_pay.jpg"
                  alt="Apple pay"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <label for="fastpay">{{ $t("fastpay") }}</label>
          <div class="flex items-center">
            <div class="flex">
              <input
                value="2"
                v-model="payment_method"
                type="radio"
                name="payment_method"
                id="fastpay"
              />
              <img
                class="rounded h-6 mx-2"
                src="/images/payment/fastpay.jpg"
                alt="Visa"
              />
            </div>
          </div>
        </div>
        <div class="mt-4">
          <label for="offline">{{ $t("pay_offline") }}</label>
          <div class="flex items-center">
            <input
              value="3"
              v-model="payment_method"
              type="radio"
              name="payment_method"
              id="offline"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="border-2 border-gray-500 mt-8" v-if="total_pay != 0">
      <div
        class="bg-main-blue py-1 border-b-2 border-gray-500 text-center uppercase text-white"
      >
        {{ $t("order_summary") }}
      </div>
      <div class="px-8 py-4">
        <div class="w-1/2 mx-auto">
          <div class="border-b pb-3 border-gray-400">
            <div
              class="flex justify-between uppercase font-bold text-main-indigo mt-2"
            >
              <div class="">
                {{ $t("no_of_applicants") }}
              </div>
              <div class="font-extrabold text-black">
                {{ application_forms.length }}
              </div>
            </div>
            <div
              class="flex justify-between uppercase font-bold text-main-indigo mt-2"
            >
              <div>{{ $t("total_visa_fees") }}</div>
              <div class="font-extrabold text-black">
                {{ total_pay + " USD" }}
              </div>
            </div>
          </div>
          <div class="border-gray-400 mt-3 space-y-6">
            <div
              class="flex justify-between uppercase font-extrabold text-black px-3"
            >
              <h4 class="">{{ $t("total_pay") }}</h4>
              <h4>{{ total_pay + " USD" }}</h4>
            </div>
            <div class="text-center">
              <button
                @click.prevent="goToStripe"
                type="submit"
                v-if="!is_sending"
                class="hover:shadow-form rounded-full bg-main-orange m-auto h-10 w-60 text-base font-semibold text-white outline-none"
                :class="
                  is_terms_and_condition_accepted
                    ? ''
                    : 'opacity-25 cursor-not-allowed'
                "
              >
                {{ $t("pay_visa_fee") }}
              </button>

              <button
                type="button"
                v-else
                class="hover:shadow-form rounded-full bg-main-orange m-auto h-10 w-60 text-base font-semibold text-white outline-none cursor-not-allowed"
              >
                <div id="animation">
                  <div class="box" id="box1"></div>
                  <div class="box" id="box2"></div>
                  <div class="box" id="box3"></div>
                  <div class="box" id="box4"></div>
                </div>
              </button>
            </div>
            <div class="flex text-sm">
              <input
                type="checkbox"
                v-model="is_terms_and_condition_accepted"
                id="is_terms_and_condition_accepted"
                class="rounded h-3 w-3 mt-1.5"
              />
              <label for="is_terms_and_condition_accepted" class="mx-2">{{
                $t("accept_terms_and_conditions")
              }}</label>
            </div>
            <div class="text-red-500 text-sm">
              <span class="text-red-500 font-bold"
                >{{ $t("note") + ":" }}
              </span>
              {{ $t("visa_fee_warning") }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const localePath = useLocalePath();
const { locale } = useI18n();

let total_pay = ref(0);
let application_forms = ref([]);

let is_sending = ref(false);
let payment_method = ref("1");
let is_terms_and_condition_accepted = ref(false);
let session_url = ref("#");
const checkoutRef = ref(null);

const getDBRecords = () => {
  try {
    // Let us open our database
    const request = indexedDB.open("forms", 1);

    request.onsuccess = (event) => {
      const db2 = event.target.result;
      const objectStore = db2
        .transaction("applications_form", "readwrite")
        .objectStore("applications_form")
        .getAll();
      objectStore.onsuccess = (event) => {
        application_forms.value = objectStore.result;
        application_forms.value.forEach((form) => {
          console.log(form.price);
          total_pay.value += form.price;
        });
        if (total_pay.value == 0) {
          window.location.href = "/";
        }
      };
    };
  } catch (error) {
    console.error(error);
  }
};

getDBRecords();

try {
  // forms.value = JSON.parse(window.localStorage.getItem("forms"));
} catch (error) {
  // console.error("window not working");
}

const getSession = async (amount, name, customer_email) => {
  let { data: response, refresh } = await useFetch(() => `get-session`, {
    query: { amount: amount, name: name, customer_email: customer_email },
    baseURL: config.API_BASE_URL, //"http://localhost:8000/api",
  });
  console.log(session_url);
  session_url.value = response.value.url;
};
const applyToVisa = async (form) => {
  let fd = new FormData();
  for (let i = 0; i < form.length; i++) {
    fd.append("name_" + i, form[i].name);
    fd.append("surname_" + i, form[i].surname);
    fd.append("email_" + i, form[i].email);
    fd.append("phone_" + i, form[i].phone);
    fd.append("passport_no_" + i, form[i].passport_no);
    fd.append("travel_on_" + i, form[i].travel_on);
    fd.append("country_" + i, form[i].country);
    fd.append("nationality_" + i, form[i].nationality);
    fd.append("visa_type_" + i, form[i].visa_type);
    fd.append("passport_doc_" + i, form[i].passport_doc);
    fd.append("client_photo_" + i, form[i].client_photo);
    fd.append("national_id_" + i, form[i].national_id);
  }

  fd.append("count", form.length);

  try {
    let { data: application } = await useFetch(() => `visa-application`, {
      baseURL: config.API_BASE_URL /* "http://127.0.0.1:8000/api",*/,
      method: "POST",
      body: fd,
    });
    return true;
  } catch (e) {
    if (e.response.status === 422) {
      console.error(e);
    }
  }
};
const payUsingFastpay = async () => {
  const uniqueId =
    Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  const total_to_dollar = total_pay.value * 1500;
  const unit_price_to_dollar = application_forms.value[0]["price"] * 1500;

  try {
    let { data: application } = await useFetch(
      () =>
        `https://apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/initiation`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: {
          store_id: "874446_785",
          store_password: "Hevar@765176",
          order_id: uniqueId + "_" + route.params.visa,
          bill_amount: 250, //total_to_dollar,
          currency: "IQD",
          cart: `[{"name":"UAE Visa for Iraqi Passport","qty":${application_forms.value.length},"unit_price":${unit_price_to_dollar},"sub_total":${total_to_dollar}}]`,
        },
      }
    );
    if (await applyToVisa(application_forms.value)) {
      window.location.href = application.value.data.redirect_uri;
    }
  } catch (e) {
    if (e.response.status === 422) {
      console.error(e);
    }
  }
};
const goToStripe = async () => {
  if (is_terms_and_condition_accepted.value) {
    is_sending.value = true;
    switch (payment_method.value) {
      case "1":
        await getSession(
          total_pay.value,
          "UAE Visa for Iraqi Passport",
          application_forms.value[0].email
        );
        if (await applyToVisa(application_forms.value))
          window.location.href = session_url.value;
        break;
      case "2":
        payUsingFastpay();
        break;
      case "3":
        if (await applyToVisa(application_forms.value))
          router.push({
            path: `/message-sent`,
          });
        break;

      default:
        is_sending.value = false;
        console.error("not accepted");
        break;
    }
  }
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
