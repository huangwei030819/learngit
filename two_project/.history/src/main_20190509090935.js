// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
//import Ampscomponent from 'vue-amap'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'

import'bootstrap/js/bootstrap.min.js'
import'bootstrap/css/bootstrap.min.css'

// import routers from './router/router'
import store from './components/js/store'

const Vheader = r => require.ensure([], () => r(require('./components/Vheader')), 'Vheader');
const foot = r => require.ensure([], () => r(require('./components/foot')), 'foot');
const vleft = r => require.ensure([], () => r(require('./components/Vleft')), 'Vleft');
const map_date = r => require.ensure([], () => r(require('./router/map_date')), 'map_date');
const test = r => require.ensure([], () => r(require('./router/test')), 'test');
const xiqing = r => require.ensure([], () => r(require('./components/xiqing')), 'xiqing');
const jump = r => require.ensure([], () => r(require('./components/jump')), 'jump');

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(store);
//Vue.use(Ampscomponent);

Vue.config.productionTip = false

const Foo={template:"<div>Foo</div>"};
const Bar={template:"<div>Foo</div>"};
 
const  routes =[
  {path:'*',redirect:'/jump'},  
  {path:'/Vheader',name:'Vheader',comment:Vheader,meta:{title:"头"}},
  {path:'/map_data',name:'map_date',component:map_date,meta:{title:"废弃"}},
//{path:'/xiqing',name:'xiqing',component:xiqing},
  {path:'/test',name:'test',component:test,meta:{title:"测试"}},
  {path:'/xiqing',name:'xiqing',component:xiqing,meta:{titel:"详细"}},
  {path:'/jump',name:'jump',component:jump,meta:{title:"重点"}},
  /*
    {
      path: 'dynamic-table',
      component: () => import('@/views/table/dynamicTable/index'),另一种懒加载方法
      name: 'DynamicTable',
      meta: { title: 'dynamicTable' } meta字段 给每个路由添加一个自定义的meta对象 在对象中设置一个状态 比如 meta:{login_require:true} ps:这个字段可以写多个meta:{auth:true,keepAlive: true},
    }
  */
]
/*
 路由监听的几个关键点
 用本地存储的方式  cookit 或者localStorage存储用户token值
 业务逻辑:用户没有localStorage说明第一次登陆 直接跳转到登陆页面  在登录页面存储token 存到localStorage 用户关闭页面 不妥 要么用cookit 要么那种每个页面都需要验证的

 meta 设置一个boolean作为判断路由是否登录的依据
 to 为向后走的路由对象 包括路由的完整信息
 from from为从哪里跳过来
 next() 控制路由向下走 重新定义路由跳转的路由next('路由路径').

  to: Route: 即将要进入的目标 路由对象 to的属性 fullpath  hash  matched  meta name params path  query

  from: Route: 当前导航正要离开的路由

  next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。

  next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。

  next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。

  next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。


  var user = store.state.user;
  if (user && user.token) { // 判断是否有token
    if (to.meta.roles && to.meta.roles.indexOf(user.role) === -1) {//页面有权限要求但用户不符合
    	alert('403')
    	if(from.path == '/login'){
    		next('/')
    	}else{
    		next({path: from.path})
    	}
    } else {//页面没有权限要求就直接访问
    	next()
    }
  } else if(to.path != '/login'){//没有token的话让跳转到登录页，并传递当前准备访问的路由
      next({path:'/login', query: {redirect: to.fullPath}})
  } else{
  	next()
  }
    var userInfo = window.localStorage.getItem('token');//获取浏览器缓存的用户信息 获取首页缓存信息
    if(userInfo){ //如果有就直接到首页咯
        next();
    } else {
    if(to.path=='/login'){ //如果是登录页面路径，就直接next()
        next();
    } else { //不然就跳转到登录；
        next('/login');
    }
     排除此时地址 = 转向的地址 的情况，避免dead loop,
*/

// Amap.initAMapApiLoader({
//   key:'ddd74a52bf8a8cd90cc950a11328b534',
//   plugin:[],
//   V:1.4.6,
// })

const router = new VueRouter({
  mode:"hash",
  routes,
});

router.beforeEach((to, from, next) => {
  //console.log(to);
  //console.log(from);
  //to and from are both route objects. must call `next`.
  next();
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
