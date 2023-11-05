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
    path: "/resume",
    name: "resume",
    component: () => import("../views/ResumeView.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/ProjectView.vue"),
  },
  {
    path: "/rewards",
    name: "rewards",
    component: () => import("../views/RewardsView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
