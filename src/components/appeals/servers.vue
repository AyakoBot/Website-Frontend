<script setup lang="ts">
import Cookies from "js-cookie";
import Server from "./server.vue";
import env from "../../env.js";

const token = Cookies.get("token");
if (!token) window.location.href = "/login";

const res = (await fetch(`${env.api}/appeals/servers`, {
  headers: {
    Authorization: token as string,
  },
}).then((r) => r.json())) as {
  guildid: string;
  name: string;
  icon: string;
  banner: string;
  invite: string;
  membercount: string;
}[];
</script>

<template>
  <div
    :class="`grid auto-rows-max grid-cols-1 md:grid-cols-${
      res.length < 2 ? res.length : 2
    } lg:grid-cols-${res.length < 3 ? res.length : 3} 2xl:grid-cols-${
      res.length < 4 ? res.length : 4
    } gap-8 mt-10 md:mx-10 mx-1`"
  >
    <Server v-for="s in res" :key="s.guildid" :props="s" />
  </div>
  <div v-if="!res.length" class="flex flex-col justify-center items-center">
    <div>You have no punishments on any servers!</div>
    <div class="mt-1">At least none you could appeal ¯\_(ツ)_/¯</div>
  </div>
</template>
