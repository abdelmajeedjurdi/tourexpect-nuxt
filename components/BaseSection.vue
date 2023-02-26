<template>
  <div class="px-2">
    <h3 class="text-main-indigo font-bold">{{ $t(section_title) }}</h3>
    <p v-for="p in section_description.split('\n')" :key="p" class="text-lg">
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
