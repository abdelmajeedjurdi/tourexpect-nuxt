<template>
	<div class="bg-white  w-full fixed top-0 z-20 " style="font-family: 'Source Sans Pro', sans-serif; !important;">


		<div id="navbar" class="flex justify-between py-3 w-full max-w-6xl mx-auto">

			<div class="  w-52 py-2.5 flex items-center justify-between ">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 text-gray-700 hover:text-black cursor-pointer"
					viewBox="0 0 20 20" fill="currentColor" @click="showMenu(-1)">
					<path fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd" />
				</svg>
				<nuxt-link to="/" class="flex items-center">
					<img src="../assets/images/logo.svg" alt="logo" class="h-6 ">
				</nuxt-link>
			</div>
			<div class="hidden lg:block" style="width: 47rem;">
				<nav class=" border-gray-200 sm:px-4 py-2.5 md:py-4 rounded   w-full hidden lg:block">
					<div class=" flex items-center justify-center">

						<div class="flex justify-between lg:justify-start w-full md:w-auto">



						</div>
						<div class=" absolute md:static w-full md:block md:w-auto left-0 right-0  z-20"
							:class="mobileMinueClass" style="top:8rem ;" id="mobile-menu">
							<ul
								class=" flex flex-col mx-auto md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center">


								<li class="w-full md:w-auto text-center" v-for="(item, i) in menu">
									<div v-if="item.only_sidebar == false">
										<button @click="showMenu(item.id)"
											class="peer py-2 pr-4 pl-3 font-bold text-xl text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
											{{
													$t(item.name)
											}}</button>

									</div>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
			<div class=" w-36 ">
				<div class="flex  py-2.5 justify-end items-center">
					<button @click="switchLanguage()"
						class="bg-white text-sm border px-3  md:mx-3 py-1 md:py-1 rounded  shadow-md hover:shadow-sm duration-700 h-8 ">
						{{ lang == 'ar' ? 'English' : 'العربية' }}
					</button>
					<select name="curr" id="curr"
						class="bg-white text-sm border px-2 m-1 md:m-0 py-1 md:py-1 rounded  shadow-md hover:shadow-sm duration-700 h-8 ">
						<option value="USD">USD</option>
						<option value="aed">AED</option>
					</select>
				</div>
			</div>

		</div>

		<bread-crumb v-if="url.path !== '/'" />

		<div v-show="is_menu" class="top-0 z-40 absolute w-full h-screen  menu bg-black bg-opacity-25 hidden md:flex ">
			<div class=" flex" id="menu">
				<div class="w-80 h-screen border  bg-white">
					<div class="w-full  py-10 flex items-center mx-auto">
						<svg xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-gray-400 mx-5 hover:text-gray-500 cursor-pointer " @click="closeMenu"
							viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd" />
						</svg>
						<nuxt-link to="/" class="flex items-center justify-center">
							<img src="/assets/images/logo.svg" alt="logo" class="h-6 ">
						</nuxt-link>
					</div>
					<ul class=" space-y-6 md:flex-row mx-20 md:mt-0 md:text-sm md:font-medium items-center">
						<li class="w-full md:w-auto" v-for="(item, i) in menu" @mouseenter="setSubmenu(i)">
							<nuxt-link :to="'/' + item.name" :class="menu_path_by_id.menu == i ? 'tour-blue' : ''"
								class="block font-semibold text-2xl py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
								{{ $t(item.name) }}</nuxt-link>
						</li>
					</ul>
				</div>
				<div v-if="submenu.length" class="w-64  md:w-64 h-screen border bg-white  ">

					<div class="w-full  py-10 text-center text-xl font-bold ">
						<span>{{ $t(menu_title) }}</span>
					</div>
					<ul class=" space-y-4 md:flex-row mx-6 md:mt-0 md:text-sm md:font-medium items-center">
						<li class="w-full flex justify-between md:w-auto" v-for="(item, j) in submenu"
							@mouseenter="setSubSubMenu(j)">
							<nuxt-link :to="'/' + menu_title + '/' + item.name"
								:class="menu_path_by_id.sub_menu == j ? 'tour-blue' : ''"
								class="block   text-sm py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
								{{ $t(item.name) }}
							</nuxt-link>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 text-gray-600" fill="none"
								v-if="item.items.length" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
							</svg>
						</li>
					</ul>
				</div>
				<div v-if="subsubmenu.length" class="w-64  md:w-64 h-screen border bg-white  ">

					<div class="w-full  py-10 text-center text-xl font-bold ">
						<span>{{ $t(submenu_title) }}</span>
					</div>
					<ul class=" space-y-4 md:flex-row mx-6 md:mt-0 md:text-sm md:font-medium items-center">
						<li class="w-full md:w-auto" v-for="(item, i) in subsubmenu">
							<nuxt-link :to="'/' + menu_title + '/' + submenu_title + '/' + item"
								class="block   text-sm py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
								{{ $t(item) }}</nuxt-link>
						</li>
					</ul>
				</div>
			</div>
		</div>


		<!-- Mobile Side bar -->
		<div v-show="mobile_menu" id="mobilemenu"
			class="top-0 z-40 absolute w-full h-screen menu flex bg-black bg-opacity-25 md:hidden">
			<div class="w-80 h-screen border  bg-white">

				<div class="w-full  py-10 flex items-center mx-auto">
					<svg xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-gray-400 mx-5 hover:text-gray-500 cursor-pointer " @click="closeMenu"
						viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd" />
					</svg>

					<nuxt-link to="/" class="flex items-center justify-center">
						<img src="/assets/images/logo.svg" alt="logo" class="h-6 ">
					</nuxt-link>
				</div>
				<ul class=" space-y-6 md:flex-row mx-20 md:mt-0 md:text-sm md:font-medium items-center">


					<li class="w-full md:w-auto" v-for="(item, i) in menu" @click="setSubmenu(i)">

						<button :class="menu_path_by_id.menu == i ? 'tour-blue' : ''"
							class="block font-semibold text-xl py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
							{{ $t(item.name) }}</button>

					</li>
				</ul>
			</div>

			<div v-if="submenu.length" class="w-80  md:w-64 h-screen border bg-white z-20   absolute md:static">
				<div class="flex w-full justify-between mt-4">
					<svg xmlns="http://www.w3.org/2000/svg"
						class="h-6  text-gray-400 mx-2 hover:text-gray-500 cursor-pointer" @click="closeSubmenue"
						fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-gray-400 mx-5 hover:text-gray-500 cursor-pointer " @click="closeMenu"
						viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd" />
					</svg>
				</div>
				<div class="w-full  py-10 text-center text-xl font-bold ">
					<span>{{ $t(menu_title) }}</span>
				</div>
				<ul class=" space-y-4 md:flex-row mx-6 md:mt-0 md:text-sm md:font-medium items-center">


					<li class="w-full flex justify-between md:w-auto" v-for="(item, j) in submenu"
						@click="setSubSubMenu(j)">

						<button :class="menu_path_by_id.sub_menu == j ? 'tour-blue' : ''"
							class="block   text-sm py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
							{{ $t(item.name) }}

						</button>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 text-gray-600" fill="none"
							v-if="item.items.length" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
						</svg>

					</li>
				</ul>
			</div>

			<div v-if="subsubmenu.length" class="w-80  md:w-64 h-screen border bg-white z-30   absolute md:static  ">
				<div class="flex w-full justify-between mt-4">
					<svg xmlns="http://www.w3.org/2000/svg"
						class="h-6  text-gray-400 mx-2 hover:text-gray-500 cursor-pointer" @click="subsubmenu = []"
						fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-gray-400 mx-5 hover:text-gray-500 cursor-pointer " @click="closeMenu"
						viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd" />
					</svg>
				</div>
				<div class="w-full  py-10 text-center text-xl font-bold ">
					<span>{{ $t(submenu_title) }}</span>
				</div>
				<ul class=" space-y-4 md:flex-row mx-6 md:mt-0 md:text-sm md:font-medium items-center">


					<li class="w-full md:w-auto" v-for="(item, i) in subsubmenu">

						<button
							class="block   text-sm py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
							{{ $t(item) }}</button>

					</li>
				</ul>
			</div>
		</div>

	</div>


