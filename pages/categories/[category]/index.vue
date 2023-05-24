<template>
  <div class="my-24">
    <div
      class="relative overflow-hidden w-full block md:flex items-center bg-no-repeat bg-cover bg-center"
    >
      <img
        :src="`${config.BASE_URL}/images/categories/${products['category']['image']}`"
        alt="Visa Application"
        class="w-full object-cover hero_img"
      />
    </div>
    <div :class="config.public.container_class">
      <div class="px-3">
        <h1 class="text-gray-800 text-4xl font-bold my-4">
          {{ products["category"]["name_" + locale] }}
        </h1>
        <p>
          {{ products["category"]["description_" + locale] }}
        </p>
      </div>
      <div v-show="products['tours'].length">
        <item-slider :title="$t('tours')" :items="products['tours']" />
      </div>
      <div v-show="products['packages'].length">
        <package-slider :title="$t('packages')" :items="products['packages']" />
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const { locale, t } = useI18n();
let { data: products, refresh } = await useFetch(
  () => `category/${route.params["category"]}`,
  {
    baseURL: config.API_BASE_URL,
  }
);
console.log();
useHead({
  title: `${products.value.category["name_" + locale.value]}| ${t(
    "tourexpect"
  )}`,
  meta: [
    {
      name: "description",
      content: "",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
});
</script>

<style scoped>
.hero_img {
  height: 40vh !important;
}
/* sm */
@media (min-width: 540px) {
  .hero_img {
    height: 675px !important;
  }
}
</style>
