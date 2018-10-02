<template>
  <div>
    <div class="specimenContainer">
      <div class="character rising">a</div>
      <div class="character rising">b</div>
      <div class="character falling">c</div>
      <div class="character falling">d</div>
      <div class="character stable">e</div>
      <div class="character stable">f</div>
      <div class="character stable">g</div>
      <div class="character stable">h</div>
      <div class="character">i</div>
      <div class="character falling">j</div>
      <div class="character">k</div>
      <div class="character falling">l</div>
      <div class="character">m</div>
      <div class="character">n</div>
      <div class="character rising">o</div>
      <div class="character">p</div>
      <div class="character stable">q</div>
      <div class="character">r</div>
      <div class="character">s</div>
      <div class="character stable">t</div>
      <div class="character rising">u</div>
      <div class="character">v</div>
      <div class="character">w</div>
      <div class="character">x</div>
      <div class="character">y</div>
      <div class="character falling">z</div>
      <div class="character rising">!</div>
      <div class="character">?</div>
      <div class="character">.</div>
      <div class="character">,</div>
    </div>
    <div class="hoverToggles">
      <div class="rising toggle" @mouseover="focusCharacters('rising')" @mouseleave="focusCharacters('all')"></div>
      <div class="falling toggle" @mouseover="focusCharacters('falling')" @mouseleave="focusCharacters('all')"></div>
      <div class="stable toggle" @mouseover="focusCharacters('stable')" @mouseleave="focusCharacters('all')"></div>
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
  z-index: 2;
}

.toggle {
  width: 80px;
  height: 80px;
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
