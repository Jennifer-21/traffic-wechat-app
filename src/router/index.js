import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import begin from '@/components/begin'
import finish from '@/components/finish'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/begin',
      name: 'begin',
      component: begin
    },
    {
      path: '/finish',
      name: 'finish',
      component: finish
    }
  ]
})
