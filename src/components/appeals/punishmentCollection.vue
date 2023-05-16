<script setup lang="ts">
const { props, type } = defineProps<{
  props: {
    guildid: string;
    reason: string;
    channelname: string;
    channelid: string;
    uniquetimestamp: string;
    type: string;
  }[];
  type: string;
}>();
</script>

<template>
  <div
    class="flex flex-col justify-center items-center bg-gradient-to-tl from-transparent to-purple-800 w-full md:w-11/12 m-auto rounded-2xl shadow-main p-2 py-4 my-10"
  >
    <div class="mb-2">{{ type }}</div>
    <table class="w-full">
      <thead>
        <tr>
          <th class="border-r-2 border-[#b0ff00]">Reason</th>
          <th class="border-r-2 border-[#b0ff00]">Channel</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in props" :key="p.uniquetimestamp">
          <td class="text-sm w-2/5 border-r-2 border-[#b0ff00]">
            {{ p.reason }}
          </td>
          <td class="border-r-2 border-[#b0ff00] pb-2">
            <a
              :href="`https://discord.com/channels/${p.guildid}/${p.channelid}`"
              target="_blank"
              class="bg-[#5865F24D] text-sm p-0.5"
            >
              #{{ p.channelname }}</a
            >
          </td>
          <td class="text-sm">
            {{ new Date(Number(p.uniquetimestamp)).toLocaleString() }}
          </td>
          <td>
            <RouterLink
              :to="`/servers/${p.guildid}/appeal/${p.uniquetimestamp}`"
              class="bg-gradient-to-r from-[#fe3521] via-[#3dff56] to-[#fe3521] bg-[size:200%] p-1 px-6 rounded-xl text-lg transition-all bg-[position:0%_center] hover:bg-[position:-100%_center] font-bold shadow-main"
            >
              Appeal
            </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
