<template>
  <div class="interview">
    <h1>interview video</h1>
    <div class="videoContainer">
      <div class="label">
        text text text
      </div>
      <iframe class="video" width="640" height="360"
        src="https://www.youtube.com/embed/tgbNymZ7vqY">
      </iframe>
    </div>
  </div>
</template>

<style>
.videoContainer {
  background: black;
  width: 640px;
  position: relative;
}

.video {
  border: none;
}

.label {
  position: absolute;
  width: 180px;
  height: 200px;
  background: mediumseagreen;
  top: -90px;
  right: -100px;
}
</style>
