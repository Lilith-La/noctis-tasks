export const THEMES = {
  pink: {
    '--accent':  '#f5aeca',
    '--accent-2': '#e9c6ff',
    '--accent-3': '#ffd6e7',
    '--text':    '#c97898',
    '--muted':   'rgba(180, 120, 145, 0.72)',
    '--bg':      '#fff7fb',
    '--border':  'rgba(255, 182, 193, 0.18)',
  },
  lavender: {
    '--accent':  '#b8a9f5',
    '--accent-2': '#9b8de8',
    '--accent-3': '#d8d0ff',
    '--text':    '#7a6fb5',
    '--muted':   'rgba(120, 110, 180, 0.72)',
    '--bg':      '#f5f3ff',
    '--border':  'rgba(160, 145, 220, 0.18)',
  },
  rose: {
    '--accent':  '#f07fa0',
    '--accent-2': '#e8a0b8',
    '--accent-3': '#ffc8d8',
    '--text':    '#c05878',
    '--muted':   'rgba(170, 88, 115, 0.72)',
    '--bg':      '#fff2f6',
    '--border':  'rgba(240, 127, 160, 0.18)',
  },
};

export function applyTheme(t) {
  const vars = THEMES[t] || THEMES.pink;
  const root = document.documentElement;
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
}

function load() {
  try { return JSON.parse(localStorage.getItem('noctis-settings') || '{}'); }
  catch { return {}; }
}

function createSettings() {
  const saved = typeof window !== 'undefined' ? load() : {};

  let data = $state({
    theme:    saved.theme    ?? 'pink',
    soundOn:  saved.soundOn  ?? true,
    glowOn:   saved.glowOn   ?? true,
    starsOn:  saved.starsOn  ?? true,
    userName: saved.userName ?? 'Night Owl',
  });

  function save() {
    if (typeof window !== 'undefined')
      localStorage.setItem('noctis-settings', JSON.stringify(data));
  }

  return {
    get theme()     { return data.theme; },
    set theme(v)    { data.theme = v;    save(); },
    get soundOn()   { return data.soundOn; },
    set soundOn(v)  { data.soundOn = v;  save(); },
    get glowOn()    { return data.glowOn; },
    set glowOn(v)   { data.glowOn = v;   save(); },
    get starsOn()   { return data.starsOn; },
    set starsOn(v)  { data.starsOn = v;  save(); },
    get userName()  { return data.userName; },
    set userName(v) { data.userName = v; save(); },
  };
}

export const settings = createSettings();
