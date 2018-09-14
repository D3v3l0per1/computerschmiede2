import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import CsPc from './views/CSPC'
import ThreeDPrint from './views/3DPrint'
import Contact from './views/Contact'
import SignIn from './views/User/SignIn'
import SignUp from './views/User/SignUp'

import EditPage from './views/EditPage/Home'

import UnderConstructions from './views/Shared/UnderConst'
import PageOutError from './views/Shared/404Error.vue' 
import authGuard from './auth-guard';

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
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
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
      path: '/edit',
      name: 'Edit Page',
      component: EditPage,
      beforeEnter: authGuard
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
  console.log('Loaded')
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
