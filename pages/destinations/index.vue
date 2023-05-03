<template>
  <div class="my-24" :class="config.public.container_class">
    <div class="px-3">
      <h1 class="text-gray-800 text-4xl font-bold my-4">
        {{ $t("destinations") }}
      </h1>
      <p>
        {{ $t("destinations_description") }}
      </p>
    </div>
    <div v-for="product in products" :key="product">
      <destination-slider
        :title="product['name_' + locale]"
        :items="product['destinations']"
        :country_slug="product.slug"
      />
    </div>
  </div>
</template>
<script setup>
const config = useRuntimeConfig();
const { locale, t } = useI18n();

useHead({
  meta: [
    {
      name: "description",
      content: t("destinations_description"),
    },
  ],
});
definePageMeta({
  title: "destinations_title", // set resource key
});

let { data: products, refresh } = await useFetch(
  () => `all-destinations?country=''`,
  {
    // transform: (_product) => _product.data,
    baseURL: config.API_BASE_URL,
  }
);
</script>
