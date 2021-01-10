<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <ChildFirst />
    <ChildSecond /> -->
    <Candidates />
  </div>
</template>

<script>
import ChildFirst from './components/ChildFirst.vue'
import ChildSecond from './components/ChildSecond.vue'
import Candidates from './components/candidates/Candidates.vue'

export default {
  name: 'App',
  components: {
    ChildFirst,
    ChildSecond,
    Candidates
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

.child {
  border: 1px solid red;
}
</style>
