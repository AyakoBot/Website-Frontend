<script setup lang="ts">
import Cookies from "js-cookie";
import * as Router from "vue-router";
import { onMounted } from "vue";
import env from "../env.js";

onMounted(async () => {
  const finish = async (token?: string) => {
    const userData = await fetch("https://api.ayakobot.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token ?? Cookies.get("token"),
      }),
    });

    if (userData.status !== 200) {
      window.location.href = "/login";
      return;
    }

    if (!token) token = Cookies.get("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    const user = (await userData.json()) as {
      username: string;
      avatar: string;
      userid: string;
    };
    Cookies.set("token", token);
    Cookies.set("username", user.username);
    Cookies.set("id", user.userid);

    window.location.href = "/";
  };

  if (Cookies.get("token")) return finish();

  const accessToken = Router.useRoute()
    .hash.split("&")
    .find((arg) => arg.includes("access_token="))
    ?.split("access_token=")[1];

  if (!accessToken) {
    window.location.href =
      env.redirectUrl[window.location.hostname as keyof typeof env.redirectUrl];
    return;
  }

  finish(accessToken);
});
</script>

<template>
  <img src="https://cdn.ayakobot.com/Loading.gif" class="m-auto mt-20" />
</template>
