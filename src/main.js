import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { store } from './store/index'
import * as firebase from 'firebase'
import './registerServiceWorker'
import VueParticles from 'vue-particles'
import Header from './components/Shared/Header'
import Footer from './components/Shared/Footer'
import AlertCmp from './components/Shared/Alert' 
import GoogleMaps from './components/Shared/GoogleMaps'
import Meta from 'vue-meta'
import CMSBar from './components/Shared/Edit/CMSBar'
import VueAnime from 'vue-animejs'
import EditThreeDExampleDialog from './views/3DPrint/Edit/EditThreeDExampleDetailsDialog.vue'

import DateFilter from './filters/date'

import EditNav from './views/EditPage/SideNav'

Vue.config.productionTip = false

Vue.use(VueParticles)
Vue.use(VueAnime)
Vue.use(Meta, {
  keyName: 'metaInfo'
})

Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('app-alert', AlertCmp)
Vue.component('google-maps', GoogleMaps)
Vue.component('app-edit-3dexample-dialog', EditThreeDExampleDialog)

Vue.component('app-cms-bar', CMSBar)
Vue.component('app-edit-sidenav', EditNav)

Vue.filter('date', DateFilter)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyB3iiY8_6mOw9ncbUsWrSWXJ_FnKrDuaEE",
      authDomain: "computerschmiede-jenbach.firebaseapp.com",
      databaseURL: "https://computerschmiede-jenbach.firebaseio.com",
      projectId: "computerschmiede-jenbach",
      storageBucket: "computerschmiede-jenbach.appspot.com",
      messagingSenderId: "539826549672"
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('load3DExamples')
  }
}).$mount('#app')
