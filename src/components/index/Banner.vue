<template>
  <div class='background'>
    <div class='banner'>
      <Announcement />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

const Announcement = defineAsyncComponent(() => import('src/components/announcement/Announcement.vue'))

</script>

<style lang='sass' scoped>
.banner
  background-repeat: no-repeat
  background-size: 100% 660px
  min-height: 660px
  width: 100%
  position: absolute
  top: 0
  z-index: -10

.header
  margin-top: 20px
</style>
