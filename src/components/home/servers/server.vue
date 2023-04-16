<script setup lang="ts">
import env from "../../../env.js";

const props = defineProps<{
  name: string;
  vanity?: string;
  icon?: string;
  membercount: string;
  banner?: string;
}>();
</script>

<template>
  <a
    :href="props.vanity ? `https://discord.gg/${props.vanity}` : ''"
    target="_blank"
    class="flex w-48 h-28 bg-gradient-to-br from-red-900 to-neutral-900 rounded-2xl"
  >
    <div
      class="relative flex p-5 w-48 h-28 justify-between items-center rounded-2xl shadow-main"
    >
      <img
        v-if="props.banner"
        :src="props.banner"
        class="rounded-2xl -z-10 absolute left-0 h-full w-full object-cover"
        draggable="false"
      />
      <div
        class="min-w-11 min-h-11 rounded-full bg-neutral-900/75 flex justify-center items-center"
      >
        <img
          :src="props.icon ?? `${env.cdn}/website_assets/UnknownPfp.png`"
          class="min-w-[2.5rem] max-w-[2.5rem] h-auto rounded-full shadow-[0_0.1em_1em_0.5em_rgba(23,23,23,1)]"
        />
      </div>
      <div class="flex flex-col min-w-[80%] gap-2 ml-3 pr-3">
        <div
          class="text-xs text-center break-all"
          style="
            text-shadow: #000 1px 0px 10px, #000 1px 0px 10px, #000 1px 0px 10px,
              #000 1px 0px 10px, #000 1px 0px 10px;
          "
        >
          {{ props.name.slice(0, 30) }}{{ props.name.length > 30 ? "..." : "" }}
        </div>
        <div
          class="text-sm bg-gradient-to-br from-emerald-400 to-neutral-700 rounded-full flex justify-center items-center shadow-main"
        >
          <img
            src="https://cdn.discordapp.com/emojis/1073254214995816489.webp"
            class="w-4"
          />
          {{ props.membercount }}
        </div>
      </div>
    </div>
  </a>
</template>
