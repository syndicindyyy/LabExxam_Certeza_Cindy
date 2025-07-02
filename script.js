document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  form.addEventListener('submit', function (e) {
    let valid = true;
    let messages = [];

    if (emailInput.value.trim() === '') {
      messages.push('Email is required.');
      valid = false;
    }

    if (passwordInput.value.trim() === '') {
      messages.push('Password is required.');
      valid = false;
    }

    if (!valid) {
      e.preventDefault(); // prevent form from submitting
      alert(messages.join('\n')); // display all error messages
    }
  });
});