</template>
<script setup>
let url = ref(useRoute())
let lang = ref('');
onMounted(() => {
	lang.value = window.localStorage.getItem('lang');

})
const switchLanguage = () => {

	// if (process.server) {
	if (window.localStorage.getItem('lang') == 'en') {
		window.localStorage.setItem('lang', 'ar')
		lang.value = 'ar'
		window.location.reload();
	}
	// }
	else {
		localStorage.setItem('lang', 'en')
		lang.value = 'en'
		window.location.reload()
	}
}
// ********************************************
onMounted(() => {
	let specifiedElement = document.getElementById("menu");
	let specifiedElement3 = document.getElementById("mobilemenu");
	let specifiedElement2 = document.getElementById("navbar");
	document.addEventListener("click", (event) => {
		const isClickInside = specifiedElement.contains(event.target);
		const isClickInside2 = specifiedElement2.contains(event.target);
		const isClickInside3 = specifiedElement3.contains(event.target);

		if (!isClickInside && !isClickInside2 && !isClickInside3) {
			console.log('test2');
			closeMenu()
			// isOptionsShow.value = false;
		}
	});
});

let menu = ref([
	{
		id: 0,
		name: 'destinations',
		only_sidebar: false,
		items: [{ id: 0, name: 'turkiye', items: ['trabzon', 'istanbul'] },
		{ id: 1, name: 'uae', items: ['abo_dhabi', 'dubai'] },
		{ id: 1, name: 'iran', items: [] }]
	},
	{
		id: 1,
		name: 'packages',
		only_sidebar: false,
		items: [{ id: 0, name: '', items: [] }]
	},
	{
		id: 2,
		name: 'tours',
		only_sidebar: false,
		items: [
			{ id: 0, name: 'turkiye', items: ['trabzon', 'istanbul'] }
		]
	},
	{
		id: 3,
		name: 'activities',
		only_sidebar: false, items: [{ id: 0, name: 'turkiye', items: ['trabzon', 'istanbul'] }]
	},
	{
		id: 4,
		name: 'transfer',
		only_sidebar: false, items: [{ id: 0, name: 'turkiye', items: ['trabzon', 'istanbul'] }]
	},
	{
		id: 5,
		name: 'test',
		only_sidebar: true,
		items: []
	}])
