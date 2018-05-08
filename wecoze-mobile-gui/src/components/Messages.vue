<template>
  <div class="we-messages">
    <h1>施工中的消息列表</h1>
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
