<template>
  <div class="login">
       <div class="login_frame">
           <form class="form-horizontal form_x">
             <div class="form-group">
                  <label class="control-label user_font">USERNAME</label>
                  <div class="">
                     <input type="text" class="form-control user_input" id="inputPassword" placeholder="USERNAME">
                  </div>
             </div>
             <div class="form-group">
          
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
       .user_font{
           width:20px;
           display:inline-block;
           .user_input{
               display:inline-block;
           }
       }
     }
  }
}
</style>