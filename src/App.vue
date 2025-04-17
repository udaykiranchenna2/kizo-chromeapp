<template>
  <div class="container-div " >
    <Header v-if="loadUser" :messages="messages" :userLoggedIn="userLoggedIn" :loadUser="loadUser" :userData="userData"/>
    <Content v-if="OriginalData" :messages="messages"  :OriginalData="OriginalData"  :userLoggedIn="userLoggedIn" :loadUser="loadUser" :userData="userData"/>
  </div>
</template>
<script>
  import messges from './message.json'
 
import Header from "./components/Header.vue"
import Content from "./components/Content.vue"
import 'bootstrap/dist/css/bootstrap.css'
  import {
    defineComponent,
    ref,
    onMounted,
    reactive,
    toRefs
  } from "vue";
  import axios from "axios";
  import axiosCall from './axios'
  
  // import {
  //       BAlert
  //     } from 'bootstrap-vue'
  export default defineComponent({
    compatConfig: {
      MODE: 3
    },
   
    setup() {
      const messages =  ref(messges)

      const state = reactive({
        currentTab: null
      });
      const OriginalData =  ref(null);
      const userLoggedIn = ref(false);
      const loadUser = ref(false);
      const userData = ref([]);
      const BASE_URL =ref('https://kizo.co.il');
      
      const loggedInUser = () => {
        axiosCall.get('wp-json/cmd/v1/getUser')
          .then(res => {
           userData.value = res.data;
           console.log(userData.value);
           userLoggedIn.value = res.data.logged_in;
           loadUser.value = true;
          })

      }
      const GetOffers = (retryCount = 100) => {
        chrome.runtime.sendMessage(
          { type: "POPUP_INIT" },
          async tab => {
            state.currentTab = await tab;
          }
        );

        // Retry only if attempts left
        if (retryCount > 0) {
          console.log('OriginalData.value');
          console.log(OriginalData.value);
          
          setTimeout(() => {
            if (OriginalData.value === null) {
              GetOffers(retryCount - 1); // Decrement retries
            }
          }, 1000);
        } else {
          console.warn("GetOffers: Max retry limit reached.");
        }
      };

      onMounted(() => {
        loggedInUser();
        GetOffers();
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
          console.log(request.type);
          
          if (request.type === "SendData") {
            OriginalData.value = request.data;
                console.log("Received Data:", OriginalData.value);
              }
            });
          });

      return {
        OriginalData,messages,userLoggedIn,userData,loadUser,loggedInUser,BASE_URL,GetOffers,
        ...toRefs(state)
      };
    },
    components: {
    Header,Content

    }
  });
</script>
<style>
.container-div{
  min-width: 400px !important;
}
</style>
