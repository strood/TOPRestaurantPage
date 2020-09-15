import {
  colorPicker,
} from '../colors';
import {
  MDCTextField
} from '@material/textfield';
import {
  buildInput,
  buildTextArea,
} from './buildInput';

const buildMessageCard = (content) => {
  // Build and set component attributes
  let form = document.createElement('form');
  form.setAttribute('class', 'contact-form');

  let nameInput = buildInput('name');
  let nameDiv = document.createElement('div');
  let emailInput = buildInput('email');
  let emailDiv = document.createElement('div');
  let messageInput = buildTextArea('message');
  let messageDiv = document.createElement('div');

  console.log(nameInput)
  console.log(emailInput)
  console.log(messageInput)
  nameDiv.appendChild(nameInput);
  emailDiv.appendChild(emailInput);
  messageDiv.appendChild(messageInput);

  form.appendChild(nameDiv);
  form.appendChild(emailDiv);
  form.appendChild(messageDiv);

//   let testText = document.createElement('div');
//   form.innerHTML = `<label class="mdc-text-field mdc-text-field--filled">
//   <span class="mdc-text-field__ripple"></span>
//   <input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id">
//   <span class="mdc-floating-label" id="my-label-id">Hint text</span>
//   <span class="mdc-line-ripple"></span>
// </label>`;


  // form.appendChild(testText)

  content.appendChild(form);

  console.log(form)



}

export default buildMessageCard;
