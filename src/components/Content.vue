<template>
  <div class="">
    <div class="content-0-4-31 content-d2-0-4-35" style="direction:rtl" v-if="OriginalData.store">
      <div class="mainContainer-0-4-101 mainContainer-d5-0-4-111 blue-0-4-82 stackAbove-0-4-103 short-0-4-102 closed">
        <div class="copy-0-4-89 center-0-4-86 closed-0-4-90 copyStyleShort-0-4-108">
          <div class="truncateCopy-0-4-110"></div>
        </div>
        <div class="dismissContainer-0-4-92 closed-0-4-90 dismissContainerShort-0-4-94">
          <button aria-label="Close notification banner" class="button-2-855 closeIcon-0-4-87 unstyled-0-4-52"
            id="UniversalContainer-close-banner-icon">
            <div class="icon-0-4-45 icon-d2-0-4-117">
              <div class="h-icon">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" class="injected-svg"
                    data-src="https://cdn.honey.io/images/icon-2_0/x-16.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path stroke="#212121" stroke-width="1.5" stroke-linecap="round"
                      d="m2.327 2.052 11.565 11.565m-11.784 0L13.673 2.052" class="stroke"></path>
                  </svg></div>
              </div>
            </div>
          </button></div>
      </div>
      <div class="storeInfoContainer-0-4-118" v-if="OriginalData.store">
        <div class="storeLogo-0-4-125 storeLogo-d0-0-4-133 logo-0-4-119">
          <picture class="fitContainer-0-4-134"><img alt="" class="loading-0-4-135 load-0-4-136"
              :data-src="OriginalData.store.logo" data-srcset="" sizes="" title="" id="7683429239714414015-logo"
              size="40" shape="circle" :src="OriginalData.store.logo" srcset="">
          </picture>
        </div>
        <div class="storeInfo-0-4-120">
          <div class="storeName-0-4-121" v-if="OriginalData && OriginalData.store">{{OriginalData.store.name}}</div>
          <!-- <div class="storeCount-0-4-122">ברכישה מחנות זו תרומה   
                                
                              </div> -->
          <div class="storeCount-0-4-122" v-if="OriginalData.myassociation && OriginalData.myassociation.post_title">

            ברכישה מחנות זו תועבר תרומה ל{{ OriginalData.myassociation.post_title }}
          </div>
          <div class="storeCount-0-4-122" v-else>
            ברכישה מחנות זו, תועבר תרומה לעמותות המובילות בישראל </div>
        </div>
        <div class="storeLogo-0-4-125 storeLogo-d0-0-4-133 logo-0-4-119">
          <picture class="fitContainer-0-4-134">
            <img v-if="OriginalData  && OriginalData.myassociation && OriginalData.myassociation.assoicationImage"
              alt="" class="loading-0-4-135 load-0-4-136" :data-src="OriginalData.myassociation.assoicationImage"
              data-srcset="" sizes="" title="" id="7683429239714414015-logo" size="80" shape="circle"
              :src="OriginalData.myassociation.assoicationImage" srcset="" style="
                                width: 100%;
                            ">
            <img v-else alt="" class="loading-0-4-135 load-0-4-136"
              data-src="https://kizo.co.il/wp-content/uploads/2023/03/association-default.png" data-srcset="" sizes=""
              title="" id="7683429239714414015-logo" size="80" shape="circle"
              src="https://kizo.co.il/wp-content/uploads/2023/03/association-default.png" srcset="" style=" width: 100%;  ">

          </picture>
        </div>
      </div>
      <div  v-if="OriginalData.cashback &&OriginalData && OriginalData.code == 'success' && OriginalData.cashback.status ">
        <div class="layout-0-4-145 layout-d0-0-4-146 cashbacks">
          <div>
            <div class="scrollableCard-0-4-148">
              <small v-if="!userLoggedIn" class="text-muted"> {{$t("login_to_activate2.message" )}}</small>
              <div class="main-0-4-175">
               
                <div v-if="!userLoggedIn">
                  <a href="https://kizo.co.il/login/" target="_blank" type="button" id="loginBtn"
                    style="margin-bottom:12px" class="btn">
                    {{$t("login.message" )}} </a>
                    <button v-if="!activatedOffer" style="margin-top:12px; height: auto;"
                    @click="activateOffer(OriginalData.store.slug,OriginalData.store.id)" aria-label="Activate Rewards"
                    class="button-2-855 btn-0-4-49 btn-d15-0-4-177 primary-s53  flexible-0-4-61"
                    id="launchpad:ActivateRewardsButton">
                    <div class="btnContentContainer-0-4-48">
                      <div class="btnCopy-0-4-60" style="padding:12px;color:grey">המשך ללא התחברות (תרומה תועבר לעמותות
                        מובילות באופן אנונימי)</div>
                    </div>
                  </button>
                  <button v-else aria-label="Activate Rewards" style="margin-top:12px"
                    class="button-2-855 btn-0-4-49 btn-d15-0-4-177 successStatus-0-4-75  flexible-0-4-61"
                    id="launchpad:ActivateRewardsButton">
                    <div class="btnContentContainer-0-4-48">
                      <div class="btnCopy-0-4-60-2">Rewards Activated</div> <i
                        class="fa-solid fa-check fa-check-style"></i>
                    </div>
                  </button>
                </div>

                <button v-else-if="!activatedOffer"
                  @click="activateOffer(OriginalData.store.slug,OriginalData.store.id)" aria-label="Activate Rewards"
                  class="button-2-855 btn-0-4-49 btn-d15-0-4-177 primary-0-4-53 primary-d16-0-4-178 flexible-0-4-61"
                  id="launchpad:ActivateRewardsButton">
                  <div class="btnContentContainer-0-4-48">
                    <div class="btnCopy-0-4-60">הפעל את Kizo! </div>
                  </div>
                </button>

                <button v-else aria-label="Activate Rewards"
                  class="button-2-855 btn-0-4-49 btn-d15-0-4-177 successStatus-0-4-75  flexible-0-4-61"
                  id="launchpad:ActivateRewardsButton">
                  <div class="btnContentContainer-0-4-48">
                    <div class="btnCopy-0-4-60-2">Rewards Activated</div> <i
                      class="fa-solid fa-check fa-check-style"></i>
                  </div>
                </button>
              </div>
              <div class="noGraphMain-0-4-227"
                v-if="OriginalData.coupons && OriginalData.coupons.length  && OriginalData.cashback && OriginalData.cashback.status> 0 ||OriginalData.coupons && OriginalData.coupons.length">
                <div class="textContent-0-4-233">
                  <div class="noGraphTitle-0-4-229">
                  </div>
                  <div class="noGraphSubtitle-0-4-231 title3">
                    <strong
                      v-if="OriginalData.coupons && OriginalData.coupons.length  && OriginalData.cashback && OriginalData.cashback.status> 0">
                      <img alt="Sale Alert Icon" src="../assets/svg/fire-fill-mini.svg" class="fireIcon-0-4-198">
                      {{ $t('offers_message.message', { COUNT: OriginalData.coupons.length}) }}
                      <span v-html="OriginalData.cashback.message"></span>
                    </strong>
                    <strong v-else-if="OriginalData.coupons && OriginalData.coupons.length">Found
                      {{ OriginalData.coupons.length }} Offers to
                      use!</strong>
                  </div>
                </div>
              </div>
              <div class="storeSavingsDisclaimer-0-4-154" v-if="OriginalData.store">
                <div class="disclaimerContainer-0-4-182 disclaimerContainer-d0-0-4-184 
                                                                      body2">
                  <div class="content-0-4-183">*<span class="exclusionsText-0-4-185 body2 cashbackText-0-4-186"><span
                        style="color: inherit;">התרומה תועבר לעמותה
                        בהתאם ל<a class="terms-0-4-187" href="https://www.com/terms" target="_blank"
                          rel="noopener noreferrer" style="color: inherit;">תנאי
                          השימוש</a></span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="OriginalData && OriginalData.code == 'store_not_found'">
      <div class="no-offers">
        <div class="container text-center h6">
          {{$t("no_offers_found.message" )}}
        </div>
      </div>
      <p class="Message-content">
      </p>
    </div>
    <div v-if="OriginalData && OriginalData.code == 'success' && OriginalData.coupons.length>0" class="w-100">
      <div id="Offer-Content">
        <b-tabs align="center">
          <b-tab :title="$t('offers.message')" active>
            <div data-v-7ca44358="" class="offers card" v-for="(coupon,index) in OriginalData.coupons" :key="index">
              <div class="card-title mb-0">
                <p v-if="coupon.verified_on"><span v-html="coupon.title"></span><img src="../assets/svg/verified.svg"
                    data-toggle="tooltip" data-placement="top" :title="'Verified on : '+coupon.verified_on" class="ml-2"
                    style="margin-left:8px" /></p>
              </div>
              <div class="bg"></div>
              <div class="btn-container"><a class="card-link mr-auto "
                  v-b-toggle="'collapse-'+index+''">{{$t("see_details.message" )}} <i id="d348"
                    class="fas fa-chevron-down" style="font-size: 11px;"></i></a>
                <div ref="focusDiv" class="coupon-container d-flex align-items-center" v-if="coupon.type =='code'">
                  <p id="coupon-code" data-toggle="tooltip" data-placement="top" :title="activatedOffer?'Copied!':''"
                    class="coupon-code btn" @mouseenter="copyCode(coupon.code )"> {{ coupon.code }} <i
                      id="copy-button348" data-toggle="tooltip" data-placement="top" title="Click to Copy!"
                      class="fa fa-clone" style="color: rgb(118, 120, 132); display: none;"></i>
                  </p>
                  <button type="button" v-if="!activatedOffer" id="btn"
                    @click="activateOfferAndCopycode(OriginalData.store.slug,coupon.code)"
                    class="btn coupon-btn">{{$t("get_code.message" )}}</button>
                </div>
                <button type="button" id="btn" @click="getDeal()" class="btn" v-else-if="coupon.type =='deal'">
                  {{$t("get_deal.message" )}}

                </button>
              </div>
              <b-collapse :id="'collapse-'+index+''">
                <div id="" class="card-body">
                  <p v-html="coupon.title"></p>
                  <p v-html="coupon.description"></p>
                  <p v-if="coupon.valid_till"><b>{{$t("valid_till.message" )}} : </b> {{ coupon.valid_till }} </p>
                  <p v-if="coupon.verified_on"><b>{{$t("verified_on.message" )}} : </b> {{ coupon.verified_on}} </p>
                  <!---->
                </div>
              </b-collapse>
            </div>
          </b-tab>

        </b-tabs>
      </div>
    </div>

  </div>
