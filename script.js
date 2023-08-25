// This makes the mobile-nav-button work
const mobileNavEL = document.querySelector(".btn--mobile-nav");

const headerEL = document.querySelector(".header");

mobileNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav--open");
});
