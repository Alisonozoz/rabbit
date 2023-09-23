//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install (app) {
        //懒加载指令逻辑
        app.directive('img-lazy',{
            mounted(el, binding) {
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        if(isIntersecting) {
                            //进入视口区
                            el.src = binding.value
                            stop()
                        }
                    }
                  )
            }
        })
    }
}