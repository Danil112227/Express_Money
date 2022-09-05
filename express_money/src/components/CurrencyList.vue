<template>
  <v-card
    width="42%"
    class="pa-2 rounded-lg currency_list_media"
    tile
  >
    <v-list
      class="pa-0"
      dense
    >
      <v-toolbar-title class="too py-4 pl-5">
        <span class="font-weight-bold">Вы отдаёте</span>
      </v-toolbar-title>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <CurrencyItem
          @click="selectItem(index)"
          v-for="(item, index) in items"
          :key="item.title"
          :title="item.title"
          :image="item.image"
        />
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import CurrencyItem from "@/components/CurrencyItem.vue";

export default {
    methods: {
        selectItem (index) {
            this.selectedItem = index
            const selectedItem = this.items[index]
            const selectedTicker = selectedItem.ticker
            const updatedBanks = this.exchangeData[selectedTicker].banks
            this.$emit('input', updatedBanks)
        }

    },
    created () {
      this.selectItem(1)
    },
    components: {
        CurrencyItem,
    },
    props: {
        items: {
            type: Array,
            required: true
        },
        value: {
            type: Array,
            default: () => ([])
        },
    },
    data () {
      const exchangeData = { 
          BTC: {
            banks: [
              { image: require("@/assets/Bitcoin.png"), title: "Райффайзен", exchange: 751639.1958, reserved: 0}
            ]
          },
          ETH: {
            banks: [
              { image: require("@/assets/Bitcoin.png"), title: "Райффайзен", exchange: 743262.2364, reserved: 1588630}
            ]
          },
          USDC: {
            banks: [
              { image: require("@/assets/Bitcoin.png"), title: "Райффайзен", exchange: 4325.65986, reserved: 33321}
            ]
          },
          ZEC: {
            banks: [
              { image: require("@/assets/Bitcoin.png"), title: "Райффайзен", exchange: 1234.432, reserved: 413214}
            ]
          },
          DASH: {
            banks: [
              { image: require("@/assets/Bitcoin.png"), title: "Райффайзен", exchange: 12344213, reserved: 44213123}
            ]
          },
          XMR: {
            banks: [
              { image: require("@/assets/Bitcoin.png"), title: "Райффайзен", exchange: 334.4123423, reserved: 1234123}
            ]
          },
          ETC: {
            banks: [
              { image: require("@/assets/Bitcoin.png"), title: "Райффайзен", exchange: 44324123, reserved: 2345234}
            ]
          },
          USDT: {
            banks: [
              { image: require("@/assets/Bitcoin.png"), title: "Райффайзен", exchange: 2344523.3424, reserved: 1232155}
            ]
          },
          XRP: {
            banks: [
              { image: require("@/assets/Bitcoin.png"), title: "Райффайзен", exchange: 12.0975, reserved: 553241}
            ]
          },
          LCT: {
            banks: [
              { image: require("@/assets/Bitcoin.png"), title: "Райффайзен", exchange: 1947.3218, reserved: 1588630}
            ]
          }
        }
        return {
            selectedItem: 0,
            exchangeData
        }
    }
}
</script>

<style>
  .currency_list_media {
    box-shadow: none  !important;;
  }





    /* @media (min-width: 840px) {
  .currency_list_media {
    width: 32% !important;
  }
}


@media (min-width: 960px) {
  .currency_list_media {
    width: 42% !important;
    float: left !important;
  }
}  */


</style>