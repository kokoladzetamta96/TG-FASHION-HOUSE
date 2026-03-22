const burgerBtn = document.getElementById("burgerBtn");
const mainNav = document.getElementById("mainNav");
const navLinks = document.querySelectorAll(".menu a");

burgerBtn.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("active");
  });
});

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent!");
});