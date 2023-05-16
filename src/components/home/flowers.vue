<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { onMounted, onBeforeUnmount } from 'vue';
import env from '../../env.js';

const flower = `${env.cdn}/website_assets/flower.png`;
const animationOptions = {
 duration: 2000,
 delay: 500,
 fill: 'forwards',
 easing: 'cubic-bezier(0.03, 0.82, 0.13, 1.04)',
};

const md = useWindowSize().width.value < 768;

onMounted(() => {
 document.getElementById('flower-1')?.animate(
  [
   { top: '40vmin', opacity: '0' },
   { top: '17vmin', opacity: '1' },
  ],
  animationOptions as KeyframeAnimationOptions,
 );

 document.getElementById('flower-2')?.animate(
  [
   {
    left: 'calc(50% - 7vmin)',
    top: md ? '45vmin' : '37vmin',
    opacity: '0',
    rotate: '-45deg',
   },
   {
    left: md ? 'calc(50% - 45vmin)' : 'calc(50% - 30vmin)',
    top: md ? '45vmin' : '37vmin',
    opacity: '1',
    rotate: '-80deg',
   },
  ],
  animationOptions as KeyframeAnimationOptions,
 );

 document.getElementById('flower-3')?.animate(
  [
   {
    left: 'calc(50% - 6vmin)',
    top: md ? '46vmin' : '38vmin',
    opacity: '0',
    rotate: '12deg',
   },
   {
    left: md ? 'calc(50% + 32vmin)' : 'calc(50% + 17vmin)',
    top: md ? '42vmin' : '38vmin',
    opacity: '1',
    rotate: '50deg',
   },
  ],
  animationOptions as KeyframeAnimationOptions,
 );

 document.getElementById('flower-4')?.animate(
  [
   {
    left: 'calc(50% - 3vmin)',
    top: md ? '41vmin' : '40vmin',
    opacity: '0',
    rotate: '-10deg',
   },
   {
    left: md ? 'calc(50% + 17vmin)' : 'calc(50% + 10vmin)',
    top: '32vmin',
    opacity: '1',
    rotate: '-35deg',
   },
  ],
  animationOptions as KeyframeAnimationOptions,
 );

 document.getElementById('flower-5')?.animate(
  [
   {
    left: 'calc(50% - 3vmin)',
    top: md ? '41vmin' : '40vmin',
    opacity: '0',
    rotate: '80deg',
   },
   {
    left: md ? 'calc(50% - 24vmin)' : 'calc(50% - 17vmin)',
    top: '33vmin',
    opacity: '1',
    rotate: '100deg',
   },
  ],
  animationOptions as KeyframeAnimationOptions,
 );
});

onBeforeUnmount(() => deleteElements());
onbeforeunload = () => deleteElements();

const deleteElements = () => {
 document.getElementById('flower-1')?.remove();
 document.getElementById('flower-2')?.remove();
 document.getElementById('flower-3')?.remove();
 document.getElementById('flower-4')?.remove();
 document.getElementById('flower-5')?.remove();
};
</script>

<template>
 <div class="flex justify-center items-center">
  <img id="flower-1" class="absolute w-[18vmin] h-auto opacity-0" :src="flower" draggable="false" />
  <img
   id="flower-2"
   class="absolute w-[13vmin] h-auto opacity-0 -rotate-45"
   :src="flower"
   draggable="false"
  />
  <img id="flower-3" class="absolute w-[11vmin] h-auto opacity-0" :src="flower" draggable="false" />
  <img
   id="flower-4"
   class="absolute w-[5vmin] h-auto opacity-0 rotate-12"
   :src="flower"
   draggable="false"
  />
  <img id="flower-5" class="absolute w-[4vmin] h-auto opacity-0" :src="flower" draggable="false" />
 </div>
</template>

<style scoped>
#flower-1 {
 animation: flower-1 240s linear infinite;
}

@keyframes flower-1 {
 from {
  transform: rotate(0deg);
 }

 to {
  transform: rotate(360deg);
 }
}

#flower-2 {
 animation: flower-2 110s linear infinite;
}

@keyframes flower-2 {
 from {
  transform: rotate(0deg);
 }

 to {
  transform: rotate(-360deg);
 }
}

#flower-3 {
 animation: flower-3 90s linear infinite;
}

@keyframes flower-3 {
 from {
  transform: rotate(0deg);
 }

 to {
  transform: rotate(360deg);
 }
}
</style>
