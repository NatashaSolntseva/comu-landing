window.addEventListener("DOMContentLoaded", () => {
  console.log("start");
});

let scrollYPosition = 0;

function openBurgerMenu() {
  //console.log("open");
  scrollYPosition = window.scrollY;
  document.getElementById("overlayBurgerMenu").style.top = "0px";
  document.body.style.overflow = "hidden";
  modal.style.display = "block";
}

const overlay = document.getElementById("overlayBurgerMenu");

overlay.addEventListener("click", function (evt) {
  if (evt.target === overlay) {
    closeBurgerMenu();
  }
});

function closeBurgerMenu() {
  document.getElementById("overlayBurgerMenu").style.top = "-100vh";
  document.body.style.overflow = "auto";
  modal.style.display = "none";
  window.scrollTo(0, scrollYPosition);
}
