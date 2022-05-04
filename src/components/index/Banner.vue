<template>
  <div class='row background'>
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
        />
        <div class='row social'>
          <q-icon size='1.2rem' :name='"img:" + twitter' class='cursor-pointer' @click='onTwitterClick' />
          <q-icon size='1.2rem' :name='"img:" + telegram' class='cursor-pointer' @click='onTelegramClick' />
          <q-icon size='1.2rem' :name='"img:" + facebook' class='cursor-pointer' @click='onFacebookClick' />
          <q-icon size='1.2rem' :name='"img:" + linkedin' class='cursor-pointer' @click='onLinkedinClick' />
        </div>
      </div>
    </div>
    <q-img class='main-banner' :src='mainBanner' />
  </div>
</template>

<script setup lang='ts'>

import mainBanner from '../../assets/main-banner.png'

import twitter from '../../assets/twitter-blue.png'
import telegram from '../../assets/telegram-blue.png'
import facebook from '../../assets/facebook-blue.png'
import linkedin from '../../assets/linkedin-blue.png'

const onTwitterClick = () => {
  // TODO
}

const onTelegramClick = () => {
  // TODO
}

const onFacebookClick = () => {
  // TODO
}

const onLinkedinClick = () => {
  // TODO
}

</script>

<style lang='sass' scoped>
.banner
  background-repeat: no-repeat
  background-size: 100% $banner-view-height
  min-height: $banner-view-height
  width: 100%
  z-index: 10

.separator
  background-color: $primary
  margin-top: 200px
  width: 112px
  height: 3px

.slogan
  font-weight: 600
  font-size: $font-super-large
  margin-top: $medium-item-height

.caption
  font-size: $font-large
  font-weight: 500

.btn
  margin-top: 100px
  padding: 0 24px

.main-banner
  position: absolute
  width: 100%
  opacity: 0.1

.social
  max-width: 150px
  justify-content: space-between
  margin-top: $mini-item-height

.social.icon
  height: 16px
  line-height: 16px
</style>
