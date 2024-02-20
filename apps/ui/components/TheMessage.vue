<template>
  <div class="py-10 font-bold text-3xl">
    <h1>TheMessage</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  msg: String,
});
</script>

<style scoped></style>
