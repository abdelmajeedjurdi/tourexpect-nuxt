<template>
  <div :dir="lang == 'en' ? 'ltr' : 'rtl'">
    <NavigationBar />
    <div class="bg-white min-h-screen py-44" id="parent">
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

body {
  background-color: rgb(243 244 246);
  font-family: 'Poppins', sans-serif;

}
</style>