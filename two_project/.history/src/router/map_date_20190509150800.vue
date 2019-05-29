<template>
   <div class="map_data">
       <div class="screah">
           <div class="layui-side layui-bg-black" style="margin-top:80px;height:84.5vh;overflow:hidden;">
               <div class="layui-side-scroll layui-bg-cyan" style="text-align:center;">
                   <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
                   <ul class="layui-nav layui-nav-tree"  lay-filter="test" lay-shrink="all">
                           <li class="layui-nav-item layui-nav-itemed">
                                   <a href="javascript:;"><i class="icon-desktop"></i>&nbsp;&nbsp;文化&nbsp;&nbsp;(120)</a>
                                   <dl class="layui-nav-child li-list"  lay-shrink="all">
                                          <dd><a href="javascript:;"><i class="icon-list-alt"></i>&nbsp;&nbsp;名族文化&nbsp;&nbsp;&nbsp;&nbsp;(80)</a>
                                               <dl class="layui-nav-child li-list" >
                                                    <dd><a href="javascript:;">&nbsp;<i class="icon-lightbulb"></i>&nbsp;&nbsp;名族风情(20)</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-sitemap"></i>&nbsp;&nbsp;名族工艺(20)</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-magic"></i>&nbsp;&nbsp;地方人文(20)</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-certificate"></i>&nbsp;&nbsp;地名风俗(20)</a></dd>
                                                    </dl>
                                          </dd>
                                           <dd><a href="javascript:;"><i class="icon-list-alt"></i>&nbsp;&nbsp;名胜古迹&nbsp;&nbsp;&nbsp;&nbsp;(40)</a>
                                               <dl class="layui-nav-child li-list" >
                                                    <dd><a href="javascript:;">&nbsp;<i class="icon-lightbulb"></i>&nbsp;&nbsp;地方景点(20)</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-sitemap"></i>&nbsp;&nbsp;地方古迹(20)</a></dd>
                                                    </dl>
                                          </dd>
                                  </dl>
                            </li>
                             <li class="layui-nav-item layui-nav-itemed">
                                   <a href="javascript:;"><i class="icon-desktop"></i>&nbsp;&nbsp;旅游&nbsp;&nbsp;(50)</a>
                                    <dl class="layui-nav-child li-list"  lay-shrink="all">
                                          <dd><a href="javascript:;"><i class="icon-list-alt"></i>&nbsp;&nbsp;名胜古迹&nbsp;&nbsp;&nbsp;&nbsp;(10)</a>
                                               <dl class="layui-nav-child li-list" >
                                                    <dd><a href="javascript:;">&nbsp;<i class="icon-lightbulb"></i>&nbsp;&nbsp;万里长城</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-sitemap"></i>&nbsp;&nbsp;桂林山水</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-magic"></i>&nbsp;&nbsp;北京故宫</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-certificate"></i>&nbsp;&nbsp;杭州西湖</a></dd>
                                                    </dl>
                                          </dd>
                                           <dd><a href="javascript:;"><i class="icon-list-alt"></i>&nbsp;&nbsp;旅游胜地&nbsp;&nbsp;&nbsp;&nbsp;(40)</a>
                                               <dl class="layui-nav-child li-list" >
                                                    <dd><a href="javascript:;">&nbsp;<i class="icon-lightbulb"></i>&nbsp;&nbsp;香格里拉</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-sitemap"></i>&nbsp;&nbsp;东方明珠</a></dd>
                                                    </dl>
                                          </dd>
                                  </dl>
                            </li>
                             <li class="layui-nav-item layui-nav-itemed" >
                                   <a href="javascript:;"><i class="icon-desktop"></i>&nbsp;&nbsp;医疗&nbsp;&nbsp;(10)</a>
                                   <dl class="layui-nav-child li-list"  lay-shrink="all" >
                                          <dd><a href="javascript:;"><i class="icon-list-alt"></i>&nbsp;&nbsp;医疗&nbsp;&nbsp;&nbsp;&nbsp;(10)</a>
                                               <dl class="layui-nav-child li-list" >
                                                    <dd><a href="javascript:;">&nbsp;<i class="icon-lightbulb"></i>&nbsp;&nbsp;武汉市第一医院</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-sitemap"></i>&nbsp;&nbsp;武汉大学中南医院</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-magic"></i>&nbsp;&nbsp;武汉大学人民医院</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-certificate"></i>&nbsp;&nbsp;武汉市第三医院</a></dd>
                                                    </dl>
                                          </dd>
                                        
                                  </dl>
                            </li>
                             <li class="layui-nav-item layui-nav-itemed">
                                   <a href="javascript:;"><i class="icon-desktop"></i>&nbsp;&nbsp;教育&nbsp;&nbsp;(20)</a>
                                   <dl class="layui-nav-child li-list"  lay-shrink="all" >
                                          <dd><a href="javascript:;"><i class="icon-list-alt"></i>&nbsp;&nbsp;大学&nbsp;&nbsp;&nbsp;&nbsp;(10)</a>
                                               <dl class="layui-nav-child li-list" >
                                                    <dd><a href="javascript:;">&nbsp;<i class="icon-lightbulb"></i>&nbsp;&nbsp;武汉大学</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-sitemap"></i>&nbsp;&nbsp;华中师范大学</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-magic"></i>&nbsp;&nbsp;武汉体育学院</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-certificate"></i>&nbsp;&nbsp;湖北地质大学</a></dd>
                                                    </dl>
                                                     <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-certificate"></i>&nbsp;&nbsp;武汉地质大学</a></dd>
                                                    </dl>
                                                     <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-certificate"></i>&nbsp;&nbsp;武汉音乐学院</a></dd>
                                                    </dl>
                                          </dd>
                                           <dd><a href="javascript:;"><i class="icon-list-alt"></i>&nbsp;&nbsp;中学&nbsp;&nbsp;&nbsp;&nbsp;(5)</a>
                                               <dl class="layui-nav-child li-list" >
                                                    <dd><a href="javascript:;">&nbsp;<i class="icon-lightbulb"></i>&nbsp;&nbsp;马房山中学</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-sitemap"></i>&nbsp;&nbsp;黄陂七中</a></dd>
                                                    </dl>
                                          </dd>
                                           <dd><a href="javascript:;"><i class="icon-list-alt"></i>&nbsp;&nbsp;小学&nbsp;&nbsp;&nbsp;&nbsp;(5)</a>
                                               <dl class="layui-nav-child li-list" >
                                                    <dd><a href="javascript:;">&nbsp;<i class="icon-lightbulb"></i>&nbsp;&nbsp;大兴路小学</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-sitemap"></i>&nbsp;&nbsp;红领巾小学</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-sitemap"></i>&nbsp;&nbsp;黄陂路小学</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-sitemap"></i>&nbsp;&nbsp;育才小学</a></dd>
                                                    </dl>
                                          </dd>
                                           <dd><a href="javascript:;"><i class="icon-list-alt"></i>&nbsp;&nbsp;幼儿园&nbsp;&nbsp;&nbsp;&nbsp;(5)</a>
                                               <dl class="layui-nav-child li-list" >
                                                    <dd><a href="javascript:;">&nbsp;<i class="icon-lightbulb"></i>&nbsp;&nbsp;大兴路幼儿园</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="icon-sitemap"></i>&nbsp;&nbsp;西马幼儿园</a></dd>
                                                    </dl>
                                          </dd>
                                  </dl>
                            </li>
                   </ul>
               </div>
          </div>
       </div>
       <div>
       <div class="row position_div">
          <div class="col-lg-12 border_r">
             <div class="col-lg-2 col-lg-2 div_hidden">
                 <p class="title_p" ref="province">省份</p>
                 <p class="title_p2">湖北</p>
             </div>
             <div class="col-lg-1 border_r"></div>
             <div class="col-lg-2 div_hidden">
                  <p class="title_p">城市</p>
                 <p class="title_p2">武汉</p>
             </div>
             <div class="col-lg-1 border_r"></div>
             <div class="col-lg-2 div_hidden">
                  <p class="title_p">区域</p>
                 <p class="title_p2">江汉区</p>
             </div>
             <div class="col-lg-1 border_r"></div>
             <div class="col-lg-3 div_hidden">
                  <p class="title_p">位置</p>
                 <p class="title_p2x">经纬度114.32106,30.45591</p>
             </div>
        
           </div>       
       </div>
       
       <div class="position_tool">
           <!-- <div class="border_x" id="map">
             <div class="query_div div_hidden query_frame">
                  <div class="position_query">
                     <div class="input-group">
					       <input type="text" class="form-control" id="pickerInput" placeholder="请输入想搜索的地名">
					       <span class="input-group-btn">
						   <button class="btn btn-default" type="button" @click="placeSearch1" disabled="disabled">
							 搜索
						   </button>
					       </span>
				    </div>
                 </div>
           </div>
       </div> -->
    </div>
     <div class="modal fade" id="two" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="margin-top:5%;z-index:1080;">
        <div class="modal-dialog" role="document">
          <div class="modal-content" style="width:360px;">
            <div class="modal-header" style="overflow:hidden;height:40px;padding-top:10px;">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="height:27px;"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel" style="text-align:center;">道路纠错</h4>
             </div>
           <div class="modal-body" style="height:450px;padding-bottom:5px;">
               <form class="form-horizontal">
                 <div class="form-group border_modal">
                     <img src="../components/images/u=3327829123,384043783fm=26gp=0.jpg" width="90%" height="150px" style="margin-left:20px"/>
                     <input type="text" class="form-control" id="exampleInputEmail1" style="width:90%;margin-left:20px;" disabled="disabled">
                 </div>
                 <div class="form-group border_modal" id="div_inpuone">
                       <label for="exampleInputEmail1" style="margin-left:20px;">修改为</label>
                       <input type="text" class="form-control" id="exampleInputEmail2" placeholder="请填入修改的名称" style="width:90%;margin-left:20px;" v-model="sumone">
                  </div>
                  <div class="form-group border_modal" id="div_inputwo">
                        <textarea class="form-control" rows="3" style="overflow:hidden;width:90%;margin-left:20px;" placeholder="请输入你修改的依据 以便更好的处理"  v-model="sumtwo">
                        </textarea>
                  </div>
                  <div class="form-group border_modal" id="div_inputthree">
                     <div class="col-sm-6" style="height:40px;">
                       <input type="text" class="form-control" style="width:100%;margin-left:5px;" v-model="sumthree">
                     </div>
                     <div class="col-sm-6" style="height:40px;">
                       <img src="../components/images/u=2859753920,13388660fm=26gp=0.jpg" width="90%" height="34px"/>
                      </div>
                  </div>
               </form>
           </div>
           <div class="modal-footer" style="text-align:center;padding-top:10px;padding-bottom:10px;">
             <button type="button" class="btn btn-primary" style="width:60%;" id="modify" @click="modify_road">申请修改</button>
          </div>
        </div>
      </div>
    </div>      
           
       </div>
    
      <!-- <div class="jump">
           <button style="color:#337ab7">留言我们</button>
       </div> -->
   </div>
