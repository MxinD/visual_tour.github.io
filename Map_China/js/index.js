// let procince_name = []
// 中国地图
(function () {
  var china = document.querySelector('.china')
  // console.log(china) 
  var myChart = echarts.init(china)


  // 模拟飞行路线模块地图模块
  var geoCoordMap = {
    上海: [121.4648, 31.2891],
    东莞: [113.8953, 22.901],
    东营: [118.7073, 37.5513],
    中山: [113.4229, 22.478],
    临汾: [111.4783, 36.1615],
    临沂: [118.3118, 35.2936],
    丹东: [124.541, 40.4242],
    丽水: [119.5642, 28.1854],
    乌鲁木齐: [87.9236, 43.5883],
    佛山: [112.8955, 23.1097],
    保定: [115.0488, 39.0948],
    兰州: [103.5901, 36.3043],
    包头: [110.3467, 41.4899],
    北京: [116.4551, 40.2539],
    北海: [109.314, 21.6211],
    南京: [118.8062, 31.9208],
    南宁: [108.479, 23.1152],
    南昌: [116.0046, 28.6633],
    南通: [121.1023, 32.1625],
    厦门: [118.1689, 24.6478],
    台州: [121.1353, 28.6688],
    合肥: [117.29, 32.0581],
    呼和浩特: [111.4124, 40.4901],
    咸阳: [108.4131, 34.8706],
    哈尔滨: [127.9688, 45.368],
    唐山: [118.4766, 39.6826],
    嘉兴: [120.9155, 30.6354],
    大同: [113.7854, 39.8035],
    大连: [122.2229, 39.4409],
    天津: [117.4219, 39.4189],
    太原: [112.3352, 37.9413],
    威海: [121.9482, 37.1393],
    宁波: [121.5967, 29.6466],
    宝鸡: [107.1826, 34.3433],
    宿迁: [118.5535, 33.7775],
    常州: [119.4543, 31.5582],
    广州: [113.5107, 23.2196],
    廊坊: [116.521, 39.0509],
    延安: [109.1052, 36.4252],
    张家口: [115.1477, 40.8527],
    徐州: [117.5208, 34.3268],
    德州: [116.6858, 37.2107],
    惠州: [114.6204, 23.1647],
    成都: [103.9526, 30.7617],
    扬州: [119.4653, 32.8162],
    承德: [117.5757, 41.4075],
    拉萨: [91.1865, 30.1465],
    无锡: [120.3442, 31.5527],
    日照: [119.2786, 35.5023],
    昆明: [102.9199, 25.4663],
    杭州: [119.5313, 29.8773],
    枣庄: [117.323, 34.8926],
    柳州: [109.3799, 24.9774],
    株洲: [113.5327, 27.0319],
    武汉: [114.3896, 30.6628],
    汕头: [117.1692, 23.3405],
    江门: [112.6318, 22.1484],
    沈阳: [123.1238, 42.1216],
    沧州: [116.8286, 38.2104],
    河源: [114.917, 23.9722],
    泉州: [118.3228, 25.1147],
    泰安: [117.0264, 36.0516],
    泰州: [120.0586, 32.5525],
    济南: [117.1582, 36.8701],
    济宁: [116.8286, 35.3375],
    海口: [110.3893, 19.8516],
    淄博: [118.0371, 36.6064],
    淮安: [118.927, 33.4039],
    深圳: [114.5435, 22.5439],
    清远: [112.9175, 24.3292],
    温州: [120.498, 27.8119],
    渭南: [109.7864, 35.0299],
    湖州: [119.8608, 30.7782],
    湘潭: [112.5439, 27.7075],
    滨州: [117.8174, 37.4963],
    潍坊: [119.0918, 36.524],
    烟台: [120.7397, 37.5128],
    玉溪: [101.9312, 23.8898],
    珠海: [113.7305, 22.1155],
    盐城: [120.2234, 33.5577],
    盘锦: [121.9482, 41.0449],
    石家庄: [114.4995, 38.1006],
    福州: [119.4543, 25.9222],
    秦皇岛: [119.2126, 40.0232],
    绍兴: [120.564, 29.7565],
    聊城: [115.9167, 36.4032],
    肇庆: [112.1265, 23.5822],
    舟山: [122.2559, 30.2234],
    苏州: [120.6519, 31.3989],
    莱芜: [117.6526, 36.2714],
    菏泽: [115.6201, 35.2057],
    营口: [122.4316, 40.4297],
    葫芦岛: [120.1575, 40.578],
    衡水: [115.8838, 37.7161],
    衢州: [118.6853, 28.8666],
    西宁: [101.4038, 36.8207],
    西安: [109.1162, 34.2004],
    贵阳: [106.6992, 26.7682],
    连云港: [119.1248, 34.552],
    邢台: [114.8071, 37.2821],
    邯郸: [114.4775, 36.535],
    郑州: [113.4668, 34.6234],
    鄂尔多斯: [108.9734, 39.2487],
    重庆: [107.7539, 30.1904],
    金华: [120.0037, 29.1028],
    铜川: [109.0393, 35.1947],
    银川: [106.3586, 38.1775],
    镇江: [119.4763, 31.9702],
    长春: [125.8154, 44.2584],
    长沙: [113.0823, 28.2568],
    长治: [112.8625, 36.4746],
    阳泉: [113.4778, 38.0951],
    青岛: [120.4651, 36.3373],
    韶关: [113.7964, 24.7028]
  };

  var XAData = [
    [{ name: "西安" }, { name: "拉萨", value: 100 }],
    [{ name: "西安" }, { name: "上海", value: 100 }],
    [{ name: "西安" }, { name: "广州", value: 100 }],
    [{ name: "西安" }, { name: "西宁", value: 100 }],
    [{ name: "西安" }, { name: "银川", value: 100 }]
  ];

  var XNData = [
    [{ name: "西宁" }, { name: "北京", value: 100 }],
    [{ name: "西宁" }, { name: "上海", value: 100 }],
    [{ name: "西宁" }, { name: "广州", value: 100 }],
    [{ name: "西宁" }, { name: "西安", value: 100 }],
    [{ name: "西宁" }, { name: "银川", value: 100 }]
  ];

  var YCData = [
    [{ name: "拉萨" }, { name: "潍坊", value: 100 }],
    [{ name: "拉萨" }, { name: "哈尔滨", value: 100 }],
    [{ name: "银川" }, { name: "上海", value: 100 }],
    [{ name: "银川" }, { name: "西安", value: 100 }],
    [{ name: "银川" }, { name: "西宁", value: 100 }]
  ];

  var planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  //var planePath = 'arrow';
  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    return res;
  };

  var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
  var series = [];
  [
    ["西安", XAData],
    ["西宁", XNData],
    ["银川", YCData]
  ].forEach(function (item, i) {
    series.push(
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "red", //arrow箭头的颜色
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke"
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{b}"
          }
        },
        symbolSize: function (val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i]
          },
          emphasis: {
            areaColor: "aqua"
          }
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
        })
      }
    );
  });
  var option = {
    tooltip: {
      trigger: "item",
      formatter: function (params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return (
            params.data.fromName +
            ">" +
            params.data.toName +
            "<br />" +
            params.data.value
          );
        } else {
          return params.name;
        }
      }
    },
    legend: {
      orient: "vertical",
      top: "bottom",
      left: "right",
      data: ["西安 Top3", "西宁 Top3", "银川 Top3"],
      textStyle: {
        color: "#fff"
      },
      selectedMode: "multiple"
    },
    geo: {
      map: "china",
      label: {
        emphasis: {
          show: true,
          color: "#000",
          fontSize: '14'
        }
      },
      // 把中国地图放大了1.2倍
      zoom: 1.2,
      roam: true,
      itemStyle: {
        normal: {
          // 地图省份的背景颜色
          areaColor: "rgba(20, 41, 87,0.7)",
          // 分界线颜色
          borderColor: "rgba(0, 255, 255,.8)",
          borderWidth: 1
        },
        emphasis: {
          // 触摸背景颜色
          areaColor: "rgba(0, 255, 255,.8)"
        }
      }
    },
    series: series
  };
  myChart.setOption(option);
  myChart.on('click', function (params) {

    localStorage.setItem('province',params.name)
    // console.log(params.name)
    let low_prov = ['河北','山西','辽宁','吉林','黑龙江','江苏','浙江','安徽']
    let gorge_prov = ['福建','江西','山东','河南','湖北','湖南','广东','海南','山东','海南']
    let many_prov = ['四川','贵州','云南','陕西','甘肃','青海','台湾','湖北','内蒙古','广西','西藏','宁夏','新疆','北京','天津','上海','重庆','香港','澳门']
    
    if(many_prov.indexOf(params.name) !== -1){
      window.open('./child_page/many.html')
    }else if(low_prov.indexOf(params.name) !== -1){
      window.open('./child_page/pro_child.html#'+params.name)
    }else{
      window.open('./child_page/gorge_prov/'+params.name+'.html')
    }
    
  })
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function () {
    myChart.resize();
  })
})();

