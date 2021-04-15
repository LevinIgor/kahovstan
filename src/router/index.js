import { createRouter, createWebHistory } from 'vue-router'
import vAbout from '../components/pages/v-above'
import vCatalog from '../components/pages/v-catalogPage'
import vCart from '../components/pages/v-cart_desc'
const routes = [{
        path: '/',
        name: 'catalog',
        component: vCatalog
    },
    {
        path: '/about',
        name: 'about',
        component: vAbout
    },
    {
        path: '/:id',
        component: vCart
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router