<template>
  <div class="interactiveSpecimen">
    <div class="specimenContainer">
      <div class="gridContainer" v-show="showGrid">
        <div class="gridRow"></div>
        <div class="gridRow"></div>
        <div class="gridRow"></div>
        <div class="gridRow"></div>
      </div>
      <div class="imageContainer">
        <img v-for="(object, index) in objects" :key="index" class="image" :src="require('@/assets/play/images/' + getCurrentImage(index))" @click="incrementWord(index)" @mouseover="setHover(index, true)" @mouseleave="setHover(index, false)">
      </div>
    </div>
    <button class="interactiveButton" type="button" name="button" @click="resetIndices">start again</button>
    <button class="interactiveButton" type="button" name="button" @click="toggleGrid" style="float: right;">{{ showGrid ? 'grid off' : 'grid on' }}</button>
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
          images: ['i.png', 'moth.png', 'starve.png'],
          hoverImages: ['i hover.png', 'moth hover.png', 'starve hover.png'],
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
          images: ['go up.png', 'hurt.png', 'want.png'],
          hoverImages: ['go up hover.png', 'hurt hover.png', 'want hover.png'],
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
          images: ['leak.png', 'twist.png', 'building.png'],
          hoverImages: ['leak hover.png', 'twist hover.png', 'building hover.png'],
          words: ['leak', 'twisted', 'building'],
          sounds: [
            new Howl({ src: require('@/assets/play/sound/leak.wav') }),
            new Howl({ src: require('@/assets/play/sound/twist.wav') }),
            new Howl({ src: require('@/assets/play/sound/building.wav') })
          ],
          currentIndex: 0,
          isHovered: false
        },
        {
          images: ['ladder.png', 'body.png', 'grape.png'],
          hoverImages: ['ladder hover.png', 'body hover.png', 'grape hover.png'],
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
      if (this.objects[i].isHovered) {
        return this.objects[i].hoverImages[this.objects[i].currentIndex]
      } else {
        return this.objects[i].images[this.objects[i].currentIndex]
      }
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
      // eslint-disable-next-line
      console.log("Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox")
    }
  }
}
</script>

<style>
.interactiveSpecimen {
  max-width: 900px;
  width: 100%;
}

.specimenContainer {
  /* width: 100%; */
  display: flex;
  margin: 0 auto;
  position: relative;
}

.imageContainer {
  margin: 0 auto;
}

.image {
  height: 210px;
  object-fit: contain;
}

.gridContainer {
  border: 1px solid #405766;
  border-bottom: none;
  height: 200px;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  pointer-events: none;
  margin: 3px 0 5px 0;
}

.gridRow {
  border-bottom: 1px solid #405766;
  height: 25%;
  box-sizing: border-box;
}

.unselectable {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 100px;
  margin: 0;
}

.word:hover {
  border-bottom: 2px solid black !important;
}

.interactiveButton {
  padding: 5px 15px;
  background: none;
  border: 3px solid #405766;
  color: #405766;
  border-radius: 20px;
  margin: 20px 0;
}

.interactiveButton:hover {
  background: #405766;
  color: #b5d9a9;
}

.interactiveButton:focus {
  outline: none;
}

@media screen and (max-width: 1319.98px) {
  .image {
    height: 158px;
  }

  .gridContainer {
    height: 150px;
    margin: 3px 0 3px 0;
  }
}

@media screen and (max-width: 1119.98px) {
  .image {
    height: 63px;
  }

  .gridContainer {
    height: 60px;
    margin: 1.5px 0 1.5px 0;
  }
}
</style>
