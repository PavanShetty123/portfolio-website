const text = ["Hacker", "Tech Explorer", "Gamer", "Future Builder"];
let i = 0, j = 0, current = "", deleting = false;
const el = document.getElementById("typing");

function type() {
  if (!deleting && j <= text[i].length) {
    current = text[i].slice(0, j++);
  } else if (deleting && j >= 0) {
    current = text[i].slice(0, j--);
  }

  el.textContent = current;

  if (j === text[i].length) deleting = true;
  if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % text.length;
  }
}
setInterval(type, 120);

const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(r => {
    if (r.getBoundingClientRect().top < window.innerHeight - 100) {
      r.classList.add("active");
    }
  });
});
