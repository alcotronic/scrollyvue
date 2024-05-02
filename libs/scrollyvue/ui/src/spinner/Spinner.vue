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
  <div class="spinner">
    <svg class="svgbg" viewBox="0 0 250 250">
      <g :transform="transformation">
        <path d="M 125,25 A 100 100 0 0 0 125,225" 
          fill="none" stroke="#a351b1" stroke-width="50"/>
        <path d="M 125,75 A 25 25 0 0 0 125,175" 
          fill="#a351b1" />
    </g>
    </svg>
  </div>
</template>

<style scoped>
.spinner {
  height: 100px;
  width: 100px;
}
</style>
