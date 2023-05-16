<template>
 <div class="h-screen flex items-center justify-center -mt-30">
  <div class="max-w-lg mx-auto text-center">
   <img
    src="https://cdn.discordapp.com/emojis/924071113586253884.webp?size=4096"
    class="w-30 h-auto rounded-2xl m-auto"
    draggable="false"
   />
   <p class="mt-6">I think you got lost :(</p>
   <p class="text-2xl my-6">The page you were looking for doesn't exist</p>
   <RouterLink
    to="/"
    class="text-[#fe3521] p-2 px-6 bg-white rounded-xl text-lg hover:text-white hover:bg-[#fe3521] transition-all font-bold"
   >
    Take me back
   </RouterLink>
  </div>
 </div>
</template>
