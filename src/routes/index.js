import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "@/views/UserView.vue";
import ItemView from "@/views/ItemView.vue";
import createListView from "@/views/CreateListView.js";
import { listHandler } from "./routeFunc";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      // '/' 경로에 접근하는 경우 기본으로 셋팅되는 url
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news", // path : url 정보
      name: "news",
      // component: NewsView, // component : url 주소에 해당하는 page
      component: createListView("NewsView"),
      /**
       * to : 가고자하는 page에 대한 정보
       * from : 기존 page에 대한 정보
       * => to / from 에 담겨져 있는 정보 조건에 따라 next() 분기처리 가능
       */
      beforeEnter: async (to, from, next) => {
        listHandler({ to, next });
      },
    },
    {
      path: "/ask",
      name: "ask",
      component: createListView("AskView"),
      beforeEnter: async (to, from, next) => {
        listHandler({ to, next });
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      component: createListView("JobsView"),
      beforeEnter: async (to, from, next) => {
        listHandler({ to, next });
      },
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});

export default router;
