import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Feed from "../views/Feed.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/feed",
    name: "Feed",
    component: Feed
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
