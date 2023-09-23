<script setup>
import HomeCategory from '@/views/Home/components/HomeCategory.vue'
import HomeBanner from '@/views/Home/components/HomeBanner.vue'
import HomeNew from '@/views/Home/components/HomeNew.vue'
import HomeHot from '@/views/Home/components/HomeHot.vue'
import HomeProduct from '@/views/Home/components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'


</script>

<template>
    <div class="container">
        <HomeCategory></HomeCategory>
        <HomeBanner></HomeBanner>
    </div>
    <HomeNew></HomeNew>
    <HomeHot></HomeHot>
    <HomeProduct></HomeProduct>

    <HomePanel title="新鲜好物" subTitle="嚯嚯嚯">
        <div>
            你好啊
        </div>
    </HomePanel>
    <HomePanel title="新鲜好物" subTitle="嚯嚯嚯">
        <div>
            你好啊
        </div>
    </HomePanel>
</template>