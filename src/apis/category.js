import httpInstance from '@/utils/http'

//获取分类页内容API
export function getCategoryAPI(id) {
    return httpInstance({
        url:'/category',
        params: {
            id
        }
    })
}

//获取二级分类页内容API
export const getCategoryFilterAPI = (id) => {
    return httpInstance({
      url:'/category/sub/filter',
      params:{
        id
      }
    })
  }