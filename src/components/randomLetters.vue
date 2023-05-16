<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ColorFade from './colorFade.vue';

const props = defineProps<{
 text: string;
 isTitle: boolean;
 animate?: boolean;
}>();
const title = ref(props.text);
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_.,!=+~/\\*&^%$#@1234567890:;`';
const classes = `randomLetters font-['IBM_Plex_Mono'] opacity-0 ${
 props.isTitle
  ? `md:text-[10vmin] text-[20vmin] mt-72 mb-10 uppercase`
  : `md:text-[4vmin] text-[6vmin]`
}`;

onMounted(() => {
 setTimeout(() => {
  const randomLetters = document.getElementsByClassName('randomLetters');
  Array.from(randomLetters).forEach((el) => {
   el.animate(
    [
     {
      opacity: 0,
     },
     {
      opacity: 1,
     },
    ],
    {
     duration: 500,
     easing: 'ease-in-out',
     fill: 'forwards',
    },
   );
  });

  let iterations = 0;
  const interval = setInterval(() => {
   title.value = title.value
    .split('')
    .map((l, i) => {
     if (l === ' ') return l;

     if (i < iterations) return props.text[i];

     const letter = letters[Math.floor(Math.random() * letters.length)];
     return props.text[i] === props.text[i].toUpperCase() ? letter : letter.toLowerCase();
    })
    .join('');

   if (iterations >= title.value.length) clearInterval(interval);

   iterations += 1 / (props.isTitle ? 10 : 1);
  }, 30);
 }, 500);
});
</script>

<template>
 <ColorFade v-if="animate" :class="classes" :text="title" />
 <h1 v-else :class="classes">
  {{ title }}
 </h1>
</template>
