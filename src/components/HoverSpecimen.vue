<template>
  <div>
    <div class="specimenContainer">
      <div class="character rising">a</div>
      <div class="character rising">b</div>
      <div class="character falling">c</div>
      <div class="character falling">d</div>
      <div class="character stable">e</div>
      <div class="character stable">f</div>
      <div class="character">g</div>
      <div class="character">h</div>
      <div class="character">i</div>
      <div class="character">j</div>
      <div class="character">k</div>
      <div class="character">l</div>
      <div class="character">m</div>
      <div class="character">n</div>
      <div class="character">o</div>
      <div class="character">p</div>
      <div class="character">q</div>
      <div class="character">r</div>
      <div class="character">s</div>
      <div class="character">t</div>
      <div class="character">u</div>
      <div class="character">v</div>
      <div class="character">w</div>
      <div class="character">x</div>
      <div class="character">y</div>
      <div class="character">z</div>
      <div class="character">!</div>
      <div class="character">?</div>
      <div class="character">.</div>
      <div class="character">,</div>
    </div>
    <div class="hoverToggles">
      <div class="risingToggle" @mouseover="focusCharacters('rising')" @mouseleave="focusCharacters('all')"></div>
      <div class="fallingToggle" @mouseover="focusCharacters('falling')" @mouseleave="focusCharacters('all')"></div>
      <div class="stableToggle" @mouseover="focusCharacters('stable')" @mouseleave="focusCharacters('all')"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoverSpecimen',
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
}

.risingToggle {
  width: 80px;
  height: 80px;
  background: pink;
  margin: 20px 20px 0 0;
}

.fallingToggle {
  width: 80px;
  height: 80px;
  background: gold;
  margin: 20px 20px 0 0;
}

.stableToggle {
  width: 80px;
  height: 80px;
  background: tomato;
  margin: 20px 20px 0 0;
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
