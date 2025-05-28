<template>
  <div class="sidebar-div">
    <!-- <VueDraggable> -->
    <div ref="draggableButton" class="draggable-button-085-4" @mousedown="startDrag"
      :style="{ right: right + 'px', top: top + 'px' }">
      <div class="layout-0-4-2 layout-d0-0-4-3 button-sidebar-555-1">

        <div class="vue-kizo-draggable" style="transform: translate(0px, 0px);">
          <div class="shake-0-4-10 shake-d3-0-4-14">
            <div class="teaserAnimateIn-0-4-7 teaserAnimateIn-d0-0-4-11">
              <div class="root-0-4-6">
                <div class="root-0-4-15">
                  <div class="topRow-0-4-16">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="logoAnimation-0-4-8 logoAnimation-d1-0-4-12">
                    <div class="loadAnimation-0-4-9 loadAnimation-d2-0-4-13">
                      <div class="root-0-4-17 root-d0-0-4-18">
                        <div class="logo-0-4-19">
                          <img src="../assets/svg/whitelogoSVG.svg" alt="" class="logo-image-1">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="drag-holder-555-1">
          <div style="flex"> <span class="holder-dot-555">.</span><span class="holder-dot-555">.</span></div>
          <div style="flex"> <span class="holder-dot-555">.</span><span class="holder-dot-555">.</span></div>
          <div style="flex"> <span class="holder-dot-555">.</span><span class="holder-dot-555">.</span></div>
        </div>
      </div>

    </div>
    <div id="Kizo-sidebarpopup-div" class="kizo-popup-injection" v-if="sidebarpopup"
      style="z-index: 2147483647 !important; display: block !important; direction: rtl;">

      <div style="z-index: 2147483647 !important; display: block !important;">
        <div id="honey">
          <!-- <link rel="stylesheet" type="text/css" href="../assets/kizo-sidebar.css"> -->
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
            integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
          <div class="resetCss-0-4-1">
            <slot>

              <div class="layout-0-4-25 layout-d0-0-4-26 dd" id="Kizo-sidebarpopup"
                :style="{ right: rightpopup + 'px', top: toppopup + 'px' }">
                <div>
                  <div class="container-0-4-27" style="display: flex;" @mouseover="handleMouseOver"
                    @mouseleave="handleMouseLeave">
                    <div class="page-0-4-28">
                      <div class="container-0-4-29 container-d0-0-4-33">
                        <div class="header-0-4-30 header-d1-0-4-34">
                          <div class="root-0-4-37" style="height: 48px;">
                            <div class="leftContainer-0-4-38">
                              <div class="root-0-4-42">
                                <img src="../assets/svg/logoSVG.svg" alt="" class="logo-image-1">
                                <h1 class="title-0-4-44"> Kizo - קיזו </h1>
                              </div>
                            </div>
                            <div class="middleContainer-0-4-39"></div>
                            <div class="rightContainer-0-4-40">
                              <button aria-label="Honey Settings" v-if="odata&& odata.logged_in"
                                class="button-2-855 settingButton-0-4-47 unstyled-0-4-52 " aria-expanded="false">
                                <div class="icon-0-4-45 icon-d1-0-4-72">
                                  <div class="h-icon">

                                    <div> <label class="dropdown">

                                        <div class="dd-button">
                                          <img src="../assets/svg/gear.svg">
                                        </div>

                                        <input type="checkbox" class="dd-input" id="">

                                        <ul class="dd-menu">
                                          <li>
                                            <a class="wp-link" target="_blank"
                                              :href="BASE_URL+'/wp-admin/admin.php?page=cashback'">My donations</a>
                                          </li>
                                          <li>
                                            <a class="wp-link" target="_blank"
                                              :href="BASE_URL+'/wp-admin/profile.php'">My Profile</a>
                                          </li>
                                        </ul>

                                      </label></div>
                                  </div>
                                </div>
                              </button>
                              <button aria-label="Honey Settings" @click="sidebarpopup = !sidebarpopup"
                                class="button-2-855 settingButton-0-4-47 unstyled-0-4-52">
                                <div>
                                  <div class="icon-0-4-45 icon-d1-0-4-72">
                                    <img style="margin-top: 6px;" src="../assets/svg/cancel.svg" />
                                  </div>
                                </div>
                              </button></div>
                          </div>
                        </div>
                        <div class="content-0-4-31 content-d2-0-4-35">
                          <div
                            class="mainContainer-0-4-101 mainContainer-d5-0-4-111 blue-0-4-82 stackAbove-0-4-103 short-0-4-102 closed">
                            <div class="copy-0-4-89 center-0-4-86 closed-0-4-90 copyStyleShort-0-4-108">
                              <div class="truncateCopy-0-4-110"></div>
                            </div>
                            <div class="dismissContainer-0-4-92 closed-0-4-90 dismissContainerShort-0-4-94">
                              <button aria-label="Close notification banner"
                                class="button-2-855 closeIcon-0-4-87 unstyled-0-4-52"
                                id="UniversalContainer-close-banner-icon">
                                <div class="icon-0-4-45 icon-d2-0-4-117">
                                  <div class="h-icon">
                                    <div>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                                        class="injected-svg" data-src="https://cdn.honey.io/images/icon-2_0/x-16.svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path stroke="#212121" stroke-width="1.5" stroke-linecap="round"
                                          d="m2.327 2.052 11.565 11.565m-11.784 0L13.673 2.052" class="stroke"></path>
                                      </svg></div>
                                  </div>
                                </div>
                              </button></div>
                          </div>
                          <div class="storeInfoContainer-0-4-118">
                            <div class="storeLogo-0-4-125 storeLogo-d0-0-4-133 logo-0-4-119">
                              <picture class="fitContainer-0-4-134"><img alt="" class="loading-0-4-135 load-0-4-136"
                                  :data-src="odata.store.logo" data-srcset="" sizes="" title=""
                                  id="7683429239714414015-logo" size="40" shape="circle" :src="odata.store.logo"
                                  srcset="">
                              </picture>

                            </div>
                            <div class="storeInfo-0-4-120">
                              <div class="storeName-0-4-121" v-if="odata && odata.store">{{odata.store.name}}</div>
                              <!-- <div class="storeCount-0-4-122">ברכישה מחנות זו תרומה   
                                
                              </div> -->
                              <div class="storeCount-0-4-122"
                                v-if="odata.myassociation && (odata.myassociation.post_title || odata.myassociation.name) ">

                                ברכישה מחנות זו תועבר תרומה ל{{ odata.myassociation.post_title ?odata.myassociation.post_title :odata.myassociation.name }}
                              </div>
                              <div class="storeCount-0-4-122" v-else>
                                ברכישה מחנות זו, תועבר תרומה לעמותות המובילות בישראל </div>
                            </div>
                            <div class="storeLogo-0-4-125 storeLogo-d0-0-4-133 logo-0-4-119">
                              <picture class="fitContainer-0-4-134">
                                <img v-if="odata  && odata.myassociation && odata.myassociation.assoicationImage" alt=""
                                  class="loading-0-4-135 load-0-4-136" :data-src="odata.myassociation.assoicationImage"
                                  data-srcset="" sizes="" title="" id="7683429239714414015-logo" size="80"
                                  shape="circle" :src="odata.myassociation.assoicationImage" srcset=""
                                  style="width: 100%;">
                                <img v-else alt="" class="loading-0-4-135 load-0-4-136"
                                  data-src="https://kizo.co.il/wp-content/uploads/2023/03/association-default.png"
                                  data-srcset="" sizes="" title="" id="7683429239714414015-logo" size="80"
                                  shape="circle"
                                  src="https://kizo.co.il/wp-content/uploads/2023/03/association-default.png" srcset=""
                                  style="width: 100%;">

                              </picture>
                            </div>
                          </div>
                          <div v-if="odata.cashback &&odata && odata.code == 'success' && odata.cashback.status ">
                            <div class="layout-0-4-145 layout-d0-0-4-146 cashbacks">
                              <div>
                                <div class="scrollableCard-0-4-148">
                                  <small v-if="!odata.logged_in" class="text-muted sm0text">
                                    {{$t("login_to_activate2.message" )}}</small>
                                  <div class="main-0-4-175">
                                    <div v-if="!odata.logged_in">
                                      <a href="https://kizo.co.il/login/" target="_blank" type="button" id="loginBtn"
                                        style="margin-bottom:12px" class="btn">
                                        {{$t("login.message" )}} </a>
                                      <button v-if="!Cashbackcookied"
                                        style="margin-top:12px; height: auto;border:1px solid #91979c"
                                        @click="activateCashback(odata.store.slug,odata.store.id)"
                                        aria-label="Activate Rewards"
                                        class="button-2-855 btn-0-4-49 btn-d15-0-4-177 primary-s53  flexible-0-4-61"
                                        id="launchpad:ActivateRewardsButton">
                                        <div class="btnContentContainer-0-4-48">
                                          <div class="btnCopy-0-4-60 "
                                            style="padding:12px;color: #84888b;font-weight: 200;">המשך ללא התחברות
                                            (תרומה תועבר לעמותות
                                            מובילות באופן אנונימי)</div>
                                        </div>
                                      </button>
                                      <button v-else aria-label="Activate Rewards" style="margin-top:36px"
                                        class="button-2-855 btn-0-4-49 btn-d15-0-4-177 successStatus-0-4-75  flexible-0-4-61"
                                        id="launchpad:ActivateRewardsButton">
                                        <div class="btnContentContainer-0-4-48">
                                          <div class="btnCopy-0-4-60-2">Rewards Activated</div> <i
                                            class="fa-solid fa-check fa-check-style"></i>
                                        </div>
                                      </button>
                                    </div>

                                    <button v-else-if="!Cashbackcookied"
                                      @click="activateCashback(odata.store.slug,odata.store.id)"
                                      aria-label="Activate Rewards"
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
                                    v-if="odata.coupons && odata.coupons.length  && odata.cashback && odata.cashback.status> 0 ||odata.coupons && odata.coupons.length">
                                    <div class="textContent-0-4-233">
                                      <div class="noGraphTitle-0-4-229">
                                      </div>
                                      <div class="noGraphSubtitle-0-4-231 title3">
                                        <strong
                                          v-if="odata.coupons && odata.coupons.length  && odata.cashback && odata.cashback.status> 0">
                                          <img alt="Sale Alert Icon" src="../assets/svg/fire-fill-mini.svg"
                                            class="fireIcon-0-4-198">
                                          {{ $t('offers_message.message', { COUNT: odata.coupons.length}) }}
                                          <span v-html="odata.cashback.message"></span>
                                        </strong>
                                        <strong v-else-if="odata.coupons && odata.coupons.length">Found
                                          {{ odata.coupons.length }} Offers to
                                          use!</strong>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="storeSavingsDisclaimer-0-4-154" v-if="odata.store">
                                    <div class="disclaimerContainer-0-4-182 disclaimerContainer-d0-0-4-184 
                                                                      body2">
                                      <div class="content-0-4-183">*<span
                                          class="exclusionsText-0-4-185 body2 cashbackText-0-4-186"><span
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
                        <!-- Replace your existing deals section with this improved version -->
                        <div v-if="odata &&odata.coupons&& dealCount>0" class="layout-0-4-145 layout-d1-0-4-197">
                          <div>
                            <div class="c-root-0-4-214">
                              <div class="container-0-4-199">
                                <!-- Header section with improved styling -->
                                <!-- <div class="noGraphMain-0-4-227" v-if="odata.coupons && odata.coupons.length">
                                  <div class="textContent-0-4-233">
                                    <div class="noGraphSubtitle-0-4-231 title3">
                                      <strong v-if="odata.coupons && odata.coupons.length && odata.cashback && odata.cashback.status > 0">
                                        <img alt="Sale Alert Icon" src="../assets/svg/fire-fill-mini.svg" class="fireIcon-0-4-198">
                                        {{ $t('offers_message.message', { COUNT: odata.coupons.length}) }}
                                        <span v-html="odata.cashback.message"></span>
                                      </strong>
                                      <strong v-else-if="odata.coupons && odata.coupons.length">
                                        נמצאו {{ odata.coupons.length }} הצעות מיוחדות!
                                      </strong>
                                    </div>
                                  </div>
                                </div>
                                 -->
                                <!-- 3x3 Grid with scrolling -->
                                <div class="productListContainer-0-4-201">
                                  <div class="productListContent-0-4-202" role="grid">
                                    <a 
                                      v-for="(deal, index) in deals" 
                                      :key="`deal-${index}`"
                                      target="_blank" 
                                      :href="deal.details" 
                                      role="gridcell" 
                                      :aria-label="`Deal: ${deal.title}`" 
                                      tabindex="0" 
                                      :title="deal.title"
                                      class="productCard-0-4-203"
                                      @keydown.enter="$event.target.click()"
                                    >
                                      <div class="product-0-4-211">
                                        <div>
                                          <img 
                                            v-if="deal.image_url && deal.image_url.length > 0" 
                                            :src="deal.image_url" 
                                            :alt="deal.title"
                                            class="productImage-0-4-204_changed"
                                            loading="lazy"
                                            @error="handleImageError"
                                          >
                                          <div v-else class="productImage-0-4-204 placeholder-image clamp-3">
                                            {{ deal.title }}
                                          </div>
                                        </div>
                                        <div 
                                          class="discount-0-4-212"
                                          :class="{
                                            'deal-badge': !deal.badge || deal.badge.toLowerCase().includes('deal'),
                                            'sale-badge': deal.badge && deal.badge.toLowerCase().includes('off'),
                                            'limited-badge': deal.badge && deal.badge.toLowerCase().includes('limited')
                                          }"
                                        >
                                          {{ deal.badge && deal.badge.length > 0 ? deal.badge : 'Deal' }}
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <!-- </VueDraggable> -->
    <div id="Kizo-Toaster" class="kizo-popup-injection" v-if="closePopupVal"
      style="z-index: 2147483647 !important; display: block !important; direction: rtl;">

      <div style="z-index: 2147483647 !important; display: block !important;">
        <div id="honey">
          <!-- <link rel="stylesheet" href="../assets/kizo-sidebar.css"> -->
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
            integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
          <div class="resetCss-0-4-1">
            <slot>

              <div class="layout-0-4-25 layout-d0-0-4-26" style="top: 96px;right: 22px;">
                <div>
                  <div class="container-0-4-27" style="display: flex;">
                    <div class="page-0-4-28">
                      <div class="container-0-4-29 container-d0-0-4-33">
                        <div class="header-0-4-30 header-d1-0-4-34">
                          <div class="root-0-4-37" style="height: 48px;">
                            <div class="leftContainer-0-4-38">
                              <div class="root-0-4-42">
                                <img src="../assets/svg/logoSVG.svg" alt="" class="logo-image-1">
                                <h1 class="title-0-4-44"> Kizo - קיזו </h1>
                              </div>
                            </div>
                            <div class="middleContainer-0-4-39"></div>
                            <div class="rightContainer-0-4-40">
                              <button aria-label="Honey Settings" v-if="odata&& odata.logged_in"
                                class="button-2-855 settingButton-0-4-47 unstyled-0-4-52 " aria-expanded="false">
                                <div class="icon-0-4-45 icon-d1-0-4-72">
                                  <div class="h-icon">

                                    <div>

                                      <label class="dropdown">

                                        <div class="dd-button">
                                          <img src="../assets/svg/gear.svg">
                                        </div>

                                        <input type="checkbox" class="dd-input" id="">

                                        <ul class="dd-menu">
                                          <li>
                                            <a class="wp-link" target="_blank"
                                              :href="BASE_URL+'/wp-admin/admin.php?page=cashback'">My donations</a>
                                          </li>
                                          <li>
                                            <a class="wp-link" target="_blank"
                                              :href="BASE_URL+'/wp-admin/profile.php'">My Profile</a>
                                          </li>
                                        </ul>

                                      </label>

                                    </div>
                                  </div>
                                </div>
                              </button>
                              <button aria-label="Honey Settings" @click="closePopup"
                                class="button-2-855 settingButton-0-4-47 unstyled-0-4-52">
                                <div>
                                  <div class="icon-0-4-45 icon-d1-0-4-72">
                                    <img style="margin-top: 6px;" src="../assets/svg/cancel.svg" />
                                  </div>
                                </div>
                              </button></div>
                          </div>
                        </div>
                        <div class="content-0-4-31 content-d2-0-4-35">
                          <div
                            class="mainContainer-0-4-101 mainContainer-d5-0-4-111 blue-0-4-82 stackAbove-0-4-103 short-0-4-102 closed">
                            <div class="copy-0-4-89 center-0-4-86 closed-0-4-90 copyStyleShort-0-4-108">
                              <div class="truncateCopy-0-4-110"></div>
                            </div>
                            <div class="dismissContainer-0-4-92 closed-0-4-90 dismissContainerShort-0-4-94">
                              <button aria-label="Close notification banner"
                                class="button-2-855 closeIcon-0-4-87 unstyled-0-4-52"
                                id="UniversalContainer-close-banner-icon">
                                <div class="icon-0-4-45 icon-d2-0-4-117">
                                  <div class="h-icon">
                                    <div>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                                        class="injected-svg" data-src="https://cdn.honey.io/images/icon-2_0/x-16.svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path stroke="#212121" stroke-width="1.5" stroke-linecap="round"
                                          d="m2.327 2.052 11.565 11.565m-11.784 0L13.673 2.052" class="stroke"></path>
                                      </svg></div>
                                  </div>
                                </div>
                              </button></div>
                          </div>
                          <div class="storeInfoContainer-0-4-118">
                            <div class="storeLogo-0-4-125 storeLogo-d0-0-4-133 logo-0-4-119">
                              <picture class="fitContainer-0-4-134"><img alt="" class="loading-0-4-135 load-0-4-136"
                                  :data-src="odata.store.logo" data-srcset="" sizes="" title=""
                                  id="7683429239714414015-logo" size="40" shape="circle" :src="odata.store.logo"
                                  srcset="">
                              </picture>
                            </div>
                            <div class="storeInfo-0-4-120">
                              <div class="storeName-0-4-121" v-if="odata && odata.store">{{odata.store.name}}</div>
                              <!-- <div class="storeCount-0-4-122">ברכישה מחנות זו תרומה   
                                
                              </div> -->
                              <div class="storeCount-0-4-122"
                                v-if="odata.myassociation && (odata.myassociation.post_title||odata.myassociation.name)">

                                ברכישה מחנות זו תועבר תרומה ל{{ odata.myassociation.post_title?odata.myassociation.post_title:odata.myassociation.name }}
                              </div>
                              <div class="storeCount-0-4-122" v-else>
                                ברכישה מחנות זו, תועבר תרומה לעמותות המובילות בישראל </div>
                            </div>
                            <div class="storeLogo-0-4-125 storeLogo-d0-0-4-133 logo-0-4-119">
                              <picture class="fitContainer-0-4-134">

                                <img v-if="odata  && odata.myassociation && odata.myassociation.assoicationImage" alt=""
                                  class="loading-0-4-135 load-0-4-136" :data-src="odata.myassociation.assoicationImage"
                                  data-srcset="" sizes="" title="" id="7683429239714414015-logo" size="80"
                                  shape="circle" :src="odata.myassociation.assoicationImage" srcset="" style="
                                width: 100%;
                            ">
                                <img v-else alt="" class="loading-0-4-135 load-0-4-136"
                                  data-src="https://kizo.co.il/wp-content/uploads/2023/03/association-default.png"
                                  data-srcset="" sizes="" title="" id="7683429239714414015-logo" size="80"
                                  shape="circle"
                                  src="https://kizo.co.il/wp-content/uploads/2023/03/association-default.png" srcset=""
                                  style="
                                width: 100%;
                            ">

                              </picture>
                            </div>
                          </div>
                          <div>
                            <div v-if="odata.cashback &&odata && odata.code == 'success' && odata.cashback.status ">
                              <div class="layout-0-4-145 layout-d0-0-4-146 cashbacks">
                                <div>
                                  <div class="scrollableCard-0-4-148">
                                    <small v-if="!odata.logged_in" class="text-muted sm0text">
                                      {{$t("login_to_activate2.message" )}}</small>
                                    <div class="main-0-4-175">
                                      <div v-if="!odata.logged_in">
                                        <a href="https://kizo.co.il/login/" target="_blank" type="button" id="loginBtn"
                                          style="margin-bottom:12px" class="btn">
                                          {{$t("login.message" )}} </a>
                                        <button v-if="!Cashbackcookied"
                                          style="margin-top:12px; height: auto;border:1px solid #91979c"
                                          @click="activateCashback(odata.store.slug,odata.store.id)"
                                          aria-label="Activate Rewards"
                                          class="button-2-855 btn-0-4-49 btn-d15-0-4-177 primary-s53  flexible-0-4-61"
                                          id="launchpad:ActivateRewardsButton">
                                          <div class="btnContentContainer-0-4-48">
                                            <div class="btnCopy-0-4-60 "
                                              style="padding:12px;color: #84888b;font-weight: 200;">המשך ללא התחברות
                                              (תרומה תועבר לעמותות
                                              מובילות באופן אנונימי)</div>
                                          </div>
                                        </button>
                                        <button v-else aria-label="Activate Rewards" style="margin-top:36px"
                                          class="button-2-855 btn-0-4-49 btn-d15-0-4-177 successStatus-0-4-75  flexible-0-4-61"
                                          id="launchpad:ActivateRewardsButton">
                                          <div class="btnContentContainer-0-4-48">
                                            <div class="btnCopy-0-4-60-2">Rewards Activated</div> <i
                                              class="fa-solid fa-check fa-check-style"></i>
                                          </div>
                                        </button>
                                      </div>

                                      <button v-else-if="!Cashbackcookied"
                                        @click="activateCashback(odata.store.slug,odata.store.id)"
                                        aria-label="Activate Rewards"
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
                                      v-if="odata.coupons && odata.coupons.length  && odata.cashback && odata.cashback.status> 0 ||odata.coupons && odata.coupons.length">
                                      <div class="textContent-0-4-233">
                                        <div class="noGraphTitle-0-4-229">
                                        </div>
                                        <div class="noGraphSubtitle-0-4-231 title3">
                                          <strong
                                            v-if="odata.coupons && odata.coupons.length  && odata.cashback && odata.cashback.status> 0">
                                            <img alt="Sale Alert Icon" src="../assets/svg/fire-fill-mini.svg"
                                              class="fireIcon-0-4-198">
                                            {{ $t('offers_message.message', { COUNT: odata.coupons.length}) }}
                                            <span v-html="odata.cashback.message"></span>
                                          </strong>
                                          <strong v-else-if="odata.coupons && odata.coupons.length">Found
                                            {{ odata.coupons.length }} Offers to
                                            use!</strong>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="storeSavingsDisclaimer-0-4-154" v-if="odata.store">
                                      <div class="disclaimerContainer-0-4-182 disclaimerContainer-d0-0-4-184 
                                                                      body2">
                                        <div class="content-0-4-183">*<span
                                            class="exclusionsText-0-4-185 body2 cashbackText-0-4-186"><span
                                              style="color: inherit;">התרומה תועבר לעמותה
                                              בהתאם ל<a class="terms-0-4-187" href="https://www.com/terms"
                                                target="_blank" rel="noopener noreferrer" style="color: inherit;">תנאי
                                                השימוש</a></span></span></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div v-if="odata &&odata.coupons&& dealCount>0" class="layout-0-4-145 layout-d1-0-4-197">

                              <div>
                                <div class="c-root-0-4-214">
                                  <div class="container-0-4-199">
                                    <div class="productListContainer-0-4-201">
                                      <div class="productListContent-0-4-202 " role="row">
                                        <a target="_blank" :href="deal.details" v-for="(deal,index) in deals"
                                          :key="index" role="link" :aria-label="deal.title" tabindex="0"
                                          :title="deal.title" class="button-2-855 productCard-0-4-203">
                                          <div class="product-0-4-211">
                                            <div class="p-0">
                                              <img 
                                            v-if="deal.image_url && deal.image_url.length > 0" 
                                            :src="deal.image_url" 
                                            :alt="deal.title"
                                            class="productImage-0-4-204_changed"
                                            loading="lazy"
                                            @error="handleImageError"
                                          >
                                          <div v-else class="productImage-0-4-204 placeholder-image clamp-3">
                                              {{ deal.title }}
                                          </div>
                                        </div>
                                        <div 
                                          class="discount-0-4-212"
                                          :class="{
                                            'deal-badge': !deal.badge || deal.badge.toLowerCase().includes('deal'),
                                            'sale-badge': deal.badge && deal.badge.toLowerCase().includes('off'),
                                            'limited-badge': deal.badge && deal.badge.toLowerCase().includes('limited')
                                          }"
                                        >
                                          {{ deal.badge && deal.badge.length > 0 ? deal.badge : 'Deal' }}
                                        </div>
                                          </div>
                                        </a>

                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="overlay-0-4-239" aria-hidden="true"></div>
                          <div class="container-0-4-240 container-d0-0-4-242">
                            <div class="wrapper-0-4-241"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    defineComponent,
    ref,
    onMounted,
    onUnmounted,
    reactive,
    toRefs,
    computed
  } from "vue";
  // import 'bootstrap/dist/css/bootstrap.css'
  // import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
  import {
    useTranslation
  } from "i18next-vue";
  import i18n from 'i18next';
  import VueDraggable from 'vue-draggable'

  import BootstrapVue3, {

    BDropdown,
    BDropdownItem,
    BDropdownForm
  } from 'bootstrap-vue-3'
  import {
    library
  } from '@fortawesome/fontawesome-svg-core'

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
  library.add(faLock, faBell, faChevronDown, faChevronUp, faGear, faUser, faXmark, faRightFromBracket)
  export default defineComponent({
    components: {
      VueDraggable,
      BDropdown,
      BDropdownItem,
      BDropdownForm,
      FontAwesomeIcon
    },
    setup() {
      const right = ref(0);
      const top = ref(260);
      const rightpopup = ref(22);
      const toppopup = ref(360);
      const hovered = ref(false);

      const dragging = ref(false);
      let startX = 0;
      let startY = 0;

      const {
        t,
        i18next
      } = useTranslation();

      const odata = ref([])
      const closePopupVal = ref(false);
      const BASE_URL = ref('https://kizo.co.il');
      const sidebarpopup = ref(false);
      const Cashbackcookied = ref(false);
      const closePopup = () => {
        closePopupVal.value = false

        if (odata.value.store && odata.value.store.slug)
          chrome.runtime.sendMessage({
            type: "POPUP_ALERT_CLOSE",
            slug: odata.value.store.slug
          }, async tab => {

          });
        closePopupVal.value = false
      }

      const activateCashback = (slug, id) => {
        chrome.runtime.sendMessage({
          type: "ACTIVATE_OFFER",
          slug: slug,
          id: id
        }, async tab => {

        });
        Cashbackcookied.value = true;
      }

      function startDrag(event) {
        dragging.value = true;
        startX = event.clientX;
        startY = event.clientY;
      }

      function onMouseMove(event) {
        if (!dragging.value) return;
        if (!dragging.value) return;



        const newTop = top.value + event.clientY - startY;
        if (newTop >= 0 && newTop + 50 <= window.innerHeight) {
          top.value = newTop;
          const popup = document.querySelector('#Kizo-sidebarpopup')

          if (popup) {
            const viewportHeight = window.innerHeight
            const popupRect = popup.getBoundingClientRect()
            const popupBottom = popupRect.top;
            if (newTop < 460) {
              toppopup.value = newTop + 100
            } else {
              toppopup.value = (newTop - popupRect.height - 50)

            }
          }

        }

        startY = event.clientY;
      }

      function stopDrag() {
        dragging.value = false;
      }
      const draggableButton = ref(null)
      const popupDiv = ref(null)
      let timeoutId
      const handleMouseOver = () => {
        hovered.value = true;
        closePopupVal.value = false
        sidebarpopup.value = true;
        clearTimeout(timeoutId)

      }
      const deals = computed(() => {
        return odata.value.coupons.filter(item => item.type === 'deal');
      });

      const dealCount = computed(() => {
        return deals.value.length;
      });


      const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
          sidebarpopup.value = false;
        }, 3000);
      }
      onUnmounted(() => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', stopDrag);
      });
      onMounted(() => {

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', stopDrag);


        draggableButton.value.addEventListener('mouseover', handleMouseOver)
        draggableButton.value.addEventListener('mouseleave', handleMouseLeave)


        // popupDiv.value.addEventListener('mouseover', handleMouseOver)
        // popupDiv.value.addEventListener('mouseleave', handleMouseLeave)
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
          if (message.type == 'openPopup') {
            odata.value = message.data;
            console.log(odata.value);
            if (!message.cookied) {
              closePopupVal.value = true;
            }
            if (message.Cashbackcookied) {
              Cashbackcookied.value = true;
            }
          }
          sendResponse({
            data: "openPopup"
          });

        });
      })

      return {
        closePopup,
        closePopupVal,
        BASE_URL,
        odata,
        Cashbackcookied,
        activateCashback,
        t,
        right,
        top,
        startDrag,
        onMouseMove,
        stopDrag,
        draggableButton,
        popupDiv,
        sidebarpopup,

        handleMouseLeave,
        handleMouseOver,
        rightpopup,
        toppopup,
        hovered,
        dealCount,
        deals
      }
    },
  })
