<template>
  <div class="pa-2">
    <v-row class="d-flex flex-wrap">
      <v-col col="12" md="3">
        <HomeCarouselComponent :items="homeStock" type="stock" />
      </v-col>
      <v-col col="12" md="3">
        <HomeCarouselComponent :items="cryptoStock" type="crypto" />
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
