<template>
  <div class="row">
    <div class="col-3 login">
      <Login />
    </div>
    <div class="col-9">
      <header>
        <Navbar />
      </header>
      <main>
        <router-view />
      </main>
    </div>
  </div>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Login from './components/Login.vue'
export default {
  components: { Login },
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.login {
  height: 95vh;
  background: rgb(159, 168, 173);
  color: rgb(243, 236, 236);
}

</style>