</script>

<style>
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
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
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
    /* margin-right: 8px; */
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
    /* margin-right: 8px; */
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
    padding-left: 5px;
    padding-right: 5px;
  }

  .sm0text {
    font-weight: 200;
    font-size: .875em;
    color: #6c757d !important;
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

  @keyframes fade-in-blink-resize {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    25% {
      opacity: 1;
      transform: scale(1.5);
    }

    50% {
      opacity: 0.3;
      transform: scale(1);
    }

    85% {
      opacity: 1;
      transform: scale(1.5);
    }

    100% {
      opacity: 1;
      transform: scale(1.2);
    }
  }

  .cashbacks a:nth-of-type(1).btn {
    color: var(--secondary);
    border: 2px solid var(--secondary);
    box-sizing: border-box;
    margin-bottom: 12px;
  }

  .cashbacks a:nth-of-type(1),
  .cashbacks p:nth-of-type(2),
  .cashbacks .btn {
    margin-left: 20px;
  }

  .cashbacks .btn {
    padding: 8px 15px;
    align-self: flex-start;
    font-size: 12px;
    margin-top: 15px;
    margin-right: auto;
    transform: scale(1);
    border-radius: .375rem;
  }

  .btn-container a.btn,
  .cashbacks a {
    background-color: transparent;
    transition: all .1s linear;
  }

  .btn {
    position: relative;
  }

  .cashbacks .btn:hover,
  .btn-container button:hover,
  .cashbacks a:nth-of-type(1).btn:hover {
    transform: scale(1.1);
    box-shadow: 1px 1px 2px 1px #00000026;
    background-color: rgba(238, 113, 68, 0.947);
  }

  .cashbacks a:nth-of-type(1).btn:hover,
  .cashbacks a:nth-of-type(1).btn:focus {
    color: #fff;
    border: 2px solid rgba(238, 113, 68, 0.947);
    box-sizing: border-box;
  }

  .cashbacks a:nth-of-type(1).btn {
    color: rgba(238, 113, 68, 0.947);
    border: 2px solid rgba(238, 113, 68, 0.947);
    box-sizing: border-box;
  }

  .cashbacks a:nth-of-type(1),
  .cashbacks p:nth-of-type(2),
  .cashbacks .btn {
    margin-left: 20px;
  }

  .text-muted {
    opacity: 1;
    color: #6c757d !important;
    font-size: .875em;
  }

  .text-muted {
    opacity: 1;
    color: #6c757d !important;
  }

  small,
  .small {
    font-size: .875em;
  }

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

  .cursor-pointer {
    cursor: pointer;
  }

  button#dropdown-1,
  button#dropdown-2 {
    padding: 0;
    display: flex !important;
    border: none !important;
  }

  .show {
    display: block !important;
  }

  .dropdown {
    display: inline-block;
    position: relative;
  }

  .dd-button {
    display: inline-block;
    border: none;
    border-radius: 4px;
    background-color: transparent;
    cursor: pointer;
    white-space: nowrap;
  }

  .dd-button:after {
    content: none;
  }

  .dd-button:hover {
    background-color: #eeeeee;
  }


  .dd-input {
    display: none;
  }

  .dd-menu {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0;
    margin: 2px 0 0 0;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    list-style-type: none;
  }

  .dd-input+.dd-menu {
    display: none;
  }

  .dd-input:checked+.dd-menu {
    display: block;
  }

  .dd-menu li {
    padding: 10px 20px;
    cursor: pointer;
    white-space: nowrap;
  }

  .dd-menu li:hover {
    background-color: #f6f6f6;
  }

  .dd-menu li a {
    display: block;
    margin: -10px -20px;
    padding: 10px 20px;
  }

  .dd-menu li.divider {
    padding: 0;
    border-bottom: 1px solid #cccccc;
  }

  Latests Css
  /* Replace the existing deals-related CSS with this improved version */

