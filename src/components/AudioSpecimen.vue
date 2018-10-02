<template>
  <div>
    <h3>click on the numbers to hear the tones</h3>
    <button v-for="(sound, index) in audioSamples" type="button" name="button" @click="playSound(index)">{{index}}</button>
  </div>
</template>

<script>
export default {
  name: 'AudioSpecimen',
  data () {
    return {
      audioSamples: [
        new Audio('http://www.soundjay.com/button/beep-02.wav'),
        new Audio('http://www.soundjay.com/button/beep-03.wav'),
        new Audio('http://www.soundjay.com/button/beep-04.wav'),
        new Audio('http://www.soundjay.com/button/beep-05.wav'),
        new Audio('http://www.soundjay.com/button/beep-06.wav'),
        new Audio('http://www.soundjay.com/button/beep-07.wav'),
      ]
    }
  },
  methods: {
    playSound (index) {
      this.audioSamples[index].play()
    }
  }
}
</script>

<style>

</style>
