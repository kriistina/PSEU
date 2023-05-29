import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",

    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/profile",
    name: "Profile",

    component: () => import("../views/ProfileView.vue"),
  },
  {
    path: "/novosti",
    name: "Najnovije",

    component: () => import("../views/NewsView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
