import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// ************filters *************
Vue.filter("ucase",function(val){
  return val.toUpperCase()
})

Vue.filter("currency",function(cur){
  return cur*200
})

Vue.filter('lower',function(lower){
  return lower.toLowerCase()
})

new Vue({
  render: h => h(App),
}).$mount('#app')
