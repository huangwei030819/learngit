<template>
   <div id="foot">
       <p class="foot_p" @click="test(1)">{{message}}</p>
   </div>
</template>
<script>
import bus from './js/vurcomponents.js'
export default{
    name:"foot",
    data(){
        return{
          message:"@2018青山区民政局地名普查服务平台版权所有  鄂ICP备16017378号-1  增值电信业务经营许可证编号：B1-20171995鄂ICP备16017378号鄂公网安备42011102001440号"
        } 
    },methods:{

    } 
}
</script>
<style lang="less">
  @import url('./css_less/all_filter.less');
    #foot{
      overflow:hidden;
      position:fixed;
      bottom: 0%;
      left:0px;
      height:24px;
      width:@width_body;
      text-align: center;
      background-color:#373737;
      z-index:999;
      .foot_p{
         padding-top:3px;
         color:white;
         font-size:13px;
      }
    }
</style>