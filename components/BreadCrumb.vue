<template>
    <div class="w-full container py-2  bg-indigo">

        <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                    <nuxt-link to="/"
                        class="inline-flex items-center text-sm font-medium text-white hover:text-gray-900 ">
                        <svg class="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                            </path>
                        </svg>
                        {{ $t('home') }}
                    </nuxt-link>
                </li>
                <li v-for="(p, i) in url.path.split('/')">
                    <div class="flex items-center" v-if="p !== ''">
                        <svg v-if="langu == 'en'" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                        <nuxt-link :to="i == 1 ? '/' + p : '/' + url.path.split('/')[1] + '/' + url.path.split('/')[2]"
                            class="ml-1 text-sm font-medium text-white hover:text-gray-900 md:ml-2 ">
                            {{ $t(p)
                            }}</nuxt-link>
                    </div>
                </li>
            </ol>
        </nav>
    </div>
</template>
<script setup>
let url = ref(useRoute())
let path = ref(useRoute().path.split('/'))
let langu = ref('')
onMounted(() => {
    langu.value = localStorage.getItem('lang')
})


</script>