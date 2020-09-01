<template>
    <div class="home-box">
        <div class="music-div">
            <music-player></music-player>
        </div>
    </div>
</template>

<script>
import MusicPlayer from "../../components/musicPlayer/index";
export default {
  name: "music",
  components: {
    MusicPlayer
  },
  mounted() {
    document.body.style.backgroundColor = "#ffffff";
  },
  methods: {}
};
</script>

<style scoped>
.music-div {
  bottom: 4px;
  position: absolute;
}
.home-box {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: #1d1d1d;
}
</style>

