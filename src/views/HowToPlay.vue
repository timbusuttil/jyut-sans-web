<template>
  <div class="howToPlay">
    <h2 style="color: #405766; margin-bottom: 30px;">How to play</h2>
    <div class="howFlexContainer">
      <div v-for="(item, index) in flexItems" class="flexItem" :key="index">
        <h1 style="color: #405766; margin-top: 0;">{{index+1}}</h1>
        <p style="color: #2d3c28;">{{item.text}}</p>
      </div>
    </div>
    <img class="startButton" :src="require('@/assets/nav/start.png')" alt="Start!" @click="navigate('/interactive')">
  </div>
</template>

<script>
export default {
  name: 'howToPlay',
  data () {
    return {
      flexItems: [
        {
          text: 'Click on the Cantonese words to change their meaning'
        },
        {
          text: 'Hear the Cantonese words by clicking on the underlined English counterparts'
        },
        {
          text: 'Find a word combination that makes the most ridiculous sentence!'
        }
      ]
    }
  },
  methods: {
    navigate (path) {
      this.$router.push(path)
    }
  }
}

</script>

<style>
.howToPlay {
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.howFlexContainer {
  display: flex;
  width: 100%;
  margin-bottom: 40px;
}

.flexItem {
  flex: 1;
  text-align: center;
  padding: 0 20px;
}

.featureImage {
  width: 100%;
  max-width: 150px;
  border: 3px solid black;
  border-radius: 100%;
  object-fit: contain;
}

.startButton {
  width: 200px;
  margin: 0 auto;
  transition: 0.2s;
}

.startButton:hover {
  transform: translateX(10px);
  cursor: pointer;
}
</style>
