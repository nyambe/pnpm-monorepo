<script setup>
const { locale } = useI18n();
const locales = ["es", "en", "eu", "ca", "fr"];
</script>

<template>
  <div class="mt-10 relative w-full flex justify-end">
    {{ locale }}
    <div class="flex gap-3 absolute top-0">
      <UChip v-for="item in locales" :key="item" :show="item == locale">
        <UButton @click="locale = item" color="gray" class="text-xs uppercase">
          {{ item }}
        </UButton>
      </UChip>
    </div>
  </div>
</template>
