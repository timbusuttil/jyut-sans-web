<template>
  <div class="interview">
    <div class="videoContainer">
      <img class="loading" :src="require('@/assets/video/loading.png')" alt="loading">
      <iframe src="https://player.vimeo.com/video/297909598?color=ffffff&byline=0&portrait=0&title=0&loop=1&callback=videoLoaded" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
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
  margin: auto;
  /* max-width: 800px; */
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
}

.video {
  border: none;
}

.loading {
  width: 200px;
  height: 200px;
  margin: auto;
}
</style>
