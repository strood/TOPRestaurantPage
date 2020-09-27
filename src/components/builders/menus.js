"use strict";

const buildMenuTitle = (text) => {
  let menuArticle = document.querySelector('.menu-holder');
  let title = document.createElement('h2');
  title.innerHTML = text;
  menuArticle.appendChild(title);
}


export {
  buildMenuTitle,
}
