<template>
  <div class="my-24" :class="config.public.container_class">
    <div class="px-3">
      <h1 class="text-gray-800 text-4xl font-bold my-4">
        {{ products["destinations"][0]["country_" + locale] }}
      </h1>

      <p>
        {{ products["destinations"][0]["country_description_" + locale] }}
      </p>
    </div>
    <div v-show="products['destinations'].length">
      <destination-slider
        :title="$t('destinations')"
        :items="products['destinations']"
        :country_slug="route.params['country']"
      />
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
  () => `all-destinations?country=${route.params["country"]}`,
  {
    // transform: (_product) => _product.data,
    baseURL: config.API_BASE_URL,
  }
);
useHead({
  title: `${t(route["params"]["country"])} | ${t("tourexpect")}`,
  meta: [
    {
      name: "description",
      content:
        products.value["destinations"][0][
          "country_description_" + locale.value
        ],
    },
  ],
  bodyAttrs: {
    class: "test",
  },
});
</script>
