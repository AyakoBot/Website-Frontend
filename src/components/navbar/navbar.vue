<script setup lang="ts">
import { ref } from 'vue';
import NavBarButton from './navbarButton.vue';
import env from '../../env.js';

const isMenuOpen = ref(false);

const menuToggle = () => {
 const menu = document.getElementById('menu') as HTMLElement;
 if (isMenuOpen.value) {
  setTimeout(() => {
   isMenuOpen.value = false;
  }, 300);

  menu.animate(
   [
    {
     transform: 'translateY(0)',
     opacity: 1,
    },
    {
     transform: 'translateY(-100%)',
     opacity: 0,
    },
   ],
   {
    duration: 300,
    easing: 'ease-in-out',
    fill: 'forwards',
   },
  );
 } else {
  isMenuOpen.value = true;

  menu.animate(
   [
    {
     transform: 'translateY(-100%)',
     opacity: 0,
    },
    {
     transform: 'translateY(0)',
     opacity: 1,
    },
   ],
   {
    duration: 300,
    easing: 'ease-in-out',
    fill: 'forwards',
   },
  );
 }
};
</script>

<template>
 <div class="bg-neutral-900/75 shadow-main z-50">
  <nav class="container mx-auto px-4 py-2 flex items-center justify-between">
   <router-link to="/">
    <div class="flex items-center">
     <img class="w-10 h-auto" :src="`${env.cdn}/website_assets/NavBarIcon.png`" alt="Ayako logo" />
     <h1 class="text-lg ml-2 font-bold text-white">Ayako</h1>
     <p class="text-sm text-red-600 mt-1 ml-3">Discord Bot</p>
    </div>
   </router-link>
   <div class="hidden xl:flex items-center">
    <!-- <NavBarButton link="appeals" text="Appeals" /> -->
    <NavBarButton link="invite" text="Invite" />
    <NavBarButton link="support" text="Support" />
    <NavBarButton link="premium" text="👑Premium👑" class="text-yellow-500" />
   </div>
   <div class="flex xl:hidden">
    <button
     class="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
     @click="() => menuToggle()"
    >
     <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Menu</title>
      <path
       fill-rule="evenodd"
       d="M21 5H3a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2zm0 8H3a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2zm0 8H3a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2z"
      ></path>
     </svg>
    </button>
   </div>
  </nav>
  <div
   id="menu"
   class="xl:hidden bg-neutral-900/75 absolute w-full shadow-main"
   :class="{ hidden: !isMenuOpen }"
  >
   <!-- <NavBarButton link="appeals" text="Punishment Appeals" /> -->
   <NavBarButton link="invite" text="Invite" />
   <NavBarButton link="support" text="Support" />
   <NavBarButton link="premium" text="👑Premium👑" class="text-yellow-500" />
  </div>
 </div>
</template>
