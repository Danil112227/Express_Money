<template>
  <div>
    <img
      :src="image"
      alt=""
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
        image: String,
        name: String,
        exchange: String,
        reserve: String,
    }
}
</script>