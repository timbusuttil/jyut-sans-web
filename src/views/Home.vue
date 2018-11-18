<template>
  <div class="home">
    <h1 style="color: #f17236;">Please Watch Your Tone</h1>
    <div class="homeCopyContainer">
      <p>Historic and current representations of East Asian identities, particularly Chinese identities, have not always been ethically portrayed in the media of Western societies. Some depictions of Chinese identities have ranged from being tokenistic at best and outright racist at worst. This project, <span class="italics">Please Watch Your Tone</span>, questions these representations in visual communication design. It particularly challenges the ethicality of Asian mimicry typefaces, and the role of visual communicators in producing these superficial depictions of language and culture. Mimicry typefaces exist to imitate the aesthetic qualities of East Asian script without any lexical or tonal nuance.</p>
      <p>This project presents an alternative to mimicry typefaces to critique this phenomenon in the visual communication design world. <span class="italics">Please Watch Your Tone</span> presents the typeface <span class="italics">Jyut Sans</span> as the vehicle through which this project diagrammatically portrays spoken tonality in Cantonese. On one hand, structural elements of the typeface communicate the idiosyncrasies of spoken Cantonese. On the other hand, the typeface works as a diagrammatic system that graphically visualises the tonal movements in Cantonese speech.</p>
    </div>
    <p class="credits">Design by <a href="https://wilson-leung.com/" target="_blank">Wilson Leung</a>&emsp;|&emsp;Site by <a href="http://timbusuttil.xyz" target="_blank">Tim Busuttil</a></p>
    <!-- <p class="credits">Design by Wilson Leung&emsp;|&emsp;Site by Tim Busuttil</p> -->
  </div>
</template>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: -100px 0; */
}

.homeCopyContainer {
  max-width: 900px;
  color: #440f23;
}

.credits {
  color: #440f23;
  margin-top: 50px;
}

a {
  color: #f17236;
  text-decoration: none;
}

a:hover {
  border-bottom: 2px solid #f17236;
  cursor: url(/static/cursors/projectcursorclick.png) 8 0, pointer;
  cursor: image-set(
    url(/static/cursors/projectcursorclick.png) 1x,
    url(/static/cursors/projectcursorclick@1.5x.png) 2x
  ) 8 0, pointer;
}

.italics {
  font-style: italic;
}

@media screen and (min-width: 1219.98px) {
  .home {
    height: 100%;
  }
}
</style>
