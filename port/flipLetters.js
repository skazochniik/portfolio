(() => {
  const root = document.getElementById("flipWord");
  if (!root) return;

  
  const timers = new WeakMap();

  root.querySelectorAll("span").forEach((ch) => {
    ch.addEventListener("mouseenter", () => {
    
      const t = timers.get(ch);
      if (t) clearTimeout(t);

    
      ch.classList.add("flipped");
    });

    ch.addEventListener("mouseleave", () => {
    
      const timeout = setTimeout(() => {
        ch.classList.remove("flipped");
        timers.delete(ch);
      }, 100);

      timers.set(ch, timeout);
    });
  });
})();
