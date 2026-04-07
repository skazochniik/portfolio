const refWords = document.querySelectorAll(".ref-word");
const refPopup = document.getElementById("refPopup");
const refPopupImg = document.getElementById("refPopupImg");

refWords.forEach(word => {
  word.addEventListener("click", () => {
    refPopupImg.src = word.dataset.img;
    refPopup.classList.add("active");
  });
});

refPopup.addEventListener("click", () => {
  refPopup.classList.remove("active");
  refPopupImg.src = "";
});