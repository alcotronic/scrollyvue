<script setup lang="ts">
import { Article } from '@scrollyvue/common';
import { useArticleStore } from '@scrollyvue/composeable';
import { ScrollyvueUiKicker, ScrollyvueUiTitle, ScrollyvueUiTeaser } from '@scrollyvue/scrollyvue-ui';
import { useRouter } from 'vue-router';
const router = useRouter()

const props = defineProps<{ articles?: Array<Article> }>();

const articleStore = useArticleStore();

const selectArticle = (article: Article) => {
  console.log(`select articleId ${article.id}`);
  router.push(`/article/${article.id}`);
};

</script>

<template>
  <v-container :align-content="'center'">
    <v-row class="mb-6">
      <v-col md="6" sm="5" v-for="article in articleStore.articles" :key="article.title">
        <v-card :color="'purple-lighten-1'" variant="outlined" @click="selectArticle(article)">
          <v-card-item>
            <ScrollyvueUiKicker :kicker="article.kicker" />
            <ScrollyvueUiTitle :title="article.title" :title-type="'Overview'" class="text-black" />
            <ScrollyvueUiTeaser :teaser="article.teaser" :color="'black'" />
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
