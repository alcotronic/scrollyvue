import { ScrollyvueFeatureArticle, ScrollyvueFeatureArticles } from '@scrollyvue/scrollyvue-feature'

export const routes = [
  { path: '/', name: 'overview', component: ScrollyvueFeatureArticles },
  { path: '/article/:id', name: 'article', component: ScrollyvueFeatureArticle, props: true },
]

