<template>
  <div class='row'>
    <q-btn-dropdown
      dense
      flat
      icon='language'
      dropdown-icon='keyboard_arrow_down'
      text-color='grey-8'
      size='1em'
    >
      <template #label>
        <div class='label'>
          {{ langLabel }}
        </div>
      </template>
      <q-list>
        <q-item
          dense
          v-close-popup
          v-for='myLang in langs'
          :key='myLang.ID'
          clickable
          @click='onLangItemClick(myLang)'
        >
          <q-item-section>
            <div class='row'>
              <q-img fit='contain' class='icon' :src='myLang.Logo' />
              <q-item-label dense>
                {{ myLang.Name }}
              </q-item-label>
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue'
import { Language, useLangStore, useLocaleStore } from 'npool-cli-v2'

const lang = useLangStore()
const locale = useLocaleStore()
const langs = computed(() => locale.Languages)
const langLabel = computed(() => locale.CurLang?.Short !== '' ? locale.CurLang?.Short : locale.CurLang.Lang)

const onLangItemClick = (myLang: Language) => {
  lang.setLang(myLang)
}

</script>

<style lang='sass' scoped>
.label
  font-size: 18px
  margin-left: 6px
  line-height: 24px

.icon
  width: 24px
  margin-right: 10px
</style>
