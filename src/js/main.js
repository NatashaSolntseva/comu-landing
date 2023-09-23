window.addEventListener("DOMContentLoaded", () => {
  console.log("start");
});

function openBurgerMenu() {
  //console.log("open");
  document.getElementById("overlayBurgerMenu").style.top = "0px";
  document.body.style.overflow = "hidden";
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
}