</template>
<script>
  import {
    useTranslation
  } from "i18next-vue";
  import i18n from 'i18next';

  import {
    defineComponent,
    ref,
    onMounted,
    reactive,
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
    faXmark,
    faRightFromBracket
  } from '@fortawesome/free-solid-svg-icons';
  import {
    FontAwesomeIcon
  } from '@fortawesome/vue-fontawesome'
  import axiosCall from '../axios'
  library.add(faTwitter, faCopy, faLock, faBell, faChevronDown, faChevronUp, faGear, faUser, faXmark,
    faRightFromBracket)
  import BootstrapVue3, {
    vBToggle,
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
    props: {
      OriginalData: Object,
      messages: Object,
      userData: Object,
      userLoggedIn: Boolean,
      loadUser: Boolean,
    },
    setup(props) {
      const {
        t,
        i18next
      } = useTranslation();
      const {
        OriginalData,
        messages,
        userLoggedIn,
        loadUser,
        userData
      } = toRefs(props)
      const changeLanguage = () => {
        i18n.changeLanguage('en');
      };
      const selectedText = ref("");

      const activatedOffer = ref(false);
      const storesVisited = ref('');
      const PrintMessage = (code) => {
        if (code != 'store_not_found') {
          return messages.value[code].message;
        } else {
          return 'No offers found.';
        }
      }
      const BASE_URL = ref('https://kizo.co.il');
      
      // Helper functions for storage operations
      const getStorageData = async (key, defaultValue = null) => {
        return new Promise((resolve) => {
          chrome.storage.local.get(key, (result) => {
            // Check if the key exists and the data hasn't expired
            if (result[key] && result[key].expiration && result[key].expiration > Date.now()) {
              resolve(result[key].data);
            } else {
              // If expired or doesn't exist, return default value
              resolve(defaultValue);
            }
          });
        });
      };
      
      const setStorageDataWithExpiration = async (key, data, expiration) => {
        return new Promise((resolve) => {
          const storageObject = {
            [key]: {
              data: data,
              expiration: expiration
            }
          };
          
          chrome.storage.local.set(storageObject, resolve);
        });
      };
      
      onMounted(async () => {
        if (OriginalData.value && (OriginalData.value.cashback || OriginalData.value.coupon)) {
          // Replace cookies with storage API
          const storesVisitedData = await getStorageData('storesVisited', []);
          
          if (storesVisitedData && storesVisitedData.length > 0) {
            // Convert array to string format similar to the original cookie format
            storesVisited.value = storesVisitedData.join('|') + '|';
            
            if (OriginalData.value.store && 
                storesVisitedData.includes(OriginalData.value.store.slug)) {
              activatedOffer.value = true;
            }
          }
        }
      });
      
      const copyCode = (code) => {
        selectedText.value = code;
        const textarea = document.createElement("textarea");
        textarea.value = selectedText.value;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      
      const getDeal = () => {
        let URL = BASE_URL.value + '/cpn/' + OriginalData.value.store.id + '/' + 
            (userData.value.logged_in == true ? userData.value.details.id : '')
        let a = document.createElement('a');
        a.target = '_blank';
        a.href = URL;
        a.click();
      }
      
      const activateOfferAndCopycode = (slug, code) => {
        copyCode(code);
        activateOffer(slug);
      }
      
      const activateOffer = async (slug) => {
        // Get existing stores visited data
        const storesVisitedData = await getStorageData('storesVisited', []);
        
        // Add the new slug if it doesn't exist
        if (!storesVisitedData.includes(slug)) {
          storesVisitedData.push(slug);
        }
        
        // Set expiration time to 1 hour from now
        const expirationTime = Date.now() + (60 * 60 * 1000);
        
        // Update storage with new data and expiration
        await setStorageDataWithExpiration('storesVisited', storesVisitedData, expirationTime);
        
        // Update local state
        storesVisited.value = storesVisitedData.join('|') + '|';
        activatedOffer.value = true;
        
        // Open URL
        let URL = BASE_URL.value + '/str/' + OriginalData.value.store.id + '/' + 
            (userData.value.logged_in == true ? userData.value.details.id : '');
        
        let a = document.createElement('a');
        a.target = '_blank';
        a.href = URL;
        a.click();
      }
      
      return {
        OriginalData,
        PrintMessage,
        activateOffer,
        messages,
        userLoggedIn,
        loadUser,
        userData,
        BASE_URL,
        activatedOffer,
        storesVisited,
        changeLanguage,
        activateOfferAndCopycode,
        copyCode,
        selectedText,
        getDeal
      };
    },
    components: {
      BootstrapVue3,
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
      BCardText,
      BFormSelect,
      BFormSelectOption,
      BSpinner,
      BAccordion,
      BOverlay,
      BCollapse
    },
    directives: {
      'b-toggle': vBToggle,
    }
  });
