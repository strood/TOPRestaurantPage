const renderFooter = (body) => {
  let container = document.createElement('footer');
  container.setAttribute('class', 'footer');
  let text = document.createElement('p');
  text.innerHTML = "© Tribe 2018. All rights reserved";
  container.appendChild(text);
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
