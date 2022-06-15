import Vue from 'vue'
import App from './App.vue'


// import router pakage
import VueRouter from 'vue-router'

// import components and pages
import Home from './views/Home'
import About from './views/About'
import Setting from './views/Setting'
import User from './views/User'
import PNF from './views/PNF'


Vue.use(VueRouter)

const  routes=[
    {path:'/', component:Home},
    {path:'/about', component:About},
    {path:'/setting', component:Setting},
    {path:'/user/:id' , component:User},
    {path:'*' , component:PNF}
  ]

const router=new VueRouter({
  routes
})


Vue.config.productionTip = false
new Vue({
 router,
  render: h => h(App),
}).$mount('#app')
