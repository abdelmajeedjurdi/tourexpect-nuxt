<template>
  <div class="py-12 sm:px-4 xl:px-0 w-full max-w-6xl mx-auto">
    <h1 class="text-3xl font-bold text-center mb-6">Visas</h1>
    {{ products.data }}
    <!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> 

      <div
        v-for="product in products.data"
        :key="product.id"
        class="bg-white rounded shadow p-6"
      >
        <img
          :src="`${config.BASE_URL}/images/visas/${product.image}`"
          alt="Visa Thumbnail"
          class="w-full mb-4 rounded h-48 object-cover"
        />
        <h2 class="text-lg font-bold mb-2">{{ product["title_" + locale] }}</h2>
        <a
          :href="product.link"
          class="text-blue-600 font-medium hover:underline"
        >
          Learn More
        </a>
      </div>
    </div> -->
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { locale, t } = useI18n();
const { data: products, refresh } = await useFetch(() => `all-visas`, {
  // transform: (_product) => _product.data,
  baseURL: config.API_BASE_URL,
});

const visas = ref([
  {
    id: 1,
    name: "UAE Visa",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    thumbnail:
      "https://admin.tourexpect.com/images/visas/1684134189_pexels-mo-ismail-3763190.jpg",
    link: "#",
  },
  {
    id: 2,
    name: "Cambodia Visa",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    thumbnail:
      "https://admin.tourexpect.com/images/visas/1684132783_pexels-allphoto.jpg",
    link: "#",
  },
  {
    id: 3,
    name: "Morocco",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    thumbnail:
      "https://admin.tourexpect.com/images/visas/1684133873_pexels-taryn-elliott-3889761.jpg",
    link: "#",
  },
]);
</script>

<style>
/* Add your custom styles here */
</style>
