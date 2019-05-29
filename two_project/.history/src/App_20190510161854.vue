<template>
  <div id="app">
    <v-header></v-header>
    <!-- <v-left></v-left> -->
    <!--<router-view/>-->

    <!-- <v-foot></v-foot> -->
  </div>
</template>

<script>
const VHeader = resolve => require(['./components/Vheader.vue'], resolve);
const Foot = resolve => require(['./components/foot.vue'], resolve);
const Left = resolve => require(['./components/Vleft.vue'], resolve);
//import VHeader from './components/Vheader.vue';
//import Foot from './components/foot.vue';
//import Left from './components/Vleft.vue';
export default {
  name: 'App',
  data(){
    return{
      mytitle:"首页"
    } 
  },
  methods:{

  },
  components:{
     "v-header":VHeader,
     "v-foot":Foot,
     "v-left":Left,
  },
 mounted(){
  }
}
</script>

<style lang="less">
   #app{
     background-color:#2F4056!important;
     overflow-x:hidden;
     overflow-y:hidden;
   }
</style>
