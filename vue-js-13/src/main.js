import Vue from 'vue'
import App from './App.vue'

// router pkg
import VueRouter from 'vue-router'
// import  components
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import  Login from './views/Login'
import PageNotFound from './views/PageNotFound'


Vue.use(VueRouter)

const routes=[
  {path:'/',component:Home},
  {path:'/about',component:About},
  {path:'/contact',component:Contact},
  {path:'/login',component:Login},
  {path:'*' , component :PageNotFound}
]
const router = new VueRouter({
  routes
})


// ************* custom directives *********************
  // size directive
Vue.directive('size',{
  bind(el,binding){
    if(binding.value=='small'){
      
      el.style.fontSize="20px"
    }
    else if(binding.value=='large'){
      el.style.fontSize="40px"

    }
  }
})

// color directive
Vue.directive('color',{
  bind(el,binding){
    if(binding.value=='red'){

      el.style.color="red"
    }
    else if(binding.value=='light'){
      el.style.color="lightgreen"

    }
  }
})









Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
