/* eslint-disable */
import { createRouter, createWebHistory } from "@ionic/vue-router";
import TabsPage from "../views/TabsPage.vue";
import TabsStorePage from "../views/Amaury-views/TabsStorePage.vue";
import AboutPage from "../views/AboutPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/engine",
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/home",
      },
      {
        path: "home",
        component: () => import("@/views/Amaury-views/HomePage.vue"),
      },
      {
        path: "userorders",
        component: () => import("@/views/Amaury-views/UserOrders.vue"),
      },
      {
        path: "store/:id",
        component: () => import("@/views/Amaury-views/StorePage.vue"),
      },
      {
        path: "/guielditem/:it/:id/:name/:price/:open",
        component: () => import("@/views/Amaury-views/GuildsOfItem.vue"),
      },
      {
        path: "guildsofuser",
        component: () => import("@/views/Amaury-views/GuildsOfUser.vue"),
      },
      {
        path: "tab4",
        component: () => import("@/views/Andres-views/Tab4Page.vue"),
      },
    ],
  },
  {
    path: "/tabs/store",
    component: TabsStorePage,
    children: [
      {
        path: "",
        redirect: "/tabs/store/home",
      },
      {
        path: "home",
        component: () => import("@/views/Amaury-views/HomeStorePage.vue"),
      },
      {
        path: "home2",
        component: () => import("@/views/Amaury-views/HomeStorePage.vue"),
      },
      {
        path: "home3",
        component: () => import("@/views/Amaury-views/HomeStorePage.vue"),
      },
      {
        path: "home4",
        component: () => import("@/views/Amaury-views/HomeStorePage.vue"),
      },
    ],
  },
  {
    path: "/startpage",
    name: "StartPage",
    component: () => import("@/views/Amaury-views/StartPage.vue"),
  },
  {
    path: "/typeuserpage",
    name: "TypeUserPage",
    component: () => import("@/views/Amaury-views/TypeUserPage.vue"),
  },
  {
    path: "/login/:typeuser",
    name: "Login",
    component: () => import("@/views/Amaury-views/LoginPage.vue"),
  },
  {
    path: "/singin/:typeuser",
    name: "SingIn",
    component: () => import("@/views/Amaury-views/SingInUserPage.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/AboutPage.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/views/TestPage.vue"),
  },
  {
    path: "/new",
    name: "New",
    component: () => import("@/views/NewPage.vue"),
  },
  {
    path: "/engine",
    name: "Engine",
    component: () => import("@/views/EngineView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
