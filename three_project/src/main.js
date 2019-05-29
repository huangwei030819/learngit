// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import Store from './store'
import router from './router'
import $ from 'jquery'
import'bootstrap/js/bootstrap.min.js'
import'bootstrap/css/bootstrap.min.css'

//element
import ElemenUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//这边重点 路由以后最好直接按照vue的写法 冲router这个文件夹里面引入

Vue.config.productionTip = false;

Vue.use(ElemenUI);

router.beforeEach((to, from, next) => {
        let vaild = localStorage.getItem("dest");
        console.log(vaild);
    //if(to.matched.some(record=>record.meta.requiresAuth)){
       //  console.log(record.meta.requiresAuth);
      // if()
    //}
    next();
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
