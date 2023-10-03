import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getLoginAPI } from '@/apis/user'

export const useUserStore = defineStore('user', () => {
    //定义管理用户数据的state
    const userInfo = ref({})
    //定义获取接口数据的action函数
    const getUserInfo = async (account, password) => {
        const res = await getLoginAPI(account, password)
        console.log(res,'222')
        userInfo.value = res.result
    }
    //定义用户点击退出登录后 清楚用户信息的函数
    const clearUserInfo = () => {
        userInfo.value = {}
    }
    //以对象大的格式把state和action return
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},
{
    persist: true
  })