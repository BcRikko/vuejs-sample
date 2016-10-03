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
  body {
    margin: 0px 0px 0px 0px;
  }
</style>
