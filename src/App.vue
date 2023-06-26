<template>
  <v-main-wrapper/>
</template>

<script>
import vMainWrapper from "./components/v-main-wrapper.vue"

export default {
  name: 'App',
  components: {
    vMainWrapper
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin: 60px 0 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

body {
  margin: 0;
  list-style: none;
  min-height: 100vh;
}
a, u {
  text-decoration: none;
}
</style>
