<template>
  <div v-if='!hidden && announcement' class='background'>
    <div class='content'>
      <div class='announcement row'>
        <q-icon class='icon' name='volume_up' />
        {{ announcement.Title }}
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useMailboxStore, Announcement } from 'npool-cli-v2'

const mailbox = useMailboxStore()
const hidden = computed(() => mailbox.Announcements.length === 0)

const index = ref(0)
const ticker = ref(-1)
const announcement = ref(undefined as unknown as Announcement)

onMounted(() => {
  ticker.value = window.setInterval(() => {
    index.value %= mailbox.Announcements.length
    announcement.value = !hidden.value ? mailbox.Announcements[index.value] : undefined as unknown as Announcement
    index.value += 1
  }, 3000)
})

onUnmounted(() => {
  if (ticker.value >= 0) {
    window.clearInterval(ticker.value)
  }
})

</script>

<style lang='sass' scoped>
.background
  background-color: $dark-background

.icon
  width: 28px
  height: 28px

.announcement
  height: 28px
  color: $medium-text
  width: 100%
  line-height: 28px
</style>
