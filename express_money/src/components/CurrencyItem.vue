<template>
  <div class="main__wrapper">
    <v-card
      class="mx-auto float-left"
      max-width="300"
      tile
    >
      <v-list dense>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group
          
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    image:{
      type: String,
      required: true
      },
    title: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    },
    
  },
  data: () => ({
    selectedItem: 1,
    items: [
      { text: 'Real-Time', icon: 'mdi-clock' },
      { text: 'Audience', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' },
    ],
  }),
  
}
</script>

<style>
  .main__wrapper {
    max-width: 1150px;
    padding-top: 40px;
    margin: 0 auto;
  }
</style>