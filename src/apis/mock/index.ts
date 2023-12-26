import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import newsAnnouncementMock from '../home-page/news-announcement/mock'
import mainPageMock from '../main-page/menu/mock'
import serviceItemMock from '../home-page/serviceI-tems/mock'

export function setupMock () {
  // 这个是用来注册mock的，当在生产中使用mock时，很重要
  createProdMockServer(
    [
      ...newsAnnouncementMock,
      ...mainPageMock,
      ...serviceItemMock
    ]
  )
}
