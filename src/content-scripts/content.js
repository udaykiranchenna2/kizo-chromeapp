
import { createApp } from "vue";
import App from "./Toaster.vue";

import * as bootstrap from 'bootstrap'
import i18next from 'i18next';
import I18NextVue from 'i18next-vue';
import he from '../_locales/he/messages.json'
import en from '../_locales/en/messages.json'
let loaded = false;
window.onload = async () => {
  chrome.runtime.sendMessage({type:'CHECK_SUPPORTED'}, function(response) {
    
    if(response.status){
      const el = window.top.document.querySelector('body');
      if (el) {
        var crxApp = document.querySelector("#crx-app");
    
        if (!crxApp) {
          el.insertAdjacentHTML(
            'afterend',
            '<div id="crx-app"></div>',
          );
        }
       
        try {
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
          app.mount('#crx-app');
        } catch (error) {
          console.log('Here is the error')
          console.log(error)
        }
      }
    }
    
  });
 
}


