// import AMap from 'AMap';
import MapObjs from './test_class.js'
import mapdata from './mapdata'
class map{
      initmap(map_data){
          console.log(map_data);
          //两个修改  精简代码 函数工具化
          if(map_data){
            var _mapdata = [map_data.dj,map_data.bw];
             //  let _mapdata = 
          }else{
            var _mapdata = mapdata[0];
          }

          var mapObj = new AMap.Map('map', {//是否是全局
            resizeEnable: true,
            level : 15,
            center: _mapdata,
            pinch: 45,
            zoom:16,
            iconStyle:'red',
            iconLabel:'A',
          });
          //标记
          this.addmapobj_market(mapObj);

          //路况信息 
          this.map_road(mapObj);
          
          //热点模式
          this.map_mode(mapObj);

          //搜索服务
          this.map_screah(mapObj);

          //行政区域颜色覆盖
          this.map_Mulch(mapObj,_mapdata);

          //行政区规划选择
          this.map_area(mapObj);

          //二级菜单跳转出现信息
          if(map_data){
            this.map_twomenu_info(mapObj,map_data);
          }

          // AMap.event.addListener(mapObj,'click',function (result) { //添加点击事件,传入对象名，事件名，回调函数 
          //      $('#two').modal('show');
          //      console.log(result);            
          // });
}

