<template>
  <div>
    <h3>click on the numbers to hear the tones</h3>
    <div v-for="(sound, index) in audioSamples" :key="index" style="display: inline;">
      <img :src="sound.isPlaying ? sound.activeImage : sound.inactiveImage" style="width: 30px; height: 30px;">
      <button type="button" name="button" @click="playSound(index)">{{index}}</button>
      <p v-if="sound.isPlaying" style="display: inline;">{{ sound.word }}</p>
      <!-- <p v-else>{{ index }} not playing</p> -->
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
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
          activeImage: require('@/assets/typeface/open eye.png'),
          inactiveImage: require('@/assets/typeface/eye.png'),
          isPlaying: false
        },
        {
          sound: new Howl({ src: ['http://www.soundjay.com/button/beep-03.wav'], onplay: () => this.soundStarted(1), onend: () => this.soundEnded(1) }),
          word: 'flour',
          activeImage: require('@/assets/typeface/open eye.png'),
          inactiveImage: require('@/assets/typeface/eye.png'),
          isPlaying: false
        },
        {
          sound: new Howl({ src: ['http://www.soundjay.com/button/beep-04.wav'], onplay: () => this.soundStarted(2), onend: () => this.soundEnded(2) }),
          word: 'sleep',
          activeImage: require('@/assets/typeface/open eye.png'),
          inactiveImage: require('@/assets/typeface/eye.png'),
          isPlaying: false
        },
        {
          sound: new Howl({ src: ['http://www.soundjay.com/button/beep-05.wav'], onplay: () => this.soundStarted(3), onend: () => this.soundEnded(3) }),
          word: 'grave',
          activeImage: require('@/assets/typeface/open eye.png'),
          inactiveImage: require('@/assets/typeface/eye.png'),
          isPlaying: false
        },
        {
          sound: new Howl({ src: ['http://www.soundjay.com/button/beep-06.wav'], onplay: () => this.soundStarted(4), onend: () => this.soundEnded(4) }),
          word: 'energetic',
          activeImage: require('@/assets/typeface/open eye.png'),
          inactiveImage: require('@/assets/typeface/eye.png'),
          isPlaying: false
        },
        {
          sound: new Howl({ src: ['http://www.soundjay.com/button/beep-07.wav'], onplay: () => this.soundStarted(5), onend: () => this.soundEnded(5) }),
          word: 'portion',
          activeImage: require('@/assets/typeface/open eye.png'),
          inactiveImage: require('@/assets/typeface/eye.png'),
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

</style>
