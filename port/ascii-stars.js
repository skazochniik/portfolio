const arts = document.querySelectorAll(".decorative-art");

arts.forEach((art) => {
  const raw = art.textContent;
  art.innerHTML = "";

  for (const ch of raw) {
    if (ch === "\n") {
      art.appendChild(document.createTextNode("\n"));
      continue;
    }

    const span = document.createElement("span");
    span.className = "char";
    span.textContent = ch;
    art.appendChild(span);
  }

  const chars = [...art.querySelectorAll(".char")]
    .filter(el => el.textContent.trim() !== "");

  function sparkleRandom() {
    const count = Math.floor(Math.random() * 6) + 2;

    for (let i = 0; i < count; i++) {
      const randomChar = chars[Math.floor(Math.random() * chars.length)];
      randomChar.classList.add("spark");

      setTimeout(() => {
        randomChar.classList.remove("spark");
      }, 250 + Math.random() * 400);
    }
  }

  setInterval(sparkleRandom, 150);
});