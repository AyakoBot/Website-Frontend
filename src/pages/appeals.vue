<script setup lang="ts">
import Cookies from "js-cookie";
import Servers from "../components/appeals/servers.vue";
import { onMounted } from "vue";

onMounted(() => {
  const token = Cookies.get("token");
  if (!token) {
    window.location.href = "/login";
  }
});
</script>

<template>
  <Servers />
</template>