</script>
<style>
  .no-offers {
    height: 100px;
    text-align: center;
    display: flex;
    align-items: center;
  }

  #Offer-Content button.nav-link.active {
    border: none;
    border-bottom: 3px solid #424ea0;
    transition: all 0.5s ease 0.1s;
    cursor: pointer;
    text-align: center;
    font-size: 15px;
    color: #424ea0;
    width: 118px;
    font-weight: 700;
    letter-spacing: 0.6px;
  }

  .tab-content {
    min-width: 400px;
    max-height: 500px;
  }

  .tab-content .tab-pane {
    padding: 20px;
  }

  .button-2-855 {
    appearance: auto;
    writing-mode: horizontal-tb !important;
    font-style: ;
    font-variant-ligatures: ;
    font-variant-caps: ;
    font-variant-numeric: ;
    font-variant-east-asian: ;
    font-weight: ;
    font-stretch: ;
    font-size: ;
    font-family: ;
    text-rendering: auto;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    box-sizing: border-box;
    background-color: buttonface;
    margin: 0em;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonborder;
    border-image: initial;
  }

  .layout-d0-0-4-26 {
    top: 16px;
  }

  .layout-0-4-25 {
    right: 22px;
    right: 96px;
    z-index: 2147483647;
    position: fixed;
  }

  *[id^="honey"] * {
    font-family: SuisseIntl, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .resetCss-0-4-1 {
    color: #212121;
    font-weight: normal;
    line-height: normal;
    text-transform: none;
  }

  .container-0-4-27 {
    width: 344px;
    display: flex;
    overflow: hidden;
    position: relative;
    box-shadow: 0px 2px 35px rgb(0 0 0 / 25%);
    text-align: initial;
    border-radius: 5px 5px 5px 5px;
    flex-direction: column;
    letter-spacing: 0px;
    background-color: #EEEEEE;
  }

  *[id^="honey"] * {
    font-family: SuisseIntl, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .resetCss-0-4-1 {
    color: #212121;
    font-weight: normal;
    line-height: normal;
    text-transform: none;
  }

  .page-0-4-28 {
    top: 0;
    left: 0;
    width: 344px;
  }

  *[id^="honey"] * {
    font-family: SuisseIntl, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .container-d0-0-4-33 {
    flex: 1 1 0%;
    height: 100%;
    display: flex;
    max-height: 685px;
    text-align: initial;
    flex-direction: column;
  }

  .header-d1-0-4-34 {
    z-index: 2;
    flex-basis: 48px;
  }

  .root-0-4-37 {
    height: 56px;
    display: flex;
    box-shadow: 0px 1px 2px rgb(0 0 0 / 10%);
    justify-content: space-between;
    background-color: #ffffff;
  }

  .container-d0-0-4-33 {
    flex: 1 1 0%;
    height: 100%;
    display: flex;
    max-height: 685px;
    text-align: initial;
    flex-direction: column;
  }

  .container-0-4-27 {
    width: 344px;
    display: flex;
    overflow: hidden;
    position: relative;
    box-shadow: 0px 2px 35px rgb(0 0 0 / 25%);
    text-align: initial;
    border-radius: 5px 5px 5px 5px;
    flex-direction: column;
    letter-spacing: 0px;
    background-color: #EEEEEE;
  }

  .leftContainer-0-4-38 {
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
  }

  .middleContainer-0-4-39 {
    display: flex;
    align-items: center;
  }

  .rightContainer-0-4-40 {
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
  }

  .settingButton-0-4-47 {
    width: 32px;
    border: none;
    cursor: pointer;
    height: 32px;
    display: flex;
    background: none;
    transition: 0.2s;
    align-items: center;
    border-radius: 3px;
    justify-content: center;
  }

  .unstyled-0-4-52 {
    color: inherit;
    border: none;
    cursor: pointer;
    margin: 0px;
    display: inline-block;
    padding: 0px;
    font-size: inherit;
    background: none;
    transition: all 0.2s ease 0s;
    font-weight: inherit;
    text-decoration: inherit;
  }

  .settingButton-0-4-47 {
    width: 32px;
    border: none;
    cursor: pointer;
    height: 32px;
    display: flex;
    background: none;
    transition: 0.2s;
    align-items: center;
    border-radius: 3px;
    justify-content: center;
  }

  .unstyled-0-4-52 {
    color: inherit;
    border: none;
    cursor: pointer;
    margin: 0px;
    display: inline-block;
    padding: 0px;
    font-size: inherit;
    background: none;
    transition: all 0.2s ease 0s;
    font-weight: inherit;
    text-decoration: inherit;
  }

  .icon-d1-0-4-72 div {
    width: 16px;
    height: 16px;
  }

  .icon-d1-0-4-72 div {
    width: 16px;
    height: 16px;
  }

  .icon-d1-0-4-72 * {
    vector-effect: non-scaling-stroke;
  }

  .closeButton-0-4-73 {
    width: 32px;
    height: 32px;
    position: initial;
    margin-right: -8px;
  }

  .closeButton-0-4-74 {
    width: 44px;
    border: none;
    cursor: pointer;
    height: 44px;
    display: flex;
    padding: 0;
    z-index: 1;
    position: absolute;
    background: none;
    transition: 0.2s;
    align-items: center;
    border-radius: 3px;
    justify-content: center;
  }

  .content-d2-0-4-35 {
    flex-grow: 1;
    max-height: 580px;
    overflow-y: auto;
  }

  .mainContainer-0-4-101.closed {
    height: 0px;
    padding: 0px 24px;
    min-height: 0px;
  }

  .mainContainer-d5-0-4-111 {
    z-index: 3;
  }

  .stackAbove-0-4-103 {
    position: absolute;
  }

  .short-0-4-102 {
    padding: 10px 12px;
  }

  .mainContainer-0-4-101 {
    width: 100%;
    display: flex;
    min-height: 40px;
    align-items: center;
    justify-content: space-between;
    padding: 10px 24px;
    transition: height 0.2s ease 0s, padding;
  }

  .blue-0-4-82 {
    background-color: rgb(61, 104, 251);
  }

  .copyStyleShort-0-4-108 {
    width: calc(100% - 28px);
  }

  .closed-0-4-90 {
    display: none !important;
  }

  .truncateCopy-0-4-110 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .dismissContainerShort-0-4-94 {
    margin-left: 12px;
  }

  .dismissContainer-0-4-92 {
    display: flex;
    align-items: center;
    margin-left: 24px;
  }

  .closed-0-4-90 {
    display: none !important;
  }

  .closeIcon-0-4-87 {
    cursor: pointer;
    transition: all 0.2s ease 0s;
  }

  .unstyled-0-4-52 {
    color: inherit;
    border: none;
    cursor: pointer;
    margin: 0px;
    display: inline-block;
    padding: 0px;
    font-size: inherit;
    background: none;
    transition: all 0.2s ease 0s;
    font-weight: inherit;
    text-decoration: inherit;
  }

  .storeInfoContainer-0-4-118 {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(224, 224, 224);
    background-color: rgb(255, 255, 255);
  }

  .logo-0-4-119 {
    margin: 11px 24px;
  }

  .storeLogo-d0-0-4-133 {
    width: 40px;
    height: 40px;
    display: flex;
    overflow: hidden;
    position: relative;
    align-items: center;
    flex-shrink: 0;
    border-radius: 50%;
    justify-content: center;
  }

  .storeLogo-d0-0-4-133::before {
    /* top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    content: ""; */
    /* position: absolute; */
    background-color: rgba(33, 33, 33, 0.05);
  }

  .fitContainer-0-4-134 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .container-d0-0-4-33 {
    flex: 1 1 0%;
    height: 100%;
    display: flex;
    max-height: 685px;
    text-align: initial;
    flex-direction: column;
  }

  .storeLogo-d0-0-4-133 img {
    width: 100%;
    align-self: center;
  }

  .load-0-4-136 {
    opacity: 1;
  }

  .loading-0-4-135 {
    /* opacity: 0; */
    transition: opacity 200ms;
  }


  .storeName-0-4-121 {
    color: rgb(33, 33, 33);
    overflow: hidden;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .storeCount-0-4-122 {
    color: rgb(97, 97, 97);
    font-size: 11px;
    font-weight: 600;
  }

  .storeFollow-d0-0-4-124 {
    width: 71px;
  }

  .storeFollow-0-4-123 {
    display: inline-block;
    text-align: right;
    vertical-align: middle;
  }

  .main-0-4-138 {
    display: flex;
    padding-right: 8px;
    justify-content: flex-end;
  }

  .secondary-d12-0-4-142 {
    border-color: rgb(61, 104, 251);
    background-color: rgb(61, 104, 251);
  }

  .btn-d10-0-4-140 {
    cursor: pointer;
    height: 24px;
    outline: none;
    padding: 0px 8px;
    background: none;
    box-shadow: none;
    transition: all 0.2s ease 0s;
    text-shadow: none;
    user-select: none;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
  }

  .btnContentContainer-0-4-48 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-d10-0-4-140 .btnCopy-0-4-60 {
    font-size: 12px;
  }

  .layout-d0-0-4-146 {
    margin-bottom: 8px;
  }

  .root-0-4-153 {
    overflow: visible;
  }

  .c-root-0-4-162 {
    overflow: hidden;
    background: #ffffff;
  }

  .noGraphMain-0-4-147 {
    display: flex;
    padding: 24px 24px 0px;
    flex-direction: row;
    background-color: #ffffff;
  }

  .textContent-0-4-152 {
    display: flex;
    margin-bottom: 24px;
    flex-direction: column;
    justify-content: center;
  }

  .noGraphTitle-0-4-148 {
    color: #212121;
    display: flex;
    font-size: 14px;
    align-items: center;
    font-weight: 500;
    padding-bottom: 8px;
  }

  .noGraphSubtitle-0-4-150 {
    color: #212121;
    padding-bottom: 8px;
  }

  .noGraphDescription-0-4-151 {
    font-size: 12px;
    line-height: 16px;
    padding-bottom: 16px;
  }

  .primary-d21-0-4-199 {
    border-color: #46B29D;
    background-color: #46B29D;
  }

  .btn-d20-0-4-198 {
    cursor: pointer;
    height: 40px;
    outline: none;
    padding: 0px 16px;
    background: none;
    box-shadow: none;
    transition: all 0.2s ease 0s;
    text-shadow: none;
    user-select: none;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
  }

  .flexible-0-4-61 {
    width: 100%;
    padding: 0px;
    overflow: hidden;
  }

  .btnContentContainer-0-4-48 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-d20-0-4-198 .btnCopy-0-4-60 {
    font-size: 14px;
  }

  .btnCopy-0-4-60 {
    color: #ffffff;
  }

  .btnCopy-0-4-60-2 {
    color: #46B29D;
  }

  .disclaimerContainer-d1-0-4-203 {
    color: rgb(117, 117, 117);
    font-size: 11px;
    text-align: left;
    line-height: 16px;
    padding-top: 16px;
    justify-content: center;
  }

  .content-0-4-174 {
    display: flex;
  }

  .cashbackText-0-4-177 {
    color: #757575;
    display: block;
    font-size: 11px;
    line-height: 16px;
  }

  .overlay-0-4-188 {
    width: 100%;
    bottom: 0px;
    height: 0px;
    opacity: 0;
    z-index: 3;
    position: absolute;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: rgb(0, 0, 0);
  }

  .container-d0-0-4-191 {
    max-height: 0px;
  }

  .container-0-4-189 {
    width: 100%;
    bottom: 0px;
    height: auto;
    display: flex;
    z-index: 4;
    position: absolute;
    transition: max-height 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 5px;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
  }

  .wrapper-0-4-190 {
    display: flex;
    opacity: 0;
    overflow: hidden;
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-direction: column;
  }

  .primary-0-4-53 {
    border-color: #46B29D;
    background-color: #46B29D;

  }

  .primary-0-4-53:hover {
    border-color: #86e3d0 !important;
    background-color: #86e3d0 !important;
  }

  .c-root-0-4-214 {
    overflow: hidden;
    background: #ffffff;
  }

  .container-0-4-199 {
    padding: 16px 24px;
  }

  .headerContent-0-4-200 {
    display: flex;
    flex-wrap: wrap;
  }

  .row-0-4-208 {
    display: inline-flex;
    flex-basis: 100%;
    align-items: center;
    justify-content: flex-start;
  }

  .column-0-4-207 {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
  }

  .title-0-4-205 {
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
  }

  .fireIcon-0-4-198 {
    width: 16px;
    filter: invert(34%) sepia(91%) saturate(1916%) hue-rotate(336deg) brightness(122%) contrast(102%);
    height: 16px;
    vertical-align: text-bottom;
  }

  *[id^="honey"] .link1 {
    font-size: 11px;
    font-weight: 500;
    line-height: 16px;
    text-decoration: underline;
  }

  .description-0-4-206 {
    color: #616161;
  }

  .productListContainer-0-4-201 {
    margin: 18px 0;
  }

  .productListContent-0-4-202 {
    width: 100%;
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: center;
  }

  .productListContent-0-4-202 *:not(:last-child) {
    margin-right: 8px;
  }

  .productCard-0-4-203 {
    width: 68px;
    border: none;
    cursor: pointer;
    height: 68px;
    display: flex;
    background: transparent;
    align-items: center;
    justify-content: center;
  }

  .product-0-4-211 {
    border: 1px solid #e0e0e0;
    display: flex;
    transition: border 0.2s;
    align-items: center;
    border-radius: 4px;
    flex-direction: column;
  }

  .productImage-0-4-204 {
    width: auto;
    height: auto;
    max-width: 60px;
    min-width: 60px;
    max-height: 60px;
    min-height: 60px;
    padding-left: 4px;
  }

  .productListContent-0-4-202 *:not(:last-child) {
    margin-right: 8px;
  }

  .productCard-0-4-203 {
    width: 68px;
    border: none;
    cursor: pointer;
    height: 68px;
    display: flex;
    background: transparent;
    align-items: center;
    justify-content: center;
  }

  .main-0-4-175 {
    padding: 16px 24px 0 24px;
    border-top: 1px solid;
    background-color: #ffffff;
    border-top-color: #f5f5f5;
  }

  .btn-d15-0-4-177 {
    cursor: pointer;
    height: 40px;
    outline: none;
    padding: 0px 16px;
    background: none;
    box-shadow: none;
    transition: all 0.2s ease 0s;
    text-shadow: none;
    user-select: none;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
  }

  .primary-d16-0-4-178 {
    border-color: #46B29D;
    background-color: #46B29D;
  }



  .hydrated {
    visibility: inherit;
  }

  .flexible-0-4-61 {
    width: 100%;
    padding: 0px;
    overflow: hidden;
  }

  .discount-0-4-212 {
    color: #ffffff;
    width: 100%;
    height: 20px;
    display: flex;
    background: #ff7171;
    align-items: center;
    border-radius: 0 0 4px 4px;
    justify-content: center;
  }

  .noGraphMain-0-4-227 {
    display: flex;
    padding: 24px 24px 0px;
    flex-direction: row;
    background-color: #ffffff;
  }

  .cashbackText-0-4-186 {
    color: #757575;
    display: block;
    font-size: 11px;
    line-height: 16px;
  }

  .storeSavingsDisclaimer-0-4-154 {
    margin-left: 24px;
    margin-right: 24px;
  }

  .noGraphSubtitle-0-4-231 {
    color: #212121;
    padding-bottom: 8px;
  }

  .noGraphTitle-0-4-229 {
    color: #212121;
    display: flex;
    font-size: 14px;
    align-items: center;
    font-weight: 500;
    padding-bottom: 8px;
  }

  .noGraphDescription-0-4-232 {
    font-size: 12px;
    line-height: 16px;
    padding-bottom: 16px;
  }

  .disclaimerContainer-d0-0-4-184 {
    color: rgb(117, 117, 117);
    font-size: 11px;
    text-align: left;
    line-height: 16px;
    padding-top: 16px;
    justify-content: center;
  }

  .container-d0-0-4-33 {
    flex: 1 1 0%;
    height: 100%;
    display: flex;
    max-height: 685px;
    text-align: initial;
    flex-direction: column;
  }

  .content-0-4-183 {
    display: flex;
  }

  .scrollableCard-0-4-148 {
    margin-bottom: 8px;
    padding-bottom: 16px;
    background-color: #ffffff;
  }

  .title-0-4-44 {
    flex: 1;
    color: #46B29D;
    height: 24px;
    font-size: 18px;
    margin-top: 0;
    font-weight: 500;
    padding-left: 5px;
    margin-bottom: 0;
  }



  .successStatus-0-4-75 {
    pointer-events: none;
    border-color: rgb(0, 133, 86) !important;
    background-color: #fff !important;
  }

  .root-0-4-42 {
    display: flex;
  }

  .logo-image-1 {
    width: 20px;
    margin: 5px;
  }

  .fa-check-style {
    color: rgb(70, 178, 157);
    padding-top: 4px;
    padding-right: 4px;
  }

  .right-side-button {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .draggable-button-085-4 {
    position: fixed;
    right: 0px;
    top: 10px;
  }

  .root-0-4-15 {
    width: 80px;
    position: relative;
    background: linear-gradient(180deg, rgb(70, 178, 157) 0%, rgb(55, 149, 130) 100%);
    box-shadow: 0px 2px 35px rgb(0 0 0 / 25%);
    min-height: 64px;
    border-radius: 6px 0px 0px 6px;
  }

  .root-0-4-6 {
    cursor: move;
    display: flex;
  }

  .topRow-0-4-16 {
    top: 0;
    width: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: space-between;
  }

  .logoAnimation-d1-0-4-12 {
    height: 64px;
    display: flex;
    flex-grow: 1;
    transition: height 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s, transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    flex-direction: column;
    pointer-events: none;
    justify-content: center;
  }

  .loadAnimation-d2-0-4-13 {
    height: 164px;
    display: flex;
    animation: 0s ease 0s 1 normal none running none;
    transform: scale(1);
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    align-items: center;
    pointer-events: none;
    justify-content: center;
  }

  .root-d0-0-4-18 {
    transition: paddingTop 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    padding-top: 0px;
  }

  .logo-0-4-19 {
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .button-sidebar-555-1 {
    display: flex;
  }

  .drag-holder-555-1 {
    padding: 3px;
    background: rgb(67 153 136);
    border-left: 2px solid rgb(11 132 108);
    cursor: move;
  }

  .logo-image-1 {
    animation: fade-in-blink-resize 3s ease-in-out forwards;
  }

  .draggable-button-085-4 {
    z-index: 999999999999;
  }

  .drag-holder-555-1 {
    display: none;
  }

  .draggable-button-085-4:hover .drag-holder-555-1 {
    display: block;
  }

  #Kizo-sidebarpopup {
    position: fixed;
  }

  span.holder-dot-555 {
    color: white;
    padding: 2px;
    font-size: 16px;
    font-weight: 600;
  }
</style>