<section class="hero">
  <div class="glow glow-1"></div>
  <div class="glow glow-2"></div>
  <div class="glow glow-3"></div>

  <div class="stars"></div>

  <div class="content">
    <p class="label">Noctis Tasks</p>

    <h1>Soft focus for midnight minds.</h1>

    <p class="subtitle">
      A gentle productivity space wrapped in dreamy pink glows, calm focus and
      late-night comfort.
    </p>

    <button class="primary"> Enter Workspace </button>
  </div>
</section>

<section class="dashboard">
  <div class="dashboard-top">
    <div>
      <p class="small-label">Daily Focus</p>

      <h2>Your calm productivity space.</h2>
    </div>

    <div class="progress-card">
      <span> Today's Progress </span>

      <div class="progress-bar">
        <div class="progress-fill"></div>
      </div>

      <p>72% completed</p>
    </div>
  </div>

  <div class="task-grid">
    <div class="task-card big">
      <div class="card-top">
        <span class="tag pink"> Design </span>

        <span class="time"> 11:45 PM </span>
      </div>

      <h3>Finish mobile dashboard UI</h3>

      <p>
        Refine spacing, typography and animations for the Noctis mobile
        experience.
      </p>
    </div>

    <div class="task-card">
      <span class="tag purple"> Study </span>

      <h3>Practice TypeScript</h3>

      <p>Complete advanced props & stores lesson.</p>
    </div>

    <div class="task-card">
      <span class="tag peach"> Wellness </span>

      <h3>Evening routine</h3>

      <p>Tea, journaling and calming playlist.</p>
    </div>

    <div class="task-card glow-card">
      <h3>Midnight Focus</h3>

      <p>Quiet hours. Soft music. Deep concentration.</p>
    </div>
  </div>
</section>

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
    cursor: pointer;
    box-shadow: 0 0 45px rgba(255, 192, 203, 0.28);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease,
      opacity 0.3s ease;
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

  .glow-1 {
    width: 550px;
    height: 550px;
    background: rgba(255, 192, 203, 0.3);
    top: -120px;
    left: -160px;
  }

  .glow-2 {
    width: 500px;
    height: 500px;
    background: rgba(233, 198, 255, 0.28);
    bottom: -120px;
    right: -140px;
  }

  .glow-3 {
    width: 380px;
    height: 380px;
    background: rgba(255, 214, 231, 0.24);
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .stars {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      rgba(255, 255, 255, 0.5) 1px,
      transparent 1px
    );

    background-size: 140px 140px;
    opacity: 0.08;
    animation: drift 25s linear infinite;
  }

  @keyframes drift {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-140px);
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: clamp(3.5rem, 14vw, 6rem);
    }

    .subtitle {
      font-size: 1rem;
    }

    .primary {
      width: 100%;
    }
  }

  .dashboard {
    position: relative;
    z-index: 2;
    padding: 2rem 8% 8rem;
  }

  .dashboard-top {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .small-label {
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.25em;
    font-size: 0.8rem;
  }

  .dashboard h2 {
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

    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    align-self: start;
  }

  .task-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 40px rgba(245, 174, 202, 0.15);
  }

  .task-card.big {
    grid-column: span 2;
  }

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

  .tag.pink {
    background: rgba(245, 174, 202, 0.2);
    color: #d87098;
  }

  .tag.purple {
    background: rgba(233, 198, 255, 0.22);
    color: #a46ad6;
  }

  .tag.peach {
    background: rgba(255, 214, 231, 0.3);
    color: #d88ca8;
  }

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
    background: linear-gradient(
      135deg,
      rgba(245, 174, 202, 0.3),
      rgba(233, 198, 255, 0.25)
    );
  }

  @media (max-width: 768px) {
    .dashboard-top {
      flex-direction: column;
      align-items: start;
    }

    .task-card.big {
      grid-column: span 1;
    }
  }
</style>
