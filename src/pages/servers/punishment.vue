<script setup lang="ts">
import env from "../../env.js";
import Questions from "../../components/appeals/questions.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <Questions />
    </template>
    <template #fallback>
      <div class="flex flex-col justify-center items-center">
        <img :src="`${env.cdn}/Loading.gif`" />
        The page is loading...
      </div>
    </template>
  </Suspense>
</template>
