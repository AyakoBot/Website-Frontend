<script setup lang="ts">
import Credit from "./credit.vue";
import env from "../../env";

const contributers = (await fetch(`${env.api}/contributers`).then((r) =>
  r.json()
)) as {
  username: string;
  userid: string;
  avatar: string;
  roles: string[];
  socials?: string[];
  socialstype?: string[];
}[];
</script>

<template>
  <div
    class="grid auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mt-10"
  >
    <Credit
      v-for="contributer in contributers"
      :key="contributer.userid"
      :username="contributer.username"
      :avatar="contributer.avatar"
      :roles="contributer.roles"
      :socials="contributer.socials"
      :socialstype="contributer.socialstype"
    />
  </div>
</template>
