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
    <div>
      <item-slider :title="$t('tours')" :items="products['tours']" />
    </div>
    <div>
      <package-slider :title="$t('packages')" :items="products['packages']" />
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const localePath = useLocalePath();
const { locale } = useI18n();
useHead({
  title: `${route.params["single"]} Destinations | Tourexpect`,
  meta: [
    {
      name: "description",
      content:
        "Discover exciting destinations for your next adventure! Tourexpect offers a range of tour packages to choose from, ensuring a hassle-free and enjoyable travel experience. Explore our destinations page now.",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
});

let { data: products, refresh } = await useFetch(
  () => `single-destinations?destination=${route.params["single"]}`,
  {
    // transform: (_product) => _product.data,
    baseURL: config.API_BASE_URL,
  }
);
</script>
