"use strict";

import Logo from '../img/logo.png';
const renderLogo = (content) => {
  let img = document.createElement('div');
  img.setAttribute('class', 'logo-div');
  img.style.backgroundImage = `url(${Logo})`;
  content.appendChild(img);
}


export default renderLogo;
