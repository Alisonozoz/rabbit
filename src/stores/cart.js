import { defineStore } from "pinia"
import { ref } from "vue"

export const useCartStore = defineStore('cart', () => {
    //1、定义state —购物车数据
    const cartList = ref([])
    //2、定义action —加入购物车
    const addCart = (goods) => {
        const item = cartList.value.find((item) => goods.skuId === item.skuId )
        //已经添加过则count+1
        if(item) {
            item.count++
        }else{
            //没有添加过则新增
            cartList.value.push(goods)
        }
    }
    return {
        cartList,
        addCart
    }
},
{
    persist: true
  })