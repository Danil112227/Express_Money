<template>
  <div class="main__page">
    <div class="main__wrapper">
      <div class="main">
        <CurrencyList
          v-model="banks"
          :items="items"
        />
        <BankList
          v-if="banks.length"
          :banks="banks"
        />
      </div>
    </div>

    <TimeList />

    <div class="main__wrapper mt-0">
      <ServiceInfo />


      <FeedbackList />


      <ReserveList />
    </div>
    <ServiceQualityInfo />

    <div class="main__wrapper mt-0">
      <PartnerService />

      <FooterEnd />
    </div>
  </div>
</template>

<script>
import CurrencyList from "@/components/CurrencyList.vue";
import BankList from "@/components/BankList.vue";
import TimeList from "@/components/TimeList.vue";
import ServiceInfo from "@/components/ServiceInfo.vue";
import FeedbackList from "@/components/FeedbackList.vue";
import ReserveList from "@/components/ReserveList.vue";
import ServiceQualityInfo from "@/components/ServiceQualityInfo.vue";
import PartnerService from "@/components/PartnerService.vue";
import FooterEnd from "@/components/FooterEnd.vue";


export default {
    name: "MainPage",
    components: {
    CurrencyList,
    BankList,
    TimeList,
    ServiceInfo,
    FeedbackList,
    ReserveList,
    ServiceQualityInfo,
    FooterEnd,
    PartnerService,
},
    data () {
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
        
    }
  }
};
</script>

<style>
  .v-main__wrap {
    background-color: #F6F7FC;
  }
  .main__wrapper {
    max-width: 1150px;
    margin: 0 auto;
    margin-top: 40px;
  }
    .main {
        display: flex;
        justify-content: space-between;
    }
</style>

