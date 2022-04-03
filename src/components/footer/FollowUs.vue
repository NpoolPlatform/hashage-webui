<template>
  <div class='column'>
    <q-item-label class='menu-label'>
      {{ $t('MSG_FOLLOW_US') }}
    </q-item-label>
    <div class='row'>
      <q-img
        v-for='(media, index) in line1GrayMedias'
        :class='[ index > 0 ? "logo logo-margin" : "logo" ]'
        :key='media.Target'
        :src='media.Logo'
      />
    </div>
    <div class='row'>
      <q-img
        v-for='(media, index) in line2GrayMedias'
        :class='[ index > 0 ? "logo logo-margin" : "logo" ]'
        :key='media.Target'
        :src='media.Logo'
      />
    </div>
    <div class='row color-media'>
      <q-img
        v-for='(media, index) in colorMedias'
        :class='[ index > 0 ? "logo logo-margin" : "logo" ]'
        :key='media.Target'
        :src='media.Logo'
      />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue'

import socialMediaGrayLogo1 from '../../assets/SocialMediaGrayLogo1.svg'
import socialMediaColorLogo1 from '../../assets/SocialMediaColorLogo1.svg'

interface SocialMedia {
  Logo: string
  Target: string
}

const grayMedias = [
  {
    Logo: socialMediaGrayLogo1,
    Target: '#'
  }, {
    Logo: socialMediaGrayLogo1,
    Target: '#'
  }, {
    Logo: socialMediaGrayLogo1,
    Target: '#'
  }, {
    Logo: socialMediaGrayLogo1,
    Target: '#'
  }, {
    Logo: socialMediaGrayLogo1,
    Target: '#'
  }, {
    Logo: socialMediaGrayLogo1,
    Target: '#'
  }
] as Array<SocialMedia>

const line1GrayMedias = computed(() => grayMedias.filter((_, index) => index < 4))
const line2GrayMedias = computed(() => grayMedias.filter((_, index) => index >= 4 && index < 8))

const colorMedias = [
  {
    Logo: socialMediaColorLogo1,
    Target: '#'
  }, {
    Logo: socialMediaColorLogo1,
    Target: '#'
  }, {
    Logo: socialMediaColorLogo1,
    Target: '#'
  }, {
    Logo: socialMediaColorLogo1,
    Target: '#'
  }, {
    Logo: socialMediaColorLogo1,
    Target: '#'
  }, {
    Logo: socialMediaColorLogo1,
    Target: '#'
  }
] as Array<SocialMedia>

</script>

<style lang='sass' scoped>
.menu-label
  font-size: 16px
  margin-bottom: 20px

.logo
  min-width: 18px
  max-width: 18px
  min-height: 18px
  max-height: 18px
  margin-bottom: 15px

.logo-margin
  margin-left: 21.65px

.color-media
  margin-left: -79.25px
  margin-top: 28px
</style>
