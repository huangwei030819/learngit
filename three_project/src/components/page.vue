<template>
  <div class="page"> 
      我是第二页面
  </div>
</template>

<script>
export default {
  name: 'page',
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
@import url("../css_less/body_less.less");
.page{
    border:1px solid goldenrod;
    width:100%;
    height:100%;
}
</style>