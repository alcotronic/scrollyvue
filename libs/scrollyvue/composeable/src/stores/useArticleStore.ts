import { Article } from '@scrollyvue/common';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useArticleStore = defineStore('articleStore', () => {
  const articleId = ref<number | undefined>(undefined);
  const article = ref<Article | undefined>(undefined);
  const articles = ref<Array<Article>>();

  const update = () => {
    const newArticle = articles.value?.find((article: Article) => article.id == articleId.value);
    if(newArticle) {
      article.value = newArticle;
    } else {
      article.value = undefined;
    }
  }

  const reset = () => {
    articleId.value = undefined;
    article.value = undefined;
  }

  return { articleId, article, articles, update, reset };
});
