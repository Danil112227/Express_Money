<template>
  <div>
    <img
      :src="image"
      alt="btc"
    >
    {{ title }}
    {{ count }}
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    count: Number,
    
  }
}
</script>

