<template>
  <q-tabs
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

enum TabType {
  TabIMO = 'imo',
  TabMarketPlace = 'marketplace',
  TabEvent = 'event',
  TabBlog = 'blog',
  TabWhiteList = 'whitelist'
}

interface Tab {
  Name: string
  Label: string
  Hot: boolean
  Target: string
}

const tabs = ref([
  {
    Name: TabType.TabIMO,
    Label: 'MSG_IMO',
    Hot: true,
    Target: '/'
  }, {
    Name: TabType.TabMarketPlace,
    Label: 'MSG_MARKET_PLACE',
    Hot: false,
    Target: '/marketplace'
  }, {
    Name: TabType.TabEvent,
    Label: 'MSG_EVENT',
    Hot: false,
    Target: '/'
  }, {
    Name: TabType.TabBlog,
    Label: 'MSG_BLOG',
    Hot: false,
    Target: '/'
  }, {
    Name: TabType.TabWhiteList,
    Label: 'MSG_WHITE_LIST',
    Hot: false,
    Target: '/'
  }
] as Array<Tab>)

const onTabClick = (tab: Tab) => {
  console.log('TODO: click', tab)
}

</script>

<style lang='sass' scoped>
</style>
