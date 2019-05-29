<template>
   <div class="left">
               <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
     <div class="screah">
         <div class="layui-side layui-bg-black left_menu" style="width:165px;margin-top:63px;background-color:#2F4056">
               <ul class="layui-nav layui-nav-tree"  lay-filter="test"  >
                   <li class="layui-nav-item layui-nav-itemed" lay-shrink="all" v-for="(itms,sum) in one_info" :key="sum" @click="two_menu(sum)">
                        <a href="javascript:;">
                          <i class="iconfont layui-icontubiaozhizuomoban_fengjing "></i>&nbsp;&nbsp;{{itms.typename}}&nbsp;<span class="span_icon">▲</span>
                        </a>
                        <dl class="layui-nav-child li-list" v-for="(item,two_sum) in twomenu_info" :key="two_sum" v-show="if_tow==sum" @click.stop="two_select(two_sum)">
                            <dd>
                               <a href="javascript:;"><i class="iconfont layui-iconlvyou"></i>&nbsp;&nbsp;{{item.PlaceName}}</a>
                            </dd>
                        </dl>
                    </li>
                </ul>
         </div>
     </div>
     <div class="router_right">
         <keep-alive>
                <router-view></router-view>
         </keep-alive>
     </div>
   </div>
</template>
<script>
import mapdata from "./js/mapdata";
import maps from "./js/maps";
import jump from './jump';
import store from './js/store';
import bus from './js/vurcomponents.js'
export default{
    name:"Vleft",
    data(){
        return{
           countsum:0,
           one_info:[],
           twomenu_info:[],
           sum:0,
           if_tow:0,//使用v-if作为二级菜单的判断的依据
           two_sum:0,
        } 
    },
    mounted() {
        this.menu_message();
        this.layui_init();
    },
    components:{
       
    },
    methods:{
      menu_message(){
         this.$axios({
             methods:"get",
             url:"http://519193.ichengyun.net/HomePage/GetPlaceTypeList",
         }).
         then((responses)=>{
              this.one_info=responses.data.data;
         });
        //▼▲
      },
      Navigation_click(event){
            let element=event.currentTarget;
            // e.target 是你当前点击的元素
            // e.currentTarget 是你绑定事件的元素
            // li.after
            //$(element).addClass('layui-this').siblings().removeClass('layui-this');
     },
     two_menu(sum){
        this.if_tow = sum;
        $(".span_icon").eq(sum).text("▼");
        const param={
            id:this.one_info[sum].id
        }
        this.$axios.post('http://519193.ichengyun.net/HomePage/GetPlaceList',param).then((res)=>{
           // console.log(res.data);
            this.twomenu_info=res.data.data;
        })//返回的数据 placeName:名字  bw：纬度  dj：经度  historyinfo:历史信息 placeposition 地理实体   placemean 地名含义   rgb(49.49.49)
     },
     two_select(two_sum){   
        let map_data=this.twomenu_info[two_sum];
        bus.$emit('map_datachange',map_data);
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
                     content: 'dataGird.html',
                     width:180,
             });
         }
         layui.use('element', function(){
              var element = layui.element;
              //一些事件监听
              element.on('tab(demo)', function(data){
                   console.log(1);
              });
         });
         var main_func={
               x:1,
               openiframe(jump_string){
                    $('iframe').attr("src",jump_string);
                }
          }
      },
    } 
}
</script>
<style lang="less">
@import url('./css_less/all_filter.less');
    .left{
      position: relative;
      padding:0px;
      margin:0px;
      overflow:hidden;
   
        .router_right{      
             height:91.3vh;
             background-color:aliceblue; 
             display:inline-block;
             width:100%;   
             background:url("./images/bag_4.png") no-repeat;
             background-size:100% 100%;
             @media screen and(min-height:650px) and (max-height:710px){
                  height:89vh;
            }
        }
        
    }
    a{
       text-decoration: none;
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
    a:hover{
       text-decoration: none; 
    }
    .layui-nav .layui-nav-item a:hover{
       background-color:#FF5722; 
       text-decoration: none; 
    } 
    .li_chang{
       width:165px;
       background-color:#2F4056;
       color:white;
       border-top:1px solid white;
    }
    .nav>li>a{
        border-radius:4px;
        position:relative;
        display:block;
        padding:10px 15px;
        color:white;
        font-size:14px;
        font-weight: 100;
    }
    nav.navbar-pills {
      background:rgb(49.49.49);
    }
    .nav>li>a:hover {
        color: white;
        background-color:orange;
    }
    .nav>li>a:visited {
        color: white;
        background-color:rgb(49.49.49);
    }
      .nav>li>a:link {
        color: white;
        background-color:rgb(49.49.49);
    }
    .nav>li>a:active {
        color: white;
     //   background-color:green;
    }
    .nav>li:hover {
        color: white;
        background-color:orange;
    }
    .nav>li:visited {
        color: white;
        background-color:rgb(49.49.49);
    }
    .nav>li:link {
        color: white;
        background-color:rgb(49.49.49);
    }
    .nav>li:active {
        color: white;
      //  background-color:green;
    }
    .layui-nav .layui-nav-item a{
      /* font-family:"Microsoft YaHei"; */
      display:block;
      padding:0 20px;
      color:rgba(255,255,255);
      /* white-space:nowrap; */
    }
    li{
      color:rgba(255,255,255);
      -webkit-tap-highlight-color:rgba(255,255,255);
      text-align:left;
    }
    .layui-nav *{
      font-size:15px;
    }
    .layui-nav li:hover{
      color:orange;
    }
    .layui-nav-item a i{
      font-size:15px;
      /* color:rgba(0,0,0,0); */
      color:rgba(255,255,255);
    }
    .left_menu{
        height:93vh;
        text-align:left;
         @media screen and(min-height:500px) and (max-height:650px){
              height:86vh;
        }
    }
    // .layui-nav-tree .layui-nav-child a{

    // }
      .layui-nav-tree .layui-nav-more{
        margin-left:-10px;
        position:relative;
        left:150px;
      }
      .left_top{
            @media screen and(min-height:500px) and (max-height:650px){
              height:60vh;
            }
      }
      .span_icon{
          position:relative;
          right:40px;
          width:15px;
          float:right;
          color:white;
      }
      .layui-nav-tree .layui-nav-child a {
          height:40px;
          line-height:40px;
          color:white;
          background-color:rgb(49.49.49);
      }
      .layui-nav-tree .layui-nav-child a:hover {
            background-color:orange;
      }
   
      .layui-nav-tree .layui-nav-child a:active {
            background-color:orange;
      }
</style>