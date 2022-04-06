<template>
  <div class='header row'>
    <Logo class='logo' />
    <q-space />
    <HeaderTools />
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

const Logo = defineAsyncComponent(() => import('src/components/logo/Logo.vue'))
const HeaderTools = defineAsyncComponent(() => import('src/components/header/HeaderTools.vue'))

</script>

<style lang='sass' scoped>
.header
  height: $header-height

.logo
  height: $medium-item-height
  width: auto
</style>
