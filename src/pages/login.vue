<script setup lang="ts">
import Cookies from "js-cookie";
import * as Router from "vue-router";
import { onMounted } from "vue";
import env from "../env.js";

onMounted(async () => {
 const finish = async (code: string) => {
  const userData = await fetch("https://api.ayakobot.com/login", {
   method: "POST",
   headers: {
    "Content-Type": "application/x-www-form-urlencoded",
   },
   body: new URLSearchParams({
    code,
   }),
  });

  if (userData.status !== 200) {
   window.location.href =
    env.redirectUrl[window.location.hostname as keyof typeof env.redirectUrl];
   return;
  }

  const user = (await userData.json()) as {
   username: string;
   avatar: string;
   userid: string;
   token: string;
  };

  Cookies.set("token", user.token);
  Cookies.set("username", user.username);
  Cookies.set("avatar", user.avatar);
  Cookies.set("id", user.userid);

  window.location.href = "/";
 };

 if (Cookies.get("token")) {
  window.location.href = "/";
  return;
 }

 const code = Router.useRoute().query.code as string | undefined;

 if (!code) {
  window.location.href =
   env.redirectUrl[window.location.hostname as keyof typeof env.redirectUrl];
  return;
 }

 finish(code);
});
</script>

<template>
 <img :src="`${env.cdn}/Loading.gif`" class="m-auto mt-20" />
</template>
