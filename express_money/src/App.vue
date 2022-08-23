<template>
  <v-app id="inspire">
    <v-app-bar
      app
      elevate-on-scroll
      color="white"
      flat
      height="90"
    >
      <v-container 
        class="py-0 fill-height d-flex align-center justify-space-between"
      >
        <v-img
          class="d-flex align-start"
          max-height="90"
          max-width="237"
          :src="require('./assets/logo.png')"
        />
        <v-btn-toggle
          class="d-flex flex-row justifu-end font-weight-regular"
          tile
          color="blue accent-3"
          group
        >
          <v-btn
            value="main"
            class="font-weight-regular"
          >
            Главная
          </v-btn>

          <v-btn
            value="rules"
            class="font-weight-regular"
          >
            Правила
          </v-btn>

          <v-btn
            value="FAQ"
            class="font-weight-regular"
          >
            FAQ
          </v-btn>

          <v-btn
            value="reviews"
            class="font-weight-regular"
          >
            Отзывы
          </v-btn>
          <v-btn
            value="contacts"
            class="font-weight-regular"
          >
            Контакты
          </v-btn>
        </v-btn-toggle>
    

    
        <v-spacer />
        <v-btn 
          class="white--text"
          large
          color="#6377F7"
          max-width="62"
          max-height="36"
        >
          Войти
        </v-btn>
        <v-btn 
          class="mx-3"
          large
          color="#F1C613"
          max-width="105"
          max-height="36"
        >
          Регистрация
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <HelloWorld />
    </v-main>
  </v-app>
</template>


<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld
  },

  data: () => ({
    links: [
      'Главная',
      'Правила',
      'FAQ',
      'Отзывы',
      'Контакты'
    ],
  }),
};
</script>


<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');

$body-font-family: 'IMB Plex Sans';
$title-font: 'IMB Plex Sans';

 .v-application {
   font-family: $body-font-family, sans-serif !important;
    .title { // To pin point specific classes of some components
       font-family: $title-font, sans-serif !important;
    }
 }
</style>