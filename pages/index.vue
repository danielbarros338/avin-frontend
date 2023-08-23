<template>
  <h1>Principal</h1>
</template>

<script setup>
import { useStocksStore } from "@/store/index.js";

const $stocksStore = useStocksStore();

onMounted(async () => await $stocksStore.getAllTickers())
</script>
