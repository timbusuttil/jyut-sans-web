<template>
  <div class="interview">
    <h1>interview video</h1>
    <div class="videoContainer">
      <div class="label">
        <p>An interview with two bilingual first generation Chinese diaspora about their lived experience of negotiating spoken Cantonese Chinese-Australian</p>
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
