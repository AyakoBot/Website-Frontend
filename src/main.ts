import { createApp } from 'vue';
import * as VueRouter from 'vue-router';

import './style.css';
import App from './App.vue';

import home from './pages/home.vue';
import premium from './pages/premium.vue';
import credits from './pages/credits.vue';
import privacy from './pages/privacy.vue';
import terms from './pages/terms.vue';
import invite from './pages/invite.vue';
import support from './pages/support.vue';
import appeals from './pages/appeals.vue';
import login from './pages/login.vue';
import unknownPage from './pages/404.vue';

const router = VueRouter.createRouter({
 history: VueRouter.createWebHistory(),
 routes: [
  { path: '/', component: home },
  { path: '/premium', component: premium },
  { path: '/credits', component: credits },
  { path: '/invite', component: invite },
  { path: '/support', component: support },
  { path: '/privacy', component: privacy },
  { path: '/terms', component: terms },
  { path: '/appeals', component: appeals },
  { path: '/login', component: login },
  {
   path: '/servers/:guildid/appeal',
   component: () => import('./pages/servers/appeal.vue'),
  },
  {
   path: '/servers/:guildid/appeal/:punishmentid',
   component: () => import('./pages/servers/punishment.vue'),
  },
  {
   path: '/servers/:guildid/appeal/:punishmentid/success',
   component: () => import('./pages/servers/appealSuccess.vue'),
  },
  { path: '/:pathMatch(.*)*', component: unknownPage },
 ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
