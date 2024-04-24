<script setup lang="ts">
const props = withDefaults(defineProps<{ teaser: string }>(), { teaser: '' });
</script>

<template>
  <p>{{ props.teaser }}</p>
</template>

<style scoped>
p {
  align-self: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
</style>
