// This makes the mobile-nav-button work
const mobileNavEL = document.querySelector(".btn--mobile-nav");

const headerEL = document.querySelector(".header");

mobileNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav--open");
});

// Implementing scroll into page behaviour
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");
    console.log(href);

    if (href === "#") {
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element.scrollIntoView({
        behavior: "smooth",
      });

      // Hide the mobile nav if it exists
      if (headerEL.classList.contains("nav--open")) {
        headerEL.classList.remove("nav--open");
      }
    }
  });
});
