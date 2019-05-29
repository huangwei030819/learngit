<template>
  <div class="right"> 
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'rightpage',
  data () {
    return {

    }
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.right{
   position:fixed;
   top:50px;
   left:120px;
// background-color:hotpink;
   border:1px solid red;
   width:calc(~"100% - 120px");
   height:calc(~"100% - 70px");
}
</style>