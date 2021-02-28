const header = document.querySelector(".header");
const hamburger = document.querySelector("#hamburger");

// Toggling hamburger icon in navbar
hamburger.addEventListener("click", function () {
  header.classList.toggle("open");
});

// Remove focus after clicking for buttons & anchor links
const navLinks = document.querySelectorAll(".nav__links > li > a");
const focusElements = [...navLinks, hamburger];
focusElements.forEach(function (element) {
  element.addEventListener("click", function () {
    element.blur();
  });
});
