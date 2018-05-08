<template>
  <div class="weui-panel">
    <div class="weui-panel__hd" v-if="title">{{title}}</div>
    <div class="weui-panel__bd">
      <slot></slot>
    </div>
    <div class="weui-panel__ft" v-if="action">
      <a class="weui-cell weui-cell_access weui-cell_link" @click="activeMore">
        <div class="weui-cell__bd">{{this.moreText}}</div>
        <span class="weui-cell__ft"></span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pannel',
    props: {
      'title': {
        type: String,
        default: ''
      },
      'moreText': {
        type: String,
        default: '查看更多'
      },
      'action': {
        type: Function,
        default: null
      }
    },
    methods: {
      activeMore (e) {
        if (this.more instanceof Function) {
          this.more(e)
        }
      }
    }
  }
</script>

<style scoped>

</style>
