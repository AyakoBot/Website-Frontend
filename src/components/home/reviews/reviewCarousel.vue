<script setup lang="ts">
import Review from "./review.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import type { Review as ReviewType } from "../../../types/Review";

const props = defineProps<{ reviews: ReviewType[] }>();
const emit = defineEmits<{
  (e: "hover", arg: ReviewType | null): void;
}>();

const reviews = ref([...props.reviews, ...props.reviews, ...props.reviews]);
let interval: number | null = null;
const slidesToSkip = 10;

onMounted(() => {
  Array.from(document.getElementsByClassName("review")).forEach((server) => {
    const width = server.getBoundingClientRect().width;

    server.animate(
      [
        { transform: "translateX(0)" },
        { transform: `translateX(-${(width + 50) * slidesToSkip}px)` },
      ],
      {
        duration: 5000 * slidesToSkip,
        easing: "linear",
        iterations: Infinity,
      }
    );
  });

  interval = setInterval(() => {
    new Array(slidesToSkip).fill(0).forEach(() => {
      reviews.value.push(reviews.value.shift() as ReviewType);
    });
  }, 5000 * slidesToSkip);
});

onBeforeUnmount(() => (interval ? clearInterval(interval) : null));
onbeforeunload = () => (interval ? clearInterval(interval) : null);

const contentToShow = ref<string | null>();

const hover = (hovering: boolean, review: ReviewType) => {
  contentToShow.value = hovering ? review.content : null;
  emit("hover", hovering ? review : null);
};
</script>

<template>
  <div class="flex gap-10 mt-12 justify-start items-center">
    <Review
      v-for="(s, i) in reviews"
      :key="i"
      :content="s.content"
      :score="s.score"
      :username="s.username"
      :avatar="s.avatar"
      class="review"
      :index="i"
      draggable="false"
      @mouseleave="() => hover(false, s)"
      @mouseenter="() => hover(true, s)"
    />
  </div>
</template>
