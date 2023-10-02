import * as arrFunctions from "@/utils/arrFunctions.js";

export default {
  async getAllTickers() {
    const $nuxt = useNuxtApp();

    const response = await fetch(
      $nuxt.$config.public.URL_API +
      $nuxt.$config.public.ENDPOINT_AVAILABLE_TICKERS,
    );
    const allTickers = await response.json();

    this.stocksList = await allTickers.stocks.sort();
  },

  async setHomeIndicators() {
    const $nuxt = useNuxtApp();

    const randomStocksSelection = arrFunctions.randomItemForEach(5, this.stocksList);

    for (const index of randomStocksSelection) {
      const formatedStocks = index;

      const response = await fetch(
        `${
          $nuxt.$config.public.URL_API +
          $nuxt.$config.public.ENDPOINT_TICKERS_RESUMEN
        }?sortBy=name&sortOrder=asc&limit=10&search=${formatedStocks}`,
      );
      const stockResumen = await response.json();

      this.homeStock.push(await stockResumen.stocks[0]);
    }
  },

  async stockResumen(stock) {
    const $nuxt = useNuxtApp();

    const response = await fetch(`${$nuxt.$config.public.URL_API +
      $nuxt.$config.public.ENDPOINT_TICKERS_RESUMEN
      }?sortBy=name&sortOrder=asc&limit=10&search=${stock}`,
    );

    const stockResumen = await response.json();

    this.actionPageStock.push(await stockResumen.stocks[0]);
  }
};
