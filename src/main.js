import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { store } from './store/index'
import './registerServiceWorker'
import VueParticles from 'vue-particles'
import Header from './components/Shared/Header'
import Footer from './components/Shared/Footer'
import GoogleMaps from './components/Shared/GoogleMaps'

Vue.config.productionTip = false

Vue.use(VueParticles)

Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('google-maps', GoogleMaps)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
