import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import CsPc from './views/CSPC'
import ThreeDPrint from './views/3DPrint'
import Contact from './views/Contact'

import UnderConstructions from './views/Shared/UnderConst'
import PageOutError from './views/Shared/404Error.vue' 

/* eslint-disable */

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ueber-uns',
      name: 'About',
      component: About
    },
    {
      path: '/computerschmiede-pc',
      name: 'CsPC',
      component: CsPc
    },
    {
      path: '/3d-druck',
      name: '3DPrint',
      component: ThreeDPrint
    },
    {
      path: '/kontakt',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/under_const',
      name: 'Under Constructions',
      component: UnderConstructions
    },
    {
      path: '/404',
      name: '404Error',
      component: PageOutError
    }
  ]
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
