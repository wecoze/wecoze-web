<template>
  <div id="app">
    <main>
      <router-view ref="wrapper"></router-view>
    </main>
    <nav class="weui-tabbar main-nav">
      <a class="weui-tabbar__item" :class="{'weui-bar__item_on': key === index}" v-for="(item, key) in tabConfig" @click="switchView(key)">
          <span>
            <img :src="item.icon" class="weui-tabbar__icon">
            <span class="weui-badge" v-if="messageCounts[item.name] > 0">{{messageCounts[item.name]}}</span>
            <span class="weui-badge weui-badge_dot" v-if="messageCounts[item.name] === -1"></span>
          </span>
        <p class="weui-tabbar__label">{{item.text}}</p>
      </a>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        index: 0
      }
    },
    computed: {
      tabConfig () { return this.$store.getters.config.tabBar },
      messageCounts () { return this.$store.state.UI.noticeCounts },
      paths () {
        return this.tabConfig.map(_item => {
          return _item.id.replace('messages', '')
        })
      }
    },
    mounted () {
      console.log(this.$store.getters.config)
      this.index = this.paths.indexOf(this.$router.history.current.path.replace('/', ''))
    },
    methods: {
      switchView (_index) {
        this.index = _index
        this.$router.replace('/' + this.paths[_index])
      }
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

  .main-nav {
    height: 53px;
  }

  main {
    box-sizing: border-box;
    height: 100%;
    padding-bottom: 53px;
  }

  .weui-tabbar .weui-badge {
    position: absolute;
    top: -2px;
    right: -13px;
  }

  .weui-tabbar .weui-badge.weui-badge_dot {
    position: absolute;
    top: 0;
    right: -6px;
  }

  .weui-tabbar__item > span {
    display: inline-block;
    position: relative;
  }

</style>
