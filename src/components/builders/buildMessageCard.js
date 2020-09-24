"use strict";
import {
  colorPicker,
} from '../colors';
import {
  buildInput,
  buildTextArea,
} from './buildInput';
import buildButton from './buildButton';

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
  let submitButton = buildButton();

  // Add components to form
  form.appendChild(formHeader);
  form.appendChild(infoDiv);
  form.appendChild(messageDiv);
  form.appendChild(submitButton);

  // Add form to content
  content.appendChild(form);

}

export default buildMessageCard;
