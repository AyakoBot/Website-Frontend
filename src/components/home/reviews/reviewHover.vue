<script setup lang="ts">
import type { Review as ReviewType } from "../../../types/Review";
import ReviewDisplay from "./reviewDisplay.vue";
import ReviewLoading from "./reviewLoading.vue";
import { onMounted, ref } from "vue";
import { useWindowSize } from "@vueuse/core";
import anime from "animejs";

const { width, height } = useWindowSize();
const divideBy = 50;
const getWidth = () => Math.floor(((width.value / 12) * 10) / divideBy);
const getHeight = () => Math.floor(((height.value / 12) * 10) / divideBy);
let interval: undefined | number = undefined;

const columns = ref(getWidth());
const rows = ref(getHeight());

onMounted(() => {
  columns.value = getWidth();
  rows.value = getHeight();

  const createTile = (i: number) => {
    const tile = document.createElement("div");
    tile.classList.add("tile", "z-0");

    if (i === 0) tile.classList.add("rounded-tl-2xl");
    if (i === columns.value - 1) tile.classList.add("rounded-tr-2xl");
    if (i === columns.value * rows.value - columns.value) {
      tile.classList.add("rounded-bl-2xl");
    }
    if (i === columns.value * rows.value - 1) {
      tile.classList.add("rounded-br-2xl");
    }

    return tile;
  };

  const createTiles = (quantity: number) => {
    const wrapper = document.getElementById("tiles");

    Array.from(Array(quantity)).map((_, i) => {
      wrapper?.appendChild(createTile(i));
    });
  };

  createTiles(columns.value * rows.value);
});

const hoveredReview = ref<null | ReviewType>();
const handleHovered = (review: ReviewType | null) => {
  hoveredReview.value = review;

  if (!review) {
    setTimeout(() => {
      if (hoveredReview.value) return;

      anime({
        targets: ".tile",
        backgroundColor: review ? getRandomHexColor() : "rgba(0,0,0,0)",
        delay: anime.stagger(10, {
          grid: [columns.value, rows.value],
          from: 0,
        }),
      });
    }, 500);
  } else {
    anime({
      targets: ".tile",
      backgroundColor: review ? getRandomHexColor() : "rgba(0,0,0,0)",
      delay: anime.stagger(10, {
        grid: [columns.value, rows.value],
        from: 0,
      }),
    });
  }

  const reviewContent = document.getElementsByClassName("reviewContent");
  Array.from(reviewContent).forEach((e) => {
    if (hoveredReview.value) {
      e.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 500,
        easing: "ease-in-out",
      });
    } else {
      e.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 500,
        easing: "ease-in-out",
      });
    }
  });

  if (review) {
    let timesContentChanged = 0;
    interval = setInterval(() => {
      if (timesContentChanged === hoveredReview.value?.content.length) {
        clearInterval(interval);
        return;
      }

      timesContentChanged += 1;
      content.value += hoveredReview.value?.content[timesContentChanged - 1];
    }, 20);
  } else {
    clearInterval(interval);
    content.value = "";
  }
};

const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
};

const getRandomHexColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  const rgb = hexToRgb(color);
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;

  if (luminance > 0.5) {
    return getRandomHexColor();
  }

  return color;
};

const pfpError = () => {
  const pfp = document.getElementById("reviewPfp") as HTMLImageElement | null;
  if (pfp) pfp.src = "https://cdn.ayakobot.com/website_assets/UnknownPfp.png";
};

const content = ref("");
</script>

<template>
  <Suspense>
    <template #default>
      <ReviewDisplay
        @reviewHovered="(review: ReviewType | null) => handleHovered(review)"
      />
    </template>
    <template #fallback>
      <ReviewLoading />
    </template>
  </Suspense>

  <div
    id="tiles"
    class="grid h-[30rem] w-11/12 m-auto mt-10 relative z-10"
    :style="`grid-template-columns: repeat(${columns}, 1fr); grid-template-rows: repeat(${rows}, 1fr);`"
  >
    <div
      class="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-md w-10/12"
    >
      <div
        class="flex flex-col m-auto justify-center items-center reviewContent"
      >
        <div class="flex flex-row m-auto justify-center items-center">
          <img
            :src="
              hoveredReview?.avatar ??
              'https://cdn.ayakobot.com/website_assets/UnknownPfp.png'
            "
            class="min-w-[2.5rem] max-w-[2.5rem] h-auto mr-5 rounded-full shadow-[0_0.1em_1em_0.5em_rgba(23,23,23,1)]"
            draggable="false"
            id="reviewPfp"
            @error="() => pfpError()"
            v-if="!!hoveredReview"
          />
          <div>{{ hoveredReview?.username }}</div>
        </div>
        <div class="flex justify-center items-center my-2">
          <img
            src="https://cdn.discordapp.com/emojis/1089123327467081748.webp"
            class="w-3 h-auto mx-0.5"
            v-for="i in hoveredReview?.score"
            :key="i"
          />
        </div>
      </div>
      <div class="reviewContent font-['IBM_Plex_Mono'] text-[2.5vmin]">
        {{ content }}
      </div>
    </div>
  </div>
  <div class="relative">
    <div
      class="h-[30rem] w-11/12 absolute left-1/2 -translate-x-1/2 -top-[30rem]"
    >
      <div
        class="shadow-main rounded-2xl h-full w-full flex flex-col justify-around items-center"
      >
        <div
          class="flex justify-center items-center -translate-y-1/2 md:mt-10 mt-20 flex-wrap"
        >
          <img
            src="https://cdn.ayakobot.com/website_assets/Icon.png"
            class="w-40 mx-10 h-auto"
          />
          <div class="mx-[200%] md:mx-0">+</div>
          <img src="https://top.gg/favicon.png" class="w-40 mx-10 h-auto" />
        </div>
        <div class="-mt-96">Hover over a Review to see its Content</div>
      </div>
    </div>
  </div>
</template>
