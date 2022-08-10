<template>
    <div class=" container">
        <div class="w-full text-center">
            <h1 class="tour-title-1">Ayder Heights Tour</h1>
            <div class="my-4"><span class="tour-orange text-xl">START FROM :
                    50 $</span></div>
            {{ phone }}
        </div>
        <div class="flex w-full">
            <div class=" w-1/3 ">
                <div class="shadow-lg p-4">
                    <h3 class="tour-title-3">Reserve Your Trip Immediately</h3>

                    <form>
                        <div class="mb-6">
                            <label for="name" class="tour-label ">Your
                                Name</label>
                            <input type="name" id="name"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Your name is required" required>
                        </div>
                        <div class="mb-6">
                            <label for="name" class="tour-label  ">Your
                                Phone</label>
                            <vue-tel-input
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                                v-model="phone"></vue-tel-input>
                        </div>
                        <div class="mb-6">
                            <label for="name" class="tour-label  ">Your
                                Name</label>
                            <div>
                                <div class="peer border p-2 w-full ">
                                    {{ adults + ' Adult, ' + children + ' Child' }}
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
                    <div class="my-2"><span class="tour-orange text-xl">START FROM :
                            50 $</span>
                    </div>
                    <h3 class="text-xl font-bold">ANTALYA DIVING TOUR</h3>
                    <p class="my-2">Water Sports Tourism Is Prospering In The City Of Antalya Due To Its Distinctive
                        Views Of Several
                        Se...</p>
                    <button type="submit"
                        class="text-white w-full rounded bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium   text-sm px-5 py-2.5 text-center">LET’S
                        SET OFF TOGETHER
                    </button>

                </div>
            </div>
            <div class="px-4 w-2/3">
                <div class="border-b border-black pb-3">
                    <h2 class="tour-title-2 mb-6">Details of the trip</h2>
                    <p class="text-gray-700">We have breakfast then we go to Ayder Heights, where you can enjoy the
                        adventure of jumping rope
                        between the banks of the river and rowing, in addition to mineral baths (sulfur water), and
                        then
                        we
                        go to the waterfalls and enjoy free time to wander until the time to return to the hotel.

                    </p>
                </div>
                <div class="mt-16 ">
                    <h2 class="tour-title-2 mb-6">Pictures and videos</h2>
                    <client-only>
                        <tour-slider />
                    </client-only>
                </div>
                <div class="mt-16 border-b pb-3 border-black">
                    <h2 class="tour-title-2 mb-6">Details of the trip</h2>
                    <ul class="w-full">
                        <li class="flex w-full py-2">
                            <div class="w-6"><img src="/assets/images/details.svg" class="" alt=""></div>
                            <p class="mx-2 w-full">Breakfast and heading (with a group) to Ayder plateau
                            </p>
                        </li>

                        <li class="flex w-full py-2">
                            <div class="w-6"><img src="/assets/images/details.svg" class="" alt=""></div>
                            <p class="mx-2 w-full">Enjoy the adventure of rafting and jumping between the two banks
                                of
                                the
                                river
                            </p>
                        </li>
                        <li class="flex w-full py-2">
                            <div class="w-6"><img src="/assets/images/details.svg" class="" alt=""></div>
                            <p class="mx-2 w-full">And then we go to the waterfalls and sulfur baths
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="mt-16 border-b pb-3 border-black">
                    <h2 class="tour-title-2 mb-6">What are you expecting</h2>
                    <h3 class="tour-title-3">The trip Includes</h3>
                    <ul class="w-full">
                        <li class="flex w-full py-2">
                            <div class="w-6">
                                <img src="/assets/images/tour-o.svg" class="" alt="">
                            </div>
                            <p class="mx-2 w-full">Transportation
                            </p>
                        </li>

                        <li class="flex w-full py-2">
                            <div class="w-6"><img src="/assets/images/tour-o.svg" class="" alt=""></div>
                            <p class="mx-2 w-full">Tourist guide
                            </p>
                        </li>
                    </ul>

                    <h3 class="tour-title-3 capitalize ">The trip does not include</h3>
                    <ul class="w-full">
                        <li class="flex w-full py-2">
                            <div class="w-6"><img src="/assets/images/tour-o.svg" class="" alt=""></div>
                            <p class="mx-2 w-full">Shopping and purchases
                            </p>
                        </li>

                        <li class="flex w-full py-2">
                            <div class="w-6"><img src="/assets/images/tour-o.svg" class="" alt=""></div>
                            <p class="mx-2 w-full">Enjoy the adventure of rafting and jumping between the two banks
                                of
                                the
                                river
                            </p>
                        </li>
                        <li class="flex w-full py-2">
                            <div class="w-6"><img src="/assets/images/tour-o.svg" class="" alt=""></div>
                            <p class="mx-2 w-full">And then we go to the waterfalls and sulfur baths
                            </p>
                        </li>
                    </ul>
                    <h3 class="tour-title-3 capitalize ">Terms and Policy</h3>
                    <ul class="w-full">
                        <li class="flex w-full py-2">
                            <div class="w-6"><img src="/assets/images/tour-o.svg" class="" alt=""></div>
                            <p class="mx-2 w-full">The tour starts at 09:30 am
                            </p>
                        </li>

                        <li class="flex w-full py-2">
                            <div class="w-6"><img src="/assets/images/tour-o.svg" class="" alt=""></div>
                            <p class="mx-2 w-full">The tour ends at 06:00
                            </p>
                        </li>
                        <li class="flex w-full py-2">
                            <div class="w-6"><img src="/assets/images/tour-o.svg" class="" alt=""></div>
                            <p class="mx-2 w-full">The tour is daily with a tourist group
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