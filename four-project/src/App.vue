<template>
  <div id="app">
    <v-header></v-header>
    <div style="margin-top:60px;width:100%;height:400px;">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
const header = resolve => require(['./components/header.vue'], resolve);
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    "v-header":header
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
  height:800px;
  width:100%;
  border:1px solid red;
}
</style>
