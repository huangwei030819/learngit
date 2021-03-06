// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import Store from './store'
import routers from './router/router.js'
import $ from 'jquery'
import'bootstrap/js/bootstrap.min.js'
import'bootstrap/css/bootstrap.min.css'

[
  {
    path:'',
    redirect:'/login'
  },
  {
    path:'/login',
    components:Login
  },
  {
    path:'/main',
    components:Main,
    children:[
    {
      path:'',
      redirect:'/show',
    },
    {
      path:"/show",
      components:Show
    },
    {
      path:"/page",
      components:Page
    }
  ]
  }
]
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode:'hash',
	routers,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
