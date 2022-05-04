<template>
  <q-img class='main-banner' :src='mainBanner' />
  <Banner />
  <Tasties />
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

import mainBanner from '../assets/main-banner.png'

const Banner = defineAsyncComponent(() => import('src/components/index/Banner.vue'))
const Tasties = defineAsyncComponent(() => import('src/components/index/Tasties.vue'))

</script>

<style lang='sass' scoped>
.main-banner
  position: absolute
  width: 100%
  opacity: 0.1
</style>
