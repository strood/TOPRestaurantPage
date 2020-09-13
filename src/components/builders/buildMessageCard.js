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
  let emailInput = buildInput('email');
  let messageInput = buildTextArea('message');

  console.log(nameInput)
  console.log(emailInput)
  console.log(messageInput)


  form.appendChild(nameInput);
  form.appendChild(emailInput);
  form.appendChild(messageInput);

  content.appendChild(form);
  console.log(form)



}

export default buildMessageCard;
