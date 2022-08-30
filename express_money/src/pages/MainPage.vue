<template>
  <div class="main__wrapper">
    <div class="main">
      <CurrencyList
        @selectItem="selectItem"
        :items="items"
      />
      <BankList
        v-if="banks.length"
        :banks="banks"
      />





      <!-- -------Time Card Wrapper------- -->
      <TimeCard />
    </div>
  </div>
</template>

<script>
import TimeCard from "@/components/TimeCard.vue";
import CurrencyList from "@/components/CurrencyList.vue";
import BankList from "@/components/BankList.vue";


export default {
    name: "MainPage",
    methods: {
      selectItem (itemIndex) {
        const selectedItem = this.items[itemIndex]
        const selectedTicker = selectedItem.ticker
        this.banks=this.exchangeData[selectedTicker].banks
      }
    },
    created () {
      this.selectItem(1)
    },
    components: {
        CurrencyList,
        TimeCard,
        BankList,
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
        banks: [],
        items: [
          { image: require("@/assets/Bitcoin.png"), title: "BTC", ticker: "BTC"},
          { image: require("@/assets/Bitcoin.png"), title: 'ETH', ticker: "ETH" },
          { image: require("@/assets/Bitcoin.png"), title: 'LCT', ticker: "LCT" },
          { image: require("@/assets/Bitcoin.png"), title: 'XRP', ticker: "XRP" },
          { image: require("@/assets/Bitcoin.png"), title: 'USDT', ticker: "USDT" },
          { image: require("@/assets/Bitcoin.png"), title: 'USDC', ticker: "USDC" },
          { image: require("@/assets/Bitcoin.png"), title: 'ETC', ticker: "ETC" },
          { image: require("@/assets/Bitcoin.png"), title: 'XMR', ticker: "XMR" },
          { image: require("@/assets/Bitcoin.png"), title: 'DASH', ticker: "DASH" },
          { image: require("@/assets/Bitcoin.png"), title: 'ZEC', ticker: "ZEC" },
        ],
        exchangeData
    }
  }
};
</script>

<style>
    .main {
        width: 1150px;
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
    }
</style>

