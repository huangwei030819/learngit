<template>
  <div class="show"> 
      我是第三页面
  </div>
</template>

<script>
export default {
  name: 'show',
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
.show{
    border:1px solid goldenrod;
    width:100%;
    height:100%;
}
</style>