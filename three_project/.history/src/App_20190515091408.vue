<template>
  <div id="app">
    <router-link to="/login">aaa</router-link>
    <!-- <v-login></v-login> -->
    <div style="width:1800px;height:200px;border:1px solid red;"> 
    <router-view>
       <!-- <keep-alive>
       </keep-alive> -->
    </router-view>
    </div>
  </div>
</template>

<script>
const Login = resolve => require(['./components/login.vue'], resolve);
const Hello = resolve => require(['./components/HelloWorld'],resolve);
export default {
  name: 'App',
  data(){
    return{
       
    }
  },
  components:{
      "v-login":Login,
      "v-hello":Hello,
  }
}
</script>

<style lang="less">
@import url("./css_less/body_less.less");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
