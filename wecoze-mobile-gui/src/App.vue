<template>
  <div id="app">
    <main>
      <router-view></router-view>
      <nav class="weui-tabbar main-nav">
        <a class="weui-tabbar__item weui-bar__item_on" v-for="(item, index) in navConfig">
          <span style="display: inline-block;position: relative;">
              <img :src="item.icon" alt="" class="weui-tabbar__icon">
              <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
          </span>
          <p class="weui-tabbar__label">{{item.text}}</p>
        </a>
      </nav>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        navConfig: this.$store.getters.config.navBar
      }
    },
    mounted () {
      console.log(this.navConfig)
    }
  }
</script>

<style>
  html, body {
    margin: 0;
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }

</style>
