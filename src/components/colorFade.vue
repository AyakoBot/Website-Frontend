<script setup lang="ts">
import { onMounted } from "vue";

const { text } = defineProps<{ text: string }>();

onMounted(() => {
  const pans = document.getElementsByClassName("pan");

  Array.from(pans).forEach((pan) => {
    const randomStartPosition = Math.floor(Math.random() * 101);
    pan.animate(
      [
        { backgroundPosition: `${randomStartPosition}% center` },
        { backgroundPosition: `${randomStartPosition - 200}% center` },
      ],
      {
        duration: 3000,
        easing: "linear",
        iterations: Infinity,
      }
    );
  });
});
</script>

<template>
  <h1
    class="text-6xl bg-gradient-to-r via-[#fe3521] from-[#b0ff00] to-[#b0ff00] bg-[size:200%] repeat-x pan w-full m-auto webkit-background-clip webkit-text-fill-color"
  >
    {{ text }}
  </h1>
</template>
