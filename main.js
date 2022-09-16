import Home from './home.js'
import About from './about.js'

const { createApp } = Vue

const app = createApp({
    data() {
        return {
            nama_toko: 'JatimShop',
        }
    }
})


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})
  
app.use(router)
app.mount('#app')