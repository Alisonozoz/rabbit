<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

import { useCategoryStore } from '@/stores/categoryStore'
import { onMounted } from 'vue'

//触发获取导航列表的action
const categoryStore = useCategoryStore()

onMounted(() => categoryStore.getCategory())

</script>

<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav />
  <LayoutHeader />
  
  <!-- 二级路由出口 -->
  <RouterView />

  <LayoutFooter />
</template>