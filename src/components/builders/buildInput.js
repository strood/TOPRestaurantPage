"use strict";

const buildInput = (name) => {
	// build components and put into holder
  const holder = document.createElement('div');
  holder.setAttribute('class', `input-group`);
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', name);
  input.setAttribute('class', `form-control ${name}-input`);
  input.setAttribute('required', true);

  const label = document.createElement('label');
  label.innerHTML = name;

  input.addEventListener('focusout', (e) => {
    if(e.target.textLength > 0) {
      e.target.setAttribute('class', 'form-control has-value');
    } else {
      e.target.setAttribute('class', 'form-control');
    }
  })

  holder.appendChild(input);
  holder.appendChild(label);

  return holder;
}

const buildTextArea = (name) => {

  const holder = document.createElement('div');
  holder.setAttribute('class', 'input-group');
  const textarea = document.createElement('textarea');
  textarea.setAttribute('type', 'text');
  textarea.setAttribute('name', name);
  textarea.setAttribute('class', 'form-control message-input');
  textarea.setAttribute('required', true);

  const label = document.createElement('label');
  label.innerHTML = name;

  textarea.addEventListener('focusout', (e) => {
    if(e.target.textLength > 0) {
      e.target.setAttribute('class', 'form-control has-value');
    } else {
      e.target.setAttribute('class', 'form-control');
    }
  })

  holder.appendChild(textarea);
  holder.appendChild(label);

  return holder;
}

export {
  buildInput,
  buildTextArea,
};
