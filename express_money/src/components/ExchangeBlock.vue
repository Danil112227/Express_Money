<template>
  <div class="exchange__block__wrapper">
    <WarningBlock 
      :content="this.warningBlock"
    />
    <div class="exchange__list">
      <div class="notice__message">
        <div class="list__title mb-5">
          <span>Ввод данных</span>
        </div>
        <div class="exchange">
          <div class="exchange__info">
            <div class="exchange__info__line pb-1">
              <span>
                Курс обмена
              </span>
              :
              <span>
                67108.4126 UAH = 1 ETH
              </span>
            </div>
            <div class="exchange__info__line d-flex pb-1">
              <span>
                Резерв
              </span>
              :
              <span>
                19.6103 ETH
              </span>
              <a
                href="@/pages/MainPage.vue"
                class="window_join pl-1"
              >Не хватает?</a>
            </div>
          </div>
          <div class="bank__exchange">
            <ExchangeItem />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import ExchangeItem from "@/components/ExchangeItem.vue"
    import WarningBlock from "@/components/WarningBlock.vue"
    
    export default {
        components: {
            ExchangeItem,
            WarningBlock,
        },
        props: {
          selectedCurrency: {
            type: Object,
            required: true
          },
          selectedBankIndex: {
            type: Number,
            required: true
          }
        },
        computed: {
          banks () {
            return this.selectedCurrency.banks
          },
          calculatorData () {
          return this.banks[this.selectedBankIndex].calculatorData
      },
        warningBlock () {
        const alertName = this.banks[this.selectedBankIndex].alert
        return this.alerts[alertName]
      }
        },
        data() {
          return {
            alerts: {
         simpleAlert: [
                    {
                        content:"Данная операция производится администратором в ручном режиме и занимает от 5 до 60 минут в рабочее время.",
                    },
                    {
                        accent: false,
                        content:"Данная операция производится администратором в ручном режиме и занимает от 5 до 60 минут в рабочее время.",
                    },
                    

                ],
          bigAlert: [
                    {
                        content:"Данная операция производится администратором в ручном режиме и занимает от 5 до 60 минут в рабочее время.",
                    },
                    {
                        accent: false,
                        content:"Данная операция производится администратором в ручном режиме и занимает от 5 до 60 минут в рабочее время.",
                    },
                    {
                        accent: true,
                        content:"Данная операция производится администратором в ручном режиме и занимает от 5 до 60 минут в рабочее время.",
                    }

                ],
        },
          }
        }
    }
</script>

<style>
    .notice__message {
        margin-bottom: 20px;
        padding: 20px 20px 20px 20px;
        max-width: 1130px;
        background: #fff;
        box-shadow: 0 0 5px #e1e9f2;
        border-radius: 4px;
    }

    .exchange__block__wrapper {
        width: 34%;
    }

    .exchange__list__title {
        margin: 0 0 10px 0;
        font: 600 20px/20px 'IBM Plex Sans', sans-serif !important;
        color: #000;
        padding: 2px 0 2px 10px;
        border-left: 3px solid #f1c613;
    }

    .list__title {
        font: 600 20px/20px 'IBM Plex Sans', sans-serif !important;

    }

    .notice__message ul li {
        display: block;
        background: url(@/assets/liarr.png) no-repeat 0 4px;
        padding: 0 0 5px 12px;
        font-size: 14px;
    }
    .notice__message ul li p {
        margin-bottom: 0;
    }

    .exchange__info__line {
        font: 14px/1.3em 'IBM Plex Sans', sans-serif;
        color: #000000;
    }
</style>