import Vue from 'vue'
import App from './App.vue'
import All from '../src/index.js'

Vue.config.productionTip = false

Vue.use(All)

new Vue({
  render: h => h(App)
}).$mount('#app')
