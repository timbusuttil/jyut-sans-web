<template>
  <div id="app">
    <div class="outerContainer">
      <div class="innerContainer">
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
        <router-link to="/interactive">
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
      <div style="margin-top: 20px;">
        <router-link to="/about" style="margin-top: 20px;">About</router-link>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

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
