<script setup lang="ts">
  import { computed, ref } from 'vue';

  const angle = ref(0);
  
  const transformation = computed(() => {
    return `rotate(${angle.value} 125 125)`;
  });

  const animate = () => {
    angle.value = angle.value < 360 ? angle.value + 2 : 0;
  }
  
  setInterval(() => animate(), 10);
</script>

<template>
  <svg class="svgbg" width="250" height="250">
    <g :transform="transformation">
      <path d="M 125,25 A 100 100 0 0 0 125,225" 
         fill="none" stroke="hsla(0,0%,50%,0.5)" stroke-width="50"/>
      <!-- <path d="M 125,75 A 25 25 0 0 0 125,175" 
         fill="hsla(0,0%,50%,0.5)" /> -->
   </g>
  </svg>
</template>

<style scoped></style>
