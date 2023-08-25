<template>
  <v-app-bar style="background: #3949ab">
    <div
      class="d-flex justify-space-between justify-md-start align-center px-2"
      style="width: 100%"
    >
      <div id="portal-icon" @click="sendHome">
        <img src="/img/avin-sm-logo.png" />
      </div>

      <!-- Desktop -->
      <div v-if="!isMobile" class="ml-5">
        <v-btn class="ml-2" color="#fff" variant="text" to="/acoes">
          <v-icon class="mr-1">mdi-finance</v-icon>
          Ações
        </v-btn>
        <v-btn class="ml-2" color="#fff" variant="text" to="/criptomoedas">
          <v-icon class="mr-1">mdi-bitcoin</v-icon>
          Criptomoedas
        </v-btn>
        <v-btn class="ml-2" color="#fff" variant="text" to="/inflacao">
          <v-icon class="mr-1">mdi-chart-line</v-icon>
          Inflação
        </v-btn>
        <v-btn class="ml-2" color="#fff" variant="text" to="/selic">
          <v-icon class="mr-1">mdi-chart-bar</v-icon>
          Selic
        </v-btn>
      </div>

      <div v-if="!isMobile" id="search-container" style="width: 30%">
        <SharedSearchComponent />
      </div>

      <!-- Mobile -->
      <div
        v-if="isMobile"
        class="d-flex justify-end align-center pl-5"
        style="width: 90%"
      >
        <SharedSearchComponent class="ml-5" />

        <v-btn dense>
          <v-icon size="28" class="text-white">mdi-menu</v-icon>

          <v-menu activator="parent">
            <v-list class="text-white" style="background: #4f5fbf">
              <v-list-item to="/">
                <v-list-item-title class="text-right">
                  Home
                  <v-icon>mdi-home</v-icon>
                </v-list-item-title>
              </v-list-item>
              <v-list-item to="/acoes">
                <v-list-item-title class="text-right">
                  Ações
                  <v-icon>mdi-finance</v-icon>
                </v-list-item-title>
              </v-list-item>
              <v-list-item to="/criptomoedas">
                <v-list-item-title class="text-right">
                  Cripto
                  <v-icon>mdi-bitcoin</v-icon>
                </v-list-item-title>
              </v-list-item>
              <v-list-item to="/inflacao">
                <v-list-item-title class="text-right">
                  Inflação
                  <v-icon>mdi-chart-line</v-icon>
                </v-list-item-title>
              </v-list-item>
              <v-list-item to="/selic">
                <v-list-item-title class="text-right">
                  Selic
                  <v-icon>mdi-chart-bar</v-icon>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </div>
    </div>
  </v-app-bar>
</template>

<script setup>
const $router = useRouter();

const isMobile = ref(null);

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

function handleResize() {
  isMobile.value = window.innerWidth < 960;
}

function sendHome() {
  $router.push("/");
}
</script>

<style scoped>
#portal-icon {
  cursor: pointer;
}
</style>
