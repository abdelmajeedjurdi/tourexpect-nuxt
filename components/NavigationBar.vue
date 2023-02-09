<template>
  <div
    class="bg-white w-full fixed top-0 z-20"
    style="font-family: 'Source Sans Pro', sans-serif; !important;"
  >
    <nav>
      <!-- first navbar -->
      <div id="navbar">
        <div
          class="flex outclick justify-between h-16 px-3 md:px-0 max-w-6xl mx-auto"
        >
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 text-gray-600 hover:text-black cursor-pointer mx-3"
              viewBox="0 0 20 20"
              fill="currentColor"
              @click="showMenu(-1)"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <router-link :to="lang == 'ar' ? '/ar' : '/'" class="items-center">
              <img src="/images/logo.svg" alt="logo" class="h-6" />
            </router-link>
          </div>
          <div class="w-36 my-auto">
            <div class="flex justify-end items-center">
              <button
                @click="switchLanguage()"
                class="bg-white text-xs border px-2 py-1 md:py-1 rounded shadow-md hover:shadow-sm duration-700 h-8"
              >
                {{ lang == "ar" ? "English" : "العربية" }}
              </button>
              <select
                name="curr"
                id="curr"
                class="bg-white text-xs border w-20 m-1 md:m-0 py-1 md:py-1 rounded shadow-md hover:shadow-sm duration-700 h-8"
              >
                <option value="USD">USD</option>
                <option value="aed">AED</option>
              </select>
            </div>
          </div>
        </div>
        <!-- second navbar -->
        <div class="flex justify-between px-3 md:px-0 w-full max-w-6xl mx-auto">
          <div class="hidden lg:block w-full">
            <nav class="border-gray-200 sm:px-4 rounded w-full hidden lg:block">
              <div class="flex items-center justify-center">
                <div
                  class="absolute md:static w-full md:block md:w-auto left-0 right-0 z-20"
                  style="top: 8rem"
                  id="mobile-menu"
                >
                  <ul
                    class="flex flex-col mx-auto my-auto md:flex-row md:mt-0 md:text-sm md:font-medium items-center"
                  >
                    <li
                      class="w-full md:w-auto text-center"
                      v-for="(item, i) in menu"
                      :key="i"
                    >
                      <div
                        v-if="
                          item.only_sidebar == false && item.is_link == false
                        "
                        class="md:mx-4"
                      >
                        <button
                          @click="showMenu(item.id)"
                          class="peer pr-4 pl-3 font-bold text-xl text-gray-800 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
                        >
                          {{ item["name_" + lang] }}
                        </button>
                      </div>
                      <div v-if="item.is_link == true" class="md:mx-4">
                        <!-- <router-link
                          :to="{
                            name: item.slug,
                            params: {
                              lang: lang == 'ar' ? 'ar' : '',
                            },
                          }"
                          class="peer pr-4 pl-3 font-bold text-xl text-gray-800 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
                        >
                          {{ item["name_" + lang] }}</router-link> -->
                        <div
                          class="peer pr-4 pl-3 font-bold text-xl text-gray-800 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
                        >
                          {{ item["name_" + lang] }}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <!-- <bread-crumb v-if="url.path !== '/'" /> -->
      <!-- Desktop Side bar -->
      <div
        v-show="is_menu"
        class="top-0 outclick z-40 absolute w-full h-screen menu bg-black bg-opacity-25 hidden md:flex"
      >
        <div class="flex" id="menu">
          <!-- first layer -->
          <div class="w-80 h-screen border bg-white">
            <div class="w-full py-10 flex items-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400 mx-5 hover:text-gray-500 cursor-pointer"
                @click="closeMenu"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <router-link
                :to="lang == 'ar' ? '/ar' : '/'"
                class="flex items-center justify-center"
              >
                <img src="/images/logo.svg" alt="logo" class="h-6" />
              </router-link>
            </div>

            <ul
              class="space-y-6 md:flex-row md:mt-0 md:text-sm md:font-medium items-center"
            >
              <li
                class="w-full md:w-auto"
                v-for="(item, i) in menu"
                @mouseenter="setSubmenu(i)"
                :key="i"
              >
                <!-- <router-link
                  :to="(lang == 'ar' ? '/ar/' : '/') + item.slug"
                  @click="closeMenu"
                  :class="
                    menu_path_by_id.menu == i ? 'text-blue-400' : 'text-black'
                  "
                  class="block font-semibold text-2xl py-2 pr-4 pl-3 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
                >
                  {{ item["name_" + lang] }}
                </router-link> -->
                <div
                  class="block font-semibold text-2xl py-2 pr-4 pl-3 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
                >
                  {{ item["name_" + lang] }}
                </div>
              </li>
            </ul>
          </div>
          <!-- second layer -->
          <div
            v-if="submenu.length"
            class="w-64 md:w-64 h-screen border bg-white"
          >
            <div class="w-full py-10 text-center text-xl font-bold">
              <span>{{ $t(menu_title) }}</span>
            </div>
            <ul
              class="space-y-4 md:flex-row mx-6 md:mt-0 md:text-sm md:font-medium items-center"
            >
              <li
                class="w-full flex justify-between md:w-auto items-center"
                v-for="(item, j) in submenu"
                :key="j"
                @mouseenter="setSubSubMenu(j)"
              >
                <router-link
                  :to="{
                    path: `${
                      lang == 'ar' ? '/ar' : ''
                    }/${menu_slug}/${submenu_slug} `,
                    params: {
                      destination: submenu_slug,
                    },
                  }"
                  @click="closeMenu"
                  :class="
                    menu_path_by_id.sub_menu == j
                      ? 'text-blue-400'
                      : 'text-black'
                  "
                  class="block text-sm py-2 pr-4 pl-3 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
                >
                  {{ item["name_" + lang] }}
                </router-link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 text-gray-600"
                  fill="none"
                  v-if="lang == 'en'"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </li>
            </ul>
          </div>
          <!-- third layer -->
          <div
            class="w-64 md:w-64 h-screen border bg-white"
            v-if="submenu_title.length"
          >
            <div class="w-full py-10 text-center text-xl font-bold">
              <span>{{ submenu_title }}</span>
            </div>
            <ul
              class="space-y-4 md:flex-row mx-6 md:mt-0 md:text-sm md:font-medium items-center"
            >
              <li
                class="w-full md:w-auto"
                v-for="(item, i) in subsubmenu['items']"
                :key="i"
              >
                <router-link
                  :to="{
                    path: `/${menu_slug}/${submenu_slug}/${item['slug']} `,
                    params: {
                      destination: submenu_slug.at,
                      subdestination: item['slug'],
                      lang: lang == 'ar' ? 'ar' : '',
                    },
                  }"
                  @click="closeMenu"
                  class="block text-sm py-2 pr-4 pl-3 text-gray-700 border-gray-100 md:border-0 hover:text-blue-400 md:p-0"
                >
                  {{ item["name_" + lang] }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Mobile Side bar -->
      <div
        v-show="mobile_menu"
        id="mobilemenu"
        class="top-0 outclick z-40 absolute w-full h-screen menu flex bg-opacity-25 md:hidden"
      >
        <!-- first layer -->
        <div class="w-full h-screen border bg-white">
          <div class="w-full py-10 flex items-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400 mx-5 hover:text-gray-500 cursor-pointer"
              @click="closeMenu"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>

            <router-link
              :to="lang == 'ar' ? '/ar' : '/'"
              class="flex items-center justify-center"
            >
              <img src="/images/logo.svg" alt="logo" class="h-6" />
            </router-link>
          </div>
          <ul
            class="space-y-6 md:flex-row mx-20 md:mt-0 md:text-sm md:font-medium items-center"
          >
            <li
              class="w-full md:w-auto"
              v-for="(item, i) in menu"
              :key="i"
              @click="
                item['items'].length > 0
                  ? setSubmenu(i)
                  : (router.push({
                      path: `${lang == 'ar' ? '/ar' : ''}/${item.slug}`,
                    }),
                    closeMenu())
              "
            >
              <button
                :class="menu_path_by_id.menu == i ? 'text-blue-400' : ''"
                class="block font-semibold text-xl py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
              >
                {{ item["name_" + lang] }}
              </button>
            </li>
          </ul>
        </div>
        <!-- second layer -->
        <div
          v-show="submenu.length"
          class="w-full md:w-64 h-screen border bg-white z-20 absolute md:static"
        >
          <div class="flex w-full justify-between mt-4 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 text-gray-400 hover:text-gray-500 cursor-pointer"
              @click="closeSubmenue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 text-gray-400 hover:text-gray-500 cursor-pointer"
              @click="closeMenu"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="w-full py-10 text-center text-xl font-bold">
            <span>{{ $t(menu_title) }}</span>
          </div>
          <ul
            class="space-y-4 md:flex-row mx-6 md:mt-0 md:text-sm md:font-medium items-center"
          >
            <li
              class="w-full flex justify-between items-center md:w-auto"
              v-for="(item, j) in submenu"
              :key="j"
              @click="
                item['items'].length > 0
                  ? setSubSubMenu(j)
                  : (router.push({
                      path: `${lang == 'ar' ? '/ar' : ''}/${menu_slug}/${
                        item.slug
                      }`,
                    }),
                    closeMenu())
              "
            >
              <button
                :class="menu_path_by_id.sub_menu == j ? 'text-blue-400' : ''"
                class="block text-sm py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
              >
                {{ item["name_" + lang] }}
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 text-gray-600"
                fill="none"
                v-if="item.items.length"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
          </ul>
        </div>
        <!-- third layer -->
        <div
          v-show="submenu_title.length"
          class="w-full md:w-64 h-screen border bg-white z-30 absolute md:static"
        >
          <div class="flex w-full justify-between mt-4 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 text-gray-400 hover:text-gray-500 cursor-pointer"
              @click="submenu_title = ''"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 text-gray-400 hover:text-gray-500 cursor-pointer"
              @click="closeMenu"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="w-full py-10 text-center text-xl font-bold">
            <span>{{ submenu_title }}</span>
          </div>
          <ul
            class="space-y-4 md:flex-row mx-6 md:mt-0 md:text-sm md:font-medium items-center"
          >
            <li
              class="w-full md:w-auto"
              v-for="(item, i) in subsubmenu['items']"
              :key="i"
            >
              <button
                @click="
                  () => {
                    router.push({
                      path: `${
                        lang == 'ar' ? '/ar' : ''
                      }/${menu_slug}/${submenu_slug}/${item.slug}`,
                    });
                    closeMenu();
                  }
                "
                class="block text-sm py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
              >
                {{ item["name_" + lang] }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
let destinations = ref(
  await useFetch("https://tourexpect.com/api/nav-destination")
);
const router = useRouter();
const props = defineProps({ lang: String });
let url = ref(useRoute());
let lang = ref("");
const switchLanguage = async () => {
  // if (process.server) {
  console.log(url.value.name);
  console.log(lang.value);

  if (lang.value == "ar") {
    window.localStorage.setItem("lang", "en");
    await router.replace({
      name: url.value.name,
      params: { lang: "" },
    });
    router.go();
  }
  // }
  else {
    localStorage.setItem("lang", "ar");
    await router.replace({
      name: url.value.name,
      params: { lang: "ar" },
    });
    router.go();
  }
};
// ********************************************
onMounted(async () => {
  lang.value = window.localStorage.getItem("lang") || "en";
  let specifiedElement = document.getElementById("menu");
  let specifiedElement3 = document.getElementById("mobilemenu");
  let specifiedElement2 = document.getElementById("navbar");
  document.addEventListener("click", (event) => {
    const isClickInside = specifiedElement.contains(event.target);
    const isClickInside2 = specifiedElement2.contains(event.target);
    const isClickInside3 = specifiedElement3.contains(event.target);
    if (!isClickInside && !isClickInside2 && !isClickInside3) {
      closeMenu();
    }
  });
  menu.value[0]["items"] = destinations.value.data.destinations;
  menu.value[1]["items"] = destinations.value.data.packages;
  menu.value[2]["items"] = destinations.value.data.tours;
  menu.value[3]["items"] = destinations.value.data.activities;
  menu.value[4]["items"] = destinations.value.data.visas;
});

let menu = ref([
  {
    id: 0,
    name_en: "Destinations",
    name_ar: "الوجهات",
    slug: "destinations",
    only_sidebar: false,
    is_link: false,
    items: [],
  },
  {
    id: 1,
    name_en: "Packages",
    name_ar: "الباقات",
    slug: "packages",
    only_sidebar: false,
    is_link: false,
    items: [],
  },
  {
    id: 2,
    name_en: "Tours",
    name_ar: "الجولات",
    slug: "tours",
    only_sidebar: false,
    is_link: false,
    items: [],
  },
  {
    id: 3,
    name_en: "Activities",
    name_ar: "انشطة",
    slug: "activities",
    is_link: false,
    only_sidebar: false,
    items: [],
  },
  {
    id: 4,
    name_en: "Visas",
    name_ar: "التأشيرات",
    slug: "visas",
    is_link: false,
    only_sidebar: false,
    items: [],
  },
  {
    id: 5,
    name_en: "Transfer",
    name_ar: "التنقل",
    slug: "transfer",
    is_link: true,
    only_sidebar: false,
    items: [],
    // items: [{ id: 0, name_en: 'turkiye', items: ['trabzon', 'istanbul'] }]
  },
  {
    id: 6,
    name_en: "Hotels & Resorts",
    name_ar: "الفنادق و المنتجعات",
    slug: "hotels-and-resorts",
    only_sidebar: false,
    is_link: true,
    items: [],
  },
  {
    id: 7,
    name_en: "Blogs",
    name_ar: "المدونة",
    slug: "blogs",
    only_sidebar: true,
    is_link: true,
    items: [],
  },
]);
let submenu = ref([]);
let subsubmenu = ref([]);
let menu_title = ref("");
let menu_slug = ref("");
let submenu_title = ref("");
let submenu_slug = ref("");
let menu_path_by_id = ref({
  menu: -1,
  sub_menu: -1,
});
const setSubmenu = (i) => {
  console.log(menu.value);
  menu_path_by_id.value.menu = i;
  subsubmenu.value = [];
  submenu_title.value = "";
  submenu_slug.value = "";
  if (!menu.value[i]["is_link"]) {
    submenu.value = menu.value[i]["items"];
    menu_title.value = menu.value[i]["name_en"];
    menu_slug.value = menu.value[i]["slug"];
  } else submenu.value = [];
};
const closeSubmenue = () => {
  menu_path_by_id.value.sub_menu = -1;
  subsubmenu.value = [];
  submenu.value = [];
};
const setSubSubMenu = (i) => {
  menu_path_by_id.value.sub_menu = i;
  subsubmenu.value =
    menu.value[menu_path_by_id.value.menu].items[
      menu_path_by_id.value.sub_menu
    ];

  if (subsubmenu.value["items"].length > 0) {
    submenu_title.value =
      menu.value[menu_path_by_id.value.menu].items[
        menu_path_by_id.value.sub_menu
      ]["name_" + lang.value];
    submenu_slug.value =
      menu.value[menu_path_by_id.value.menu].items[
        menu_path_by_id.value.sub_menu
      ]["slug"];
  } else {
    submenu_title.value = "";
  }
};

let is_menu = ref(false);
let mobile_menu = ref(false);
const showMenu = (i) => {
  console.log(i);
  menu_path_by_id.value.menu = i;
  is_menu.value = true;
  mobile_menu.value = true;
  if (i != -1) setSubmenu(i);
};
const closeMenu = () => {
  menu_path_by_id.value.menu = -1;
  menu_path_by_id.value.sub_menu = -1;
  submenu_title.value = "";
  submenu.value = [];
  subsubmenu.value = [];
  is_menu.value = false;
  mobile_menu.value = false;
};
</script>

<style type="text/css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap");

.st0 {
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #00aeef !important;
}

.st1 {
  fill: #283a97 !important;
}

.st2 {
  fill: #ff8200;
}

.router-link-active {
  color: #00aeef;
}
ul {
  padding-left: 2rem !important;
  padding-right: 2rem !important;
}
</style>
