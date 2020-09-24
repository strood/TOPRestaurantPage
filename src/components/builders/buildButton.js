"use strict";

import {
  sendEmail,
  validateInput,
} from '../../controllers/mailer';
import renderError from '../renderError';


// Build button for message form
const buildButton = () => {
  let submitButton = document.createElement('button');
  submitButton.innerHTML = 'Submit';
  submitButton.addEventListener('click', (e) => {

    let inputs = document.getElementsByClassName('form-control');
    if(validateInput(inputs)) {
      sendEmail(inputs)
    } else {
      console.log("invalid inputs, please fill out all sections");
      renderError();
    }

  })

  return submitButton;
}

export default buildButton;
