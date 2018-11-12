<template>
  <div class="mobileHome">
    <img class="mobileBadge" :src="require('@/assets/mobile/PWYT badge.png')" alt="Please Watch Your Tone">
    <p><span class="italic">Please Watch Your Tone</span> is a design research project which critiques the phenomenon of Asian mimicry typefaces. It questions the role that visual communicators play in outputting responsible and ethical visual culture into the world. The body of work encompasses a typeface, <span class="italic">Jyut Sans</span>, a website and a publication. <span class="italic">Jyut Sans</span> is the vehicle through which this project graphically conveys the tonal richness of Cantonese. Its structural components reflect the idiosyncrasies of the language. It has also has been designed to function as a diagrammatic system which visualises the tonal movements in Cantonese speech.</p>
    <img class="mobileBadge" :src="require('@/assets/mobile/error.png')" alt="Error">
    <h3 style="text-transform: none;">Sorry! Your device is too small, please switch to a larger screen to enjoy the full experience.</h3>
    <img class="mobileBadge" :src="require('@/assets/mobile/error.png')" alt="Error">
    <!-- <p class="mobileCredits">Design by <a href="https://wilson-leung.com/" target="_blank">Wilson Leung</a></p>
    <p class="mobileCredits">Site by <a href="http://timbusuttil.xyz" target="_blank">Tim Busuttil</a></p> -->
    <p class="mobileCredits">Design by Wilson Leung</p>
    <p class="mobileCredits">Site by Tim Busuttil</p>
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

.mobileCredits {
  margin: 5px;
  color: #440f23;
}

.italic {
  font-style: italic;
}

a {
  color: #f17236;
  text-decoration: none;
}

a:hover {
  border-bottom: 2px solid #f17236;
}
</style>
