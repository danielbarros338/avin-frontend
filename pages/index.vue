<template>
  <SharedIndexCardComponent />
</template>

<script setup>
import { useStocksStore } from "./../store/index.js";

const $stocksStore = useStocksStore();

onMounted(async () => {
  await $stocksStore.getAllTickers();
  await $stocksStore.setHomeIndicators();
})
</script>
