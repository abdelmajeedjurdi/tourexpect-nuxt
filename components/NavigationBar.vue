<template>
	<div class="  w-full fixed top-0 z-50 bg-white">
		<div class=" flex justify-between container py-2 w-full md:py-4">
			<div class="">
				<router-link to="/" class="flex items-center">
					<img src="../assets/images/logo.svg" alt="logo" class="h-6 ">

				</router-link>
			</div>
			<div>
				<div class="flex">
					<button @click="switchLanguage()"
						class="bg-white text-sm border px-5  md:mx-3 py-1 md:py-1 rounded  shadow-md hover:shadow-sm duration-700 ">
						{{ lang == 'ar' ? 'English' : 'العربية' }}
					</button>
					<!-- <button @click="switchLanguage()"
						class="bg-white text-sm border px-5 m-1 md:m-0 py-1 md:py-1 rounded  shadow-md hover:shadow-sm duration-700 ">
						$
					</button> -->
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
							<router-link to="/"
								class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
								aria-current="page">{{ $t('home') }}</router-link>
						</li>

						<li class="w-full md:w-auto text-center">
							<!-- <router-link to="/transfer"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
								{{ $t('transfer') }}</router-link> -->
							<div>
								<button
									class="peer py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">{{
											$t('destinations')
									}}</button>

								<!-- the menu here -->
								<div class="hidden absolute peer-hover:flex hover:flex
         
        							 flex-col bg-white drop-shadow-lg">

									<div class="py-4 rounded-md   mx-auto shadow-lg" style="width:67rem ;">
										<div class="flex  ">
											<div class="  rounded-md w-2/5">
												<ul>
													<li class=" px-4 border-b py-2 hover:bg-orange-500 hover:text-white cursor-pointer"
														v-for="i in 6"><b>
															Destination{{ ' ' + i
															}} </b>
														<div class="mt-2 text-sm text-gray-400">
															<span class="mx-2">Baghdad</span>
															<span class="mx-2">Basrah</span>
														</div>
													</li>
												</ul>
											</div>



											<div class=" w-full mx-4">
												<div class="font-bold mb-4 text-gray-800">Select a country or a city to
													explore</div>
												<div>
													<ul>
														<li>
															<div class="grid grid-cols-4 mb-6">
																<b class="col-span-1"><a href="#">Turkey</a></b>
																<div class="col-span-3 font-bold text-gray-600"><a
																		href="#" v-for="j in 7" class="mx-4">{{ 'Town '
																				+ j
																		}}</a></div>
															</div>
															<div class="grid grid-cols-4">
																<b class="col-span-1"><a href="#">Turkey</a></b>
																<div class="col-span-3 font-bold text-gray-600"><a
																		href="#" v-for="j in 6" class="mx-4">{{ 'Town '
																				+ j
																		}}</a></div>
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
							<router-link to="/packages"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
								{{ $t('packages') }}</router-link>
						</li>
						<li class="w-full md:w-auto text-center">
							<router-link to="/tours"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
								{{ $t('tours') }}</router-link>
						</li>
						<li class="w-full md:w-auto text-center">
							<router-link to="/activities"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
								{{ $t('activities') }}</router-link>
						</li>
						<li class="w-full md:w-auto text-center">
							<!-- <router-link to="/transfer"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
								{{ $t('transfer') }}</router-link> -->
							<div>
								<button
									class="peer py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">{{
											$t('transfer')
									}}</button>

								<!-- the menu here -->
								<div class="hidden absolute peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg">
									<router-link to="/transfer" class="px-5 py-3 hover:bg-gray-200">
										{{ $t('airport_transfer') }}</router-link>
									<router-link to="/transfer" class="px-5 py-3 hover:bg-gray-200">
										{{ $t('private_car') }}</router-link>
								</div>
							</div>
						</li>

						<li class="w-full md:w-auto text-center">
							<router-link to="/test"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
								{{ $t('test') }}</router-link>
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