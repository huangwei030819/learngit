<template>
   <div class="left">
               <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
          <div class="screah">
           <div class="layui-side layui-bg-black left_menu" style="width:165px;margin-top:63px;height:93vh;">
               <div class="layui-side-scroll layui-bg-cyan" style="text-align:center;width:200px;margin-top:0px;padding-top:0px;">
                   <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
                   <ul class="layui-nav layui-nav-tree"  lay-filter="test" lay-shrink="all">
                           <li class="layui-nav-item layui-nav-itemed" lay-shrink="all">
                                   <a href="javascript:;"><i class="iconfont layui-icontubiaozhizuomoban_fengjing "></i>&nbsp;&nbsp;文化&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(120)</a>
                                   <dl class="layui-nav-child li-list"  lay-shrink="all">
                                          <dd><a href="javascript:;"><i class="iconfont layui-iconlvyou"></i>&nbsp;&nbsp;名族文化&nbsp;&nbsp;&nbsp;(80)</a>
                                                   <dl class="layui-nav-child li-list" >
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconicon-test"></i>&nbsp;&nbsp;名族风情&nbsp;&nbsp;&nbsp;(20)</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconyinxing"></i>&nbsp;&nbsp;名族工艺&nbsp;&nbsp;&nbsp;(20)</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconicon-test"></i>&nbsp;&nbsp;地方人文&nbsp;&nbsp;&nbsp;(20)</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconlvyouxinxi"></i>&nbsp;&nbsp;地名风俗&nbsp;&nbsp;&nbsp;(20)</a></dd>
                                                    </dl>
                                           </dd>
                                           <dd><a href="javascript:;"><i class="iconfont layui-iconlvyou1"></i>&nbsp;&nbsp;名胜古迹&nbsp;&nbsp;&nbsp;(40)</a>
                                                    <dl class="layui-nav-child li-list" >
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconicon-test"></i>&nbsp;&nbsp;地方景点&nbsp;&nbsp;&nbsp;(20)</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconlvyou1"></i>&nbsp;&nbsp;地方古迹&nbsp;&nbsp;&nbsp;(20)</a></dd>
                                                    </dl>
                                          </dd>
                                  </dl>
                            </li>
                             <li class="layui-nav-item layui-nav-itemed" lay-shrink="all">
                                   <a href="javascript:;"><i class="iconfont layui-iconlvyouxinxi"></i>&nbsp;&nbsp;旅游&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(50)</a>
                                    <dl class="layui-nav-child li-list"  lay-shrink="all">
                                          <dd><a href="javascript:;"><i class="iconfont layui-iconlvyou1"></i>&nbsp;&nbsp;名胜古迹&nbsp;&nbsp;&nbsp;(10)</a>
                                               <dl class="layui-nav-child li-list" >
                                                    <dd><a href="javascript:;">&nbsp;<i class="iconfont layui-iconlvyou1"></i>&nbsp;&nbsp;万里长城</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconlvyou1"></i>&nbsp;&nbsp;桂林山水</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconlvyou1"></i>&nbsp;&nbsp;北京故宫</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconlvyou1"></i>&nbsp;&nbsp;杭州西湖</a></dd>
                                                    </dl>
                                          </dd>
                                           <dd><a href="javascript:;"><i class="iconfont layui-iconlvyou1"></i>&nbsp;&nbsp;旅游胜地&nbsp;&nbsp;&nbsp;(40)</a>
                                               <dl class="layui-nav-child li-list" >
                                                    <dd><a href="javascript:;">&nbsp;<i class="iconfont layui-iconlvyou"></i>&nbsp;&nbsp;香格里拉</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconlvyou"></i>&nbsp;&nbsp;东方明珠</a></dd>
                                                    </dl>
                                          </dd>
                                  </dl>
                            </li>
                             <li class="layui-nav-item layui-nav-itemed" >
                                   <a href="javascript:;"><i class="iconfont layui-iconyiliao"></i>&nbsp;&nbsp;医疗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(10)</a>
                                   <dl class="layui-nav-child li-list"  lay-shrink="all" >
                                          <dd><a href="javascript:;"><i class="iconfont layui-iconyiliaozhongxin"></i>&nbsp;&nbsp;医疗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(10)</a>
                                               <dl class="layui-nav-child li-list" >
                                                    <dd><a href="javascript:;">&nbsp;<i class="iconfont layui-iconyiliaozhongxin"></i>&nbsp;&nbsp;武汉市第一医院</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconyiliaozhongxin"></i>&nbsp;&nbsp;武汉大学中南医院</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconyiliaozhongxin"></i>&nbsp;&nbsp;武汉大学人民医院</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconyiliaozhongxin"></i>&nbsp;&nbsp;武汉市第三医院</a></dd>
                                                    </dl>
                                          </dd>
                                        
                                  </dl>
                            </li>
                             <li class="layui-nav-item layui-nav-itemed">
                                   <a href="javascript:;"><i class="iconfont layui-iconxuexiao3"></i>&nbsp;&nbsp;教育&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(20)</a>
                                   <dl class="layui-nav-child li-list"  lay-shrink="all" >
                                          <dd><a href="javascript:;"><i class="iconfont layui-iconxuexiao"></i>&nbsp;&nbsp;大学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(10)</a>
                                               <dl class="layui-nav-child li-list" >
                                                    <dd><a href="javascript:;">&nbsp;<i class="iconfont layui-iconxuexiao1"></i>&nbsp;&nbsp;武汉大学</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconxuexiao1"></i>&nbsp;&nbsp;华中师范大学</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconxuexiao1"></i>&nbsp;&nbsp;武汉体育学院</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconxuexiao1"></i>&nbsp;&nbsp;湖北地质大学</a></dd>
                                                    </dl>
                                                     <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconxuexiao1"></i>&nbsp;&nbsp;武汉地质大学</a></dd>
                                                    </dl>
                                                     <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconxuexiao1"></i>&nbsp;&nbsp;武汉音乐学院</a></dd>
                                                    </dl>
                                          </dd>
                                           <dd><a href="javascript:;"><i class="iconfont layui-icontubiaozhizuomoban"></i>&nbsp;&nbsp;中学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(5)</a>
                                               <dl class="layui-nav-child li-list" >
                                                    <dd><a href="javascript:;">&nbsp;<i class="iconfont layui-icontubiaozhizuomoban-"></i>&nbsp;&nbsp;马房山中学</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-icontubiaozhizuomoban-"></i>&nbsp;&nbsp;黄陂七中</a></dd>
                                                    </dl>
                                          </dd>
                                           <dd><a href="javascript:;"><i class="iconfont layui-iconxuexiao2"></i>&nbsp;&nbsp;小学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(5)</a>
                                               <dl class="layui-nav-child li-list" >
                                                    <dd><a href="javascript:;">&nbsp;<i class="iconfont layui-iconxuexiao2"></i>&nbsp;&nbsp;大兴路小学</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconxuexiao2"></i>&nbsp;&nbsp;红领巾小学</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconxuexiao2"></i>&nbsp;&nbsp;黄陂路小学</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconxuexiao2"></i>&nbsp;&nbsp;育才小学</a></dd>
                                                    </dl>
                                          </dd>
                                           <dd><a href="javascript:;"><i class="iconfont layui-iconschool"></i>&nbsp;&nbsp;幼儿园&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(5)</a>
                                               <dl class="layui-nav-child li-list" >
                                                    <dd><a href="javascript:;">&nbsp;<i class="iconfont layui-iconschool"></i>&nbsp;&nbsp;大兴路幼儿园</a></dd>
                                                    </dl>
                                                    <dl class="layui-nav-child li-list">
                                                        <dd><a href="javascript:;"><i class="iconfont layui-iconschool"></i>&nbsp;&nbsp;西马幼儿园</a></dd>
                                                    </dl>
                                          </dd>
                                  </dl>
                            </li>
                      </ul>
               </div>
          </div>
       </div>
     <div class="router_right">
         <!-- <keep-alive> -->
                <router-view></router-view>
          <!-- </keep-alive> -->
     </div>
   </div>
</template>
<script>
export default{
    name:"Vleft",
    data(){
        return{
         
        } 
    },
    mounted() {
        this.layui_init();
    },
    components:{
    },
    methods:{
      Navigation_click(event){
            let element=event.currentTarget;
            // e.target 是你当前点击的元素
            // e.currentTarget 是你绑定事件的元素
            $(element).addClass('layui-this').siblings().removeClass('layui-this');
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
        margin-top:80px;
        height:84.5vh;
        text-align:left;
        @media screen and(min-height:710px) and (max-height:810px){
              width:82vh;
        }
    }
    // .layui-nav-tree .layui-nav-child a{

    // }
      .layui-nav-tree .layui-nav-more{
        margin-left:-10px;
        position:relative;
        left:150px;
      }
</style>