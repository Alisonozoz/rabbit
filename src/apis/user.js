import httpInstance from '@/utils/http'

export const getLoginAPI = (account, password) => {
    return httpInstance({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}