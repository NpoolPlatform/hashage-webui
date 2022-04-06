<template>
  <div class='header row'>
    <Logo v-model:width='logoWidth' class='logo' />
    <q-space />
    <HeaderTools v-if='showFull' v-model:width='toolsWidth' />
    <span v-else>...</span>
    <q-resize-observer @resize='onResize' />
  </div>
  <div>{{ logoWidth }} 1</div>
  <div>{{ toolsWidth }} 2</div>
  <div>{{ toolbarWidth }} 3</div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, ref, computed } from 'vue'
import { Size } from '../../types/size'

const Logo = defineAsyncComponent(() => import('src/components/logo/Logo.vue'))
const HeaderTools = defineAsyncComponent(() => import('src/components/header/HeaderTools.vue'))

const toolbarWidth = ref(0)
const onResize = (size: Size) => {
  toolbarWidth.value = size.width
}

const logoWidth = ref(0)
const toolsWidth = ref(0)
const showFull = computed(() => logoWidth.value + toolsWidth.value <= toolbarWidth.value)

</script>

<style lang='sass' scoped>
.header
  min-height: $medium-item-height
  margin-top: $medium-item-height

.logo
  height: $medium-item-height
  width: auto
</style>
