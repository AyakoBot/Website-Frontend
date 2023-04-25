<script setup lang="ts">
import { ref } from "vue";

const { q } = defineProps<{
  q: {
    uniquetimestamp: string;
    required: boolean;
    options?: string[];
  };
}>();

const numberInput = ref(null);
const emits = defineEmits<{
  (
    e: "updateInput",
    value: {
      uniquetimestamp: string;
      value: number | null;
    }
  ): void;
}>();
</script>

<template>
  <input
    class="w-1/4 rounded-xl text-sm p-1"
    type="number"
    v-model="numberInput"
    :required="q.required"
    @change="
      () =>
        emits('updateInput', {
          uniquetimestamp: q.uniquetimestamp,
          value: numberInput,
        })
    "
  />
</template>
