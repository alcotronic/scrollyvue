<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { type Article } from '@scrollyvue/common';
import { ScrollyvueUiKicker, ScrollyvueUiTitle, ScrollyvueUiTeaser } from '@scrollyvue/scrollyvue-ui';
import { default as ScrollyvueFeatureSection } from '../section/Section.vue'

const props = defineProps<{ article: Article }>();

const { name } = useDisplay();
</script>

<template>
  <article>
    <v-sheet :class="{ xs: name === 'xs', sm: name === 'sm', md: name === 'md', lg: name === 'lg', xl: name === 'xl', xxl: name === 'xxl' }">
      <div class="article-content">
        <ScrollyvueUiKicker :kicker="props.article.kicker" />
        <ScrollyvueUiTitle :title="props.article.title" :titleType="'Article'" />
        <ScrollyvueUiTeaser :teaser="props.article.teaser" />
        <ScrollyvueFeatureSection v-for="n in props.article.sections.length" :key="n" :sectionNumber="n" :section="props.article.sections[n-1]" />
      </div>
    </v-sheet>
  </article>
</template>

<style scoped>
article {
  margin: 2em;
}

.article-content {
  display: flex;
  flex-flow: column;
  align-content: center;
}

.xs,
.sm {
  max-width: 90vw;
}

.md {
  max-width: 75vw;
}

.lg,
.xl,
.xxl {
  max-width: 50vw;
}
</style>
