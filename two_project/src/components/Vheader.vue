<template>
   <div class="Header_body" style="height:60px;">
       <div class="header_one"></div>   
       <div class="header_center">
           <p class="title_p">{{message}}</p>
           <div class="div_nav">
              <ul class="nav nav-pills" id="nav_list">
                <li role="presentation" style="margin-left:10px;padding-top:10px;" @click="page_nav(0)"><router-link to='/jump' class="lis">首页</router-link></li>
                <!-- <li role="presentation" style="margin-left:10px;padding-top:10px;"  @click="page_nav(1)"><router-link to='/test' class="lis">周边信息</router-link></li>
                <li role="presentation" style="margin-left:10px;padding-top:10px;"  @click="page_nav(2)"><router-link to='/map_data' class="lis">政策解读</router-link></li>
                <li role="presentation" class="" style="margin-left:10px;padding-top:10px;"><a href="javascript:;" class="li">经济合作</a></li>
                <li role="presentation" class="" style="margin-left:10px;padding-top:10px;"><a href="javascript:;" class="li">交流文化</a></li>
                <li role="presentation" class="" style="margin-left:10px;padding-top:10px;"><a href="javascript:;" class="li">管理中心</a></li>
                <li role="presentation" class="" style="margin-left:10px;padding-top:10px;"><a href="javascript:;" class="li">交通文明</a></li> -->
             </ul>
           </div>
       </div>
       <div class="haeder_right">
           <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModal" style="margin-top:15px;margin-left:0px;">
                登录/注册
           </button>
           <span class="header_Vertical">&nbsp;|&nbsp;</span>
           <span class="header_help"  data-toggle="modal" data-target="#myModaltwo">留言</span>
       </div>
       
        <!-- <el-button type="success">成功色</el-button> -->
        <!-- 模态框one --> 
      <div class="modal fade model_div" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="height:27px;"><span aria-hidden="true" style="font-size:18px;">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">账号登录</h4>
             </div>
           <div class="modal-body">
              <form class="form-horizontal">
                    <div class="border_modal">
                       <label for="exampleInputEmail1">Username</label>
                       <input type="type" class="form-control" id="myexampleInputEmai2" placeholder="邮箱或者手机号" v-model="user_code">
                    </div>
                    <div class="border_modal">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="密码" v-model="password_code">
                     </div>
                <div class="form-group" style="text-align:center;margin-left:-120px;">
                    <div class="col-sm-offset-2 col-sm-10">
                       <div class="checkbox">
                              <label>
                                  <input type="checkbox"> 记住我
                              </label>
                       </div>
                   </div>
                </div>
              </form>
           </div>
           <div class="modal-footer" style="text-align:center;">
             <button type="button" class="btn btn-primary" style="width:60%;" @click="admin_login">登录</button>
             <!-- <button type="button" class="btn btn-default" style="width:33%;">新用户注册</button> -->
          </div>
        </div>
      </div>
    </div>
    <!-- 模态框two -->
    <div class="modal fade" tabindex="-1" role="dialog"  id="myModaltwo" style="margin-top:200px;">
      <div class="modal-dialog" role="document">
       <div class="modal-content">
         <div class="modal-header">
           <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" style="font-size:18px;">&times;</span></button>
           <h4 class="modal-title">留言板</h4>
         </div>
         <div class="modal-body">
            <input type="text" class="form-control" id="myexampleInputEmail1" placeholder="留言标题" style="width:90%;margin-left:20px;margin-top:5px;">
            <textarea class="form-control" rows="3" id="myexampleInputEmail2" style="overflow:hidden;width:90%;margin-left:20px;margin-top:5px;" placeholder="详细信息"></textarea>
            <input type="text" class="form-control" id="myexampleInputEmail3" placeholder="请留下手机号码 方便联系" style="width:90%;margin-left:20px;margin-top:5px;" >
            <input type="email" class="form-control" id="myexampleInputEmail4" placeholder="请留邮箱地址 方便联系" style="width:90%;margin-left:20px;margin-top:5px;">
         </div>
         <div class="modal-footer">
           <p style="color:red">{{this.warning}}</p>
           <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
           <button type="button" class="btn btn-primary" id="checkbtn" @click="checkout_string">保存</button>
         </div>
       </div><!-- /.modal-content -->
     </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
   </div>
