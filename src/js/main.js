window.addEventListener("DOMContentLoaded", () => {});

let scrollYPosition = 0;
const overlay = document.getElementById("overlayBurgerMenu");

function openBurgerMenu() {
  scrollYPosition = window.scrollY;
  document.getElementById("overlayBurgerMenu").style.top = "0px";
  document.body.style.overflow = "hidden";
}

overlay.addEventListener("click", function (evt) {
  if (evt.target === overlay) {
    closeBurgerMenu();
  }
});

function closeBurgerMenu() {
  document.getElementById("overlayBurgerMenu").style.top = "-100vh";
  document.body.style.overflow = "auto";
  window.scrollTo(0, scrollYPosition);
}
