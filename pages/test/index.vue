<template>
    <div class=" container">
        <div class="w-full text-center">
            <h1 class="tour-title-1">{{ $t('header') }}</h1>
            <div class="my-4"><span class="tour-orange text-xl">{{ $t('start_from') }}</span></div>

        </div>
        <div class="flex w-full">
            <div class=" w-1/3 ">
                <div class="shadow-lg p-4">
                    <h3 class="tour-title-3">{{ $t('reservation') }}</h3>

                    <form>
                        <div class="mb-6">
                            <label for="name" class="tour-label ">{{ $t("your_name") }}</label>
                            <input type="name" id="name"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                :placeholder="$t('required')" required>
                        </div>
                        <div class="mb-6">
                            <label for="phone" class="tour-label  ">{{ $t('your_phone') }}</label>
                            <vue-tel-input
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                                v-model="phone"></vue-tel-input>
                        </div>
                        <div class="mb-6">
                            <label for="guests" class="tour-label  ">{{ $t('guests') }}</label>
                            <div>
                                <div class="peer border p-2 w-full ">
                                    {{ adults + ' ' + $t('adults') + ', ' + children + ' ' + $t('child') + ' ' }}
                                </div>

                                <!-- the menu here -->
                                <div
                                    class="hidden p-3 absolute peer-hover:flex hover:flex w-80 flex-col bg-white drop-shadow-lg">
                                    <div class="flex justify-between">
                                        <div>Adults</div>
                                        <div class="flex">
                                            <button @click="adults--"
                                                class="bg-orange-500 w-6 h-6 rounded text-white">-</button>
                                            <span class="w-10 text-center">{{ adults }}</span>
                                            <button type="button" @click="adults++"
                                                class="bg-orange-500 w-6 h-6 rounded text-white">+</button>
                                        </div>
                                    </div>
                                    <div class="flex justify-between mt-3">
                                        <div>Children</div>
                                        <div class="flex">
                                            <button type="button" @click="children--"
                                                class="bg-orange-500 w-6 h-6 rounded text-white">-</button>
                                            <span class="w-10 text-center">{{ children }}</span>
                                            <button type="button" @click="children++"
                                                class="bg-orange-500 w-6 h-6 rounded text-white">+</button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <button type="submit"
                            class="text-white w-full rounded bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium   text-sm px-5 py-2.5 text-center">Reserve</button>
                    </form>
                </div>
                <div class="shadow-xl my-2 p-2 border">
                    <img src="https://assets.safaraq.com/images/450/trips/032f8485ac75dcbcc51b61cc437f9ba5x58_745i2P.jpg"
                        alt="">
                    <div class="my-2"><span class="tour-orange text-xl">{{ $t('start_from') }}</span>
                    </div>
                    <h3 class="text-xl font-bold">{{ $t('antalya') }}</h3>
                    <p class="my-2">{{ $t('antalya') }}</p>
                    <button type="submit"
                        class="text-white w-full rounded bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium   text-sm px-5 py-2.5 text-center">{{
                                $t('setoff')
                        }}
                    </button>

                </div>
            </div>
            <div class="px-4 w-2/3">
                <div class="border-b border-black pb-3">
                    <h2 class="tour-title-2 mb-6">{{ $t('details_of_trip') }}</h2>
                    <p class="text-gray-700">{{ $t('details') }}
                    </p>
                </div>
                <div class="mt-16 ">
                    <h2 class="tour-title-2 mb-6">{{ $t('pictures_and_videos') }}</h2>

                    <tour-slider />
                </div>
                <div class="mt-16 border-b pb-3 border-black">
                    <h2 class="tour-title-2 mb-6">{{ $t('details_of_trip') }}</h2>
                    <ul class="w-full">
                        <li class="flex w-full py-2">
                            <div class="w-6"><img src="/assets/images/details.svg" class="" alt=""></div>
                            <p class="mx-2 w-full">{{ $t('detail1') }}
                            </p>
                        </li>

                        <li class="flex w-full py-2">
                            <div class="w-6"><img src="/assets/images/details.svg" class="" alt=""></div>
                            <p class="mx-2 w-full">{{ $t('detail2') }}
                            </p>
                        </li>
                        <li class="flex w-full py-2">
                            <div class="w-6"><img src="/assets/images/details.svg" class="" alt=""></div>
                            <p class="mx-2 w-full">{{ $t('detail3') }}
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="mt-16 border-b pb-3 border-black">
                    <h2 class="tour-title-2 mb-6">{{ $t('what_expected') }}</h2>
                    <h3 class="tour-title-3">{{ $t('includes') }}</h3>
                    <ul class="w-full">
                        <li class="flex w-full py-2">
                            <div class="w-6">
                                <img src="/assets/images/tour-o.svg" class="" alt="">
                            </div>
                            <p class="mx-2 w-full">{{ $t("include1") }}
                            </p>
                        </li>

                        <li class="flex w-full py-2">
                            <div class="w-6"><img src="/assets/images/tour-o.svg" class="" alt=""></div>
                            <p class="mx-2 w-full">{{ $t('include2') }}
                            </p>
                        </li>
                    </ul>

                    <h3 class="tour-title-3 capitalize ">{{ $t('excludes') }}</h3>
                    <ul class="w-full">
                        <li class="flex w-full py-2">
                            <div class="w-6"><img src="/assets/images/tour-o.svg" class="" alt=""></div>
                            <p class="mx-2 w-full">{{ $t('exclude1') }}
                            </p>
                        </li>
                    </ul>
                    <h3 class="tour-title-3 capitalize ">{{ $t('terms_and_policy') }}</h3>
                    <ul class="w-full">
                        <li class="flex w-full py-2">
                            <div class="w-6"><img src="/assets/images/tour-o.svg" class="" alt=""></div>
                            <p class="mx-2 w-full">{{ $t('term1') }}
                            </p>
                        </li>

                        <li class="flex w-full py-2">
                            <div class="w-6"><img src="/assets/images/tour-o.svg" class="" alt=""></div>
                            <p class="mx-2 w-full">{{ $t('term2') }}
                            </p>
                        </li>
                        <li class="flex w-full py-2">
                            <div class="w-6"><img src="/assets/images/tour-o.svg" class="" alt=""></div>
                            <p class="mx-2 w-full">{{ $t('term3') }}
                            </p>
                        </li>
                    </ul>
                </div>


            </div>

        </div>
    </div>
</template>

<script setup>
let phone = ref(null);
let adults = ref(0)
let children = ref(0)
</script>
<style>
.card-link-a {
    fill: #fff;
}

.trip-decor-a {
    opacity: 0.1;
}

.trip-decor-b {
    fill: #ff8e3c;
}

.trip-decor-c {
    fill: #80177e;
}

.trip-decor-a {
    opacity: 0.1;
}

.trip-decor-b {
    fill: #ff8e3c;
}

.trip-decor-c {
    fill: #80177e;
}
</style>