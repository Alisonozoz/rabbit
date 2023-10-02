import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getLoginAPI } from '@/apis/user'

export const userUserStore = defineStore('user', () => {
    //定义管理用户数据的state
    const userInfo = ref({})
    //定义获取接口数据的action函数
    const getUserInfo = async (account, password) => {
        const res = await getLoginAPI(account, password)
        userInfo.value = res.result
    }
    //以对象大的格式把state和action return
    return {
        userInfo,
        getUserInfo
    }
})