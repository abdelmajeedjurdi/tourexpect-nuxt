<script setup>
const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

const { locale } = useI18n();
const title = computed(() =>
  t(route.meta.title || "tourexpect", { title: t(route.meta.title ?? "TBD") })
);
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
    <Head>
      <Title>{{ title + " | " + t("tourexpect") }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
      <NavigationBar />
      <div id="parent" class="mt-24">
        <slot />
      </div>
      <Footer />
    </Body>
  </Html>
</template>
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
