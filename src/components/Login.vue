<template>
  <div>
    <span class="navbar-collapse">
      <button
        class="btn btn-outline-primary text-uppercase"
        @click="login"
        v-if="!user.isAuthenticated"
      >
        Login
      </button>

      <div v-else>
        <img
          :src="user.picture"
          alt="user photo"
          height="200"
          class="rounded"
        />
        <span class="mx-3">{{ user.name }}</span>
        <div>
          <router-link :to="{ name: 'Account' }">
            <div class="mx-3 hoverable">
              Account
            </div>
          </router-link>
          <router-link :to="{ name: 'Profile' }">
            <div class="mx-3 hoverable">
              Profile
            </div>
          </router-link>
          <button
            class="btn btn-outline-primary text-uppercase"
            @click="logout"
          >
            Logout
          </button>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
export default {
  setup() {
    logger.log(AppState.user)
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }

}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
  color: black;
}
</style>
