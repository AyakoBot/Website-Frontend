<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
 setTimeout(() => {
  window.open('https://invite.ayakobot.com/', '_blank');
  window.location.href = '/';
 }, 500);
});
</script>

<template>
 <div></div>
</template>
