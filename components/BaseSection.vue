<template>
  <div class="px-6">
    <h3 class="text-main-indigo font-bold py-2 text-xl">
      {{ $t(section_title) }}
    </h3>
    <p v-for="p in section_description.split('\n')" :key="p">
      {{ p }}
    </p>
  </div>
</template>
<script setup>
const props = defineProps({
  section_description: String,
  section_title: String,
});
</script>
