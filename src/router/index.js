import Vue from 'vue'
import VueRouter from 'vue-router'
import Check from '@/views/process/wait/check'
import Receive from '@/views/process/wait/receive'
import Receipt from '@/views/process/wait/receipt'
import Contract from '@/views/process/wait/receive/contract'
import Contractdetail from '@/views/process/wait/receive/contractdetail'
import Agreement from '@/views/process/agreement/index'
import Submit from '@/views/process/agreement/submit'
import Wait from '@/views/process/wait/index'
import Order from '@/views/process/wait/order'
import Apply from '@/views/process/wait/order/apply'
import Detail from '@/views/process/wait/order/detail'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/wait'
  },
  // 采购代办路由
  {
    path: '/wait',
    redirect: '/wait/order/apply',
    component: Wait,
    children: [
      {
        path: 'order',
        component: Order,
        redirect: '/wait/order/apply',
        children: [
          {
            path: 'apply',
            component: Apply
          },
          {
            path: 'detail',
            component: Detail
          }
        ]
      },
      {
        path: 'receive',
        redirect: '/wait/receive/contract',
        component: Receive,
        children: [
          {
            path: 'contract',
            component: Contract
          },
          {
            path: 'contractdetail',
            component: Contractdetail
          }
        ]
      },
      {
        path: 'check',
        component: Check
      },
      {
        path: 'receipt',
        component: Receipt
      }
    ]
  },
  // 协议框架路由
  {
    path: '/agreement',
    component: Agreement,
    children: [
      {
        path: 'submit',
        component: Submit
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
