<script>
  const MODES = { work: 25 * 60, short: 5 * 60, long: 15 * 60 };

  let focusMode = $state("work");
  let timeLeft = $state(MODES.work);
  let running = $state(false);
  let sessions = $state(0);
  let interval = null;

  function setMode(m) {
    focusMode = m;
    timeLeft = MODES[m];
    running = false;
    clearInterval(interval);
  }

  function toggleTimer() {
    if (running) {
      clearInterval(interval);
      running = false;
    } else {
      running = true;
      interval = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
        } else {
          clearInterval(interval);
          running = false;
          if (focusMode === "work") sessions++;
        }
      }, 1000);
    }
  }

  function resetTimer() {
    clearInterval(interval);
    running = false;
    timeLeft = MODES[focusMode];
  }

  function fmt(s) {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  }
</script>

<section class="page-section">
  <p class="small-label">Focus Mode</p>
  <h2 class="page-title">Deep work, soft light.</h2>

  <div class="focus-wrap">
    <div class="timer-card">
      <div class="mode-tabs">
        <button class:active-tab={focusMode === "work"}  onclick={() => setMode("work")}>Work</button>
        <button class:active-tab={focusMode === "short"} onclick={() => setMode("short")}>Short break</button>
        <button class:active-tab={focusMode === "long"}  onclick={() => setMode("long")}>Long break</button>
      </div>

      <div class="timer-display">{fmt(timeLeft)}</div>

      <div class="timer-actions">
        <button class="icon-btn" onclick={resetTimer}>↺</button>
        <button class="start-btn" onclick={toggleTimer}>
          {running ? "Pause" : "Start"}
        </button>
      </div>

      <p class="sessions-label">
        🌙 {sessions} session{sessions !== 1 ? "s" : ""} completed today
      </p>
    </div>

    <div class="focus-side">
      <div class="tip-card">
        <p class="tip-title">✨ Focus tip</p>
        <p class="tip-text">
          Close unnecessary tabs. Put on ambient music. Let your mind settle
          before the timer starts.
        </p>
      </div>

      <div class="tip-card glow-card">
        <p class="tip-title">🌸 Breathing</p>
        <p class="tip-text">
          Inhale 4s · Hold 4s · Exhale 6s. Repeat before each session.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .page-section {
    position: relative;
    padding: 2rem 8% 8rem;
    overflow: hidden;
  }

  .focus-wrap {
    position: relative;
    z-index: 2;
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 2rem;
    align-items: start;
  }

  .timer-card {
    border-radius: 2rem;
    padding: 2.5rem 2rem;
    background: var(--surface);
    border: 1px solid var(--border);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  }

  .mode-tabs {
    display: flex;
    gap: 0.5rem;
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 0.4rem;
    border-radius: 999px;
  }

  .mode-tabs button {
    border: none;
    background: transparent;
    padding: 0.6rem 1.4rem;
    border-radius: 999px;
    color: var(--text);
    font-size: 0.9rem;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .mode-tabs button:hover:not(.active-tab) {
    background: var(--surface-strong);
  }

  .mode-tabs button.active-tab {
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    color: white;
    font-weight: 700;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .timer-display {
    font-size: clamp(5rem, 14vw, 9rem);
    font-weight: 700;
    color: var(--heading);
    letter-spacing: -0.06em;
    line-height: 1;
  }

  .timer-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .icon-btn {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text);
    font-size: 1.3rem;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .icon-btn:hover {
    transform: rotate(-25deg) scale(1.08);
    background: var(--surface-strong);
  }

  .start-btn {
    border: none;
    padding: 1rem 2.5rem;
    border-radius: 999px;
    background: linear-gradient(135deg, var(--btn-from), var(--btn-mid), var(--btn-to));
    color: white;
    font-size: 1rem;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .start-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  }

  .sessions-label {
    margin: 0;
    color: var(--muted);
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
    border-radius: 999px;
    background: var(--surface);
    border: 1px solid var(--border);
  }

  .focus-side {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .tip-card {
    border-radius: 2rem;
    padding: 1.8rem;
    background: var(--surface);
    border: 1px solid var(--border);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .tip-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  }

  .tip-title {
    margin: 0 0 1rem;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--heading-soft);
  }

  .tip-text {
    margin: 0;
    color: var(--muted);
    line-height: 1.8;
  }

  .glow-card {
    background: linear-gradient(135deg, var(--accent-3), var(--accent-2));
  }

  @media (max-width: 900px) {
    .focus-wrap { grid-template-columns: 1fr; }
  }

  @media (max-width: 768px) {
    .page-section { padding: 2rem 5% calc(1.5rem + 72px + env(safe-area-inset-bottom, 0px)); }
    .focus-wrap { margin-top: 2.5rem; }
    .mode-tabs { flex-wrap: wrap; justify-content: center; }
    .mode-tabs button { flex: 1; min-width: 80px; text-align: center; }
  }

  @media (max-width: 480px) {
    .page-section { padding: 1.5rem 4% calc(1rem + 72px + env(safe-area-inset-bottom, 0px)); }
    .timer-display { font-size: clamp(4rem, 22vw, 7rem); }
    .timer-card { padding: 1.5rem; gap: 1.5rem; }
    .tip-card { padding: 1.3rem; border-radius: 1.5rem; }
    .mode-tabs { padding: 0.35rem; }
    .mode-tabs button { padding: 0.55rem 1rem; font-size: 0.82rem; }
    .timer-actions { gap: 0.75rem; }
    .start-btn { padding: 0.9rem 1.8rem; }
  }
</style>
