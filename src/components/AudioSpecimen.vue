<template>
  <div>
    <h3>click on the numbers to hear the tones</h3>
    <div class="flexContainer">
      <div v-for="(sound, index) in audioSamples" :key="index" class="fan">
        <img :src="sound.isPlaying ? sound.activeImage : sound.inactiveImage" style="width: 100px; height: 100px;">
        <button :class="sound.isPlaying ? 'audioButton audioButtonActive' : 'audioButton audioButtonInactive'" type="button" name="button" @click="playSound(index)">{{index}}</button>
        <transition name="fade">
          <p v-show="sound.isPlaying">{{ sound.word }}</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import {Howl, Howler} from 'howler'

export default {
  name: 'AudioSpecimen',
  data () {
    return {
      audioSamples: [
        {
          sound: new Howl({ src: [require('@/assets/typeface/sound/1 do.mp3')],  onplay: () => this.soundStarted(0), onend: () => this.soundEnded(0) }),
          word: 'divide',
          activeImage: require('@/assets/typeface/openeye.png'),
          inactiveImage: require('@/assets/typeface/closedeye.png'),
          isPlaying: false
        },
        {
          sound: new Howl({ src: ['http://www.soundjay.com/button/beep-03.wav'], onplay: () => this.soundStarted(1), onend: () => this.soundEnded(1) }),
          word: 'flour',
          activeImage: require('@/assets/typeface/openeye.png'),
          inactiveImage: require('@/assets/typeface/closedeye.png'),
          isPlaying: false
        },
        {
          sound: new Howl({ src: ['http://www.soundjay.com/button/beep-04.wav'], onplay: () => this.soundStarted(2), onend: () => this.soundEnded(2) }),
          word: 'sleep',
          activeImage: require('@/assets/typeface/openeye.png'),
          inactiveImage: require('@/assets/typeface/closedeye.png'),
          isPlaying: false
        },
        {
          sound: new Howl({ src: ['http://www.soundjay.com/button/beep-05.wav'], onplay: () => this.soundStarted(3), onend: () => this.soundEnded(3) }),
          word: 'grave',
          activeImage: require('@/assets/typeface/openeye.png'),
          inactiveImage: require('@/assets/typeface/closedeye.png'),
          isPlaying: false
        },
        {
          sound: new Howl({ src: ['http://www.soundjay.com/button/beep-06.wav'], onplay: () => this.soundStarted(4), onend: () => this.soundEnded(4) }),
          word: 'energetic',
          activeImage: require('@/assets/typeface/openeye.png'),
          inactiveImage: require('@/assets/typeface/closedeye.png'),
          isPlaying: false
        },
        {
          sound: new Howl({ src: ['http://www.soundjay.com/button/beep-07.wav'], onplay: () => this.soundStarted(5), onend: () => this.soundEnded(5) }),
          word: 'portion',
          activeImage: require('@/assets/typeface/openeye.png'),
          inactiveImage: require('@/assets/typeface/closedeye.png'),
          isPlaying: false
        }
      ]
    }
  },
  methods: {
    playSound (index) {
      this.audioSamples[index].sound.play()
    },
    soundStarted (index) {
      // console.log('sound started', index)
      this.audioSamples[index].isPlaying = true
    },
    soundEnded (index) {
      // console.log('sound ended', index)
      this.audioSamples[index].isPlaying = false
    }
  },
  watch: {
    audioIsPlaying: function (val, oldVal) {
      console.log(val)
      console.log(oldVal)
    }
  }
}
</script>

<style>
.flexContainer {
  display: flex;
}

.fan {
  height: 300px;
  text-align: center;
  flex-grow: 1;
}

.audioButton {
  display: block;
  margin: 20px auto 10px auto;
  width: 40px;
  height: 40px;
  border: 3px solid #DFB8AA;
  border-radius: 20px;
}

.audioButton:focus {
  outline: none;
}

.audioButtonActive {
  background: green;
  background: #DFB8AA;
  color: #F17236;
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
