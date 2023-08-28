<template>
  <v-sheet
    style="height: 100%"
    color="var(--color-home-card-bg)"
    class="rounded pa-2 text-white"
  >
    <div class="d-flex flex-wrap fill-height justify-center align-center">
      <div style="width: 100%">
        <b>{{ item.name }}</b>
      </div>
      <div style="width: 100%">Body</div>
      <div style="width: 100%" class="text-grey">
        <b>Código: {{ item.stock.split("^").join("") }}</b>
      </div>
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
