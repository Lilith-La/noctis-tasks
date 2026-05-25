<script>
  let { addTask } = $props();

  let value = $state("");

  function handleAdd() {
    if (!value.trim()) return;
    addTask(value);
    value = "";
  }

  function onKeydown(e) {
    if (e.key === 'Enter') handleAdd();
  }
</script>

<div class="create-task">
  <input
    type="text"
    placeholder="Add a dreamy task…"
    bind:value
    onkeydown={onKeydown}
  />
  <button onclick={handleAdd}>Add Task</button>
</div>

<style>
  .create-task {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 1rem 1.5rem;
    border-radius: 2rem;
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text);
    font-size: 1rem;
    font-family: inherit;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
  }

  input:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-3);
  }

  input::placeholder {
    color: var(--muted);
  }

  button {
    border: none;
    padding: 1rem 2rem;
    border-radius: 999px;
    background: linear-gradient(135deg, var(--btn-from), var(--btn-mid), var(--btn-to));
    color: white;
    font-weight: 700;
    font-size: 1rem;
    font-family: inherit;
    cursor: pointer;
    white-space: nowrap;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    .create-task {
      flex-direction: column;
      gap: 0.75rem;
    }
    input {
      min-width: 0;
      width: 100%;
      font-size: 16px; /* prevent iOS zoom */
    }
    button {
      width: 100%;
    }
  }
</style>
