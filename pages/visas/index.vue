<template>
  <div class="my-24" :class="config.public.container_class">
    <div class="px-3">
      <h1 class="text-gray-800 text-4xl font-bold my-4">
        {{ $t("visas") }}
      </h1>
      <p>
        {{ $t("visas_description") }}
      </p>
    </div>

    <div v-for="product in products.data" :key="product">
      <visa-slider
        :title="product['name_' + locale]"
        :items="product['visas']"
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
      content: t("visas_description"),
    },
  ],
});
definePageMeta({
  title: "visas_title", // set resource key
});

let { data: products, refresh } = await useFetch(() => `all-visas?country=''`, {
  // transform: (_product) => _product.data,
  baseURL: config.API_BASE_URL,
});
</script>
