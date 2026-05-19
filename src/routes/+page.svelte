<script>
  import Sidebar      from '$lib/components/Sidebar.svelte';
  import TasksPage    from '$lib/components/TasksPage.svelte';
  import FocusPage    from '$lib/components/FocusPage.svelte';
  import JournalPage  from '$lib/components/JournalPage.svelte';
  import SettingsPage from '$lib/components/SettingsPage.svelte';
  import { settings, applyTheme } from '$lib/settings.svelte.js';

  let currentPage = $state('tasks');

  $effect(() => {
    applyTheme(settings.theme);
    document.body.classList.toggle('no-glow',  !settings.glowOn);
    document.body.classList.toggle('no-stars', !settings.starsOn);
  });

  function enterWorkspace() {
    currentPage = 'tasks';
    document.querySelector('.tasks-section')?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<Sidebar bind:currentPage />

<main>

  <section class="hero">
    {#if settings.glowOn}
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
      <div class="glow glow-3"></div>
    {/if}
    {#if settings.starsOn}
      <div class="stars"></div>
    {/if}

    <div class="content">
      <p class="label">Noctis Tasks</p>
      <h1>Soft focus for midnight minds.</h1>
      <p class="subtitle">
        A gentle productivity space wrapped in dreamy pink glows,
        calm focus and late-night comfort.
      </p>
      <button class="primary" onclick={enterWorkspace}>Enter Workspace</button>
    </div>
  </section>

  {#if currentPage === 'tasks'}
    <TasksPage />
  {:else if currentPage === 'focus'}
    <FocusPage />
  {:else if currentPage === 'journal'}
    <JournalPage />
  {:else if currentPage === 'settings'}
    <SettingsPage />
  {/if}

</main>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 2rem;
  }

  .content {
    position: relative;
    z-index: 2;
    max-width: 850px;
    text-align: center;
  }

  .label {
    color: #f5aeca;
    text-transform: uppercase;
    letter-spacing: 0.35em;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
  }

  h1 {
    margin: 0;
    font-size: clamp(4.5rem, 11vw, 8rem);
    line-height: 0.9;
    letter-spacing: -0.05em;
    color: #f2b3cb;
  }

  .subtitle {
    margin: 2.5rem auto;
    max-width: 620px;
    line-height: 1.9;
    color: rgba(255, 210, 228, 0.78);
    font-size: 1.15rem;
  }

  .primary {
    margin-top: 1rem;
    border: none;
    padding: 1rem 2.3rem;
    border-radius: 999px;
    background: linear-gradient(135deg, #ffc8dd, #f5b8d3, #e9c6ff);
    color: white;
    font-weight: 700;
    font-size: 1rem;
    font-family: inherit;
    cursor: pointer;
    box-shadow: 0 0 45px rgba(255, 192, 203, 0.28);
    transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  }

  .primary:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 0 60px rgba(255, 192, 203, 0.45);
    opacity: 0.95;
  }

  .glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(140px);
    opacity: 0.5;
  }

  .glow-1 { width: 550px; height: 550px; background: rgba(255,192,203,0.3);  top: -120px; left: -160px; }
  .glow-2 { width: 500px; height: 500px; background: rgba(233,198,255,0.28); bottom: -120px; right: -140px; }
  .glow-3 { width: 380px; height: 380px; background: rgba(255,214,231,0.24); top: 40%; left: 50%; transform: translate(-50%,-50%); }

  .stars {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px);
    background-size: 140px 140px;
    opacity: 0.08;
    animation: drift 25s linear infinite;
  }

  @keyframes drift {
    from { transform: translateY(0); }
    to   { transform: translateY(-140px); }
  }

  @media (max-width: 768px) {
    h1        { font-size: clamp(3.5rem, 14vw, 6rem); }
    .subtitle { font-size: 1rem; }
    .primary  { width: 100%; }
  }
</style>
