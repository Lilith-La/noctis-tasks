const THEME_VARS = {
  pink: {
    '--bg':               '#fff7fb',
    '--surface':          'rgba(255,255,255,0.45)',
    '--surface-strong':   'rgba(255,255,255,0.65)',
    '--border':           'rgba(255,182,193,0.18)',
    '--text':             '#c97898',
    '--muted':            'rgba(180,120,145,0.72)',
    '--heading':          '#d483a6',
    '--heading-soft':     '#cf7fa2',
    '--accent':           '#f5aeca',
    '--accent-2':         '#e9c6ff',
    '--accent-3':         '#ffd6e7',
    '--btn-from':         '#ffc8dd',
    '--btn-mid':          '#f5b8d3',
    '--btn-to':           '#e9c6ff',
    '--glow-1':           'rgba(255,192,203,0.28)',
    '--glow-2':           'rgba(255,220,230,0.30)',
    '--glow-center':      'rgba(255,255,255,0.45)',
    '--hero-glow-1':      'rgba(255,192,203,0.30)',
    '--hero-glow-2':      'rgba(233,198,255,0.28)',
    '--hero-glow-3':      'rgba(255,214,231,0.24)',
    '--tag-study-bg':     'rgba(233,198,255,0.22)',
    '--tag-study-text':   '#a46ad6',
    '--tag-wellness-bg':  'rgba(255,214,231,0.30)',
    '--tag-wellness-text':'#d88ca8',
  },
  lavender: {
    '--bg':               '#f5f3ff',
    '--surface':          'rgba(255,255,255,0.45)',
    '--surface-strong':   'rgba(255,255,255,0.68)',
    '--border':           'rgba(160,145,220,0.20)',
    '--text':             '#7a6fb5',
    '--muted':            'rgba(120,108,175,0.72)',
    '--heading':          '#8c7fd4',
    '--heading-soft':     '#7a6fb5',
    '--accent':           '#b8a9f5',
    '--accent-2':         '#9b8de8',
    '--accent-3':         '#d8d0ff',
    '--btn-from':         '#c5b3f5',
    '--btn-mid':          '#b8a9f5',
    '--btn-to':           '#9b8de8',
    '--glow-1':           'rgba(180,160,245,0.25)',
    '--glow-2':           'rgba(155,141,232,0.22)',
    '--glow-center':      'rgba(245,243,255,0.50)',
    '--hero-glow-1':      'rgba(180,160,245,0.28)',
    '--hero-glow-2':      'rgba(155,141,232,0.24)',
    '--hero-glow-3':      'rgba(200,190,255,0.20)',
    '--tag-study-bg':     'rgba(155,141,232,0.20)',
    '--tag-study-text':   '#7a6fb5',
    '--tag-wellness-bg':  'rgba(200,190,255,0.25)',
    '--tag-wellness-text':'#8c7fd4',
  },
  rose: {
    '--bg':               '#fff2f6',
    '--surface':          'rgba(255,255,255,0.45)',
    '--surface-strong':   'rgba(255,255,255,0.68)',
    '--border':           'rgba(240,127,160,0.18)',
    '--text':             '#c05878',
    '--muted':            'rgba(170,88,115,0.72)',
    '--heading':          '#d4607e',
    '--heading-soft':     '#c05878',
    '--accent':           '#f07fa0',
    '--accent-2':         '#e8a0b8',
    '--accent-3':         '#ffc8d8',
    '--btn-from':         '#ff8fab',
    '--btn-mid':          '#f07fa0',
    '--btn-to':           '#e8a0b8',
    '--glow-1':           'rgba(255,143,171,0.28)',
    '--glow-2':           'rgba(232,160,184,0.25)',
    '--glow-center':      'rgba(255,255,255,0.45)',
    '--hero-glow-1':      'rgba(255,143,171,0.32)',
    '--hero-glow-2':      'rgba(232,160,184,0.28)',
    '--hero-glow-3':      'rgba(255,200,216,0.22)',
    '--tag-study-bg':     'rgba(232,160,184,0.20)',
    '--tag-study-text':   '#c05878',
    '--tag-wellness-bg':  'rgba(255,200,216,0.28)',
    '--tag-wellness-text':'#d4607e',
  },
  dark: {
    '--bg':               '#100b15',
    '--surface':          'rgba(255,255,255,0.07)',
    '--surface-strong':   'rgba(18,12,26,0.92)',
    '--border':           'rgba(245,174,202,0.13)',
    '--text':             '#e0a8c4',
    '--muted':            'rgba(210,155,185,0.62)',
    '--heading':          '#f5c8de',
    '--heading-soft':     '#e8aac4',
    '--accent':           '#f5aeca',
    '--accent-2':         '#c9a8e8',
    '--accent-3':         'rgba(245,174,202,0.20)',
    '--btn-from':         '#c87ab5',
    '--btn-mid':          '#e09ac8',
    '--btn-to':           '#b89ae0',
    '--glow-1':           'rgba(200,100,150,0.22)',
    '--glow-2':           'rgba(160,100,210,0.18)',
    '--glow-center':      'rgba(30,15,40,0.60)',
    '--hero-glow-1':      'rgba(200,100,150,0.25)',
    '--hero-glow-2':      'rgba(150,90,200,0.20)',
    '--hero-glow-3':      'rgba(180,100,160,0.16)',
    '--tag-study-bg':     'rgba(200,168,232,0.15)',
    '--tag-study-text':   '#c9a8e8',
    '--tag-wellness-bg':  'rgba(245,174,202,0.12)',
    '--tag-wellness-text':'#e8aac4',
  },
};

export function applyTheme(t) {
  if (typeof document === 'undefined') return;
  const theme = Object.keys(THEME_VARS).includes(t) ? t : 'pink';
  const root = document.documentElement;
  // data-theme for CSS stylesheet rules
  root.setAttribute('data-theme', theme);
  root.style.colorScheme = theme === 'dark' ? 'dark' : 'light';
  // inline styles as belt-and-suspenders (inline > stylesheet, always wins)
  const vars = THEME_VARS[theme];
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
