<template>
  <v-card
    height="140px"
    width="42%"
    class="pa-2 rounded-lg bank-list-shadow"
    tile
  >
    <v-list
      class="pa-0"
      dense
    >
      <v-toolbar-title class="too py-4 pl-5 pr-9 d-flex justify-space-between">
        <span class="font-weight-bold">Вы получаете</span>
        <span class="font-weight-bold">Курс</span>
        <span class="font-weight-bold">Резерв</span>
      </v-toolbar-title>
      <v-list-item-group
        color="primary"
      >
        <BankItem
          v-for="(item, index) in banks"
          :key="index"
          :bank="item"
        />
      </v-list-item-group>
    </v-list>
  </v-card>
</template>


<script>
// import { title } from 'process';
import BankItem from "@/components/BankItem.vue"


export default {
    components: {
      BankItem
    },
    props: {
        banks: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
  .bank-list-shadow {
    box-shadow: none !important;
  }
</style>