<script setup lang="ts">
import { ref } from "vue";

const { q } = defineProps<{
  q: {
    question: string;
    required: boolean;
    options?: string[];
    uniquetimestamp: string;
  };
}>();
const emits = defineEmits<{
  (
    e: "updateInput",
    value: {
      uniquetimestamp: string;
      value: string[];
    }
  ): void;
}>();

const id = String(Date.now());

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

  emits("updateInput", {
    uniquetimestamp: q.uniquetimestamp,
    value: checked.value,
  });
};
</script>

<template>
  <div>
    <div
      v-for="(o, i) in q.options"
      class="text-sm flex items-center justify-center mx-4"
    >
      <input
        type="checkbox"
        :id="`${q.uniquetimestamp}-${i}`"
        :name="q.question"
        @change="(e) => change(e)"
        class="h-4 w-4 my-1"
      />
      <label :for="`${q.uniquetimestamp}-${i}`" class="ml-1 break-words max-w-full">
        {{ o }}
      </label>
    </div>
  </div>
</template>
