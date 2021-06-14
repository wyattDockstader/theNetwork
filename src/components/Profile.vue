<template>
  <div>
    <h3>{{ p.name }}</h3>
    <img :src="p.picture" alt="">
    <div>
      <a href="{{ p.email }}">Email : {{ p.email }}</a>
    </div>
    <div>
      <a href="{{ p.github }}">GitHub : {{ p.github }}</a>
    </div>
    <div>
      <a href="{{ p.linkedin }}">LinkedIn : {{ p.linkedin }}</a>
    </div>
    <p>{{}}</p>
  </div>
  <div v-if="p.id == account.id">
    <h3>Update Profile:</h3>
    <form @submit.prevent="editProfile">
      <div class="form-group">
        <label for="profile-IconImg" class="sr-only">Icon Img</label>
        <input type="url" class="form-control" v-model="state.editedProfile.coverImg" placeholder="Icon Img">
      </div>
      <div class="form-group">
        <label for="profile-mainImg" class="sr-only">Main Img</label>
        <input type="url" class="form-control" v-model="state.editedProfile.picture" placeholder="Main Img">
      </div>
      <div class="form-group">
        <label for="profile-name" class="sr-only">Name</label>
        <input type="text" class="form-control" v-model="state.editedProfile.name" placeholder="Profile Name">
      </div>
      <div class="form-group">
        <label for="profile-email" class="sr-only">Email</label>
        <input type="text" class="form-control" v-model="state.editedProfile.email" placeholder="Profile Email">
      </div>
      <div class="form-group">
        <label for="profile-github" class="sr-only">GitHub</label>
        <input type="text" class="form-control" v-model="state.editedProfile.github" placeholder="GitHub Account">
      </div>
      <div class="form-group">
        <label for="profile-linkedin" class="sr-only">LinkedIn</label>
        <input type="text" class="form-control" v-model="state.editedProfile.linkedin" placeholder="LinkedIn Account">
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { profileService } from '../services/ProfileService'
export default {
  name: 'Profile',
  setup() {
    const state = reactive({
      editedProfile: {}
    })
    return {
      AppState,
      state,
      p: computed(() => AppState.activeProfile),
      account: computed(() => AppState.account),

      async editProfile() {
        profileService.editProfile(state.editedProfile)
      }
    }
  }
}
</script>

<style scoped>

</style>
