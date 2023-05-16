<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
 q: {
  uniquetimestamp: string;
  required: boolean;
  options?: string[];
 };
}>();

const numberInput = ref(null);
const emits = defineEmits<{
 (
  e: 'updateInput',
  value: {
   uniquetimestamp: string;
   value: number | null;
  },
 ): void;
}>();
</script>

<template>
 <input
  v-model="numberInput"
  class="w-1/4 rounded-xl text-sm p-1"
  type="number"
  :required="props.q.required"
  @change="
   () =>
    emits('updateInput', {
     uniquetimestamp: props.q.uniquetimestamp,
     value: numberInput,
    })
  "
 />
</template>
