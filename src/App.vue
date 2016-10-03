<template>
  <div id="app">
    <vue-header></vue-header>
    <vue-list></vue-list>
  </div>
</template>

<script>
import VueHeader from './components/Header'
import VueList from './components/List'

export default {
  components: {
    VueHeader,
    VueList
  }
}
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;

    width: 100%;
    height: 100%;
  }

  #app {
    height: 100%;
  }
</style>
