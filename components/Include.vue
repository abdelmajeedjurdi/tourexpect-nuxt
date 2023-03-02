<template>
  <div class="px-2">
    <h3 class="text-indigo-800 font-bold px-6 py-3 text-lg">
      {{ $t(section_title) }}
    </h3>
    <ul class="text-black">
      <li
        v-for="item in includes.split('\n--')"
        :key="item"
        class="flex items-center"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 text-green-500"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <span class="mx-1"> {{ item }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({
  includes: String,
  section_title: String,
});
</script>
<style>
ol,
ul {
  padding-left: 2rem !important;
  padding-right: 2rem !important;
}
</style>
