<script setup lang="ts">
import Server from "../servers/server.vue";
import env from "../../../env.js";

const servers = {
  count: 0,
  servers: new Array(25).fill({
    name: "...",
    icon: `${env.cdn}/Loading.gif`,
    membercount: "0",
  }),
};
</script>

<template>
  <h1 class="mt-20">and has outstanding Reviews</h1>
  <div class="flex gap-10 mt-12" id="serverTrack">
    <div
      v-for="(s, i) in servers.servers"
      class="relative hover:scale-105 transition-all duration-300 servers"
    >
      <div
        class="overflow-hidden rounded-2xl w-full h-full -z-10 absolute flex justify-center items-center"
      >
        <img v-if="s.banner" :src="s.banner" class="scale-105 banner" />
      </div>
      <Server
        :name="s.name"
        :key="i"
        :membercount="s.membercount"
        :vanity="s.vanity"
        :icon="s.icon"
        :banner="s.banner"
      />
    </div>
  </div>
</template>
