<script setup lang="ts">
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
   value: string;
  },
 ): void;
}>();

const resetState = (question: string) => {
 const elements = document.getElementsByName(question);
 Array.from(elements).forEach((e) => {
  (e as HTMLInputElement).checked = false;
 });
};

const change = (e: Event) => {
 const element = e.target as HTMLInputElement;
 const label = element.labels?.item(0)?.innerText;
 if (!label) return;

 emits('updateInput', {
  uniquetimestamp: props.q.uniquetimestamp,
  value: label,
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
    type="radio"
    :name="props.q.question"
    :required="props.q.required"
    class="h-4 w-4 my-1"
    @change="change"
   />
   <label :for="`${props.q.uniquetimestamp}-${i}`" class="ml-1 break-words max-w-full">
    {{ o }}
   </label>
  </div>
  <button
   v-if="!props.q.required"
   class="text-[#fe3521] p-0.5 px-3 mt-1 bg-white rounded-xl text-lg hover:text-white hover:bg-[#fe3521] transition-all font-bold"
   @click.prevent="() => resetState(props.q.question)"
  >
   Reset
  </button>
 </div>
</template>
