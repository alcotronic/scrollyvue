<script setup lang="ts">
const props = withDefaults(defineProps<{ color?: string, text?: string, icon?: string }>(), { color: 'primary', text: 'Button' });
</script>

<template>
  <v-btn :color="props.color" variant="outlined">
    <v-icon v-if="props.icon" :icon="props.icon" />
    {{ props.text }}
  </v-btn>
</template>

<style scoped></style>
