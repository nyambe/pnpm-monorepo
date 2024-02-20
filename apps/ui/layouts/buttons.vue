<template>
  <div class="max-w-7xl mx-auto relative">
    <LanguageButtons />
    <slot />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { lang: "es" },
  link: [{ rel: "canonical", href: "https://cms.janto.es/" }],
});

useSeoMeta({
  title: "Gestión CMS Janto",
  ogTitle: "Gestión CMS Janto",
  description: "Gestión y publicación de eventos en webs CMS Janto",
  ogDescription: "Gestión y publicación de eventos en webs CMS Janto",
  ogType: "website",
  ogSiteName: "Impronta",
  ogUrl: "https://cms.janto.es/",
  ogImage:
    "https://cdn.janto.es/pro/webImpronta23/img/20231018123300_1697625180.682Impronta.jpg",
  twitterCard: "summary_large_image",
  twitterDescription: "Gestión y publicación de eventos en webs CMS Janto",
  twitterTitle: "Gestión CMS Janto",
  twitterImage:
    "https://cdn.janto.es/pro/webImpronta23/img/20231018123300_1697625180.682Impronta.jpg",
});
</script>

<style scoped></style>
