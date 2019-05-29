<template>
   <div class="jump"> <!-- 大兴路小学  30.568133 114.289563-->
       <div class="row position_div">
          <div class="col-lg-12 border_r">
            <div class="col-lg-1" style="width:120px;padding-left:0px;margin-left:-4px;"><button type="button" model-data="1" id="modelbtn" class="btn btn-info" style="height:32px;padding-top:5px;" @click="togglebtn">热点模式</button></div>
            <div class="col-lg-1 x_margin" style="margin-left:-20px;">
                <div class="title_p2">
                    <select id="province" class="select_div" @change="search($event)"></select>
                </div>
            </div>
            <div class="col-lg-1 x_margin">
                <div class="title_p2">
                    <select id="city" class="select_div"  @change="search($event)"><option>-请选择城市-</option></select>
                </div>
            </div>
            <div class="col-lg-1 x_margin">
                <div class="title_p2">
                    <select id="district" class="select_div"  @change="search($event)"><option>-请选择区域-</option></select>
                </div>
            </div>
            <div class="col-lg-1 x_margin">
                <div class="title_p2">
                    <select id="street" class="select_div"  @change="search($event)"><option>-请选择街道-</option></select>
                </div>
            </div>
            <div class="col-lg-4"></div>
            <div class="col-lg-2 query_btn">
                <div class="position_query">
                    <div class="input-group">
                        <input type="text" id="pickerInput" placeholder="搜索所在城市内地名" class="form-control">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button" disabled="disabled">
							                 搜索
						                </button>
                        </span>
                    </div>
                </div>
            </div>
          </div><!--第一行-->
      </div><!--row-->
        <!-- <div id="map" style="width:1000px;height:500px;"></div> -->
        <div id="map"></div>
        <div class="modal fade" id="two" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="margin-top:5%;z-index:1080;">
           <div class="modal-dialog" role="document">
              <div class="modal-content" style="width:360px;">
                <div class="modal-header" style="overflow:hidden;height:40px;padding-top:10px;">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="height:27px;"><span aria-hidden="true" style="font-size:18px;">&times;</span></button>
                  <h4 class="modal-title" id="myModalLabel" style="text-align:center;">道路纠错</h4>
                 </div>
               <div class="modal-body" style="height:410px;padding-bottom:5px;padding-top:5px;">
                   <form class="form-horizontal">
                     <div class="form-group border_modal">
                         <img src="../components/images/u=3327829123,384043783fm=26gp=0.jpg" width="90%" height="150px" style="margin-left:2px"/>
                         <input type="text" class="form-control" id="exampleInputEmail1" style="width:90%;margin-left:20px;" disabled="disabled">
                         <p class="info"><a href="javascript:;" @click="near_info">详情....</a></p>
                     </div>
                     <div class="form-group border_modal" id="div_inpuone">
                           <label for="exampleInputEmail1" style="margin-left:20px;">纠错信息</label>
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


       <!-- 模态框two 周边信息  示例-->
       <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" id="myModalthree" style="margin-top:20px;">
         <div class="modal-dialog modal-lg" role="document">
           <div class="modal-content" style="margin-left:150px;width:500px;height:490px;padding-top:10px;">
             <div>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="height:27px;margin-right:5px;">
                   <span aria-hidden="true" style="font-size:18px;">&times;</span>
               </button>
             </div>
                <p class="title_px">&nbsp;&nbsp;&nbsp;&nbsp;地理名称:首义路</p>
                <p class="small_word">资料更新时间:2019年4月22日</p>
                <br>
                <!-- <div class="blank_header"><button type="button" class="close" aria-label="Close" style="margin-right:10px;"><span aria-hidden="true">&times;</span></button></div> -->
                <!--轮播图-->
                <div id="myCarousel" class="carousel slide" style="height:180px;width:100%;">
                   <!-- 轮播（Carousel）指标 -->
                   <ol class="carousel-indicators" style="bottom:5px;">
                   	<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                   	<li data-target="#myCarousel" data-slide-to="1"></li>
                   	<li data-target="#myCarousel" data-slide-to="2"></li>
                   </ol>   
                   <!-- 轮播（Carousel）项目 -->
                   <div class="carousel-inner" style="height:180px;">
                   	<div class="item active">
                   		<img src="./images/首义路one.jpg" alt="First slide" width="100%" height="180px;">
                   	</div>
                   	<div class="item">
                   		<img src="./images/首义路two.jpg" alt="Second slide" width="100%" height="180px;">
                   	</div>
                   	<div class="item">
                   		<img src="./images/首义路three.jpg" alt="Third slide" width="100%" height="180px;">
                   	</div>
                   </div>
                   <!-- 轮播（Carousel）导航 -->
                   <a class="carousel-control" href="#myCarousel" role="button" data-slide="prev">
                      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true" style="color:white"></span>
                      <span class="sr-only">Previous</span>
                   </a>
                   
                   <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                   	<span class="glyphicon glyphicon-chevron-right" aria-hidden="true" style="color:white"></span>
                   	<span class="sr-only">Next</span>
                   </a>
                </div> 
                <div>
                <!-- Nav tabs -->
                 <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">基本资料</a></li>
                    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">历史沿革</a></li>
                    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">地理实体</a></li>
                    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">地名含义</a></li>
                 </ul>

                <!-- Tab panes -->
                 <div class="tab-content" style="padding-top:5px;padding-left:5px;padding-right:5px;text-align:left;height:150px;overflow-y:auto;">
                    <div role="tabpanel" class="tab-pane active" id="home">首义路街位于武汉市武昌区中部，辖区面积2.63平方公里，因闻名中外的辛亥革命武昌首义而得名。
                      具有光荣革命传统和“敢为天下先”精神的首义人，在改革开放的新形势下，与时俱进，创新争先，不断创造新的业绩，被授予“中国街道之星”、“楚天明星街道”荣誉称号。</div>
                    <div role="tabpanel" class="tab-pane" id="profile">辛亥革命武昌起义军政府旧址，大楼主体建筑为砖木结构两层红色楼房。1961年，被国务院列为全国文物重点
                                                                       保护单位。1981年，为纪念辛亥革命七十周年，辟为辛亥革命武昌起义纪念馆。</div>
                    <div role="tabpanel" class="tab-pane" id="messages">深厚的文化底蕴。首义路街是辛亥革命武昌起义发源地，现存有工程营、楚望台等8处辛亥革命遗迹，及首义
                    公园、首义广场等纪念场所多处。首义品牌、震惊中外，彪炳史册。丰富的区域资源。首义路街具有丰富的地域资源和良好的投资环境，中南财经政法大学、湖北教育学院、中船
                    701、719研究所、中国轻工业武汉设计院等著名院校和科研机构座落在辖区内；新宜大酒店、嘉叶宾馆、安华大厦、楚民大厦、惠苑大厦、中百仓储等大型星级宾馆、酒店、商场
                    、超市如同璀璨的明珠镶嵌在商业路段上；端庄秀美、具有现代气息的首义广场为武汉市著名的旅游景点。便利的交通条件。位于辖区内的武昌火车站与湖北省公路客运（集团）
                    宏基客运公司是武汉市主要的对外交通站点，每天发送的车辆贯穿东西南北，构成了武昌对外交流的主要窗口。</div>
                    <div role="tabpanel" class="tab-pane" id="settings">为了纪念辛亥革命在武昌打响第一枪，又叫武昌起义</div>
                 </div>
                </div> 

               <!--备用方案-->
                <!-- <div class="list-group" style="text-align:left;">
                   <a href="#" class="list-group-item">
                     <h4 class="list-group-item-heading">基本资料</h4>
                     <p class="list-group-item-text">...</p>
                   </a>
                </div>
                <div class="list-group div_top" style="text-align:left;">
                   <a href="#" class="list-group-item active">
                     <h4 class="list-group-item-heading">历史沿革</h4>
                     <p class="list-group-item-text">...</p>
                   </a>
                </div>
                <div class="list-group div_top" style="text-align:left;">
                   <a href="#" class="list-group-item">
                     <h4 class="list-group-item-heading">地理实体</h4>
                     <p class="list-group-item-text">...</p>
                   </a>
                </div>
                <div class="list-group div_top" style="text-align:left;">
                   <a href="#" class="list-group-item active">
                     <h4 class="list-group-item-heading">地名含义</h4>
                     <p class="list-group-item-text">...</p>
                   </a>
                </div> -->
                <div  class="btn_close">
                   <button @click="info_road" class="btn btn-primary" style="height:25px;padding-top:1px;width:100px;">返回上一页</button>
                   <button @click="close" class="btn btn-primary"  style="height:25px;width:50px;padding-top:1px;">关闭</button>
                </div>
           </div>
         </div>
       </div>
   </div>
