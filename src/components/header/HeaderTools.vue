<template>
  <q-tabs
    dense
    v-model='curTab'
    narrow-indicator
    no-caps
    inline-label
    outside-arrows
    mobile-arrows
    indicator-color='primary'
    class='no-shadow text-dark-text'
  >
    <div class='row' v-for='tab in tabs' :key='tab.Name'>
      <q-tab
        :name='tab.Name'
        :label='$t(tab.Label)'
        @click='onTabClick(tab)'
      />
    </div>
    <q-btn
      dense
      flat
      :label='$t("MSG_SIGNIN")'
      class='btn btn-round'
    />
    <q-btn
      dense
      flat
      :label='$t("MSG_SIGNUP")'
      class='btn btn-round btn-filled'
    />
    <q-separator
      vertical
      class='separator'
    />
    <LangSwitcher />
    <q-resize-observer @resize='onResize' />
  </q-tabs>
</template>

<script setup lang='ts'>
import { ref, defineAsyncComponent, defineEmits } from 'vue'
import { Size } from '../../types/size'

const LangSwitcher = defineAsyncComponent(() => import('src/components/lang/LangSwitcher.vue'))

interface Tab {
  Name: string
  Label: string
  Hot: boolean
  Target: string
}

const tabs = ref([
  {
    Name: 'MSG_RENT_POWER',
    Label: 'MSG_RENT_POWER',
    Hot: true,
    Target: '/'
  }, {
    Name: 'MSG_INNOVATION_MINING',
    Label: 'MSG_INNOVATION_MINING',
    Hot: false,
    Target: '/marketplace'
  }, {
    Name: 'MSG_ACTIVITY',
    Label: 'MSG_ACTIVITY',
    Hot: false,
    Target: '/'
  }, {
    Name: 'MSG_SIMULATOR',
    Label: 'MSG_SIMULATOR',
    Hot: false,
    Target: '/'
  }, {
    Name: 'MSG_ABOUT_US',
    Label: 'MSG_ABOUT_US',
    Hot: false,
    Target: '/'
  }
] as Array<Tab>)
const curTab = ref('MSG_RENT_POWER')

const onTabClick = (tab: Tab) => {
  console.log('TODO: click', tab)
}

const emit = defineEmits<{(e: 'update:width', width: number): void}>()
const onResize = (size: Size) => {
  emit('update:width', size.width)
}

</script>

<style lang='sass' scoped>
.q-tab
  min-height: $medium-item-height

.btn
  margin-right: $mini-item-width
  padding: 0 $mini-item-width

.separator
  margin: 4px 20px 4px 10px
</style>
