<script setup lang="ts">
import ReviewHover from "../components/home/reviews/reviewHover.vue";
import RandomLetters from "../components/randomLetters.vue";
import Flowers from "../components/home/flowers.vue";
import MainButtons from "../components/mainButtons.vue";
import ScrollMe from "../components/home/scrollMe.vue";
import ServerDisplay from "../components/home/servers/serverDisplay.vue";
import ServerLoading from "../components/home/servers/serverLoading.vue";
import Preview from "../components/home/features/feature.vue";
</script>

<template>
  <div class="flex justify-center items-center flex-col relative h-full m-10">
    <Flowers />
    <RandomLetters
      text="AYAKO"
      :isTitle="true"
      :animate="true"
      class="font-bold mt-[40vmin]"
    />
    <RandomLetters
      text="Powerful Server Management And Moderation Bot"
      :isTitle="false"
      :animate="false"
    />
  </div>

  <MainButtons />
  <ScrollMe />

  <Suspense>
    <template #default>
      <ServerDisplay />
    </template>
    <template #fallback>
      <ServerLoading />
    </template>
  </Suspense>

  <ReviewHover />

  <Preview />
</template>
