<template>
    <div class="pt-32 container">
        <div class="w-full text-center">
            <h1 class="tour-title">Ayder Heights Tour</h1>
            <div><span>START FROM :
                    50 $</span></div>
            {{ phone }}
        </div>
        <div>
            <div>
                <h3>Reserve Your Trip Immediately</h3>
                <vue-tel-input v-model="phone"></vue-tel-input>
                <form>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900  ">Your
                            Name</label>
                        <input type="name" id="name"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5              "
                            placeholder="Your name is required" required>
                    </div>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900  ">Your
                            Phone</label>
                        <div class="flex border border-gray-300  ">
                            <span class="items-center p-2.5 bg-gray-200">+964</span>
                            <input type="name" id="name"
                                class="shadow-sm bg-gray-50  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5              "
                                placeholder="Your phone is required" required>
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900  ">Your
                            Name</label>
                        <input type="name" id="name"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5              "
                            placeholder="Your name is required" required>
                    </div>
                    <button type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium   text-sm px-5 py-2.5 text-center">Register
                        new account</button>
                </form>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script setup>
let phone = ref(0);
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