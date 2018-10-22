<template>
  <div class="interactive">
    <InteractiveSpecimen />
  </div>
</template>

<script>
import InteractiveSpecimen from '@/components/InteractiveSpecimen.vue'

export default {
  name: 'interactive',
  components: {
    InteractiveSpecimen
  }
}
</script>

<style>
.interactive {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