// 柱状图——第一个
(function () {
  // 柱状图——第一个
  var app = {}
  var option;
  var myChart = echarts.init(document.querySelector('#wrapper main #left .left_one .lo_con'))
  const posList = [
    'left',
    'right',
    'top',
    'bottom',
    'inside',
    'insideTop',
    'insideLeft',
    'insideRight',
    'insideBottom',
    'insideTopLeft',
    'insideTopRight',
    'insideBottomLeft',
    'insideBottomRight'
  ];
  app.configParameters = {
    rotate: {
      min: -90,
      max: 90
    },
    align: {
      options: {
        left: 'left',
        center: 'center',
        right: 'right'
      }
    },
    verticalAlign: {
      options: {
        top: 'top',
        middle: 'middle',
        bottom: 'bottom'
      }
    },
    position: {
      options: posList.reduce(function (map, pos) {
        map[pos] = pos;
        return map;
      }, {})
    },
    distance: {
      min: 0,
      max: 100
    }
  };
  app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
      const labelOption = {
        rotate: app.config.rotate,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        position: app.config.position,
        distance: app.config.distance
      };
      myChart.setOption({
        series: [
          {
            label: labelOption
          },
          {
            label: labelOption
          },
          {
            label: labelOption
          },
          {
            label: labelOption
          }
        ]
      });
    }
  };
  // const labelOption = {
  //   show: true,
  //   position: app.config.position,
  //   distance: app.config.distance,
  //   align: app.config.align,
  //   verticalAlign: app.config.verticalAlign,
  //   rotate: app.config.rotate,
  //   formatter: '{c}  {name|{a}}',
  //   fontSize: 16,
  //   rich: {
  //     name: {}
  //   }
  // };
  option = {
    grid: {
      top: '20%',
      left: '10%',
      bottom: '10%'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      textStyle: {
        color: 'cyan',
        fontSize: '9'
      },
      // data: ['Forest', 'Steppe', 'Desert', 'Wetland'],
      data: ['红色景点', '历史古迹', '网红打卡', '自然山水'],
    },
    // 工具栏
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar', 'stack'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['2012', '2013', '2014', '2015', '2016']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '红色景点',
        type: 'bar',
        barGap: 0,
        // label: labelOption,
        // 柱子内信息样式设置
        // label:{
        //   // 柱子内是否显示内容
        //   show:true,
        //   // inside 显示到柱子内部
        //   position:'inside',
        //   fontSize:'10'
        // },
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390]
      },
      {
        name: '历史古迹',
        type: 'bar',
        // label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290]
      },
      {
        name: '网红打卡',
        type: 'bar',
        // label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190],
      },
      {
        name: '自然山水',
        type: 'bar',
        // label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [98, 77, 101, 99, 40]
      }
    ]
  };
  myChart.setOption(option)
  window.addEventListener("resize", function () {
    myChart.resize();
  })
})();

