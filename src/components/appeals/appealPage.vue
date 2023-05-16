<script setup lang="ts">
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie';
import env from '../../env.js';
import PunishmentCollection from '../../components/appeals/punishmentCollection.vue';

const token = Cookies.get('token');
if (!token) window.location.href = '/login';

const guildid = useRouter().currentRoute.value.params.guildid;
const res = (await fetch(`${env.api}/appeals/punishments?guild=${guildid}`, {
 headers: {
  Authorization: token as string,
 },
}).then((r) => (r.status === 200 ? r.json() : []))) as {
 guildid: string;
 reason: string;
 channelname: string;
 channelid: string;
 uniquetimestamp: string;
 type: string;
}[];

const warns = res.filter((r) => r.type === 'warn');
const mutes = res.filter((r) => r.type === 'mute');
const kicks = res.filter((r) => r.type === 'kick');
const bans = res.filter((r) => r.type === 'ban');
const channelbans = res.filter((r) => r.type === 'channelban');
</script>

<template>
 <div>
  <div class="mb-4 flex justify-around items-center relative">
   <RouterLink
    class="text-sm text-[#fe3521] p-1 px-6 bg-white rounded-xl hover:text-white hover:bg-[#fe3521] transition-all font-bold absolute left-9"
    to="/appeals"
    >⬅️ Back</RouterLink
   >
   <div v-if="res.length">Click any punishment to appeal</div>
  </div>
  <PunishmentCollection v-if="warns.length" :props="warns" type="Warns" />
  <PunishmentCollection v-if="mutes.length" :props="mutes" type="Mutes" />
  <PunishmentCollection v-if="channelbans.length" :props="channelbans" type="Channel Bans" />
  <PunishmentCollection v-if="kicks.length" :props="kicks" type="Kicks" />
  <PunishmentCollection v-if="bans.length" :props="bans" type="Bans" />

  <div v-if="!res.length" class="flex flex-col justify-center items-center mt-20">
   <div class="text-sm">
    <div class="font-bold">
     I was unable to find any punishments on this server for you. <br />
     This can have several reasons:
    </div>
    <ul class="mt-2">
     <li>- The server doesn't have Ayako's Appeal System enabled -</li>
     <li>- You have been banned from sending appeals -</li>
     <li>- Ayako is no longer part of this server -</li>
    </ul>
   </div>
  </div>
 </div>
</template>
