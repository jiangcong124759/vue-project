<template>
  <div>
    <div class="music-list">
      <el-table
        ref="singleTable"
        :data="tableData"
        :highlight-current-row='true'
        :show-header="false"
        @current-change="handleCurrentChange"
        :cell-style="rowStyle"
        style="width: 100%;">
        <el-table-column
          property="name"
          label=""
          width="186">
        </el-table-column>
        <el-table-column
          property="singer"
          label=""
          width="186">
        </el-table-column>
        <el-table-column
          property="time"
          label=""
          width="186">
        </el-table-column>
      </el-table>
    </div>
    <div class="moveOut">
      <div ref="player" class="player_div">
        <div class="last" @click="playLast">
          <svg
            t="1598712774329"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6727"
            width="48"
            height="48"
          >
            <path
              d="M510.7 960.7c-247.1 0-448.1-201-448.1-448.1s201-448.1 448.1-448.1 448.1 201 448.1 448.1-201 448.1-448.1 448.1z m0-845.2c-219 0-397.1 178.1-397.1 397.1s178.1 397.1 397.1 397.1 397.1-178.1 397.1-397.1-178.2-397.1-397.1-397.1z"
              fill="#1C1C1C"
              p-id="6728"
            ></path>
            <path
              d="M488.8 530c-6.6 0-13.2-2.6-18.2-7.7-9.9-10.1-9.7-26.2 0.4-36.1L610.1 350c10-9.9 26.2-9.7 36.1 0.4 9.9 10.1 9.7 26.2-0.4 36.1L506.7 522.8c-5 4.8-11.4 7.2-17.9 7.2z"
              fill="#D8BA3D"
              p-id="6729"
            ></path>
            <path
              d="M623.7 669.1c-6.7 0-13.3-2.6-18.3-7.7L470.5 522.3c-9.8-10.1-9.6-26.3 0.5-36.1s26.3-9.6 36.1 0.5L642 625.9c9.8 10.1 9.6 26.3-0.5 36.1-5 4.7-11.4 7.1-17.8 7.1zM400.3 667.7c-14.1 0-25.5-11.4-25.5-25.5V369.6c0-14.1 11.4-25.5 25.5-25.5s25.5 11.4 25.5 25.5v272.6c0 14.1-11.4 25.5-25.5 25.5z"
              fill="#D8BA3D"
              p-id="6730"
            ></path>
          </svg>
        </div>
        <div class="paly_btn" @click="playOrStop">
          <svg
            v-if="show"
            t="1598712447655"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6023"
            width="48"
            height="48"
          >
            <path
              d="M894.4 256c49.6 73.6 80 163.2 80 259.2 0 256-208 464-464 464s-464-208-464-464 208-464 464-464c73.6 0 144 17.6 206.4 48"
              fill="#FFF100"
              p-id="6024"
            ></path>
            <path
              d="M508.8 1011.2c-273.6 0-496-222.4-496-496s222.4-496 496-496c76.8 0 152 17.6 220.8 51.2 16 8 22.4 27.2 14.4 43.2-8 16-27.2 22.4-43.2 14.4-59.2-30.4-124.8-44.8-192-44.8-238.4 0-432 193.6-432 432s193.6 432 432 432 432-193.6 432-432c0-86.4-25.6-169.6-73.6-241.6-9.6-14.4-6.4-35.2 8-44.8 14.4-9.6 35.2-6.4 44.8 8C976 320 1004.8 416 1004.8 515.2c0 273.6-222.4 496-496 496z"
              fill=""
              p-id="6025"
            ></path>
            <path d="M819.2 168m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z" fill="" p-id="6026"></path>
            <path d="M392 305.6l363.2 209.6-363.2 209.6z" fill="" p-id="6027"></path>
          </svg>
          <svg
            v-if="!show"
            t="1598712464081"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6156"
            width="48"
            height="48"
          >
            <path
              d="M511.501463 1023.000976C229.476878 1023.000976 0.000976 793.525073 0.000976 511.500488S229.476878 0 511.501463 0s511.500488 229.475902 511.500488 511.500488-229.475902 511.500488-511.500488 511.500488z m0-937.784196C276.431024 85.21678 85.217756 276.430049 85.217756 511.500488S276.431024 937.784195 511.501463 937.784195 937.785171 746.570927 937.785171 511.500488 746.571902 85.21678 511.501463 85.21678z"
              fill="#3688FF"
              p-id="6157"
            ></path>
            <path
              d="M394.315902 682.033951c-23.576976 0-42.658341-19.081366-42.658341-42.658341V383.625366c0-23.576976 19.081366-42.658341 42.658341-42.658342s42.658341 19.081366 42.658342 42.658342v255.750244c-0.099902 23.576976-19.181268 42.658341-42.658342 42.658341zM628.687024 682.033951c-23.576976 0-42.658341-19.081366-42.658341-42.658341V383.625366c0-23.576976 19.081366-42.658341 42.658341-42.658342S671.345366 360.04839 671.345366 383.625366v255.750244c0 23.576976-19.081366 42.658341-42.658342 42.658341z"
              fill="#5F6379"
              p-id="6158"
            ></path>
          </svg>
        </div>
        <div class="next" @click="playNext">
          <svg
            t="1598751273940"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="9887"
            width="48"
            height="48"
          >
            <path
              d="M62.5 512.6c0-247.1 201-448.1 448.1-448.1s448.1 201 448.1 448.1-201 448.1-448.1 448.1-448.1-201-448.1-448.1z m51 0c0 219 178.1 397.1 397.1 397.1s397.1-178.1 397.1-397.1-178.1-397.1-397-397.1-397.2 178.1-397.2 397.1z"
              fill="#1C1C1C"
              p-id="9888"
            ></path>
            <path
              d="M532.5 530c6.6 0 13.2-2.6 18.2-7.7 9.9-10.1 9.7-26.2-0.4-36.1L411.3 350c-10-9.9-26.2-9.7-36.1 0.4-9.9 10.1-9.7 26.2 0.4 36.1l139.1 136.3c4.9 4.8 11.4 7.2 17.8 7.2z"
              fill="#D8BA3D"
              p-id="9889"
            ></path>
            <path
              d="M397.6 669.1c6.7 0 13.3-2.6 18.3-7.7l134.9-139.1c9.8-10.1 9.6-26.3-0.5-36.1s-26.3-9.6-36.1 0.5L379.3 625.9c-9.8 10.1-9.6 26.3 0.5 36.1 5 4.7 11.4 7.1 17.8 7.1zM621 667.7c14.1 0 25.5-11.4 25.5-25.5V369.6c0-14.1-11.4-25.5-25.5-25.5s-25.5 11.4-25.5 25.5v272.6c0 14.1 11.4 25.5 25.5 25.5z"
              fill="#D8BA3D"
              p-id="9890"
            ></path>
          </svg>
        </div>
         <div>
         <play-sound ref="playSound"></play-sound>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
  import weiwei from '@/assets/weiwei.mp3'
  import noTopic from '@/assets/noTopic.mp3'
  import sou from '@/assets/sou.mp3'
  import playSound from "../../views/login/playSound";
