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
    const m = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  }
</script>

<section class="page-section">
  <p class="small-label">Focus Mode</p>
  <h2 class="page-title">Deep work, soft light.</h2>

  <div class="focus-wrap">
    <div class="glass-card timer-card">
      <div class="mode-tabs">
        <button
          class:active-tab={focusMode === "work"}
          onclick={() => setMode("work")}>Work</button
        >
        <button
          class:active-tab={focusMode === "short"}
          onclick={() => setMode("short")}>Short break</button
        >
        <button
          class:active-tab={focusMode === "long"}
          onclick={() => setMode("long")}>Long break</button
        >
      </div>

      <div class="timer-display">{fmt(timeLeft)}</div>

      <div class="timer-actions">
        <button class="icon-btn" onclick={resetTimer}>↺</button>
        <button class="primary-btn" onclick={toggleTimer}>
          {running ? "Pause" : "Start"}
        </button>
      </div>

      <p class="sessions-label">
        🌙 {sessions} session{sessions !== 1 ? "s" : ""} completed today
      </p>
    </div>

    <div class="focus-side">
      <div class="glass-card tip-card">
        <p class="tip-title">✨ Focus tip</p>
        <p class="tip-text">
          Close unnecessary tabs. Put on ambient music. Let your mind settle
          before the timer starts.
        </p>
      </div>

      <div class="glass-card tip-card glow-card">
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

  .page-glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.35;
    pointer-events: none;
  }

  .glow-1 {
    width: 320px;
    height: 320px;
    background: #f5aeca;
    top: 0;
    left: -120px;
  }

  .glow-2 {
    width: 280px;
    height: 280px;
    background: #e9c6ff;
    bottom: 0;
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

  .focus-wrap {
    position: relative;
    z-index: 2;
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 2rem;
    align-items: start;
  }

  .glass-card {
    border-radius: 2rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.45);
    border: 1px solid rgba(255, 182, 193, 0.15);
    backdrop-filter: blur(25px);
  }

  .timer-card {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    box-shadow: 0 10px 40px rgba(245, 174, 202, 0.08);
  }

  .mode-tabs {
    display: flex;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.5);
    padding: 0.4rem;
    border-radius: 999px;
  }

  .mode-tabs button {
    border: none;
    background: transparent;
    padding: 0.6rem 1.4rem;
    border-radius: 999px;
    color: #c97898;
    font-size: 0.9rem;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .mode-tabs button:hover:not(.active-tab) {
    background: rgba(255, 255, 255, 0.55);
  }

  .mode-tabs button.active-tab {
    background: linear-gradient(135deg, #f5aeca, #e9c6ff);
    color: white;
    font-weight: 700;
    box-shadow: 0 4px 20px rgba(245, 174, 202, 0.25);
  }

  .timer-display {
    font-size: clamp(5rem, 14vw, 9rem);
    font-weight: 700;
    color: #d483a6;
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
    border: 1px solid rgba(255, 182, 193, 0.2);
    background: rgba(255, 255, 255, 0.55);
    color: #c97898;
    font-size: 1.3rem;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .icon-btn:hover {
    transform: rotate(-25deg) scale(1.08);
  }

  .primary-btn {
    border: none;
    padding: 1rem 2rem;
    border-radius: 999px;
    background: linear-gradient(135deg, #f5aeca, #e9c6ff);
    color: white;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .primary-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(245, 174, 202, 0.2);
  }

  .sessions-label {
    margin: 0;
    color: #b57f95;
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.45);
  }

  .focus-side {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .tip-card {
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .tip-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(245, 174, 202, 0.12);
  }

  .tip-title {
    margin: 0 0 1rem;
    font-size: 1.1rem;
    font-weight: 700;
    color: #cf7fa2;
  }

  .tip-text {
    margin: 0;
    color: #b57f95;
    line-height: 1.8;
  }

  .glow-card {
    background: linear-gradient(
      135deg,
      rgba(245, 174, 202, 0.22),
      rgba(233, 198, 255, 0.22)
    );
  }

  @media (max-width: 900px) {
    .focus-wrap {
      grid-template-columns: 1fr;
    }
  }
</style>
