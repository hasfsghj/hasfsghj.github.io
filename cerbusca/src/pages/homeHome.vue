<template>
    <hero/>
    <imgs/>
</template>

<script>
import hero from '../components/heroSection.vue'
import imgs from '../components/photoGrid.vue'

export default {
  name: 'App',
  components: {
    hero,
    imgs
  }
}
</script>