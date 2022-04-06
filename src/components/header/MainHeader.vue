<template>
  <q-toolbar class='header row'>
    <Logo v-model:width='logoWidth' class='logo' />
    <q-space />
    <HeaderTools v-model:width='toolsWidth' />
    <q-resize-observer @resize='onResize' />
  </q-toolbar>
  <div>{{ logoWidth }} 1</div>
  <div>{{ toolsWidth }} 2</div>
  <div>{{ toolbarWidth }} 3</div>
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
const toolsWidth = ref(0)

</script>

<style lang='sass' scoped>
.header
  min-height: $medium-item-height
  margin-top: $medium-item-height

.logo
  height: $medium-item-height
  width: auto
</style>
