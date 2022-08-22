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
        class="py-0 fill-height d-flex align-center"
      >
        <v-img
          class="d-flex align-start"
          max-height="90"
          max-width="237"
          :src="require('./assets/logo.png')"
        />
        
        <!-- <v-btn
          class="d-flex justify-end"
            
          v-for="link in links"
          :key="link"
          text
        >
          {{ link }}
        </v-btn> -->
        <v-btn-toggle
          v-model="text"
          tile
          color="blue accent-3"
          group
        >
          <v-btn value="main">
            Главная
          </v-btn>

          <v-btn value="rules">
            Правила
          </v-btn>

          <v-btn value="FAQ">
            FAQ
          </v-btn>

          <v-btn value="reviews">
            Отзывы
          </v-btn>
          <v-btn value="contacts">
            Контакты
          </v-btn>
        </v-btn-toggle>
    

    
        <v-spacer />
        <v-btn
          large
          color="primary"
        >
          Войти
        </v-btn>
        <v-btn
          class="mx-3"
          large
          color="yellow"
        >
          Регистрация
        </v-btn>

        <!-- <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            solo-inverted
          />
        </v-responsive> -->
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


