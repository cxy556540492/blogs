/*
 * @Author: your name
 * @Date: 2020-07-31 11:05:25
 * @LastEditTime: 2020-10-19 16:39:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs\app\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/Index/Index'
import Home from '../pages/Home/Home'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/index',
    },
    {
        path:'/index',
        component:Index
    },
    {
        path:'/home',
        component:Home
    }
]

const router = new VueRouter({
    routes
})

export default router
