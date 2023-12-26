import { RouteRecordRaw, createRouter,createWebHashHistory } from 'vue-router'
import HomePage from '@/views/home-page/HomePage.vue'
import Demo from '@/views/demo/Demo.vue'
const routes:Readonly<RouteRecordRaw[]> = [
    { path: '/', component: HomePage },
    { 
      path: '/demo', 
      component: Demo,
      // children:[
      //   {
      //     path:'',
      //     component:Demo
      //   }
      // ]
    },
  ]

export const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})
  