<template>
  <div id="app">
        <Header/>
            <router-view></router-view>
<foooter/>
  </div>
</template>

<script>
import Header from './components/Header'
import foooter from './components/footer'

export default {
  name: 'App',
  components: {
    Header,foooter
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
