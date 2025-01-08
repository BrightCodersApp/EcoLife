document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("header nav a");
  const currentUrl = window.location.href;
  navLinks.forEach(link => {
    if (currentUrl.includes(link.getAttribute("href"))) {
      link.style.fontWeight = "bold";
      link.style.textDecoration = "underline";
    }
  });});
const contactForm = document.querySelector(".contact form");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      event.preventDefault();
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    }
  }); }
const backToTopButton = document.createElement("button");
backToTopButton.textContent = "↑";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.padding = "10px";
backToTopButton.style.borderRadius = "50%";
backToTopButton.style.backgroundColor = "gold";
backToTopButton.style.color = "black";
backToTopButton.style.border = "none";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.display = "none";
document.body.appendChild(backToTopButton);
backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});