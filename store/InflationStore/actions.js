export default {
  async getInflation() {
    const $nuxt = useNuxtApp();

    const date = new Date();
    const formatDate = date.toLocaleDateString().split("/").join("%2F")

    const response = await fetch(
      $nuxt.$config.public.URL_API +
      $nuxt.$config.public.ENPOINT_INFLATION +
      "?country=br&historical=false&start=" +
      formatDate +
      "&end=" +
      formatDate +
      "&sortBy=date&sortOrder=desc",
    );
    const inflation = await response.json();

    this.inflation = await inflation.inflation[0];
  }
}