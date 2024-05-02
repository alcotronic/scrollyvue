<script setup lang="ts">
import { useArticleStore } from '@scrollyvue/composeable';
//import {ScrollyvueFeatureMap} from '@scrollyvue/scrollyvue-feature';
import { SvgFun } from '@scrollyvue/scrollyvue-feature';
import { ref, onBeforeMount } from 'vue';
import { articles } from './testArticles'
import { useRouter } from 'vue-router';

const mainElement = ref<HTMLElement | null>(null);

const articleStore = useArticleStore();

const router = useRouter()

onBeforeMount(() => {
  articleStore.reset();
  articleStore.$patch({ articles: articles });
})

const navigateToOverview = () => {
  articleStore.reset();
  router.push('/');
}
</script>

<template>
  <div ref="mainElement" />
  <v-layout class="rounded rounded-md">
    <v-app-bar>
      <v-spacer/>
      <v-app-bar-title
        class="text-center"
        @click="navigateToOverview()">ScrollyVue
      </v-app-bar-title>
      <v-spacer/>
    </v-app-bar>
    <v-main class="d-flex flex-column align-center justify-center" style="min-height: 300px;">
      <SvgFun/>
      <!-- <ScrollyvueFeatureMap/>
      <ScrollyvueFeatureArticles :articles="articles"></ScrollyvueFeatureArticles>
        <ScrollyvueFeatureArticle :article="articleData1"></ScrollyvueFeatureArticle> -->
      <RouterView />
    </v-main>
  </v-layout>
</template>
