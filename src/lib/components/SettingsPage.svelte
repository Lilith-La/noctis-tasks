<script>
  import { settings, applyTheme } from '$lib/settings.svelte.js';
  let editingName = $state(false);

  $effect(() => {
    applyTheme(settings.theme);
  });

  const themeOptions = [
    { id: 'pink',     label: 'Pink',     emoji: '🌸' },
    { id: 'lavender', label: 'Lavender', emoji: '💜' },
    { id: 'rose',     label: 'Rose',     emoji: '🌹' },
    { id: 'dark',     label: 'Dark',     emoji: '🌙' },
  ];
</script>

<section class="page-section">
  <p class="small-label">Settings</p>
  <h2 class="page-title">Your soft space, your way.</h2>

  <div class="settings-grid">

    <!-- Profile -->
    <div class="settings-card">
      <p class="settings-label">Profile</p>
      <div class="profile-row">
        <div class="avatar">🌙</div>
        <div class="profile-info">
          {#if editingName}
            <input
              class="name-input"
              bind:value={settings.userName}
              onblur={() => (editingName = false)}
              onkeydown={(e) => e.key === "Enter" && (editingName = false)}
              autofocus
            />
          {:else}
            <p class="profile-name">{settings.userName}</p>
            <button class="edit-link" onclick={() => (editingName = true)}>Edit name</button>
          {/if}
        </div>
      </div>
    </div>

    <!-- Theme -->
    <div class="settings-card">
      <p class="settings-label">Theme</p>
      <div class="theme-options">
        {#each themeOptions as t}
          <button
            class="theme-btn"
            class:active={settings.theme === t.id}
            data-theme-id={t.id}
            onclick={() => (settings.theme = t.id)}
            title={t.label}
          >
            <span class="theme-swatch" data-id={t.id}></span>
            <span class="theme-emoji">{t.emoji}</span>
            <span class="theme-label">{t.label}</span>
          </button>
        {/each}
      </div>
    </div>

    <!-- Preferences -->
    <div class="settings-card full-width">
      <p class="settings-label">Preferences</p>
      <div class="toggle-list">

        <div class="toggle-row">
          <div>
            <p class="toggle-label">Ambient sounds</p>
            <p class="toggle-sub">Soft background music during focus</p>
          </div>
          <button class="toggle" class:on={settings.soundOn} onclick={() => (settings.soundOn = !settings.soundOn)}>
            <span class="knob"></span>
          </button>
        </div>

        <div class="toggle-row">
          <div>
            <p class="toggle-label">Glow effects</p>
            <p class="toggle-sub">Dreamy pink glows in the background</p>
          </div>
          <button class="toggle" class:on={settings.glowOn} onclick={() => (settings.glowOn = !settings.glowOn)}>
            <span class="knob"></span>
          </button>
        </div>

        <div class="toggle-row">
          <div>
            <p class="toggle-label">Star animation</p>
            <p class="toggle-sub">Drifting star dots on the hero</p>
          </div>
          <button class="toggle" class:on={settings.starsOn} onclick={() => (settings.starsOn = !settings.starsOn)}>
            <span class="knob"></span>
          </button>
        </div>

      </div>
    </div>

  </div>
</section>

<style>
  .page-section {
    position: relative;
    overflow: hidden;
    padding: 2rem 8% 8rem;
  }

  .settings-grid {
    position: relative;
    z-index: 2;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .settings-card {
    border-radius: 2rem;
    padding: 2rem;
    background: var(--surface);
    border: 1px solid var(--border);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .settings-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
  }

  .full-width { grid-column: span 2; }

  .settings-label {
    margin: 0;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--accent);
    font-weight: 700;
  }

  /* ── Profile ── */
  .profile-row {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent-3), var(--accent-2));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    flex-shrink: 0;
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .profile-name {
    margin: 0;
    font-size: 1.3rem;
    color: var(--heading-soft);
    font-weight: 700;
  }

  .edit-link {
    border: none;
    background: transparent;
    color: var(--muted);
    font-size: 0.85rem;
    cursor: pointer;
    padding: 0;
    text-align: left;
    font-family: inherit;
    transition: color 0.2s ease;
  }

  .edit-link:hover { color: var(--heading); }

  .name-input {
    border: none;
    border-bottom: 1px solid var(--accent);
    background: transparent;
    color: var(--heading-soft);
    font-size: 1.2rem;
    font-weight: 700;
    font-family: inherit;
    outline: none;
    width: 100%;
  }

  /* ── Theme picker ── */
  .theme-options {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .theme-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    padding: 0.75rem 0.6rem;
    border-radius: 1.2rem;
    border: 2px solid transparent;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.25s ease;
    flex: 1;
    min-width: 60px;
  }

  .theme-btn:hover {
    background: var(--surface);
    transform: translateY(-2px);
  }

  .theme-btn.active {
    border-color: var(--accent);
    background: var(--surface);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  .theme-swatch {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: block;
    transition: transform 0.25s ease;
  }

  .theme-btn.active .theme-swatch {
    transform: scale(1.15);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
  }

  /* Swatch colors per theme */
  .theme-swatch[data-id="pink"]     { background: linear-gradient(135deg, #ffc8dd, #e9c6ff); }
  .theme-swatch[data-id="lavender"] { background: linear-gradient(135deg, #c5b3f5, #9b8de8); }
  .theme-swatch[data-id="rose"]     { background: linear-gradient(135deg, #ff8fab, #e8a0b8); }
  .theme-swatch[data-id="dark"]     { background: linear-gradient(135deg, #2a1535, #f5aeca); }

  .theme-emoji {
    font-size: 1.1rem;
    line-height: 1;
  }

  .theme-label {
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--muted);
    letter-spacing: 0.03em;
  }

  .theme-btn.active .theme-label {
    color: var(--heading);
  }

  /* ── Toggle rows ── */
  .toggle-list {
    display: flex;
    flex-direction: column;
  }

  .toggle-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1rem 0;
    border-bottom: 1px solid var(--border);
  }

  .toggle-row:last-child { border-bottom: none; }

  .toggle-label {
    margin: 0 0 0.2rem;
    color: var(--heading-soft);
    font-weight: 600;
    font-size: 1rem;
  }

  .toggle-sub {
    margin: 0;
    color: var(--muted);
    font-size: 0.85rem;
    line-height: 1.6;
  }

  .toggle {
    width: 56px;
    height: 30px;
    border-radius: 999px;
    border: none;
    background: var(--surface);
    border: 1px solid var(--border);
    cursor: pointer;
    position: relative;
    transition: background 0.3s ease, border-color 0.3s ease;
    flex-shrink: 0;
  }

  .toggle.on {
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    border-color: transparent;
  }

  .knob {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    transition: transform 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .toggle.on .knob { transform: translateX(26px); }

  @media (max-width: 768px) {
    .page-section { padding: 2rem 5% calc(1.5rem + 72px + env(safe-area-inset-bottom, 0px)); }
    .settings-grid { grid-template-columns: 1fr; }
    .full-width { grid-column: span 1; }
    .settings-card { padding: 1.5rem; }
  }

  @media (max-width: 480px) {
    .page-section { padding: 1.5rem 4% calc(1rem + 72px + env(safe-area-inset-bottom, 0px)); }
    .avatar { width: 52px; height: 52px; font-size: 1.4rem; }
    .settings-card { border-radius: 1.5rem; }
    .name-input { font-size: 16px; }
  }
</style>
