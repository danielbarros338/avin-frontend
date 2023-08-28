<template>
  <div class="pa-2">
    <v-row class="d-flex">
      <v-col col="12" sm="4" md="3">
        <HomeCarouselComponent :items="homeStock" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useStocksStore } from "./../store/index.js";

const $stockStore = useStocksStore();

const homeStock = computed(() => $stockStore.$state.homeStock);
</script>
