<template>
    <div>
        <!-- Hero Section -->
        <div class="md:px-28 pt-32">
            <div class="relative overflow-hidden md:px-12 py-12 w-full block md:flex items-center bg-no-repeat rounded-xl bg-cover"
                style="background-image:url('https://cdn-imgix-open.headout.com/flaps/non-city-specific/desktop/headout-default-banner-desktop.png?w=1440&h=600&auto=compress%2Cformat&crop=faces&fit=min') ;">
                <div class="">
                    <div class="relative z-10 pb-8   sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">



                        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div class=" ">
                                <h1 class="text-xl tracking-tight font-bold text-white md:text-4xl lg:text-3xl">
                                    {{ $t('hero-header') }}
                                </h1>
                                <p
                                    class="mt-3 text-base text-gray-100 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 md:text- lg:mx-0">
                                    {{ $t('hero-description') }}</p>
                                <div class="mt-5 sm:mt-8 sm:flex justify-center sm:justify-start">

                                    <div class=" " style="width: 90%;">

                                        <form>
                                            <div class="relative">
                                                <div class="flex absolute inset-y-0 items-center px-3 pointer-events-none"
                                                    :class="lang == 'ar' ? 'right-0' : 'left-0'">
                                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="none"
                                                        stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                                    </svg>
                                                </div>
                                                <input type="search" id="default-search" class="block p-4 px-10 w-full text-sm
                                                     text-gray-900 bg-gray-50 rounded-lg
                                                      border border-gray-300 focus:ring-blue-500
                                                      focus:border-blue-500"
                                                    :placeholder="$t('search_all_experiences_and_destinations')"
                                                    required>
                                                <button type="submit"
                                                    class="text-white absolute  bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                                                    :class="lang == 'ar' ? 'left-2.5' : 'right-2.5'">{{ $t('search')
                                                    }}</button>
                                            </div>
                                        </form>
                                        <!-- <form :class="lang == 'en' ? 'hidden' : ''">
                                            <label for="default-search"
                                                class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                                            <div class="relative">
                                                <div
                                                    class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="none"
                                                        stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                                    </svg>
                                                </div>
                                                <button type="submit"
                                                    class="text-white absolute left-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                                                     focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                                                <input type="search" id="default-search"
                                                    class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                    :placeholder="$t('search_all_experiences_and_destinations')"
                                                    required>

                                            </div>
                                        </form> -->

                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <!-- <div class=" lg:inset-y-0 lg:right-0 lg:w-1/2 items-center ">
                    <img class=" object-cover h-full sm:h-96 sm:mx-auto md:h-auto lg:w-full lg:h-full "
                        src="/images/right-side-image.jpg" alt="">
                </div> -->
            </div>
        </div>
        <!-- end hero section -->
    </div>
</template>
<script setup>
let lang = ref('en')
onMounted(() => { lang.value = localStorage.getItem('lang') })
</script>
