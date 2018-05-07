<template>
  <div id="app">
    <main>
      <router-view></router-view>
      <nav class="weui-tabbar main-nav">
        <a class="weui-tabbar__item weui-bar__item_on">
          <span style="display: inline-block;position: relative;">
              <img src="./assets/icon_tabbar.png" alt="" class="weui-tabbar__icon">
              <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
          </span>
          <p class="weui-tabbar__label">微信</p>
        </a>
      </nav>
    </main>
  </div>
</template>

<script>
  import config from './config'
  console.log(config)
  export default {
    name: 'app',
    data () {
      return {
        navConfig: config.navBar
      }
    },
    mounted () {
      console.log(this.$store.state.index)
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
