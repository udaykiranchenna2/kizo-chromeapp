<template>
    <div
      id="Kizo-Toaster"
      class="kizo-popup-injection"
      v-if="visible"
      :style="{ position:'fixed', top: top+'px', right: right+'px', zIndex:2147483647 }"
    >
      <div>
        <div id="honey">
          <div class="resetCss-0-4-1">
            <slot>
              <!-- full toaster HTML: -->
              <div class="layout-0-4-25 layout-d0-0-4-26" style="top:96px; right:22px;">
                <!-- … copy all the nested content from your original <div id="Kizo-Toaster"> … -->
              </div>
              <!-- end toaster HTML -->
            </slot>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    visible: Boolean,
    top: { type: Number, default: 96 },
    right: { type: Number, default: 22 },
  })
  </script>
  