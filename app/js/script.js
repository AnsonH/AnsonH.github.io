const header = document.querySelector(".header");
const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelectorAll(".nav__links > li > a");
const navLinksMobile = document.querySelectorAll(".nav__mobile_links > li > a");

// Toggling hamburger icon in navbar
hamburger.addEventListener("click", function () {
  header.classList.toggle("open");
});

// Close mobile menu after clicking on link
navLinksMobile.forEach(function (element) {
  element.addEventListener("click", function () {
    header.classList.remove("open");
  });
});

// Remove focus after clicking for buttons & anchor links
const focusElements = [...navLinks, hamburger];
focusElements.forEach(function (element) {
  element.addEventListener("click", function () {
    element.blur();
  });
});
