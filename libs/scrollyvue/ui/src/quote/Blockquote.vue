<script setup lang="ts">
const props = withDefaults(defineProps<{ quote: string, author: string }>(), { quote: '' });
</script>

<template>
  <blockquote>
    <p>{{ props.quote }}</p>
    <em>{{ props.author }}</em>
  </blockquote>
</template>

<style scoped></style>
