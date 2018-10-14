<template>
  <div id="app" :style="{background: this.backgroundColour}">
    <div class="outerContainer">
      <div class="innerContainer" :style="{boxShadow: this.boxShadow}">
        <router-link to="/">
          <img :src="navImages.project.isHovered ? navImages.project.images[currentRouteIndex].hovered : navImages.project.images[currentRouteIndex].unhovered" class="nav" id="tl" @mouseover="navHover(navImages.project, true)" @mouseleave="navHover(navImages.project, false)">
        </router-link>
        <router-link to="/typeface">
          <img :src="navImages.typeface.isHovered ? navImages.typeface.images[currentRouteIndex].hovered : navImages.typeface.images[currentRouteIndex].unhovered" class="nav" id="tr" @mouseover="navHover(navImages.typeface, true)" @mouseleave="navHover(navImages.typeface, false)">
        </router-link>
        <router-link to="/how-to-play">
          <img :src="navImages.play.isHovered ? navImages.play.images[currentRouteIndex].hovered : navImages.play.images[currentRouteIndex].unhovered" class="nav" id="br" @mouseover="navHover(navImages.play, true)" @mouseleave="navHover(navImages.play, false)">
        </router-link>
        <router-link to="/interview">
          <img :src="navImages.video.isHovered ? navImages.video.images[currentRouteIndex].hovered : navImages.video.images[currentRouteIndex].unhovered" class="nav" id="bl" @mouseover="navHover(navImages.video, true)" @mouseleave="navHover(navImages.video, false)">
        </router-link>
        <router-view/>
      </div>
      <div style="margin-top: 20px; text-align: center;">
        <router-link to="/about" style="margin-top: 20px;">About</router-link>
        <p>{{this.$route.path}}</p>
        <p>{{this.currentRouteIndex}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      backgroundColours: ['#DFB8AA', '#F17236', '#FADD75', '#FADD75', '#FCC700', '#DFB8AA'],
      navHovers: [false, false, false, false],
      navImages: {
        project: {
          isHovered: false,
          images: [
            {
              // project
              unhovered: require('@/assets/nav/project-project.png'),
              hovered: require('@/assets/nav/project-project.png'),
              isHovered: false
            },
            {
              // typeface
              unhovered: require('@/assets/nav/project-typeface.png'),
              hovered: require('@/assets/nav/project-typeface-hover.png'),
              isHovered: false
            },
            {
              // howToPlay
              unhovered: require('@/assets/nav/project-typeface.png'), // replace with correct asset
              hovered: require('@/assets/nav/project-typeface-hover.png'), // replace with correct asset
              isHovered: false
            },
            {
              // play
              unhovered: require('@/assets/nav/project-typeface.png'), // replace with correct asset
              hovered: require('@/assets/nav/project-typeface-hover.png'), // replace with correct asset
              isHovered: false
            },
            {
              // video
              unhovered: require('@/assets/nav/project-video.png'),
              hovered: require('@/assets/nav/project-video-hover.png'),
              isHovered: false
            },
            {
              // about
              unhovered: require('@/assets/nav/project-typeface.png'), // replace with correct asset
              hovered: require('@/assets/nav/project-typeface-hover.png'), // replace with correct asset
              isHovered: false
            }
          ]
        },
        typeface: {
          isHovered: false,
          images: [
            {
              // project
              unhovered: require('@/assets/nav/typeface-project.png'),
              hovered: require('@/assets/nav/typeface-project-hover.png'),
              isHovered: false
            },
            {
              // typeface
              unhovered: require('@/assets/nav/typeface-typeface.png'),
              hovered: require('@/assets/nav/typeface-typeface.png'),
              isHovered: false
            },
            {
              // howToPlay
              unhovered: require('@/assets/nav/typeface-project.png'), // replace with correct asset
              hovered: require('@/assets/nav/typeface-project-hover.png'), // replace with correct asset
              isHovered: false
            },
            {
              // play
              unhovered: require('@/assets/nav/typeface-project.png'), // replace with correct asset
              hovered: require('@/assets/nav/typeface-project-hover.png'), // replace with correct asset
              isHovered: false
            },
            {
              // video
              unhovered: require('@/assets/nav/typeface-video.png'),
              hovered: require('@/assets/nav/typeface-video-hover.png'),
              isHovered: false
            },
            {
              // about
              unhovered: require('@/assets/nav/typeface-project.png'), // replace with correct asset
              hovered: require('@/assets/nav/typeface-project-hover.png'), // replace with correct asset
              isHovered: false
            }
          ]
        },
        play: {
          isHovered: false,
          images: [
            {
              // project
              unhovered: require('@/assets/nav/play-project.png'),
              hovered: require('@/assets/nav/play-project-hover.png'),
              isHovered: false
            },
            {
              // typeface
              unhovered: require('@/assets/nav/play-typeface.png'),
              hovered: require('@/assets/nav/play-typeface-hover.png'),
              isHovered: false
            },
            {
              // howToPlay
              unhovered: require('@/assets/nav/play-project.png'), // replace with correct asset
              hovered: require('@/assets/nav/play-project-hover.png'), // replace with correct asset
              isHovered: false
            },
            {
              // play
              unhovered: require('@/assets/nav/play-project.png'), // replace with correct asset
              hovered: require('@/assets/nav/play-project-hover.png'), // replace with correct asset
              isHovered: false
            },
            {
              // video
              unhovered: require('@/assets/nav/play-video.png'),
              hovered: require('@/assets/nav/play-video-hover.png'),
              isHovered: false
            },
            {
              // about
              unhovered: require('@/assets/nav/play-project.png'), // replace with correct asset
              hovered: require('@/assets/nav/play-project-hover.png'), // replace with correct asset
              isHovered: false
            }
          ]
        },
        video: {
          isHovered: false,
          images: [
            {
              // project
              unhovered: require('@/assets/nav/video-project.png'),
              hovered: require('@/assets/nav/video-project-hover.png'),
              isHovered: false
            },
            {
              // typeface
              unhovered: require('@/assets/nav/video-typeface.png'),
              hovered: require('@/assets/nav/video-typeface-hover.png'),
              isHovered: false
            },
            {
              // howToPlay
              unhovered: require('@/assets/nav/video-project.png'), // replace with correct asset
              hovered: require('@/assets/nav/video-project-hover.png'), // replace with correct asset
              isHovered: false
            },
            {
              // play
              unhovered: require('@/assets/nav/video-project.png'), // replace with correct asset
              hovered: require('@/assets/nav/video-project-hover.png'), // replace with correct asset
              isHovered: false
            },
            {
              // video
              unhovered: require('@/assets/nav/video-video.png'),
              hovered: require('@/assets/nav/video-video.png'),
              isHovered: false
            },
            {
              // about
              unhovered: require('@/assets/nav/video-project.png'), // replace with correct asset
              hovered: require('@/assets/nav/video-project-hover.png'), // replace with correct asset
              isHovered: false
            }
          ]
        },
      }
    }
  },
  computed: {
    currentRouteIndex () {
      return ['/', '/typeface', '/how-to-play', '/interactive', '/interview', '/about'].indexOf(this.$route.path)
    },
    backgroundColour () {
      return this.backgroundColours[this.currentRouteIndex]
    },
    boxShadow () {
      return '0 0 0 4px ' + this.backgroundColour + ', 0 0 0 8px black'
    }
  },
  methods: {
    navHover (navObject, val) {
      navObject.isHovered = val
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background: lightgreen;
  width: 100vw;
  height: 100vh;
  padding: 50px 100px;
  box-sizing: border-box;
  display: flex;
}

.outerContainer {
  position: relative;
  margin: auto auto;
  height: 620px;
  width: 960px;
}

.innerContainer {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 50px;
  border: 7px solid black;
  box-shadow: 0 0 0 4px lightgreen, 0 0 0 8px black;
}

.nav {
  position: absolute;
  width: 140px;
  height: 140px;
  z-index: 100;
}

#tl {
  top: -35px;
  left: -70px;
  transform: rotate(10deg);
}

#tr {
  top: -70px;
  right: -70px;
}

#bl {
  bottom: -35px;
  left: -70px;
}

#br {
  bottom: -35px;
  right: -70px;
}
</style>
