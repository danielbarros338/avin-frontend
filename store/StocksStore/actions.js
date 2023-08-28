export default {
  async getAllTickers() {
    const $nuxt = useNuxtApp();

    const response = await fetch(
      $nuxt.$config.public.URL_API +
        $nuxt.$config.public.ENDPOINT_LIST_ALL_TICKERS,
    );
    const allTickers = await response.json();

    this.indexesList = await allTickers.indexes.map(
      (data) => data.split("^")[1],
    );
    this.stocksList = await allTickers.stocks.map((data) => data.split("^")[1]);
  },

  async setHomeIndicators() {
    const $nuxt = useNuxtApp();

    const randomIndexesSelection = [];
    const randomStocksSelection = [];

    let flag = 0;
    while (flag < 5) {
      const randomIndex = Math.floor(Math.random() * this.indexesList.length);
      const selectedIndex = this.indexesList[randomIndex];

      let exists = false;
      if (randomIndexesSelection.length > 0) {
        exists = randomIndexesSelection.find((data) => data === selectedIndex);
      }

      if (!exists) {
        randomIndexesSelection.push(selectedIndex);
        flag++;
      }
    }

    flag = 0;
    while (flag < 5) {
      const randomIndex = Math.floor(Math.random() * this.stocksList.length);
      const selectedStock = this.stocksList[randomIndex];

      let exists = false;
      if (randomStocksSelection.length > 0) {
        exists = randomStocksSelection.find((data) => data === selectedStock);
      }

      if (!exists) {
        randomStocksSelection.push(selectedStock);
        flag++;
      }
    }

    for (const index of randomIndexesSelection) {
      const formatedIndex = index;

      const response = await fetch(
        `${
          $nuxt.$config.public.URL_API +
          $nuxt.$config.public.ENDPOINT_TICKERS_RESUMEN
        }?sortBy=name&sortOrder=asc&limit=10&search=${formatedIndex}`,
      );
      const indexResumen = await response.json();

      this.homeIndex.push(await indexResumen.indexes[0]);
    }

    for (const index of randomStocksSelection) {
      const formatedStocks = index;

      const response = await fetch(
        `${
          $nuxt.$config.public.URL_API +
          $nuxt.$config.public.ENDPOINT_TICKERS_RESUMEN
        }?sortBy=name&sortOrder=asc&limit=10&search=${formatedStocks}`,
      );
      const stockResumen = await response.json();

      this.homeStock.push(await stockResumen);
    }
  },
};
