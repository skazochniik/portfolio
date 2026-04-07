const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const images = document.querySelectorAll(".poster img");

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
  });
});

lightbox.addEventListener("click", (e) => {
  if(e.target === lightbox){
    lightbox.classList.remove("active");
  }
});

prev.addEventListener("click", (e) => {
  e.stopPropagation();

  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

next.addEventListener("click", (e) => {
  e.stopPropagation();

  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});


document.addEventListener("keydown", (e) => {

  if (!lightbox.classList.contains("active")) return;

  if (e.key === "Escape") {
    lightbox.classList.remove("active");
  }

  if (e.key === "ArrowRight") {
    next.click();
  }

  if (e.key === "ArrowLeft") {
    prev.click();
  }

});
