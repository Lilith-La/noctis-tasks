<script>
  let { task, toggleTask, deleteTask } = $props();
</script>

<div class="task-item">
  <div class="left">
    <button
      class="circle"
      class:completed={task.completed}
      onclick={() => toggleTask(task.id)}
    >
      {#if task.completed}✓{/if}
    </button>

    <p class:done={task.completed}>{task.title}</p>
  </div>

  <button class="delete" onclick={() => deleteTask(task.id)}>✕</button>
</div>

<style>
  .task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 1.8rem;
    border-radius: 2rem;
    background: rgba(255, 255, 255, 0.42);
    border: 1px solid rgba(255, 182, 193, 0.15);
    backdrop-filter: blur(20px);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .task-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(245, 174, 202, 0.12);
  }

  .left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .circle {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 2px solid #f5aeca;
    background: transparent;
    color: white;
    font-size: 0.85rem;
    font-family: inherit;
    cursor: pointer;
    flex-shrink: 0;
    transition: background 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
  }

  .circle:hover {
    transform: scale(1.1);
    border-color: #e9c6ff;
  }

  .circle.completed {
    background: linear-gradient(135deg, #f5aeca, #e9c6ff);
    border: none;
  }

  p {
    margin: 0;
    color: #c97898;
    font-size: 1rem;
    line-height: 1.5;
    transition: opacity 0.25s ease;
  }

  .done {
    text-decoration: line-through;
    opacity: 0.45;
  }

  .delete {
    border: none;
    background: transparent;
    color: rgba(180, 120, 145, 0.4);
    font-size: 0.95rem;
    font-family: inherit;
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    border-radius: 999px;
    transition: color 0.2s ease, background 0.2s ease;
  }

  .delete:hover {
    color: #d483a6;
    background: rgba(245, 174, 202, 0.12);
  }
</style>
