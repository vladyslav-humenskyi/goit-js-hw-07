'use strict';

const loginForm = document.querySelector('.login-form');
const loginFormSubmit = event => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const email = data.get('email').trim();
  const password = data.get('password').trim();

  if (email.length > 0 && password.length > 0) {
    const loginObj = { email, password };
    console.log(loginObj);
    event.currentTarget.reset();
  } else {
    alert('All form fields must be filled in');
    return;
  }
};

loginForm.addEventListener('submit', loginFormSubmit);
