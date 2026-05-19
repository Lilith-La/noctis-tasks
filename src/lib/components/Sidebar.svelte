<script>

    let { currentPage = $bindable() } = $props();
  
    let opened = $state(false);
  
    function navigate(page) {
  
      currentPage = page;
  
      opened = false;
  
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  
  </script>
  
  {#if !opened}
    <button
      class="menu-button"
      onclick={() => opened = !opened}
    >
      ☰
    </button>
  {/if}
  
  {#if opened}
  
    <div
      class="overlay"
      onclick={() => opened = false}
    ></div>
  
    <div class="sidebar">
  
      <div class="top">
  
        <h2>
          Noctis
        </h2>
  
        <button
          class="close"
          onclick={() => opened = false}
        >
          ✕
        </button>
  
      </div>
  
      <nav>
  
        <button
          class:active={currentPage === 'tasks'}
          onclick={() => navigate('tasks')}
        >
          ✨ Tasks
        </button>
  
        <button
          class:active={currentPage === 'focus'}
          onclick={() => navigate('focus')}
        >
          🌙 Focus
        </button>
  
        <button
          class:active={currentPage === 'journal'}
          onclick={() => navigate('journal')}
        >
          📖 Journal
        </button>
  
        <button
          class:active={currentPage === 'settings'}
          onclick={() => navigate('settings')}
        >
          ⚙ Settings
        </button>
  
      </nav>
  
    </div>
  
  {/if}
  
  <style>
  
    .menu-button {
  
      position: fixed;
  
      top: 24px;
      left: 24px;
  
      width: 54px;
      height: 54px;
  
      border-radius: 50%;
  
      border: none;
  
      z-index: 300;
  
      cursor: pointer;
  
      font-size: 1.2rem;
  
      color: #c97898;
  
      background:
        rgba(255,255,255,0.55);
  
      backdrop-filter: blur(20px);
  
      border:
        1px solid rgba(255,182,193,0.15);
  
      transition:
        transform 0.25s ease,
        background 0.25s ease;
    }
  
    .menu-button:hover {
  
      transform: scale(1.08);
  
      background:
        rgba(255,255,255,0.7);
    }
  
    .overlay {
  
      position: fixed;
  
      inset: 0;
  
      background:
        rgba(255,255,255,0.12);
  
      backdrop-filter: blur(8px);
  
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
  
      background:
        rgba(255,255,255,0.6);
  
      backdrop-filter: blur(30px);
  
      border-right:
        1px solid rgba(255,182,193,0.18);
  
      animation:
        slideIn 0.35s ease;
  
      display: flex;
  
      flex-direction: column;
  
      gap: 3rem;

      box-shadow: 4px 0 40px rgba(245, 174, 202, 0.1);
    }

    .sidebar::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 180px;
      background: linear-gradient(to top, rgba(245, 174, 202, 0.15), transparent);
      pointer-events: none;
    }

    .top {
  
      display: flex;
  
      justify-content: space-between;
      align-items: center;
    }
  
    h2 {
  
      margin: 0;
  
      color: #d483a6;
  
      font-size: 2rem;
    }
  
    .close {
  
      border: none;
  
      background: transparent;
  
      cursor: pointer;
  
      font-size: 1.2rem;
  
      color: #c97898;
    }
  
    nav {
  
      display: flex;
  
      flex-direction: column;
  
      gap: 1rem;
    }
  
    nav button {
      border: none;
      background: transparent;
      padding: 1rem 1.2rem;
      border-radius: 1.2rem;
      color: #c97898;
      font-size: 1.05rem;
      font-family: inherit;
      font-weight: 500;
      text-align: left;
      cursor: pointer;
      letter-spacing: 0.01em;
      transition: all 0.25s ease;
    }
  
    nav button:hover {
  
      background:
        rgba(255,255,255,0.45);
  
      transform:
        translateX(4px);
    }
  
    nav button.active {
  
      background:
        linear-gradient(
          135deg,
          #f5aeca,
          #e9c6ff
        );
  
      color: white;
    }
  
    @keyframes slideIn {
  
      from {
  
        opacity: 0;
  
        transform:
          translateX(-40px);
      }
  
      to {
  
        opacity: 1;
  
        transform:
          translateX(0);
      }
  
    }
  
  </style>