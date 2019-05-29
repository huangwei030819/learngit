<template>
  <div class="header">
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
export default {
  name: 'hearder',
  data () {
    return {
      message: '欢迎来到武汉家园网站'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header{
    position:fixed;
    top:0px;
    left:0px;
    width:100%;
    height:50px;
    background-color:antiquewhite;
}
</style>
