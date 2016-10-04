<template>
  <main>
    <div class="task-list">
      <task v-for="n in 10"></task>
    </div>
    <add-button></add-button>
  </main>
</template>

<script>
import Task from './Task'
import AddButton from './AddButton'

export default {
  components: {
    Task,
    AddButton
  }
}
</script>

<style>
  main {
    margin: 0 auto;
    width: 100%;
    background-color: #f6f6f6;

    height: 100%;
  }

  .task-list {
    display: flex;
    flex-direction: column;
  }
</style>
