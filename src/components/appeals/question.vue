<script setup lang="ts">
import { ref } from "vue";
import ChooseInput from "../input/chooseInput.vue";

const { q } = defineProps<{
  q: {
    question: string;
    uniquetimestamp: string;
    answertype:
      | "paragraph"
      | "short"
      | "number"
      | "boolean"
      | "multiple choice"
      | "single choice";
    required: boolean;
    options?: string[];
  };
}>();

const emits = defineEmits<{
  (
    e: "updateAppeal",
    value: {
      uniquetimestamp: string;
      value: string | string[] | boolean | number | null;
    }
  ): void;
}>();
</script>

<template>
  <div
    class="flex flex-col justify-center items-center bg-gradient-to-tl from-transparent to-purple-800 w-full md:w-11/12 m-auto rounded-2xl shadow-main p-2 py-4 my-10"
  >
    <div>
      {{ q.question }}
    </div>
    <ChooseInput :q="q" @updateInput="emits('updateAppeal', $event)" />
  </div>
</template>
