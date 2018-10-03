<template>
  <div class="typeface">
    <HoverSpecimen />
    <div class="typefaceCopyContainer">
      <p>Cantonese is a tone language. Different words are pronounced with a tone that has to be ‘sung’ to a relative pitch. Cantonese is often described by non-Cantonese speakers as musical, implying a swaying rhythm to the language. However sharp aspirated consonants similar to the P, T and K sounds in English contrast the melodic characteristics.</p>
      <p>Jyut Sans attempts to emulate this contrast in the spoken language through decorative elements of the letterforms. Elegant curvature is juxtaposed by abrupt changes in width and curve direction. Furthermore the typeface has been designed to be used on the diagrammatic tone chart commonly used to visually portray the tonal levels of Cantonese. Because the stress of Cantonese falls on vowels and diphthongs (vowels that combine into another sound) each vowel has been designed with a rising, falling and stable variant in accordance with the tonal diagram.</p>
      <p>In Cantonese, there are six different tones. Different words are pronounced with a particular tone and can have up to six tonal variations. Note that not every word necessarily has six tonal variations that has to be ‘sung’ to a relative pitch.For example, FAN can be pronounced at six different tones that can mean ‘divide’, ‘flour’, ‘sleep’, ‘grave’, ‘energetic’ or ‘portion’. Click on the chart below to hear the individual tones and then play the game to see how tone can change meaning.</p>
    </div>
    <AudioSpecimen />
  </div>
</template>

<script>
import HoverSpecimen from '@/components/HoverSpecimen.vue'
import AudioSpecimen from '@/components/AudioSpecimen.vue'

export default {
  name: 'typeface',
  components: {
    HoverSpecimen,
    AudioSpecimen
  }
}
</script>

<style>
.typefaceCopyContainer {
  margin: 100px 0;
  text-align: left;
}
</style>
