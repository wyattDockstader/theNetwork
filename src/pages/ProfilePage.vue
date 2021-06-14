<template>
  <div v-if="profile" class="profilePage">
    <Profile />
    <Thread />
  </div>
  <div v-else>
    Loading ....
  </div>
</template>

<script>
import { computed, reactive, watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { profileService } from '../services/ProfileService'
import { AppState } from '../AppState'
import { router } from '../router'
import { logger } from '../utils/Logger'
export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()
    const state = reactive({
    })
    watchEffect(async() => {
      try {
        await profileService.getProfileById(route.params.id)
        await profileService.getPostsByUserId(route.params.id)
      } catch (error) {
        logger.log('there is no profile')
        router.push({ name: 'Home' })
      }
    })
    return {
      state,
      profile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
