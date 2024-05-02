import './styles.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createWebHistory, createRouter } from 'vue-router'

import { vuetify } from '@scrollyvue/scrollyvue-ui';
import App from './app/App.vue';
import { routes } from './app/routes';


const pinia = createPinia();
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App).use(pinia).use(vuetify).use(router);

app.mount('#root');