</template>
<script>
import Maps from '../components/js/maps.js';
import Jump from '../components/jump.vue';
// const Maps = resolve => require(['../components/js/maps'],resolve);
// const Jump = resolve => require(['../components/jump.vue'], resolve);
//const Proess = resolve => require(['../components/js/proess.js'],resolve);
import  Proess from '../components/js/proess'; 
//import AMap from 'AMap';
//import AMapUI from 'AMapUI';
export default{
    name:"map_date",
    data(){
        return{
          positioncity:"武汉",
          sumone:"",
          sumtwo:"",
          sumthree:""
        } 
    },
    components:{
        "v-jump":Jump
    },
     mounted(){
         this.pageinit();
         console.log(Proess);
         Proess.transfer();
         this.placeSearch1();
         //Maps.initmap(); 
        //Maps.maptestinit();
        //this.layui_init();
        //$('#two').on('shown.bs.modal', function () {
           //$('#myInput').focus()
      //});
    }, 
    methods:{
       pageinit(){
           this.$refs.province.val="天堂";
       }, 
       modify_road(){
          if(this.sumone == ""){
              $("#modify").text("请输入修改道路的名称");
              $("#modify").addClass("btn-danger");
              $("#modify").removeClass("btn-primary");
              $('#div_inpuone').addClass("has-error");
          }else if(this.sumtwo == ""){
              $("#modify").text("请输入修改依据");
              $("#modify").addClass("btn-danger");
              $("#modify").removeClass("btn-primary");
              $('#div_inputwo').addClass("has-error");
          }else if(this.sumthree == ""){
              $("#modify").text("请输入验证码");
              $("#modify").addClass("btn-danger");
              $("#modify").removeClass("btn-primary");
              $('#div_inputhree').addClass("has-error");
          }else{
              $("#modify").addClass("btn-primary");
              $("#modify").removeClass("btn-danger");
              $("#modify").text("已发送申请....");
          }
       },
       //搜索框架绑定
       placeSearch1(){
          console.log(1);
          var hws = Proess.sum();
          console.log(hws);
       },
       layui_init(){
            layui.use("layer",function() {
        var layer = layui.layer;  //layer初始化
         //一些事件监听

    });
    function alTlewindow() {
           layer.open({
                        type: 2,
                        skin: 'layui-layer-lan', //样式类名
                        title: '消息告警',
                        shadeClose: true,
                        shade: false,
                        maxmin: false, //开启最大化最小化按钮
                        area: ['1070px', '500px'],
                        content: 'dataGird.html'
            });
    }
    layui.use('element', function(){
           var element = layui.element;
  
           //一些事件监听
           element.on('tab(demo)', function(data){

           });
    });
    var main_func={
           x:1,
           openiframe(jump_string){
               $('iframe').attr("src",jump_string);
          }
    }
       }
    }
  }
