<template>
  
</template>

<script setup>
import { useStocksStore } from "./../store/index.js";

useHead({
  title: "AVIN | Ações",
});

const $stockStore = useStocksStore();

const stockList = computed(() => $stockStore.stocksList);
const actionPageStock = computed(() => $stockStore.actionPageStock);

watch(stockList, async (newValue, oldValue) => {
  if (oldValue.length === 0) {
    const tenFirst = newValue.filter((stock, i) => i < 10 ? stock : null);

    for (const stock of tenFirst) {
      await $stockStore.stockResumen(stock);
    }
  }
});
</script>
