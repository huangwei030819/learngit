import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const login = {template:"<div style='color:black;'>登录页</div>"};
const mainpage = {template:"<div>主页面</div>"};
const shoppage = {template:"<div>电商页面</div>"};


export default new Router({
  mode:'history',
  routes: [
    {
      path: '*',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component:login
    },
    {
      path: '/mainpage',
      name: 'mainpage',
      component:mainpage
    },
    {
      path: '/shoppage',
      name: 'shoppage',
      component:shoppage
    },
  ]
})