</script>
<style lang="less">
@import url('../components/css_less/all_filter.less');
   @border_svn:1px solid blue;
    .map_data{
      height:100%;
      width: 100%;
      overflow:hidden;
      //background-color: rgb(55, 55, 55);
      background:url("../components/images/bag_4.png") no-repeat;
      background-size:100% 100%;
      clear:both;
      .screah{
        width:210px;
        height:84.5vh;
        // border:1px solid red;
        float:left;
        
      }
      div{
        overflow:hidden;
      .position_div{
         margin-top:20px;
         
        .border_r{
            height:85px;
            text-align: center;
            .title_p{
               text-align:left;
               color:black;
               padding-top:5px;
               font-size:20px;
               height:40px;
               color:#EEE;
               //background-color:rgba(200,200,200,0.4);
                @media screen and(min-width:1500px) and (max-width:1890px){
                   font-size:20px;
                   height:40px;
                }
            }
            .title_p2{
               text-align: center;
               color:black;
               padding-top:5px;
               font-size:18px;
               height:45px;
               padding-bottom:8px;
               color:#EEE;
                 @media screen and(min-width:1500px) and (max-width:1700px){
                   font-size:20px;
                   height:40px;
                 }
               //background-color:rgba(200,200,200,0.4);
            }
            .title_p2x{
               text-align: center;
               color:black;
               padding-top:5px;
               font-size:18px;
               height:45px;
               padding-bottom:8px;
               color:#EEE;
                 @media screen and(min-width:1100px) and (max-width:1700px){
                   font-size:14px;
                   height:40px;
                 }
            }
         }
      }
      .position_tool{
          margin-top:1vh;
          height:73vh;
          width:99%;
          display:inline-block;
           @media screen and(min-width:1100px) and (max-width:1700px){
                  height:73vh;
                  margin-top:0.5vh;
           }
          .border_x{
              position: relative;
              left:0.8%;
              //padding-left:20px;
              height:73vh;
              //width:87.5%;
           }
            .query_div{
                position: fixed;
                left:215px;
                width:316px;
                height:80px;
                z-index:999;
                .position_query{
                    margin-top:20px;
                    margin-left:5px;
                    opacity: 0.8;
                }
                .feature{
                    position: relative;
                    height:80px;
                    margin-top:40px;
                    left:20px;
                    width:275px;
                    border:@border_svn;
                }
            }

      }
    }
        .jump{
            position: fixed;
            left:98%;
            top:200px;
            z-index:1999;
            height:40px;
        }
        .div_hidden{
             //background: #EEE;
             background-color:rgba(200,200,200,0.2);
             padding-right:10px;
          }
          .query_frame{
              margin-left:80px;
          }
          a:visited {
              text-decoration: none; 
          }
          a:link{
             text-decoration: none; 
          }
          a:active{
            text-decoration: none; 
          }
          .layui-nav .layui-nav-item a:hover{
              background-color:#FF5722; 
              text-decoration: none; 
        } 
        #map{
            overflow:auto;
        }

    }
    
</style>