</template>
<script>
import Maps from './js/maps.js';
import MapObjs from './js/test_class.js'
import AMap from 'AMap';
//const Jump = resolve => require(['../components/jump.vue'], resolve);
export default{
    name:"jump",
    data(){
        return{
          sumone:"",
          sumtwo:"",
          sumthree:"",
        } 
    }, 
    mounted(){
           $('#two').on('shown.bs.modal', function () {
               $('#myInput').focus()
           });
           $('#myTabs a').click(function (e) {
                e.preventDefault()
                $(this).tab('show')
           });
           $('#myTabs a[href="#profile"]').tab('show') // Select tab by name
           $('#myTabs a:first').tab('show') // Select first tab
           $('#myTabs a:last').tab('show') // Select last tab
           $('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)
           Maps.initmap();
    },
    methods:{
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
       },//行政区选择
       search(obj){
          Maps.search(obj);
       },
       togglebtn(){
          Maps.initmap();
       },
       near_info(){
           //console.log(1);
           $("#two").modal('hide');
           $("#myModalthree").modal('show');     
       },
       info_road(){
            $("#myModalthree").modal('hide');
            $("#two").modal('show');
       },
       close(){
             $("#myModalthree").modal('hide');
             $("#two").modal('hide');
       }    
    }
}
</script>
<style lang="less">
   @import url('./css_less/all_filter.less');
    .jump{
      overflow:hidden;
      width:91vw;
      height:91vh;
      text-align:center;
      background:url("images/bag_4.png") no-repeat;
      background-size:100% 100%;
      margin-left:165px;
      margin-bottom:-10px;
      .position_div{
        text-align: left;
        .border_r{
          margin-top:10px;
          height:40px;
          text-align:left;
          .x_margin{
            margin-left:5px;
             @media screen and(min-width:1600px) and (max-width:1700px){
               margin-left:15px;
             }
             @media screen and(min-width:1520px) and (max-width:1600px){
               margin-left:21px;
             }
             @media screen and(min-width:1400px) and (max-width:1520px){
               margin-left:30px;
             }
             @media screen and(min-width:1000px) and (max-width:1500px){
               margin-left:40px;
             }
            .title_p2{
                margin-top:3px;
                padding-right:0px;
                text-align:center;
                margin-left:0px;
                padding-top:2px;
                font-size:15px;
                height:30px;
                width:128px;
                color:#eee;
                background-color:rgba(199,199,199,0.3);
                .select_div{
                    width:110px;
                    height:22px;
                    margin-top:2px;
                    font-size:14px;
                    font-family:"Microsoft YaHei"; 
                }
            }
          }
          .query_btn{
            margin-left:38.1vw;
             @media screen and(min-width:1700px) and (max-width:1800px){
               margin-left:37vw;
             }
              @media screen and(min-width:1600px) and (max-width:1700px){
               margin-left:35.6vw;
             }
             @media screen and(min-width:1500px) and (max-width:1600px){
               margin-left:34vw;
             }
             @media screen and(min-width:1400px) and (max-width:1520px){
               margin-left:28vw;
             }
              @media screen and(min-width:1300px) and (max-width:1411px){
               margin-left:26vw;
             }
               @media screen and(min-width:1200px) and (max-width:1300px){
               margin-left:24vw;
             }
            .position_query{

            }
          }
        }
      }
     #map{
        //  overflow:hidden;
         margin-left:10px;
         height:84vh;
         width:88vw;
         @media screen and(min-width:1400px) and (max-width:1500px){
               width:87vw;
         }
         @media screen and(min-width:1260px) and (max-width:1400px){
               width:86vw;
         }
         @media screen and(min-width:800px) and (max-width:1260px){
               width:85vw;
         }
         @media screen and(min-height:800px) and (max-height:850px){
               height:83vh;
         }
          @media screen and(min-height:760px) and (max-height:850px){
               height:82vh;
         }
          @media screen and(min-height:660px) and (max-height:760px){
               height:80vh;
         }
          @media screen and(min-height:560px) and (max-height:660px){
               height:78vh;
         }

     }
     .amap-ui-district-cluster-marker{
         border:1px solid #8e8e8e;
         width:auto;
         height:26px;
         border-radius:5px 5px 5px 0px;
         left:0;
         top:0;
     }
     .amap-ui-district-cluster-marker span{
         vertical-align:middle;
         padding:3px 5px;
         display:inline-block;
         height:20px;
         line-height:16px;
         margin-top:2px;
     }
     .info{
        //  border:1px solid red;
         text-align:right;
         padding-right:15px;
         a{
             text-decoration: none;
         }
     }
     caption{
         font-size:14px;
         color:black;
         padding-top:2px;
         padding-bottom: 2px;
         padding-left:6px;
         border-bottom:2px solid #ddd;
     }
     .table>thead>tr>th{
         padding-top:3px;
         padding-bottom:3px;
         text-align:left;
     }
     .table>tbody>tr>td{
         padding-top:3px;
         padding-bottom:3px;
         text-align:left;
     }
     .blank_header{
       width:100%;
       height:5px;
     }
     .title_px{
         font-size:20px;
         font-weight: bold;
         padding-top:5px;
     }
     .small_word{
       font-size:10px;
     }
     .div_top{
       margin-top:-20px;
     }
     .btn_close{
         position:relative;
         bottom:10px;
        //  margin-bottom:10px;
        //  margin-top:20px;
         border-top:1px solid rgb(229, 229, 229);
         padding-top:10px;
     }
//      .carousel-control {
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     width: 15%;
//     font-size: 20px;
//     color: #fff;
//     text-align: center;
//     text-shadow: 0 1px 2px rgba(0,0,0,.6);
//     background-color: rgba(0,0,0,0);
//     filter: alpha(opacity=50);
//     opacity: .5;
// }
   
    }
</style>