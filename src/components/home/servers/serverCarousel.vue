<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from "vue";
import Server from "./server.vue";
import type { Server as ServerType } from "../../../types/Server";

const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const props = defineProps<{
  servers: {
    count: number;
    users: number;
    servers: ServerType[];
  };
}>();

const servers = ref(props.servers.servers);
let interval: number | null = null;
const slidesToSkip = 10;

onMounted(() => {
  Array.from(document.getElementsByClassName("server")).forEach((server) => {
    const width = server.getBoundingClientRect().width;

    server.animate(
      [
        { transform: "translateX(0)" },
        { transform: `translateX(${(width + 20) * slidesToSkip}px)` },
      ],
      {
        duration: 5000 * slidesToSkip,
        easing: "linear",
        iterations: Infinity,
      }
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
      :name="s.name"
      :key="i"
      :members="numberWithCommas(s.members)"
      :vanity="s.vanity"
      :iconURL="s.iconURL"
      :bannerURL="s.bannerURL"
      class="hover:scale-105 transition-all duration-300 server"
      draggable="false"
    />
  </div>
</template>
