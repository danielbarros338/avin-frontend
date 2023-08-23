export default {
  async getAllTickers() {
    const $nuxt = useNuxtApp()

    const response = await fetch($nuxt.$config.public.URL_API + $nuxt.$config.public.ENDPOINT_LIST_ALL_TICKERS);
    const allTickers = await response.json();

    this.indexesList = await allTickers.indexes;
    this.stocksList = await allTickers.stocks;
  }
}