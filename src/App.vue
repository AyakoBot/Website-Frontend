<script lang="ts" setup>
import Footer from "./components/footer/footer.vue";
import NavBar from "./components/navbar/navbar.vue";
import Blob from "./components/blob.vue";
</script>

<template>
  <Blob />

  <NavBar />

  <div class="min-h-[90vh] overflow-hidden max-w-full">
    <div class="my-10" />
    <router-view />
    <div class="my-10" />
  </div>

  <Footer />
</template>
