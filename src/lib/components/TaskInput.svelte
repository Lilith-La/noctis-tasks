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
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 1rem 1.5rem;
    border-radius: 2rem;
    background: rgba(255, 255, 255, 0.45);
    border: 1px solid rgba(255, 182, 193, 0.15);
    color: #c97898;
    font-size: 1rem;
    font-family: inherit;
    backdrop-filter: blur(20px);
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
  }

  input:focus {
    border-color: rgba(245, 174, 202, 0.4);
    box-shadow: 0 0 0 3px rgba(245, 174, 202, 0.1);
  }

  input::placeholder {
    color: rgba(180, 120, 145, 0.5);
  }

  button {
    border: none;
    padding: 1rem 2rem;
    border-radius: 999px;
    background: linear-gradient(135deg, #ffc8dd, #f5b8d3, #e9c6ff);
    color: white;
    font-weight: 700;
    font-size: 1rem;
    font-family: inherit;
    cursor: pointer;
    white-space: nowrap;
    box-shadow: 0 0 30px rgba(255, 192, 203, 0.2);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(245, 174, 202, 0.35);
  }
</style>
