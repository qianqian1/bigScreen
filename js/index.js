var t = null;
t = setTimeout(time, 1000); //開始运行
function time() {
  clearTimeout(t); //清除定时器
  dt = new Date();
  var y = dt.getFullYear();
  var mt = dt.getMonth() + 1;
  var day = dt.getDate();
  var h = dt.getHours(); //获取时
  var m = dt.getMinutes(); //获取分
  var s = dt.getSeconds(); //获取秒
  document.querySelector(".showTime").innerHTML =
    "当前时间：" +
    y +
    "年" +
    mt +
    "月" +
    day +
    "-" +
    h +
    "时" +
    m +
    "分" +
    s +
    "秒";
  t = setTimeout(time, 1000); //设定定时器，循环运行
}
(function () {
  var ele = document.getElementById('charts1');
  var myEcharts = echarts.init(ele);
  var option = {
    // color设置我们线条的颜色 注意后面是个数组
    color: ['#2f89cf'],
    // 图表的提示框组件 
    tooltip: {
      // 触发方式
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 网格配置
    grid: {
      top: '10px',
      left: '0%',
      right: '0%',
      bottom: '4%',
      // 是否显示刻度标签 如果是true 就显示 否则反之
      containLabel: true
    },
    // 设置x轴的相关配置
    xAxis: [
      {
        type: 'category',
        data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: 12
        },
        axisLine: {
          show: false
        }
      }
    ],
    // 设置y轴的相关配置
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: 12
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
            width: 1,
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      },
    ],
    // 系列图表配置 它决定着显示那种类型的图表
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  }
  myEcharts.setOption(option);
  window.addEventListener('resize', function () {
    myEcharts.resize();
  })
})();
(function () {
  var ele = document.getElementById('chart2');
  var myEcharts = echarts.init(ele);
  // 声明颜色数组
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  var option = {
    // 图标位置
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
      // containLabel: true
    },
    // 不显示x轴 
    xAxis: {
      show: false
    },
    // 不显示y轴线和相关刻度
    yAxis: [
      {
        type: 'category',
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        //不显示y轴线条
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        // y轴文字的颜色设置为白色
        axisLabel: {
          color: '#fff'
        },
        inverse: true,
      },
      {
        type: 'category',
        data: [702, 350, 610, 793, 664],
        //不显示y轴线条
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        // y轴文字的颜色设置为白色
        axisLabel: {
          color: '#fff'
        },
        inverse: true,
      }
    ],
    series: [
      // 修改第一组柱子相关样式（条状）
      {
        name: '条',
        type: 'bar',
        data: [70, 34, 60, 78, 69],
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 柱子设为圆角
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            // 给 itemStyle  里面的color 属性设置一个 返回值函数
            color: function (params) {
              return myColor[params.dataIndex];
            }
          }
        },
        // 设置第一组柱子内百分比显示数据
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: '{c}%'
          }
        },
        yAxisIndex: 0,
      },
      // 修改第二组柱子的相关配置（框状）
      {
        name: '框',
        type: 'bar',
        data: [100, 100, 100, 100, 100],
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 15,
        // 柱子不要背景要边框颜色
        itemStyle: {
          normal: {
            color: 'none',
            borderColor: '#00c1de',
            borderWidth: 3,
            barBorderRadius: 15,
          }
        },
        yAxisIndex: 1,
      }
    ]
  }
  myEcharts.setOption(option);
  window.addEventListener('resize', function () {
    myEcharts.resize();
  })
})();
(function (params) {
  var ele = document.getElementById('charts3');
  var myEcharts = echarts.init(ele);
  var option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    // 设置网格样式
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,// 显示边框
      borderColor: '#012f4a',// 边框颜色
      containLabel: true // 包含刻度文字在内
    },
    // 图例组件
    legend: {
      textStyle: {
        color: '#4c9bfd' // 图例文字颜色
      },
      right: '4%'
    },
    xAxis: {
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: '#4c9bfd'
      },
      type: 'category',
      boundaryGap: false, // 去除轴内间距
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false, // 去除刻度
      },
      axisLabel: {
        color: '#4c9bfd' // 文字颜色
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a' // 分割线颜色
        }
      }
    },
    series: [
      {
        type: 'line',
        name: '新增粉丝',
        data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        smooth: true, // 折线修饰为圆滑
      },
      {
        name: '新增游客',
        data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
        type: 'line',
        smooth: true,
      },
    ]
  };

  myEcharts.setOption(option);
  window.addEventListener('resize', function () {
    myEcharts.resize();
  })
})();
(function (params) {
  var ele = document.getElementById('chart4');
  var myEcharts = echarts.init(ele);
  var option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: '0%',
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: 12
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 12
          }
        },
        axisLine: {
          color: 'rgba(255,255,255,.2)'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: false,
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        },
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 12
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      }
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
        smooth: true,
        lineStyle: {
          color: "#0184d5",
          width: 2
        },
        areaStyle: {
          // 渐变色，只需要复制即可
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
      },
      {
        name: '转发量',
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
      },
    ]
  }
  myEcharts.setOption(option);
  window.addEventListener('resize', function () {
    myEcharts.resize();
  })
})();
(function (params) {
  var ele = document.getElementById('charts5');
  var myEcharts = echarts.init(ele);
  var option = {
    color: [
      "#065aab",
      "#066eab",
      "#0682ab",
      "#0696ab",
      "#06a0ab",
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      // 距离底部为0%
      bottom: '0%',
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // orient: 'vertical',
      // data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
      // 修改图例组件的文字为 12px
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: 12
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        //  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
        radius: ["40%", "60%"],
        // 设置饼形图在容器中的位置 默认为垂直水平居中的
        center: ["50%", "50%"],
        // 不显示标签文字
        label: { show: false },
        // 不显示连接线
        labelLine: { show: false },
        data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
        ]
      }
    ]
  };
  myEcharts.setOption(option);
  window.addEventListener('resize', function () {
    myEcharts.resize();
  })
})();
(function () {
  const ele = document.getElementById('chart6');
  var myEcharts = echarts.init(ele);
  var option = {
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: '0%',
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: 12
      }
    },
    series: [
      {
        name: '面积模式',
        type: 'pie',
        radius: ['10%', '70%'],
        center: ['50%', '45%'],
        roseType: 'radius', // area面积模式 radius半径模式
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ],
        // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
        label: {
          fontSize: 10
        },
        // 防止缩放的时候，引导线过长。引导线略短些   (series对象里面的  labelLine  对象设置  ) 
        // 引导线调整
        labelLine: {
          // 连接扇形图线长
          length: 6,
          // 连接文字线长
          length2: 8
        }
      }
    ]
  };
  myEcharts.setOption(option);
  window.addEventListener('resize', function () {
    myEcharts.resize();
  })
})()
// 加强练习
// (function () {
//   var ele = document.getElementById('charts3');
//   var myEcharts = echarts.init(ele);
//   var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
//   const option = {
//     grid: {
//       top: "10%",
//       left: "22%",
//       bottom: "10%"
//     },
//     xAxis: [{
//       show: false,
//     }],
//     yAxis: [{
//       axisTick: 'none',
//       axisLine: 'none',
//       offset: '20',
//       axisLabel: {
//         textStyle: {
//           color: '#ffffff',
//         }
//       },
//       data: ['南昌转运中心', '广州转运中心', '杭州转运中心', '宁夏转运中心', '兰州转运中心']
//     }, {
//       axisTick: 'none',
//       axisLine: 'none',
//       axisLabel: {
//         textStyle: {
//           color: '#ffffff',
//         }
//       },
//       data: ['10', '9', '8', '7', '6']
//     }, {
//       name: '分拨延误TOP 10',
//       nameGap: '50',
//       nameTextStyle: {
//         color: '#ffffff',
//         fontSize: '16',
//       },
//       axisLine: {
//         lineStyle: {
//           color: 'rgba(0,0,0,0)'
//         }
//       },
//       data: [],
//     }],
//     series: [{
//       name: '条',
//       type: 'bar',
//       yAxisIndex: 0,
//       data: [4, 13, 25, 29, 38],
//       label: {
//         normal: {
//           show: true,
//           position: 'right',
//           textStyle: {
//             color: '#ffffff',
//           }
//         }
//       },
//       barWidth: 12,
//       itemStyle: {
//         normal: {
//           color: function (params) {
//             var num = myColor.length;
//             return myColor[params.dataIndex % num]
//           },
//         }
//       },
//       z: 2
//     }, {
//       name: '白框',
//       type: 'bar',
//       yAxisIndex: 1,
//       barGap: '-100%',
//       data: [99, 99.5, 99.5, 99.5, 99.5],
//       barWidth: 20,
//       itemStyle: {
//         normal: {
//           color: '#0e2147',
//           barBorderRadius: 5,
//         }
//       },
//       z: 1
//     }, {
//       name: '外框',
//       type: 'bar',
//       yAxisIndex: 2,
//       barGap: '-100%',
//       data: [100, 100, 100, 100, 100],
//       barWidth: 24,
//       itemStyle: {
//         normal: {
//           color: function (params) {
//             var num = myColor.length;
//             return myColor[params.dataIndex % num]
//           },
//           barBorderRadius: 5,
//         }
//       },
//       z: 0
//     },
//     {
//       name: '外圆',
//       type: 'scatter',
//       hoverAnimation: false,
//       data: [0, 0, 0, 0, 0],
//       yAxisIndex: 2,
//       symbolSize: 20,
//       itemStyle: {
//         normal: {
//           color: function (params) {
//             var num = myColor.length;
//             return myColor[params.dataIndex % num]
//           },
//           opacity: 1,
//         }
//       },
//       z: 2
//     }
//     ]
//   }
//   myEcharts.setOption(option);
//   window.addEventListener('resize', function () {
//     myEcharts.resize();
//   })
// })()
