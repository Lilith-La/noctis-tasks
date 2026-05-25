<script>
  const STORAGE_KEY = 'noctis-journal';

  function loadEntries() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'); }
    catch { return null; }
  }

  let entries = $state(loadEntries() ?? [
    { id: 1, text: "Tonight felt calm. Pink sky, soft music, good thoughts.", date: "May 18" }
  ]);
  let journalText = $state("");

  $effect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  });

  function addEntry() {
    if (!journalText.trim()) return;
    const date = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" });
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

  <div class="journal-input-card">
    <textarea
      bind:value={journalText}
      placeholder="What's on your mind tonight…"
      rows="4"
    ></textarea>
    <div class="journal-actions">
      <span class="char-count">{journalText.length} chars</span>
      <button class="save-btn" onclick={addEntry}>Save entry</button>
    </div>
  </div>

  <div class="entries-list">
    {#each entries as entry (entry.id)}
      <div class="entry-card">
        <div class="entry-top">
          <span class="entry-date">{entry.date}</span>
          <button class="del-btn" onclick={() => deleteEntry(entry.id)}>✕</button>
        </div>
        <p class="entry-text">{entry.text}</p>
      </div>
    {/each}

    {#if entries.length === 0}
      <div class="empty-card">
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

  .journal-input-card {
    margin-top: 3rem;
    margin-bottom: 2rem;
    padding: 2rem;
    border-radius: 2rem;
    background: var(--surface);
    border: 1px solid var(--border);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
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
    color: var(--text);
    font-size: 1.05rem;
    font-family: inherit;
    line-height: 1.8;
    -webkit-appearance: none;
  }

  textarea::placeholder {
    color: var(--muted);
  }

  .journal-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .char-count {
    color: var(--muted);
    font-size: 0.85rem;
  }

  .save-btn {
    border: none;
    padding: 1rem 1.8rem;
    border-radius: 999px;
    background: linear-gradient(135deg, var(--btn-from), var(--btn-mid), var(--btn-to));
    color: white;
    font-size: 0.95rem;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .save-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  }

  .entries-list {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .entry-card {
    padding: 1.8rem;
    border-radius: 2rem;
    background: var(--surface);
    border: 1px solid var(--border);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .entry-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
  }

  .entry-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .entry-date {
    font-size: 0.8rem;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-weight: 700;
  }

  .del-btn {
    border: none;
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    font-size: 1rem;
    opacity: 0.6;
    transition: color 0.25s ease, transform 0.25s ease, opacity 0.25s ease;
  }

  .del-btn:hover {
    color: var(--heading);
    opacity: 1;
    transform: scale(1.15);
  }

  .entry-text {
    margin: 0;
    color: var(--muted);
    line-height: 1.9;
    font-size: 1rem;
  }

  .empty-card {
    padding: 3rem 2rem;
    border-radius: 2rem;
    background: var(--surface);
    border: 1px solid var(--border);
    text-align: center;
  }

  .empty-card p {
    margin: 0;
    color: var(--muted);
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    .page-section { padding: 2rem 5% calc(1.5rem + 72px + env(safe-area-inset-bottom, 0px)); }
    .journal-actions { flex-direction: column; align-items: stretch; }
    .save-btn { width: 100%; }
    .journal-input-card { padding: 1.5rem; border-radius: 1.5rem; }
    .entry-card { padding: 1.5rem; }
  }

  @media (max-width: 480px) {
    .page-section { padding: 1.5rem 4% calc(1rem + 72px + env(safe-area-inset-bottom, 0px)); }
    .journal-input-card { margin-top: 2rem; }
    textarea { font-size: 16px; min-height: 120px; }
    .entry-card { border-radius: 1.5rem; }
  }
</style>
