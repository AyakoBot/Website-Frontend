<script setup lang="ts">
const { props } = defineProps<{
  props: {
    guildid: string;
    name: string;
    icon: string;
    banner: string;
    invite: string;
    membercount: string;
  };
}>();
</script>

<template>
  <RouterLink
    :to="`/appeals/${props.guildid}`"
    class="border-solid border-[0.5vmin] border-orange-700 before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[linear-gradient(130deg,_transparent_0%_33%,_rgb(236,64,122)_66%,_rgb(253,196,53)_100%)] before:bg-[length:300%_300%] before:bg-[0%_0%] before:transition-all before:duration-1000 before:ease-in-out hover:before:bg-[100%_100%] before:-z-10 hover:border-[rgba(0,0,0,0)] ease-in-out duration-1000 hover:before:[scale:1.1_1.2] rounded-2xl before:rounded-2xl relative text-md"
  >
    <div
      class="flex flex-col justify-center items-center cursor-pointer h-full w-full"
    >
      <img :src="props.icon" class="rounded-full w-12 shadow-main" />
      <div class="mt-2">{{ props.name }}</div>
    </div>
  </RouterLink>
</template>