  //行政区
  search(obj){
             var flag=1;
             var mapObj = new AMap.Map('map', {//是否是全局
               resizeEnable: true,
               level : 15,
               center: [114.393462,30.631775],
               pinch: 45,
               zoom:16,
               iconStyle:'red',
               iconLabel:'A',
             });
             var district, polygons = [];
             var citySelect = document.getElementById('city');
             var districtSelect = document.getElementById('district');
             var areaSelect = document.getElementById('street');
             AMap.service('AMap.DistrictSearch',function(){//回调函数
               var opts = {
                 subdistrict: 1,   //返回下一级行政区
                 showbiz:false  //最后一级返回街道信息
               };
             district = new AMap.DistrictSearch(opts);
             for (var i = 0, l = polygons.length; i < l; i++) {
                 polygons[i].setMap(null);
             }
             var option = obj.target[obj.target.options.selectedIndex];
             var keyword = option.text; //关键字
             var adcode = option.adcode;
             district.setLevel(option.value); //行政区级别
             district.setExtensions('all');
             district.search(adcode, function(status, result) {
             if(status === 'complete'){
                 var data = result.districtList[0];
                 var bounds = data.boundaries;
                 var level =obj.target.value;
             
                  if (bounds) {
                      for (var i = 0, l = bounds.length; i < l; i++) {
                          var polygon = new AMap.Polygon({
                              map: mapObj,
                              strokeWeight: 1,
                              strokeColor: '#0091ea',
                              fillColor: '#80d8ff',
                              fillOpacity: 0.2,
                              path: bounds[i]
                          });
                          polygons.push(polygon);
                      }
                      mapObj.setFitView();//地图自适应
                  }
       
                  //清空下一级别的下拉列表
                  //console.log(level);
                  if (level === 'province') {
                      citySelect.innerHTML = '';
                      districtSelect.innerHTML = '';
                      areaSelect.innerHTML = '';
                      var contentSub = new Option('-请选择城市-');
                  } else if (level === 'city') {
                      districtSelect.innerHTML = '';
                      areaSelect.innerHTML = '';
                      var contentSub = new Option('-请选择区域-');
                  } else if (level === 'district') {
                      areaSelect.innerHTML = '';
                      var contentSub = new Option('-请选择街道-');
                  }else if(level === 'street'){
                      flag = 2;
                  }

                 var subList = data.districtList;
                 if (subList && flag == 1) {
                     var curlevel = subList[0].level;
                     var curList =  document.querySelector('#' + curlevel);
                     //console.log(curList);
                     curList.add(contentSub);
                     for (var i = 0, l = subList.length; i < l; i++) {
                         var name = subList[i].name;
                         var levelSub = subList[i].level;
                         var cityCode = subList[i].citycode;
                         contentSub = new Option(name);
                         contentSub.setAttribute("value", levelSub);
                         contentSub.center = subList[i].center;
                         contentSub.adcode = subList[i].adcode;
                         curList.add(contentSub);
                     }
                 }
             }
             });
         });
         AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
          mapObj.addControl(new AMap.ToolBar())
          mapObj.addControl(new AMap.Scale())
        })

        //路况信息
       var trafficLayer = new AMap.TileLayer.Traffic({zIndex:10}); //实时路况图层
       trafficLayer.setMap(mapObj);//添加实时路况图层

       var roadNetLayer = new AMap.TileLayer.RoadNet({zIndex:10}); //实例化路网图层
       roadNetLayer.setMap(mapObj);//在map中添加路网图层


       var model = $("#modelbtn").attr("model-data");
       if(model == 1){
         $("#modelbtn").attr("model-data","0");
         $("#modelbtn").text("非热点模式");
         AMap.event.addListener(mapObj,'click',function (result) { //添加点击事件,传入对象名，事件名，回调函数
           let lng=result.lnglat.lng;
           let lat=result.lnglat.lat;
           $("#exampleInputEmail1").val('经纬度' + lat + ',' + lng);
           $('#two').modal('show');
         });
       }else{
         $("#modelbtn").attr("model-data","1");
         $("#modelbtn").text("热点模式");
         mapObj.on('hotspotclick', function(result) {
           let placeSearch = new AMap.PlaceSearch(); 
           placeSearch.getDetails(result.id, function(status, result) {
               if (status === 'complete' && result.info === 'OK') {
                 let accuracy = result.poiList.pois[0].location.getLng();//经度
                 let latitude = result.poiList.pois[0].location.getLat();//纬度
                 $("#exampleInputEmail1").val('经纬度' + latitude + ',' + accuracy);
                 $('#two').modal('show');
               }
           });
         });
       }
   }
   
   addmapobj_market(mapObj){
         //获取地址
         mapObj.plugin('AMap.Geolocation', function () {
                 let geolocation = new AMap.Geolocation({
                      enableHighAccuracy: true, // 是否使用高精度定位，默认:true
                      timeout: 10000,           // 超过10秒后停止定位，默认：无穷大
                      maximumAge: 0,            // 定位结果缓存0毫秒，默认：0
                      convert: true,            // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                      showButton: true,         // 显示定位按钮，默认：true
                      buttonPosition: 'LB',     // 定位按钮停靠位置，默认：'LB'，左下角
                      buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                      showMarker: true,         // 定位成功后在定位到的位置显示点标记，默认：true
                      showCircle: true,         // 定位成功后用圆圈表示定位精度范围，默认：true
                      panToLocation: true,      // 定位成功后将定位到的位置作为地图中心点，默认：true
                      zoomToAccuracy:true       // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                  });
                //mapObj.addControl(geolocation);       //授权弹窗
                geolocation.getCurrentPosition();
                AMap.event.addListener(geolocation, 'complete', function(obj){
                   var res = '经纬度：' + obj.position + 
                             '\n精度范围：' + obj.accuracy + 
                             '米\n定位结果的来源：' + obj.location_type + 
                             '\n状态信息：' + obj.info + 
                             '\n地址：' + obj.formattedAddress + 
                             '\n地址信息：' + JSON.stringify(obj.addressComponent, null, 4);
                    //显示在页面上
                    // $(".title_p2").eq(0).text(obj.addressComponent.province);
                    // $(".title_p2").eq(1).text(obj.addressComponent.city);
                    // $(".title_p2").eq(2).text(obj.addressComponent.district);
                    // $(".title_p2").eq(3).text('经纬度'+obj.position);
                }); // 返回定位信息
                AMap.event.addListener(geolocation, 'error', function(obj){
                        //console.log(obj);
                }); // 返回定位出错信息
         });
         //初始化调整路线
         AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
           mapObj.addControl(new AMap.ToolBar())
           mapObj.addControl(new AMap.Scale())
         })
   }
   map_road(mapObj){
      console.log("map_road");
      var trafficLayer = new AMap.TileLayer.Traffic({zIndex:10}); //实时路况图层
      trafficLayer.setMap(mapObj);//添加实时路况图层

      var roadNetLayer = new AMap.TileLayer.RoadNet({zIndex:10}); //实例化路网图层
      roadNetLayer.setMap(mapObj);//在map中添加路网图层

      //var satellLayer = new AMap.TileLayer.Satellite({zIndex:10}); //实例化卫星图
      //satellLayer.setMap(mapObj); //在map中添加卫星图
   }
   map_mode(mapObj){
    var model=$("#modelbtn").attr("model-data");
    //console.log(model);
    if(model==1){
      $("#modelbtn").attr("model-data","0");
      $("#modelbtn").text("非热点模式");
      AMap.event.addListener(mapObj,'click',function (result) { //添加点击事件,传入对象名，事件名，回调函数
        //console.log(result);
        let lng=result.lnglat.lng;
        let lat=result.lnglat.lat;
        $("#exampleInputEmail1").val('经纬度' + lat + ',' + lng);
        $('#two').modal('show');
      });
    }else{
      $("#modelbtn").attr("model-data","1");
      $("#modelbtn").text("热点模式");
      mapObj.on('hotspotclick', function(result) {
        let placeSearch = new AMap.PlaceSearch(); 
        placeSearch.getDetails(result.id, function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
              //console.log(result);
              let accuracy = result.poiList.pois[0].location.getLng();//经度
              let latitude = result.poiList.pois[0].location.getLat();//纬度
              //console.log(accuracy);
              $("#exampleInputEmail1").val('经纬度' + latitude + ',' + accuracy);
              $('#two').modal('show');
              //console.log("九九八十一");
            }
        });
      });
    }
   }
   map_screah(mapObj){
        //搜索服务
        var currentcity = "武汉";
        mapObj.plugin(["AMap.Autocomplete",'AMap.PlaceSearch'],function(){
        var autoOptions = {
           city: currentcity, //城市，默认全国
           input:"pickerInput",//使用联想输入的input的id
           citylimit:true
        };
        //跳转服务
        var autocomplete= new AMap.Autocomplete(autoOptions);
        var placeSearch = new AMap.PlaceSearch({
              city:currentcity,
              map:mapObj
        });
      
         AMap.event.addListener(autocomplete, "select", function(data){
              //TODO 选择后的处理程序,data的格式见 附录
              placeSearch.search(data.poi.name);
              var lng = data.poi.location.lng;
              var lat = data.poi.location.lat;
              // var array1 = data.poi.district.split("省");
              // var array2 = array1[1].split("市");
              
              //添加标记
              //原有的不行试试UI库里面的
              var marker = new AMap.Marker({
                position:[lng,lat],   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                //icon:'//vdata.amap.com/icons/b18/1/2.png',
                icon:"http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                zIndex:999,
              });
              //marker.setMap(mapObj);
              mapObj.add(marker);
              marker.setMap(mapObj);
        }); 
    });
   }

   map_Mulch(mapObj,_mapdata){
        //添加覆盖物怎么总是不显示  UI库里面添加的也不显示 所以得出的结论是不要在这上面紧弄 直接弄个新的 新的没有问题 就移过来
        AMapUI.load(['ui/geo/DistrictCluster', 'lib/$'],function(DistrictCluster, $){
          window.DistrictCluster = DistrictCluster;
          var distCluster = new DistrictCluster({
            map: mapObj, //所属的地图实例
            zIndex:11,
            //设置显示湖北省
            topAdcodes: [420000],
            autoSetFitView: false,
            getPosition: function(item) {
              if (!item) {
                  return null;
              }
              var parts = item.split(',');
              //返回经纬度
              return [parseFloat(parts[0]), parseFloat(parts[1])];
            }
          });
          window.distCluster = distCluster;
          $('<div id="loadingTip">加载数据，请稍候...</div>').appendTo(document.body);
          $.get('https://a.amap.com/amap-ui/static/data/10w.txt', function(csv) {
    
              $('#loadingTip').remove();
    
              var data = csv.split('\n');
    
              distCluster.setData(data);
           });
      });

      // 构造点标记
      const marker = new AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: _mapdata
      });
      // 构造矢量圆形
      //console.log(marker);
      const circle = new AMap.Circle({
          center: new AMap.LngLat("116.403322", "39.920255"), // 圆心位置
          radius: 1000,  //半径
          strokeColor: "#F33",  //线颜色
          strokeOpacity: 1,  //线透明度
          strokeWeight: 3,  //线粗细度
          fillColor: "#ee2200",  //填充颜色
          fillOpacity: 0.35 //填充透明度
      });
      
      // 单独将点标记添加到地图上
      mapObj.add(marker);
      // add方法可以传入一个覆盖物数组，将点标记和矢量圆同时添加到地图上
      mapObj.add([marker,circle]);
      
      AMapUI.loadUI(['geo/DistrictExplorer'], function(DistrictExplorer) {
         var districtExplorer = new DistrictExplorer({
                map: mapObj
         });   
        // mapObj.panBy(50 * enlarge, 60 * enlarge);
         var adcode = 100000;
          districtExplorer.loadAreaNode(adcode, function(error, areaNode) {
         //清除已有的绘制内容
         districtExplorer.clearFeaturePolygons();
         //绘制子区域
         districtExplorer.renderSubFeatures(areaNode, function(feature, i) {
             return {
                 bubble: true,
                 strokeColor: "#B5B5B5", //线颜色
                 strokeOpacity: 1, //线透明度
                 strokeWeight: 0.6, //线宽
                 fillColor: "#EEEEEE", //填充色
                 fillOpacity: 0.35, //填充透明度
             };
         });	        
       });
      }); 
   }

   map_area(mapObj){
    //行政区规划
    var district, polygons = [], citycode;
    // var citySelect = document.getElementById('city');
    // var districtSelect = document.getElementById('district');
    // var areaSelect = document.getElementById('street');
    //district = new AMap.DistrictSearch(opts);//注意：需要使用插件同步下发功能才能这样直接使用
    AMap.service('AMap.DistrictSearch',function(){//回调函数
      var opts = {
        subdistrict: 1,   //返回下一级行政区
        showbiz:false  //最后一级返回街道信息
      };
      var districtSearch = new AMap.DistrictSearch(opts);

      districtSearch.search('中国', function(status, result) {
      if(status=='complete'){
          //result.districtList[0]
          var data=result.districtList[0];
          var bounds = data.boundaries;
          if (bounds) {
            for (var i = 0, l = bounds.length; i < l; i++) {
              var polygon = new AMap.Polygon({
                  map: mapObj,
                  strokeWeight: 1,
                  strokeColor: '#0091ea',
                  fillColor: '#80d8ff',
                  fillOpacity: 0.2,
                  path: bounds[i]
              });
              polygons.push(polygon);
          }
          mapObj.setFitView();//地图自适应
        }
      
        var subList = data.districtList;
        if (subList) {
          var contentSub = new Option('-请选择省份-');
          var curlevel = subList[0].level;
          var curList =  document.querySelector('#' + curlevel);
          curList.add(contentSub);
          for (var i = 0, l = subList.length; i < l; i++) {
              var name = subList[i].name;
              var levelSub = subList[i].level;
              var cityCode = subList[i].citycode;
              contentSub = new Option(name);
              contentSub.setAttribute("value", levelSub);
              contentSub.center = subList[i].center;
              contentSub.adcode = subList[i].adcode;
              curList.add(contentSub);
          }
       }
     }
   });
 });
   }

   map_twomenu_info(mapObj,map_data){
      var infoWindow;
      let info =[];
      info.push("<div style=\"padding:0px 0px 0px 4px;\"/><b  style='font-weight:bold'>"+ map_data.PlaceName +"</b></div>");
      info.push("<b style='font-weight:bold'>历史信息:</b>"+ map_data.historyinfo +" ");
      info.push("<b style='font-weight:bold'>地名含义:</b>"+ map_data.placemean +" ");
      info.push("<b style='font-weight:bold'>地理实体:</b>"+ map_data.placeposition +"</div></div>");
      infoWindow = new AMap.InfoWindow({
          content: info.join("<br/>")  //使用默认信息窗体框样式，显示信息内容
      });
      infoWindow.open(mapObj, mapObj.getCenter());
   }
}

const maps = new map();
export default maps;