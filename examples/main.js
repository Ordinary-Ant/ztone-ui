import Vue from 'vue'
import App from './App.vue'
import ztone from '../src/index.js'
import Magnifier from '../packages/Magnifier'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
