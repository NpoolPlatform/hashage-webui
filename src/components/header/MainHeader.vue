<template>
  <div class='header row'>
    <Logo v-model:width='logoWidth' class='logo' />
    <q-space />
    <HeaderTabs :max-width='toolbarWidth - logoWidth - toolsWidth' />
    <q-space />
    <HeaderTools v-model:width='toolsWidth' />
    <q-resize-observer @resize='onResize' />
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, ref } from 'vue'
import { Size } from '../../types/size'

const Logo = defineAsyncComponent(() => import('src/components/logo/Logo.vue'))
const HeaderTools = defineAsyncComponent(() => import('src/components/header/HeaderTools.vue'))
const HeaderTabs = defineAsyncComponent(() => import('src/components/header/HeaderTabs.vue'))

const toolbarWidth = ref(0)
const onResize = (size: Size) => {
  toolbarWidth.value = size.width
}

const logoWidth = ref(0)
const toolsWidth = ref(0)

</script>

<style lang='sass' scoped>
.header
  min-height: $small-item-height
  margin-top: $small-item-height

.logo
  height: $medium-item-height
  width: auto
</style>
