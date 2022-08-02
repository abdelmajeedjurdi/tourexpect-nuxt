<template>
	<div class=" border-b w-full">
		<div class="border-b flex justify-between container py-2 w-full ">
			<div class="">
				<router-link to="/" class="flex items-center">
					<img src="../assets/images/logo.svg" alt="logo" class="h-8">

				</router-link>
			</div>
			<div>
				<div class="flex">
					<button @click="switchLanguage()"
						class="bg-white text-sm border px-5  md:mx-3 py-1 md:py-1 rounded  shadow-md hover:shadow-sm duration-700 ">
						{{ lang == 'ar' ? 'English' : 'العربية' }}
					</button>
					<button @click="switchLanguage()"
						class="bg-white text-sm border px-5 m-1 md:m-0 py-1 md:py-1 rounded  shadow-md hover:shadow-sm duration-700 ">
						$
					</button>
				</div>
			</div>
		</div>
		<nav class="bg-white border-gray-200 sm:px-4 py-2.5 rounded  container w-full">
			<div class=" flex flex-wrap justify-between items-center">

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
						<li class="w-full md:w-auto text-center">
							<router-link to="/"
								class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
								aria-current="page">Home</router-link>
						</li>
						<li class="w-full md:w-auto text-center">
							<div class="relative inline-block text-left dropdown">
								<div>
									<button type="button"
										class="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
										id="menu-button" aria-expanded="true" aria-haspopup="true">
										Services
										<!-- Heroicon name: solid/chevron-down -->
										<svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
											<path fill-rule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
												clip-rule="evenodd" />
										</svg>
									</button>
								</div>

								<div class="z-30 origin-top-right absolute hidden dropdown-menu top-7  right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
									role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
									<div class="py-1 p-8" role="none">

										<a href="#" class="text-gray-700 border-b px-4 py-2 text-sm flex"
											role="menuitem" tabindex="-1" id="menu-item-0">
											<span class="mr-2">
												<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
													viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
													<path stroke-linecap="round" stroke-linejoin="round"
														d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
												</svg>
											</span><span class="font-bold"> Service 1</span></a>
										<a href="#" class="text-gray-700 border-b px-4 py-2 text-sm flex"
											role="menuitem" tabindex="-1" id="menu-item-0">
											<span class="mr-2">
												<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
													viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
													<path stroke-linecap="round" stroke-linejoin="round"
														d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
												</svg>
											</span><span> Service 2</span></a>
										<a href="#" class="text-gray-700 border-b px-4 py-2 text-sm flex"
											role="menuitem" tabindex="-1" id="menu-item-0">
											<span class="mr-2">
												<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
													viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
													<path stroke-linecap="round" stroke-linejoin="round"
														d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
												</svg>
											</span><span> Service 3</span></a>
										<a href="#" class="text-gray-700 border-b px-4 py-2 text-sm flex"
											role="menuitem" tabindex="-1" id="menu-item-0">
											<span class="mr-2">
												<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
													viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
													<path stroke-linecap="round" stroke-linejoin="round"
														d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
												</svg>
											</span><span> Service 4</span></a>
									</div>
								</div>
							</div>
						</li>
						<li class="w-full md:w-auto text-center">
							<router-link to="/about"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
								About</router-link>
						</li>
						<li class="w-full md:w-auto text-center">
							<router-link to="/contact"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
								Contact</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
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
</script>

<style type="text/css">
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
</style>