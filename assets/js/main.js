// Year
document.getElementById("y").textContent = new Date().getFullYear();

// Reveal-on-scroll animation (lightweight, no libraries)
const els = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("in");
  });
}, { threshold: 0.12 });
els.forEach(el => io.observe(el));

