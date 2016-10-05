<template>
  <div id="app">
    <vue-header></vue-header>
    <vue-list></vue-list>
    <vue-modal></vue-modal>
  </div>
</template>

<script>
import VueHeader from './components/Header'
import VueList from './components/List'
import VueModal from './components/Modal'

export default {
  components: {
    VueHeader,
    VueList,
    VueModal
  }
}
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;

    font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    font-size: 16px;
    color: #333;
  }
</style>
