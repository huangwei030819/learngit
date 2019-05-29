<template>
  <div class="left">

  </div>
</template>

<script>
export default {
  name: 'footpage',
  data () {
    return {
      message:"@2018青山区民政局地名普查服务平台版权所有  鄂ICP备16017378号-1  增值电信业务经营许可证编号：B1-20171995鄂ICP备16017378号鄂公网安备42011102001440号"
    }
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.left{
   position:fixed;
   top:50px;
   left:0px;
   background-color:black;
   width:120px;
    //calc(~"96vh - 100px"); 
   height:calc(~"100% - 70px");
   text-align:center;
}
</style>