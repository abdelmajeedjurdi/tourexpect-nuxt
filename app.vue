<template>
  <div :dir="locale == 'en' ? 'ltr' : 'rtl'">
    <NavigationBar />
    <div id="parent" class="mt-24">
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
@import "~/assets/css/tourexpect.css";
body {
  font-family: "Poppins", sans-serif;
}
#parent {
  width: 100% !important;
}
</style>
