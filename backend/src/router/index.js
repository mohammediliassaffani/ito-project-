import Dashboard from "vendor/laravel/breeze/stubs/inertia-react/resources/js/Pages/Dashboard";
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: './dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: './login',
        name: 'login',
        component: Login
    }
];

const router = createRouter (
    {
        history: createWebHashHistory(),
        routes
    }
)

export default router;