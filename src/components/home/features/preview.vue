<script setup lang="ts">
const props = defineProps<{
 subtitle: string;
 title: string;
 i: number;
 img: string;
 placeholderImg: string;
}>();
const subtitleArgs = props.subtitle.split(/\s/g);
let isHovering = false;
let isShowing = false;

const hovering = (hovers: boolean) => {
 const subtitles = document.getElementsByClassName(`subtitles-${props.i}`);
 const img = document.getElementById(`img-${props.i}`) as HTMLElement;
 const placeholderImg = document.getElementById(`placeholderImg-${props.i}`) as HTMLElement;
 const hoverMeText = document.getElementById(`hoverMe-${props.i}`) as HTMLElement;

 if (hovers) {
  isHovering = hovers;
  if (isShowing) return;
  isShowing = true;

  [...Array.from(subtitles), img].forEach((subtitle, i) => {
   subtitle.animate(
    [
     { opacity: 0, transform: 'translateY(40%)' },
     { opacity: 1, transform: 'translateY(0)' },
    ],
    {
     duration: 300,
     easing: 'cubic-bezier(0.9, 0.06, 0.15, 0.9)',
     delay: i * 70,
     fill: 'forwards',
    },
   );
  });

  [placeholderImg, hoverMeText].forEach((e) =>
   e.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 300,
    easing: 'cubic-bezier(0.9, 0.06, 0.15, 0.9)',
    fill: 'forwards',
   }),
  );
 } else {
  isHovering = hovers;
  setTimeout(() => {
   if (isHovering) return;
   isShowing = false;

   [...Array.from(subtitles), img].forEach((subtitle, i) => {
    subtitle.animate(
     [
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 0, transform: 'translateY(40%)' },
     ],
     {
      duration: 300,
      easing: 'cubic-bezier(0.9, 0.06, 0.15, 0.9)',
      delay: i * 50,
      fill: 'forwards',
     },
    );
   });

   [placeholderImg, hoverMeText].forEach((e) =>
    e.animate([{ opacity: 0 }, { opacity: 1 }], {
     duration: 300,
     easing: 'cubic-bezier(0.9, 0.06, 0.15, 0.9)',
     fill: 'forwards',
     delay: (subtitles.length + 1) * 70,
    }),
   );
  }, 1500);
 }
};
</script>

<template>
 <div
  class="border-solid border-[0.5vmin] h-96 xl:h-[70vmin] relative border-orange-700 w-11/12 xl:w-3/12 aspect-[1/1.6] before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[linear-gradient(130deg,_transparent_0%_33%,_rgb(236,64,122)_66%,_rgb(253,196,53)_100%)] before:bg-[length:300%_300%] before:bg-[0%_0%] before:transition-all before:duration-1000 before:ease-in-out hover:before:bg-[100%_100%] before:-z-10 hover:border-[rgba(0,0,0,0)] ease-in-out duration-1000 hover:before:[scale:1.08_1.03] rounded-2xl before:rounded-2xl"
  @mouseenter="() => hovering(true)"
  @mouseleave="() => hovering(false)"
 >
  <div
   class="h-[calc(100%-1.25rem)] w-[calc(100%-1.25rem)] p-0 md:p-5 pt-4 flex justify-between items-center flex-col m-auto"
  >
   <h3 :id="`title-${props.i}`" class="text-md">
    {{ props.title }}
   </h3>
   <h4 :id="`subtitle-${props.i}`" class="text-[.8rem] mt-3">
    <span
     v-for="(arg, j) in subtitleArgs"
     :key="j"
     :class="`inline-block m-[0vmin_0.3vmin] relative translate-y-[40%] transition-none opacity-0 subtitles-${props.i}`"
     >{{ arg }}</span
    >
   </h4>
   <img
    :id="`img-${props.i}`"
    :src="props.img"
    class="mt-5 rounded-2xl opacity-0 h-auto w-auto max-h-60 shadow-main"
    width="auto"
   />
   <img
    :id="`placeholderImg-${props.i}`"
    :src="props.placeholderImg"
    class="mt-5 rounded-2xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 sm:w-1/2 w-1/2 md:w-1/4 xl:w-1/2 -z-20"
   />
   <div :id="`hoverMe-${props.i}`" class="text-sm text-neutral-300/75">Hover me</div>
  </div>
 </div>
</template>
