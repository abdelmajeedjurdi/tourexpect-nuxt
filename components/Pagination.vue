<template>
  <div v-if="pages !== undefined" class="w-full text-center">
    <nav aria-label="Page navigation example">
      <ul class="inline-flex items-center">
        <li
          v-if="current_page != 1"
          @click="$emit('changePage', current_page - 1)"
          class="cursor-pointer"
        >
          <span
            class="block py-2 px-3 ml-0 leading-tight text-gray-500 rounded-l-lg hover:text-blue-500 dark:hover:text-blue-500 dark:text-gray-400"
          >
            <span class="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </li>
        <!-- <li
          v-for="link in pages['links']"
          :key="link"
          @click="$emit('changePage', link.label)"
          class="cursor-pointer"
        >
          <span
            v-if="!isNaN(link.label)"
            class="py-2 px-3 leading-tight hover:text-blue-500 dark:hover:text-blue-500"
            :class="
              link.label == current_page
                ? 'text-blue-500'
                : 'text-gray-500 dark:text-gray-400'
            "
            >{{ link.label }}</span
          >
        </li> -->
        <li
          class="cursor-pointer"
          v-for="(page, i) in paginate(current_page, pages.last_page, 0)"
          :key="i"
          @click="$emit('changePage', page)"
        >
          <span
            class="py-2 px-1.5 leading-tight hover:text-blue-500 dark:hover:text-blue-500"
            :class="
              current_page == page
                ? 'text-blue-500'
                : 'text-gray-500 dark:text-gray-400'
            "
          >
            {{ page }}
          </span>
        </li>
        <li
          v-if="current_page != pages['last_page']"
          @click="$emit('changePage', current_page + 1)"
          class="cursor-pointer"
        >
          <span
            class="block py-2 px-3 leading-tight text-gray-500 rounded-r-lg dark:hover:text-blue-500 hover:text-blue-500 dark:text-gray-400"
          >
            <span class="sr-only">Next</span>
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup>
const props = defineProps({
  pages: Object,
  current_page: Number,
});

// let current_page = ref(2);
let _pages = [];
//   let currentPage= 0
// define method
function paginate(current_page, last_page, onSides = 3) {
  // _pages
  let _pages = [];
  // Loop through
  for (let i = 1; i <= last_page; i++) {
    // Define offset
    let offset = i == 1 || last_page ? onSides + 1 : onSides;
    // If added
    if (
      i == 1 ||
      (current_page - offset <= i && current_page + offset >= i) ||
      i == current_page ||
      i == last_page
    ) {
      _pages.push(i);
    } else if (
      i == current_page - (offset + 1) ||
      i == current_page + (offset + 1)
    ) {
      _pages.push("...");
    }
  }
  return _pages;
}
</script>
