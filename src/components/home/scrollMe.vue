<script setup lang="ts">
setInterval(() => {
  const scrollMe = document.getElementById("scrollMe");

  if (window.scrollY !== 0) {
    scrollMe?.animate(
      {
        opacity: 0,
      },
      { duration: 2000, fill: "forwards" }
    );
  } else {
    scrollMe?.animate(
      {
        opacity: 1,
      },
      { duration: 2000, fill: "forwards" }
    );
  }
}, 500);
</script>

<template>
  <div class="flex justify-center items-center mr-5" id="scrollMe">
    <svg class="animate-bounce w-20 fixed bottom-0" viewBox="0 0 24 24">
      <path
        d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
        fill="#8c8c8c"
      ></path>
    </svg>
  </div>
</template>
