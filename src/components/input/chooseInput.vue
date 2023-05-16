<script setup lang="ts">
import Boolean from './boolean.vue';
import MultipleChoice from './multipleChoice.vue';
import SingleChoice from './singleChoice.vue';
import Paragraph from './paragraph.vue';
import Short from './short.vue';
import Number from './number.vue';

const props = defineProps<{
 q: {
  question: string;
  required: boolean;
  options?: string[];
  uniquetimestamp: string;
  answertype: 'paragraph' | 'short' | 'number' | 'boolean' | 'multiple choice' | 'single choice';
 };
}>();

const emits = defineEmits<{
 (
  e: 'updateInput',
  value: {
   uniquetimestamp: string;
   value: string | string[] | boolean | number | null;
  },
 ): void;
}>();
</script>

<template>
 <div class="w-full mt-2 flex items-center justify-center">
  <Paragraph
   v-if="props.q.answertype === 'paragraph'"
   :q="props.q"
   @update-input="emits('updateInput', $event)"
  />
  <Short
   v-if="props.q.answertype === 'short'"
   :q="props.q"
   @update-input="emits('updateInput', $event)"
  />
  <Number
   v-if="q.answertype === 'number'"
   :q="props.q"
   @update-input="emits('updateInput', $event)"
  />
  <Boolean
   v-if="props.q.answertype === 'boolean'"
   class="flex justify-center items-center"
   :q="{ ...props.q, checked: false }"
   @update-input="emits('updateInput', $event)"
  />
  <MultipleChoice
   v-if="props.q.answertype === 'multiple choice' && props.q.options?.length"
   :q="props.q"
   @update-input="emits('updateInput', $event)"
  />
  <SingleChoice
   v-if="props.q.answertype === 'single choice' && props.q.options?.length"
   :q="props.q"
   @update-input="emits('updateInput', $event)"
  />
 </div>
</template>
