<template>
  <div>
    <div class="music-list" v-if="showList">
      <el-table
        ref="singleTable"
        :data="tableData"
        :show-header="false"
        :border="false"
        :cell-class-name="tableRowClassName"
        @current-change="handleCurrentChange"
        highlight-current-row
        style="width: 100%;"
      >
        <el-table-column property="name" label="" width="186"></el-table-column>
        <el-table-column property="singer" label="" width="186"></el-table-column>
        <el-table-column property="time" label="" width="186"></el-table-column>
      </el-table>
    </div>
    <div class="moveOut">
      <div class="volume" @click="showVolumeController = !showVolumeController">
        <svg t="1599122100847" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1376" width="22" height="22"><path d="M447.82 165.51c-7.12 0-14.4 2.41-20.65 7.77L224 320h-96c-17.67 0-32 14.33-32 32v320c0 17.67 14.33 32 32 32h96l203.18 146.72c6.25 5.36 13.53 7.77 20.65 7.77 16.52 0 32.18-12.96 32.18-32.06V197.57c-0.01-19.1-15.67-32.06-32.19-32.06zM416 763.71L261.47 652.12 244.69 640H160V384h84.69l16.78-12.12L416 260.29v503.42zM715.19 113.25c-14.69-9.88-34.59-5.91-44.41 8.72-9.84 14.67-5.94 34.56 8.72 44.41C795.03 243.94 864 373.14 864 512c0 138.88-68.97 268.06-184.5 345.62-14.66 9.84-18.56 29.72-8.72 44.41 6.16 9.19 16.28 14.16 26.59 14.16 6.12 0 12.34-1.75 17.81-5.44C848.44 821.31 928 672.22 928 512s-79.56-309.28-212.81-398.75z" p-id="1377" fill="#8a8a8a"></path><path d="M790.16 512c0-109.95-53.62-213.97-143.47-278.23-14.41-10.27-34.38-6.95-44.66 7.41-10.28 14.38-6.97 34.38 7.41 44.66C682.53 338.09 726.16 422.66 726.16 512s-43.62 173.91-116.72 226.16c-14.38 10.28-17.69 30.28-7.41 44.66 6.25 8.72 16.09 13.38 26.06 13.38 6.44 0 12.94-1.94 18.59-5.97C736.53 725.97 790.16 621.97 790.16 512z" p-id="1378" fill="#8a8a8a"></path><path d="M578.91 356.14c-13.53-11.33-33.69-9.59-45.09 3.91-11.36 13.53-9.62 33.72 3.91 45.09 32.16 27.03 50.59 65.98 50.59 106.86s-18.44 79.81-50.59 106.84c-13.53 11.38-15.28 31.56-3.91 45.09 6.33 7.53 15.41 11.41 24.53 11.41 7.25 0 14.56-2.47 20.56-7.5 46.66-39.22 73.41-96 73.41-155.84-0.01-59.83-26.76-116.62-73.41-155.86z" p-id="1379" fill="#8a8a8a"></path></svg>
      </div>
      <div class="songs-info">{{currentPlay.desc}}</div>
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
          <span @click="showList = !showList" class="list-btn">
            <svg
              t="1599008577448"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1176"
              width="22"
              height="22"
            >
              <path
                d="M384 320l512 0c38.4 0 64-25.6 64-64 0-38.4-25.6-64-64-64L384 192C345.6 192 320 217.6 320 256 320 294.4 345.6 320 384 320zM896 448 384 448C345.6 448 320 473.6 320 512c0 38.4 25.6 64 64 64l512 0c38.4 0 64-25.6 64-64C960 473.6 934.4 448 896 448zM896 704 384 704c-38.4 0-64 25.6-64 64 0 38.4 25.6 64 64 64l512 0c38.4 0 64-25.6 64-64C960 729.6 934.4 704 896 704zM128 192C89.6 192 64 217.6 64 256c0 38.4 25.6 64 64 64s64-25.6 64-64C192 217.6 166.4 192 128 192zM128 448C89.6 448 64 473.6 64 512c0 38.4 25.6 64 64 64s64-25.6 64-64C192 473.6 166.4 448 128 448zM128 704c-38.4 0-64 25.6-64 64 0 38.4 25.6 64 64 64s64-25.6 64-64C192 729.6 166.4 704 128 704z"
                p-id="1177"
                fill="#707070"
              ></path>
            </svg>
          </span>
          <span @click="showlyric = !showlyric" class="lyric-btn">词</span>
          <play-sound ref="playSound" :canCroll = "showVolumeController" @changeProgressValue="changeProgressValue()"></play-sound>
        </div>
      </div>
    </div>
    <div ref="volume-controller" class="volume-controller" v-if="showVolumeController">
      <el-progress :percentage="percentage" :color="customColor"></el-progress>
    </div>
  </div>
