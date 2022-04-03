<template>
  <div v-if='setting.ShowFooterTop' class='content top'>
    <FooterTop />
  </div>
  <q-separator class='separator' />
  <div class='content bottom'>
    <FooterBottom />
  </div>
</template>

<script setup lang='ts'>
import { useSettingStore } from 'npool-cli-v2'
import { defineAsyncComponent } from 'vue'

const FooterTop = defineAsyncComponent(() => import('src/components/footer/FooterTop.vue'))
const FooterBottom = defineAsyncComponent(() => import('src/components/footer/FooterBottom.vue'))

const setting = useSettingStore()

</script>

<style lang='sass' scoped>
.separator
  border: 1px solid rgba(255, 255, 255, 0.2)
  height: 0px
  padding: 0 0

.top
  padding-bottom: 60px

.bottom
  padding-top: 60px
  padding-bottom: 120px
</style>
