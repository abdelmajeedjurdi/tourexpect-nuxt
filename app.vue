<template>
  <div :dir="locale == 'en' ? 'ltr' : 'rtl'">
    <NavigationBar />
    <div class="bg-white min-h-screen py-20" id="parent">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <Footer />
  </div>
</template>
<script lang="ts" setup>
const { locale } = useI18n();
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");
body {
  background-color: rgb(243 244 246);
  font-family: "Poppins", sans-serif;
}
</style>
