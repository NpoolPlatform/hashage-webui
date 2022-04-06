<template>
  <q-tabs
    dense
    v-model='curTab'
    narrow-indicator
    no-caps
    inline-label
    outside-arrows
    mobile-arrows
    :style='{"max-width": maxWidth + "px"}'
    indicator-color='primary'
    class='no-shadow text-dark-text tabs'
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
import { ref, defineProps, toRef } from 'vue'

interface Props {
  maxWidth: number
}

const props = defineProps<Props>()
const maxWidth = toRef(props, 'maxWidth')

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

</script>

<style lang='sass' scoped>
.q-tab
  min-height: $small-item-height
</style>
