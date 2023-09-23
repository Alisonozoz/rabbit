import httpInstance from '@/utils/http'

//获取bannerPAI
export function getBannerAPI() {
    return httpInstance({
        url: '/home/banner'
    })
}

//获取新鲜好物API
export function getNewAPI() {
    return httpInstance({
        url: '/home/new'
    })
}

//获取人气推荐API
export function getHotAPI() {
    return httpInstance({
        url: '/home/hot'
    })
}

//获取所有商品模块API
export const getGoodsAPI = () => {
    return httpInstance({
      url: '/home/goods'
    })
  }