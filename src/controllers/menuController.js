"use strict";
// Imports
// import renderHours from '../pages/renderHours';
// import renderMenus from '../pages/renderMenus';
// import renderManifesto from '../pages/renderManifesto';
// import renderContact from '../pages/renderContact';
import renderBrunch from '../menus/renderBrunch';
import renderLunch from '../menus/renderLunch';
import renderSmall from '../menus/renderSmall';
import renderBig from '../menus/renderBig';
import renderFlat from '../menus/renderFlat';
import renderCoffee from '../menus/renderCoffee';

import refreshMenu from '/refreshMenu';
// import clearContent from './clearContent';

// Given the index of the page, call approproate render function, passing
// in the main body content it will render to.
const displayController = (index) => {

  // Reset #content for new page, returns our new content section
  const body = document.querySelector('body');
  let newContent = clearContent(body);

  // Scroll to top of page
  window.scrollTo(0, 0);

  // Render page based on index, update url to tab name
  switch (index) {
    case (0):
      renderHours(newContent);
      updateURL(index);
      break;
    case (1):
      renderMenus(newContent);
      updateURL(index);
      break;
    case (2):
      renderManifesto(newContent);
      updateURL(index);
      break;
    case (3):
      renderContact(newContent);
      updateURL(index);
      break;
  }
}

export default menuController;