import NotFound from "../Views/404.vue";
import Login from "../Views/auth/login.vue";
import Register from "../Views/auth/register.vue";
import Home from "../Views/index.vue";
import Dashboard from "../Views/dashboard/dashboard.vue";
import About from "../Views/dashboard/about.vue";
import Landingpage from "../Views/Landingpage/index.vue";

const routes = [
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/",
        name: "landingpage",
        component: Landingpage,
    },
    {
        path: "/dashboard",
        name: "homepage",
        component: Home,
        children: [
            {
                path: "",
                name: "dashboard",
                component: Dashboard,
            },
            {
                path: "/about",
                name: "about",
                component: About,
            },
        ],
    },
];

export default routes;
