import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Mint from '@/components/mint'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/mint',
      name: 'mint',
      component: Mint
    }
  ]
})
