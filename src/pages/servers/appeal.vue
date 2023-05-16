<script setup lang="ts">
import AppealPage from '../../components/appeals/appealPage.vue';
import env from '../../env.js';
</script>

<template>
 <Suspense>
  <template #default>
   <AppealPage />
  </template>
  <template #fallback>
   <div class="flex flex-col justify-center items-center">
    <img :src="`${env.cdn}/Loading.gif`" />
    The page is loading...
   </div>
  </template>
 </Suspense>
</template>
