<template>
  <first/>
  <router-view/>
  <foot/>
</template>

<script>
import first from './components/firstHeader.vue'
import foot from './components/footerJos.vue'

export default {
  name: 'App',
  components: {
    first,
    foot
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
