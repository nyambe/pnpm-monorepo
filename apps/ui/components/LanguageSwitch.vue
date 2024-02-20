<script setup>
const { locale } = useI18n();
const locales = ["es", "en", "eu", "ca", "fr"];
</script>

<template>
  <div class="pt-1">
    <form>
      <USelect v-model="locale" :options="locales" />
    </form>
  </div>
</template>
