<template>
  <div>
    <div class='content'>
      <div class='large normal'>
        <HLargeCard />
      </div>
    </div>
    <div class='row content'>
      <div class='medium normal'>
        <HMediumCard />
      </div>
      <div class='small normal'>
        <HSmallCard />
      </div>
      <div class='small normal last'>
        <HSmallCard />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

const HLargeCard = defineAsyncComponent(() => import('src/components/product/HLargeCard.vue'))
const HMediumCard = defineAsyncComponent(() => import('src/components/product/HMediumCard.vue'))
const HSmallCard = defineAsyncComponent(() => import('src/components/product/HSmallCard.vue'))

</script>

<style lang='sass' scoped>
.large
  border-bottom: solid 3px $dark-background
  border-left: solid 3px $light-background
  border-right: solid 3px $light-background

.medium
  width: 50%
  border-left: solid 3px white

.small
  width: 25%
  border-left: solid 3px $dark-background

.last
  border-right: solid 3px white

.normal
  background-color: white
</style>
