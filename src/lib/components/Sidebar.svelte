<script>
  let { currentPage = $bindable() } = $props();
  let opened = $state(false);

  function navigate(page) {
    currentPage = page;
    opened = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<!-- ── Desktop: floating hamburger + slide-in sidebar ── -->
<div class="desktop-nav">
  {#if !opened}
    <button class="menu-button" onclick={() => opened = !opened} aria-label="Open menu">
      ☰
    </button>
  {/if}

  {#if opened}
    <div class="overlay" onclick={() => opened = false} role="presentation"></div>
    <div class="sidebar">
      <div class="top">
        <h2>Noctis</h2>
        <button class="close" onclick={() => opened = false} aria-label="Close menu">✕</button>
      </div>
      <nav>
        <button class:active={currentPage === 'tasks'}   onclick={() => navigate('tasks')}>✨ Tasks</button>
        <button class:active={currentPage === 'focus'}   onclick={() => navigate('focus')}>🌙 Focus</button>
        <button class:active={currentPage === 'journal'} onclick={() => navigate('journal')}>📖 Journal</button>
        <button class:active={currentPage === 'settings'} onclick={() => navigate('settings')}>⚙ Settings</button>
      </nav>
    </div>
  {/if}
</div>

<!-- ── Mobile: bottom tab bar ── -->
<nav class="bottom-nav" aria-label="Main navigation">
  <button class:active={currentPage === 'tasks'} onclick={() => navigate('tasks')}>
    <span class="nav-icon">✨</span>
    <span class="nav-label">Tasks</span>
  </button>
  <button class:active={currentPage === 'focus'} onclick={() => navigate('focus')}>
    <span class="nav-icon">🌙</span>
    <span class="nav-label">Focus</span>
  </button>
  <button class:active={currentPage === 'journal'} onclick={() => navigate('journal')}>
    <span class="nav-icon">📖</span>
    <span class="nav-label">Journal</span>
  </button>
  <button class:active={currentPage === 'settings'} onclick={() => navigate('settings')}>
    <span class="nav-icon">⚙</span>
    <span class="nav-label">Settings</span>
  </button>
</nav>

<style>
  /* ── Desktop nav ── */
  .desktop-nav { display: block; }
  .bottom-nav  { display: none; }

  .menu-button {
    position: fixed;
    top: 24px;
    left: 24px;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 1px solid var(--border);
    z-index: 300;
    cursor: pointer;
    font-size: 1.2rem;
    color: var(--text);
    background: var(--surface);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    transition: transform 0.25s ease, background 0.25s ease;
  }

  .menu-button:hover {
    transform: scale(1.08);
    background: var(--surface-strong);
  }

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: 150;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    padding: 2rem;
    z-index: 200;
    background: var(--surface-strong);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border-right: 1px solid var(--border);
    animation: slideIn 0.35s ease;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    box-shadow: 4px 0 40px rgba(0, 0, 0, 0.08);
  }

  .sidebar::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 180px;
    background: linear-gradient(to top, rgba(var(--accent), 0.1), transparent);
    pointer-events: none;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    margin: 0;
    color: var(--heading);
    font-size: 2rem;
  }

  .close {
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 1.2rem;
    color: var(--text);
  }

  .sidebar nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .sidebar nav button {
    border: none;
    background: transparent;
    padding: 1rem 1.2rem;
    border-radius: 1.2rem;
    color: var(--text);
    font-size: 1.05rem;
    font-family: inherit;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
    letter-spacing: 0.01em;
    transition: all 0.25s ease;
  }

  .sidebar nav button:hover {
    background: var(--surface);
    transform: translateX(4px);
  }

  .sidebar nav button.active {
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    color: white;
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-40px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  /* ── Mobile: show bottom nav, hide desktop nav ── */
  @media (max-width: 768px) {
    .desktop-nav { display: none; }

    .bottom-nav {
      display: flex;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 300;
      background: var(--surface-strong);
      backdrop-filter: blur(28px);
      -webkit-backdrop-filter: blur(28px);
      border-top: 1px solid var(--border);
      padding-bottom: env(safe-area-inset-bottom, 0px);
      box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.06);
      align-items: stretch;
    }

    .bottom-nav button {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 10px 4px 12px;
      border: none;
      background: transparent;
      cursor: pointer;
      font-family: inherit;
      position: relative;
      transition: transform 0.15s ease;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
    }

    .bottom-nav button:active {
      transform: scale(0.92);
    }

    .bottom-nav button::before {
      content: '';
      position: absolute;
      top: 6px;
      left: 50%;
      transform: translateX(-50%) scaleX(0);
      width: 48px;
      height: 32px;
      border-radius: 999px;
      background: linear-gradient(135deg, var(--accent-3), var(--accent-2));
      opacity: 0.5;
      transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .bottom-nav button.active::before {
      transform: translateX(-50%) scaleX(1);
    }

    .nav-icon {
      font-size: 1.35rem;
      line-height: 1;
      position: relative;
      z-index: 1;
      transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .bottom-nav button.active .nav-icon {
      transform: translateY(-2px) scale(1.15);
    }

    .nav-label {
      font-size: 0.68rem;
      font-weight: 600;
      letter-spacing: 0.03em;
      color: var(--muted);
      position: relative;
      z-index: 1;
      transition: color 0.2s ease;
    }

    .bottom-nav button.active .nav-label {
      color: var(--heading);
    }
  }
</style>