export default {
  name: "music-player",
  components:{
    playSound
  },
  data() {
    return {
      drawer: true,
      direction: "ltr",
      tableData: [
        {
          "src": "http://m2.music.126.net/kf6FQZwholG_B20RZuGbOg==/3198479325254031.mp3",
          "time": "4:19",
          "name": "Lullaby Lonely",
          "singer": "Denis Kenzo",
          "album": "我是歌手第二季 第6期"
        },
        {
          "src": "http://m2.music.126.net/H0c_CAdMI8JDHKpKXhJ6FQ==/5921969627575441.mp3",
          "time": "3:39",
          "name": "Young For You",
          "singer": "Beautiful Now",
          "album": "Young For You"
        },
        {
          "src": "http://m2.music.126.net/iXrYZegbKVOvXYvOHADr0g==/7796636952597235.mp3",
          "time": "4:56",
          "name": "Ain't It Fun",
          "singer": "Paramore",
          "album": "paramore"
        },
        {
          "src": "http://m2.music.126.net/8Htby1eZejnEaA-rQxLi8g==/7964862232017711.mp3",
          "time": "4:00",
          "name": "A Spring...",
          "singer": "KoZoRo",
          "album": "    "
        },
        {
          "src": "http://m2.music.126.net/cGsGLvLDeVVAA-Ty7Nxdew==/2053887720697629.mp3",
          "time": "4:19",
          "name": "Reception",
          "singer": "Soty",
          "album": "     "
        },
        {
          "src": "http://m2.music.126.net/WigWFuErwgAwJ2sX1uLQeQ==/6634453163541582.mp3",
          "time": "4:28",
          "name": "KoZoRo",
          "singer": "Reception"
        },
        {
          "src": "http://m2.music.126.net/Z1wT8h1gZjEJFULcLvpdpg==/7711974557600267.mp3",
          "time": "5:18",
          "name": "Thank You",
          "singer": "KoZoRo",
          "album": "    "
        }],
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
      currentRow: null,
      activeIndex: '1',
      activeIndex2: '1',
      show:true,
      cruProgress: '',
      showCurrentTime: 1,
      curPercent: 0,
      totalTime:0
    };
  },
  methods: {
    handleClose() {},
    setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    rowStyle(){
      return 'background-color:black'
    },

    /**
     * 播放器相关方法
     */
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
      },

        /**
       * 音乐播放器相关方法
       */
      playOrStop(){
         this.show = !this.show
          if(!this.show){
            this.playMusic()
          }else{
            this.stopMusic()
          }
      },
      /**
       * 播放触发方法
       */
      playMusic(){
        this.$refs['playSound'].playSound()
      },
      /**
       * 暂停触发方法
       */
      stopMusic(){
        this.$refs['playSound'].stopSound()
      },
      playLast(){
        this.$refs['playSound'].playLast()
      },
      playNext(){
        this.$refs['playSound'].playNext()
      }
  }
};
</script>

<style scoped>
.moveOut {
  width: 563px;
  height: 115px;
  position: fixed;
  background-color: #000000;
  left: 0;
  bottom: 10px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.42);
  border-radius: 4px;
  position: relative;
  animation: mymove 5s infinite 1ms;
  -webkit-animation: mymove 5s infinite; /*Safari and Chrome*/
  animation-iteration-count: 1;
}

@keyframes mymove {
  from {
    left: -563px;
  }
  to {
    left: 0px;
  }
}

@-webkit-keyframes mymove /*Safari and Chrome*/ {
  from {
    left: 0px;
  }
  to {
    left: 200px;
  }
}

.player_div {
  padding-top: 38px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.music-list {
  width: 560px;
  height: 600px;
}
</style>
