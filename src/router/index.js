import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import subCategory from '@/views/subCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/category/:id',
          name: 'category',
          component: Category
        },
        {
          path: '/category/sub/:id',
          name: 'subcategory',
          component: subCategory
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: Detail
        },
        {
          path: '/cartlist',
          name: 'cartlist',
          component: CartList
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ],
  //路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
