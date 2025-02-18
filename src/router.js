import { createRouter, createWebHashHistory } from "vue-router";

import About from "./views/About.vue";
import Home from "./views/Home.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: About,
      path: "/about",
    },
    {
      component: Home,
      path: "/",
    },
  ],
});
