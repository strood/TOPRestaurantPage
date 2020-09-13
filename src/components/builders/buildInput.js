import {MDCTextField} from '@material/textfield';

const buildInput = (name) => {


  const label = document.createElement('label');
  label.setAttribute('class', 'mdc-text-field mdc-text-field--filled');

  const rippleSpan = document.createElement('span');
  rippleSpan.setAttribute('class', 'mdc-text-field__ripple');
  const input = document.createElement('input');
  input.setAttribute('class', 'mdc-text-field__input');
  input.setAttribute('type', 'text');
  const labelSpan = document.createElement('span');
  labelSpan.setAttribute('class', 'mdc-floating-label');
  // const lineRipple = document.createElement('span');
  // lineRipple.setAttribute('class', 'mdc-line-ripple');


  label.appendChild(rippleSpan);
  label.appendChild(input);
  label.appendChild(labelSpan);
  // label.appendChild(lineRipple);
  let textField = new MDCTextField(label);

  console.log(textField)

  return label

}

const buildTextArea = (name) => {

    const label = document.createElement('label');
    label.setAttribute('class', 'mdc-text-field mdc-text-field--filled mdc-text-field--textarea mdc-text-field--no-label');

    const rippleSpan = document.createElement('span');
    rippleSpan.setAttribute('class', 'mdc-text-field__ripple');
    const resizerSpan = document.createElement('span');
    resizerSpan.setAttribute('class', 'mdc-text-field__resizer');
    const input = document.createElement('input');
    input.setAttribute('class', 'mdc-text-field__input');
    input.setAttribute('rows', '8');
    input.setAttribute('cols', '40');
    const labelSpan = document.createElement('span');
    labelSpan.setAttribute('class', 'mdc-floating-label');
    // const lineRipple = document.createElement('span');
    // labelSpan.setAttribute('class', 'mdc-line-ripple');


    label.appendChild(rippleSpan);
    label.appendChild(resizerSpan);
    label.appendChild(input);
    label.appendChild(labelSpan);
    // label.appendChild(lineRipple);

    let textField = new MDCTextField(label);

    console.log(textField)

    return label
}

export {
  buildInput,
  buildTextArea,
};
