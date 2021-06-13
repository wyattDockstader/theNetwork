<template>
  <div v-if="activeProfile">
    <img :src="activeProfile.imgUrl" alt="">
  </div>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'Profile',
  setup() {
    const state = reactive({

    })
    onMounted(() => {
    })
    return {
      state,
      activeProfile: computed(() => AppState.activeProfile)

    }
  }
}
</script>

<style scoped>

</style>
