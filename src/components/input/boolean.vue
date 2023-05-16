<script setup lang="ts">
import { ref } from "vue";

const { q } = defineProps<{
  q: { checked: boolean; uniquetimestamp: string };
}>();
const emits = defineEmits<{
  (
    e: "updateInput",
    value: {
      uniquetimestamp: string;
      value: boolean;
    }
  ): void;
}>();

const checked = ref(q.checked);
const id = String(Date.now());

const check = () => {
  checked.value = !checked.value;
  emits("updateInput", {
    uniquetimestamp: q.uniquetimestamp,
    value: checked.value,
  });
};
</script>

<template>
  <div class="relative">
    <input
      @input="() => check()"
      type="checkbox"
      :id="id"
      :checked="checked"
      class="hidden"
    />
    <label :for="id" class="flex items-center cursor-pointer">
      <span
        class="w-10 h-4 rounded-full shadow-inner"
        :class="checked ? 'bg-emerald-400' : 'bg-gray-400'"
      ></span>
      <span
        class="absolute -left-1 w-6 h-6 bg-white rounded-full shadow transition-transform duration-200 ease-in-out"
        :class="{ 'transform translate-x-6': checked }"
      ></span>
      <div class="ml-4 text-sm">
        {{ checked ? "Yes" : "No" }}
      </div>
    </label>
  </div>
</template>
