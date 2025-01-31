// Save user data on signup
document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const accountType = document.getElementById('accountType').value;

  const user = {
    id: Date.now(),
    username,
    email,
    accountType,
  };

  localStorage.setItem('userData', JSON.stringify(user));
  localStorage.setItem('userType', accountType);
  alert('Signup successful! Redirecting to advertising page...');
  window.location.href = 'advertising.html';
});

// Save ads
function saveAd(title, type) {
  const user = JSON.parse(localStorage.getItem('userData'));
  const ads = JSON.parse(localStorage.getItem('ads')) || [];

  ads.push({
    id: Date.now(),
    userId: user.id,
    title,
    type,
  });

  localStorage.setItem('ads', JSON.stringify(ads));
}
