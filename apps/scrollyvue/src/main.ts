import './styles.scss';

import { createApp } from 'vue';
import { vuetify } from '@scrollyvue/scrollyvue-ui';
import App from './app/App.vue';

const app = createApp(App).use(vuetify);

app.mount('#root');
