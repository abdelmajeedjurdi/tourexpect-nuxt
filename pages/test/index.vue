<template>
    <div class="pt-32">
        <div class="mx-auto ml-56 mb-4">
            <img src="../../assets/images/test2.jpg" alt="">
        </div>
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
                    <div class="font-bold mb-4 text-gray-800">Select a country or a city to explore</div>
                    <div>
                        <ul>
                            <li>
                                <div class="grid grid-cols-4 mb-6">
                                    <b class="col-span-1"><a href="#">Turkey</a></b>
                                    <div class="col-span-3 font-bold text-gray-600"><a href="#" v-for="j in 7"
                                            class="mx-4">{{ 'Town ' + j
                                            }}</a></div>
                                </div>
                                <div class="grid grid-cols-4">
                                    <b class="col-span-1"><a href="#">Turkey</a></b>
                                    <div class="col-span-3 font-bold text-gray-600"><a href="#" v-for="j in 6"
                                            class="mx-4">{{ 'Town ' + j
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
</template>

<script setup>

</script>