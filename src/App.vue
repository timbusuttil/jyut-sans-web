<template>
  <div id="app" :style="{background: this.backgroundColour}" :class="cursorClassObject">
    <div class="desktop">
      <div class="outerContainer">
        <div class="innerContainer" :style="{borderColor: this.borderColour, boxShadow: this.boxShadow}">
          <router-link to="/">
            <img class="nav rectangle" id="tl" :src="navImages.project.isHovered ? navImages.project.images[currentRouteIndex].hovered : navImages.project.images[currentRouteIndex].unhovered" @mouseover="navHover(navImages.project, true)" @mouseleave="navHover(navImages.project, false)" :class="cursorClickClassObject">
          </router-link>
          <router-link to="/typeface">
            <img class="nav circle" id="tr" :src="navImages.typeface.isHovered ? navImages.typeface.images[currentRouteIndex].hovered : navImages.typeface.images[currentRouteIndex].unhovered" @mouseover="navHover(navImages.typeface, true)" @mouseleave="navHover(navImages.typeface, false)" :class="cursorClickClassObject">
          </router-link>
          <router-link to="/how-to-play">
            <img class="nav rounded" id="br" :src="navImages.play.isHovered ? navImages.play.images[currentRouteIndex].hovered : navImages.play.images[currentRouteIndex].unhovered" @mouseover="navHover(navImages.play, true)" @mouseleave="navHover(navImages.play, false)" :class="cursorClickClassObject">
          </router-link>
          <router-link to="/interview">
            <img class="nav circle" id="bl" :src="navImages.video.isHovered ? navImages.video.images[currentRouteIndex].hovered : navImages.video.images[currentRouteIndex].unhovered" @mouseover="navHover(navImages.video, true)" @mouseleave="navHover(navImages.video, false)" :class="cursorClickClassObject">
          </router-link>
          <router-view/>
        </div>
      </div>
    </div>
    <div class="mobile">
      <MobileHome />
    </div>
  </div>
</template>

<script>
import MobileHome from '@/views/MobileHome.vue'

