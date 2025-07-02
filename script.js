document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  form.addEventListener('submit', function (e) {
    let errors = [];

    // Validation
    if (emailInput.value.trim() === '') {
      errors.push('Email is required.');
    }

    if (passwordInput.value.trim() === '') {
      errors.push('Password is required.');
    }

    if (errors.length > 0) {
      e.preventDefault();  // Prevent the form from submitting
      alert(errors.join('\n'));
    } else {
      // If validation passes, it will redirect to home.html
      window.location.href = "home.html";
    }
  });
});
