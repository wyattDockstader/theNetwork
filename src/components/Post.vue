<template>
  <div class="post">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="post.imgUrl" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">
          {{ post.body }}
        </p>
      </div>
      <div class="row">
        <div class="col-6">
          <div v-if="post.creatorId == account.id">
            <button @click="editPost">
              Edit
            </button>
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
          <p>created at: {{ post.createdAt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import { profileService } from '../services/ProfileService'

export default {
  props: { post: { type: Object, required: true } },
  setup(props) {
    const state = reactive({
    })
    return {
      state,
      account: computed(() => AppState.account),
      async editPost() {
        postsService.editPost()
      },

      async deletePost() {
        postsService.deletePost(props.post.id)
      },

      setProfile() {
        profileService.setProfile(props.post.creatorId)
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
