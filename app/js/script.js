/**
 * Pause the program for specified amount of time
 * @param {number} ms Number of milliseconds to wait
 * @returns Promise
 */
async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * Remove a class from an element
 * @param {string} selector CSS selector for the element
 * @param {string} className A single class name
 */
function removeClass(selector, className) {
  document.querySelector(selector).classList.remove(className);
}

/** ScrollReveal (https://scrollrevealjs.org) */

const popUp = {
  delay: 150,
  scale: 0.92,
  viewFactor: 0.2, // Reveal when 20% of elements are within viewport
};

ScrollReveal().reveal(".about", popUp);

/** TypeIt.js (https://typeitjs.com/docs) */

const heroTitle2 = new TypeIt("#hero__title2", {
  speed: 27,
  startDelay: 350,
  cursorSpeed: 2000,
  afterComplete: async (step, instance) => {
    await sleep(150);
    instance.destroy();
    ScrollReveal().reveal(".hero__content", { delay: 100, distance: "10px" });
  },
});

new TypeIt("#hero__title1", {
  strings: 'Hi, I\'m Anson<span class="hero__hand_wave no-select">&#x1F44B;</span>',
  html: true,
  speed: 25,
  startDelay: 500,
  afterComplete: async (step, instance) => {
    await sleep(450);
    instance.destroy(); // Remove first title's cursor
    removeClass("#hero__chevron2", "invisible");
    removeClass("#hero__title2", "invisible");
    heroTitle2.go(); // Begin "typing" second title
  },
}).go();

/** Navbar & Links handling */

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
hamburger.addEventListener("click", () => {
  header.classList.contains("open") ? closeMobileMenu() : openMobileMenu();
});

// Close mobile menu after clicking certain elements
const closeMenuElements = [...navLinksMobile, headerOverlay];
closeMenuElements.forEach((element) => {
  element.addEventListener("click", function () {
    closeMobileMenu();
  });
});

// Remove focus after clicking for buttons & anchor links
const focusElements = [...navLinks, hamburger];
focusElements.forEach((element) => {
  element.addEventListener("click", function () {
    element.blur();
  });
});
