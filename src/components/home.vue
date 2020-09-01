<template>
  <div class="home">
    <div class="index-content">
      加班狗子-后台管理
    </div>
    <div class="content">
      <ul class="li-list">
        <li class="color1" @click="jumpToUserPage">音乐播放器</li>
        <li class="color2">考勤卫生管理</li>
        <li class="color3">消息管理</li>
        <li class="color4">后台管理</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {},
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      jumpToUserPage(){
        this.$router.push('/user')
      }
    }
  }
</script>

<style scoped scoped="less">
  .home{
    background: #FFFFFF;
  }
  .content{
    width: 80%;
    height: 580px;
    margin: 0 auto;
    background: #fbf6f69c;
  }
  .li-list{
    width: 100%;
    list-style-type: none;
  }
  li{
    float:left;
    width: 15%;
    height: 100px;
    margin-left:8%;
    margin-top: 15%;
    color: white;
    border-radius: 8px;
    vertical-align: middle;
    line-height: 100px;
    cursor:pointer;
  }
  .color1{
    background: #8288FF;
  }
  .color2{
    background: #6ABE0F;
  }
  .color3{
    background: #F6974A;
  }
  .color4{
    background: #50A3EA;
  }
  .index-content{
    margin: 0 auto;
    font-size: 32px;
    width: 400px;
    height: 98px;
    line-height: 403px;
  }

</style>
