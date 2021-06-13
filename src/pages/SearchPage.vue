<template>
  <div class="search">
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
  </div>
</template>

<script>
export default {
  name: 'Search',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
