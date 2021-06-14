import { logger } from '../utils/Logger'

const { AppState } = require('../AppState')
const { api } = require('./AxiosService')

class ProfileService {
  async getProfileById(id) {
    const res = await api.get('api/profiles/' + id)
    AppState.activeProfile = res.data
  }

  async getPostsByUserId(id) {
    const res = await api.get('api/profiles/' + id + '/posts')
    logger.log(res.data)
    AppState.posts = res.data.posts
  }

  async editProfile(editedProfile) {
    logger.log(editedProfile)
    const res = await api.put('account', editedProfile)
    AppState.account = res.data
  }
}

export const profileService = new ProfileService()