</template>

<script>
import weiwei from "@/assets/weiwei.mp3";
import noTopic from "@/assets/noTopic.mp3";
import sou from "@/assets/sou.mp3";
import playSound from "../../views/login/playSound";
export default {
  name: "music-player",
  components: {
    playSound
  },
  watch:{
    '$playSound.currentVolume'(newValue,oldValue){
      console.log(newValue,'当前音量值')
    }
    // playSound:{
    //   currentVolume(newValue, oldValue){
    //     console.log(newValue,'当前音量值')
    //   },
    //   deep:true
    // }
  },
  data() {
    return {
      drawer: true,
      direction: "ltr",
      tableData: [
        {
          src:
            "http://m2.music.126.net/kf6FQZwholG_B20RZuGbOg==/3198479325254031.mp3",
          time: "4:19",
          name: "Lullaby Lonely",
          singer: "Denis Kenzo",
          album: "我是歌手第二季 第6期"
        },
        {
          src:
            "http://m2.music.126.net/H0c_CAdMI8JDHKpKXhJ6FQ==/5921969627575441.mp3",
          time: "3:39",
          name: "Young For You",
          singer: "Beautiful Now",
          album: "Young For You"
        },
        {
          src:
            "http://m2.music.126.net/iXrYZegbKVOvXYvOHADr0g==/7796636952597235.mp3",
          time: "4:56",
          name: "Ain't It Fun",
          singer: "Paramore",
          album: "paramore"
        },
        {
          src:
            "http://m2.music.126.net/8Htby1eZejnEaA-rQxLi8g==/7964862232017711.mp3",
          time: "4:00",
          name: "A Spring...",
          singer: "KoZoRo",
          album: "    "
        },
        {
          src:
            "http://m2.music.126.net/cGsGLvLDeVVAA-Ty7Nxdew==/2053887720697629.mp3",
          time: "4:19",
          name: "Reception",
          singer: "Soty",
          album: "     "
        },
        {
          src:
            "http://m2.music.126.net/WigWFuErwgAwJ2sX1uLQeQ==/6634453163541582.mp3",
          time: "4:28",
          name: "KoZoRo",
          singer: "Reception"
        },
        {
          src:
            "http://m2.music.126.net/Z1wT8h1gZjEJFULcLvpdpg==/7711974557600267.mp3",
          time: "5:18",
          name: "Thank You",
          singer: "KoZoRo",
          album: "    "
        }
      ],
      currentPlay: {
        order: 1,
        name: weiwei,
        desc: "微微-傅如乔"
      },
      currentRow: null,
      show: true,
      showList: false,
      showLyric: false,
      showVolumeController:false,
      percentage: sessionStorage.getItem('currentVolume'),
      customColor: '#409eff',
    };
  },
  methods: {
    handleClose() {
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    tableRowClassName(row) {
      console.log(row, "rowrow");
      return "tableRowClassName";
    },

    /**
     * 音乐播放器相关方法
     */
    playOrStop() {
      this.show = !this.show;
      if (!this.show) {
        this.playMusic();
      } else {
        this.stopMusic();
      }
    },
    /**
     * 播放触发方法
     */
    playMusic() {
      this.$refs["playSound"].playSound();
    },
    /**
     * 暂停触发方法
     */
    stopMusic() {
      this.$refs["playSound"].stopSound();
    },
    playLast() {
      this.$refs["playSound"].playLast();
    },
    playNext() {
      this.$refs["playSound"].playNext();
    },
    changeProgressValue(val){
      this.percentage = val;
    }
  },
  created() {
    window.addEventListener('setItem', ()=> {
      console.log(sessionStorage.getItem('currentVolume'),'监听到的音量变化')
      this.percentage = Number(sessionStorage.getItem('currentVolume'));
    })
  }
};
</script>

<style scoped>
/* /deep/ .tableRowClassName {
  background: red;
} */
/deep/.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #9fb6cd;
}
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
  height: 345px;
}
.header-class {
  background-color: black;
}
</style>

<!--清除表格边框-->
<style>
.music-list .el-table td,
.music-list .el-table th.is-leaf,
.music-list .el-table--border,
.music-list .el-table--group {
  border: none;
  cursor: pointer;
}
.music-list .el-table::before {
  height: 0;
}
.list-btn {
  position: absolute;
  top: 0px;
  right: 55px;
}
.lyric-btn {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 91px;
  top: 0px;
}
.songs-info {
  width: 100px;
  color: white;
  position: absolute;
  top: 22px;
  right: 180px;
}
.volume{
  position: absolute;
  top: 0px;
  right: 25px;
  cursor:pointer;
  }
  .volume-controller{
    width: 120px;
    height: 50px;
    -webkit-transform: rotate(270deg);
    position: absolute;
    right: -95px;
    bottom: 55px;
  }
</style>


