<template>
  <div class="interactiveSpecimen">
    <!-- <div class="gridContainer" v-show="showGrid">
      <div class="gridRow"></div>
      <div class="gridRow"></div>
      <div class="gridRow"></div>
      <div class="gridRow"></div>
    </div> -->
    <div class="imageContainer">
      <img v-for="(object, index) in objects" :key="index" class="image" :src="require('@/assets/typeface/letters/' + getCurrentImage(index))" @click="incrementWord(index)" @mouseover="setHover(index, true)" @mouseleave="setHover(index, false)">
    </div>
    <button type="button" name="button" @click="resetIndices">start again</button>
    <button type="button" name="button" @click="toggleGrid" style="float: right;">toggle grid</button>
    <h2 class="unselectable">
      <span v-for="(object, index) in objects" :key="index" class="word" :style="object.isHovered ? 'border-bottom: 2px solid black;' : 'border: none'">&#8239;{{getCurrentString(index)}}&#8239;</span>
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
      objects: [
        {
          styles: ['orange', 'white', 'pink', 'purple', 'gray'],
          images: ['b.png', 'c.png', 'd.png', 'f.png', 'g.png'],
          words: ['the cat', 'my shoes', 'a bee', 'a spider', 'my dog'],
          sounds: [
            new Howl({ src: require('@/assets/play/sound/body.wav') }),
            new Howl({ src: require('@/assets/play/sound/go up.wav') }),
            new Howl({ src: require('@/assets/play/sound/grape.wav') }),
            new Howl({ src: require('@/assets/play/sound/hurty.wav') }),
            new Howl({ src: require('@/assets/play/sound/I(ME).wav') })
          ],
          currentIndex: 0,
          isHovered: false
        },
        {
          styles: ['orange', 'white', 'pink', 'purple'],
          images: ['b.png', 'c.png', 'd.png', 'f.png'],
          words: ['sat on', 'ate', 'frightened', 'destroyed'],
          sounds: [
            new Howl({ src: require('@/assets/play/sound/body.wav') }),
            new Howl({ src: require('@/assets/play/sound/go up.wav') }),
            new Howl({ src: require('@/assets/play/sound/grape.wav') }),
            new Howl({ src: require('@/assets/play/sound/hurty.wav') })
          ],
          currentIndex: 0,
          isHovered: false
        },
        {
          styles: ['orange', 'white', 'pink', 'purple'],
          images: ['b.png', 'c.png', 'd.png', 'f.png'],
          words: ['the delicious', 'the scary', 'the big', 'the small'],
          sounds: [
            new Howl({ src: require('@/assets/play/sound/body.wav') }),
            new Howl({ src: require('@/assets/play/sound/go up.wav') }),
            new Howl({ src: require('@/assets/play/sound/grape.wav') }),
            new Howl({ src: require('@/assets/play/sound/hurty.wav') })
          ],
          currentIndex: 0,
          isHovered: false
        },
        {
          styles: ['orange', 'white', 'pink'],
          images: ['b.png', 'c.png', 'd.png'],
          words: ['horse', 'apple', 'goose'],
          sounds: [
            new Howl({ src: require('@/assets/play/sound/body.wav') }),
            new Howl({ src: require('@/assets/play/sound/go up.wav') }),
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
      this.objects[i].currentIndex < this.objects[i].words.length-1 ? this.objects[i].currentIndex ++ : this.objects[i].currentIndex = 0
      this.objects[i].sounds[this.objects[i].currentIndex].play()
    },
    getCurrentString (i) {
      return this.objects[i].words[this.objects[i].currentIndex]
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
  }
}
</script>

<style>
.interactiveSpecimen {
  border: 1px solid black;
  box-sizing: border-box;
  max-width: 800px;
}

.gridContainer {
  border: 1px solid green;
  border-bottom: none;
  height: 200px;
  width: 100%;
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
