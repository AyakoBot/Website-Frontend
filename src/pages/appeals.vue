<script setup lang="ts">
import Cookies from "js-cookie";
import Profile from "../components/appeals/profile.vue";
import Servers from "../components/appeals/servers.vue";
import { onMounted } from "vue";
import env from "../env.js";

onMounted(() => {
  const token = Cookies.get("token");
  if (!token) {
    window.location.href = "/login";
  }
});
</script>

<template>
  <div>
    <Profile />

    <Suspense>
      <template #default>
        <Servers />
      </template>
      <template #fallback>
        <div class="flex flex-col justify-center items-center">
          <img :src="`${env.cdn}/Loading.gif`" />
          Loading your servers...
        </div>
      </template>
    </Suspense>
  </div>
</template>
