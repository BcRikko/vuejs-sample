<template>
  <div class="task">
    <div>
      <span class="task__title">Title</span>
      <span class="task__limit">2016/10/03</span>
    </div>
    <p class="task__desc">
      DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
    </p>
    <div class="task__controller">
      <a href="#" @click="DONE_TASK">Done</a>
      <a href="#" @click="EDIT_TASK">Edit</a>
      <a href="#" @click="DELETE_TASK">Delete</a>
    </div>
  </div>
</template>

<style>
  .task {
    background-color: #fff;
    color: #757575;

    margin: 15px auto;
    padding: 10px;

    width: 400px;
    height: 150px;

    box-shadow: 1px 1px 3px rgba(0,0,0,0.4);
  }

  .task__title {
    font-size: 1.5em;
    color: #41B883;
    text-overflow: ellipsis;
  }

  .task__limit {
    float: right;
  }

  .task__desc {
    margin: 10px auto;
    width: 100%;
    height: 50px;

    overflow-wrap: break-word;
    overflow: hidden;

    /* only Chrome or Safari*/
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .task__controller {
    margin-top: 10px;
    border-top: 2px solid #eee;
    padding-top: 10px;
    height: 30px;
    line-height: 20px;

  }

  .task__controller > a:link { color: #41B883; }
  .task__controller > a:active { color: #ff8000; }
  .task__controller > a:visited { color: #000080; }
  .task__controller > a:hover { color: #35495E; }
</style>

<script>
  import { mapActions } from 'vuex'
  import { DONE_TASK, EDIT_TASK, DELETE_TASK } from '../store/mutation-types'

  export default {
    methods: {
      ...mapActions({
        DONE_TASK,
        EDIT_TASK,
        DELETE_TASK
      })
    }
  }
</script>
