import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'

import App from './App.vue'
import router from './router'

//引入初始化样式文件
import '@/styles/common.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//定义全局指令
app.directive('img-lazy',{
    mounted(el, binding) {
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                if(isIntersecting) {
                    //进入视口区
                    el.src = binding.value
                }
            }
          )
    }
})
