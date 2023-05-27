<template>
  <div class="my-24" :class="config.public.container_class">
    <div class="px-3">
      <h1 class="text-gray-800 text-4xl font-bold my-4">
        {{ products.data[0]["name_" + locale] }}
      </h1>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
    >
      <div
        v-for="product in products.data[0].visas"
        :key="product.id"
        class="max-w-sm mt-4 bg-white border border-gray-200 rounded-lg shadow"
      >
        <nuxt-link
          :to="localePath(`/visas/${route.params['country']}/${product.slug}`)"
        >
          <img
            class="rounded-t-lg h-40 object-cover w-full object-center"
            :src="`${config.BASE_URL}/images/visas/${product.image}`"
            :alt="product.name_en"
          />
        </nuxt-link>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {{ product["title_" + locale] }}
            </h5>
          </a>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            {{ $t("see_more") }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const localePath = useLocalePath();
const config = useRuntimeConfig();
const { locale, t } = useI18n();
const route = useRoute();
console.log(route.params);
useHead({
  meta: [
    {
      name: "description",
      content: t("visas_description"),
    },
  ],
});
definePageMeta({
  title: "visas_title", // set resource key
});

let { data: products, refresh } = await useFetch(
  () => `all-visas?country=${route.params["country"]}`,
  {
    // transform: (_product) => _product.data,
    baseURL: config.API_BASE_URL,
  }
);
</script>
