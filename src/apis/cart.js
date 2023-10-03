import request from '@/utils/http'

//加入购物车接口
export const insertCartAPI = (skuId, count) => {
    return request({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

//获取购物车列表接口
export const updateNewListAPI = () => {
    return request({
        url: '/member/cart'
    })
}