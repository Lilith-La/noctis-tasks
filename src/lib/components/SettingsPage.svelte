<script>
  import { settings } from '$lib/settings.svelte.js';

  let editingName = $state(false);
</script>

<section class="page-section">
  <p class="small-label">Settings</p>
  <h2 class="page-title">Your soft space, your way.</h2>

  <div class="settings-grid">

    <div class="glass-card settings-card">
      <p class="settings-label">Profile</p>

      <div class="profile-row">
        <div class="avatar">🌙</div>
        <div class="profile-info">
          {#if editingName}
            <input
              class="name-input"
              bind:value={settings.userName}
              onblur={() => editingName = false}
              onkeydown={e => e.key === 'Enter' && (editingName = false)}
              autofocus
            />
          {:else}
            <p class="profile-name">{settings.userName}</p>
            <button class="edit-link" onclick={() => editingName = true}>Edit name</button>
          {/if}
        </div>
      </div>
    </div>

    <div class="glass-card settings-card">
      <p class="settings-label">Theme</p>

      <div class="theme-options">
        <button class="theme-dot pink-theme"     class:active={settings.theme === 'pink'}     onclick={() => settings.theme = 'pink'}     title="Pink Noctis"></button>
        <button class="theme-dot lavender-theme" class:active={settings.theme === 'lavender'} onclick={() => settings.theme = 'lavender'} title="Lavender"></button>
        <button class="theme-dot rose-theme"     class:active={settings.theme === 'rose'}     onclick={() => settings.theme = 'rose'}     title="Rose"></button>
      </div>
    </div>

    <div class="glass-card settings-card full-width">
      <p class="settings-label">Preferences</p>

      <div class="toggle-list">
        <div class="toggle-row">
          <div>
            <p class="toggle-label">Ambient sounds</p>
            <p class="toggle-sub">Soft background music during focus</p>
          </div>
          <button class="toggle" class:on={settings.soundOn} onclick={() => settings.soundOn = !settings.soundOn}>
            <span class="knob"></span>
          </button>
        </div>

        <div class="toggle-row">
          <div>
            <p class="toggle-label">Glow effects</p>
            <p class="toggle-sub">Dreamy pink glows in the background</p>
          </div>
          <button class="toggle" class:on={settings.glowOn} onclick={() => settings.glowOn = !settings.glowOn}>
            <span class="knob"></span>
          </button>
        </div>

        <div class="toggle-row">
          <div>
            <p class="toggle-label">Star animation</p>
            <p class="toggle-sub">Drifting star dots on the hero</p>
          </div>
          <button class="toggle" class:on={settings.starsOn} onclick={() => settings.starsOn = !settings.starsOn}>
            <span class="knob"></span>
          </button>
        </div>
      </div>
    </div>

  </div>
</section>

<style>
  .settings-grid {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .settings-card {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .settings-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 35px rgba(245, 174, 202, 0.12);
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

  .profile-row {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(245,174,202,0.3), rgba(233,198,255,0.3));
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
    color: var(--text);
    font-weight: 700;
  }

  .edit-link {
    border: none;
    background: transparent;
    color: var(--muted);
    font-size: 0.85rem;
    font-family: inherit;
    cursor: pointer;
    padding: 0;
    text-align: left;
    transition: color 0.2s;
  }

  .edit-link:hover { color: var(--text); }

  .name-input {
    border: none;
    border-bottom: 1px solid rgba(245, 174, 202, 0.4);
    background: transparent;
    color: var(--text);
    font-size: 1.2rem;
    font-weight: 700;
    font-family: inherit;
    outline: none;
    width: 100%;
  }

  .theme-options {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .theme-dot {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 3px solid transparent;
    cursor: pointer;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .theme-dot:hover { transform: scale(1.1); }

  .theme-dot.active {
    border-color: white;
    transform: scale(1.18);
    box-shadow: 0 0 20px rgba(245, 174, 202, 0.4);
  }

  .pink-theme     { background: linear-gradient(135deg, #ffc8dd, #e9c6ff); }
  .lavender-theme { background: linear-gradient(135deg, #c5b3f5, #9b8de8); }
  .rose-theme     { background: linear-gradient(135deg, #f07fa0, #e8a0b8); }

  .toggle-list { display: flex; flex-direction: column; }

  .toggle-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1rem 0;
    border-bottom: 1px solid rgba(255, 182, 193, 0.1);
  }

  .toggle-row:last-child { border-bottom: none; }

  .toggle-label {
    margin: 0 0 0.2rem;
    color: var(--text);
    font-weight: 600;
    font-size: 0.95rem;
  }

  .toggle-sub {
    margin: 0;
    color: var(--muted);
    font-size: 0.82rem;
  }

  .toggle {
    width: 52px;
    height: 28px;
    border-radius: 999px;
    border: none;
    background: rgba(200, 180, 190, 0.25);
    cursor: pointer;
    position: relative;
    transition: background 0.3s ease;
    flex-shrink: 0;
  }

  .toggle.on { background: linear-gradient(135deg, var(--accent), var(--accent-2)); }

  .knob {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: white;
    transition: transform 0.3s ease;
    box-shadow: 0 2px 6px rgba(180, 120, 145, 0.2);
  }

  .toggle.on .knob { transform: translateX(24px); }

  @media (max-width: 768px) {
    .settings-grid { grid-template-columns: 1fr; }
    .full-width { grid-column: span 1; }
  }
</style>