/* Main deals container */
.c-root-0-4-214 {
  overflow: hidden;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.container-0-4-199 {
  padding: 20px;
}

/* Deals grid container */
.productListContainer-0-4-201 {
  margin: 16px 0;
  max-height: 280px; /* Height for 3 rows of ~90px each + gaps */
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 8px;
  background: #fafbfc;
  padding: 12px;
  position: relative;
}

/* Custom scrollbar styling */
.productListContainer-0-4-201::-webkit-scrollbar {
  width: 6px;
}

.productListContainer-0-4-201::-webkit-scrollbar-track {
  background: #f1f3f4;
  border-radius: 3px;
}

.productListContainer-0-4-201::-webkit-scrollbar-thumb {
  background: #46B29D;
  border-radius: 3px;
  transition: background 0.3s ease;
}

.productListContainer-0-4-201::-webkit-scrollbar-thumb:hover {
  background: #2E8B77;
}

/* 3x3 Grid layout */
.productListContent-0-4-202 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
  padding: 4px;
}

/* Individual deal card */
.productCard-0-4-203 {
  width: 100%;
  height: 85px;
  border: none;
  cursor: pointer;
  display: flex;
  background: transparent;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.productCard-0-4-203:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(70, 178, 157, 0.15);
}

.productCard-0-4-203:active {
  transform: translateY(0);
}

