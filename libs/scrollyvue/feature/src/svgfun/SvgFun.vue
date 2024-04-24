<script setup lang="ts">
  import { ScrollyvueUiButton} from '@scrollyvue/scrollyvue-ui';
import { computed, ref } from 'vue';
// defineProps<{}>()
  const angle = ref(0);
  const animationRunning = ref(false);
  
  const transformation = computed(() => {
    return `rotate(${angle.value} 170 200)`;
  });

  const animate = () => {
    angle.value = angle.value < 360 ? angle.value + 2 : 0;
  }

  const toggleAnimationRunning = () => {
    animationRunning.value = !animationRunning.value;
  }
  
  setInterval(() => {
      if(animationRunning.value) {
        animate();
      }
    }, 50);
</script>

<template>
  <p>Welcome to SvgFun!</p>
  <svg class="svgbg" width="500" height="500">
    <g stroke="gray" fill="none" stroke-width="3">
      <circle cx="170" cy="200" r="150" />
      <circle cx="170" cy="200" r="105" />
      <circle cx="170" cy="200" r="60" />
    </g>
    <g stroke="red" fill="none" stroke-width="30" stroke-linecap="round" :transform="transformation">
      <path d="M 70 90 A 150 150 0 0 1 270 90" />
      <path d="M 100 125 A 105 105 0 0 1 240 125" />
      <path d="M 130 160 A 60 60 0 0 1 210 160" />
    </g>
    <!-- <g id="wheel" :transform="transformation">
      <path d="M 125,25 A 100 100 0 0 0 125,225" 
         fill="none" stroke="hsla(0,0%,50%,0.5)" stroke-width="50"/>
      <path d="M 125,75 A 25 25 0 0 0 125,175" 
         fill="hsla(0,0%,50%,0.5)" />
   </g> -->
  </svg>
  <button @click="toggleAnimationRunning()">Toggle Animation</button>
  <p>{{ angle }}</p>
</template>

<style scoped>
  .svgbg {

  }
</style>
