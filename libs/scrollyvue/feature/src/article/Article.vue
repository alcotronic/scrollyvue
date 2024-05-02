<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { type Article } from '@scrollyvue/common';
import { ScrollyvueUiKicker, ScrollyvueUiTitle, ScrollyvueUiTeaser } from '@scrollyvue/scrollyvue-ui';
import { default as ScrollyvueFeatureSection } from '../section/Section.vue'
import { useArticleStore } from '@scrollyvue/composeable';
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{ id?: any, article?: Article }>();

const router = useRouter();
const { name } = useDisplay();

const articleStore = useArticleStore();

onBeforeMount(() => {
  if(props.id) {
    articleStore.$patch({articleId: props.id});
    articleStore.update();
    if(!articleStore.article) {
      router.push('/');
    }
  }
});
</script>

<template>
  <article v-if="articleStore.article">
    <v-sheet :class="{ xs: name === 'xs', sm: name === 'sm', md: name === 'md', lg: name === 'lg', xl: name === 'xl', xxl: name === 'xxl' }">
      <div class="article-content">
        <ScrollyvueUiKicker :kicker="articleStore.article.kicker" />
        <ScrollyvueUiTitle :title="articleStore.article.title" :titleType="'Article'" />
        <ScrollyvueUiTeaser :teaser="articleStore.article.teaser" />
        <ScrollyvueFeatureSection v-for="n in articleStore.article.sections.length" :key="n" :sectionNumber="n" :section="articleStore.article.sections[n-1]" />
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
