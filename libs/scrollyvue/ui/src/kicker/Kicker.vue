<script setup lang="ts">
const props = withDefaults(defineProps<{ kicker: string }>(), { kicker: '' });
</script>

<template>
  <p class="text-purple-lighten-1">{{ props.kicker }}</p>
</template>

<style scoped>
p {
  align-self: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
</style>
