<template>
  <div id="app">
        <Header/>
    <!-- <HelloWorld/> -->

    <login/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
import login from './components/login'

export default {
  name: 'App',
  components: {
    Header,login
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
