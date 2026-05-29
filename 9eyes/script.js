/* =============================================
   THE 9 EYES — SCRIPT.JS
   Custom cursor + noise canvas
   ============================================= */

// ---- CUSTOM CURSOR ----
const ring = document.getElementById('cursorRing');
const dot  = document.getElementById('cursorDot');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top  = mouseY + 'px';
});

function animateCursor() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// ---- NOISE CANVAS ----
const canvas = document.getElementById('noiseCanvas');
const ctx    = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function renderNoise() {
  const w = canvas.width;
  const h = canvas.height;
  const imageData = ctx.createImageData(w, h);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const v = Math.random() * 255;
    data[i]   = v;
    data[i+1] = v;
    data[i+2] = v;
    data[i+3] = 255;
  }

  ctx.putImageData(imageData, 0, 0);
}

// Render noise at ~12fps for a subtle film-grain feel
setInterval(renderNoise, 80);

// ---- SCROLL REVEAL ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.plato-card, .myth-entry, .theory-block, .omni-block, .stat, .bib-item'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  // Small delay so initial styles settle before observer fires
  setTimeout(() => {
    document.querySelectorAll('.in-view').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, 50);
});

// Callback for IntersectionObserver to apply the transition
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.plato-card, .myth-entry, .theory-block, .omni-block, .stat, .bib-item'
).forEach(el => revealObserver.observe(el));
