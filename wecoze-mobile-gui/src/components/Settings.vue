<template>
  <div class="we-settings">
    <pannel v-for="(item, key) in optionList" :title="item.text" :key="key">
      <cell v-for="cell in item.items" :text="cell.text" :icon="cell.icon" :key="cell.id" @click.native="optionAction(cell.id)"></cell>
    </pannel>
  </div>
</template>

<script>
  import pannel from './children/pannel'
  import cell from './children/cell'
  const weui = window.weui

  export default {
    name: 'Settings',
    components: {pannel, cell},
    computed: {
      optionList () {
        return this.$store.getters.config.optionList
      }
    },
    methods: {
      changeLanguage (_type) {
        this.$store.commit('setLanguage', _type)
      },
      optionAction (_type) {
        switch (_type) {
          case 'changeEn':
            this.changeLanguage('en')
            weui.toast('Success!')
            break
          case 'changeCn':
            this.changeLanguage('cn')
            weui.toast('设置成功')
            break
          case 'aboutUs':
            weui.alert('V R Wecoze')
            break
          case 'option':
            weui.alert('暂未开放设置')
            break
        }
      }
    }
  }
</script>

<style scoped>

</style>
