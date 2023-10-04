import request from '@/utils/http'

//订单支付接口
export const getPayAPI = (id) => {
    return request({
        url: `/member/order/${id}`
    })
}
