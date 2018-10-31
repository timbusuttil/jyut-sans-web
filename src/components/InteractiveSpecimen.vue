<template>
  <div class="interactiveSpecimen">
    <div class="gridContainer" v-show="showGrid">
      <div class="gridRow"></div>
      <div class="gridRow"></div>
      <div class="gridRow"></div>
      <div class="gridRow"></div>
    </div>
    <div class="imageContainer">
      <img v-for="(object, index) in objects" :key="index" class="image" :src="require('@/assets/typeface/letters/' + getCurrentImage(index))" @click="incrementWord(index)" @mouseover="setHover(index, true)" @mouseleave="setHover(index, false)">
    </div>
    <button type="button" name="button" @click="resetIndices">start again</button>
    <button type="button" name="button" @click="toggleGrid" style="float: right;">toggle grid</button>
    <h2 class="unselectable">
      <span v-for="(object, index) in objects" :key="index" class="word" :style="object.isHovered ? 'border-bottom: 2px solid black;' : 'border: none'" v-html="getCurrentStringHtml(index)"></span>
    </h2>
  </div>
</template>

<script>
import {Howl} from 'howler'

export default {
  name: 'InteractiveSpecimen',
  data () {
    return {
      showGrid: true,
      context: '',
      objects: [
        {
          images: ['b.png', 'c.png', 'd.png'],
          words: ['I', 'The moth', 'Starving' ],
          sounds: [
            new Howl({ src: require('@/assets/play/sound/I(ME).wav') }),
            new Howl({ src: require('@/assets/play/sound/moth.wav') }),
            new Howl({ src: require('@/assets/play/sound/starve.wav') })
          ],
          currentIndex: 0,
          isHovered: false
        },
        {
          images: ['b.png', 'c.png', 'd.png'],
          words: ['go up the', 'hurt the', 'want the', 'goes up the', 'hurts the', 'wants the'],
          sounds: [
            new Howl({ src: require('@/assets/play/sound/go up.wav') }),
            new Howl({ src: require('@/assets/play/sound/hurty.wav') }),
            new Howl({ src: require('@/assets/play/sound/want.wav') })
          ],
          currentIndex: 0,
          isHovered: false
        },
        {
          images: ['b.png', 'c.png', 'd.png'],
          words: ['leak', 'twisted', 'building'],
          sounds: [
            new Howl({ src: require('@/assets/play/sound/leak.wav') }),
            new Howl({ src: require('@/assets/play/sound/twist.wav') }),
            new Howl({ src: require('@/assets/play/sound/stairs.wav') })
          ],
          currentIndex: 0,
          isHovered: false
        },
        {
          images: ['b.png', 'c.png', 'd.png'],
          words: ['ladder', 'body', 'grape'],
          sounds: [
            new Howl({ src: require('@/assets/play/sound/ladder.wav') }),
            new Howl({ src: require('@/assets/play/sound/body.wav') }),
            new Howl({ src: require('@/assets/play/sound/grape.wav') })
          ],
          currentIndex: 0,
          isHovered: false
        }
      ]
    }
  },
  methods: {
    incrementWord (i) {
      this.objects[i].currentIndex < 2 ? this.objects[i].currentIndex ++ : this.objects[i].currentIndex = 0
      this.resumeAudioContext()
      this.objects[i].sounds[this.objects[i].currentIndex].play()
    },
    resumeAudioContext () {
      if (this.context.state === 'suspended') {
        this.context.resume()
      }
    },
    getCurrentString (i) {
      if (i === 1 && this.objects[0].currentIndex !== 0) {
        return this.objects[i].words[this.objects[i].currentIndex+3]
      } else if (this.objects[2].currentIndex === 2 && this.objects[3].currentIndex === 0 && i === 2) {
        return 'stairs'
      } else if (this.objects[2].currentIndex === 2 && this.objects[3].currentIndex === 0 && i === 3) {
        return ''
      } else {
        return this.objects[i].words[this.objects[i].currentIndex]
      }
    },
    getCurrentStringHtml (i) {
      if (i === 1 && this.objects[0].currentIndex !== 0) {
        return `&thinsp;${this.objects[i].words[this.objects[i].currentIndex+3]}&thinsp;`
      } else if (this.objects[2].currentIndex === 2 && this.objects[3].currentIndex === 0 && i === 2) {
        return `&thinsp;stairs&thinsp;`
      } else if (this.objects[2].currentIndex === 2 && this.objects[3].currentIndex === 0 && i === 3) {
        return ''
      } else {
        return `&thinsp;${this.objects[i].words[this.objects[i].currentIndex]}&thinsp;`
      }
    },
    getCurrentImage (i) {
      return this.objects[i].images[this.objects[i].currentIndex]
    },
    setHover (i, val) {
      this.objects[i].isHovered = val
    },
    toggleGrid () {
      this.showGrid = !this.showGrid
    },
    resetIndices () {
      this.objects.forEach((object) => {
        object.currentIndex = 0
      })
    }
  },
  created () {
    let ctx = window.AudioContext || window.webkitAudioContext || false
    if (ctx) {
      this.context = new AudioContext
    } else {
      console.log("Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox")
    }
  }
}
</script>

<style>
.interactiveSpecimen {
  border: 1px solid black;
  box-sizing: border-box;
  max-width: 800px;
  width: 100%;
}

.gridContainer {
  border: 1px solid #b5d9a9;
  border-bottom: none;
  height: 200px;
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
  position: absolute;
  pointer-events: none;
}

.gridRow {
  border-bottom: 1px solid green;
  height: 50px;
  box-sizing: border-box;
}

.imageContainer {
  width: 100%;
}

.image {
  width: 25%;
}

.unselectable {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.word:hover {
  border-bottom: 2px solid black !important;
}
</style>
