<script>
  import TaskCard from "./TaskCard.svelte";

  let { tasks, toggleTask, deleteTask } = $props();
</script>

<div class="task-list">
  {#each tasks as task}
    <TaskCard {task} {toggleTask} {deleteTask} />
  {/each}
</div>

<style>
  .task-list {
    display: flex;

    flex-direction: column;

    gap: 1rem;
  }
</style>
