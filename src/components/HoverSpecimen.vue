<template>
  <div>
    <div class="specimenContainer">
      <div v-for="(character, index) in characters" :key="index" :class="character.class">{{character.char}}</div>
    </div>
    <h3>take a closer look</h3>
    <div class="hoverToggles">
      <div>
        <div class="rising toggle" @mouseover="focusCharacters('rising')" @mouseleave="focusCharacters('all')"></div>
        <h3>rising vowels</h3>
      </div>
      <div>
        <div class="falling toggle" @mouseover="focusCharacters('falling')" @mouseleave="focusCharacters('all')"></div>
        <h3>falling vowels</h3>
      </div>
      <div>
        <div class="stable toggle" @mouseover="focusCharacters('stable')" @mouseleave="focusCharacters('all')"></div>
        <h3>stable vowels</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoverSpecimen',
  data () {
    return {
      characters: [
        {
          char: 'a',
          src: '',
          class: 'character rising'
        },
        {
          char: 'a',
          src: '',
          class: 'character falling'
        },
        {
          char: 'a',
          src: '',
          class: 'character stable'
        },
        {
          char: 'b',
          src: '',
          class: 'character'
        },
        {
          char: 'c',
          src: '',
          class: 'character'
        },
        {
          char: 'd',
          src: '',
          class: 'character'
        },
        {
          char: 'e',
          src: '',
          class: 'character rising'
        },
        {
          char: 'e',
          src: '',
          class: 'character falling'
        },
        {
          char: 'e',
          src: '',
          class: 'character stable'
        },
        {
          char: 'f',
          src: '',
          class: 'character'
        },
        {
          char: 'g',
          src: '',
          class: 'character'
        },
        {
          char: 'h',
          src: '',
          class: 'character'
        },
        {
          char: 'i',
          src: '',
          class: 'character rising'
        },
        {
          char: 'i',
          src: '',
          class: 'character falling'
        },
        {
          char: 'i',
          src: '',
          class: 'character stable'
        },
        {
          char: 'j',
          src: '',
          class: 'character'
        },
        {
          char: 'k',
          src: '',
          class: 'character'
        },
        {
          char: 'l',
          src: '',
          class: 'character'
        },
        {
          char: 'm',
          src: '',
          class: 'character'
        },
        {
          char: 'n',
          src: '',
          class: 'character'
        },
        {
          char: 'o',
          src: '',
          class: 'character rising'
        },
        {
          char: 'o',
          src: '',
          class: 'character falling'
        },
        {
          char: 'o',
          src: '',
          class: 'character stable'
        },
        {
          char: 'p',
          src: '',
          class: 'character'
        },
        {
          char: 'q',
          src: '',
          class: 'character'
        },
        {
          char: 'r',
          src: '',
          class: 'character'
        },
        {
          char: 's',
          src: '',
          class: 'character'
        },
        {
          char: 't',
          src: '',
          class: 'character'
        },
        {
          char: 'u',
          src: '',
          class: 'character rising'
        },
        {
          char: 'u',
          src: '',
          class: 'character stable'
        },
        {
          char: 'u',
          src: '',
          class: 'character falling'
        },
        {
          char: 'v',
          src: '',
          class: 'character'
        },
        {
          char: 'w',
          src: '',
          class: 'character'
        },
        {
          char: 'x',
          src: '',
          class: 'character'
        },
        {
          char: 'y',
          src: '',
          class: 'character'
        },
        {
          char: 'z',
          src: '',
          class: 'character'
        },
        {
          char: '!',
          src: '',
          class: 'character'
        },
        {
          char: '?',
          src: '',
          class: 'character'
        },
        {
          char: '.',
          src: '',
          class: 'character'
        },
        {
          char: ',',
          src: '',
          class: 'character'
        }
      ]
    }
  },
  methods: {
    focusCharacters (mode) {
      if (mode !== 'all') {
        let elementList = document.querySelectorAll("div.character:not(." + mode + ")")
        elementList.forEach((currentElement) => {
          currentElement.style.opacity = 0
        })
      } else {
        let elementList = document.querySelectorAll("div.character")
        elementList.forEach((currentElement) => {
          currentElement.style.opacity = 1
        })
      }
    }
  }
}
</script>

<style>
.specimenContainer {
  width: 800px;
  height: 240px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}

.character {
  background: white;
  border: 1px solid black;
  transition: 0.2s;
}

.character:hover {
  transform: scale(1.5);
  z-index: 2;
}

.hoverToggles {
  width: 800px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.toggle {
  width: 80px;
  height: 80px;
}

.rising {
  background: pink;
}

.falling {
  background: gold;
}

.stable {
  background: tomato;
}
</style>
