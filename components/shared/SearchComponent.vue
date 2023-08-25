<template>
  <v-btn v-if="!showSearch" id="search-container" @click="openSearch">
    <v-icon size="28" class="text-white">mdi-magnify</v-icon>
  </v-btn>
  <v-text-field
    v-else
    append-inner-icon="mdi-magnify"
    variant="solo"
    density="compact"
    hide-details="auto"
    color="#fff"
  />
</template>

<script setup>
const showSearch = ref(false);

function openSearch() {
  showSearch.value = !showSearch.value;
}
</script>
