<template>
  <div class="login">
       <div class="login_frame">
           <form class="form-horizontal">
             <div class="form-group">
               <div class="col-lg-10">
                  <span>USERNAME</span><input type="email" class="form-control" id="inputEmail3" placeholder="Email">
               </div>
             </div>
             <div class="form-group">
               <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
               <div class="col-sm-10">
                 <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
               </div>
             </div>
             <div class="form-group">
               <div class="col-sm-offset-2 col-sm-10">
                 <div class="checkbox">
                   <label>
                     <input type="checkbox"> Remember me
                   </label>
                 </div>
               </div>
             </div>
             <div class="form-group">
               <div class="col-sm-offset-2 col-sm-10">
                 <button type="submit" class="btn btn-default">Sign in</button>
               </div>
             </div>
            </form>
       </div>
  </div>
</template>

<script>

export default {
  name: 'Login', 
}
</script>

<style lang="less">
@import url('../css_less/body_less.less');
@border_test:1px solid red;
.login {
  position:fixed;
  top:1px;
  bottom:1px;
  height:@body_height;
  width:@body_width;
  border:@border_test;
  margin:auto;
  .login_frame{
     position: relative;
     top:20%;
     left:60%;
     border:2px solid black;
     height:300px;
     width:600px;
     text-align:left;
  }
}
</style>