export default {
  name: 'app',
  components: {
    MobileHome
  },
  data () {
    return {
      backgroundColours: ['#dfb8aa', '#f17236', '#b5d9a9', '#b5d9a9', '#fcc700'],
      borderColours: ['#440f23', '#fcdd00', '#2d3c28', '#2d3c28', '#f17236'],
      cursors: [
        {
          default: 'projectcursor',
          pointer: 'projectcursorclick'
        },
        {
          default: 'typefacecursor',
          pointer: 'typefacecursorclick'
        },
        {
          default: 'playcursor',
          pointer: 'playcursorclick'
        },
        {
          default: 'playcursor',
          pointer: 'playcursorclick'
        },
        {
          default: 'videocursor',
          pointer: 'videocursorclick'
        }
      ],
      navIsHovered: false,
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
              unhovered: require('@/assets/nav/project-play.png'),
              hovered: require('@/assets/nav/project-play-hover.png'),
              isHovered: false
            },
            {
              // play
              unhovered: require('@/assets/nav/project-play.png'),
              hovered: require('@/assets/nav/project-play-hover.png'),
              isHovered: false
            },
            {
              // video
              unhovered: require('@/assets/nav/project-video.png'),
              hovered: require('@/assets/nav/project-video-hover.png'),
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
              unhovered: require('@/assets/nav/typeface-play.png'),
              hovered: require('@/assets/nav/typeface-play-hover.png'),
              isHovered: false
            },
            {
              // play
              unhovered: require('@/assets/nav/typeface-play.png'),
              hovered: require('@/assets/nav/typeface-play-hover.png'),
              isHovered: false
            },
            {
              // video
              unhovered: require('@/assets/nav/typeface-video.png'),
              hovered: require('@/assets/nav/typeface-video-hover.png'),
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
              unhovered: require('@/assets/nav/play-play.png'),
              hovered: require('@/assets/nav/play-play.png'),
              isHovered: false
            },
            {
              // play
              unhovered: require('@/assets/nav/play-play.png'),
              hovered: require('@/assets/nav/play-play.png'),
              isHovered: false
            },
            {
              // video
              unhovered: require('@/assets/nav/play-video.png'),
              hovered: require('@/assets/nav/play-video-hover.png'),
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
              unhovered: require('@/assets/nav/video-play.png'),
              hovered: require('@/assets/nav/video-play-hover.png'),
              isHovered: false
            },
            {
              // play
              unhovered: require('@/assets/nav/video-play.png'),
              hovered: require('@/assets/nav/video-play-hover.png'),
              isHovered: false
            },
            {
              // video
              unhovered: require('@/assets/nav/video-video.png'),
              hovered: require('@/assets/nav/video-video.png'),
              isHovered: false
            }
          ]
        }
      }
    }
  },
  computed: {
    currentRouteIndex () {
      return ['/', '/typeface', '/how-to-play', '/interactive', '/interview'].indexOf(this.$route.path)
    },
    backgroundColour () {
      return this.backgroundColours[this.currentRouteIndex]
    },
    borderColour () {
      return this.borderColours[this.currentRouteIndex]
    },
    boxShadow () {
      return '0 0 0 13px ' + this.backgroundColour + ', 0 0 0 19px ' + this.borderColour
    },
    cursor () {
      // no retina (does work)
      // if (this.navIsHovered) {
      //   return "url('./static/cursors/" + this.cursors[this.currentRouteIndex].pointer + ".png') 8 0, default"
      // } else {
      //   return "url('./static/cursors/" + this.cursors[this.currentRouteIndex].default + ".png') 4 0, default"
      // }

      // retina (doesn't work)
      // if (this.navIsHovered) {
      //   return "image-set(url(./static/cursors/" + this.cursors[this.currentRouteIndex].pointer + ".png) 1x, url(./static/cursors/" + this.cursors[this.currentRouteIndex].pointer + "@1.5x.png) 2x) 8 0, pointer;"
      // } else {
      //   return "image-set(url(./static/cursors/" + this.cursors[this.currentRouteIndex].default + ".png) 1x, url(./static/cursors/" + this.cursors[this.currentRouteIndex].default + "@1.5x.png) 2x) 4 0, default;"
      // }
    },
    cursorClassObject () {
      return {
        projectCursor: this.currentRouteIndex === 0,
        typefaceCursor: this.currentRouteIndex === 1,
        playCursor: this.currentRouteIndex === 2 ||  this.currentRouteIndex === 3,
        videoCursor: this.currentRouteIndex === 4
      }
    },
    cursorClickClassObject () {
      return {
        projectClickCursor: this.currentRouteIndex === 0,
        typefaceClickCursor: this.currentRouteIndex === 1,
        playClickCursor: this.currentRouteIndex === 2 ||  this.currentRouteIndex === 3,
        videoClickCursor: this.currentRouteIndex === 4
      }
    }
  },
  methods: {
    navHover (navObject, val) {
      navObject.isHovered = val
      this.navIsHovered = val
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100%;
  height: 100vh;
  padding: 75px 125px;
  box-sizing: border-box;
  display: flex;
}

/* begin typography */
@font-face {
  font-family: 'value-serif-bold';
  src: url('assets/fonts/value-serif-bold.eot');
  src: url('assets/fonts/value-serif-bold.eot?#iefix') format('embedded-opentype'),
       url('assets/fonts/value-serif-bold.woff') format('woff'),
       url('assets/fonts/value-serif-bold.woff2') format('woff2'),
       url('assets/fonts/value-serif-bold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'kabel-black';
  src: url('assets/fonts/Kabel-Black.otf');
}

h1 {
  font-family: 'kabel-black';
  font-size: 64px;
  text-transform: uppercase;
  text-align: center;
  margin: 20px 0;
}

h2 {
  font-family: 'kabel-black';
  font-size: 59px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 0;
}

h3 {
  font-family: 'value-serif-bold';
  font-size: 21px;
  text-transform: uppercase;
  text-align: center;
}

p {
  font-family: 'value-serif-bold';
  font-size: 16px;
}

button {
  font-family: 'value-serif-bold';
  font-size: 16px;
  text-transform: uppercase;
}
/*  end typography  */

/*   cursors   */
.projectCursor {
  cursor: url(/static/cursors/projectcursor.png) 4 0, default;
  cursor: image-set(
    url(/static/cursors/projectcursor.png) 1x,
    url(/static/cursors/projectcursor@1.5x.png) 2x
  ) 4 0, default;
}

.typefaceCursor {
  cursor: url(/static/cursors/typefacecursor.png) 4 0, default;
  cursor: image-set(
    url(/static/cursors/typefacecursor.png) 1x,
    url(/static/cursors/typefacecursor@1.5x.png) 2x
  ) 4 0, default;
}

.playCursor {
  cursor: url(/static/cursors/playclickcursor.png) 4 0, default;
  cursor: image-set(
    url(/static/cursors/playclickcursor.png) 1x,
    url(/static/cursors/playcursor@1.5x.png) 2x
  ) 4 0, default;
}

.videoCursor {
  cursor: url(/static/cursors/videoclickcursor.png) 4 0, default;
  cursor: image-set(
    url(/static/cursors/videoclickcursor.png) 1x,
    url(/static/cursors/videocursor@1.5x.png) 2x
  ) 4 0, default;
}

.projectClickCursor {
  cursor: url(/static/cursors/projectcursorclick.png) 8 0, pointer;
  cursor: image-set(
    url(/static/cursors/projectcursorclick.png) 1x,
    url(/static/cursors/projectcursorclick@1.5x.png) 2x
  ) 8 0, pointer;
}

.typefaceClickCursor {
  cursor: url(/static/cursors/typefacecursorclick.png) 8 0, pointer;
  cursor: image-set(
    url(/static/cursors/typefacecursorclick.png) 1x,
    url(/static/cursors/typefacecursorclick@1.5x.png) 2x
  ) 8 0, pointer;
}

.playClickCursor {
  cursor: url(/static/cursors/playcursorclick.png) 8 0, pointer;
  cursor: image-set(
    url(/static/cursors/playcursorclick.png) 1x,
    url(/static/cursors/playcursorclick@1.5x.png) 2x
  ) 8 0, pointer;
}

.videoClickCursor {
  cursor: url(/static/cursors/videocursorclick.png) 8 0, pointer;
  cursor: image-set(
    url(/static/cursors/videocursorclick.png) 1x,
    url(/static/cursors/videocursorclick@1.5x.png) 2x
  ) 8 0, pointer;
}
/* end cursors */

.desktop {
  width: 100%;
  height: 100%;
  display: flex;
}

.mobile {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 40px;
  overflow-y: scroll;
  border: 2px solid #440f23;
  box-shadow: 0 0 0 10px #dfb8aa, 0 0 0 16px #440f23;
  background: #dfb8aa;
}

.outerContainer {
  position: relative;
  margin: auto auto;
  /* height: 620px; */
  /* width: 1060px; */
  height: 100%;
  width: 100%;
  max-width: 1700px;
  max-height: 900px;
}

.innerContainer {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 100px 100px;
  border-width: 3px;
  border-style: solid;
}

.nav {
  position: absolute;
  z-index: 100;
  transition: 0.2s;
}

.nav:hover {
  transform: scale(1.05);
}

.rectangle {
  width: 185px;
  /* height: 125px; */
}

.circle {
  width: 135px;
  height: 135px;
  border-radius: 100px;
}

.rounded {
  width: 135px;
  height: 135px;
  border-radius: 19px;
}

#tl {
  top: -27px;
  left: -35px;
  transform: rotate(11deg);
}

#tl:hover {
  transform: rotate(11deg) scale(1.05);
}

#tr {
  top: -40px;
  right: -40px;
}

#bl {
  bottom: -40px;
  left: -40px;
}

#br {
  bottom: -40px;
  right: -40px;
}

::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
}

@media screen and (max-width: 769.98px) {
  .desktop {
    display: none;
  }

  #app {
    background-color: #dfb8aa !important;
  }
}

@media screen and (min-width: 770px) {
  .mobile {
    display: none;
  }
}
</style>
