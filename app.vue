<template>
  <v-app>
    <NavbarComponent />
    <v-main class="px-0" style="background: #212121">
      <v-container fluid>
        <NuxtPage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useStocksStore } from "./store/index.js";

const $stocksStore = useStocksStore();

onMounted(async () => {
  await $stocksStore.getAllTickers();
  await $stocksStore.setHomeIndicators();
});
</script>
