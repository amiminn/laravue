import Home from "../Views/index.vue";
import Login from "../Views/auth/login.vue";
import Dashboard from "../Views/dashboard/dashboard.vue";
import About from "../Views/dashboard/about.vue";

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/",
        name: "homepage",
        component: Home,
        children: [
            {
                path: "",
                name: "Dashboard",
                component: Dashboard,
            },
            {
                path: "/about",
                name: "About",
                component: About,
            },
        ],
    },
];

export default routes;
