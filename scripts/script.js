const container = document.querySelector(".container");
const navOpen = container.querySelector(".open-nav");
const navClose = container.querySelector(".close-nav");
const navLinks = Array.from(container.querySelectorAll(".nav-link"));
const nav = container.querySelector(".nav");

navOpen.addEventListener("click", () => {
  container.classList.add("nav-open");
});

navClose.addEventListener("click", () => {
  container.classList.remove("nav-open");
});
