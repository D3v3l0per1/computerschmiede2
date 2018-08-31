import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import CsPc from './views/CSPC'
import ThreeDPrint from './views/3DPrint'
import Contact from './views/Contact'

import UnderConstructions from './views/Shared/UnderConst'

<<<<<<< HEAD
/* eslint-disable */

Vue.use(Router)
const router = new Router({
=======
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
>>>>>>> aa06ae9741f732fdcce923f86cb7dac71ee059d6
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
    }
  ]
})
<<<<<<< HEAD

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
=======
>>>>>>> aa06ae9741f732fdcce923f86cb7dac71ee059d6
