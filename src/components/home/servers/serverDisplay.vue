<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ServerCarousel from './serverCarousel.vue';
import ColorFade from '../../colorFade.vue';
import type { Server as ServerType } from '../../../types/Server';
import env from '../../../env';

const servers = (await fetch(`${env.api}/servers`).then((r) => r.json())) as {
 count: string;
 users: string;
 servers: ServerType[];
};
servers.servers.sort(() => 0.5 - Math.random());
const counters: Map<number, NodeJS.Timer> = new Map();

const animateCountUp = (targetValue: number, refValue: typeof serverCount | typeof userCount) => {
 const frameDuration = 1000 / 60;
 const animationDuration = 2000;
 const totalFrames = Math.round(animationDuration / frameDuration);
 const easeOutQuad = (t: number) => t * (2 - t);

 let frame = 0;
 counters.set(
  targetValue,
  setInterval(() => {
   frame += 1;
   const progress = easeOutQuad(frame / totalFrames);
   const currentCount = Math.round(targetValue * progress);

   if (refValue.value !== currentCount) refValue.value = currentCount;
   if (frame === totalFrames) clearInterval(counters.get(targetValue));
  }, frameDuration),
 );
};

const serverCount = ref(0);
const userCount = ref(0);

onMounted(() => {
 const counterElements = document.getElementById('counters');
 const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
   if (e.isIntersecting) {
    animateCountUp(Number(servers.count), serverCount);
    animateCountUp(Number(servers.users), userCount);
   } else {
    counters.forEach((c) => clearInterval(c));
    counters.clear();
   }
  });
 });

 if (counterElements) observer.observe(counterElements);
});

const numberWithCommas = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
</script>

<template>
 <div>
  <h1 id="counters" class="mt-60">
   Ayako manages
   <ColorFade :text="String(numberWithCommas(serverCount))" />
   Discord communities with
   <ColorFade :text="String(numberWithCommas(userCount))" />
   members
  </h1>

  <ServerCarousel :servers="servers" />
 </div>
</template>
