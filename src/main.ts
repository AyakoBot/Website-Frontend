import { createApp } from 'vue';
import * as VueRouter from 'vue-router';

import './style.css';
import App from './App.vue';

import home from './pages/home.vue';

const router = VueRouter.createRouter({
 history: VueRouter.createWebHistory(),
 routes: [
  { path: '/', component: home },
  { path: '/premium', component: () => import('./pages/premium.vue') },
  { path: '/credits', component: () => import('./pages/credits.vue') },
  { path: '/invite', component: () => import('./pages/invite.vue') },
  { path: '/support', component: () => import('./pages/support.vue') },
  { path: '/privacy', component: () => import('./pages/privacy.vue') },
  { path: '/terms', component: () => import('./pages/terms.vue') },
  { path: '/appeals', component: () => import('./pages/appeals.vue') },
  { path: '/login', component: () => import('./pages/login.vue') },
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
  { path: '/:pathMatch(.*)*', component: () => import('./pages/404.vue') },
 ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
