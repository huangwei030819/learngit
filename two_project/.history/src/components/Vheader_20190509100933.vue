<template>
   <div class="Header_body" style="height:60px;">
       <div class="header_one"></div>   
       <div class="header_center">
           <p class="title_p">{{message}}</p>
           <div class="div_nav">
              <ul class="nav nav-pills">
               <li role="presentation" class="" style="margin-left:10px;padding-top:10px;" @click="page_nav(0)"><router-link to='/jump' class="lis">首页</router-link></li>
               <li role="presentation" style="margin-left:10px;padding-top:10px;"  @click="page_nav(1)"><router-link to='/test' class="lis">周边信息</router-link></li>
               <li role="presentation" style="margin-left:10px;padding-top:10px;"  @click="page_nav(2)"><router-link to='/map_data' class="lis">政策解读</router-link></li>
               <li role="presentation" class="" style="margin-left:10px;padding-top:10px;"><a href="javascript:;" class="li">经济合作</a></li>
               <li role="presentation" class="" style="margin-left:10px;padding-top:10px;"><a href="javascript:;" class="li">交流文化</a></li>
               <li role="presentation" class="" style="margin-left:10px;padding-top:10px;"><a href="javascript:;" class="li">管理中心</a></li>
               <li role="presentation" class="" style="margin-left:10px;padding-top:10px;"><a href="javascript:;" class="li">交通文明</a></li>
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
                       <input type="type" class="form-control" id="exampleInputEmai2" placeholder="邮箱或者手机号">
                    </div>
                    <div class="border_modal">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="密码">
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
             <button type="button" class="btn btn-primary" style="width:60%;">登录</button>
             <button type="button" class="btn btn-default" style="width:33%;">新用户注册</button>
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
            <input type="text" class="form-control" id="exampleInputEmail3" placeholder="留言标题" style="width:90%;margin-left:20px;">
            <textarea class="form-control" rows="3" style="overflow:hidden;width:90%;margin-left:20px;" placeholder="详细信息"></textarea>
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
           <button type="button" class="btn btn-primary">保存</button>
         </div>
       </div><!-- /.modal-content -->
     </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
   </div>
</template>
<script>
export default {
  name: 'Vheader',
  data () {
    return {
      message:'青山区民政局地名普查云服务平台'
    }
  },
  methods:{
  },
  mounted(){
     $(".lis").eq(0).addClass("click_a");
      $('#myModal').on('shown.bs.modal', function () {
           $('#myInput').focus()
      });
      $('#myModaltwo').on('shown.bs.modal', function () {
           $('#myInput').focus()
      });
  },
  methods:{
    openiframe(){

    },
    page_nav(number){
         $("a.li").removeClass('click_a');
         $("a.click_a").removeClass('click_a');
         $(".li").eq(number).addClass("click_a");
         //siblings().removeClass('click_a');
    }
  },
  watch:{
    //$route.path
    '$route':function(to,from){//newVal当前路由  oldVal上一个路由
      //this.loadPageData(to.query.id);
      this.filetitle = this.$route.query.filetitle;
      console.log(to);
      console.log(from);
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
          //  border:1px solid red;
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