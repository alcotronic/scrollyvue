<script setup lang="ts">
const props = withDefaults(defineProps<{ kicker: string, color: string }>(), { kicker: '', color: 'black' });
</script>

<template>
  <p class="text-purple-lighten-1" :color="color">{{ props.kicker }}</p>
</template>

<style scoped>
p {
  align-self: center;
  padding-top: 0.5em;
}
</style>
