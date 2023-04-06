<script setup lang="ts">
import ServerCarousel from "./serverCarousel.vue";
import ColorFade from "../../colorFade.vue";
import type { Server as ServerType } from "../../../types/Server";
import { ref, onMounted } from "vue";
import env from "../../../env";

const servers = (await fetch(`${env.api}/servers`).then((r) => r.json())) as {
  count: number;
  users: number;
  servers: ServerType[];
};
servers.servers.sort(() => 0.5 - Math.random());
const counters: Map<number, number> = new Map();

const animateCountUp = (
  targetValue: number,
  refValue: typeof serverCount | typeof userCount
) => {
  const frameDuration = 1000 / 60;
  const animationDuration = 2000;
  const totalFrames = Math.round(animationDuration / frameDuration);
  const easeOutQuad = (t: number) => t * (2 - t);

  let frame = 0;
  counters.set(
    targetValue,
    setInterval(() => {
      frame += 1;
      const progress = easeOutQuad(frame / totalFrames);
      const currentCount = Math.round(targetValue * progress);

      if (refValue.value !== currentCount) refValue.value = currentCount;
      if (frame === totalFrames) clearInterval(counters.get(targetValue));
    }, frameDuration)
  );
};

const serverCount = ref(0);
const userCount = ref(0);

onMounted(() => {
  const counterElements = document.getElementById("counters");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        animateCountUp(servers.count, serverCount);
        animateCountUp(servers.users, userCount);
      } else {
        counters.forEach((c) => clearInterval(c));
        counters.clear();
      }
    });
  });

  if (counterElements) observer.observe(counterElements);
});

const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
</script>

<template>
  <h1 class="mt-60" id="counters">
    Ayako manages
    <ColorFade :text="String(numberWithCommas(serverCount))" />
    Discord communities with
    <ColorFade :text="String(numberWithCommas(userCount))" />
    members
  </h1>

  <ServerCarousel :servers="servers" />
</template>
