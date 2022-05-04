<template>
  <div class='row'>
    <q-btn
      dense
      flat
      :label='$t("MSG_SIGNIN")'
      class='btn btn-round btn-small'
      @click='onSigninClick'
    />
    <q-btn
      dense
      flat
      :label='$t("MSG_SIGNUP")'
      class='btn btn-round btn-filled btn-small'
      @click='onSignupClick'
    />
    <q-separator
      vertical
      class='separator'
    />
    <LangSwitcher />
    <q-resize-observer @resize='onResize' />
  </div>
</template>

<script setup lang='ts'>
import { defineEmits, defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import { Size } from '../../types/size'

const LangSwitcher = defineAsyncComponent(() => import('src/components/lang/LangSwitcher.vue'))

const emit = defineEmits<{(e: 'update:width', width: number): void}>()
const onResize = (size: Size) => {
  emit('update:width', size.width)
}

const router = useRouter()

const onSigninClick = () => {
  void router.push({ path: '/signin' })
}

const onSignupClick = () => {
  void router.push({ path: '/signup' })
}

</script>

<style lang='sass' scoped>
.btn
  margin-right: $mini-item-width

.separator
  margin: 4px $mini-item-height 4px $mini-item-width
</style>
