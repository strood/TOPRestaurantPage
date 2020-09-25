"use strict";

// Build button for message form
const buildButton = () => {
  let submitButton = document.createElement('button');
  submitButton.innerHTML = 'Submit';
  submitButton.setAttribute('type', 'submit');

  return submitButton;
}

export default buildButton;
