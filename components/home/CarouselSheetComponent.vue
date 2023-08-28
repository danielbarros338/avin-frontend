<template>
  <v-sheet style="height: 100%" color="var(--home-card-bg)" class="rounded pa-2">
    <div class="d-flex flex-wrap fill-height justify-center align-center">
      <div style="width: 100%">{{ item.name }}</div>
      <div style="width: 100%">Body</div>
      <div style="width: 100%">Código: {{ item.stock.split("^").join("") }}</div>
    </div>
  </v-sheet>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
