<script setup lang="ts">
import FooterButton from "../footer/footerButton.vue";
import ColorFade from "../colorFade.vue";
</script>

<template>
  <div class="w-full h-70 mt-auto bg-neutral-900/75 shadow-main z-[9999]">
    <div class="relative w-full">
      <img
        src="https://cdn.ayakobot.com/website_assets/ayakopeeking.png"
        class="absolute bottom-0 right-9 w-6"
        draggable="false"
      />
    </div>

    <div class="flex flex-col lg:flex-row w-full justify-around items-center">
      <router-link to="/">
        <div class="flex items-center">
          <img
            src="https://cdn.ayakobot.com/website_assets/Icon.png"
            draggable="false"
            class="w-auto h-[15vmin] mt-10 mr-4"
          />
          <div class="flex justify-center items-center flex-col pt-10">
            <div class="flex justify-center items-center">
              <ColorFade
                text="Ayako"
                class="text-[10vmin] md:text-6xl font-bold pb-1"
              />
            </div>
            <h1 class="text-[5vmin] md:text-sm">ayakobot.com</h1>
          </div>
        </div>
      </router-link>

      <div
        class="flex justify-center mt-4 sm:mt-4 md:mt-4 lg:mt-4 lg:ml-4 flex-wrap"
      >
        <div class="flex flex-col items-center">
          <!-- <FooterButton link="commands" text="Commands" /> -->
          <FooterButton
            link="https://support.ayakobot.com"
            :absolute="true"
            text="Support"
          />
          <FooterButton
            link="premium"
            text="👑Premium👑"
            class="text-yellow-500"
          />
          <FooterButton
            link="https://top.gg/bot/650691698409734151/vote"
            :absolute="true"
            text="Vote"
            class="text-emerald-400"
          />
          <!-- <FooterButton link="art" text="Artwork" /> -->
          <FooterButton
            link="https://www.patreon.com/Lars_und_so"
            :absolute="true"
            text="Donate"
          />
        </div>
        <div class="flex flex-col items-center lg:ml-8">
          <FooterButton
            link="https://support.ayakobot.com"
            :absolute="true"
            text="Animekos"
          />
          <!-- <FooterButton link="partners" text="Partners" /> -->
          <FooterButton link="credits" text="Creators" />
          <FooterButton link="terms" text="Terms" />
          <FooterButton link="privacy" text="Privacy" />
        </div>
      </div>
    </div>

    <div class="mt-3 text-[.5rem]">
      Copyright © {{ new Date().getFullYear() }} Ayako
    </div>
  </div>
</template>
