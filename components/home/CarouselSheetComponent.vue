<template>
  <v-sheet
    style="height: 100%"
    color="var(--color-home-card-bg)"
    class="rounded pa-2 text-white"
  >
    <div v-if="type === 'stock'" class="d-flex flex-wrap fill-height justify-center align-center">
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
              <v-icon :color="changeStockColor">
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

    <div v-if="type === 'crypto'" class="d-flex flex-wrap fill-height justify-center align-center">
      <div class="d-flex align-center" style="width: 100%">
        <img :src="item.coinImageUrl" height="30" class="rounded-circle elevated-1 mr-2" :alt="`Logo da crypto ${item.coinName}`">
        <b>{{ item.coin }}</b>
      </div>
      <div style="width: 100%">
        <table style="width: 100%">
          <tr>
            <td>R$ {{ 
              item.regularMarketPrice < 10 
                ? `0${item.regularMarketPrice.toFixed(3).split(".").join(",")}`
                : item.regularMarketPrice.toFixed(3).split(".").join(",")
              }}</td>
            <td class="text-right">
              <v-icon :color="changeCoinColor">
                {{ item.regularMarketChangePercent > 0 ? 'mdi-menu-up' : 'mdi-menu-down' }}
              </v-icon>
              {{ item.regularMarketChangePercent.toFixed(2) }}%
            </td>
          </tr>
        </table>
      </div>
      <div style="width: 100%" class="text-grey">
        <b>{{ item.coinName }}</b>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: true
  }
});

const changeStockColor = computed(() => props.item.change > 0 ? "success" : "red");
const changeCoinColor = computed(() => props.item.regularMarketChangePercent > 0 ? "success" : "red");
</script>
