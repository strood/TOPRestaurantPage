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
  const form = document.createElement('form');
  form.setAttribute('class', 'contact-form');
  // Set action to send our form info with formspree
  form.setAttribute('action', 'https://formspree.io/xwkwpevn');
  form.setAttribute('method', 'post');

  // Add title to form
  const formHeader = document.createElement('h3');
  formHeader.innerHTML = '- Send Message -';
  formHeader.style.color = colorPicker(4);

  // Container w name and email input
  const infoDiv = document.createElement('div');
  infoDiv.setAttribute('class', 'infoDiv');
  const nameInput = buildInput('name');
  const emailInput = buildInput('email');
  infoDiv.appendChild(nameInput);
  infoDiv.appendChild(emailInput);

  // Container w/ message textarea
  const messageInput = buildTextArea('message');
  const messageDiv = document.createElement('div');
  messageDiv.setAttribute('class', 'messageDiv');
  messageDiv.appendChild(messageInput);

  // Submit button
  const submitButton = buildButton();

  // Add components to form
  form.appendChild(formHeader);
  form.appendChild(infoDiv);
  form.appendChild(messageDiv);
  form.appendChild(submitButton);

  // Add form to content
  content.appendChild(form);
};

export default buildMessageCard;
