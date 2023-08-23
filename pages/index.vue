<template>
  <div class="pa-2">
    <v-row class="d-flex">
      <v-col col="3">
        
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useStocksStore } from "./../store/index.js";

const $stocksStore = useStocksStore();

onMounted(async () => {
  await $stocksStore.getAllTickers();
  await $stocksStore.setHomeIndicators();
})
</script>
