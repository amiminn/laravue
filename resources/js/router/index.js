import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuth = JSON.parse(localStorage.getItem("loggedIn"));

    if (to.name === "login" && isAuth) next({ name: "dashboard" });
    if (to.name === "register" && isAuth) next({ name: "dashboard" });
    routes
        .map(({ children }) => {
            return children;
        })
        .filter(function (element) {
            return element !== undefined;
        })[0]
        .map(({ name }) => {
            if (to.name === name && !isAuth) next({ path: "/login" });
        });
    next();
});

export default router;
