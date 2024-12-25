document.getElementById("menuToggle").addEventListener("click", function () {
  const offCanvasMenu = document.getElementById("offCanvasMenu");
  offCanvasMenu.classList.add("open");
  document.body.classList.add("no-scroll");
});
document.getElementById("closeMenu").addEventListener("click", function () {
  const offCanvasMenu = document.getElementById("offCanvasMenu");
  offCanvasMenu.classList.remove("open");
  document.body.classList.remove("no-scroll");
});
