import Vue from 'vue'
import App from './App.vue'
import ztone from '../src/index.js'

Vue.config.productionTip = false
Vue.use(ztone)

new Vue({
  render: h => h(App)
}).$mount('#app')
