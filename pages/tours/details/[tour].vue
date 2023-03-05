<template>
  <div class="">
    <div>
      <SwiperSlider img_src="tours" :imgs="tour.images" />
    </div>
    <div
      class="px-2 sm:px-4 xl:px-0 md:flex w-full max-w-6xl mx-auto my-10 justify-between space-x-0 sm:space-x-2"
    >
      <div class="w-full md:w-3/4">
        <div class="w-full mb-8 px-2">
          <h1 class="font-bold text-indigo-800 text-3xl pb-3 pt-0 my-auto">
            {{ tour["title_" + locale] }}
          </h1>
          <div
            class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-between w-full"
            v-if="tour['banner_highlights']"
          >
            <div
              v-for="highlight in JSON.parse(tour['banner_highlights'])"
              :key="highlight"
            >
              <div class="flex">
                <img
                  class="h-6 mx-1"
                  :src="`${config.public.BASE_URL}/images/icons/${highlight.img}`"
                  alt=""
                />
                <span class="text-base font-bold">
                  {{ highlight["title_" + locale] }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="tour['options'] != undefined && tour['options'].length"
          class="border rounded p-2"
        >
          <h3 class="text-indigo-800 font-bold">
            {{ $t("tour_options") }}
          </h3>
          <div class="space-y-2 mt-4">
            <div
              v-for="(option, i) in JSON.parse(tour['options'])"
              :key="option"
              class="rounded py-3 px-16 border flex justify-between cursor-pointer duration-500 hover:bg-blue-200"
              :class="selected_idx == i ? 'bg-blue-300' : ''"
              @click="setOption(option, i)"
            >
              <div>
                <h3 class="font-bold text-xl">
                  {{ option["title_" + locale] }}
                </h3>
                <div class="text-sm">
                  {{ tour["duration_" + locale] }}
                </div>
              </div>
              <div
                class="overflow-hidden text-right text-base text-body-color leading-relaxed text-indigo-800 font-bold m-2"
              >
                <span class="flex">
                  <div>
                    <div
                      v-if="option['option_discount']"
                      style="text-decoration: line-through"
                      class="text-gray-400 me-1 text-xl"
                    >
                      {{ option["adult_price"] + "$" }}
                    </div>
                    <div class="text-gray-800 font-bold text-2xl">
                      {{
                        option["option_discount_type"] == "amount"
                          ? option["adult_price"] - option["option_discount"]
                          : (
                              option["adult_price"] -
                              (option["adult_price"] *
                                option["option_discount"]) /
                                100
                            ).toFixed(2)
                      }}$
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>

        <itinerary
          v-if="tour['itinerary'] != undefined && tour['itinerary'].length > 5"
          class="border py-2 mt-3"
          :section_list="JSON.parse(tour['itinerary'])"
          section_title="itinerary"
        />
        <base-section
          v-if="
            tour['description_' + locale] &&
            tour['description_' + locale] != 'null'
          "
          class="border p-2 mt-3"
          :section_description="tour['description_' + locale]"
          section_title="tour_overview"
        />
        <list-section
          v-if="
            tour['highlights_' + locale] &&
            tour['highlights_' + locale] != 'null'
          "
          class="border py-2 mt-3"
          :section_list="tour['highlights_' + locale]"
          section_title="tour_highlights"
        />
        <include
          v-if="
            tour['include_' + locale] && tour['include_' + locale] != 'null'
          "
          class="border py-2 mt-3"
          :includes="tour['include_' + locale]"
          section_title="tour_inclusion"
        />
        <exclude
          v-if="
            tour['exclude_' + locale] && tour['exclude_' + locale] != 'null'
          "
          class="border py-2 mt-3"
          :excludes="tour['exclude_' + locale]"
          section_title="tour_exclusion"
        />

        <list-section
          v-if="
            tour['information_' + locale] &&
            tour['information_' + locale] != 'null'
          "
          class="border py-2 mt-3"
          :section_list="tour['information_' + locale]"
          section_title="important_information"
        />
        <list-section
          v-if="tour['policy_' + locale] && tour['policy_' + locale] != 'null'"
          class="border py-2 mt-3"
          :section_list="tour['policy_' + locale]"
          section_title="policy"
        />
        <list-section
          v-if="
            tour['timing_and_transfer_' + locale] &&
            tour['timing_and_transfer_' + locale] != 'null'
          "
          class="border py-2 mt-3"
          :section_list="tour['timing_and_transfer_' + locale]"
          section_title="timing_and_transfer"
        />
        <list-section
          v-if="
            tour['terms_and_bullet_sections_' + locale] &&
            tour['terms_and_bullet_sections_' + locale] != 'null'
          "
          class="border py-2 mt-3"
          :section_list="tour['terms_and_bullet_sections_' + locale]"
          section_title="terms_and_conditions"
        />
        <list-section
          v-if="tour['notes_' + locale] && tour['notes_' + locale] != 'null'"
          class="border py-2 mt-3"
          :section_list="tour['notes_' + locale]"
          section_title="notes"
        />
      </div>
      <div class="w-full md:w-1/4 mt-4">
        <div class="top-24">
          <div
            v-if="selected_option != null"
            class="rounded-xl border border-blue-800"
          >
            <div
              class="rounded-t-xl bg-blue-800 py-2 text-center text-xl text-white"
            >
              {{ $t("pricing") }}
            </div>

            <div class="p-3">
              <form class="">
                <div class="flex items-center">
                  <div class="text-xl font-semibold text-gray-500">
                    {{ $t("start_from") }}
                  </div>
                  <div class="mx-2 text-xl text-gray-400 line-through">
                    {{ original_price }}$
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="text-4xl text-red-500">
                    {{ total_price.toFixed(2) }}$
                  </div>
                  <span
                    class="flex items-center rounded bg-red-100 px-1 text-yellow-500"
                    >{{
                      selected_option["option_discount"] +
                      (selected_option["option_discount_type"] == "percentage"
                        ? "%"
                        : "$")
                    }}</span
                  >
                </div>
              </form>
              <div class="mt-7">
                <div class="mt-auto flex justify-between">
                  <div>{{ $t("adults") }}</div>
                  <div class="flex justify-between w-1/3">
                    <button
                      @click.prevent="setGuests('a', -1)"
                      class="w-6 rounded bg-yellow-500 text-white"
                    >
                      -
                    </button>
                    <span>{{ adults }}</span>
                    <button
                      @click.prevent="setGuests('a', 1)"
                      class="w-6 rounded bg-yellow-500 text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div class="mt-4 flex justify-between">
                  <div>{{ $t("children") }}</div>
                  <div class="flex justify-between w-1/3">
                    <button
                      @click.prevent="setGuests('c', -1)"
                      class="w-6 rounded bg-yellow-500 text-white"
                    >
                      -
                    </button>
                    <span>{{ children }}</span>
                    <button
                      @click.prevent="setGuests('c', 1)"
                      class="w-6 rounded bg-yellow-500 text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div class="mt-4 flex justify-between">
                  <div>{{ $t("infants") }}</div>
                  <div class="flex justify-between w-1/3">
                    <button
                      @click.prevent="setGuests('i', -1)"
                      class="w-6 rounded bg-yellow-500 text-white"
                    >
                      -
                    </button>
                    <span>{{ infants }}</span>
                    <button
                      @click.prevent="setGuests('i', 1)"
                      class="w-6 rounded bg-yellow-500 text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  class="mt-4 text-white w-full rounded bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center duration-300"
                >
                  {{ $t("reserve") }}
                </button>
              </div>
            </div>
          </div>

          <!-- 1111111111111111111111111111111111 -->
          <div class="rounded-xl border border-blue-800 mt-4">
            <div
              class="rounded-t-xl bg-blue-800 py-2 text-center text-xl text-white"
            >
              {{ $t("inquiry") }}
            </div>
            <div class="p-3" v-if="tour.title_en">
              <Inquire
                type="tour"
                :item_name="tour.title_en"
                :url="'https://tourexpect.com' + route.path"
              />
              <a
                :href="
                  'https://wa.me/+9647509882000/?text=' +
                  'https://tourexpect.com' +
                  route.fullPath +
                  '\u000a I want to ask about this'
                "
                target="_blank"
                class="flex bg-green-400 text-white rounded-full items-center py-2 px-4 space-x-2 mx-auto mt-4"
              >
                <img src="/images/whatsapp.svg" alt="whatsapp" class="h-6" />
                <span>{{ $t("whatsapp_text") }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const localePath = useLocalePath();
const { locale } = useI18n();
let adults = ref(1);
let children = ref(0);
let infants = ref(0);
let selected_option = ref(null);
let total_price = ref(null);
let selected_idx = ref(0);

// getTourDetails c
let { data: tour } = await useFetch(() => `tour/${route.params.tour}`, {
  transform: (_item) => _item.data,
  baseURL: config.public.API_BASE_URL,
});
selected_option.value = JSON.parse(tour.value.options)[0];

const setOption = (opt, idx) => {
  selected_idx.value = idx;
  selected_option.value = opt;
  calculatePrice();
};

let original_price = ref(null);
const calculatePrice = () => {
  if (!selected_option.value) {
    return;
  }
  original_price.value =
    selected_option.value["adult_price"] * adults.value +
    selected_option.value["child_price"] * children.value +
    selected_option.value["infant_price"] * infants.value;

  if (selected_option.value["option_discount_type"] == "amount") {
    total_price.value =
      selected_option.value["adult_price"] * adults.value -
      selected_option.value["option_discount"] * adults.value +
      selected_option.value["child_price"] * children.value -
      selected_option.value["option_discount"] * children.value;
  } else {
    total_price.value =
      (selected_option.value["adult_price"] -
        (selected_option.value["adult_price"] *
          selected_option.value["option_discount"]) /
          100) *
        adults.value +
      (selected_option.value["child_price"] -
        (selected_option.value["child_price"] *
          selected_option.value["option_discount"]) /
          100) *
        children.value +
      (selected_option.value["infant_price"] -
        (selected_option.value["infant_price"] *
          selected_option.value["option_discount"]) /
          100) *
        infants.value;
  }
};
const setGuests = (person, num) => {
  if (person == "a") {
    if (adults.value + num > 0) adults.value += num;
  } else if (person == "c") {
    if (children.value + num >= 0) children.value += num;
  } else {
    if (infants.value + num >= 0) infants.value += num;
  }
  calculatePrice();
};
calculatePrice();
</script>
