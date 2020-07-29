<template>
  <div class="user">
    <div class="flex__container">
      <div class="flex__item">
        <div class="sub_div">
          <svg t="1595577675455" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12345" width="200" height="200"><path d="M512 0a512 512 0 0 0 0 1024c180.224 0-110.592-204.8 204.8-204.8a302.08 302.08 0 0 0 307.2-307.2A512 512 0 0 0 512 0zM179.2 486.4A76.8 76.8 0 1 1 256 409.6a76.8 76.8 0 0 1-76.8 76.8zM358.4 307.2a76.8 76.8 0 1 1 76.8-76.8A76.8 76.8 0 0 1 358.4 307.2z m307.2 0a76.8 76.8 0 1 1 76.8-76.8A76.8 76.8 0 0 1 665.6 307.2z m179.2 179.2A76.8 76.8 0 1 1 921.6 409.6a76.8 76.8 0 0 1-76.8 76.8z" p-id="12346" fill="#1296db"></path></svg>
        </div>
      </div>
    </div>

<!--  echartsDemo  -->
    <div id="myChart" :style="{width: '1400px', height: '300px', margin:'0 auto'}"></div>

  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'user',
    components: {},
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        myData: [
        {
          "deviceType": "监测类型",
          "rate": "1.00%"
        },
        {
          "deviceType": "微风振动",
          "rate": "1.00%"
        },
        {
          "deviceType": "导线弧垂",
          "rate": "4.00%"
        },
        {
          "deviceType": "等值覆冰",
          "rate": "7.00%"
        },
        {
          "deviceType": "污秽度",
          "rate": "9.00%"
        },
        {
          "deviceType": "微气象",
          "rate": "3.00%"
        },
        {
          "deviceType": "导线温度",
          "rate": "2.00%"
        },
        {
          "deviceType": "分布式故障",
          "rate": "6.00%"
        },
        {
          "deviceType": "杆塔倾斜",
          "rate": "3.00%"
        },
        {
          "deviceType": "导线舞动",
          "rate": "7.00%"
        },
        {
          "deviceType": "导线风偏",
          "rate": "7.00%"
        }
      ]
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '检测告警统计-在线率' },
          tooltip: {},
          xAxis: {
            data: this.myData.map(item=>item.deviceType)
          },
          yAxis:[
              {
                type: 'value',
                axisLabel: {
                  show: true,
                  interval: 'auto',
                  formatter: '{value} %'
                },
                show: true
              }
          ],
          series: [{
            type: 'bar',
            data: this.myData.map(item=>item.rate.substr(0,1)),
            itemStyle:{
              normal:{color:'#0daaa6'}
            }
          }]
        });
      },


      getData(){
        this.myData.forEach()


        // axios.post("http://localhost:8081/sincere/user/login", user).then(res=> {
        //   if(res.data && res.data!='验证码错误'){
        //     this.$router.push('/home')
        //   }else{
        //     this.$message({
        //       type:  'info',
        //       message: '登录失败',
        //       duration: 3000
        //     })
        //   }
        //   // this.$router.push('/') //报错 this = undefind
        // }).catch(function(err) {
        //   console.log(err)
        // });
      }

    }
  }
</script>

<style scoped scoped="less">
  /* CSS */
  .flex__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .flex__item{
    width: 1050px;
    height: 360px;
    background-image: linear-gradient(to right, rgb(122,230,136) , rgb(123,246,216));
    box-shadow:0 0 15px #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sub_div{
    width: 585px;
    height: 206px;
    background-image: linear-gradient(to right, rgb(189,245,207) , rgb(189,250,233));
    box-shadow:0 0 15px #000;
  }
</style>
