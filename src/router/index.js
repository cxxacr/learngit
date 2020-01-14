import Vue from 'vue'
import VueRouter from 'vue-router'
import Agreement from '@/views/process/agreement/index'
import Submit from '@/views/process/agreement/submit'
import Wait from '@/views/process/wait/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/wait'
  },
  // 采购代办路由
  {
    path: '/wait',
    component: Wait
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
