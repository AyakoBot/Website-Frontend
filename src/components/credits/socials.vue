<script setup lang="ts">
const props = defineProps<{ name: string; link: string }>();
</script>

<template>
  <div class="hover:bg-neutral-500 transition-all duration-300 px-2 rounded-2xl">
    <a :href="props.link" target="_blank">{{ props.name }}</a>
  </div>
</template>
