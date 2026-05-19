<script>
  import TaskInput from './TaskInput.svelte';
  import TaskList  from './TaskList.svelte';

  let tasks = $state([{ id: 1, title: 'Practice Svelte', completed: false }]);

  function addTask(title) {
    tasks = [...tasks, { id: Date.now(), title, completed: false }];
  }
  function toggleTask(id) {
    tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
  }
  function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
  }
</script>

<section class="tasks-section">

  <TaskInput {addTask} />
  <TaskList {tasks} {toggleTask} {deleteTask} />

  <section class="dashboard">

    <div class="dashboard-top">
      <div>
        <p class="small-label">Daily Focus</p>
        <h2>Your calm productivity space.</h2>
      </div>

      <div class="progress-card">
        <span>Today's Progress</span>
        <div class="progress-bar">
          <div class="progress-fill"></div>
        </div>
        <p>72% completed</p>
      </div>
    </div>

    <div class="task-grid">

      <div class="task-card big">
        <div class="card-top">
          <span class="tag pink">Design</span>
          <span class="time">11:45 PM</span>
        </div>
        <h3>Finish mobile dashboard UI</h3>
        <p>Refine spacing, typography and animations for the Noctis mobile experience.</p>
      </div>

      <div class="task-card">
        <span class="tag purple">Study</span>
        <h3>Practice TypeScript</h3>
        <p>Complete advanced props & stores lesson.</p>
      </div>

      <div class="task-card">
        <span class="tag peach">Wellness</span>
        <h3>Evening routine</h3>
        <p>Tea, journaling and calming playlist.</p>
      </div>

      <div class="task-card glow-card">
        <h3>Midnight Focus</h3>
        <p>Quiet hours. Soft music. Deep concentration.</p>
      </div>

    </div>

  </section>

</section>

<style>
  .tasks-section {
    padding: 0 8% 6rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .dashboard {
    position: relative;
    z-index: 2;
    padding: 2rem 0 2rem;
  }

  .dashboard-top {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  h2 {
    margin-top: 1rem;
    font-size: clamp(2.5rem, 5vw, 4rem);
    color: #d483a6;
  }

  .progress-card {
    min-width: 260px;
    padding: 1.5rem;
    border-radius: 2rem;
    background: rgba(255, 255, 255, 0.45);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 182, 193, 0.18);
  }

  .progress-card span {
    color: var(--muted);
    font-size: 0.9rem;
  }

  .progress-card p {
    margin: 0;
    color: var(--muted);
    font-size: 0.9rem;
  }

  .progress-bar {
    width: 100%;
    height: 12px;
    border-radius: 999px;
    overflow: hidden;
    margin: 1rem 0;
    background: rgba(255, 255, 255, 0.4);
  }

  .progress-fill {
    width: 72%;
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, #f5aeca, #e9c6ff);
  }

  .task-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
    align-items: start;
  }

  .task-card {
    padding: 2rem;
    border-radius: 2rem;
    background: rgba(255, 255, 255, 0.42);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 182, 193, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    align-self: start;
  }

  .task-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 40px rgba(245, 174, 202, 0.15);
  }

  .task-card.big { grid-column: span 2; }

  .card-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  .tag {
    padding: 0.45rem 0.9rem;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 700;
  }

  .tag.purple,
  .tag.peach {
    display: inline-block;
    margin-bottom: 1.2rem;
  }

  .tag.pink     { background: rgba(245,174,202,0.2);  color: #d87098; }
  .tag.purple   { background: rgba(233,198,255,0.22); color: #a46ad6; }
  .tag.peach    { background: rgba(255,214,231,0.3);  color: #d88ca8; }

  .time {
    color: var(--muted);
    font-size: 0.9rem;
  }

  .task-card h3 {
    margin: 0;
    color: #cf7fa2;
    font-size: 2.2rem;
    line-height: 1.1;
  }

  .task-card p {
    margin-top: 1rem;
    line-height: 1.6;
    color: var(--muted);
    font-size: 1.05rem;
  }

  .glow-card {
    background: linear-gradient(135deg, rgba(245,174,202,0.3), rgba(233,198,255,0.25));
  }

  @media (max-width: 768px) {
    .dashboard-top { flex-direction: column; align-items: start; }
    .task-card.big { grid-column: span 1; }
  }
</style>
