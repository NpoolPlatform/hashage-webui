<template>
  <q-img class='main-banner' :src='mainBanner' />
  <Banner />
  <Tasties />
  <div class='products'>
    <Products />
  </div>
  <div class='section'>
    <Holding />
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

import mainBanner from '../assets/main-banner.png'

const Banner = defineAsyncComponent(() => import('src/components/index/Banner.vue'))
const Tasties = defineAsyncComponent(() => import('src/components/index/Tasties.vue'))
const Products = defineAsyncComponent(() => import('src/components/index/Products.vue'))
const Holding = defineAsyncComponent(() => import('src/components/index/Holding.vue'))

</script>

<style lang='sass' scoped>
.main-banner
  position: absolute
  width: 100%
  opacity: 0.1

.products
  margin-top: 120px

.section
  margin-top: 240px
</style>
