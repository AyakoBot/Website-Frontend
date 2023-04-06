<script setup lang="ts">
const props = defineProps<{ link: string; text: string; absolute?: boolean }>();

const classes =
  "w-full text-left text-[5vmin] md:text-[2.5vmin] mx-full md:mx-3 px-2 hover:bg-neutral-600/50 transition-all ease-in-out delay-75 py-3 md:p-1 rounded-2xl";
</script>

<template>
  <RouterLink :to="`/${props.link}`" :class="classes" v-if="!props.absolute">{{
    props.text
  }}</RouterLink>
  <a v-else :href="props.link" :class="classes" target="_blank">
    {{ props.text }}
  </a>
</template>
