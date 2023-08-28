<template>
  <div class="pa-2">
    <v-row class="d-flex">
      <v-col col="12" sm="4" md="3">
        <HomeCarouselComponent :items="homeStock" />
      </v-col>
      <v-col col="12" sm="4" md="3">
        <HomeCarouselComponent :items="cryptoStock" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useStocksStore, useCryptoStore } from "./../store/index.js";

const $stockStore = useStocksStore();
const $criptoStore = useCryptoStore();

const homeStock = computed(() => $stockStore.$state.homeStock);
const cryptoStock = computed(() => $criptoStore.$state.homeCoins);
</script>
