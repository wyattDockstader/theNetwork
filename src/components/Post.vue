<template>
  <div class="post">
    <div class="card m-5 p-2" style="width: 18rem;">
      <img class="card-img-top" :src="post.imgUrl" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">
          {{ post.body }}
        </p>
      </div>
      <div class="row">
        <div class="col-6">
          <div v-if="post.creatorId == account.id">
            <div class="row create-form">
              <form @submit.prevent="editPost" class="form-inline">
                <div class="form-group">
                  <label for="post-Url" class="sr-only">Post URL</label>
                  <input type="url" class="form-control" v-model="state.editedPost.imgUrl" placeholder="Post URL">
                </div>
                <div class="form-group">
                  <label for="post-body" class="sr-only">Post Body</label>
                  <input type="text" class="form-control" v-model="state.editedPost.body" placeholder="Post Body">
                </div>
                <button type="submit" class="btn btn-primary">
                  Edit
                </button>
              </form>
            </div>
            <button @click="deletePost">
              Delete
            </button>
          </div>
          <div v-else>
            <router-link :to="{ name: 'Profile', params: { id: post.creator.id } }">
              <img class="creator-img" :src="post.creator.coverImg" alt="creator img">
              <p>{{ post.creator.name }}</p>
            </router-link>
          </div>
        </div>
        <div class="col-6">
          <p>likes:{{ post.likes.length }}</p>
          <p>created at: {{ post.createdAt }}</p>
          <div @change="changeLike" class="form-check">
            <input type="checkbox" class="form-check-input" v-model="state.likedPost.likes">
            <label class="form-check-label" for="exampleCheck1">Like</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import Notification from '../utils/Notification'

export default {
  props: { post: { type: Object, required: true } },
  setup(props) {
    const state = reactive({
      editedPost: {},
      likedPost: {}
    })
    return {
      state,
      account: computed(() => AppState.account),
      async editPost() {
        postsService.editPost(props.post.id, state.editedPost)
      },

      async changeLike() {
        postsService.changeLike(props.post.id, state.likedPost)
      },

      async deletePost() {
        if (confirm('Do you really want to delete your awesome post??')) {
          postsService.deletePost(props.post.id)
          postsService.getPosts()
          Notification.toast('you deleted a post')
        }
      }
    }
  }
}
</script>

<style>
.creator-img {
  height: 50px;
  width: 50px;
  border-radius: 50px;
}

</style>
