<template>
  <div class="top-0 z-50 absolute w-full h-screen flex bg-black bg-opacity-25">
    <div class="w-80 h-screen border bg-white">
      <div class="w-full py-10">
        <nuxt-link to="/" class="flex items-center justify-center">
          <img src="/images/logo.svg" alt="logo" class="h-6" />
        </nuxt-link>
      </div>
      <ul
        class="space-y-6 md:flex-row mx-20 md:mt-0 md:text-sm md:font-medium items-center"
      >
        <li
          class="w-full md:w-auto"
          v-for="(item, i) in menu"
          @mouseenter="setSubmenu(i)"
        >
          <nuxt-link
            :to="'/' + item.name"
            class="block font-bold text-xl py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0"
          >
            {{ $t(item.name) }}</nuxt-link
          >
        </li>
      </ul>
    </div>

    <div v-if="submenu.length" class="w-60 h-screen border bg-white">
      <div class="w-full py-10 text-center text-xl font-bold">
        <span>{{ menu_title }}</span>
      </div>
      <ul
        class="space-y-4 md:flex-row mx-20 md:mt-0 md:text-sm md:font-medium items-center"
      >
        <li
          class="w-full md:w-auto"
          v-for="(item, i) in submenu"
          @mouseenter="setSubmenu(i)"
        >
          <nuxt-link
            :to="'/' + menu_title + '/' + item"
            class="block text-base py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0"
          >
            {{ $t(item) }}</nuxt-link
          >
        </li>
      </ul>
    </div>
    <div class="w-80 h-screen border-2 border-black bg-blue-200 hidden">
      {{ submenu }}
    </div>
    <!-- <div class="w-full  bg-black" style="opacity:.25 ;"></div> -->
  </div>
</template>

<script setup>
let menu = ref([
  {
    id: 1,
    name: "destinations",
    items: ["istanbul", "trabzon"],
  },
  {
    id: 2,
    name: "packages",
    items: [],
  },
  {
    id: 3,
    name: "tours",
    items: ["trabzon", "istanbul"],
  },
  {
    id: 4,
    name: "activities",
    items: [],
  },
  {
    id: 5,
    name: "transfer",
    items: ["airport_transfer", "private_car"],
  },
]);
let submenu = ref([]);
let menu_title = ref("");
const setSubmenu = (i) => {
  // menu.value = []
  submenu.value = menu.value[i]["items"];
  menu_title.value = menu.value[i]["name"];
};
</script>
