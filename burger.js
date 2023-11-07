const menu = document.querySelector(".burger-menu");
const navBtn = document.querySelector(".burger-menu__button");

const overlay = document.querySelector(".burger-menu__overlay");

//function stop (e) => e.preventDefaultDefault();

menu.addEventListener("click", function () {
  menu.classList.toggle("active");
});

overlay.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.classList.toggle("active");
});