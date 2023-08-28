<template>
  <div class="pa-2">
    <v-row class="d-flex">
      <v-col col="12" sm="4" md="3">
        <HomeCarouselComponent :items="homeIndex" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useStocksStore } from "./../store/index.js";

const $stockStore = useStocksStore();

const homeIndex = computed(() => $stockStore.$state.homeIndex);
</script>
