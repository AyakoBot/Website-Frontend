<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue';
import Server from './server.vue';
import type { Server as ServerType } from '../../../types/Server';

const numberWithCommas = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const props = defineProps<{
 servers: {
  count: string;
  users: string;
  servers: ServerType[];
 };
}>();

const servers = ref(props.servers.servers);
let interval: NodeJS.Timer | null = null;
const slidesToSkip = 10;

onMounted(() => {
 Array.from(document.getElementsByClassName('server')).forEach((server) => {
  const { width } = server.getBoundingClientRect();

  server.animate(
   [{ transform: 'translateX(0)' }, { transform: `translateX(${(width + 20) * slidesToSkip}px)` }],
   {
    duration: 5000 * slidesToSkip,
    easing: 'linear',
    iterations: Infinity,
   },
  );
 });

 interval = setInterval(() => {
  new Array(slidesToSkip - 1).fill(0).forEach(() => {
   servers.value.unshift(servers.value.pop() as ServerType);
  });
 }, 5000 * slidesToSkip);
});

onBeforeUnmount(() => (interval ? clearInterval(interval) : null));
onbeforeunload = () => (interval ? clearInterval(interval) : null);
</script>

<template>
 <div class="flex gap-10 mt-12 justify-end items-center">
  <Server
   v-for="(s, i) in servers"
   :key="i"
   :name="s.name"
   :membercount="numberWithCommas(Number(s.membercount))"
   :vanity="s.vanity"
   :icon="s.icon"
   :banner="s.banner"
   class="hover:scale-105 transition-all duration-300 server"
   draggable="false"
  />
 </div>
</template>
