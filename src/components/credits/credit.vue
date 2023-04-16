<script setup lang="ts">
import Socials from "./socials.vue";
import Roles from "./roles.vue";

const props = defineProps<{
  username: string;
  avatar: string;
  roles: string[];
  socials?: string[];
  socialstype?: string[];
}>();
</script>

<template>
  <div class="flex justify-start items-center flex-col">
    <div class="text-sm">{{ props.username }}</div>
    <img
      :src="props.avatar"
      class="rounded-full mt-3 shadow-main"
      alt=""
      draggable="false"
    />
    <div class="mt-3 flex gap-1 text-sm">
      <Socials
        v-for="(s, i) in props.socials"
        :name="props.socialstype?.[i] ?? ''"
        :link="s"
      />
    </div>
    <div class="flex flex-col text-sm mt-3 gap-1">
      <Roles v-for="r in props.roles" :name="r" />
    </div>
  </div>
</template>
