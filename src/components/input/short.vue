<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
 q: {
  uniquetimestamp: string;
  required: boolean;
  options?: string[];
 };
}>();
const emits = defineEmits<{
 (
  e: 'updateInput',
  value: {
   uniquetimestamp: string;
   value: string;
  },
 ): void;
}>();

const shortInput = ref('');
</script>

<template>
 <div class="relative w-full">
  <input
   v-model="shortInput"
   class="w-1/2 rounded-2xl text-sm p-1"
   type="text"
   max="150"
   :required="props.q.required"
   @change="
    () =>
     emits('updateInput', {
      uniquetimestamp: props.q.uniquetimestamp,
      value: shortInput,
     })
   "
  />
  <div class="absolute text-[1vmin] left-1/2 -translate-x-1/2 bottom-0 text-neutral-400">
   {{ shortInput.length }}/150
  </div>
 </div>
</template>
