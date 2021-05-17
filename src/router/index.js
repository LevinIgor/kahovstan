import { createRouter, createWebHistory } from 'vue-router'
import vAbout from '../components/pages/v-above'
import vCatalog from '../components/pages/v-catalogPage'
import vCart from '../components/pages/v-cart_desc'
import vCarusele from '../components/carusele'
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
        component: vCatalog
    },
    {
        path: '/carus',
        component: vCarusele
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router