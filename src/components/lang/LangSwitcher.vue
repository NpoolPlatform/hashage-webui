<template>
  <div class='row'>
    <q-btn-dropdown
      dense
      flat
      icon='language'
      dropdown-icon='expand_more'
      color='grey-7'
      size='12px'
    >
      <template #label>
        <div class='label'>
          {{ langLabel }}
        </div>
      </template>
      <q-list class='langs'>
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
import { Language, useLangStore } from 'npool-cli-v2'

const lang = useLangStore()
const langs = computed(() => lang.Languages)
const langLabel = computed(() => lang.CurLang?.Short !== '' ? lang.CurLang?.Short : lang.CurLang.Lang)

const onLangItemClick = (myLang: Language) => {
  lang.setLang(myLang)
}

</script>

<style lang='sass' scoped>
.label
  font-size: 18px
  margin-left: 6px
  line-height: 24px

.langs
  background-color: $dark-background

.item:hover
  background-color: $light-background

.icon
  width: 24px
  margin-right: 10px

.switcher
  fill: $dark-text
</style>
