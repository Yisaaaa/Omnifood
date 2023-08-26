// This makes the mobile-nav-button work
const mobileNavEL = document.querySelector(".btn--mobile-nav");
const htmlEL = document.querySelector("html");
const headerEL = document.querySelector(".header");

mobileNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav--open");

  if (headerEL.classList.contains("nav--open")) {
    htmlEL.style.overflowY = "hidden";
  } else htmlEL.style.overflow = "auto";
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
        htmlEL.style.overflow = "auto";
      }
    }
  });
});

// IMPLEMENTING STICKY HEADER
const target = document.querySelector(".hero-section");
const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      console.log("not visible");
      document.body.classList.add("sticky");
    } else document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(target);
