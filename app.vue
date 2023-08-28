<template>
  <v-app>
    <NavbarComponent />
    <v-main class="px-0" style="background: var(--color-black-primary)">
      <v-container fluid>
        <NuxtPage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useStocksStore, useCryptoStore } from "./store/index.js";

const $stocksStore = useStocksStore();
const $cryptoStore = useCryptoStore();

onMounted(async () => {
  await $stocksStore.getAllTickers();
  await $stocksStore.setHomeIndicators();
  await $cryptoStore.getAllCoins();
  await $cryptoStore.setHomeIndicators();
});
</script>
