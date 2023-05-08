<template>
  <div class="sm:px-4 xl:px-0 sm:flex w-full max-w-6xl mx-auto">
    <div v-if="2 == 2">
      <div
        class="relative z-40 lg:hidden"
        v-show="mobileFiltersOpen"
        role="dialog"
        aria-modal="true"
      >
        <div class="fixed inset-0 z-40 flex">
          <div
            class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"
          >
            <div class="flex items-center justify-between px-4">
              <h2 class="text-lg font-medium text-gray-900">Filters</h2>
              <button
                @click="mobileFiltersOpen = false"
                type="button"
                class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
              >
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x-mark -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <!-- Filters -->

            <form class="mt-4 border-t border-gray-200">
              <div class="border-t border-gray-200 px-4 py-6">
                <h3 class="-my-3 flow-root">
                  <!-- Expand/collapse section button -->
                  <button
                    type="button"
                    class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-mobile-1"
                    aria-expanded="false"
                  >
                    <span class="font-medium text-gray-900">{{
                      $t("categories")
                    }}</span>
                  </button>
                </h3>
                <!-- Filter section, show/hide based on section state. -->

                <div class="pt-6" id="filter-section-1">
                  <div class="space-y-4">
                    <div
                      class="flex items-center"
                      v-for="category in categories"
                      :key="category.id"
                    >
                      <input
                        :id="category['name_en']"
                        :name="category['name_en']"
                        :value="category.id"
                        type="checkbox"
                        v-model="filter.categories"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        :for="category['name_en']"
                        class="mx-2 text-sm text-gray-600"
                        >{{ category["name_" + locale] }}</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-t border-gray-200 px-4 py-6">
                <h3 class="-my-3 flow-root">
                  <!-- Expand/collapse section button -->
                  <button
                    type="button"
                    class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-mobile-1"
                    aria-expanded="false"
                  >
                    <span class="font-medium text-gray-900">{{
                      $t("destinations")
                    }}</span>
                  </button>
                </h3>
                <!-- Filter section, show/hide based on section state. -->
                <div class="pt-6" id="filter-section-1">
                  <div class="space-y-4">
                    <div v-for="country in countries" :key="country.id">
                      <div class="flex items-center mb-1">
                        <input
                          :id="country['name_en']"
                          :name="country['name_en']"
                          :value="country.id"
                          type="checkbox"
                          v-model="active_countries[country.id]"
                          @change="filterCountries(country.id, country.items)"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          :for="country['name_en']"
                          class="mx-2 text-sm text-gray-600"
                          >{{ country["name_" + locale] }}</label
                        >
                      </div>
                      <div
                        class="flex items-center mx-2"
                        v-for="province in country['items']"
                        :key="province.id"
                      >
                        <input
                          :id="province['name_en']"
                          :name="province['name_en']"
                          :value="province.id"
                          type="checkbox"
                          v-model="filter.destinations"
                          @change="getFilteredProducts"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          :for="province['name_en']"
                          class="mx-2 text-sm text-gray-600"
                          >{{ province["name_" + locale] }}</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-7xl">
        <div
          class="flex items-baseline justify-between border-b border-gray-200 pt-12 pb-6 px-4"
        >
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">
            {{ $t("packages") }}
          </h1>

          <div class="flex items-center">
            <button
              @click="mobileFiltersOpen = true"
              type="button"
              class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <span class="sr-only">Filters</span>
              <!-- Heroicon name: mini/funnel -->
              <svg
                class="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" class="pt-6 pb-24">
          <h2 id="products-heading" class="sr-only">Products</h2>

          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <!-- Filters -->
            <form class="hidden lg:block">
              <!-- categories filter -->
              <div class="border-b border-gray-200 py-6">
                <h3 class="-my-3 flow-root">
                  <!-- Expand/collapse section button -->
                  <button
                    type="button"
                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-1"
                    aria-expanded="false"
                  >
                    <span class="font-medium text-gray-900">{{
                      $t("categories")
                    }}</span>
                  </button>
                </h3>
                <!-- Filter section, show/hide based on section state. -->
                <div class="pt-6" id="filter-section-1">
                  <div class="space-y-4">
                    <div
                      class="flex items-center"
                      v-for="category in categories"
                      :key="category.id"
                    >
                      <input
                        :id="category['name_en']"
                        :name="category['name_en']"
                        :value="category.id"
                        type="checkbox"
                        v-model="filter.categories"
                        @change="getFilteredProducts"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        :for="category['name_en']"
                        class="mx-2 text-sm text-gray-600"
                        >{{ category["name_" + locale] }}</label
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- destinations filter -->
              <div class="border-b border-gray-200 py-6">
                <h3 class="-my-3 flow-root">
                  <!-- Expand/collapse section button -->
                  <button
                    type="button"
                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-1"
                    aria-expanded="false"
                  >
                    <span class="font-medium text-gray-900">{{
                      $t("destinations")
                    }}</span>
                  </button>
                </h3>
                <!-- Filter section, show/hide based on section state. -->
                <div class="pt-6" id="filter-section-1">
                  <div class="space-y-4">
                    <div v-for="country in countries" :key="country.id">
                      <div class="flex items-center mb-1">
                        <input
                          :id="country['name_en']"
                          :name="country['name_en']"
                          :value="country.id"
                          type="checkbox"
                          v-model="active_countries[country.id]"
                          @change="filterCountries(country.id, country.items)"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          :for="country['name_en']"
                          class="mx-2 text-sm text-gray-600"
                          >{{ country["name_" + locale] }}</label
                        >
                      </div>
                      <div
                        class="flex items-center mx-2"
                        v-for="province in country['items']"
                        :key="province.id"
                      >
                        <input
                          :id="province['name_en']"
                          :name="province['name_en']"
                          :value="province.id"
                          type="checkbox"
                          v-model="filter.destinations"
                          @change="getFilteredProducts"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          :for="province['name_en']"
                          class="mx-2 text-sm text-gray-600"
                          >{{ province["name_" + locale] }}</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <!-- Product grid -->
            <div class="lg:col-span-3">
              <!-- Replace with your content -->
              <div class="w-full px-4">
                <div
                  v-if="products.data"
                  style="min-height: 80vh"
                  class="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-between"
                >
                  <div v-for="product in products.data" :key="product.id">
                    <nuxt-link
                      :to="localePath(`/packages/details/${product.slug}`)"
                    >
                      <PackageCard :product="product" />
                    </nuxt-link>
                  </div>
                </div>
                <!-- pagination -->
                <pagination
                  @changePage="changePage($event)"
                  :pages="products.meta"
                  :current_page="filter.page"
                />
                {{ country }}
                <!-- end of pagination -->
              </div>
            </div>
            <!-- /End replace -->
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const localePath = useLocalePath();
const { locale, t } = useI18n();

