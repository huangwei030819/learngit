import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld' 最好不要这样引入

const main = r => require.ensure([], () => r(require('../components/main')), 'main');
const page = r => require.ensure([], () => r(require('../components/page')), 'page');
const show = r => require.ensure([], () => r(require('../components/show')), 'show');
const login = r => require.ensure([], () => r(require('../components/login')), 'login');
const Hello = r => require.ensure([], () => r(require('../components/HelloWorld.vue')),'hello')

Vue.use(Router)



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
      component:login,
      meta:{ 
        admin:false,
        student:false,
        tourist:false  //meta字段叫做路由元信息
      }
    },
    {
      path: '/main',
      name: 'main',
      component:main,
      children:[
        { path:"*",redirect:"/show"},
        { path:"/show",component:show,name:"show" },
        { path:"/page",component:page,name:"page" },
        { path:"/hello",component:Hello,name:"hello"}
      ]
    }
  ]
})