/* Deal product container */
.product-0-4-211 {
  width: 100%;
  height: 100%;
  border: 2px solid #e8eaed;
  display: flex;
  transition: all 0.3s ease;
  align-items: center;
  border-radius: 8px;
  flex-direction: column;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;
  overflow: hidden;
}

.productCard-0-4-203:hover .product-0-4-211 {
  border-color: #46B29D;
  box-shadow: 0 0 0 1px rgba(70, 178, 157, 0.2);
}

/* Product image container */
.product-0-4-211 > div:first-child {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

/* Product image */
.productImage-0-4-204 {
  width: auto;
  height: auto;
  /* max-width: 45px; */
  min-width: 30px;
  /* max-height: 45px; */
  min-height: 30px;
  object-fit: contain;
  border-radius: 4px;
  transition: transform 0.3s ease;
}

.productCard-0-4-203:hover .productImage-0-4-204 {
  transform: scale(1.05);
}

/* Discount badge */
.discount-0-4-212 {
  color: #ffffff;
  width: 100%;
  height: 22px;
  display: flex;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  align-items: center;
  border-radius: 0 0 6px 6px;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
}

.discount-0-4-212::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s ease;
}

.productCard-0-4-203:hover .discount-0-4-212::before {
  left: 100%;
}

/* Deal badge variations */
.discount-0-4-212.deal-badge {
  background: linear-gradient(135deg, #46B29D 0%, #2E8B77 100%);
}

.discount-0-4-212.sale-badge {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
}

.discount-0-4-212.limited-badge {
  background: linear-gradient(135deg, #ffa726 0%, #fb8c00 100%);
}

/* Loading state for images */
.productImage-0-4-204[src=""] {
  background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%);
  background-size: 20px 20px;
  animation: loading-shimmer 1s infinite linear;
}

@keyframes loading-shimmer {
  0% { background-position: 0 0; }
  100% { background-position: 20px 20px; }
}

/* Responsive adjustments for smaller screens */
@media (max-width: 400px) {
  .productListContent-0-4-202 {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
  
  .productCard-0-4-203 {
    height: 75px;
  }
  
  .productImage-0-4-204 {
    max-width: 35px;
    max-height: 35px;
  }
  
  .discount-0-4-212 {
    font-size: 9px;
    height: 20px;
  }
}

/* Fade in animation for deals */
.productCard-0-4-203 {
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
}

.productCard-0-4-203:nth-child(1) { animation-delay: 0.1s; }
.productCard-0-4-203:nth-child(2) { animation-delay: 0.2s; }
.productCard-0-4-203:nth-child(3) { animation-delay: 0.3s; }
.productCard-0-4-203:nth-child(4) { animation-delay: 0.4s; }
.productCard-0-4-203:nth-child(5) { animation-delay: 0.5s; }
.productCard-0-4-203:nth-child(6) { animation-delay: 0.6s; }
.productCard-0-4-203:nth-child(7) { animation-delay: 0.7s; }
.productCard-0-4-203:nth-child(8) { animation-delay: 0.8s; }
.productCard-0-4-203:nth-child(9) { animation-delay: 0.9s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scroll indicator */
.productListContainer-0-4-201::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  background: linear-gradient(to top, rgba(250, 251, 252, 0.9), transparent);
  pointer-events: none;
  border-radius: 0 0 8px 8px;
}

/* Header improvements */
.fireIcon-0-4-198 {
  width: 18px;
  height: 18px;
  filter: invert(34%) sepia(91%) saturate(1916%) hue-rotate(336deg) brightness(122%) contrast(102%);
  vertical-align: text-bottom;
  margin-left: 4px;
  animation: flicker 1.5s infinite alternate;
}

@keyframes flicker {
  0%, 100% { filter: invert(34%) sepia(91%) saturate(1916%) hue-rotate(336deg) brightness(122%) contrast(102%); }
  50% { filter: invert(34%) sepia(91%) saturate(1916%) hue-rotate(336deg) brightness(150%) contrast(120%); }
}
.content-0-4-31{
  overflow: hidden;
}
.clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

</style>