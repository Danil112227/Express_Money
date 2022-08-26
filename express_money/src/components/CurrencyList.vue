<template>
  <v-card
    width="42%"
    class="pa-2 rounded-lg"
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
            this.$emit('selectItem', index)
        }
    },
    components: {
        CurrencyItem,
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            selectedItem: 0
        }
    }
}
</script>

<style>
    
</style>