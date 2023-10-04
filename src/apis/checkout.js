import request from '@/utils/http'

//获取订单结算页接口
export const getCheckoutAPI = () => {
    return request({
        url: '/member/order/pre'
    })
}

//提交订单
export const createOrderAPI = (data) => {
    return request({
        url: '/member/order',
        method: 'POST',
        data
    })
}