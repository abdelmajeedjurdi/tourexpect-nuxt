<template>
  <div class="px-6">
    <h3 class="text-main-indigo font-bold py-3 text-lg">
      {{ $t(section_title) }}
    </h3>
    <ul
      style="list-style-image: url('/images/tour-o.svg')"
      class="text-black px-5"
    >
      <li v-for="item in section_list.split('\n--')" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({ section_list: String, section_title: String });
</script>
