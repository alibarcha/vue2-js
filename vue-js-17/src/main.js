import Vue from 'vue'
import App from './App.vue'

// routing

// import router pakage
import VueRouter from 'vue-router'
// import pages
import Profile from './views/Profile'
import Gallery from './views/Gallery'
import Blog from './views/Blog'
import PNF from './views/PNF'

Vue.use(VueRouter)

const routes=[
  {path:'/profile' , component:Profile},
  {path:'/gallery' , component :Gallery},
  {path:'/blog', component :Blog},
  {path:'*' , component:PNF}
]

const router=new VueRouter({
  routes
})




Vue.config.productionTip = false
new Vue({
    router,
  render: h => h(App)
}).$mount('#app')
