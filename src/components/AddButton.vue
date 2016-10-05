<template>
  <div @click="OPEN_MODAL" class="btn-floating btn-add">+</div>
</template>

<style>
  .btn-floating {
    position: fixed;
    bottom: 30px;
    right: 30px;

    height: 55px;
    width: 55px;
    border-radius: 50%;

    color: #fff;
    background-color: #333;
    font-size: 1.5em;
    text-align: center;
    line-height: 55px;

    cursor: pointer;
    box-shadow: 0px 2px 5px #666;
  }

  .btn-add {
    background-color: #db4437;
  }
  .btn-add:hover {
    background-color: #b31b0e;
  }
</style>

<script>
  import { mapActions } from 'vuex'
  import { OPEN_MODAL } from '../store/mutation-types'

  export default {
    methods: {
      ...mapActions({
        OPEN_MODAL
      })
    }
  }
</script>
