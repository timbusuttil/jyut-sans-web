<template>
  <div class="audio">
    <h3>click on the numbers to hear the tones</h3>
    <div class="outerFlex">
      <div class="audioContainer">
        <div class="audioGridContainer">
          <div class="audioGridRow"></div>
          <div class="audioGridRow"></div>
          <div class="audioGridRow"></div>
          <div class="audioGridRow"></div>
        </div>
        <h3 class="label" id="high">High</h3>
        <h3 class="label" id="low">Low</h3>
        <div v-for="(sound, index) in audioSamples" :key="index" class="fan">
          <img class="fanImage" :src="sound.isPlaying ? sound.activeImage : sound.inactiveImage" :style="index === 0 ? 'margin-right: -40px' : ''">
        </div>
      </div>
    </div>
    <div class="buttonContainer">
      <div v-for="(sound, index) in audioSamples" :key="index + 'a'" class="fanButton">
        <button :class="sound.isPlaying ? 'audioButton audioButtonActive' : 'audioButton audioButtonInactive'" type="button" name="button" @click="playSound(index)">{{index+1}}</button>
        <transition name="fade">
          <p v-show="sound.isPlaying">{{ sound.word }}</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import {Howl} from 'howler'

export default {
  name: 'AudioSpecimen',
  data () {
    return {
      context: '',
      audioSamples: [
        {
          sound: new Howl({ src: require('@/assets/typeface/sound/divide.wav'),  onplay: () => this.soundStarted(0), onend: () => this.soundEnded(0) }),
          word: 'divide',
          activeImage: require('@/assets/typeface/fan/divideclick.png'),
          inactiveImage: require('@/assets/typeface/fan/divide.png'),
          isPlaying: false
        },
        {
          sound: new Howl({ src: require('@/assets/typeface/sound/flour.wav'), onplay: () => this.soundStarted(1), onend: () => this.soundEnded(1) }),
          word: 'flour',
          activeImage: require('@/assets/typeface/fan/flourclick.png'),
          inactiveImage: require('@/assets/typeface/fan/flour.png'),
          isPlaying: false
        },
        {
          sound: new Howl({ src: require('@/assets/typeface/sound/sleep.wav'), onplay: () => this.soundStarted(2), onend: () => this.soundEnded(2) }),
          word: 'sleep',
          activeImage: require('@/assets/typeface/fan/sleepclick.png'),
          inactiveImage: require('@/assets/typeface/fan/sleep.png'),
          isPlaying: false
        },
        {
          sound: new Howl({ src: require('@/assets/typeface/sound/grave.wav'), onplay: () => this.soundStarted(3), onend: () => this.soundEnded(3) }),
          word: 'grave',
          activeImage: require('@/assets/typeface/fan/graveclick.png'),
          inactiveImage: require('@/assets/typeface/fan/grave.png'),
          isPlaying: false
        },
        {
          sound: new Howl({ src: require('@/assets/typeface/sound/energy.wav'), onplay: () => this.soundStarted(4), onend: () => this.soundEnded(4) }),
          word: 'energetic',
          activeImage: require('@/assets/typeface/fan/energeticclick.png'),
          inactiveImage: require('@/assets/typeface/fan/energetic.png'),
          isPlaying: false
        },
        {
          sound: new Howl({ src: require('@/assets/typeface/sound/portion.wav'), onplay: () => this.soundStarted(5), onend: () => this.soundEnded(5) }),
          word: 'portion',
          activeImage: require('@/assets/typeface/fan/portionclick.png'),
          inactiveImage: require('@/assets/typeface/fan/portion.png'),
          isPlaying: false
        }
      ]
    }
  },
  methods: {
    playSound (index) {
      this.resumeAudioContext()
      this.audioSamples[index].sound.play()
    },
    soundStarted (index) {
      this.audioSamples[index].isPlaying = true
    },
    soundEnded (index) {
      this.audioSamples[index].isPlaying = false
    },
    resumeAudioContext () {
      if (this.context.state === 'suspended') {
        this.context.resume()
      }
    }
  },
  created () {
    let ctx = window.AudioContext || window.webkitAudioContext || false
    if (ctx) {
      this.context = new AudioContext
    } else {
      // eslint-disable-next-line
      console.log("Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox")
    }
  }
}
</script>

<style>
.audio {
  width: 100%;
}

.outerFlex {
  display: flex;
}

.audioContainer {
  display: flex;
  margin: 0 auto;
  position: relative;
}

.audioGridContainer {
  border: 1px solid #fcdd00;
  border-bottom: none;
  height: 200px;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  pointer-events: none;
}

.audioGridRow {
  border-bottom: 1px solid #fcdd00;
  height: 25%;
  box-sizing: border-box;
}

.label {
  text-transform: none;
  position: absolute;
  margin: 8px -60px;
}

#low {
  bottom: 10px;
}

.fan {
  text-align: center;
  z-index: 10;
}

.fanImage {
  height: 200px;
}

.buttonContainer {
  width: 820px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}

.fanButton {
  width: 100px;
  text-align: center;
}

.audioButton {
  display: block;
  margin: 20px auto 10px auto;
  width: 40px;
  height: 40px;
  border: 3px solid #DFB8AA;
  border-radius: 20px;
  transition: transform 0.2s;
  font-family: 'kabel-black';
}

.audioButton:focus {
  outline: none;
}

.audioButton:hover {
  transform: scale(1.15);
  cursor: url(/static/cursors/typefacecursorclick.png) 8 0, pointer;
}

.audioButtonActive {
  background: #DFB8AA;
  color: #F17236;fcdd00
  transform: scale(1.15);
}

.audioButtonInactive {
  background: none;
  color: #DFB8AA;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