</template>
<script>
import bus from './js/vurcomponents.js'
export default {
  name: 'Vheader',
  data () {
    return {
      message:'青山区民政局地名普查云服务平台',
      info:[],
      warning:"",
      user_code:"",
      password_code:""
    }
  },
  mounted(){
     this.menu_require();
      $(".lis").eq(0).addClass("click_a");
      $('#myModal').on('shown.bs.modal', function () {
           $('#myInput').focus()
      });
      $('#myModaltwo').on('shown.bs.modal', function () {
           $('#myInput').focus()
      });
  },
  methods:{
    menu_require(){
       this.$axios({
         methods:"get",
         url:"http://519193.ichengyun.net/HomePage/GetTypeList",
       }).
       then((response)=>{
           this.info = response.data.data;
           this.addnav_list();   
       })
    },
    addnav_list(){
        if(this.info){
           let elementhtml = "";
           for(let i=0;i<this.info.length;i++){
               //console.log(this.info[1].typename);
               if(i ==0 ){
                  elementhtml +="<li role='presentation' style='margin-left:10px;padding-top:10px;'  @click='page_nav(1)'><a href='#/test' class='lis router-link-exact-active router-link-active'> "+ this.info[i].typename +"</a></li>";
              // }else if(i==1){
                  //elementhtml="<li role='presentation' style='margin-left:10px;padding-top:10px;'  @click='page_nav(1)'><router-link to='/test' class='lis'>"+ this.info[i].typename +"</router-link></li>"
               }else{
                  elementhtml +="<li role='presentation' style='margin-left:10px;padding-top:10px;'><a href='javascript:;' class='li'>"+ this.info[i].typename +"</a></li>";
               }
           }
           $("#nav_list").append(elementhtml);
        }
    },
    checkout_string(){
      
        if(!$("#myexampleInputEmail1").val()){
              this.warning="请填写标题!!!";
              this.openiframe();
        }else if(!$("#myexampleInputEmail2").val()){
              this.warning="请填写详细信息!!!";
              this.openiframe();
        }else if(!$("#myexampleInputEmail3").val() && !$("#myexampleInputEmail4").val()){
              this.warning="请留下手机号码或者邮箱以便联系!!!";
              this.openiframe();
        }else if($("#myexampleInputEmail3").val()){
               let phone = $("#myexampleInputEmail3").val();
               var patrn = /^(13[0-9]{9})|(14[0-9])|(18[0-9])|(15[0-9][0-9]{8})$/;
               if (!patrn.test(phone)) {
                     this.warning="您留下的手机号无效!!!";
                     this.openiframe(); 
               }else{
                   this.repsonse_string();
               }
        }else if(!$("#myexapleInputEmail4").val()){
               let email = $("#myexampleInputEmail4").val();
               var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
               if (!reg.test(email)) {
                     this.warning="您留下的邮箱号无效!!!";
                     this.openiframe(); 
               }else{
                   this.repsonse_string();
               }         
        }else{
             this.repsonse_string();
        }
        
    },
    openiframe(){
          $("#checkbtn").addClass("btn-danger");
          $("#checkbtn").removeClass("btn-primary");
    },
    repsonse_string(){
         this.warning="";
         $("#checkbtn").addClass("btn-primary");
         $("#checkbtn").removeClass("btn-danger");
         $("#checkbtn").val("成功");
         $("#myModaltwo").modal('hide');
         let title_string = $("#myexampleInputEmail1").val();
         let content_string = $("#myexampleInputEmail2").val();
         let phone_string,email_string;
         if(!$("#myexampleInputEmail3").val()){
               phone_string = "";
         }else{ 
               phone_string = $("#myexampleInputEmail3").val();
         }
         if(!$("#myexampleInputEmail4").val()){
               email_string = "";
         }else{
               email_string = $("#myexampleInputEmail4").val();
         }
         let post_data={
             MessageTitle:title_string,
             MessageContent:content_string,
             Tel:phone_string,
             Email:email_string,
         }
         this.$axios.post("http://519193.ichengyun.net/HomePage/SaveMessage",post_data).then((res) => console.log(res));
    },
    page_nav(number){
          $("a.click_a").removeClass('click_a');
          $(".lis").eq(number).addClass("click_a");
         //$("a.li").removeClass('click_a');
         //$("a.click_a").removeClass('click_a');
         //$(".li").eq(number).addClass("click_a");
         //siblings().removeClass('click_a');
    },
    admin_login(){
        if(this.user_code === "admin" && this.password_code === "admin@123"){
            let postdata={
              usercode:this.user_code,
              password:this.password_code
            }
            this.$axios.post("http://519193.ichengyun.net/HomePage/CheckLogin",postdata).then((res) => console.log(res));
        } 
    }
  },
  watch:{
    //$route.path
    '$route':function(to,from){//newVal当前路由  oldVal上一个路由
      //this.loadPageData(to.query.id);
      this.filetitle = this.$route.query.filetitle;
     // console.log(to);
      //console.log(from);
    }
  }
}
</script>
<style lang="less">
@import url('./css_less/all_filter.less');
@width:100%;
@height:60px;
@div_height:60px;
//@border_all:1px solid red;

   .Header_body{
      width:@width_body;
      height:@height;
      background-color:black;
      .header_one{
        position:relative;
        left:0%;
        height:@div_height;
        width:60px;
        margin-left:3vw;
        background:url("./images/logo.png") no-repeat 100%;
        /*background-repeat: no-repeat;*/
        background-size:100% 100%;
        display:inline-block;
        margin-right:10px;
         @media screen and(min-width:1280px) and (max-width:1500px){
                   margin-left:15px;
         }
         @media screen and(min-width:1000px) and (max-width:1280px){
                   margin-left:5px;
         }
      }
      .header_center{
        text-align: left;
        margin-left:50px;
        display:inline-block;
        height:@div_height;
        width:80vw;
        margin:0px;
        height:80px;
        overflow:hidden;
        clear:both;
        vertical-align:top; /*行内块元素的对齐方式*/
        @media screen and(min-width:1580px) and (max-width:1890px){
                   width:78vw;
        }
        @media screen and(min-width:1300px) and (max-width:1580px){
                   width:76vw;
                   margin-left:0px;
        }
        @media screen and(min-width:1150px) and (max-width:1300px){
                   width:75vw;
                   margin-left:0px;
        }
        @media screen and(min-width:500px) and (max-width:1150px){
                   width:58vw;
        }
        .title_p{
          position: relative;
          top:30%;
          font-size:18px;
          font-family: "Microsoft YaHei";
          text-align: left;
          color:white;
          display:inline-block;
          @media screen and(min-width:1000px) and (max-width:1580px){
                   top:40%;
                   font-size:16px;
          }
        }
        .div_nav{
           float:right;
           width:690px;
           height:80px;
           //border:1px solid red;
           //display:inline-block;
           display:block;
           ul{
             li{
              a{
                color:white;
                &:hover{
                   background-color:orange;
               }
               
              }
             }
           }
        }
        
      }
      .haeder_right{
         position:flexd;
         right:0%;
         padding-left:4rem;
         width:200px;
         height:100%;
         display:inline-block;
         vertical-align:top;
         text-align:right;
         color:white;
          @media screen and(min-width:1150px) and (max-width:1500px){
                    margin-right:0px;
                    margin-left:0px;
          }
        //  border:@border_all;
         .header_Vertical{
           color:white;
           height:30px;
           position: relative;
           top:10px;
           width:5px;
           
         }
         .header_help{
           color:white;
           height:30px;
           position: relative;
           top:16%;
           &:hover{
             color:orange;
           }
           .help_a{
             color:white;
             text-decoration: none;
             &:hover{
               color:orange;
             }
             &:active{
               color:orange
             }
           }
         }
         .header_Collection{
            color:white;
            position:relative;
            top:15%;
            height:30px;
            a{
             color:white;
             text-decoration:none;
              &:hover{
               color:orange;
             }
           }
         }
      }
      .border_modal{
        //border:1px solid red;
         width:500px;
         margin-left:20px;
      }
      .model_div{
        margin-left:60%;
        margin-top:100px;
      }
      a{
         text-decoration: none;
      }
      .click_a{
        background-color:#337ab7;
         text-decoration: none;
      }
      a:hover{
        background-color:#337ab7;
         text-decoration: none;
      }
      a:visited{
         text-decoration: none;
         background-color:#337ab7;
      }
      a:active{
         text-decoration: none;
         background-color:#337ab7;
      }
      .blue_route{
        background-color:#337ab7;
      }
      .widte_route{
        background-color:transparent;
      }
 
   }
</style>