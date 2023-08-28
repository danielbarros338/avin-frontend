<template>
  <v-sheet style="height: 100%" class="rounded">
    <div class="d-flex fill-height justify-center align-center">
      {{ item.stock }}
      {{ item.name }}
    </div>
  </v-sheet>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>