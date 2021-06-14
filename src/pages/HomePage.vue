<template>
  <div class="container">
    <Thread />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { postsService } from '../services/PostsService'
import { AppState } from '../AppState'
// import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      AppState.activeProfile = null
      try {
        postsService.getPosts()
      } catch (error) {
        Notification.toast(error, 'you messed up')
      }
    })
    return {
      posts: computed(() => AppState.posts),
      activeProfile: computed(() => AppState.activeProfile)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
