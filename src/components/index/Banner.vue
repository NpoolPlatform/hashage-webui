<template>
  <div class='background'>
    <div class='content banner row'>
      <div>
        <q-separator class='separator' />
        <div class='slogan text-dark-text'>
          <span>{{ $t('MSG_START_MINING_WITH_HASHAGE') }}</span>
        </div>
        <div class='caption text-medium-text'>
          <span>{{ $t('MSG_RELIABLE_MINING_PLATFORM') }}</span>
        </div>
        <q-btn
          dense
          flat
          class='btn btn-filled btn-round'
          :label='$t("MSG_START_MINING")'
          icon-right='start'
        />
      </div>
    </div>
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
  z-index: -10

.separator
  background-color: $primary
  margin-top: 200px
  width: 112px
  height: 3px

.slogan
  font-weight: 800
  font-size: $font-super-large
  margin-top: $medium-item-height

.caption
  font-size: $font-large
  font-weight: 500

.btn
  margin-top: 100px
</style>
