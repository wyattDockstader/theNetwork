<template>
  <div v-if="activeProfile">
    <img :src="activeProfile.imgUrl" alt="">
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'Profile',
  setup() {
    return {
      activeProfile: computed(() => AppState.activeProfile)

    }
  }
}
</script>

<style scoped>

</style>
