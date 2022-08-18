<template>
	<div class="bg-white  w-full fixed top-0 z-30 ">
		<!-- <div class=" flex justify-between container py-2 w-full md:py-4">
			<div class="">
				<nuxt-link to="/" class="flex items-center">
					<img src="../assets/images/logo.svg" alt="logo" class="h-6 ">
				</nuxt-link>
			</div>
			<div>
				<div class="flex">
					<button @click="switchLanguage()"
						class="bg-white text-sm border px-5  md:mx-3 py-1 md:py-1 rounded  shadow-md hover:shadow-sm duration-700 ">
						{{ lang == 'ar' ? 'English' : 'العربية' }}
					</button>
					<select name="curr" id="curr"
						class="bg-white text-sm border px-2 m-1 md:m-0 py-1 md:py-1 rounded  shadow-md hover:shadow-sm duration-700 ">
						<option value="USD">USD</option>
						<option value="aed">AED</option>
					</select>
				</div>
			</div>
		</div>
		<nav class=" border-gray-200 sm:px-4 py-2.5 md:py-4 rounded  container w-full">
			<div class=" flex items-center">

				<div class="flex justify-between lg:justify-start w-full md:w-auto">

					<button data-collapse-toggle="mobile-menu" type="button" @click="showMobileMinue()"
						class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden "
						aria-controls="mobile-menu" aria-expanded="false">
						<span class="sr-only">Open main menu</span>
						<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"></path>
						</svg>
						<svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"></path>
						</svg>
					</button>

				</div>
				<div class=" absolute md:static w-full md:block md:w-auto left-0 right-0  bg-white z-20"
					:class="mobileMinueClass" style="top:8rem ;" id="mobile-menu">
					<ul
						class="flex flex-col mx-auto md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center">
						<li class="w-full md:w-auto text-center" :class="lang == 'ar' ? 'md:ml-8' : ''">
							<nuxt-link to="/"
								class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-700 md:p-0"
								aria-current="page">{{ $t('home') }}</nuxt-link>
						</li>

						<li class="w-full md:w-auto text-center">
							<div>
								<nuxt-link to="/destinations"
									class="peer py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
									{{
											$t('destinations')
									}}</nuxt-link>
 
		<div class="hidden absolute peer-hover:flex hover:flex
         
        							 flex-col bg-white drop-shadow-lg">

			<div class="py-4 rounded-md   mx-auto shadow-lg" style="width:40rem ;">
				<div class="flex  ">
					<div class="  rounded-md w-1/2">
						<ul>
							<li class=" px-4 border-b py-4 hover:bg-orange-500 hover:text-white cursor-pointer"
								v-for="i in 1"><b>
									{{ $t('turkiye') }} </b> 
							</li>
							<li class=" px-4 border-b py-4 hover:bg-orange-500 hover:text-white cursor-pointer"
								v-for="i in 1"><b>
									{{ $t('uae') }} </b> 
							</li>
						</ul>
					</div>



					<div class=" w-full mx-4">
						<div class="font-bold mb-4 text-gray-800">{{ $t('select_destination') }}
						</div>
						<div>
							<ul>
								<li>
									<div class="grid grid-cols-4 mb-6">
										<b class="col-span-1">
											<nuxt-link to="/destinations/trabzon" class="px-5 py-3 hover:bg-gray-200">
												{{ $t('trabzon') }}</nuxt-link>
										</b> 
									</div> 

								</li>
								<li></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</li>
	<li class="w-full md:w-auto text-center">
		<nuxt-link to="/packages"
			class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
			{{ $t('packages') }}</nuxt-link>
	</li>
	<li class="w-full md:w-auto text-center">
		<div>
			<nuxt-link to="/tours"
				class="peer py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
				{{
						$t('tours')
				}}</nuxt-link>
 
			<div class="hidden absolute peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
				<nuxt-link to="/tours/trabzon" class="px-5 py-3 hover:bg-gray-200">
					{{ $t('trabzon') }}</nuxt-link>
				<nuxt-link to="/tours/istanbul" class="px-5 py-3 hover:bg-gray-200">
					{{ $t('istanbul') }}</nuxt-link>
			</div>
		</div>
	</li>
	<li class="w-full md:w-auto text-center">
		<nuxt-link to="/activities"
			class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
			{{ $t('activities') }}</nuxt-link>
	</li>
	<li class="w-full md:w-auto text-center">
		<div>
			<button
				class="peer py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">{{
						$t('transfer')
				}}</button>
 
			<div class="hidden absolute peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
				<nuxt-link to="/transfer" class="px-5 py-3 hover:bg-gray-200">
					{{ $t('airport_transfer') }}</nuxt-link>
				<nuxt-link to="/transfer" class="px-5 py-3 hover:bg-gray-200">
					{{ $t('private_car') }}</nuxt-link>
			</div>
		</div>
	</li>

	<li class="w-full md:w-auto text-center">
		<nuxt-link to="/test"
			class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
			{{ $t('test') }}</nuxt-link>
	</li>
	</ul>
	</div>
	</div>
	</nav> -->

		<div class="flex container justify-between py-3">

			<div class="  w-1/5 py-2.5 flex items-center ">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 mx-3 text-gray-700 hover:text-black cursor-pointer"
					viewBox="0 0 20 20" fill="currentColor" @click="showMenu(-1)">
					<path fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd" />
				</svg>
				<nuxt-link to="/" class="flex items-center">
					<img src="../assets/images/logo.svg" alt="logo" class="h-6 ">
				</nuxt-link>
			</div>
			<div class=" w-3/5">
				<nav class=" border-gray-200 sm:px-4 py-2.5 md:py-4 rounded   w-full">
					<div class=" flex items-center justify-center">

						<div class="flex justify-between lg:justify-start w-full md:w-auto">



						</div>
						<div class=" absolute md:static w-full md:block md:w-auto left-0 right-0  z-20"
							:class="mobileMinueClass" style="top:8rem ;" id="mobile-menu">
							<ul
								class=" flex flex-col mx-auto md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center">


								<li class="w-full md:w-auto text-center" v-for="(item, i) in menu">
									<div>
										<button @click="showMenu(item.id)"
											class="peer py-2 pr-4 pl-3 font-bold text-lg text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
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
			<div class=" w-1/5  ">
				<div class="flex  py-2.5 justify-end">
					<button @click="switchLanguage()"
						class="bg-white text-sm border px-5  md:mx-3 py-1 md:py-1 rounded  shadow-md hover:shadow-sm duration-700 ">
						{{ lang == 'ar' ? 'English' : 'العربية' }}
					</button>
					<select name="curr" id="curr"
						class="bg-white text-sm border px-2 m-1 md:m-0 py-1 md:py-1 rounded  shadow-md hover:shadow-sm duration-700 ">
						<option value="USD">USD</option>
						<option value="aed">AED</option>
					</select>
				</div>
			</div>

		</div>

		<bread-crumb />

		<div v-if="is_menu" class="top-0 z-40 absolute w-full h-screen  flex bg-black bg-opacity-25">
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
							class="block font-bold text-xl py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
							{{ $t(item.name) }}</nuxt-link>

					</li>
				</ul>
			</div>

			<div v-if="submenu.length" class="w-60 h-screen border bg-white  ">
				<div class="w-full  py-10 text-center text-xl font-bold ">
					<span>{{ $t(menu_title) }}</span>
				</div>
				<ul class=" space-y-4 md:flex-row mx-20 md:mt-0 md:text-sm md:font-medium items-center">


					<li class="w-full md:w-auto" v-for="(item, i) in submenu" @mouseenter="setSubSubMenu(i)">

						<nuxt-link :to="'/' + menu_title + '/' + item.name"
							:class="menu_path_by_id.sub_menu == i ? 'tour-blue' : ''"
							class="block   text-sm py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
							{{ $t(item.name) }}</nuxt-link>

					</li>
				</ul>
			</div>

			<div v-if="subsubmenu.length" class="w-60 h-screen border bg-white  ">
				<div class="w-full  py-10 text-center text-xl font-bold ">
					<span>{{ $t(submenu_title) }}</span>
				</div>
				<ul class=" space-y-4 md:flex-row mx-20 md:mt-0 md:text-sm md:font-medium items-center">


					<li class="w-full md:w-auto" v-for="(item, i) in subsubmenu">

						<nuxt-link :to="'/' + menu_title + '/' + submenu_title + '/' + item"
							class="block   text-sm py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
							{{ $t(item) }}</nuxt-link>

					</li>
				</ul>
			</div>
		</div>

	</div>


