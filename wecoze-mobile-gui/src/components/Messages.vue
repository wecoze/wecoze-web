<template>
  <div class="we-messages">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <button @click="changeLanguage('en')">更改到英文</button>
    <button @click="changeLanguage('cn')">更改到中文</button>
  </div>
</template>
<script>
  export default {
    name: 'Messages',
    methods: {
      changeLanguage (_type) {
        this.$store.commit('setLanguage', _type)
      }
    }
  }
</script>

<style scoped>

</style>
