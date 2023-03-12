<template>
  <div v-if="pages !== undefined" class="w-full text-center">
    <nav v-if="1 == 2" aria-label="Page navigation example">
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
        <li
          v-for="link in paginate(12, 34, 0)"
          :key="link"
          @click="$emit('changePage', link.label)"
          class="cursor-pointer"
        >
          <span
            v-if="!isNaN(link)"
            class="py-2 px-3 leading-tight hover:text-blue-500 dark:hover:text-blue-500"
            :class="link ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400'"
            >{{ link }}</span
          >
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

    <div class="py-20">
      <!-- <ul class="inline-flex items-center">
        <li
          v-for="(link, i) in paginate(12, 34, 0)"
          :key="i"
          @click="$emit('changePage', link.label)"
          class="cursor-pointer"
        >
          <span
            v-if="!isNaN(link)"
            class="py-2 px-3 leading-tight hover:text-blue-500 dark:hover:text-blue-500"
            :class="link ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400'"
            >{{ link + "  " + i }}</span
          >
        </li>
      </ul> -->
      <ul class="inline-flex items-center">
        <li
          class="cursor-pointer"
          v-for="(page, i) in paginate(current_page, 34, 0)"
          :key="i"
        >
          <span
            class="py-2 px-3 leading-tight hover:text-blue-500 dark:hover:text-blue-500"
            :class="
              current_page == page
                ? 'text-blue-500'
                : 'text-gray-500 dark:text-gray-400'
            "
          >
            {{ page }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
let current_page = ref(2);
let pages = [];
//   let currentPage= 0
// define method
function paginate(current_page, last_page, onSides = 3) {
  // pages
  let pages = [];
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
      pages.push(i);
    } else if (
      i == current_page - (offset + 1) ||
      i == current_page + (offset + 1)
    ) {
      pages.push("...");
    }
  }
  return pages;
}
// pageNums = ()=> {
//     return paginate(this.currentPage, this.pages.length, 4)
//   }
</script>
