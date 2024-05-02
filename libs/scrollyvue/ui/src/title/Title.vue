<script setup lang="ts">
export type TitleType = 'Article' | 'Section' | 'Overview';

const props = withDefaults(defineProps<{ title: string, titleType: TitleType, color?: string }>(), { title: '', titleType: 'Article', color: 'black' });
</script>

<template>
  <h1 v-if="props.titleType === 'Article'" class="title" :style="{color: color}">{{ props.title }}</h1>
  <h2 v-if="props.titleType === 'Section'" class="title" :style="{color: color}">{{ props.title }}</h2>
  <h3 v-if="props.titleType === 'Overview'" class="title" :style="{color: color}">{{ props.title }}</h3>
</template>

<style scoped>
h1 {
  align-self: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  font-size: 4em;
}
h2 {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  font-size: 1.5em;
}
h3 {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  font-size: 1em;
}
.title {
  font-weight: bold;
}
</style>
