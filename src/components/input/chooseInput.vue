<script setup lang="ts">
import { ref } from "vue";
import Boolean from "./boolean.vue";
import MultipleChoice from "./multipleChoice.vue";
import SingleChoice from "./singleChoice.vue";
import Paragraph from "./paragraph.vue";
import Short from "./short.vue";
import Number from "./number.vue";

const { q } = defineProps<{
  q: {
    question: string;
    required: boolean;
    options?: string[];
    uniquetimestamp: string;
    answertype:
      | "paragraph"
      | "short"
      | "number"
      | "boolean"
      | "multiple choice"
      | "single choice";
  };
}>();

const emits = defineEmits<{
  (
    e: "updateInput",
    value: {
      uniquetimestamp: string;
      value: string | string[] | boolean | number | null;
    }
  ): void;
}>();
</script>

<template>
  <div class="w-full mt-2 flex items-center justify-center">
    <Paragraph
      v-if="q.answertype === 'paragraph'"
      :q="q"
      @updateInput="emits('updateInput', $event)"
    />
    <Short
      v-if="q.answertype === 'short'"
      :q="q"
      @updateInput="emits('updateInput', $event)"
    />
    <Number
      v-if="q.answertype === 'number'"
      :q="q"
      @updateInput="emits('updateInput', $event)"
    />
    <Boolean
      v-if="q.answertype === 'boolean'"
      class="flex justify-center items-center"
      :q="{ ...q, checked: false }"
      @updateInput="emits('updateInput', $event)"
    />
    <MultipleChoice
      v-if="q.answertype === 'multiple choice' && q.options?.length"
      :q="q"
      @updateInput="emits('updateInput', $event)"
    />
    <SingleChoice
      v-if="q.answertype === 'single choice' && q.options?.length"
      :q="q"
      @updateInput="emits('updateInput', $event)"
    />
  </div>
</template>
