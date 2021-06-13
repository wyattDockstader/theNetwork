const { AppState } = require('../AppState')
const { logger } = require('../utils/Logger')
const { api } = require('./AxiosService')

class PostsService {
  async getPosts() {
    const res = await api.get('/api/posts')
    AppState.posts = res.data.posts
    AppState.older = res.data.older ? res.data.older.slice(-1) : null
    AppState.newer = res.data.newer ? res.data.newer.slice(-1) : null
    logger.log('posts', AppState.older)
  }

  async pageNewer() {
    logger.log('page Newer Works')
    const res = await api.get('/api/posts?page=' + AppState.newer)
    AppState.posts = res.data.posts
    AppState.older = res.data.older ? res.data.older.slice(-1) : null
    AppState.newer = res.data.newer ? res.data.newer.slice(-1) : null
  }

  async pageOlder() {
    logger.log('page Older Works')
    const res = await api.get('/api/posts?page=' + AppState.older)
    AppState.posts = res.data.posts
    AppState.older = res.data.older ? res.data.older.slice(-1) : null
    AppState.newer = res.data.newer ? res.data.newer.slice(-1) : null
  }

  async createPost(newPost) {
    const res = await api.post('api/posts', newPost)
    logger.log('new post', res.data)
    this.getPosts()
  }

  async searchPost(formData) {
    logger.log(formData)
    const res = await api.get('api/posts?query=' + formData)
    AppState.posts = res.data.posts
    AppState.older = res.data.older ? res.data.older.slice(-1) : null
    AppState.newer = res.data.newer ? res.data.newer.slice(-1) : null
  }

  async editPost(id, editedPost) {
    const res = await api.put('api/posts/' + id, editedPost)
    const i = AppState.posts.findIndex(p => p.id === id)
    AppState.posts.splice(i, 1, res.data)
  }

  async deletePost(id) {
    await api.delete('api/posts/' + id)
    AppState.posts = AppState.posts.filter(p => p.id !== id)
  }
}
export const postsService = new PostsService()
