import { createRouter, createWebHistory } from "vue-router";
import LoginUser from "../components/LoginUser.vue";
import CreateOrder from "../components/CreateOrder.vue";
import TrackOrder from "../components/TrackOrder.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: LoginUser },
  { path: "/create-order", component: CreateOrder },
  { path: "/track-order", component: TrackOrder },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
