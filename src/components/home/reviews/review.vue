<script setup lang="ts">
import env from '../../../env.js';

const props = defineProps<{
 content: string;
 score: string;
 username: string;
 avatar: string;
 index: number;
}>();

const pfpError = (index: number) => {
 const pfp = document.getElementById(`pfp-${index}`) as HTMLImageElement | null;
 if (pfp) pfp.src = `${env.cdn}/website_assets/UnknownPfp.png`;
};
</script>

<template>
 <a
  :id="`review-${props.index}`"
  target="_blank"
  class="w-48 h-28 bg-gradient-to-br from-red-900 to-transparent rounded-2xl transition-all duration-300 ease-in-out"
 >
  <div
   :id="`reviewBaseData-${props.index}`"
   class="relative flex p-5 w-48 h-28 justify-between items-center rounded-2xl shadow-main"
  >
   <div class="min-w-11 min-h-11 rounded-full bg-neutral-900/75 flex justify-center items-center">
    <img
     :id="`pfp-${props.index}`"
     :src="props.avatar ?? `${env.cdn}/website_assets/UnknownPfp.png`"
     class="min-w-[2.5rem] max-w-[2.5rem] h-auto rounded-full shadow-[0_0.1em_1em_0.5em_rgba(23,23,23,1)]"
     draggable="false"
     @error="() => pfpError(props.index)"
    />
   </div>
   <div class="flex flex-col min-w-[80%] gap-2 ml-3 pr-3">
    <div
     class="text-xs text-center break-all"
     style="
      text-shadow: #000 1px 0px 10px, #000 1px 0px 10px, #000 1px 0px 10px, #000 1px 0px 10px,
       #000 1px 0px 10px;
     "
    >
     {{ props.username.slice(0, 30) }}{{ props.username.length > 30 ? '...' : '' }}
    </div>
    <div class="flex justify-center items-center">
     <img
      v-for="i in Number(props.score) / 20"
      :key="i"
      src="https://cdn.discordapp.com/emojis/1089123327467081748.webp"
      class="w-3 h-auto mx-0.5"
     />
    </div>
   </div>
  </div>
 </a>
</template>
