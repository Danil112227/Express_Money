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
        class="py-0 fill-height flex-nowrap"
      >
        <v-img
          
          max-height="90"
          max-width="237"
          :src="require('./assets/logo.png')"
        />
        <!-- <v-btn-toggle
          class="ml-16"
          
          tile
          color="blue accent-3"
          group
        >
          <v-btn
            link
            :to="{name:'home'}"
            value="main"
            class="font-weight-medium text-capitalize black--text"
          >
            Главная
          </v-btn>
          
            
          <div class="text-center">
            <v-menu
              transition="slide-x-transition"
              open-on-hover
              bottom
              tile
              offset-y
            >
              <template #activator="{ on, attrs }">
                <v-btn
                  link
                  tile
                  :to="{name:'rules'}"
                  value="rules"
                  v-bind="attrs"
                  v-on="on"
                  class="font-weight-medium text-capitalize black--text"
                >
                  Правила
                </v-btn>
              </template>

              <v-list>
                <v-list-item>
                  <HeaderRules
                    privacy="Политика конфиденциальности"
                    security="Безопасность"
                  />
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
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
        </v-btn-toggle> -->
        <nav class="header__nav">
          <ul class="topmenu d-flex justify-c">
            <li>
              <a
                link
                :to="{name:'home'}"
                value="main"
              ><span>Главная</span></a>
            </li>
            <li>
              <a
                :to="{name:'rules'}"
                value="rules"
              ><span>Правила</span><i class="fa fa-angle-down" /></a>
              <ul class="sub-menu">
                <li><a href="#"><span>Политика конфиденциальности</span></a></li>
                <li><a href="#"><span>Безопасность</span></a></li>
              </ul>
            </li>
            <li><a href="#"><span>FAQ</span></a></li>
            <li><a href="#"><span>Отзывы</span></a></li>
            <li><a href="#"><span>Контакты</span></a></li>
          </ul>
        </nav>
        
    

    
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
      <router-view />
    </v-main>
  </v-app>
</template>


<script>
// import HeaderRules from "@/components/HeaderRules.vue"

export default {
  name: 'App',

  components: {
  },

  data: () => ({

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

 .header__nav {
  margin-left: 55px;
 }

 .topmenu > li {
  display: inline-block;
  position: relative;
}
.topmenu > li:last-child {
  margin-right: 0;
}

a {
  display: block;
  padding: 10px 0;
  margin: 0 12px;
  text-decoration: none;
  outline: none;
  transition: .5s linear;
}

.v-application a {
  color: black !important;
}

.v-application a:hover {
  color: #1976d2 !important;
}

.sub-menu { 
  font-size: 14px;
  text-decoration: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 10;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  float: none;
  display: none;
  background: #fff;
  box-shadow: 0 0 5px #e1e9f2;
  border: 1px solid #eaeef4;
  border-radius: 4px;
  padding: 10px 4px !important;
  height: auto;
  width: 235px;
  margin: 0;
}

.header__nav .sub-menu {
  display: none;
}

.header__nav ul li:hover .sub-menu {
  display: block;
  list-style-type: none;
}
</style>