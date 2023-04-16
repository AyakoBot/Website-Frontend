<script setup lang="ts">
import env from "../env.js";
</script>

<template>
  <div class="h-screen flex items-center justify-center -mt-20">
    <div class="max-w-lg mx-auto text-center">
      <img
        :src="`${env.cdn}/website_assets/ayakodevil.png`"
        class="w-30 h-auto rounded-2xl m-auto"
        draggable="false"
      />
      <p class="mt-6">Premium?</p>
      <p class="text-xl mb-3">No one likes Pay-Walls.</p>
      <p class="text-xl mb-3">Neither do we</p>
      <p class="text-2xl">Consider donating</p>
      <p class="text-xl mb-6">and help Ayako stay free forever</p>
      <a
        href="https://support.ayakobot.com"
        class="bg-gradient-to-r from-[#fe3521] via-[#3dff56] to-[#fe3521] bg-[size:200%] p-2 px-6 rounded-xl text-lg transition-all bg-[position:0%_center] hover:bg-[position:-100%_center] font-bold"
        target="_blank"
      >
        Donate
      </a>
    </div>
  </div>
</template>
