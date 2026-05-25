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

<main class="app-main">

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
    color: var(--accent);
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
    color: var(--heading);
  }

  .subtitle {
    margin: 2.5rem auto;
    max-width: 620px;
    line-height: 1.9;
    color: var(--muted);
    font-size: 1.15rem;
  }

  .primary {
    margin-top: 1rem;
    border: none;
    padding: 1rem 2.3rem;
    border-radius: 999px;
    background: linear-gradient(135deg, var(--btn-from), var(--btn-mid), var(--btn-to));
    color: white;
    font-weight: 700;
    font-size: 1rem;
    font-family: inherit;
    cursor: pointer;
    box-shadow: 0 0 45px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  }

  .primary:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.18);
    opacity: 0.95;
  }

  .glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(140px);
    opacity: 0.5;
  }

  .glow-1 { width: 550px; height: 550px; background: var(--hero-glow-1); top: -120px; left: -160px; }
  .glow-2 { width: 500px; height: 500px; background: var(--hero-glow-2); bottom: -120px; right: -140px; }
  .glow-3 { width: 380px; height: 380px; background: var(--hero-glow-3); top: 40%; left: 50%; transform: translate(-50%,-50%); }

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

  .app-main {
    /* desktop: no extra spacing needed */
  }

  @media (max-width: 768px) {
    .app-main {
      /* clear the fixed bottom nav */
      padding-bottom: calc(72px + env(safe-area-inset-bottom, 0px));
    }
    h1        { font-size: clamp(3rem, 14vw, 6rem); }
    .subtitle { font-size: 1rem; margin: 2rem auto; }
    .primary  { width: 100%; max-width: 320px; }
    .hero     { padding: 5rem 1.5rem 3rem; }
  }

  @media (max-width: 480px) {
    h1        { font-size: clamp(2.6rem, 15vw, 4.5rem); line-height: 1.05; }
    .label    { font-size: 0.72rem; letter-spacing: 0.22em; }
    .subtitle { font-size: 0.92rem; margin: 1.8rem auto; max-width: 90%; }
    .hero     { padding: 3.5rem 1.4rem 3rem; }
    .primary  { max-width: 280px; }
  }
</style>
