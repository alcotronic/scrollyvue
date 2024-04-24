<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    imageSrc?: string;
    imageData?: string;
    imageText?: string;
    imageAltText?: string;
  }>(),
  {
    imageSrc: '',
    imageText: '',
    imageAltText: ''
   }
);
</script>

<template>
  <img v-if="imageSrc" :src="props.imageSrc" />
</template>

<style scoped></style>
