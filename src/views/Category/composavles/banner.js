import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home'

export function useBanner(){
    //获取轮播图数据
    const bannerList = ref([])

    const getBanner = async () => {
    const res = await getBannerAPI({
        distributionSite: '2'
    })
    bannerList.value = res.result
    }
    onMounted(() => {
        getBanner()
    })
    return {
        bannerList
    }
}