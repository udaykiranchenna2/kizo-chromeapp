import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import * as bootstrap from 'bootstrap'
import i18next from 'i18next';
import I18NextVue from 'i18next-vue';
import he from './_locales/he/messages.json'
import en from './_locales/en/messages.json'
i18next.init({
    lng: 'he',
    resources: {
        he: {
            translation: he
          },
          en: {
            translation: en
          }
    }
  });
const app = createApp(App)
app.use(I18NextVue, {i18next});
app.mount('#app')



