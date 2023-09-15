import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import MyApp from "../components/MyApp.vue";

const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },

    {
        path: "/login",
        name: "login",
        component: Login,
    },

    {
        path: "/myapp",
        name: "myapp",
        component: MyApp,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
