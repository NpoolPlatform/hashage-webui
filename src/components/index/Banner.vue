<template>
  <div class='background'>
    <div class='banner' />
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang='sass' scoped>
.banner
  background-repeat: no-repeat
  background-size: 100% $banner-view-height
  min-height: $banner-view-height
  width: 100%
  margin-top: $banner-margin-top
  z-index: -10
</style>
