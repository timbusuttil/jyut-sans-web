<template>
  <div class="typeface">
    <HoverSpecimen />
    <p>info about the type specimen goes down here</p>
    <p>look at it all!</p>
  </div>
</template>

<script>
import HoverSpecimen from '@/components/HoverSpecimen.vue'

export default {
  name: 'typeface',
  components: {
    HoverSpecimen
  }
}
</script>
