<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
 q: {
  question: string;
  required: boolean;
  options?: string[];
  uniquetimestamp: string;
 };
}>();
const emits = defineEmits<{
 (
  e: 'updateInput',
  value: {
   uniquetimestamp: string;
   value: string[];
  },
 ): void;
}>();

const checked = ref<string[]>([]);
const change = (e: Event) => {
 const element = e.target as HTMLInputElement;
 const label = element.labels?.item(0)?.innerText;
 if (!label) return;

 if (element.checked) {
  checked.value.push(label);
 } else {
  checked.value = checked.value.filter((v) => v !== label);
 }

 emits('updateInput', {
  uniquetimestamp: props.q.uniquetimestamp,
  value: checked.value,
 });
};
</script>

<template>
 <div>
  <div
   v-for="(o, i) in props.q.options"
   :key="i"
   class="text-sm flex items-center justify-center mx-4"
  >
   <input
    :id="`${props.q.uniquetimestamp}-${i}`"
    type="checkbox"
    :name="props.q.question"
    class="h-4 w-4 my-1"
    @change="change"
   />
   <label :for="`${props.q.uniquetimestamp}-${i}`" class="ml-1 break-words max-w-full">
    {{ o }}
   </label>
  </div>
 </div>
</template>
