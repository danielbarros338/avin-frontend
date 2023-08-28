<template>
  <v-carousel
    v-if="items.length > 0"
    cycle
    height="120"
    hide-delimiter-background
    hide-delimiters
    :show-arrows="false"
  >
    <v-carousel-item
      v-for="(items, index) of items"
      :key="`index-${index}`"
      cover
    >
      <HomeCarouselSheetComponent :item="items" />
    </v-carousel-item>
  </v-carousel>

  <div v-else class="d-flex justify-center align-center" style="height: 100px">
    <v-progress-circular indeterminate color="white" size="48" />
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