let filter = ref({
  destinations: [],
  categories: [],
  country: "turkey",
  page: 1,
});
let { data: products, refresh } = await useFetch(
  () =>
    `filtered-packs?d=${JSON.stringify(
      filter.value.destinations
    )}&c=${JSON.stringify(filter.value.categories)}&country=${JSON.stringify(
      filter.value.country
    )}&page=${filter.value.page}`,
  {
    // transform: (_item) => _item.data,
    baseURL: config.API_BASE_URL,
  }
);
const { data: countries } = await useFetch(
  () => "countries-destinations",

  {
    transform: (_item) => _item.data,
    baseURL: config.API_BASE_URL,
  }
);

const country_description = countries.value.find(
  (country) => country.slug === route.params.country
)["description_" + locale.value];

useHead({
  title: `${t(route["params"]["country"])} - ${t("packages")} | ${t(
    "tourexpect"
  )}`,
  meta: [
    {
      name: "description",
      content: country_description,
    },
  ],
});

console.log(countries.value);
const { data: categories } = await useFetch(
  () => `categories-on-section?type=packages`,
  {
    transform: (_item) => _item.data,
    baseURL: config.API_BASE_URL,
  }
);
const getFilteredProducts = async () => {
  refresh();
};

let currentPage = ref(1);
const destination = route.params["country"];
const currentCountryItems = () => {
  for (let i in countries.value) {
    if (countries.value[i]["slug"].trim() == route.params.country)
      if (countries.value[i]["slug"].trim() == destination.trim()) {
        let c = countries.value[i]["items"];

        for (var j in c) {
          filter.value.destinations.push(countries.value[i]["items"][j]["id"]);
        }
        getFilteredProducts();
        break;
      }
  }
};
currentCountryItems();

const showFilter = () => {
  if (document.getElementById("filter").style.display == "block")
    document.getElementById("filter").style.display = "none";
  else document.getElementById("filter").style.display = "block";
};
let active_country = ref("0");

const changePage = async (page) => {
  if (page == "...") return;
  filter.value.page = page;
  await refresh();
  window.scrollTo(0, 0);
};

let active_countries = { id: false };
const filterCountries = (id, provinces) => {
  if (active_countries[id]) {
    for (let x in provinces) {
      if (!filter.value.destinations.includes(provinces[x]["id"]))
        filter.value.destinations.push(provinces[x]["id"]);
    }
  } else {
    for (let x in provinces) {
      var index = filter.value.destinations.indexOf(provinces[x]["id"]);
      filter.value.destinations.splice(index, 1);
    }
  }
};
let mobileFiltersOpen = ref(false);
</script>
