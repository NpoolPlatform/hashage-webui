<template>
  <q-icon class='icon' :name='logoImg'>
    <q-resize-observer @resize='onResize' />
  </q-icon>
</template>

<script setup lang='ts'>
import { defineEmits } from 'vue'
import { Size } from '../../types/size'

const logoImg = 'img:logos/logo.png'

const emit = defineEmits<{(e: 'update:width', width: number): void}>()
const onResize = (size: Size) => {
  emit('update:width', size.width)
}

</script>

<style lang='sass' scoped>
::v-deep img
  height: 100%
  width: auto
</style>
