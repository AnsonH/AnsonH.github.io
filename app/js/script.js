const header = document.querySelector(".header");
const hamburger = document.querySelector("#hamburger");

// Toggling hamburger icon in navbar
hamburger.addEventListener("click", function () {
  header.classList.toggle("open");
});
