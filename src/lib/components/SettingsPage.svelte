<script>
  let userName = $state("Night Owl");
  let editingName = $state(false);
  let soundOn = $state(true);
  let glowOn = $state(true);
  let starsOn = $state(true);
  let theme = $state("pink");
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
              bind:value={userName}
              onblur={() => (editingName = false)}
              onkeydown={(e) => e.key === "Enter" && (editingName = false)}
              autofocus
            />
          {:else}
            <p class="profile-name">{userName}</p>
            <button class="edit-link" onclick={() => (editingName = true)}
              >Edit name</button
            >
          {/if}
        </div>
      </div>
    </div>

    <div class="glass-card settings-card">
      <p class="settings-label">Theme</p>

      <div class="theme-options">
        <button
          class="theme-dot pink-theme"
          class:active={theme === "pink"}
          onclick={() => (theme = "pink")}
          title="Pink Noctis"
        ></button>
        <button
          class="theme-dot lavender-theme"
          class:active={theme === "lavender"}
          onclick={() => (theme = "lavender")}
          title="Lavender"
        ></button>
        <button
          class="theme-dot rose-theme"
          class:active={theme === "rose"}
          onclick={() => (theme = "rose")}
          title="Rose"
        ></button>
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
          <button
            class="toggle"
            class:on={soundOn}
            onclick={() => (soundOn = !soundOn)}
          >
            <span class="knob"></span>
          </button>
        </div>

        <div class="toggle-row">
          <div>
            <p class="toggle-label">Glow effects</p>
            <p class="toggle-sub">Dreamy pink glows in the background</p>
          </div>
          <button
            class="toggle"
            class:on={glowOn}
            onclick={() => (glowOn = !glowOn)}
          >
            <span class="knob"></span>
          </button>
        </div>

        <div class="toggle-row">
          <div>
            <p class="toggle-label">Star animation</p>
            <p class="toggle-sub">Drifting star dots on the hero</p>
          </div>
          <button
            class="toggle"
            class:on={starsOn}
            onclick={() => (starsOn = !starsOn)}
          >
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

  .page-glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.35;
    pointer-events: none;
  }

  .glow-1 {
    width: 340px;
    height: 340px;
    background: #f5aeca;
    top: -80px;
    left: -120px;
  }

  .glow-2 {
    width: 280px;
    height: 280px;
    background: #e9c6ff;
    bottom: -100px;
    right: -100px;
  }

  .small-label {
    position: relative;
    z-index: 2;
    color: #d483a6;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .page-title {
    position: relative;
    z-index: 2;
    margin: 0;
    font-size: clamp(3rem, 6vw, 5rem);
    line-height: 1;
    color: #cf7fa2;
  }

  .page-subtitle {
    position: relative;
    z-index: 2;
    margin-top: 1.5rem;
    max-width: 650px;
    color: #b57f95;
    line-height: 1.8;
    font-size: 1.05rem;
  }

  .settings-grid {
    position: relative;
    z-index: 2;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .glass-card {
    border-radius: 2rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.45);
    border: 1px solid rgba(255, 182, 193, 0.15);
    backdrop-filter: blur(25px);
    box-shadow: 0 10px 40px rgba(245, 174, 202, 0.08);
  }

  .settings-card {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .settings-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 35px rgba(245, 174, 202, 0.12);
  }

  .full-width {
    grid-column: span 2;
  }

  .settings-label {
    margin: 0;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #f5aeca;
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
    background: linear-gradient(
      135deg,
      rgba(245, 174, 202, 0.3),
      rgba(233, 198, 255, 0.3)
    );
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
    color: #cf7fa2;
    font-weight: 700;
  }

  .edit-link {
    border: none;
    background: transparent;
    color: #b57f95;
    font-size: 0.85rem;
    cursor: pointer;
    padding: 0;
    text-align: left;
  }

  .edit-link:hover {
    color: #cf7fa2;
  }

  .name-input {
    border: none;
    border-bottom: 1px solid rgba(245, 174, 202, 0.4);
    background: transparent;
    color: #cf7fa2;
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
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 3px solid transparent;
    cursor: pointer;
    transition:
      transform 0.25s ease,
      border-color 0.25s ease;
  }

  .theme-dot:hover {
    transform: scale(1.1);
  }

  .theme-dot.active {
    border-color: white;
    transform: scale(1.15);
    box-shadow: 0 0 20px rgba(245, 174, 202, 0.3);
  }

  .pink-theme {
    background: linear-gradient(135deg, #ffc8dd, #e9c6ff);
  }

  .lavender-theme {
    background: linear-gradient(135deg, #c5b3f5, #a89de8);
  }

  .rose-theme {
    background: linear-gradient(135deg, #ff8fab, #fb6f92);
  }

  .toggle-list {
    display: flex;
    flex-direction: column;
  }

  .toggle-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1rem 0;
    border-bottom: 1px solid rgba(255, 182, 193, 0.1);
  }

  .toggle-row:last-child {
    border-bottom: none;
  }

  .toggle-label {
    margin: 0 0 0.2rem;
    color: #cf7fa2;
    font-weight: 600;
    font-size: 1rem;
  }

  .toggle-sub {
    margin: 0;
    color: #b57f95;
    font-size: 0.85rem;
    line-height: 1.6;
  }

  .toggle {
    width: 56px;
    height: 30px;
    border-radius: 999px;
    border: none;
    background: rgba(200, 180, 190, 0.25);
    cursor: pointer;
    position: relative;
    transition: background 0.3s ease;
    flex-shrink: 0;
  }

  .toggle.on {
    background: linear-gradient(135deg, #f5aeca, #e9c6ff);
  }

  .knob {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: white;
    transition: transform 0.3s ease;
    box-shadow: 0 2px 8px rgba(180, 120, 145, 0.2);
  }

  .toggle.on .knob {
    transform: translateX(26px);
  }

  @media (max-width: 768px) {
    .settings-grid {
      grid-template-columns: 1fr;
    }

    .full-width {
      grid-column: span 1;
    }
  }
</style>
