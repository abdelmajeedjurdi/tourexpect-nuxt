<template>
  <div class="my-24" :class="config.public.container_class">
    <div class="px-3">
      <h1 class="text-gray-800 text-4xl font-bold my-4">
        {{ products["destinations"][0]["country_" + locale] }}
      </h1>
      <p>
        <!-- {{ $t("destinations_description") }} -->
        {{
          route.params["country"] + "_description" ==
          $t(route.params["country"] + "_description")
            ? $t("destinations_description")
            : $t(route.params["country"] + "_description")
        }}
      </p>
    </div>
    <div>
      <destination-slider
        :title="$t('destinations')"
        :items="products['destinations']"
        :country_slug="route.params['country']"
      />
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
  title: `${route.params["country"]} Destinations | Tourexpect`,
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
  () => `all-destinations?country=${route.params["country"]}`,
  {
    // transform: (_product) => _product.data,
    baseURL: config.API_BASE_URL,
  }
);
</script>
