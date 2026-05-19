<script>
  let entries = $state([
    {
      id: 1,
      text: "Tonight felt calm. Pink sky, soft music, good thoughts.",
      date: "May 18",
    },
  ]);
  let journalText = $state("");

  function addEntry() {
    if (!journalText.trim()) return;
    const date = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    entries = [{ id: Date.now(), text: journalText, date }, ...entries];
    journalText = "";
  }

  function deleteEntry(id) {
    entries = entries.filter((e) => e.id !== id);
  }
</script>

<section class="page-section">
  <p class="small-label">Dream Journal</p>
  <h2 class="page-title">Capture your midnight thoughts.</h2>

  <div class="glass-card journal-input-card">
    <textarea
      bind:value={journalText}
      placeholder="What's on your mind tonight…"
      rows="4"
    ></textarea>
    <div class="journal-actions">
      <span class="char-count">{journalText.length} chars</span>
      <button class="primary-btn" onclick={addEntry}>Save entry</button>
    </div>
  </div>

  <div class="entries-list">
    {#each entries as entry (entry.id)}
      <div class="glass-card entry-card">
        <div class="entry-top">
          <span class="entry-date">{entry.date}</span>
          <button class="del-btn" onclick={() => deleteEntry(entry.id)}
            >✕</button
          >
        </div>
        <p class="entry-text">{entry.text}</p>
      </div>
    {/each}

    {#if entries.length === 0}
      <div class="glass-card empty-card">
        <p>No entries yet. Write your first thought ✨</p>
      </div>
    {/if}
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
    width: 320px;
    height: 320px;
    background: #f5aeca;
    top: -80px;
    left: -120px;
  }

  .glow-2 {
    width: 280px;
    height: 280px;
    background: #e9c6ff;
    bottom: -80px;
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

  .glass-card {
    position: relative;
    z-index: 2;
    border-radius: 2rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.45);
    border: 1px solid rgba(255, 182, 193, 0.15);
    backdrop-filter: blur(25px);
    box-shadow: 0 10px 40px rgba(245, 174, 202, 0.08);
  }

  .journal-input-card {
    margin-top: 3rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  textarea {
    width: 100%;
    border: none;
    outline: none;
    resize: vertical;
    min-height: 140px;
    background: transparent;
    color: #c97898;
    font-size: 1.05rem;
    font-family: inherit;
    line-height: 1.8;
  }

  textarea::placeholder {
    color: rgba(180, 120, 145, 0.45);
  }

  .journal-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .char-count {
    color: #b57f95;
    font-size: 0.85rem;
  }

  .primary-btn {
    border: none;
    padding: 1rem 1.8rem;
    border-radius: 999px;
    background: linear-gradient(135deg, #f5aeca, #e9c6ff);
    color: white;
    font-size: 0.95rem;
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

  .entries-list {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .entry-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .entry-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 35px rgba(245, 174, 202, 0.12);
  }

  .entry-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .entry-date {
    font-size: 0.8rem;
    color: #f5aeca;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-weight: 700;
  }

  .del-btn {
    border: none;
    background: transparent;
    color: rgba(180, 120, 145, 0.5);
    cursor: pointer;
    font-size: 1rem;
    transition:
      color 0.25s ease,
      transform 0.25s ease;
  }

  .del-btn:hover {
    color: #d483a6;
    transform: scale(1.15);
  }

  .entry-text {
    margin: 0;
    color: #b57f95;
    line-height: 1.9;
    font-size: 1rem;
  }

  .empty-card {
    text-align: center;
    padding: 3rem 2rem;
  }

  .empty-card p {
    margin: 0;
    color: #b57f95;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    .journal-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .primary-btn {
      width: 100%;
    }
  }
</style>
