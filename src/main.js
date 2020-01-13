import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '@/mock/index.js'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.use(iView)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
