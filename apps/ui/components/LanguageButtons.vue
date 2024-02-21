<script setup lang="ts">
const { locale } = useI18n();
const locales = ["es", "en", "eu", "ca", "fr"];
</script>

<template>
  <div class="mt-10 relative w-full flex justify-end">
    <div class="flex gap-3 absolute top-0">
      <UChip size="2xs" v-for="item in locales" :key="item" :show="item == locale">
        <UButton
          @click="locale = item"
          variant="outline"
          size="2xs"
          class="text-xs uppercase"
        >
          {{ item }}
        </UButton>
      </UChip>
    </div>
  </div>
</template>
