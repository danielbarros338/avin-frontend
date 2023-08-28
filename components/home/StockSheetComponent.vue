<template>
  <div class="d-flex flex-wrap fill-height justify-center align-center">
    <div class="d-flex align-center" style="width: 100%">
      <img :src="item.logo" height="30" class="rounded-circle elevated-1 mr-2" :alt="`Logo da empresa ${item.name}`">
      <b>{{ item.stock.split("^").join("") }}</b>
    </div>
    <div style="width: 100%">
      <table style="width: 100%">
        <tr>
          <td>R$ {{ 
            item.close < 10 
              ? `0${item.close.toFixed(3).split(".").join(",")}`
              : item.close.toFixed(3).split(".").join(",")
            }}</td>
          <td class="text-right">
            <v-icon :color="changeColor">
              {{ item.change > 0 ? 'mdi-menu-up' : 'mdi-menu-down' }}
            </v-icon>
            {{ item.change.toFixed(2) }}%</td>
        </tr>
      </table>
    </div>
    <div style="width: 100%" class="text-grey">
      <b>{{ item.name }}</b>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

const changeColor = computed(() => props.item.change > 0 ? "success" : "red")
</script>
