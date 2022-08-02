<template>

  <NavigationBar />
  <div class="bg-white min-h-screen" :dir="lang == 'en' ? 'ltr' : 'rtl'">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <Footer />
</template>
<script setup>

let lang = ref('en')
onMounted(() => {
  lang.value = localStorage.getItem('lang')
})
</script>
<style>
body {
  background-color: rgb(243 244 246);
  ;
}
</style>