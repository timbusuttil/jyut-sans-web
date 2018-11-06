<template>
  <div class="mobileHome">
    <img class="mobileBadge" :src="require('@/assets/mobile/PWYT badge.png')" alt="Please Watch Your Tone">
    <p><span class="italic">Please Watch Your Tone</span> is a design research project which critiques the phenomenon of Asian mimicry typefaces. It questions the role that visual communicators play in outputting responsible and ethical visual culture into the world. The body of work encompasses a typeface, <span class="italic">Jyut Sans</span>, a website and a publication. <span class="italic">Jyut Sans</span> is the vehicle through which this project graphically conveys the tonal richness of Cantonese. Its structural components reflect the idiosyncrasies of the language. It has also has been designed to function as a diagrammatic system which visualises the tonal movements in Cantonese speech.</p>
    <img class="mobileBadge" :src="require('@/assets/mobile/error.png')" alt="Error">
    <h3 style="text-transform: none;">Sorry! Your device is too small, please switch to a larger screen to enjoy the full experience.</h3>
    <img class="mobileBadge" :src="require('@/assets/mobile/error.png')" alt="Error">
  </div>
</template>

<style>
.mobileHome {
  padding: 30px;
  text-align: center;
  color: #440f23;
}

.mobileBadge {
  height: 150px;
  width: 150px;
  margin: 30px 0;
}

.italic {
  font-style: italic;
}
</style>
