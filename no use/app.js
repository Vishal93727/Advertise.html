// Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    document.body.style.setProperty("--light-bg", "#222");
    document.body.style.setProperty("--text-color", "#f9f9f9");
    themeToggle.innerText = "Light Mode";
  } else {
    document.body.style.setProperty("--light-bg", "#fff");
    document.body.style.setProperty("--text-color", "#333");
    themeToggle.innerText = "Dark Mode";
  }
});
// Redirect user to relevant advertising options
document.addEventListener("DOMContentLoaded", function () {
  const userType = localStorage.getItem("userType"); // "seller" or "company"

  if (userType) {
    if (userType === "seller") {
      document.querySelector(".option:first-child").style.display = "block";
    } else if (userType === "company") {
      document.querySelectorAll(".option").forEach((el) => {
        el.style.display = "block";
      });
    }
  }
});

// Save user type on sign-up
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const userType = document.getElementById("accountType").value;
  localStorage.setItem("userType", userType);
  window.location.href = "advertising.html";
});
