<template>
  <div class="my-24" :class="config.public.container_class">
    <div>
      <h1 class="text-gray-800 text-4xl font-bold my-4">
        {{ products["destination"]["name_" + locale] }}
      </h1>
      <p>
        {{ products["destination"]["description_" + locale] }}
      </p>
    </div>
    <div v-show="products['tours'].length">
      <item-slider :title="$t('tours')" :items="products['tours']" />
    </div>
    <div v-show="products['packages'].length">
      <package-slider :title="$t('packages')" :items="products['packages']" />
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const { locale, t } = useI18n();

let { data: products, refresh } = await useFetch(
  () => `single-destinations?destination=${route.params["single"]}`,
  {
    // transform: (_product) => _product.data,
    baseURL: config.API_BASE_URL,
  }
);
useHead({
  title: `${products.value["destination"]["name_" + locale.value]} | ${t(
    "tourexpect"
  )}`,
  meta: [
    {
      name: "description",
      content: `${
        products.value["destination"]["description_" + locale.value]
      }`,
    },
  ],
  bodyAttrs: {
    class: "test",
  },
});
</script>
