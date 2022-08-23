<template>
  <div>
    <CurrencyItem  v-for="item in items" :key="item.title" :title="item.title" :image="item.image" />
    <BankItem name="danil228" />
  </div>
</template>

<script>
import BankItem from "@/components/BankItem.vue"
import CurrencyItem from "@/components/CurrencyItem.vue"


export default {
    components: {
        CurrencyItem,
        BankItem,
    },
    data () {
      return {
         items: [
      { image: require("@/assets/1.png"), title: "string" },
      { title: 'Bar' },
      
    ]
      }
    }
}
</script>