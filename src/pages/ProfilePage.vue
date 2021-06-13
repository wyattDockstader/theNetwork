<template>
  <div v-if="activeProfile" class="profilePage">
    <Profile />
  </div>
  <div v-else>
    Loading ....
  </div>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { profileService } from '../services/ProfileService'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
import { router } from '../router'
export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()

    watchEffect(async() => {
      try {
        await profileService.getProfileById(route.params.id)
      } catch (error) {
        Notification.toast('there is no profile')
        router.push({ name: 'Home' })
      }
    })
    return {
      profile: computed(() => AppState.activeProfile)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
