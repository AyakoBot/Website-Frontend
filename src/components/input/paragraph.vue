<script setup lang="ts">
import { ref } from "vue";

const { q } = defineProps<{
  q: {
    uniquetimestamp: string;
    required: boolean;
    options?: string[];
  };
}>();
const emits = defineEmits<{
  (
    e: "updateInput",
    value: {
      uniquetimestamp: string;
      value: string;
    }
  ): void;
}>();

const paragraphInput = ref("");
</script>

<template>
  <div class="relative w-full">
    <textarea
      class="w-11/12 rounded-2xl text-sm p-1"
      :required="q.required"
      :minlength="q.required ? 0 : 1"
      :maxlength="1000"
      v-model="paragraphInput"
      @change="
        () =>
          emits('updateInput', {
            uniquetimestamp: q.uniquetimestamp,
            value: paragraphInput,
          })
      "
    />
    <div
      class="absolute text-[1vmin] left-1/2 -translate-x-1/2 bottom-1 text-neutral-400"
    >
      {{ paragraphInput.length }}/1000
    </div>
  </div>
</template>
