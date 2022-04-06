<template>
  <div class='header row'>
    <Logo v-model:width='logoWidth' class='logo' />
    <q-space />
    <HeaderTools :max-width='toolbarWidth - logoWidth' />
    <q-resize-observer @resize='onResize' />
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, ref } from 'vue'
import { Size } from '../../types/size'

const Logo = defineAsyncComponent(() => import('src/components/logo/Logo.vue'))
const HeaderTools = defineAsyncComponent(() => import('src/components/header/HeaderTools.vue'))

const toolbarWidth = ref(0)
const onResize = (size: Size) => {
  toolbarWidth.value = size.width
}

const logoWidth = ref(0)

</script>

<style lang='sass' scoped>
.header
  min-height: $medium-item-height
  margin-top: $small-item-height

.logo
  height: $medium-item-height
  width: auto
</style>
