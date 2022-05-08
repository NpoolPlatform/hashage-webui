<template>
  <div class='row justify-center'>
    <div class='row'>
      <div
        class='itc'
        v-for='itc in itcs'
        :key='itc.Title'
        @click='onTastyClick(itc)'
      >
        <ItcBtn
          :icon='itc.Icon'
          :title='itc.Title'
          :caption='itc.Caption'
        />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

import gift from '../../assets/gift.png'
import invitation from '../../assets/invitation.png'
import selected from '../../assets/selected.png'

const ItcBtn = defineAsyncComponent(() => import('src/components/complex/ItcBtn.vue'))

interface Itc {
  Icon: string
  Title: string
  Caption: string
  Target: string
}

const itcs = [
  {
    Icon: 'img:' + gift,
    Title: 'MSG_NEWBIE_GIFT_TITLE',
    Caption: 'MSG_NEWBIE_GIFT_CAPTION',
    Target: ''
  }, {
    Icon: 'img:' + invitation,
    Title: 'MSG_INVITATION_TITLE',
    Caption: 'MSG_INVITATION_CAPTION',
    Target: ''
  }, {
    Icon: 'img:' + selected,
    Title: 'MSG_SELECTED_TITLE',
    Caption: 'MSG_SELECTED_CAPTION',
    Target: ''
  }
] as Array<Itc>

const onTastyClick = (itc: Itc) => {
  console.log(itc)
  // TODO
}

</script>

<style lang='sass' scoped>
.itc
  padding: 0 $large-item-height
  max-width: 330px
</style>
