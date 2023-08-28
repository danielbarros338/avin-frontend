import * as arrFunctions from "@/utils/arrFunctions.js";

export default {
  async getAllCoins() {
    const $nuxt = useNuxtApp();

    const response = await fetch(
      $nuxt.$config.public.URL_API +
      $nuxt.$config.public.ENPOINT_LIST_ALL_CRIPTO,
    );
    const allCoins = await response.json();

    this.coinsList = await allCoins.coins;
  },

  async setHomeIndicators() {
    const $nuxt = useNuxtApp();

    const randomCoinsSelection = arrFunctions.randomItemForEach(5, this.coinsList);

    for (const coin of randomCoinsSelection) {
      const formatedCoin = coin;

      const response = await fetch(
        `${
          $nuxt.$config.public.URL_API +
          $nuxt.$config.public.ENPOINT_CRIPTO_INFO
        }?coin=${formatedCoin}&currency=BRL`,
      );
      const coinResumen = await response.json();

      this.homeCoins.push(await coinResumen.coins[0]);
    }
  },
}