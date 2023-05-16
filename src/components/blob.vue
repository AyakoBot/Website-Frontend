<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useMouse } from '@vueuse/core';

const { x, y } = useMouse();
const opacityKeyframes = [{ opacity: `0%` }, { opacity: `50%` }];

onMounted(() => {
 const blob = document.getElementsByClassName('blob');

 Array.from(blob)?.forEach((b) => {
  b.animate(opacityKeyframes, {
   duration: 3000,
   delay: 2000,
   fill: 'forwards',
  });
 });

 watch([x, y], () => {
  Array.from(blob)?.forEach((b) => {
   b.animate(
    {
     left: `${x.value - window.scrollX - 130}px`,
     top: `${y.value - window.scrollY - 125}px`,
    },
    { duration: 3000, fill: 'forwards' },
   );
  });
 });
});

const classes =
 'bg-white h-52 fixed aspect-square left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#b0ff00] to-[#fe3521] blur-[150px] opacity-0 blob z-[-9998] overflow-hidden';
</script>

<template>
 <div class="h-full w-full overflow-hidden content-none">
  <div id="rotate" :class="classes" />
  <div id="rotateFaster" :class="classes" />
 </div>
</template>

<style scoped>
#rotate {
 animation: spin 10s infinite;
}

#rotateFaster {
 animation: spinFaster 5s infinite;
}

@keyframes spin {
 from {
  transform: rotate(0deg);
 }

 50% {
  scale: 1 1.5;
 }

 to {
  transform: rotate(360deg);
 }
}

@keyframes spinFaster {
 from {
  transform: rotate(0deg);
  scale: 1 1.7;
 }

 50% {
  scale: 1.7 1;
 }

 to {
  transform: rotate(-360deg);
  scale: 1 1.7;
 }
}
</style>
