<script setup lang="ts">
const props = withDefaults(defineProps<{text: string, firstParagraph?: boolean }>(), { text: '', firstParagraph: false });
</script>

<template>
  <p class="text" :class="{'first-paragraph': props.firstParagraph}">{{ props.text }}</p>
</template>

<style scoped>
p.first-paragraph::first-letter {
  font-weight: 500;
  font-size: 320%;
  margin: 5px 0 -5px 0;
  padding: 0 .1em 0 0;
  height: .7em;
  line-height: .85em;
  float: left;
}
p.text {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
</style>
