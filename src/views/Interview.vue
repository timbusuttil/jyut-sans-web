<template>
  <div class="interview">
    <div class="videoContainer">
      <!-- <div class="label">
        <p>An interview with two bilingual first generation Chinese diaspora about their lived experience of negotiating spoken Cantonese Chinese-Australian</p>
      </div> -->
      <!-- <iframe class="video" width="640" height="360"
        src="https://www.youtube.com/embed/tgbNymZ7vqY">
      </iframe> -->
      <p style="position: absolute; padding: 100px;">loading</p>
      <iframe src="https://player.vimeo.com/video/294314377?color=ffffff&byline=0&portrait=0&title=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'interview',
  created() {
    let vimeoScript = document.createElement('script')
    vimeoScript.setAttribute('src', 'https://player.vimeo.com/api/player.js')
    document.head.appendChild(vimeoScript)
  }
}
</script>

<style>
.interview {
  width: 100%;
  height: 100%;
}

.videoContainer {
  /* background: red; */
  /* width: 960px; */
  height: 540px;
  position: relative;
}

.video {
  border: none;
}

.label {
  position: absolute;
  width: 180px;
  background: mediumseagreen;
  top: -90px;
  right: -100px;
  text-align: center;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0 0 0 6px mediumseagreen, 0 0 0 10px black;
}
</style>
