<script setup lang="ts">
const props = withDefaults(defineProps<{ teaser: string, color?: string }>(), { teaser: '', color: 'black' });
</script>

<template>
  <p :style="{color: color}">{{ props.teaser }}</p>
</template>

<style scoped>
p {
  align-self: center;
  padding-bottom: 2em;
}
</style>
