<template>
  <v-app-bar style="background: #3949AB">
    <div class="d-flex justify-space-between justify-md-start align-center px-2" style="width: 100%">
      <div id="portal-icon" @click="sendHome" style="width: 10%">
        <img src="/img/avin-sm-logo.png" />
      </div>

      <!-- Desktop -->
      <div
        v-if="!isMobile"
        class="ml-5"
      >
        <v-btn
          class="elevation-1 ml-2"
          color="#8cae61"
          variant="elevated"
          to="/acoes"
        >
          <v-icon>mdi-finance</v-icon>
          Ações
        </v-btn>
        <v-btn
          class="elevation-1 ml-2"
          color="#8cae61"
          variant="elevated"
          to="/criptomoedas"
        >
          <v-icon>mdi-bitcoin</v-icon>
          Criptomoedas
        </v-btn>
        <v-btn
          class="elevation-1 ml-2"
          color="#8cae61"
          variant="elevated"
          to="/inflacao"
        >
          <v-icon>mdi-chart-line</v-icon>
          Inflação
        </v-btn>
        <v-btn
          class="elevation-1 ml-2"
          color="#8cae61"
          variant="elevated"
          to="/selic"
        >
          <v-icon>mdi-chart-bar</v-icon>
          Selic
        </v-btn>
      </div>
      <!-- Mobile -->

      <v-btn
        v-if="isMobile"
        dense
      >
        <v-icon size="28">mdi-menu</v-icon>

        <v-menu activator="parent">
          <v-list class="text-white" style="background: #4F5FBF">
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
  </v-app-bar>
</template>

<script setup>
const $router = useRouter()

const isMobile = ref(null);

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
})

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