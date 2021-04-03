const header = document.querySelector(".header");
const headerOverlay = document.querySelector(".header__overlay");
const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelectorAll(".nav__links > li > a");
const navLinksMobile = document.querySelectorAll(".nav__mobile_links > li > a");
const fadeElements = document.querySelectorAll(".has-fade");

function openMobileMenu() {
  header.classList.add("open");
  fadeElements.forEach((item) => {
    item.classList.add("fade-in");
    item.classList.remove("fade-out");
  });
}

function closeMobileMenu() {
  header.classList.remove("open");
  fadeElements.forEach((item) => {
    item.classList.remove("fade-in");
    item.classList.add("fade-out");
  });
}

// Toggling hamburger icon in navbar
hamburger.addEventListener("click", function () {
  header.classList.contains("open") ? closeMobileMenu() : openMobileMenu();
});

// Close mobile menu after clicking certain elements
const closeMenuElements = [...navLinksMobile, headerOverlay];
closeMenuElements.forEach(function (element) {
  element.addEventListener("click", function () {
    closeMobileMenu();
  });
});

// Remove focus after clicking for buttons & anchor links
const focusElements = [...navLinks, hamburger];
focusElements.forEach(function (element) {
  element.addEventListener("click", function () {
    element.blur();
  });
});
