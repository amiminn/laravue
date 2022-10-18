// 1. Define route components.
import { createRouter, createWebHistory } from "vue-router";
// These can be imported from other files
const routes = [
    {
      path: "/login",
      name: "login",
      component: () => import("../components/index.vue"),
    },
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
// const router = VueRouter.createRouter({
//     // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//     history: VueRouter.createWebHashHistory(),
//     routes, // short for `routes: routes`
// });
const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;
