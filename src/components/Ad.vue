<template>
  <div class="ads">
    <div v-for="ad in ads" :key="ad">
      <img class="m-3" :src="ad.banner" alt="">
    </div>
  </div>
</template>

<script>
import { adService } from '../services/AdService'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    onMounted(() => {
      adService.getAds()
    })
    return {
      ads: computed(() => AppState.ads)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
