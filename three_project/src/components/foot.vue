<template>
  <footer class="foot">
      <p class="title_p">{{message}}</p>
  </footer>
</template>

<script>
import bus from './js/event'
export default {
  name: 'footpage',
  data () {
    return {
      message:"@2018青山区民政局地名普查服务平台版权所有  鄂ICP备16017378号-1  增值电信业务经营许可证编号：B1-20171995鄂ICP备16017378号鄂公网安备42011102001440号"
    }
  },
  mounted(){
    
  },
  methods:{
    shoudao(){
      console.log(2);
      bus.$on("change",(data)=>{
       this.message=data;
       console.log(this.message);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.foot{
   position:fixed;
   left:0px;
   bottom:0px;
   background-color:black;
   width:100%;
   height:20px;
   text-align:center;
   .title_p{
       font-size:14px;
       color:white;
   }
}
</style>