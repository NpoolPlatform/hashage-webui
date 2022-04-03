<template>
  <div class='row'>
    <div class='copyright'>
      <Logo :class='[setting.ShowBigLogo ? "big-logo" : "small-logo"]' />
      <q-item-label class='caption'>
        {{ $t('MSG_COPYRIGHT') }}
      </q-item-label>
    </div>
    <div class='info'>
      <q-item-label class='title'>
        {{ $t('MSG_ORGANIZATION') }}
      </q-item-label>
      <p class='caption' v-html='$t("MSG_ORGANIZATION_LOCATION")' />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useSettingStore } from 'npool-cli-v2'
import { defineAsyncComponent } from 'vue'

const Logo = defineAsyncComponent(() => import('src/components/logo/Logo.vue'))

const setting = useSettingStore()

</script>

<style lang='sass' scoped>
.caption
  margin-top: 20px

.copyright
  max-width: 220px
  min-width: 220px

.title
  font-size: 16px

.info
  margin-left: 332px
</style>
