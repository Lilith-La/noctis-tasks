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
    background: var(--surface);
    border: 1px solid var(--border);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .task-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
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
    border: 2px solid var(--accent);
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
    border-color: var(--accent-2);
  }

  .circle.completed {
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    border: none;
  }

  p {
    margin: 0;
    color: var(--text);
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
    color: var(--muted);
    font-size: 0.95rem;
    font-family: inherit;
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    border-radius: 999px;
    opacity: 0.6;
    transition: color 0.2s ease, background 0.2s ease, opacity 0.2s ease;
  }

  .delete:hover {
    color: var(--heading);
    background: var(--surface);
    opacity: 1;
  }
</style>
