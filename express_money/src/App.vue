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
          class="ml-16"
          tile
          color="blue accent-3"
          group
        >
          <v-btn
            value="main"
            class="font-weight-medium text-capitalize black--text"
          >
            Главная
          </v-btn>

          <v-btn
            value="rules"
            class="font-weight-medium text-capitalize black--text"
          >
            Правила
          </v-btn>

          <v-btn
            value="FAQ"
            class="font-weight-medium text-capitalize black--text"
          >
            FAQ
          </v-btn>

          <v-btn
            value="reviews"
            class="font-weight-medium text-capitalize black--text"
          >
            Отзывы
          </v-btn>
          <v-btn
            value="contacts"
            class="font-weight-medium text-capitalize black--text"
          >
            Контакты
          </v-btn>
        </v-btn-toggle>
    

    
        <v-spacer />
        <v-btn 
          class="white--text text-capitalize px-10"
          large
          color="#6377F7"
          max-height="36"
          max-width="62"
        >
          Войти
        </v-btn>
        <v-btn 
          class="ml-3 text-capitalize"
          large
          color="#F1C613"
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


 .v-btn{
  font-size: 16px !important;
 }
</style>