import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";
import AboutPage from "../views/AboutPage.vue";

const routes: Array<RouteRecordRaw> = [
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
        redirect: "/tabs/tab1",
      },
      {
        path: "tab1",
        component: () => import("@/views/Andres-views/Tab1Page.vue"),
      },
      {
        path: "tab2",
        component: () => import("@/views/Andres-views/Tab2Page.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/Andres-views/Tab3Page.vue"),
      },
      {
        path: "tab4",
        component: () => import("@/views/Andres-views/Tab4Page.vue"),
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
    path: "/singin",
    name: "SingIn",
    component: () => import("@/views/Amaury-views/SingInPage.vue"),
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
