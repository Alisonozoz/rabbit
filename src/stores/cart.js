import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { useUserStore } from './user'
import { insertCartAPI, updateNewListAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    console.log(isLogin,'111')
    //1、定义state —购物车数据
    const cartList = ref([])
    //2、定义action —加入购物车
    const addCart = async (goods) => {
        console.log(goods,'加入购物车')
        const skuId = goods.skuId
        const count = goods.count
        if(isLogin.value){
            //登录后的购物车逻辑
            //1、调用登录后的购物车接口
            await insertCartAPI(skuId, count)
            //2、调用登陆后的购物车列表接口
            const res =  await updateNewListAPI()
            //3、覆盖本地购物车列表
            cartList.value = res.result
        }else{
            const item = cartList.value.find((item) => goods.skuId === item.skuId )
            //已经添加过则count+1
            if(item) {
                item.count++
            }else{
                //没有添加过则新增
                cartList.value.push(goods)
            }
        }
    }

    //删除购物车的商品
    const delCart = (skuId) => {
      // 思路方法：
      // 1. 找到要删除项的下标值 - splice
      // 2. 使用数组的过滤方法 - filter
      const index = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(index, 1)
    }
    //计算属性
    //总的数量
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    //总的价钱
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
    //选中的数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    //选中的价钱
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))

    //单选框
    const singleCheck = (skuId, selected) => {
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }

    //是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))

    //复选框
    const allCheck = (selected) => {
        cartList.value.forEach((item) => item.selected = selected)
    }

    return {
        cartList,
        allCount,
        allPrice,
        isAll,
        selectedCount,
        selectedPrice,
        addCart,
        delCart,
        singleCheck,
        allCheck
    }
},
{
    persist: true
  })