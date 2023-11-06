let offset = 0; //  смещение от левого края
const slider = document.querySelector(".swiper");
const arrowsPrev = document.querySelector(".button_prev");
const arrowsNext = document.querySelector(".button_next");

arrowsPrev.addEventListener("click", function () {
  offset = offset + 1164;
  if (offset > 1164) {
    offset = 0;
  }
  slider.style.left = -offset + "px";
});

arrowsNext.addEventListener("click", function () {
  offset = offset - 1164;
  if (offset < 0) {
    offset = 1164;
  }
  slider.style.left = -offset + "px";
});