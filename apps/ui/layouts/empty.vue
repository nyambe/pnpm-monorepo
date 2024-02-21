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

<template>
  <div class="p-5 max-w-5xl mx-auto">
    <slot />
  </div>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-in-out;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.child-view {
  /* position: absolute; */
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
