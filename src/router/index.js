import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/home/AppHome'
import Bed from '@/components/bed/Bed'
import Sep from '@/components/sep/Sep'
import User from '@/components/user/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/pembuatan/sep',
      name: 'GetSep',
      component: Sep
    },
    {
      path: '/atur/bed',
      name: 'GetBed',
      component: Bed
    },
    {
      path: '/atur/user',
      name: 'GetUser',
      component: User
    }
  ],
  mode: 'history'
})
