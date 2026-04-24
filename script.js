// MATRIX LOVE AIT AMRANE MODE FOR NICKY 
//love youuuuuuu so muchhh in case you're reading this <3




// CURSOR te3 chkupi 
const cursorDot  = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function animCursor() {
  rx += (mx - rx) * 0.14;
  ry += (my - ry) * 0.14;
  cursorDot.style.left  = mx + 'px';
  cursorDot.style.top   = my + 'px';
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top  = ry + 'px';
  requestAnimationFrame(animCursor);
})();


(function() {
  const el = document.getElementById('datestamp');
  const now = new Date();
  const fmt  = now.toISOString().slice(0,10).replace(/-/g, '.');
  el.textContent = fmt;
})();

document.getElementById('msg-id').textContent =
  'MSG-' + Math.floor(10000 + Math.random() * 90000);


   //MATRIX VOL ARCHI AHAHA
  
const canvas = document.getElementById("matrix");

const ctx    = canvas.getContext("2d");

const FS = 14;

const CHARS = "01";

let W, H, cols, rows, drops;

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;

  cols = Math.ceil(W / FS);

  rows = Math.ceil(H / FS);
  drops = Array.from({ length: cols }, () => Math.random() * -rows * 0.8);
  speeds    = Array.from({ length: cols }, () => 0.4 + Math.random() * 0.9);
  opacities = Array.from({ length: cols }, () => 0.35 + Math.random() * 0.65);
}

let speeds, opacities;
resize();
window.addEventListener("resize", resize);


const T_MSG    = 4200;
let state      = "rain";
let startTime  = Date.now();
let msgOpacity = 0;

const WORDS    = ["HAPPY", "NAME\nDAY", "BABY"];
let wordIdx    = 0;
let wordTimer  = 0;
const WORD_DUR = 1700;

function randChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

//main draw loop einiya
function draw() {
  const now     = Date.now();
  const elapsed = now - startTime;

  if (elapsed > T_MSG && state === "rain") {
    state     = "message";
    wordTimer = now;
  }

  ctx.fillStyle = "rgba(0,0,0,0.065)";
  ctx.fillRect(0, 0, W, H);

  const baseAlpha = state === "message"
    ? Math.max(0.05, 0.9 - msgOpacity * 0.72)
    : 0.9;

  ctx.font = `${FS}px 'Share Tech Mono', monospace`;

  for (let i = 0; i < cols; i++) {
    const x  = i * FS;
    const y  = drops[i] * FS;
    const op = opacities[i] * baseAlpha;

  //1
    ctx.fillStyle = `rgba(255, 230, 240, ${op * 1.05})`;
    ctx.fillText(randChar(), x, y);

  //2 rose
    ctx.fillStyle = `rgba(255, 45, 135, ${op * 0.65})`;
    ctx.fillText(randChar(), x, y - FS);

  // za3ma ghost
    ctx.fillStyle = `rgba(180, 20, 90, ${op * 0.2})`;
    ctx.fillText(randChar(), x, y - FS * 2);

    if (drops[i] * FS > H && Math.random() > 0.972) {
      drops[i]    = 0;
      opacities[i] = 0.35 + Math.random() * 0.65;
      speeds[i]    = 0.4 + Math.random() * 0.9;
    }
    drops[i] += speeds[i];
  }

  // messgae
  if (state === "message") {
    if (msgOpacity < 1) msgOpacity = Math.min(1, msgOpacity + 0.016);

    if (now - wordTimer > WORD_DUR) {
      wordIdx   = (wordIdx + 1) % WORDS.length;
      wordTimer = now;
    }

    const word  = WORDS[wordIdx];
    const lines = word.split("\n");
    const maxLen = Math.max(...lines.map(l => l.length));
    const mfs   = Math.min(W / maxLen * 0.52, 80);

    ctx.font = `300 ${mfs}px 'Share Tech Mono', monospace`;

    const lineH  = mfs * 1.18;
    const totalH = lineH * lines.length;
    const startY = H / 2 - totalH / 2 + mfs * 0.88;

    lines.forEach((line, li) => {
      const tw = ctx.measureText(line).width;
      const lx = (W - tw) / 2;
      const ly = startY + li * lineH;

      // Outer glow
      ctx.save();
      ctx.shadowColor  = `rgba(255,45,135,${msgOpacity * 0.55})`;
      ctx.shadowBlur   = 60;
      ctx.fillStyle = `rgba(255,45,135,${msgOpacity * 0.12})`;
      ctx.fillText(line, lx, ly);
      ctx.restore();

      // Mid glow
      ctx.save();
      ctx.shadowColor = `rgba(255,90,160,${msgOpacity * 0.8})`;
      ctx.shadowBlur  = 20;
      ctx.fillStyle   = `rgba(255,120,175,${msgOpacity * 0.35})`;
      ctx.fillText(line, lx, ly);
      ctx.restore();

      // Sharp fill
      ctx.fillStyle = `rgba(255, 245, 250, ${msgOpacity * 0.96})`;
      ctx.fillText(line, lx, ly);
    });

    document.getElementById("decrypt-btn").classList.add("visible");
  }
}

setInterval(draw, 38);

// LETTER FOR THE POOKIEST POOKIE WOOKIE MADE WITH LOVE FOR NICKYYYYY MWAH 
const SECRET =
`( watch the rizz ),
If the universe were made of code,
you'd be the line that makes my everything run.
You're my favourite glitch in reality.
I love you so fucking much 

Happy Name Day, my nicky 🩵 .`;

const GLYPHS = "01001101011010110100100101000010";

let letterOpen = false;

function openLetter() {
  if (letterOpen) return;
  letterOpen = true;

  const panel  = document.getElementById("letter-panel");
  const textEl = document.getElementById("letter-text");
  panel.classList.add("open");
  textEl.innerHTML = '<span class="type-cursor"></span>';

  let progress = 0;
  const total  = SECRET.length;
  const speed  = 22;
  const step   = 2;

  setTimeout(() => {
    const iv = setInterval(() => {
      progress = Math.min(progress + step, total);

      let html = '';
      for (let i = 0; i < progress; i++) {
        const ch = SECRET[i];
        if (ch === '\n') { html += '<br>'; continue; }
        html += ch;
      }

      // Binary noise mor l cursor
      const noise = Math.min(5, total - progress);
      for (let j = 0; j < noise; j++) {
        const g = Math.random() > 0.5 ? '1' : '0';
        const op = (0.12 + Math.random() * 0.14).toFixed(2);
        html += `<span style="color:rgba(255,45,135,${op})">${g}</span>`;
      }
      html += '<span class="type-cursor"></span>';
      textEl.innerHTML = html;

      if (progress >= total) {
        clearInterval(iv);
        textEl.innerHTML = SECRET.replace(/\n/g, '<br>');
      }
    }, speed);
  }, 600);
}


function closeLetter() {
  document.getElementById("letter-panel").classList.remove("open");
  setTimeout(() => { letterOpen = false; }, 1200);
}


document.getElementById("letter-panel").addEventListener("click", function(e) {
  if (e.target === this) closeLetter();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && letterOpen) closeLetter();
});
