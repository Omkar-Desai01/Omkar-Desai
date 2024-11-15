// Theme Toggle
const themeToggle = document.querySelector(".theme-toggle");

function toggleTheme() {
  const currentTheme = document.body.getAttribute("data-theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Update theme toggle icon
  const icon = themeToggle.querySelector("i");
  icon.className = newTheme === "dark" ? "fas fa-moon" : "fas fa-sun";
}

// Initialize theme
const savedTheme = localStorage.getItem("theme") || "dark"; // Set dark as default
document.body.setAttribute("data-theme", savedTheme);

// Update initial icon
const icon = themeToggle.querySelector("i");
icon.className = savedTheme === "dark" ? "fas fa-moon" : "fas fa-sun";

themeToggle.addEventListener("click", toggleTheme);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");

function toggleMobileMenu() {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
}

mobileMenuBtn.addEventListener("click", toggleMobileMenu);

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-container")) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("open");
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("open");
  });
});
