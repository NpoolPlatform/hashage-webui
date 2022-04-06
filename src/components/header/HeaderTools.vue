<template>
  <q-tabs
    v-model='tab'
    narrow-indicator
    no-caps
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
  </q-tabs>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

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
const tab = ref('MSG_RENT_POWER')

const onTabClick = (tab: Tab) => {
  console.log('TODO: click', tab)
}

</script>

<style lang='sass' scoped>
.q-tab
  min-height: $medium-item-height
  height: $medium-item-height
</style>
