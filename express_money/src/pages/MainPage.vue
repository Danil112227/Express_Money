<template>
  <div class="main__page wrapper">
    <div class="main__wrapper wrapper">
      <div class="main">
        <CurrencyList
          v-model="selectedCurencyTicker"
          :items="currencies"
        />
        <BankList
          v-model="selectedBankIndex"
          v-if="banks.length"
          :banks="banks"
        />

        <ExchangeBlock 
          :selected-currency="exchangeData[selectedCurencyTicker]"
          :selected-bank-index="selectedBankIndex"
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
import ExchangeBlock from "@/components/ExchangeBlock.vue";


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
    ExchangeBlock,
},
  methods: {
    },
    computed: {
      currencies () {
        return Object.values(this.exchangeData)
      },
      banks () {
        return this.exchangeData[this.selectedCurencyTicker].banks
      },
    },
    watch: {
      selectedCurencyTicker () {
        this.selectedBankIndex = 0
      }
    },
    data () {
      
      const exchangeData = { 
          BTC: {
            title: "BTC", 
            ticker: "BTC",
            image: require("@/assets/Bitcoin.png"),
            banks: [
              { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Райффайзен", 
              exchange: 751639.1958, 
              reserved: 0, 
              alert:"bigAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 0.008559,
                  max: 0.059914,
                },
                curencyLimit: {
                  min: 5775,
                  max: 40426
                }
              }
            }
            ]
          },
          ETH: {
            title: "ETH", 
            ticker: "ETH",
            image: require("@/assets/Bitcoin.png"),
            banks: [
              { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Райффайзен", 
              exchange: 32441, 
              reserved: 123, 
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 0.0000023,
                  max: 0.0343244,
                },
                curencyLimit: {
                  min: 2334,
                  max: 40445426
                }
              }
            },
              { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Тинькофф", 
              exchange: 324234, 
              reserved: 899999,
              alert:"bigAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 0.0000023,
                  max: 0.0343244,
                },
                curencyLimit: {
                  min: 2334,
                  max: 40445426
                }
              }
            }
            ]
          },
          
        }
      return {
        exchangeData,
        selectedCurencyTicker: 'BTC',
        selectedBankIndex: 0,
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

