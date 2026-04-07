const hint = document.querySelector(".scroll-hint");

function toggleHint(){
  if(window.scrollY > window.innerHeight * 0.05){
    hint.style.opacity = "0";
    hint.style.transform = "translateY(10px)";
  } else {
    hint.style.opacity = "1";
    hint.style.transform = "translateY(0)";
  }
}

window.addEventListener("scroll", toggleHint);
toggleHint();






const nav = document.querySelector(".nav-right");

function toggleNav(){
  if(window.scrollY > window.innerHeight * 0.3){
    nav.style.opacity = "0";
    nav.style.transform = "translateY(10px)";
  } else {
    nav.style.opacity = "1";
    nav.style.transform = "translateY(0)";
  }
}

window.addEventListener("scroll", toggleNav);
toggleNav();
