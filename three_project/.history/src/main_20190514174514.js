// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
//import Store from './store'
//import routers from './router/router.js'
import $ from 'jquery'
import'bootstrap/js/bootstrap.min.js'
import'bootstrap/css/bootstrap.min.css'

Vue.use(VueRouter);

//路由组件
const main = r => require.ensure([], () => r(require('./components/main')), 'main');
const page = r => require.ensure([], () => r(require('./components/page')), 'page');
const show = r => require.ensure([], () => r(require('./components/show')), 'show');
const login = r => require.ensure([], () => r(require('./components/login')), 'login');

Vue.config.productionTip = false;

const logins= { template:"<h1>我是登录xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h1>" };
const register= { template:"<h1>我是注册</h1>" };


const routers=[
  // { path:'', redirect:'/login' },
  // { path:'/login',component:login },
  // { path:'/main',component:main }
  {path:'*',redirect:'/logins'},
  {path:'/logins',component:logins},
  {path:'/register',component:register}
];

const router = new VueRouter({
  routers,
  mode:'hash',
});

router.beforeEach((to, from, next) => {
    console.log(to);
    next();
});
/* eslint-disable no-new */
new Vue({
 // el: '#app',
  router,
  components: { App },
 // template: '<App/>'
}).$mount('#app')
