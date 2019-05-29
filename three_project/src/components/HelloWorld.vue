<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
     <div class="btn-group" role="group">  
      <button type="button" class="btn btn-primary">Left</button>  
      <button type="button" class="btn btn-default">Middle</button>  
      <button type="button" class="btn btn-default">Right</button> 
      <a class="btn btn-default" href="#" role="button">Link</a>
      <button class="btn btn-default" type="submit">Button</button>
      <input class="btn btn-default" type="button" value="Input">
      <input class="btn btn-default" type="submit" value="Submit"> 
    </div> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    $(function(){
         console.log(1);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
