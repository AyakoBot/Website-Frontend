<script setup lang="ts">
import ReviewCarousel from "./reviewCarousel.vue";
import ColorFade from "../../colorFade.vue";
import type { Review as ReviewType } from "../../../types/Review";
import env from "../../../env";

const emit = defineEmits<{
  (e: "reviewHovered", arg: ReviewType | null): void;
}>();

const reviews = (await fetch(`${env.api}/reviews`).then((r) =>
  r.json()
)) as ReviewType[];
reviews.sort(() => 0.5 - Math.random());

const averageScore = reviews.reduce((a, b) => a + b.score, 0) / reviews.length;

const hovering = (review: ReviewType | null) => {
  emit("reviewHovered", review);
};
</script>

<template>
  <h1 class="mt-20">
    and has an average score of
    <ColorFade :text="String(averageScore)" />
    Stars per Review
  </h1>

  <ReviewCarousel :reviews="reviews" @hover="(r) => hovering(r)" />
</template>
