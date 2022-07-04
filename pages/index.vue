<template>
    <div>
        <section class="hero-banner ">
            <div class="">
                <div class="min-h-screen flex justify-center items-center"
                    style="background-image:url('/images/ha.jpeg') ;    background-size: cover;">

                    <div class="text-center relative">
                        <h1 class=" mb-10 duration-700 text-white text-6xl font-bold "
                            :class="light == true ? 'text-haval' : ''">
                            Design
                            Services</h1>

                        <router-link @mouseenter="light = true" @mouseleave="light = false" to="/pick-design"
                            class=" border duration-700 border-haval hover:bg-haval hover:text-white font-bold text-lg rounded-lg py-2 px-6 bg-slate-300">
                            Pick a
                            Design</router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
let light = ref(false)
function hello() {
    console.log('hello');
}
</script>