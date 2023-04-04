<template>
  <div class="my-24" :class="config.public.container_class">
    <div>
      <h1 class="text-gray-800 text-4xl font-bold my-4">Destinations</h1>
      <p>
        Discover exciting destinations for your next adventure! Tourexpect
        offers a range of tour packages to choose from, ensuring a hassle-free
        and enjoyable travel experience. Explore our destinations page now.
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
const route = useRoute();
const config = useRuntimeConfig();
const localePath = useLocalePath();
const { locale } = useI18n();
useHead({
  title: "Destinations | Tourexpect",
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
  () => `all-destinations?country=''`,
  {
    // transform: (_product) => _product.data,
    baseURL: config.API_BASE_URL,
  }
);
</script>