// 折线图
(function () {
  var option
  var app = {}
  // console.log(document.querySelector('.pic_1'))
  var myChart = echarts.init(document.querySelector('#wrapper main #left .left_two .lt_con'))
  let colorList = ['#46ea91', '#2ba0ff', '#ed593b', '#7357ff', '#f2d750'];
  option = {
    backgroundColor: '#0D2753',
    legend: {
      icon: 'circle',
      top: '5%',
      right: '5%',
      itemWidth: 6,
      itemGap: 5,
      textStyle: {
        color: '#fff',
        padding: [3, 0, 0, 0],
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      top: '15%',
      left: '8%',
      bottom: '10%',
      right: '5%',
    },
    xAxis: [
      {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisLine: {
          lineStyle: {
            color: '#33BBFF',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          textStyle: {
            color: '#5FBBEB',
          },
          // 默认x轴字体大小
          fontSize: 12,
          // margin:文字到x轴的距离
          margin: 10,
        },
        axisPointer: {
          label: {
            // padding: [11, 5, 7],
            padding: [0, 0, 0, 0],
            // 这里的margin和axisLabel的margin要一致!
            margin: 10,
            // 移入时的字体大小
            fontSize: 12,
            backgroundColor: 'rgba(0,0,0,0)',
          },
        },
        boundaryGap: false,
      },
    ],
    yAxis: [
      {
        name: '单位/万',
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#05D5FF',
          },
        },
        axisLabel: {
          textStyle: {
            color: '#5FBBEB',
          },
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: '历史古迹',
        type: 'line',
        data: [85, 110, 190, 123, 160, 90, 85, 80, 78, 82, 85, 95, 120,],
        symbolSize: 1,
        symbol: 'circle',
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 2,
          color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
            {
              offset: 0,
              color: '#90ffc6',
            },
            {
              offset: 1,
              color: '#46ea91',
            },
          ]),
          shadowColor: 'rgba(144, 255, 198, .3)',
          shadowBlur: 5,
          shadowOffsetY: 5,
        },
        itemStyle: {
          normal: {
            color: colorList[0],
            borderColor: colorList[0],
          },
        },
      },
      {
        name: '网红打卡',
        type: 'line',
        data: [10, 30, 75, 115, 165, 200, 220, 170, 135, 105, 85, 100],
        symbolSize: 1,
        symbol: 'circle',
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 2,
          color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
            {
              offset: 0,
              color: '#67bcfc',
            },
            {
              offset: 1,
              color: '#2ba0ff',
            },
          ]),
          shadowColor: 'rgba(105, 188, 252,.3)',
          shadowBlur: 5,
          shadowOffsetY: 5,
        },
        itemStyle: {
          normal: {
            color: colorList[1],
            borderColor: colorList[1],
          },
        },
      },
      {
        name: '红色景点',
        type: 'line',
        data: [40, 65, 47, 72, 90, 60, 95, 45, 125, 40, 155, 170],
        symbolSize: 1,
        symbol: 'circle',
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 2,
          color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
            {
              offset: 0,
              color: '#fc937e ',
            },
            {
              offset: 1,
              color: '#ed593b',
            },
          ]),
          shadowColor: 'rgb(252, 147, 126,.3)',
          shadowBlur: 2,
          shadowOffsetY: 2,
        },
        itemStyle: {
          normal: {
            color: colorList[2],
            borderColor: colorList[2],
          },
        },
      },
      {
        name: '自然山水',
        type: 'line',
        data: [150, 45, 100, 35, 75, 140, 180, 150, 190, 130, 110, 90, 70],
        symbolSize: 1,
        symbol: 'circle',
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 2,
          color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
            {
              offset: 0,
              color: '#a390ff',
            },
            {
              offset: 1,
              color: '#7357ff',
            },
          ]),
          shadowColor: 'rgba(115, 87, 255, .1)',
          shadowBlur: 5,
          shadowOffsetY: 5,
        },
        itemStyle: {
          normal: {
            color: colorList[3],
            borderColor: colorList[3],
          },
        },
      }
    ],
  };
  myChart.setOption(option)
  window.addEventListener("resize", function () {
    myChart.resize();
  })
})();


