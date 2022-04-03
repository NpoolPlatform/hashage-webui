<template>
  <div class='row'>
    <FollowUs class='follow' />
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

const FollowUs = defineAsyncComponent(() => import('src/components/footer/FollowUs.vue'))

</script>

<style lang='sass' scoped>
.user-helper
  max-width: 220px
  min-width: 220px
  margin-right: 153px

.menu
  margin-right: 10px
  min-width: 180px
  max-width: 180px

.follow
  margin-left: 10px
  max-width: 137px
</style>
