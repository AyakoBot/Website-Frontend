<script setup lang="ts">
import { ref } from 'vue';
import env from '../../env.js';
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie';
import AppealForm from './form.vue';
import ErrorModal from '../errorModal.vue';

const token = Cookies.get('token');
if (!token) window.location.href = '/login';

const guildid = useRouter().currentRoute.value.params.guildid;
const punishmentid = useRouter().currentRoute.value.params.punishmentid;

const appealForm = ref<InstanceType<typeof AppealForm> | null>(null);

const res = (await fetch(
 `${env.api}/appeals/questions?guild=${guildid}&punishment=${punishmentid}`,
 {
  headers: {
   Authorization: token as string,
  },
 },
).then((r) => r.json())) as
 | {
    question: string;
    answertype: 'paragraph' | 'short' | 'number' | 'boolean' | 'multiple choice' | 'single choice';
    required: boolean;
    options?: string[];
    uniquetimestamp: string;
   }[]
 | { hasAppealed: true };

const finishAppeal = () => {
 fetch(`${env.api}/appeals/finish?guild=${guildid}&punishment=${punishmentid}`, {
  method: 'POST',
  headers: {
   Authorization: token as string,
   'Content-Type': 'application/json',
  },
  body: JSON.stringify([]),
 }).then((r) => {
  if (r.status === 200) {
   window.location.href = `/servers/${guildid}/appeal/${punishmentid}/success`;
  } else showErrorModal.value = true;
 });
};

const showErrorModal = ref(false);
</script>

<template>
 <div class="relative">
  <RouterLink
   class="text-sm text-[#fe3521] p-1 px-6 bg-white rounded-xl hover:text-white hover:bg-[#fe3521] transition-all font-bold absolute left-9"
   :to="`/appeals/${guildid}`"
   >⬅️ Back</RouterLink
  >

  <ErrorModal v-if="showErrorModal" @close="() => (showErrorModal = false)" class="pt-10" />

  <AppealForm
   v-if="Array.isArray(res) && res.length"
   :questions="res"
   ref="appealForm"
   class="pt-10"
   @error="() => (showErrorModal = true)"
  />

  <div v-else-if="Array.isArray(res)">
   <div>No questions found!</div>
   <div class="text-sm mt-2">There are no appeal questions for you to answer</div>
   <button
    class="mt-2 bg-gradient-to-r from-[#fe3521] via-[#3dff56] to-[#fe3521] bg-[size:200%] p-1 px-6 rounded-xl text-lg transition-all bg-[position:0%_center] hover:bg-[position:-100%_center] font-bold shadow-main disabled:cursor-not-allowed"
    @click="() => finishAppeal()"
   >
    Finish Appeal
   </button>
  </div>
  <div v-else-if="res.hasAppealed" class="text-sm flex justify-center items-center flex-col gap-4">
   <div>You have already appealed this punishment</div>
   <RouterLink
    class="text-sm text-[#fe3521] p-1 px-6 bg-white rounded-xl hover:text-white hover:bg-[#fe3521] transition-all font-bold"
    :to="`/appeals/${guildid}`"
    >⬅️ Back</RouterLink
   >
  </div>
 </div>
</template>