let submenu = ref([])
let subsubmenu = ref([])
let menu_title = ref('');
let submenu_title = ref('');
let menu_path_by_id = ref({
	menu: -1,
	sub_menu: -1,
})
const setSubSubMenu = (i) => {
	menu_path_by_id.value.sub_menu = i
	subsubmenu.value = menu.value[menu_path_by_id.value.menu].items[menu_path_by_id.value.sub_menu]['items']
	submenu_title.value = menu.value[menu_path_by_id.value.menu].items[menu_path_by_id.value.sub_menu]['name']
	console.log(subsubmenu.value);
}
const closeSubmenue = () => {
	menu_path_by_id.value.sub_menu = -1
	subsubmenu.value = []
	submenu.value = []
}

const setSubmenu = (i) => {
	menu_path_by_id.value.menu = i
	subsubmenu.value = [];
	submenu.value = menu.value[i]['items']
	menu_title.value = menu.value[i]['name']
}
let is_menu = ref(false)
let mobile_menu = ref(false)
const showMenu = (i) => {
	menu_path_by_id.value.menu = i
	is_menu.value = true
	mobile_menu.value = true
	if (i != -1)
		setSubmenu(i)
}
const closeMenu = () => {

	menu_path_by_id.value.menu = -1;
	menu_path_by_id.value.sub_menu = -1;

	submenu.value = [];
	subsubmenu.value = [];
	is_menu.value = false
	mobile_menu.value = false
}
const test = () => {
	console.log('test');
}
</script>

<style type="text/css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap');

.st0 {
	fill-rule: evenodd;
	clip-rule: evenodd;
	fill: #00AEEF !important;
}

.st1 {
	fill: #283a97 !important;
}

.st2 {
	fill: #FF8200;
}

.router-link-active {
	color: #00AEEF
}
</style> 