import { createRouter, createWebHistory } from "vue-router";
import vAbout from "../components/pages/v-above";
import vCatalog from "../components/pages/v-catalogPage";
import vBooking from "../components/pages/v-booking";
import vEdit from "../components/pages/v-productEdit";
import vLogin from "../components/v-popup-login";
import vFaq from "../components/pages/v-faq";
import vProductCart from "../components/pages/v-product-cart";
import vContact from "../components/pages/v-contact";
import v404 from "../components/pages/404";

const routes = [{
        path: "/",
        name: "catalog",
        component: vCatalog,
        meta: { title: "Kahovstan" },
    },
    {
        path: "/catalog",
        component: vCatalog,
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
    {
        path: "/auth",
        component: vLogin,
    },
    {
        path: "/FAQ",
        component: vFaq,
    },
    {
        path: "/contact",
        component: vContact,
    }


];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(() => {
    document.title = "KAHOVSTAN";
});
export default router;