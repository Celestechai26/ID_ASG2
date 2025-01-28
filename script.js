// Select elements
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

// Toggle navbar and menu icon animation
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navbar.classList.toggle("active");
});

// Optional: Close navbar when a link is clicked
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("active");
    navbar.classList.remove("active");
  });
});
