<template>
  <div class="mask" v-show="isShown">
    <div class="modal">
      <div class="modal__form">
        <div class="modal__header">
        </div>
        <div class="modal__body">
          <form>
              <input name="title" type="text" placeholder="Title">
              <input name="limit" type="text" placeholder="yyyy/mm/dd">
              <textarea name="description" placeholder="Description"></textarea>
          </form>
        </div>
        <div class="modal__footer">
          <button @click="CREATE_TASK" class="button button-create">Create</button>
          <button @click="CLOSE_MODAL" class="button button-cancel">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;

    background-color: rgba(0,0,0,0.4);
  }

  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    margin: auto;
    width: 460px;
    height: 360px;

    background-color: #fff;
    box-shadow:
      0 0 0 2px #41B883,
      0 0 50px 3px #35495E;
  }

  .modal__form {
    padding: 25px;
  }

  .modal__body input[type="text"],
  .modal__body textarea {
    outline: none;
    border: none;
    border-bottom: solid 2px #c9c9c9;
    -webkit-transition: all .3s;
	  transition: all .3s;

    width: 100%;
    padding: 12px;
    margin-bottom: 15px;

    display: inline-block;
    border-radius: 4px;
    box-sizing: border-box;

    font-size: 1.2em;
  }
  .modal__body input[type="text"]:focus,
  .modal__body textarea:focus {
    box-shadow: 0 0 10px #41B883;
  }

  .modal__body input[type="text"][name="title"] {
    font-size: 1.7em;
    color: #41B883;
  }
  .modal__body input[type="text"][name="limit"] {
    color: #333;
  }

  .modal__body textarea {
    margin: 0 auto;
    height: 130px;
    border: solid 2px #c9c9c9;
    resize: none;
  }

  .modal__footer {
    float: right;
  }

  .button {
    font-size: 1em;
    background-color: #41B883;
    border: none;
    color: #fff;
    padding: 12px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 4px;
    margin: 4px 2px;
    cursor: pointer;
    transition-duration: 0.4s;
  }
  .button-create {
    background-color: #41B883;
  }
  .button-cancel {
    background-color: #db4437;
  }
  .button-create:hover,
  .button-cancel:hover {
    box-shadow: 0 3px 10px 0 rgba(0,0,0,0.24),0 6px 20px 0 rgba(0,0,0,0.19);
  }

</style>

<script>
  import { mapActions } from 'vuex'
  import { CREATE_TASK, CLOSE_MODAL } from '../store/mutation-types'

  export default {
    computed: {
      isShown () {
        return this.$store.state.modal.isShown
      }
    },
    methods: {
      ...mapActions({
        CREATE_TASK,
        CLOSE_MODAL
      })
    }
  }
</script>
