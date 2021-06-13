<template>
  <div class="row">
    <!-- <router-link class="row search-bar" :to="{ name: 'Search' }"> -->
    <form @submit.prevent="searchPost" class="form-inline">
      <div class="form-group">
        <label for="search" class="sr-only">Search Posts</label>
        <input type="text" class="form-control" v-model="state.search" placeholder="Search Posts">
      </div>
      <button type="submit" class="btn btn-primary">
        Search
      </button>
    </form>
  </div>
  <div class="row create-form" v-if="user.isAuthenticated">
    <form @submit.prevent="createPost" class="form-inline">
      <div class="form-group">
        <label for="post-Url" class="sr-only">Post URL</label>
        <input type="url" class="form-control" v-model="state.newPost.imgUrl" placeholder="Post URL">
      </div>
      <div class="form-group">
        <label for="post-body" class="sr-only">Post Body</label>
        <input type="text" class="form-control" v-model="state.newPost.body" placeholder="Post Body">
      </div>
      <button type="submit" class="btn btn-primary">
        Post
      </button>
    </form>
  </div>
  <div class="row justify-content-center pt-4">
    <div class="col-8">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div class="col-4">
      Ads go Here
    </div>
  </div>
  <div class="row justify-content-center">
    <button @click="pageNewer" :disabled="!newer">
      Prev
    </button>
    <button @click="pageOlder" :disabled="!older">
      Next
    </button>
  </div>
</template>

<script>
import { postsService } from '../services/PostsService'
import { AppState } from '../AppState'
import { computed, onMounted, reactive } from 'vue'
import Notification from '../utils/Notification'
export default {
  setup() {
    const state = reactive({
      newPost: {},
      search: ''
    })
    onMounted(async() => {
      try {
        postsService.getPosts()
      } catch (error) {
        Notification.toast(error, 'you messed up')
      }
    })
    return {
      AppState,
      state,
      user: computed(() => AppState.user),
      older: computed(() => AppState.older),
      newer: computed(() => AppState.newer),
      posts: computed(() => AppState.posts),
      async pageOlder() {
        postsService.pageOlder()
      },

      async pageNewer() {
        postsService.pageNewer()
      },
      async createPost() {
        try {
          await postsService.createPost(state.newPost)
        } catch (error) {
          Notification.toast(error, "couldn't create post homie")
        } state.newPost = {}
      },
      async searchPost(formData) {
        try {
          await postsService.searchPost(state.search)
        } catch (error) {
          Notification.toast(error, "couldn't search posts homie")
        } state.search = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
