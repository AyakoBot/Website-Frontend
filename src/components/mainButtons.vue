<script setup lang="ts">
import env from '../env.js';
</script>

<template>
  <div class="flex flex-wrap justify-center items-center mt-20">
    <div class="w-full md:w-auto flex justify-center items-center">
      <RouterLink
        to="/invite"
        class="opacity-0 text-[#fe3521] p-2 px-6 bg-white rounded-xl text-lg hover:text-white hover:bg-[#fe3521] transition-all font-bold"
        id="inviteAyako"
      >
        Invite Ayako
      </RouterLink>
    </div>
    <img
      :src="`${env.cdn}/website_assets/greenFlower.png`"
      class="w-10 mx-5"
      id="flowerSpin"
      draggable="false"
    />
    <div class="w-full md:w-auto flex justify-center items-center">
      <a
        href="https://support.ayakobot.com"
        class="opacity-0 bg-gradient-to-r from-[#fe3521] via-[#3dff56] to-[#fe3521] bg-[size:200%] p-2 px-6 rounded-xl text-lg transition-all bg-[position:0%_center] hover:bg-[position:-100%_center] font-bold"
        id="supportServer"
        target="_blank"
      >
        Support Server
      </a>
    </div>
  </div>
</template>

<style scoped>
#inviteAyako {
  animation: 1s ease-in-out 2s inviteAyako forwards;
}

#supportServer {
  animation: 1s ease-in-out 2s supportServer forwards;
}

#flowerSpin {
  animation: flowerSpin 1s ease-in-out 2s;
}

@keyframes flowerSpin {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 1080deg;
  }
}

@media only screen and (min-width: 768px) {
  @keyframes inviteAyako {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateX(-1.5rem);
    }
  }

  @keyframes supportServer {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateX(1.5rem);
    }
  }
}

@media only screen and (max-width: 768px) {
  @keyframes inviteAyako {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateY(-1.5rem);
    }
  }

  @keyframes supportServer {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateY(1.5rem);
    }
  }
}
</style>
