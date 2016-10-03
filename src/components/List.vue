<template>
  <main>
    <div class="task-list">
      <task v-for="n in 10"></task>
    </div>
  </main>
</template>

<script>
import Task from './Task'

export default {
  components: {
    Task
  }
}
</script>

<style>
  main {
    background-color: #f6f6f6;
    margin: 0 auto;
    width: 100%;
  }

  .task-list {
    display: flex;
    flex-direction: column;
  }
</style>
