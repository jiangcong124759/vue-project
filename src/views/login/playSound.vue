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
        totalTime:0
      }
    },

    created() {
    },
    methods: {

      /**
       * 播放音频
       */
      playSound() {
        this.$refs['audio'].src = this.currentPlay.name
        console.log(this.$refs['audio'].src, 'src')
        this.$refs['audio'].play()
        // this.listenProcess()
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
        if (curOrder == 0) {
          this.currentPlay = this.songs[this.songs.length - 1]
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
        if (curOrder == this.songs.length) {
          this.currentPlay = this.songs[0]
        }
        this.playSound()
      },

      /**
       * 显示时间转换
       */
      formatSecond(percentage) {

        // console.log(this.curPercent,'111')
        console.log(this.totalTime.toFixed(0))

        this.curPercent = ((this.showCurrentTime.toFixed(0))/(this.totalTime.toFixed(0))) * 100 .toFixed(0)

        console.log(this.curPercent)

        console.log(this.formatSeconds(Number(this.showCurrentTime.toFixed(0))))

        return this.formatSeconds(Number(this.showCurrentTime.toFixed(0)))

      },

      /**
       * 监听进度
       */
      listenProcess() {

        let that = this

        this.$refs['audio'].addEventListener("timeupdate", function () {

          //获取当前播放的百分比  当前进度/总进度
          var percent = this.currentTime / this.$refs['audio'].duration

          //计算进度条的因子,百分比需要*该因子,最后才能到100%
          var sp = 600 / 100;

          //拼接进度条的width
          var swidth = (percent * 100 * sp) + "px";
          console.log(percent * 100, swidth)

          //设置进度条的播放进度
          document.getElementById("playProgressBar").style.width = swidth;

          //保留2位小数
          document.getElementById("ptxt").innerText = ((percent * 100).toFixed(2)) + "%"

        })

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
      }
    }
  }
</script>
<style>
  .progress {
    width: 400px;
  }
</style>
