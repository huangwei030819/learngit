<template>
  <div class="main">
     <v-header></v-header>
     <v-left>我是主页面 you know?</v-left>
     <v-right></v-right>
     <v-foot></v-foot>
  </div>
</template>

<script>
// const Header = reslove =>require(['./header'],resolve);
// const Foot = resolove =>require(['./foot'],resolve);
// const Left = resolve =>require(['./left'],resolve);
import Headerpage from './header'
import Footpage from './foot'
import Leftpage from './left'
import rightpage from './right'
export default {
  name: 'mainpage',
  data () {
    return {

    }
  },
  mounted(){

  },
  components:{
      "v-header":Headerpage,
      "v-foot":Footpage,
      "v-left":Leftpage,
      "v-right":rightpage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import url("../css_less/body_less.less");
.main{
  width:@body_width;
  height:@body_height;
  border:1px solid red;
}
</style>