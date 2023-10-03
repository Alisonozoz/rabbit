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

//删除购物车商品
export const delCartAPI = (ids) => {
    return request({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}