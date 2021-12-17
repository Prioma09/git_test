const b = document.querySelector(".burgur");
const nav = document.querySelector(".nav-links");
const navlinks = document.querySelectorAll(".nav-links li");

const navSlide = function () {
  nav.classList.toggle("nav-active");
  navlinks.forEach((link, index) => {
    link.style.animation = `navlinkfade  0.5s ease forwards ${index}`;
  });
};

b.addEventListener("click", navSlide);
