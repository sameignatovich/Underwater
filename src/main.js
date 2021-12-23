import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';

// Plugins and CSS frameworks
import '@/assets/js/app';
import '@/assets/styles/app.scss';
import store from './store';

createApp(App)
  .use(store)
  .mount('#app');
