<template>
  <div class="">
    <!-- Hero Section -->

    <section class="">
      <img
        src="/images/hero.jpg"
        alt="hero"
        class="w-full h-96 object-cover object-center"
      />
    </section>
    <!-- end hero section -->
    <div class="my-14" :class="config.public.container_class">
      <div class="px-4 sm:px-0">
        <div class="border-b-4 border-yellow-500 text-center mb-6 mt-20">
          <h2 class="font-extrabold uppercase text-black text-2xl">
            {{ $t("turkey_tours") }}
          </h2>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
        >
          <nuxt-link
            :to="localePath('/tours/turkey')"
            class="relative overflow-hidden row-span-2"
          >
            <img
              :src="`${config.BASE_URL}/images/turkey.jpg`"
              class="h-full w-full object-cover"
              alt="Product Image"
            />

            <div class="relative">
              <div
                class="text-body-color absolute bottom-0 left-0 right-0 flex justify-between overflow-hidden text-base font-bold leading-relaxed text-indigo-800"
              >
                <nuxt-link
                  :to="localePath('/tours/turkey')"
                  class="mx-auto h-12 w-full bg-main-orange px-4 justify-center text-white flex items-center"
                  >{{ $t("turkey_tours") }}</nuxt-link
                >
              </div>
            </div>
          </nuxt-link>
          <nuxt-link
            :to="localePath(`/tours/turkey/${province.slug}`)"
            class="relative bg-blue-50 overflow-hidden"
            v-for="province in countries['turkey']"
            :key="province.slug"
          >
            <img
              :src="`${config.BASE_URL}/images/destinations/${province.image}`"
              class="w-full h-56 object-cover"
              alt="Product Image"
            />
            <div class="h-36 relative">
              <div class="items-center justify-center mb-2 h-16 flex px-2">
                <h3 class="text-lg text-black font-bold">
                  {{ province["name_" + locale] }}
                </h3>
              </div>
              <div
                class="bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold"
              >
                <nuxt-link
                  :to="localePath(`/tours/turkey/${province.slug}`)"
                  class="px-4 h-8 bg-main-orange text-white rounded-full mx-auto w-full text-center"
                >
                  {{ $t("see_more") }}
                </nuxt-link>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="mt-20 px-4 sm:px-0">
        <div class="border-b-4 border-yellow-500 text-center mb-6">
          <h2 class="font-extrabold uppercase text-black text-2xl">
            {{ $t("uae_tours") }}
          </h2>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
        >
          <nuxt-link
            :to="localePath('/tours/uae')"
            class="relative overflow-hidden mb-3 row-span-2"
          >
            <img
              :src="`${config.BASE_URL}/images/uae.webp`"
              class="h-full w-full object-cover"
              alt="Product Image"
            />

            <div class="relative">
              <div
                class="text-body-color absolute bottom-0 left-0 right-0 flex justify-between overflow-hidden text-base font-bold leading-relaxed text-indigo-800"
              >
                <nuxt-link
                  :to="localePath('/tours/uae')"
                  class="mx-auto h-12 w-full bg-main-orange px-4 flex justify-center items-center text-white"
                  >{{ $t("uae_tours") }}</nuxt-link
                >
              </div>
            </div>
          </nuxt-link>
          <nuxt-link
            :to="localePath(`/tours/uae/${province.slug}`)"
            class="relative bg-blue-50 overflow-hidden"
            v-for="province in countries['uae']"
            :key="province.slug"
          >
            <img
              :src="`${config.BASE_URL}/images/destinations/${province.image}`"
              class="w-full h-56 object-cover"
              alt="Product Image"
            />
            <div class="h-36 relative">
              <div class="items-center justify-center mb-2 h-16 flex px-2">
                <h3 class="text-lg text-black font-bold">
                  {{ province["name_" + locale] }}
                </h3>
              </div>
              <div
                class="bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold"
              >
                <nuxt-link
                  :to="localePath(`/tours/uae/${province.slug}`)"
                  class="px-4 h-8 bg-main-orange text-white rounded-full mx-auto w-full text-center"
                >
                  {{ $t("see_more") }}
                </nuxt-link>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="space-y-24 my-24">
        <item-slider
          :title="$t('best_of_trabzon_tours')"
          :items="province_tours['trabzon']"
        />
        <item-slider
          :title="$t('best_of_rize_tours')"
          :items="province_tours['rize']"
        />
        <item-slider
          :title="$t('best_of_east_black_sea_region_tours')"
          :items="province_tours['east-black-sea-region']"
        />
        <item-slider
          :title="$t('best_of_dubai_tours')"
          :items="province_tours['dubai']"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const config = useRuntimeConfig();
const localePath = useLocalePath();
const { locale, t } = useI18n();
useHead({
  meta: [
    {
      name: "description",
      content: t("home_description"),
    },
  ],
});
definePageMeta({
  title: "home_title", // set resource key
});
let { data: province_tours } = await useFetch(() => `destination-tours`, {
  baseURL: config.public.API_BASE_URL,
});

let { data: countries } = await useFetch(() => `trending-destinations`, {
  baseURL: config.public.API_BASE_URL,
});
</script>
