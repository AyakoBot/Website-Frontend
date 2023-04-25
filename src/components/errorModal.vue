<script setup lang="ts">
const { text, title } = defineProps<{
  text?: string;
  title?: string;
}>();
const emits = defineEmits<(e: "close") => void>();
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <div
      class="bg-gradient-to-br from-purple-900 to-neutral-800 border-red-600 border-2 rounded-xl p-4 shadow-xl"
    >
      <div class="text-2xl font-bold">{{ title ?? "Error" }}</div>
      <div class="text-sm mt-2">
        {{
          text ??
          "There was an error when trying to process your request. Please try again later."
        }}
      </div>
      <button
        class="mt-2 bg-gradient-to-r from-[#fe3521] via-[#3dff56] to-[#fe3521] bg-[size:200%] p-1 px-6 rounded-xl text-lg transition-all bg-[position:0%_center] hover:bg-[position:-100%_center] font-bold shadow-main disabled:cursor-not-allowed"
        @click="() => emits('close')"
      >
        Close
      </button>
    </div>
  </div>
</template>
