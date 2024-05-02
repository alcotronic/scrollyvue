<script setup lang="ts">
const props = withDefaults(defineProps<{ quote: string, author: string }>(), { quote: '' });
</script>

<template>
  <p>
    <q>{{ props.quote }}</q>
    <em>{{ props.author }}</em>
  </p>
</template>

<style scoped>
p {
  display: flex;
  flex-flow: column;
  padding: 2em;
}
q {
  font-style: italic;
}
em {
  align-self: flex-end;
}
</style>
