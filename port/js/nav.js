(() => {
  const nav = document.getElementById("topnav");
  const sections = Array.from(document.querySelectorAll("section[data-nav]"));

  if (!nav || sections.length === 0) return;

  
  function setNavMode(sectionMode) {
    const navMode = sectionMode === "light" ? "is-dark" : "is-light";
    nav.classList.toggle("is-dark", navMode === "is-dark");
    nav.classList.toggle("is-light", navMode === "is-light");
  }

  setNavMode(sections[0].dataset.nav);

  const io = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    setNavMode(visible.target.dataset.nav);
  }, {
    threshold: [0.2, 0.35, 0.5, 0.7],
    rootMargin: "-70px 0px 0px 0px"
  });

  sections.forEach(s => io.observe(s));
})();
