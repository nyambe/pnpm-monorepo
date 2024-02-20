<template>
  <div class="py-10">
    <h1 class="font-bold text-3xl">{{ $t("bienvenido") }}</h1>

    <p class="font-thin text-xl" v-if="msg">{{ $t(msg) }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  msg: String,
});
</script>

<style scoped></style>
