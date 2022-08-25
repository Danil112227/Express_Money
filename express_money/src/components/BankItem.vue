<template>
  <div>
    <img
      :src="image"
      alt="banks"
    >
    {{ name }}
    {{ exchange }}
    {{ reserve }}
  </div>
</template>
 
<script>
export default {
    name: "BankItem",
    props: {
      image:{
      type: String,
      required: true
      },
    name: {
      type: String,
      required: true
    },
    exchange: {
      type: String,
      required: true
    },
    reserve: {
      type: String,
      required: true
    }
    }
}
</script>