/* TYPING */
const words = ["Hacker", "Tech Explorer", "Gamer", "Future Builder"];
let wi = 0, ci = 0, del = false;
const typeEl = document.getElementById("typing");

setInterval(() => {
  if (!del && ci <= words[wi].length) {
    typeEl.textContent = words[wi].slice(0, ci++);
  } else if (del && ci >= 0) {
    typeEl.textContent = words[wi].slice(0, ci--);
  }
  if (ci === words[wi].length) del = true;
  if (del && ci === 0) { del = false; wi = (wi+1)%words.length; }
}, 120);

/* SCROLL REVEAL */
document.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100)
      el.classList.add("active");
  });
});

/* MATRIX */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array.from({length: columns}).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#22c55e";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const text = letters[Math.floor(Math.random()*letters.length)];
    ctx.fillText(text, i*fontSize, y*fontSize);
    drops[i] = y*fontSize > canvas.height && Math.random()>0.975 ? 0 : y+1;
  });
}
setInterval(drawMatrix, 33);

/* TERMINAL */
const terminal = document.getElementById("terminal-text");
const lines = [
  "Initializing system...",
  "Accessing kernel...",
  "Loading skills...",
  "HTML ✔ CSS ✔ Linux ✔",
  "Status: READY"
];
let li = 0;
function terminalType() {
  if (li < lines.length) {
    terminal.textContent += lines[li++] + "\n";
  }
}
setInterval(terminalType, 800);

/* 3D TILT */
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    card.style.transform =
      `rotateX(${-(y-r.height/2)/10}deg) rotateY(${(x-r.width/2)/10}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});
