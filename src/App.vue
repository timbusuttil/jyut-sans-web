<template>
  <div id="app" :style="{background: this.backgroundColour}">
    <div class="outerContainer">
      <div class="innerContainer" :style="{boxShadow: this.boxShadow}">
        <router-link to="/">
          <div class="nav" id="tl">
            project
          </div>
        </router-link>
        <router-link to="/typeface">
          <div class="nav" id="tr">
            specimen
          </div>
        </router-link>
        <router-link to="/how-to-play">
          <div class="nav" id="br">
            interactive
          </div>
        </router-link>
        <router-link to="/interview">
          <div class="nav" id="bl">
            interview
          </div>
        </router-link>
        <router-view/>
      </div>
      <div style="margin-top: 20px; text-align: center;">
        <router-link to="/about" style="margin-top: 20px;">About</router-link>
        <p>{{this.$route.path}}</p>
        <p>{{this.currentRouteIndex}}</p>
      </div>
      <img :src="this.typeNavSrc">
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      backgroundColours: ['#DFB8AA', '#F17236', '#FADD75', '#FADD75', '#FCC700', '#DFB8AA']
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
    },
    typeNavSrc () {
      let path = 'home'
      // this will eventually just be DOES include '/' or '/about'
      if (!['/', '/interactive', '/typeface', '/how-to-play', '/interactive', '/about'].includes(this.$route.path)) {
        path = this.$route.path.substring(1)
      }
      // else if (['/how-to-play', '/interactive'].includes(this.$route.path)) {
      //   path = 'play'
      // }
      return require('@/assets/nav/typeface_' + path + '.png')
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
  height: 70px;
  border: 5px solid black;
  background: lightgreen;
}

.nav:hover {
  background: mediumseagreen;
}

#tl {
  top: -35px;
  left: -70px;
  transform: rotate(10deg);
}

#tr {
  top: -35px;
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
