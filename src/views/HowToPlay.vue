<template>
  <div class="howToPlay">
    <h1>how to play</h1>
    <div class="flexContainer">
      <div v-for="(item, index) in flexItems" class="flexItem" :key="index">
        <img class="featureImage" :src="item.image" :alt="item.alt">
        <p>{{item.text}}</p>
      </div>
    </div>
    <router-link to="/interactive">play</router-link>
  </div>
</template>

<script>
export default {
  name: 'howToPlay',
  data () {
    return {
      flexItems: [
        {
          image: require('../assets/typeface/eye.png'),
          alt: '',
          text: 'Interact with words by clicking on them'
        },
        {
          image: require('../assets/typeface/eye.png'),
          alt: '',
          text: 'Click on the tone levels to see how tone changes meaning'
        },
        {
          image: require('../assets/typeface/eye.png'),
          alt: '',
          text: 'Turn the grid on and off at any time'
        }
      ]
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

.flexContainer {
  display: flex;
  width: 100%;
  height: 200px;
}

.flexItem {
  flex: 1;
  text-align: center;
  padding: 0 20px;
}

.featureImage {
  border: 3px solid black;
  border-radius: 100%;
  object-fit: contain;
}
</style>