</template>
<script setup>
let isServicesShow = ref(false);
let isMobileMenueShow = ref(false);
let mobileMinueClass = ref('hidden')

const showMobileMinue = () => {
	if (mobileMinueClass.value == 'hidden') { mobileMinueClass.value = ''; }
	else {
		mobileMinueClass.value = 'hidden'

	}
}
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

let menu = ref([
	{
		id: 0,
		name: 'destinations',
		items: [{ id: 0, name: 'turkiye', items: ['trabzon', 'istanbul'] },
		{ id: 1, name: 'uae', items: ['abo_dhabi', 'dubai'] }]
	},
	{
		id: 1,
		name: 'packages',
		items: [{ id: 0, name: '', items: [] }]
	},
	{
		id: 2,
		name: 'tours',
		items: [
			{ id: 0, name: 'turkiye', items: ['trabzon', 'istanbul'] }
		]
	},
	{
		id: 3,
		name: 'activities', items: [{ id: 0, name: 'turkiye', items: ['trabzon', 'istanbul'] }]
	},
	{
		id: 4,
		name: 'transfer', items: [{ id: 0, name: 'turkiye', items: ['trabzon', 'istanbul'] }]
	},
	{
		id: 5,
		name: 'test',
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
const setSubmenu = (i) => {
	menu_path_by_id.value.menu = i
	subsubmenu.value = [];
	submenu.value = menu.value[i]['items']
	menu_title.value = menu.value[i]['name']
}
let is_menu = ref(false)
const showMenu = (i) => {
	menu_path_by_id.menu = i
	is_menu.value = true
	if (i != -1)
		setSubmenu(i)
}
const closeMenu = () => {
	submenu.value = [];
	is_menu.value = false
}
</script>

<style type="text/css" scoped>
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