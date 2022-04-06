<template>
  <div class='background'>
    <div class='content'>
      <div class='announcement row' @click='onAnnouncementClick'>
        <q-icon size='1.2rem' class='icon' name='volume_up' />
        {{ announcement ? announcement.Title : $t('MSG_NO_ANNOUNCEMENT') }}
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, onUnmounted } from 'vue'
import { useMailboxStore, Announcement, NotificationType } from 'npool-cli-v2'
import { useI18n } from 'vue-i18n'

const mailbox = useMailboxStore()

const index = ref(0)
const ticker = ref(-1)
const announcement = ref(undefined as unknown as Announcement)

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

onMounted(() => {
  ticker.value = window.setInterval(() => {
    if (mailbox.Announcements.length > 0) {
      index.value %= mailbox.Announcements.length
      announcement.value = mailbox.Announcements[index.value]
      index.value += 1
    }
  }, 3000)

  mailbox.getAnnouncements({
    Message: {
      Error: {
        Title: t('MSG_GET_LANGS'),
        Message: t('MSG_GET_LANGS_FAIL'),
        Popup: true,
        Type: NotificationType.Error
      }
    }
  })
})

onUnmounted(() => {
  if (ticker.value >= 0) {
    window.clearInterval(ticker.value)
  }
})

const onAnnouncementClick = () => {
  console.log('TODO: goto announcement')
}

</script>

<style lang='sass' scoped>
.background
  background-color: $dark-background

.icon
  width: auto
  height: $announcement-height
  margin-right: $mini-item-width

.announcement
  height: $announcement-height
  color: $medium-text
  width: 100%
  line-height: $announcement-height
  cursor: pointer
  font-size: $font-mini
</style>
