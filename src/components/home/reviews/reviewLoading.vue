<script setup lang="ts">
import Server from "../servers/server.vue";

const servers = {
  count: 0,
  servers: new Array(25).fill({
    name: "...",
    iconURL: "https://cdn.ayakobot.com/Loading.gif",
    members: "0",
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
        <img v-if="s.bannerURL" :src="s.bannerURL" class="scale-105 banner" />
      </div>
      <Server
        :name="s.name"
        :key="i"
        :members="s.members"
        :vanity="s.vanity"
        :iconURL="s.iconURL"
        :bannerURL="s.bannerURL"
      />
    </div>
  </div>
</template>
