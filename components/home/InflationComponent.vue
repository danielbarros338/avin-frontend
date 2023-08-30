<template>
  <v-sheet
    style="height: 100%"
    color="var(--color-home-card-bg)"
    class="rounded pa-2 text-white"
  >
    <div class="d-flex flex-wrap justify-center align-center" style="width: 100%">
      <v-icon class="mr-1">mdi-chart-line</v-icon>
      <b>Inflação</b>
    </div>
    <div style="width: 100%">
      R$ {{ inflation?.value }}
    </div>
  </v-sheet>
</template>

<script setup>
defineProps({
  inflation: {
    type: Object,
    required: true
  }
});
</script>