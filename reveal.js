(() => {
  const items = Array.from(document.querySelectorAll(".reveal"));
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  if (items.length === 0) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("is-in");
    });
  }, { threshold: 0.15 });

  items.forEach(el => io.observe(el));
})();
