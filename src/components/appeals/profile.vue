<script setup lang="ts">
import Cookies from "js-cookie";

const username = Cookies.get("username");
const avatar = Cookies.get("avatar");

const logout = () => {
  Cookies.remove("token");
  Cookies.remove("username");
  Cookies.remove("avatar");
  Cookies.remove("id");
  window.location.href = "/login";
};
</script>

<template>
  <div class="m-auto flex flex-col justify-center items-center">
    Viewing servers as
    <div
      class="flex justify-center items-center mt-2 p-2 bg-gradient-to-br from-purple-800 to-transparent rounded-2xl shadow-main"
    >
      <img :src="avatar" class="rounded-full w-12" />
      <div class="ml-4">{{ username }}</div>
    </div>
    <button
      @click="() => logout()"
      class="rounded-2xl text-sm mt-2 hover:text-[#b0ff00] transition-all duration-300"
    >
      Not you? Log Out!
    </button>
  </div>
</template>
