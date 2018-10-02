<template>
  <div>
    <div class="gridContainer">
      <div class="gridRow"></div>
      <div class="gridRow"></div>
      <div class="gridRow"></div>
      <div class="gridRow"></div>
    </div>
    <div class="image" :style="currentStyles[0] + 'margin-left: -45px'" @click="incrementWord(0)"></div>
    <div class="image" :style="currentStyles[1]" @click="incrementWord(1)"></div>
    <div class="image" :style="currentStyles[2]" @click="incrementWord(2)"></div>
    <div class="image" :style="currentStyles[3]" @click="incrementWord(3)"></div>
    <h2 class="unselectable">{{currentString}}</h2>
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
      currentString: '',
      currentStyles: ['', '', '', ''],
      currentIndices: [0, 0, 0, 0],
      objects: [
        {
          images: ['black', 'white', 'pink', 'purple', 'gray'],
          words: ['the cat', 'my shoes', 'a bee', 'a spider', 'my dog']
        },
        {
          images: ['black', 'white', 'pink', 'purple'],
          words: ['sat on', 'ate', 'frightened', 'destroyed']
        },
        {
          images: ['black', 'white', 'pink', 'purple'],
          words: ['the delicious', 'the scary', 'the big', 'the small']
        },
        {
          images: ['black', 'white', 'pink'],
          words: ['horse', 'apple', 'goose']
        }
      ]
    }
  },
  methods: {
    incrementWord (i) {
      this.currentIndices[i] < this.objects[i].words.length-1 ? this.currentIndices[i] ++ : this.currentIndices[i] = 0
      this.currentString = this.getCurrentString()
      this.currentStyles = this.getCurrentStyles()
    },
    getCurrentString () {
      return this.objects[0].words[this.currentIndices[0]] + ' ' +
             this.objects[1].words[this.currentIndices[1]] + ' ' +
             this.objects[2].words[this.currentIndices[2]] + ' ' +
             this.objects[3].words[this.currentIndices[3]]
    },
    getCurrentStyles () {
      return [
        'background: ' + this.objects[0].images[this.currentIndices[0]] + ';',
        'background: ' + this.objects[1].images[this.currentIndices[1]] + ';',
        'background: ' + this.objects[2].images[this.currentIndices[2]] + ';',
        'background: ' + this.objects[3].images[this.currentIndices[3]] + ';',
      ]
    }
  },
  created () {
    this.currentString = this.getCurrentString()
    this.currentStyles = this.getCurrentStyles()
  }
}
</script>

<style>
.gridContainer {
  border: 1px solid red;
  border-bottom: none;
  height: 200px;
  width: 800px;
  position: absolute;
  pointer-events: none;
}

.gridRow {
  border-bottom: 1px solid red;
  height: 50px;
  box-sizing: border-box;
}

.image {
  background: pink;
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
