<template>
  <div class="typeface">
    <HoverSpecimen />
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
.typeface {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
