"use strict";
import {
  colorPicker,
} from '../colors';
import {
  buildInput,
  buildTextArea,
} from './buildInput';
import {
  sendEmail,
} from '../../controllers/mailer';

const buildMessageCard = (content) => {
  // Build and set component attributes
  let form = document.createElement('div');
  form.setAttribute('class', 'contact-form');

  // Add title to form
  let formHeader = document.createElement('h3');
  formHeader.innerHTML = "- Send Message -";
  formHeader.style.color = colorPicker(4);

  // Container w name and email input
  let infoDiv = document.createElement('div');
  infoDiv.setAttribute('class', 'infoDiv');
  let nameInput = buildInput('name');
  let emailInput = buildInput('email');
  infoDiv.appendChild(nameInput);
  infoDiv.appendChild(emailInput);

  // Container w/ message textarea
  let messageInput = buildTextArea('message');
  let messageDiv = document.createElement('div');
  messageDiv.setAttribute('class', 'messageDiv');
  messageDiv.appendChild(messageInput);

  // Submit button
  let submitButton = document.createElement('button');
  submitButton.innerHTML = 'Submit';
  submitButton.addEventListener('click', (e) => {
    let ni = document.querySelector(".name-input");
    let ei = document.querySelector(".email-input");
    let mi = document.querySelector(".message-input");

    console.log(e);
    console.log(ni);
    console.log(ei);
    console.log(mi);
  })

  // Add components to form
  form.appendChild(formHeader);
  form.appendChild(infoDiv);
  form.appendChild(messageDiv);
  form.appendChild(submitButton);

  // Add form to content
  content.appendChild(form);

}

export default buildMessageCard;
