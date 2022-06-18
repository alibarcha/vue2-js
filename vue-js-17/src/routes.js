 import {createWebHistory,createRouter} from 'vue-router'

//  import components
import Profile from './views/Profile'
import Gallery from './views/Gallery'
import Blog from './views/Blog'


// define routes
const routes=[
    {
    name:'Profile',
    path:'/profile',
    component:Profile
    },
    {
        name:'Gallery',
        path:'/gallery',
        component:Gallery
    },
    {
        name:Blog,
        path:'/blog',
        component:Blog
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;