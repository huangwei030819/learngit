<template>
  <header class="head">
      <div class="head_left">
             右边
      </div>
      <div class="head_center"></div> 
      <div class="head_right">
         <ul class="nav nav-pills nav_ul">
           <li role="presentation"><router-link to="/page">Home</router-link></li>
           <li role="presentation"><router-link to="/show">ShowShop</router-link></li>
           <li role="presentation"><router-link to="/hello">Hello</router-link></li>
           <li role="presentation" @click="pust">dfasfs</li>
         </ul>
     </div>
  </header>
</template>

<script>
import bus from "./js/event"
export default {
  name: 'headerpage',
  data () {
    return {
      message: '欢迎来到武汉XX网'
    }
  },
  mounted(){
    
  },
  methods:{
    pust(){
      console.log(1);
      let data="xyz";
      bus.$emit("change",data);
           emit
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@border:1px solid red;
.head{
   position:fixed;
   top:0px;
   left:0px;
   width:100%;
   height:50px;
   clear: both;
   .head_left{
      float:left;
      width:300px;
      height:50px;
      border:@border;
      color:black;
   }
   .head_center{
      float:left;
      width:60%;
      height:50px;
      border:@border;
   }
   .head_right{
      float:left;
      width:320px;
      height:50px;
      border:@border;
      .nav_ul{
          margin-top:5px;
      }
   }
   a{
       color:black;
   }
}
</style>