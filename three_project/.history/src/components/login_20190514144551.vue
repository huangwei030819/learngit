<template>
  <div class="login">
       <div class="login_frame">
           <form class="form-horizontal form_x">
             <div class="form-group">
                 <label for="inputEmail3" class="col-sm-2 control-label">USERNAME</label>
                 <div class="col-sm-10" style="padding-right:10px;">
                     <input type="text" class="form-control" id="inputEmail3" placeholder="请输入用户名" style="padding-right:10px;">
                 </div>
             </div>
             <div class="form-group">
                  <label for="inputEmail3" class="col-sm-2 control-label">PASSWORD</label>
                 <div class="col-sm-10">
                     <input type="text" class="form-control" id="inputEmail3" placeholder="请输入密码">
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
     .form_x{
       margin-top:50px;
       padding-left:5px;
     }
  }
}
</style>