<template>
  <div>
    <audio autopaly ref="audio" id="buttonAudio"></audio>
    <div class="progress">
      <el-progress :percentage="curPercent" color="red" :format="formatSecond"></el-progress>
    </div>
  </div>
</template>

<script>
  import weiwei from '@/assets/weiwei.mp3'
  import noTopic from '@/assets/noTopic.mp3'
  import sou from '@/assets/sou.mp3'

  export default {
    name: "play-sound",
    data() {
      return {
        currentPlay: {
          order: 1,
          name: weiwei
        },
        songs: [
          {
            order: 1,
            name: weiwei
          },
          {
            order: 2,
            name: noTopic
          },
          {
            order: 3,
            name: sou
          }
        ],
        cruProgress: '',
        showCurrentTime: 1,
        curPercent: 0,
        totalTime:0,
        currentVolume:0.0
      }
    },
    props:{
      canCroll:{
        type: Boolean,
        default(){
          return false
        }
      },
    },
    watch:{
      canCroll(val){
          if(val){
            /*IE、Opera注册事件*/
            if(document.attachEvent){
              document.attachEvent('onmousewheel',this.scrollFunc);

            }
            //Firefox使用addEventListener添加滚轮事件
            if (document.addEventListener) {//firefox
              document.addEventListener('DOMMouseScroll', this.scrollFunc, false);
            }
            //Safari与Chrome属于同一类型
            window.onmousewheel = document.onmousewheel = this.scrollFunc;
          }
      }
    },

    created() {
    },
    methods: {

      /**
       * 播放音频
       */
      playSound() {
        console.log(this.$refs['audio'].src,'当前src')
        if(!this.$refs['audio'].src){
          this.$refs['audio'].src = this.currentPlay.name
        }
        console.log(this.$refs['audio'].src, 'src')
          // .volume = 0.2;
        this.$refs['audio'].play()
        let that = this

        this.$refs['audio'].addEventListener("timeupdate", function () {
          //获取当前播放的百分比  当前进度/总进度
          that.showCurrentTime = this.currentTime
          that.totalTime = this.duration
        })
      },

      /**
       * 暂停
       */
      stopSound() {
        this.$refs['audio'].pause();
      },

      /**
       * 上一首
       */
      playLast() {
        let curOrder = this.currentPlay.order - 1
        this.songs.forEach(item => {
          if (item.order == curOrder) {
            this.currentPlay = item
          }
        })
        if (curOrder <= 0) {
          this.currentPlay = this.songs[this.songs.length - 1]
          console.log(this.currentPlay.name,'上一首')
        }
        this.playSound()
      },

      /**
       * 下一首
       */
      playNext() {
        let curOrder = this.currentPlay.order + 1
        this.songs.forEach(item => {
          if (item.order == curOrder) {
            this.currentPlay = item
          }
        })
        if (curOrder >= this.songs.length) {
          this.currentPlay = this.songs[0]
          console.log(this.currentPlay.name,'下一首')
        }
        this.playSound()
      },

      /**
       * 显示时间转换
       */
      formatSecond(percentage) {

        this.curPercent = ((this.showCurrentTime.toFixed(0))/(this.totalTime.toFixed(0))) * 100 .toFixed(0)

        return this.formatSeconds(Number(this.showCurrentTime.toFixed(0)))

      },


      /**
       * 时间转换
       */
      formatSeconds(value) {
        var theTime = parseInt(value);// 秒
        var theTime1 = 0;// 分
        var theTime2 = 0;// 小时
        // alert(theTime);
        if (theTime > 60) {
          theTime1 = parseInt(theTime / 60);
          theTime = parseInt(theTime % 60);
          // alert(theTime1+"-"+theTime);
          if (theTime1 > 60) {
            theTime2 = parseInt(theTime1 / 60);
            theTime1 = parseInt(theTime1 % 60);
          }
        }
        var result = "00:" + (parseInt(theTime)<10? +"0":"")+parseInt(theTime);
        if (theTime1 > 0) {
          result = "0"+parseInt(theTime1) +':'+ (parseInt(theTime)<10? +"0":"") + theTime;
        }
        if (theTime2 > 0) {
          result = "" + parseInt(theTime2) + "小时" + result;
        }
        return result;
      },
      scrollFunc (e) {
        e = e || window.event;
        if (e.wheelDelta) {
          //判断浏览器IE，谷歌滑轮事件
          if (e.wheelDelta > 0) { //当滑轮向上滚动时
            if(this.$refs['audio'].volume < 0.9){
              this.$refs['audio'].volume +=0.01;
              this.currentVolume = this.$refs['audio'].volume
              this.resetSetItem('currentVolume',(Math.floor(this.currentVolume * 100) / 100) * 100)
              console.log((Math.floor(this.currentVolume * 100) / 100),'保留2位小数')
              console.log(this.currentVolume,'上')
            }
          }
          if (e.wheelDelta < 0) { //当滑轮向下滚动时
            if(this.$refs['audio'].volume > 0.1){
              this.$refs['audio'].volume -=0.01;
              this.currentVolume = this.$refs['audio'].volume
              this.resetSetItem('currentVolume',(Math.floor(this.currentVolume * 100) / 100) * 100)
              console.log((Math.floor(this.currentVolume * 100) / 100),'保留2位小数')
              console.log(this.currentVolume,'下')
            }
          }
        } else if (e.detail) {  //Firefox滑轮事件
          if (e.detail> 0) { //当滑轮向下滚动时

          }
          if (e.detail< 0) { //当滑轮向上滚动时

          }
          console.log(e.wheelDelta)
        }
      },
      initVolume(){
        let that = this
        that.$refs['audio'].volume = 0.2
        this.resetSetItem('currentVolume',(Math.floor(this.$refs['audio'].volume * 100) / 100) * 100)
      }
    },

    created() {
      this.initVolume()

    }
  }
</script>
<style>
  .progress {
    width: 400px;
  }
</style>
