<template>
  <div id="app">
    <!-- <v-login></v-login> -->
    <router-view>
       <!-- <keep-alive>
       </keep-alive> -->
    </router-view>
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

<style>
@import url("./css_less/body_less.less");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border:1px solid red;
  width:body_width;
  height:body_height;
}
</style>
