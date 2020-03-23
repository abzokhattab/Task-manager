<template>
  <div id="app">
    <router-view></router-view>
        <Header/>
    <!-- <HelloWorld/> -->
<!-- <edit/> -->
    <!-- <login/> -->
    <!-- <mypage/> -->
<tasks/>
  </div>
</template>

<script>
import Header from './components/Header'

// import mypage from './components/myPage'
// import HelloWorld from './components/HelloWorld.vue'
// import login from './components/login'
//import edit from './components/edit-profile.vue'

export default {
  name: 'App',
  components: {
    Header
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
