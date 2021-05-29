import { createRouter, createWebHistory } from "vue-router";
import vAbout from "../components/pages/v-above";
import vCatalog from "../components/pages/v-catalogPage";
import vBooking from "../components/pages/v-booking";
import vEdit from "../components/pages/v-productEdit";

import vProductCart from "../components/pages/v-product-cart";

const routes = [{
        path: "/catalog",
        name: "catalog",
        component: vCatalog,
    },
    {
        path: "/about",
        name: "about",
        component: vAbout,
    },
    {
        path: "/booking",
        component: vBooking,
    },

    {
        path: "/catalog/:id",
        component: vProductCart,
    },
    {
        path: "/catalog/edit",
        component: vEdit,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;