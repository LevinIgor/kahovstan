import { createRouter, createWebHistory } from 'vue-router'
import vAbout from '../components/pages/v-above'
import vCatalog from '../components/pages/v-catalogPage'
import vBooking from '../components/pages/v-booking'
import vCarusele from '../components/carusele'

import vProductCart from '../components/pages/v-product-cart'

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
        path: '/booking',
        component: vBooking
    },
    {
        path: '/productCart',
        component: vProductCart
    },
    {
        path: '/catalog/:id',
        component: vProductCart
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router