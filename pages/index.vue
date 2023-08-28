<template>
  <div class="pa-2">
    <v-row class="d-flex">
      <v-col col="12">
        <v-carousel
          v-if="homeIndex.length > 0"
          cycle
          height="100"
          hide-delimiter-background
          hide-delimiters
          :show-arrows="false"
        >
         <v-carousel-item v-for="(homeIndexItem, index) of homeIndex" :key="`index-${index}`" cover>
            <HomeCarouselSheetComponent :item="homeIndexItem" />
         </v-carousel-item>
        </v-carousel>
        <div v-else class="d-flex justify-center align-center" style="height: 100px">
          <v-progress-circular indeterminate color="white" size="48" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useStocksStore } from "./../store/index.js";

const $stockStore = useStocksStore();

const homeIndex = computed(() => $stockStore.$state.homeIndex);
</script>
