document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });

    // Save Editable Name
    document.querySelectorAll(".save-profile").forEach((btn, index) => {
        btn.addEventListener("click", function () {
            let profileName = document.querySelectorAll(".profile-name")[index].textContent;
            localStorage.setItem("profileName" + index, profileName);
            alert("Profile updated!");
        });
    });

    // Load Saved Names
    document.querySelectorAll(".profile-name").forEach((name, index) => {
        if (localStorage.getItem("profileName" + index)) {
            name.textContent = localStorage.getItem("profileName" + index);
        }
    });

    // Logout Button
    document.getElementById("logout-btn").addEventListener("click", () => {
        if (confirm("Are you sure you want to log out?")) {
            window.location.href = "index.html"; // Redirect to home page
        }
    });
});
// Mobile Navigation Toggle (Hamburger Menu)
const hamburgerIcon = document.getElementById('hamburger-icon');
const navbarLinks = document.getElementById('navbar-links');

// Toggle the mobile menu on click
hamburgerIcon.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// Newsletter Subscription Handling
const newsletterForm = document.querySelector('.newsletter-form');
const emailInput = newsletterForm.querySelector('input[type="email"]');

// Check if the email is valid
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Handle the form submission
newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (isValidEmail(email)) {
    alert('Thank you for subscribing!');
    emailInput.value = ''; // Clear the input field
  } else {
    alert('Please enter a valid email address.');
  }
});

// Smooth Scrolling for Anchor Links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(anchor => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();
    
    const targetId = anchor.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjusted for a little space
        behavior: 'smooth'
      });
    }
  });
});

  function loginUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!name || !email) {
      alert('Please enter your name and email');
      return;
    }

    // Fetch existing users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (!existingUser) {
      users.push({ name, email, ads: 0 }); // Add new user
    }

    localStorage.setItem('users', JSON.stringify(users)); // Store updated list

    alert('Login successful!');
    window.location.href = 'profile.html'; // Redirect to profile page
  }

  function loadProfiles() {
    const profileContainer = document.getElementById('profile-container');
    profileContainer.innerHTML = ''; // Clear old profiles

    // Get users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.length === 0) {
      alert('No users found. Please sign in first.');
      window.location.href = 'login.html';
      return;
    }

    users.forEach(user => {
      const profileCard = document.createElement('div');
      profileCard.classList.add('profile-card');
      
      profileCard.innerHTML = `
        <img src="https://via.placeholder.com/100" alt="Profile Picture" class="profile-image">
        <h2 class="profile-name" contenteditable="true">${user.name}</h2>
        <p class="profile-email">${user.email}</p>
        <p class="profile-ads">Total Ads Posted: <span>${user.ads || 0}</span></p>
        <button class="btn btn-secondary save-profile">Save Changes</button>
      `;

      profileContainer.appendChild(profileCard);
    });
  }

  // Logout function
  document.getElementById('logout-btn').addEventListener('click', function() {
    localStorage.removeItem('users');
    alert('Logged out successfully!');
    window.location.href = 'login.html';
  });

  window.onload = loadProfiles;
const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    document.getElementById('profile-name').textContent = 'Name: ' + user.name;
    document.getElementById('profile-email').textContent = 'Email: ' + user.email;
  } else {
    alert('No user found. Please sign in first.');
    window.location.href = 'login.html'; // Redirect to sign-in page if no user is found
  }