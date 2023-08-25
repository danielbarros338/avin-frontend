// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "AVIN - Avaliações Financeiras",
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis@1.0.2/dist/tfjs-vis.umd.min.js",
        },
      ],
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  modules: ["@pinia/nuxt", "vue3-carousel-nuxt"],
  build: {
    transpile: ["vuetify"],
  },
  pinia: {
    autoImports: ["defineStore"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  runtimeConfig: {
    public: process.env,
  },
});
