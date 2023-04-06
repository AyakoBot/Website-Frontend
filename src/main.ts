import { createApp } from "vue";
import * as VueRouter from "vue-router";
import "./style.css";
import App from "./App.vue";

import home from "./pages/home.vue";
import premium from "./pages/premium.vue";
//import art from "./pages/art.vue";
import credits from "./pages/credits.vue";
import pivacy from "./pages/privacy.vue";
import terms from "./pages/terms.vue";
import invite from "./pages/invite.vue";
import support from "./pages/support.vue";
import unknownPage from "./pages/404.vue";

const routes = [
  { path: "/", component: home },
  { path: "/premium", component: premium },
  // { path: "/art", component: art },
  { path: "/credits", component: credits },
  { path: "/invite", component: invite },
  { path: "/support", component: support },
  { path: "/privacy", component: pivacy },
  { path: "/terms", component: terms },
  { path: "/:pathMatch(.*)*", component: unknownPage },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
