import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueParticles from 'vue-particles'
import Header from './components/Shared/Header'
import Footer from './components/Shared/Footer'

Vue.config.productionTip = false

Vue.use(VueParticles)

Vue.component('Header', Header)
Vue.component('Footer', Footer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
