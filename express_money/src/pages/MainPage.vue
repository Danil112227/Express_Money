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
          :currency-title="exchangeData"
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
            },
            { 
              image: require("@/assets/Bitcoin.png"),
              title: "Монобанк",
              exchange: 233,
              reserved: 89994412399,
              alert:"bigAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 1,
                  max: 2423123,
                },
                curencyLimit: {
                  min: 2334,
                  max: 40445426
                }
              }
            },
            { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Ощадбанк", 
              exchange: 212, 
              reserved: 4444412,
              alert:"bigAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 604,
                  max: 49353490,
                },
                curencyLimit: {
                  min: 2334,
                  max: 40445426
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
              exchange: 34424, 
              reserved: 12335, 
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 55,
                  max: 2335345,
                },
                curencyLimit: {
                  min: 5123,
                  max: 3223346
                }
              }
            },
            { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Монобанк", 
              exchange: 64163, 
              reserved: 89923,
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 3241,
                  max: 23451177,
                },
                curencyLimit: {
                  min: 42,
                  max: 4345
                }
              }
            },
            { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Ощадбанк", 
              exchange: 234167, 
              reserved: 99674,
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 45,
                  max: 8067,
                },
                curencyLimit: {
                  min: 1,
                  max: 355
                }
              }
            }
            ]
          },
          LTC: {
            title: "LTC", 
            ticker: "LTC",
            image: require("@/assets/Bitcoin.png"),
            banks: [
              { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Райффайзен", 
              exchange: 432562.23, 
              reserved: 43212, 
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 0.123451,
                  max: 0.123555234,
                },
                curencyLimit: {
                  min: 1234,
                  max: 5534222
                }
              }
            },
            { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Монобанк", 
              exchange: 3561, 
              reserved: 531234,
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 175,
                  max: 94312,
                },
                curencyLimit: {
                  min: 46,
                  max: 78956
                }
              }
            },
            { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Ощадбанк", 
              exchange: 531, 
              reserved: 788454,
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 46,
                  max: 23678,
                },
                curencyLimit: {
                  min: 234,
                  max: 34577
                }
              }
            }
            ]
          },
          XRP: {
            title: "XRP", 
            ticker: "XRP",
            image: require("@/assets/Bitcoin.png"),
            banks: [
              { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Райффайзен", 
              exchange: 132145.754, 
              reserved: 32423, 
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 0.4452,
                  max: 0.34678937981,
                },
                curencyLimit: {
                  min: 324,
                  max: 4042345
                }
              }
            },
            { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Монобанк", 
              exchange: 1.534, 
              reserved: 2355111,
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 41,
                  max: 2461,
                },
                curencyLimit: {
                  min: 23,
                  max: 1561
                }
              }
            },
            { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Ощадбанк", 
              exchange: 1235, 
              reserved: 112,
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 45,
                  max: 1575721,
                },
                curencyLimit: {
                  min: 145,
                  max: 149080
                }
              }
            }
            ]
          },
          ETC: {
            title: "ETC", 
            ticker: "ETC",
            image: require("@/assets/Bitcoin.png"),
            banks: [
              { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Райффайзен", 
              exchange: 75213123.1958, 
              reserved: 3245, 
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 34,
                  max: 235897,
                },
                curencyLimit: {
                  min: 5732375,
                  max: 404445126
                }
              }
            },
            { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Монобанк", 
              exchange: 1246, 
              reserved: 26823,
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 234,
                  max: 68568,
                },
                curencyLimit: {
                  min: 162,
                  max: 651771
                }
              }
            },
            { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Ощадбанк", 
              exchange: 9844, 
              reserved: 412,
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 645,
                  max: 9064,
                },
                curencyLimit: {
                  min: 217,
                  max: 23467
                }
              }
            }
            ]
          },
          XMR: {
            title: "XMR", 
            ticker: "XMR",
            image: require("@/assets/Bitcoin.png"),
            banks: [
              { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Райффайзен", 
              exchange: 713449.1958, 
              reserved: 0, 
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 423,
                  max: 3256643,
                },
                curencyLimit: {
                  min: 57,
                  max: 44326
                }
              }
            },
            { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Монобанк", 
              exchange: 0.1235, 
              reserved: 123451,
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 11,
                  max: 5512,
                },
                curencyLimit: {
                  min: 12,
                  max: 32571
                }
              }
            },
            { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Ощадбанк", 
              exchange: 5572, 
              reserved: 664737,
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 23,
                  max: 57745,
                },
                curencyLimit: {
                  min: 123,
                  max: 5426
                }
              }
            }
            ]
          },
          DASH: {
            title: "DASH", 
            ticker: "DASH",
            image: require("@/assets/Bitcoin.png"),
            banks: [
              { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Райффайзен", 
              exchange: 456271, 
              reserved: 3214, 
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 0.123559,
                  max: 0.12359914,
                },
                curencyLimit: {
                  min: 1223,
                  max: 214551
                }
              }
            },
            { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Монобанк", 
              exchange: 974, 
              reserved: 345986,
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 34,
                  max: 9846,
                },
                curencyLimit: {
                  min: 62,
                  max: 7689
                }
              }
            },
            { 
              image: require("@/assets/Bitcoin.png"), 
              title: "Ощадбанк", 
              exchange: 862, 
              reserved: 67725,
              alert:"simpleAlert",
              calculatorData: {
                criptoCurencyLimit: {
                  min: 584,
                  max: 24973,
                },
                curencyLimit: {
                  min: 19,
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

