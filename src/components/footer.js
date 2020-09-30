"use strict";
const renderFooter = (body) => {
  let container = document.createElement('footer');
  container.setAttribute('class', 'footer');
  let text = document.createElement('p');
  text.innerHTML = "© Tribe 2020. All rights reserved";

  // Personal Tag
  let maker = document.createElement('p');
  maker.innerHTML = "Created by <a href='https://www.github.com/strood'>Strood <i class='fab fa-github-alt'></i></a>";

  container.appendChild(text);
  container.appendChild(maker);
  body.appendChild(container);

}

const changeFooterColor = (color) => {
  let container = document.querySelector('footer');
  container.style.color = color;
}

export {
  renderFooter,
  changeFooterColor,
}
