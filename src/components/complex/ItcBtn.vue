<template>
  <div class='cursor-pointer'>
    <div class='column'>
      <div class='row justify-center'>
        <q-icon size='3rem' :name='icon' />
      </div>
      <div class='row justify-center'>
        <span class='small-label label small-line-gap small-line-first'>{{ title }}</span>
      </div>
      <div class='row justify-center'>
        <span class='small-caption caption small-line-gap'>{{ caption }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineProps, toRef } from 'vue'

interface Props {
  icon: string
  title: string
  caption: string
}

const props = defineProps<Props>()
const icon = toRef(props, 'icon')

</script>

<style lang='sass' scoped>
</style>