// 柱状图2
(function () {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector("#wrapper main #left .left_three .lth_con"));
  // 2. 指定配置和数据
  var option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["红色景点", "历史古迹", "网红打卡", "自然山水", "总比例"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        data: [702, 350, 610, 793, 664],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [70, 34, 60, 78, 69],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color 可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}%"
        }
      },
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


// 天气
(function () {
  var myChart = echarts.init(document.querySelector('.weather'))
  let result = [
    { name: "周日", ai: 3, ai2: 10 },
    { name: "周一", ai: 3, ai2: 13 },
    { name: "周二", ai: 6, ai2: 12 },
    { name: "周三", ai: 7, ai2: 16 },
    { name: "周四", ai: 6, ai2: 12 },
    { name: "周五", ai: 4, ai2: 14 },
    { name: "周六", ai: 5, ai2: 10 },]

  let xData = result.map((item) => { return item.name });
  let keys = ['ai', 'ai2'], seriesData = [];
  let color = ['0, 254, 210', '0, 124, 250']
  keys.forEach((key, index) => {
    seriesData.push({
      // "name": "最低温度",
      "data": result.map((item) => { return item[key] }),
      "type": "line",
      "yAxisIndex": 0,
      "symbol": "none",
      "symbolSize": 7,
      "barWidth": 14,
      "splitNumber": 6,
      "smooth": false,
      "itemStyle":
      {
        "color": `rgba(${color[index]},1)`
      },
      "lineStyle":
      {
        "color": `rgba(${color[index]},1)`,
        "width": 1
      },
      "areaStyle":
      {
        "opacity": 1,
        "color":
        {
          "x": 0,
          "y": 0,
          "x2": 0,
          "y2": 1,
          "type": "linear",
          "global": false,
          "colorStops": [
            {
              "offset": 0,
              "color": `rgba(${color[index]},0.35)`
            },
            {
              "offset": 0.8,
              "color": "rgba(6, 8, 41,.1)"
            }]
        },
        "shadowColor": "rgba(0, 0, 0, 0.1)",
        "shadowBlur": 10
      }
    })
    seriesData.push({
      // "name": "最高温度",
      "data": [{
        "coords": result.map((item) => { return [item.name, item[key]] }),
      }],
      "type": "lines",
      "coordinateSystem": "cartesian2d",
      "zlevel": 1,
      "polyline": true,
      "smooth": true,
      "symbol": "circle",
      "effect":
      {
        "show": true,
        "trailLength": 0.4,
        "symbol": "circle",
        "period": 8,
        "symbolSize": 8
      },
      "lineStyle":
      {
        "normal":
        {
          "color": `rgba(${color[index]},1)`,
          "width": 0,
          "opacity": 0,
          "curveness": 0
        }
      }
    })
  })

  option = {
    // backgroundColor: '#1b1b1b',
    "tooltip":
    {
      "trigger": "axis",
      "axisPointer":
      {
        "type": "line"
      },
      "padding": [8, 15],
      "backgroundColor": "rgba(12, 51, 115,0.8)",
      "borderColor": "rgba(3, 11, 44, 0.5)",
      "textStyle":
      {
        "color": "rgba(255, 255, 255, 1)"
      }
    },
    "grid":
    {
      "show": true,
      "top": 50,
      "left": 20,
      "right": 30,
      "bottom": 36,
      "containLabel": true,
      "borderWidth": 0,
      "backgroundColor": "rgba(12, 45, 81, .3)"
    },
    "legend":
    {
      "show": true,
      "top": 0,
      "right": 30,
      "itemWidth": 14,
      "itemHeight": 2,
      "itemGap": 24,
      "icon": "react",
      "textStyle":
      {
        "padding": [0, 0, 0, 4],
        "fontSize": 15,
        "color": "#AEC6DF"
      }
    },
    "dataZoom": [
      {
        "show": true,
        "start": 0,
        "end": 100,
        "bottom": 10,
        "right": 8,
        "left": 30,
        "height": 20,
        "borderColor": "transparent",
        "showDetail": false,
        "backgroundColor": "rgba(64, 169, 255, 0.1)",
        "handleStyle":
        {
          "color": "rgba(64, 169, 255, 0.57)"
        },
        "moveHandleSize": 0,
        "moveHandleStyle":
        {
          "opacity": 0
        },
        "dataBackground":
        {
          "areaStyle":
          {
            "color": "rgba(64, 169, 255, 1)"
          }
        }
      },
      {
        "type": "inside",
        "dataBackground": "#0ff",
        "showDetail": false
      }],
    "xAxis":
    {
      "type": "category",
      "boundaryGap": false,
      "data": xData,
      "axisPointer":
      {
        "handle":
        {
          "show": false
        }
      },
      "axisLine":
      {
        "show": false,
        "lineStyle":
        {
          "color": "#AEC6DF"
        }
      },
      "axisTick":
      {
        "show": false
      }
    },
    "yAxis": [
      {
        "show": true,
        "nameGap": 0,
        "type": "value",
        "minInterval": 1,
        "splitLine":
        {
          "show": false
        },
        "axisTick":
        {
          "show": false
        },
        "minorSplitLine":
        {
          "show": false
        },
        "axisLine":
        {
          "show": false
        },
        "nameTextStyle":
        {
          "fontSize": 14,
          "padding": [0, 0, 0, -15],
          "align": "left",
          "color": "#AEC6DF;"
        },
        "axisLabel":
        {
          "color": "#AEC6DF"
        }
      }],
    "series": seriesData
  }
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})()
// 柱状图二
// https://www.isqqw.com/viewer?id=35656
