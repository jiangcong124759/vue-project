<template>
    <div class="login">
      <div class="content">
        <el-input  v-model="username" placeholder="请输入用户名称"></el-input>
        <el-input class="el-input" v-model="password" show-password placeholder="请输入密码" ></el-input>
        <el-row :gutter="20">
          <el-col :span="18"><el-input type="text" class="mb20" v-on:keyup.enter.native="login"  v-model="code" placeholder="请输入验证码"></el-input></el-col>
          <el-col :span="6"><img @click="getCodeImage" class="code" :src="`http://localhost:8081/sincere/user/code?time=${timeValue}`" alt="验证码"></el-col>
        </el-row>
        <el-button class="el-button" type="primary" @click="login" >登录</el-button>
      </div>
      <el-tooltip placement="top">
        <div slot="content"><span style="color:red">张三</span><span style="color:yellow">李四</span></div>
        <span>测试一下</span>
      </el-tooltip>
      <el-badge :value="myMessasgeCount" class="item">
        <el-button size="small">回复</el-button>
      </el-badge>
    </div>
</template>

<script>
  import axios from 'axios';
  axios.defaults.withCredentials=true;
  var messageCount = 0
    export default {
        name: "login",
        data () {
          return {
            username: '',
            password:'',
            code:'',
            timeValue:'',
            myMessasgeCount:0
          }
        },
      methods:{
        axiosTest(){
          let params = {
            "page": 1,
            "size": 20,
            "towerName":"#031"
          }
          axios.post("http://localhost:2060/zhsd/uav/inspect_result", params).then(res=> {
              console.log(res,'res')
          }).catch(function(err) {
          });
        },
        getCodeImage(){
          this.timeValue = Math.floor(Math.random() * 1000) + 1
        },
        login(){
          let user = {
            username:this.username,
            password:this.password,
            code: this.code
          }
          axios.post("http://localhost:8081/sincere/user/login", user).then(res=> {
            if(res.data && res.data!='验证码错误'){
              this.$router.push('/home')
            }else{
              this.$message({
                type:  'info',
                message: '登录失败',
                duration: 3000
              })
            }
            // this.$router.push('/') //报错 this = undefind
          }).catch(function(err) {
            console.log(err)
          });
        },
        initWebSocket(){
          let that = this
          // this.axiosTest()
          //  webSocket代码
          var websocket = null;
          //浏览器是否支持
          if ('WebSocket' in window) {
            // 上面我们给webSocket定位的路径
            websocket = new WebSocket('ws://localhost:8080/webSocket');
          } else {
            alert('该浏览器不支持websocket!');
          }
          //建立连接
          websocket.onopen = function (event) {
            console.log('建立连接');
          }
          //关闭连接
          websocket.onclose = function (event) {
            console.log('连接关闭');
          }
          //消息来的时候的事件
          websocket.onmessage = function (event) {
            // 这里event.data就是我们从后台推送过来的消息
            console.log('收到服务端主动发来的消息:' + event.data);
            // 在这里我们可以在页面中放置一个音乐，例如“您有新的订单了！”这样的提示音
            // document.getElementById("newOrderMp3").play();
            messageCount+=1
            that.myMessasgeCount = messageCount
            console.log(messageCount,'messageCount')
            console.log(that.myMessasgeCount,'this.myMessasgeCount')
          }

          //发生错误时
          websocket.onerror = function () {
            alert('websocket通信发生错误！');
          }
          //窗口关闭时，Websocket关闭
          window.onbeforeunload = function () {
            websocket.close();
          }
        },
        // timer(){
        //
        //   console.log(this.myMessasgeCount,'before')
        //   let that = this
        //   setInterval(
        //     function(){
        //       that.myMessasgeCount = that.myMessasgeCount+1
        //         console.log(that.myMessasgeCount,'哈哈')
        //     },1000
        //   )
        // },
        gettime() {
          var messageCount = 0;
          var interval = setInterval(function() {
            messageCount = messageCount+1;
            if (messageCount == 60) {
              clearInterval(interval);
            }
          }, 500);

          console.log(messageCount);
          this.myMessasgeCount = messageCount;
        }
      },
      created(){
        this.initWebSocket()
        // this.timer()
// this.gettime()

      }
    }

</script>

<style scoped>
  .content{
    padding-top: 180px;
    width:30%;
    margin:0 auto;
  }
  .el-input{
    margin-top: 10px;
  }
  .el-button{
    width: 100%;
    margin-top: 10px;
  }
  .code{
    cursor: pointer;
  }
</style>
