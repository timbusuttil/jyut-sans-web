<template>
  <div>
    <h3>click on the numbers to hear the tones</h3>
    <button type="button" name="button" @click="playSound">1</button>
  </div>
</template>

<script>
export default {
  name: 'AudioSpecimen',
  data () {
    return {
      // audio: new Audio('@/src/assets/1 do.mp3')
    }
  },
  methods: {
    // playSound () {
    //   this.audio.play()
    // }
  }
}
</script>

<style>

</style>
