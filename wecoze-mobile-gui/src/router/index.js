import Vue from 'vue'
import Router from 'vue-router'
import Messages from '@/components/Messages'
import Settings from '@/components/Settings'
import Addresses from '@/components/Addresses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'messages',
      component: Messages
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/addresses',
      name: 'addresses',
      component: Addresses
    }
  ]
})
