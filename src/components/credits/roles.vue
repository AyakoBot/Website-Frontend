<script setup lang="ts">
const props = defineProps<{ name: string }>();
</script>

<template>
 <div class="bg-neutral-500 px-2 rounded-full">
  {{ props.name }}
 </div>
</template>
