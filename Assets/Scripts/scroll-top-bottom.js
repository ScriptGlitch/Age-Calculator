const content = document.querySelector(".content");
const scrollButtons = document.getElementById("scrollButtons");
const scrollUp = document.getElementById("scrollUp");
const scrollDown = document.getElementById("scrollDown");
const updateScrollButtons = () => {
  const scrollPosition = content.scrollTop;
  const contentHeight = content.scrollHeight;
  const visibleHeight = content.clientHeight;
  if (scrollPosition > 0) {
    scrollButtons.classList.add("visible");
  } else {
    scrollButtons.classList.remove("visible");
  }
  if (scrollPosition + visibleHeight >= contentHeight - 1) {
    scrollDown.style.display = "none";
  } else {
    scrollDown.style.display = "block";
  }
};
const addButtonEffect = (button) => {
  button.classList.add("active");
  setTimeout(() => {
    button.classList.remove("active");
  }, 200);
};
scrollUp.addEventListener("click", function () {
  addButtonEffect(scrollUp);
  content.scrollTo({ top: 0, behavior: "smooth" });
});
scrollDown.addEventListener("click", function () {
  addButtonEffect(scrollDown);
  content.scrollTo({ top: content.scrollHeight, behavior: "smooth" });
});
content.addEventListener("scroll", updateScrollButtons);
updateScrollButtons();
