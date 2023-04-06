<script setup lang="ts">
import CreditDisplay from "../components/credits/creditDisplay.vue";
</script>

<template>
  <div class="m-auto flex justify-center items-center flex-col">
    <div class="flex flex-col justify-center items-center">
      <img
        src="https://cdn.ayakobot.com/website_assets/ayakoLove.png"
        class="w-24"
        draggable="false"
      />
      <h1 class="mt-10">Creators & Credits</h1>
    </div>
    <Suspense>
      <template #default>
        <CreditDisplay />
      </template>
    </Suspense>
  </div>
</template>
