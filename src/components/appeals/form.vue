<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";
import env from "../../env.js";
import Question from "./question.vue";

const { questions } = defineProps<{
  questions: {
    question: string;
    answertype:
      | "paragraph"
      | "short"
      | "number"
      | "boolean"
      | "multiple choice"
      | "single choice";
    required: boolean;
    uniquetimestamp: string;
    options?: string[];
  }[];
}>();

const token = Cookies.get("token");
if (!token) window.location.href = "/login";

const guildid = useRouter().currentRoute.value.params.guildid;
const punishmentid = useRouter().currentRoute.value.params.punishmentid;

const canAppeal = ref(false);

const finishAppeal = () => {
  fetch(
    `${env.api}/appeals/finish?guild=${guildid}&punishment=${punishmentid}`,
    {
      method: "POST",
      headers: {
        Authorization: token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([]),
    }
  ).then((r) => {
    if (r.status === 200)
      window.location.href = `/servers/${guildid}/appeal/${punishmentid}/success`;
    else {
      alert(
        "There was an error when trying to process your request. Please try again later."
      );
    }
  });
};

const answers = ref<
  {
    uniquetimestamp: string;
    value: string | string[] | boolean | number | null;
  }[]
>([]);
const updateAppeal = (answer: {
  uniquetimestamp: string;
  value: string | string[] | boolean | number | null;
}) => {
  const index = answers.value.findIndex(
    (a) => a.uniquetimestamp === answer.uniquetimestamp
  );
  if (index === -1) answers.value.push(answer);
  else answers.value[index] = answer;

  canAppeal.value = answers.value.every(
    (a) => a.value !== null || a.value !== ""
  );

  console.log(answers.value);
};
</script>

<template>
  <Question
    v-for="(q, i) in questions"
    :q="q"
    :key="q.question"
    @updateAppeal="(answer) => updateAppeal(answer)"
  />
  <input
    class="mt-2 bg-gradient-to-r from-[#fe3521] via-[#3dff56] to-[#fe3521] bg-[size:200%] p-1 px-6 rounded-xl text-lg transition-all bg-[position:0%_center] hover:bg-[position:-100%_center] font-bold shadow-main disabled:cursor-not-allowed"
    :disabled="!canAppeal"
    @submit.prevent="() => finishAppeal()"
    type="submit"
    value="Finish Appeal"
  />
</template>
