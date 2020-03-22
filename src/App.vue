<template>
  <div id="app">
        <Header/>
    <!-- <HelloWorld/> -->
<edit/>
    <!-- <login/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
// import login from './components/login'
import edit from './components/edit-profile.vue'

export default {
  name: 'App',
  components: {
    Header,edit
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
