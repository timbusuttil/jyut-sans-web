<template>
  <div>
    <div class="gridContainer" v-show="showGrid">
      <div class="gridRow"></div>
      <div class="gridRow"></div>
      <div class="gridRow"></div>
      <div class="gridRow"></div>
    </div>
    <div>
      <img v-for="(object, index) in objects" :key="index" class="image" :src="require('@/assets/typeface/letters/' + getCurrentImage(index))" :style="currentStyles[index]" @click="incrementWord(index)" @mouseover="setHover(index, true)" @mouseleave="setHover(index, false)">
      <!-- <img v-for="(object, index) in objects" :key="index" class="image" :src="require('@/assets/typeface/letters/' + getCurrentImage(index))" style="background: white;" @click="incrementWord(index)" @mouseover="setHover(index, true)" @mouseleave="setHover(index, false)"> -->
    </div>
    <button type="button" name="button" @click="resetIndices">start again</button>
    <button type="button" name="button" @click="toggleGrid" style="float: right;">toggle grid</button>
    <h2 class="unselectable">
      <span v-for="(object, index) in objects" :key="index" :style="object.isHovered ? 'border-bottom: 2px solid black;' : 'border: none'">&#8239;{{getCurrentString(index)}}&#8239;</span>
    </h2>
    <!-- <button type="button" name="button" @click="incrementWord(0)">first</button>
    <button type="button" name="button" @click="incrementWord(1)">second</button>
    <button type="button" name="button" @click="incrementWord(2)">third</button>
    <button type="button" name="button" @click="incrementWord(3)">fourth</button> -->
  </div>
</template>

<script>
export default {
  name: 'InteractiveSpecimen',
  data () {
    return {
      currentStyles: ['', '', '', ''],
      currentIndices: [0, 0, 0, 0],
      showGrid: true,
      objects: [
        {
          styles: ['orange', 'white', 'pink', 'purple', 'gray'],
          images: ['b.png', 'c.png', 'd.png', 'f.png', 'g.png'],
          words: ['the cat', 'my shoes', 'a bee', 'a spider', 'my dog'],
          isHovered: false
        },
        {
          styles: ['orange', 'white', 'pink', 'purple'],
          images: ['b.png', 'c.png', 'd.png', 'f.png'],
          words: ['sat on', 'ate', 'frightened', 'destroyed'],
          isHovered: false
        },
        {
          styles: ['orange', 'white', 'pink', 'purple'],
          images: ['b.png', 'c.png', 'd.png', 'f.png'],
          words: ['the delicious', 'the scary', 'the big', 'the small'],
          isHovered: false
        },
        {
          styles: ['orange', 'white', 'pink'],
          images: ['b.png', 'c.png', 'd.png'],
          words: ['horse', 'apple', 'goose'],
          isHovered: false
        }
      ]
    }
  },
  methods: {
    incrementWord (i) {
      this.currentIndices[i] < this.objects[i].words.length-1 ? this.currentIndices[i] ++ : this.currentIndices[i] = 0
      this.currentStyles = this.getCurrentStyles()
    },
    getCurrentString (index) {
      return this.objects[index].words[this.currentIndices[index]]
    },
    getCurrentImage (index) {
      return this.objects[index].images[this.currentIndices[index]]
    },
    getCurrentStyles () {
      return [
        'background: ' + this.objects[0].styles[this.currentIndices[0]] + ';',
        'background: ' + this.objects[1].styles[this.currentIndices[1]] + ';',
        'background: ' + this.objects[2].styles[this.currentIndices[2]] + ';',
        'background: ' + this.objects[3].styles[this.currentIndices[3]] + ';',
      ]
    },
    setHover (index, val) {
      this.objects[index].isHovered = val
    },
    toggleGrid () {
      this.showGrid = !this.showGrid
    },
    resetIndices () {
      this.currentIndices = [0, 0, 0, 0]
      this.currentStyles = this.getCurrentStyles()
    }
  },
  created () {
    this.currentStyles = this.getCurrentStyles()
  }
}
</script>

<style>
.gridContainer {
  border: 1px solid green;
  border-bottom: none;
  height: 200px;
  width: 800px;
  position: absolute;
  pointer-events: none;
}

.gridRow {
  border-bottom: 1px solid green;
  height: 50px;
  box-sizing: border-box;
}

.image {
  background: red;
  width: 200px;
  height: 200px;
  display: inline-block;
}

.unselectable {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
