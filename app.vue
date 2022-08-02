<template>
  <div :dir="lang == 'en' ? 'ltr' : 'rtl'">
    <NavigationBar />
    <div class="bg-white min-h-screen">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <Footer />
  </div>
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