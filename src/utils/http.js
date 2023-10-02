import axios from "axios"
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { userUserStore } from '@/stores/user'
import { useRouter } from "vue-router"

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    const userStore = userUserStore()
    //1、从pinia中获取token数据
    const token = userStore.userInfo.token
    //2、按照后端的要求拼接token数据
    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
  httpInstance.interceptors.response.use(res => res.data, e => {
    //错误统一提示
    ElMessage({type: 'warning', message: e.response.data.message})
    //401token失效处理
    const userStore = userUserStore()
    const router = useRouter()
    //1、清除用户信息
    userStore.clearUserInfo()
    //2、路由跳转到登录页
    router.push('/login')
    return Promise.reject(e)
  })

export default httpInstance