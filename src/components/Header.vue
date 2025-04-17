<template>
  <div class="d-flex justify-content-between topnav">
    <div style=" display: flex;
      justify-content: center;">
      <img src="../assets/icons/icon.png" alt="" class="Kizo-logo m-auto"  >
    </div>
    <div class="action-buttons my-auto">
      <div class="d-flex" v-if="loadUser">
        <b-dropdown id="dropdown-1" class="m-md-2 dropdown-button" v-if="userLoggedIn">
          <template #button-content>
            <font-awesome-icon icon="fa-solid fa-gear" class="cursor-pointer" size="lg" />
          </template> 
          <b-dropdown-item><a class="wp-link" target="_blank" :href="BASE_URL+'/wp-admin/admin.php?page=cashback'">My donations</a>
          </b-dropdown-item>
          <b-dropdown-item> <a class="wp-link" target="_blank" :href="BASE_URL+'/wp-admin/profile.php'">My Profile</a></b-dropdown-item>
        </b-dropdown>
        <b-dropdown id="dropdown-2" class="m-md-2 dropdown-button" v-if="userLoggedIn">
          <template #button-content>
            <!-- <font-awesome-icon icon="fa-solid fa-user " class="cursor-pointer" size="lg" /> -->
            <b-avatar variant="primary" :text="userData.details.display_name.charAt(0)" c></b-avatar>
          </template>
          <!-- <b-dropdown-item><a target="_blank" class="wp-link" :href="BASE_URL+'/wp-admin/profile.php'"> {{$t("profile.message" )}}</a></b-dropdown-item> -->
          <b-dropdown-item><a target="_blank" class="wp-link" :href="BASE_URL+'/wp-login.php?action=logout&_wpnonce=ef981aa91'"> {{$t("logout.message" )}}</a></b-dropdown-item>

        </b-dropdown>
        <div class="m-auto"  v-if="!userLoggedIn">
          <a target="_blank" class="wp-link" :href="BASE_URL+'/login/'">
        <font-awesome-icon icon="fa-solid fa-right-from-bracket" size="xl" class="m-1 cursor-pointer" style="margin-top:6px !important;margin-right:10px !important" />
          </a>
        </div>
        <div class="m-auto">
        <font-awesome-icon @click="ClosePopup"   icon="fa-solid fa-xmark" size="xl" class="m-1 cursor-pointer header-button" style="margin-top:6px !important" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useTranslation } from "i18next-vue";
  import {
    defineComponent,
    ref,
    onMounted,
    reactive,
    computed,
    toRefs
  } from "vue";
  import axios from "axios";
  import {
    library
  } from '@fortawesome/fontawesome-svg-core'
  import {
    faTwitter
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faCopy
  } from '@fortawesome/free-regular-svg-icons'
  import {
    faLock,
    faBell,
    faChevronDown,
    faChevronUp,
    faGear,
    faUser,
    faXmark,faRightFromBracket
  } from '@fortawesome/free-solid-svg-icons';
  import {
    FontAwesomeIcon
  } from '@fortawesome/vue-fontawesome'
  import axiosCall from '../axios'
  library.add(faTwitter, faCopy, faLock, faBell, faChevronDown, faChevronUp, faGear, faUser, faXmark,faRightFromBracket)
  import BootstrapVue3, {
    BTable,
    BTabs,
    BTab,
    BFormCheckbox,
    BAvatar,
    BImg,
    BBadge,
    BPagination,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BModal,
    BDropdown,
    BDropdownItem,
    BDropdownForm,
    BFormRadioGroup,
    BFormRadio,
    BInputGroup,
    BInputGroupAppend,
    BFormInput,
    BButton,
    BFormGroup,
    BCollapse,
    BCardText,
    BFormSelect,
    BFormSelectOption,
    BSpinner,
    BAccordion,
    BOverlay,
  } from 'bootstrap-vue-3'
  export default defineComponent({
    compatConfig: {
      MODE: 3
    },
    props:{
      messages:Object,
      userData:Object,
      userLoggedIn:Boolean,
      loadUser:Boolean,
      
    },
    setup(props) {
const { t, i18next } = useTranslation();
    

      const { messages } = toRefs(props)
      
      const BASE_URL =ref('https://kizo.co.il');
      const {userLoggedIn,loadUser,userData} =  toRefs(props);

      const CallReq = ()=>{
        chrome.runtime.sendMessage(
      {
        what: "kToBeatingHeart",
        svgPathFrom: 'logoPathStr',
        svgPathTo: 'heartPathStr',
        transitionTime: 600,
        noBeats: 3,
      },
      function (response) {}
    );
      }
      const ClosePopup = ()=>{
        window.close();
        return 0;
        chrome.runtime.sendMessage({
          type: "POPUP_CLOSE"
        });
      }
      onMounted(() => {
     
      })
      return {
        ClosePopup,CallReq,messages,userLoggedIn,userData,loadUser,
        BASE_URL,t
      };
    },
    components: {
      FontAwesomeIcon,
      BTable,
      BTabs,
      BTab,
      BFormCheckbox,
      BAvatar,
      BImg,
      BBadge,
      BPagination,
      BRow,
      BCol,
      BCard,
      BCardHeader,
      BCardBody,
      BModal,
      BDropdown,
      BDropdownItem,
      BDropdownForm,
      BFormRadioGroup,
      BFormRadio,
      BInputGroup,
      BInputGroupAppend,
      BFormInput,
      BButton,
      BFormGroup,
      BCollapse,
      BCardText,
      BFormSelect,
      BFormSelectOption,
      BSpinner,
      BAccordion,
      BOverlay,
    }
  });
</script>
<style>
  .dropdown-button button,
  .dropdown-button button:hover,
  .dropdown-button button:active,
  .dropdown-button button:focus,
  .dropdown-button button:focus-visible {
    background: transparent !important;
    color: rgb(80, 78, 78);
    border: none;
  }
  
  .dropdown-button button::after {
    content: none;
  }
  .cursor-pointer{
    cursor: pointer;
  }
  img.Kizo-logo {
    width:33px !important;
    height:33px !important;
}
 .b-avatar{
  height: 1.5rem !important;
  width:  1.5rem !important;
}
 span.b-avatar-text.text-light {
  font-weight: bold;
}
 #dropdown-1{
  padding: 0;
}
.wp-link{
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  color: rgb(39, 39, 39);
}
 .dropdown-item{
  text-align: center !important;
  padding: 0 !important;

}
 .dropdown-item:hover .wp-link{
  font-size: 14px;
  font-weight: 500; 

}
.topnav{
  height: 60px;
    padding: 10px 20px 0 20px;
}

</style>