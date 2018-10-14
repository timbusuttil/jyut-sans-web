<template>
  <div>
    <div class="specimenContainer">
      <div v-for="(character, index) in characters" :key="index" :class="character.class">
        <img :src="require('@/assets/typeface/letters/' + character.src)" class="tileImage">
      </div>
    </div>
    <h3>take a closer look</h3>
    <div class="hoverToggles">
      <div>
        <img :src="currentHover === 'rising' ? require('@/assets/typeface/openeye.png') : require('@/assets/typeface/closedeye.png')" class="toggle" @mouseover="focusCharacters('rising')" @mouseleave="focusCharacters('all')">
        <h3>rising vowels</h3>
      </div>
      <div>
        <img :src="currentHover === 'falling' ? require('@/assets/typeface/openeye.png') : require('@/assets/typeface/closedeye.png')" class="toggle" @mouseover="focusCharacters('falling')" @mouseleave="focusCharacters('all')">
        <h3>falling vowels</h3>
      </div>
      <div>
        <img :src="currentHover === 'stable' ? require('@/assets/typeface/openeye.png') : require('@/assets/typeface/closedeye.png')" class="toggle" @mouseover="focusCharacters('stable')" @mouseleave="focusCharacters('all')">
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
      currentHover: '',
      characters: [
        {
          char: 'a',
          src: 'a rising.png',
          class: 'character rising'
        },
        {
          char: 'a',
          src: 'a falling.png',
          class: 'character falling'
        },
        {
          char: 'a',
          src: 'a stable.png',
          class: 'character stable'
        },
        {
          char: 'b',
          src: 'b.png',
          class: 'character'
        },
        {
          char: 'c',
          src: 'c.png',
          class: 'character'
        },
        {
          char: 'd',
          src: 'd.png',
          class: 'character'
        },
        {
          char: 'e',
          src: 'e rising.png',
          class: 'character rising'
        },
        {
          char: 'e',
          src: 'e falling.png',
          class: 'character falling'
        },
        {
          char: 'e',
          src: 'e stable.png',
          class: 'character stable'
        },
        {
          char: 'f',
          src: 'f.png',
          class: 'character'
        },
        {
          char: 'g',
          src: 'g.png',
          class: 'character'
        },
        {
          char: 'h',
          src: 'h.png',
          class: 'character'
        },
        {
          char: 'i',
          src: 'i rising.png',
          class: 'character rising'
        },
        {
          char: 'i',
          src: 'i falling.png',
          class: 'character falling'
        },
        {
          char: 'i',
          src: 'i stable.png',
          class: 'character stable'
        },
        {
          char: 'j',
          src: 'j.png',
          class: 'character'
        },
        {
          char: 'k',
          src: 'k.png',
          class: 'character'
        },
        {
          char: 'l',
          src: 'l.png',
          class: 'character'
        },
        {
          char: 'm',
          src: 'm.png',
          class: 'character'
        },
        {
          char: 'n',
          src: 'n.png',
          class: 'character'
        },
        {
          char: 'o',
          src: 'o rising.png',
          class: 'character rising'
        },
        {
          char: 'o',
          src: 'o falling.png',
          class: 'character falling'
        },
        {
          char: 'o',
          src: 'o stable.png',
          class: 'character stable'
        },
        {
          char: 'p',
          src: 'p.png',
          class: 'character'
        },
        {
          char: 'q',
          src: 'q.png',
          class: 'character'
        },
        {
          char: 'r',
          src: 'r.png',
          class: 'character'
        },
        {
          char: 's',
          src: 's.png',
          class: 'character'
        },
        {
          char: 't',
          src: 't.png',
          class: 'character'
        },
        {
          char: 'u',
          src: 'u rising.png',
          class: 'character rising'
        },
        {
          char: 'u',
          src: 'u stable.png',
          class: 'character stable'
        },
        {
          char: 'u',
          src: 'u falling.png',
          class: 'character falling'
        },
        {
          char: 'v',
          src: 'v.png',
          class: 'character'
        },
        {
          char: 'w',
          src: 'w.png',
          class: 'character'
        },
        {
          char: 'x',
          src: 'x.png',
          class: 'character'
        },
        {
          char: 'y',
          src: 'y.png',
          class: 'character'
        },
        {
          char: 'z',
          src: 'z.png',
          class: 'character'
        },
        {
          char: '!',
          src: 'exclamation.png',
          class: 'character'
        },
        {
          char: '?',
          src: 'question.png',
          class: 'character'
        },
        {
          char: '.',
          src: 'period.png',
          class: 'character'
        },
        {
          char: ',',
          src: 'comma.png',
          class: 'character'
        }
      ]
    }
  },
  methods: {
    focusCharacters (mode) {
      if (mode !== 'all') {
        this.currentHover = mode
        let elementList = document.querySelectorAll("div.character:not(." + mode + ")")
        elementList.forEach((currentElement) => {
          currentElement.style.opacity = 0
        })
      } else {
        this.currentHover = ''
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
  width: 700px;
  height: 280px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}

.tileImage {
  width: 100%;
  height: 100%;
}

.character {
  background: rgb(241, 114, 54);
  width: 70px;
  height: 70px;
  /* border: 1px solid black; */
  transition: 0.2s;
}

.character:hover {
  transform: scale(1.5);
  z-index: 2;
}

.hoverToggles {
  width: 700px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.toggle {
  width: 80px;
  height: 80px;
}
/* .rising {
  background: pink;
}

.falling {
  background: gold;
}

.stable {
  background: tomato;
} */
</style>
