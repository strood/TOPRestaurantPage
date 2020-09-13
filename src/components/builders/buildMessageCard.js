import {
  colorPicker,
} from '../colors';
import {MDCTextField} from '@material/textfield';

const buildMessageCard = (content) => {
  // Build and set component attributes
  const label = document.createElement('label');
  label.setAttribute('class', 'mdc-text-field');
  const rippleSpan = document.createElement('span');
  rippleSpan.setAttribute('class', 'mdc-text-field__ripple');
  const input = document.createElement('input');
  input.setAttribute('class', '"mdc-text-field__input"');
  const labelSpan = document.createElement('span');
  labelSpan.setAttribute('class', 'mdc-floating-label');
  const lineRipple = document.createElement('span');
  lineRipple.setAttribute('class', 'mdc-line-ripple');

  label.appendChild(rippleSpan);
  label.appendChild(input);
  label.appendChild(labelSpan);
  label.appendChild(lineRipple);

  content.appendChild(label);
  console.log(label)
  const textField = new MDCTextField(label);


}

export default buildMessageCard;
