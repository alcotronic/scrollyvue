<script setup lang="ts">
const props = withDefaults(defineProps<{color: string, title?: string, text?: string}>(), {color: 'primary'});
</script>

<template>
  <v-card class="bg-black" :color="props.color" variant="outlined">
    <v-card-item v-if="props.title">
      <v-card-title>
        {{ title }}
      </v-card-title>
    </v-card-item>
    <v-card-item  density="compact">
      <slot name="cardItem"></slot>
    </v-card-item>
    <v-card-text v-if="props.text">
      {{ text }}
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
