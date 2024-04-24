<script setup lang="ts">
export type TitleType = 'Article' | 'Section';

const props = withDefaults(defineProps<{ title: string, titleType: TitleType }>(), { title: '', titleType: 'Article' });
</script>

<template>
  <h1 v-if="props.titleType === 'Article'" class="title">{{ props.title }}</h1>
  <h2 v-if="props.titleType === 'Section'" class="title" >{{ props.title }}</h2>
</template>

<style scoped>
h1 {
  align-self: center;
  padding-top: 1em;
  padding-bottom: 1em;
}
h2 {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
.title {
  font-weight: bold;
}
</style>
