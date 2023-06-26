import vCatalog from "@/components/catalog/v-catalog.vue";
import vCart from "@/components/cart/v-cart.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'catalog',
        component: vCatalog
    },
    {
        path: '/cart',
        name: 'cart',
        component: vCart,
        props: true
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;

