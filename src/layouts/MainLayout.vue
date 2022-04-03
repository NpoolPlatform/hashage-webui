<template>
  <div class='background-main'>
    <q-layout view='hHh Lpr lFf'>
      <Announcement v-if='setting.ShowHeaderAnnouncement' />
      <div class='header'>
        <MainHeader v-if='setting.ShowMainHeader' class='content' />
      </div>

      <q-page-container class='background-main'>
        <router-view />
      </q-page-container>

      <div class='footer'>
        <MainFooter />
      </div>

      <LangLoader />
    </q-layout>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'
import { useSettingStore } from 'npool-cli-v2'

const MainHeader = defineAsyncComponent(() => import('src/components/header/MainHeader.vue'))
// const LangLoader = defineAsyncComponent(() => import('src/components/lang/LangLoader.vue'))
const MainFooter = defineAsyncComponent(() => import('src/components/footer/MainFooter.vue'))
const Announcement = defineAsyncComponent(() => import('src/components/announcement/Announcement.vue'))

const setting = useSettingStore()

</script>

<style lang='sass' scoped>
.header
  border-bottom: 1px solid rgba(255, 255, 255, 0.1)

.footer
  margin-top: 160px
</style>
