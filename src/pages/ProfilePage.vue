<template>
  <div v-if="activeProfile" class="profilePage">
    <Profile />
  </div>
  <div v-else>
    Loading ....
  </div>
</template>

<script>
import { watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { profileService } from '../services/ProfileService'
export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()

    watchEffect(() => {
      profileService.setProfile(route.params.id)
    })
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
