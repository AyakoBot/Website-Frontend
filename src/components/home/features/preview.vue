<script setup lang="ts">
const props = defineProps<{
  subtitle: string;
  title: string;
  i: number;
  img: string;
  placeholderImg: string;
}>();
const subtitleArgs = props.subtitle.split(/\s/g);

const hovering = (hovers: boolean) => {
  const subtitles = document.getElementsByClassName(`subtitles-${props.i}`);
  const img = document.getElementById(`img-${props.i}`) as HTMLElement;
  const placeholderImg = document.getElementById(
    `placeholderImg-${props.i}`
  ) as HTMLElement;

  if (hovers) {
    [...Array.from(subtitles), img].forEach((subtitle, i) => {
      subtitle.animate(
        [
          { opacity: 0, transform: "translateY(40%)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 300,
          easing: "cubic-bezier(0.9, 0.06, 0.15, 0.9)",
          delay: i * 70,
          fill: "forwards",
        }
      );
    });

    placeholderImg.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 300,
      easing: "cubic-bezier(0.9, 0.06, 0.15, 0.9)",
      fill: "forwards",
    });
  } else {
    [...Array.from(subtitles), img].forEach((subtitle, i) => {
      subtitle.animate(
        [
          { opacity: 1, transform: "translateY(0)" },
          { opacity: 0, transform: "translateY(40%)" },
        ],
        {
          duration: 300,
          easing: "cubic-bezier(0.9, 0.06, 0.15, 0.9)",
          delay: i * 50 + 1500,
          fill: "forwards",
        }
      );
    });

    placeholderImg.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      easing: "cubic-bezier(0.9, 0.06, 0.15, 0.9)",
      fill: "forwards",
      delay: (subtitles.length + 1) * 70 + 1500,
    });
  }
};
</script>

<template>
  <div
    class="border-solid border-[0.5vmin] h-[75vmin] relative border-orange-700 w-1/2 xl:w-5/12 aspect-[1/1.6] before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[linear-gradient(130deg,_transparent_0%_33%,_rgb(236,64,122)_66%,_rgb(253,196,53)_100%)] before:bg-[length:300%_300%] before:bg-[0%_0%] before:transition-all before:duration-1000 before:ease-in-out hover:before:bg-[100%_100%] before:-z-10 hover:border-[rgba(0,0,0,0)] ease-in-out duration-1000 hover:before:[scale:1.08_1.03] rounded-2xl before:rounded-2xl"
    @mouseenter="() => hovering(true)"
    @mouseleave="() => hovering(false)"
  >
    <div
      class="h-[calc(100%-1.25rem)] w-[calc(100%-1.25rem)] p-5 flex justify-between items-center flex-col m-auto"
    >
      <h3 class="text-md" :id="`title-${props.i}`">
        {{ props.title }}
      </h3>
      <h4 class="text-sm mt-3" :id="`subtitle-${props.i}`">
        <span
          v-for="(arg, i) in subtitleArgs"
          :key="i"
          :class="`inline-block m-[0vmin_0.3vmin] relative translate-y-[40%] transition-none opacity-0 subtitles-${props.i}`"
          >{{ arg }}</span
        >
      </h4>
      <img
        :src="props.img"
        class="mt-5 rounded-2xl opacity-0 h-3/4 w-auto shadow-main"
        :id="`img-${props.i}`"
      />
      <img
        :src="props.placeholderImg"
        class="mt-5 rounded-2xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/2 -z-20"
        :id="`placeholderImg-${props.i}`"
      />
    </div>
  </div>
</template>
