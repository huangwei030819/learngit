<template>
  <div id="app">
    <!-- <v-hello></v-hello> -->
    <router-view></router-view>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
