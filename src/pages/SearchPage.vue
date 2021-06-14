<template>
  <div class="search">
    <div class="row justify-content-center pt-4">
      <div class="col-8">
        <div v-for="post in searchResults" :key="post.id">
          <div class="m-5 p-2 bg-dark text-light">
            <img class="img-fluid" :src="post.imgUrl" alt="">
            <p>{{ post.body }}</p>
            <router-link :to="{ name: 'Profile', params: { id: post.creator.id } }">
              <img class="creator-img" :src="post.creator.coverImg" alt="creator img">
              <p>{{ post.creator.name }}</p>
            </router-link>
            <p>likes:{{ post.likes.length }}</p>
            <p>Created at:{{ post.createdAt }}</p>
            <p>{{}}</p>
          </div>
        </div>
      </div>
      <div class="col-4">
        Ads go Here
      </div>
    </div>
    <!-- <div class="row justify-content-center">
      <button @click="pageNewer" :disabled="!newer">
        Prev
      </button>
      <button @click="pageOlder" :disabled="!older">
        Next
      </button>
    </div> -->
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'Search',
  setup() {
    const state = reactive({})
    return {
      state,
      searchResults: computed(() => AppState.searchResults)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
img {
  height: 200px;
  width: auto;
}
img.creator-img {
  height: 50px;
  width: auto;
}
</style>
