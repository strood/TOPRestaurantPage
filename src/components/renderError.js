"use strict";

const renderError = () => {
  if (document.querySelector('.error-message')) {

  } else {

    let form = document.querySelector('.contact-form');
    let h4 = document.createElement('h4');
    h4.style.color = 'red';
    h4.setAttribute('class', 'error-message');
    h4.innerHTML = "Please fill out all fields.";
    form.appendChild(h4);
  }
}

export default renderError;
