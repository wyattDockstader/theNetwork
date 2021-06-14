import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

export class AdService {
  async getAds() {
    const res = await api.get('api/ads')
    AppState.ads = res.data
    logger.log('add', AppState.ads)
  }
}

export const adService = new AdService()
