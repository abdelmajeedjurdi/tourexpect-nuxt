<template>
  <div>
    <!-- Hero Section -->
    <div class="">
      <div
        class="relative overflow-hidden w-full block md:flex items-center bg-no-repeat bg-cover bg-center"
      >
        <img src="assets/images/hero.jpg" alt="" />
      </div>
    </div>
    <!-- end hero section -->
    <div class="sm:px-4 xl:px-0 w-full max-w-6xl mx-auto my-14">
      <div class="px-4 sm:px-0">
        <div class="border-b-4 border-yellow-500 text-center mb-6">
          <h2 class="font-extrabold uppercase text-black">
            {{ $t("turkey_tours") }}
          </h2>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
        >
          <router-link
            to="/tours/turkey"
            class="relative overflow-hidden row-span-2"
          >
            <img
              src="http://127.0.0.1:8000/images/turkey.jpg"
              class="h-full w-full object-cover"
              alt="Product Image"
            />

            <div class="relative">
              <div
                class="text-body-color absolute bottom-0 left-0 right-0 flex justify-between overflow-hidden text-base font-bold leading-relaxed text-indigo-800"
              >
                <router-link
                  to="/tours/turkey"
                  class="mx-auto h-12 w-full bg-main-orange px-4 justify-center text-white flex items-center"
                  >{{ $t("turkey_tours") }}</router-link
                >
              </div>
            </div>
          </router-link>
          <router-link
            :to="`/tours/turkey/${province.slug}`"
            class="relative bg-blue-50 overflow-hidden"
            v-for="province in countries['turkey']"
            :key="province.slug"
          >
            <img
              :src="`http://127.0.0.1:8000/images/destinations/${province.image}`"
              class="w-full h-56 object-cover"
              alt="Product Image"
            />
            <div class="h-36 relative">
              <div class="items-center justify-center mb-2 h-16 flex px-2">
                <h3 class="text-lg text-black font-bold">
                  {{ province["name_" + lang] }}
                </h3>
              </div>
              <div
                class="bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold"
              >
                <router-link
                  :to="`/tours/turkey/${province.slug}`"
                  class="px-4 h-8 bg-main-orange text-white rounded-full mx-auto w-full text-center"
                >
                  {{ $t("see_more") }}
                </router-link>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="mt-20 px-4 sm:px-0">
        <div class="border-b-4 border-yellow-500 text-center mb-6">
          <h2 class="font-extrabold uppercase text-black">
            {{ $t("uae_tours") }}
          </h2>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
        >
          <router-link
            to="/tours/uae"
            class="relative overflow-hidden mb-3 row-span-2"
          >
            <img
              src="http://127.0.0.1:8000/images/uae.webp"
              class="h-full w-full object-cover"
              alt="Product Image"
            />

            <div class="relative">
              <div
                class="text-body-color absolute bottom-0 left-0 right-0 flex justify-between overflow-hidden text-base font-bold leading-relaxed text-indigo-800"
              >
                <router-link
                  to="/tours/uae"
                  class="mx-auto h-12 w-full bg-main-orange px-4 flex justify-center items-center text-white"
                  >{{ $t("uae_tours") }}</router-link
                >
              </div>
            </div>
          </router-link>
          <router-link
            :to="`/tours/uae/${province.slug}`"
            class="relative bg-blue-50 overflow-hidden"
            v-for="province in countries['uae']"
            :key="province.slug"
          >
            <img
              :src="`http://127.0.0.1:8000/images/destinations/${province.image}`"
              class="w-full h-56 object-cover"
              alt="Product Image"
            />
            <div class="h-36 relative">
              <div class="items-center justify-center mb-2 h-16 flex px-2">
                <h3 class="text-lg text-black font-bold">
                  {{ province["name_" + lang] }}
                </h3>
              </div>
              <div
                class="bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold"
              >
                <router-link
                  :to="`/tours/uae/${province.slug}`"
                  class="px-4 h-8 bg-main-orange text-white rounded-full mx-auto w-full text-center"
                >
                  {{ $t("see_more") }}
                </router-link>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div>
        <item-slider
          :title="$t('best_of_trabzon_tours')"
          :items="province_tours['trabzon']"
        />
      </div>
      <div>
        <item-slider
          :title="$t('best_of_rize_tours')"
          :items="province_tours['rize']"
        />
      </div>
      <div>
        <item-slider
          :title="$t('best_of_east_black_sea_region_tours')"
          :items="province_tours['east-black-sea-region']"
        />
      </div>
      <div>
        <item-slider
          :title="$t('best_of_dubai_tours')"
          :items="province_tours['dubai']"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
let province_tours = ref(
  await useFetch("http://127.0.0.1:8000/api/destination-tours").data
);
let countries = ref(
  await useFetch("http://127.0.0.1:8000/api/trending-destinations").data
);
</script>
