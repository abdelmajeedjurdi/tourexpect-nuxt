<template>
  <div class="sm:px-4 xl:px-0 sm:flex w-full max-w-6xl mx-auto my-28">
    hi {{ route.params.tour }}
  </div>
</template>
<script setup>
const route = useRoute();
</script>
