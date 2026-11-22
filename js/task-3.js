'use strict';

const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const inputHandler = event => {
  const text = input.value.trim();
  span.textContent = text.length > 0 ? text : 'Anonymous';
};

input.addEventListener('input', inputHandler);
